# Release preparation — 24 November 2026

User asked to proceed toward release and opened Play Console/AdMob. This step prepares the production-access application and a signed production bundle; no public rollout or Google approval is claimed.

## Production AAB

`releases/Nurbis-Garden-0.1.33.aab`, production ID `com.thinkheim.nurbisgarden`, version code 34, version name 0.1.33. No test/transfer suffix; BuildConfig DEBUG=false. Target/compile SDK 36, minimum SDK 27.

SHA-256: `B4DF58219F10ABE69F113497587AC0498DFC0A2C7041DE8F9AF0F18C34993C45`.

Built through build-aab.ps1 with the existing upload key; release build/lint and jarsigner succeeded. Upload certificate matches the existing 0.1.30 AAB: SHA-256 `4D45EA913B7505487C44B08E484F19AB0EDB343F7E4F7DE184C92BC689467AC0`. Bundletool 1.18.3 validation passed; manifest dump confirms production identity/version and real AdMob application ID. No android:debuggable=true. All 111 applicable packaged web assets match current public source. Recovery fixture and browser review wrapper excluded. Existing complete npm test result for the same source is recorded in phone-test-0.1.33.md. No source changes during this preparation.

Compiled release NativeAds methods contain the real rewarded and interstitial IDs (5451923520 and 9535684947), not Google's debug test IDs. AdMob app ID `ca-app-pub-2541162065593575~6044976588` matches the console. Signing credentials remain outside Git and were cleared from the build environment.

## Play Console

Nurbi app dashboard shows production inactive and all closed-test prerequisites fulfilled. The production-access form has been filled through its final step, with user-confirmed recruitment difficulty Easy, written-report evidence and actual implemented changes. No claim that all features or requested devices were individually tested. Install forecast Unknown rather than unsupported numbers. Exact prepared text: production-access-2026-11-24.md.

The final Übernehmen action has not been activated. The AAB is prepared locally, not uploaded to a new release track. Production release cannot yet be created while access is pending. Do not describe a production application as a published release.

## AdMob

Existing Nurbi app 6044976588 has the correct two active ad units, matching compiled release IDs. European consent message **Nurbi Garden - Datenschutz** is **Published**, English plus German, last changed 7 November 2026. UMP is already included in the app.

However the app list shows **Review required / Limited ad serving**, store not linked, package field blank. The claim-app page detects `com.thinkheim.nurbisgarden` with **Setup incomplete**. Attempted to associate with the existing Nurbi app rather than create a duplicate. Google's store lookup returned **No matching apps found** and Next remained disabled. Nothing was saved or duplicated. Final store association/app review remains outstanding; retry when the listing can be found. Do not assert unrestricted ad readiness.

No advertising configuration, consent switches, payment settings or other apps were changed. Test reports and personal tester addresses are not copied to Git.
