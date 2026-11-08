# Nurbi’s Garden: first Play release

Prepared 2026-11-07. Visible/store name: **Nurbi’s Garden**. Package: `com.thinkheim.nurbisgarden`.

## Signed bundle

`releases/Nurbis-Garden-0.1.30.aab`, versionCode31, target/compile SDK36, min SDK27. SHA256:

`EBBA7E3575FC01A4DB244A71E410E16D55CF3B2363E21BAFC3D285CF85897081`

Release Gradle build/lint, jarsigner verification and bundletool validation passed. Manifest confirmed non-debuggable, real AdMob app ID; compiled release provider confirmed real rewarded/interstitial units. No native shared libraries. Android33+ Back uses OnBackInvokedDispatcher; the legacy callback remains only for older Android versions.

Build with `./scripts/build-aab.ps1 -Offline`. The script imports the current Windows user's DPAPI-protected credentials from `%USERPROFILE%/.android/keystores/nurbis-garden`, signs through temporary environment variables, clears those variables afterwards, verifies the signature and copies a versioned deliverable. Credentials/keystore are outside Git. Do not replace this upload key when updating the existing Play app.

## Console setup verified

App4976351554927399800 in the existing Thinkheim developer account. Privacy policy, app access without login, advertising declaration, target audience13–15/16–17/18+, no government/financial/health functions and existing trader status are saved.

User explicitly authorized IARC terms and questionnaire. IARC status **Completed**, PEGI3 / USK0 / ESRB Everyone. This content rating is distinct from the intended13+ audience.

Data safety declares approximate location, app interactions, crash logs, diagnostics, other app performance data and device/other identifiers as collected/shared for advertising, analytics and fraud prevention, encrypted in transit. No account creation/login, no developer-hosted deletion mechanism. SDK disclosure source: https://developers.google.com/admob/android/privacy/play-data-disclosure .

Category: game/puzzle (German console: Geduldsspiele). Public support: thinkheim.support@gmail.com. English and German store text saved, approved icon/feature uploaded. Actual360×640 screenshots in `assets/store` show home, path selection, an actually played puzzle and completion. Brand icon and feature declared AI-generated. Listing state **Ready for review**, not submitted/published.

## Pending

Closed Alpha draft created, track4701233208318890947, release1. AAB successfully uploaded and processed; console shows31 (0.1.30), minSDK27, targetSDK36. EN/DE release notes supplied. No review submission or rollout.

User will create the tester list later. Do not reuse other apps' lists without approval. No testers selected. User approved all countries for the closed track; all178 countries/regions visibly saved and verified2026-11-08. The14-day requirement has not started. AdMob store linking/review and actual real-ad delivery remain pending.

Release preview initially reported missing countries (blocking), no testers (warning), and no deobfuscation mapping (warning). Mapping does not apply to this non-minified release. After country selection the preview shows only the two warnings, no blocking error; release saved. Do not submit the test before the user provides testers.

The user confirmed the manual backup/transfer phone test worked. Play-signed installation cannot update a debug-signed APK with the same package: export from the test app before replacing it, then restore into the Play version. Keep the old transfer app until migration is verified.

Full npm test suite passed again for this release. Build helper PowerShell syntax/version parsing and git diff whitespace checks passed.
