param([switch]$Offline)
$ErrorActionPreference='Stop'
$projectRoot=Split-Path $PSScriptRoot -Parent
$originalJavaHome=$env:JAVA_HOME
try {
 $studioJdk=Join-Path $env:ProgramFiles 'Android/Android Studio/jbr'
 if(Test-Path (Join-Path $studioJdk 'bin/java.exe')){$env:JAVA_HOME=$studioJdk}
 if(-not $env:JAVA_HOME){throw 'A Java17+ JDK is required (Android Studio bundled JDK is supported).'}
 $sdkRoot=$env:ANDROID_HOME
 if(-not $sdkRoot){$sdkRoot=$env:ANDROID_SDK_ROOT}
 if(-not $sdkRoot){$sdkRoot=Join-Path $env:LOCALAPPDATA 'Android/Sdk'}
 if(-not(Test-Path $sdkRoot)){throw 'Android SDK not found. Set ANDROID_HOME.'}
 Set-Content -LiteralPath (Join-Path $projectRoot 'android/local.properties') -Value ('sdk.dir='+$sdkRoot.Replace('\','/').Replace(':','\:')) -Encoding ascii
 Push-Location $projectRoot
 try {
  $npmCommand=Get-Command npm.cmd -ErrorAction SilentlyContinue
  $npmExe=if($npmCommand){$npmCommand.Source}else{Join-Path $env:ProgramFiles 'nodejs/npm.cmd'}
  & $npmExe run build
  if($LASTEXITCODE -ne 0){throw 'Web build failed.'}
  $gradleArguments=@('-p','android','assembleDebug','lintDebug')
  if($Offline){$gradleArguments+= '--offline'}
  & './android/gradlew.bat' @gradleArguments
  if($LASTEXITCODE -ne 0){throw 'Android build/lint failed.'}
  $apk=Join-Path $projectRoot 'android/app/build/outputs/apk/debug/app-debug.apk'
  $tools=Get-ChildItem (Join-Path $sdkRoot 'build-tools') -Directory | Sort-Object {[version]$_.Name} -Descending | Select-Object -First 1
  & (Join-Path $tools.FullName 'apksigner.bat') verify $apk
  if($LASTEXITCODE -ne 0){throw 'APK signature verification failed.'}
  $metadata=Get-Content (Join-Path $projectRoot 'android/app/build/outputs/apk/debug/output-metadata.json') -Raw | ConvertFrom-Json
  $version=$metadata.elements[0].versionName
  if($version -notmatch '^[A-Za-z0-9.-]+$'){throw 'Invalid versionName.'}
  $releaseDir=Join-Path $projectRoot 'releases'
  New-Item -ItemType Directory -Force $releaseDir | Out-Null
  $deliverable=Join-Path $releaseDir ('SLINK-'+$version+'.apk')
  Copy-Item -LiteralPath $apk -Destination $deliverable -Force
  Write-Output $deliverable
  Write-Output ((Get-FileHash $deliverable -Algorithm SHA256).Hash)
 } finally { Pop-Location }
} finally {$env:JAVA_HOME=$originalJavaHome}
