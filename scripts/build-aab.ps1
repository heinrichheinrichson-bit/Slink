param([switch]$Offline,[string]$KeyDirectory)
$ErrorActionPreference='Stop'
$projectRoot=Split-Path $PSScriptRoot -Parent
$originalJavaHome=$env:JAVA_HOME
if(-not $KeyDirectory){$KeyDirectory=Join-Path $env:USERPROFILE '.android/keystores/nurbis-garden'}
try{
 $env:JAVA_HOME=Join-Path $env:ProgramFiles 'Android/Android Studio/jbr'
 $credential=Import-Clixml -LiteralPath (Join-Path $KeyDirectory 'upload.credentials.xml')
 $env:NURBI_UPLOAD_KEYSTORE=Join-Path $KeyDirectory 'nurbi-upload.jks'
 $env:NURBI_UPLOAD_KEY_ALIAS=$credential.UserName
 $env:NURBI_UPLOAD_STORE_PASSWORD=$credential.GetNetworkCredential().Password
 $env:NURBI_UPLOAD_KEY_PASSWORD=$env:NURBI_UPLOAD_STORE_PASSWORD
 if(-not(Test-Path $env:NURBI_UPLOAD_KEYSTORE)){throw 'Nurbi upload keystore not found.'}
 Push-Location $projectRoot
 try{
  & (Join-Path $env:ProgramFiles 'nodejs/npm.cmd') run build
  if($LASTEXITCODE -ne 0){throw 'Web build failed.'}
  $argsList=@('-p','android','bundleRelease','lintRelease');if($Offline){$argsList+='--offline'}
  & './android/gradlew.bat' @argsList
  if($LASTEXITCODE -ne 0){throw 'Release build or lint failed.'}
  $bundle=Join-Path $projectRoot 'android/app/build/outputs/bundle/release/app-release.aab'
  & (Join-Path $env:JAVA_HOME 'bin/jarsigner.exe') -verify $bundle
  if($LASTEXITCODE -ne 0){throw 'AAB signature check failed.'}
  $gradleSource=Get-Content -LiteralPath (Join-Path $projectRoot 'android/app/build.gradle') -Raw
  $versionMatch=[regex]::Match($gradleSource,"versionName \(legacyTransfer \? '[^']+' : '([^']+)'\)")
  if(-not $versionMatch.Success){throw 'Could not read release versionName.'}
  $deliverable=Join-Path $projectRoot ('releases/Nurbis-Garden-'+$versionMatch.Groups[1].Value+'.aab')
  Copy-Item -LiteralPath $bundle -Destination $deliverable -Force
  Write-Output $deliverable
  Write-Output ((Get-FileHash -LiteralPath $deliverable -Algorithm SHA256).Hash)
 }finally{Pop-Location}
}finally{
 foreach($name in @('NURBI_UPLOAD_KEYSTORE','NURBI_UPLOAD_KEY_ALIAS','NURBI_UPLOAD_STORE_PASSWORD','NURBI_UPLOAD_KEY_PASSWORD')){Remove-Item -LiteralPath ('Env:'+ $name) -ErrorAction SilentlyContinue}
 $env:JAVA_HOME=$originalJavaHome
}
