# AdMob console setup —2026-11-07

Created and visibly verified in the existing AdMob account:

- Android app: Nurbi’s Garden (not yet linked to a store).
- App ID: ca-app-pub-2541162065593575~6044976588.
- Rewarded unit: Nurbi - Extra Hint (Rewarded), ca-app-pub-2541162065593575/5451923520, reward1 Hint.
- Interstitial unit: Nurbi - Puzzle Transition (Interstitial), ca-app-pub-2541162065593575/9535684947.

Public application/ad-unit identifiers are saved in android/admob-units.json; these are not authentication secrets. Both units are listed in the console. No banner or app-open unit was created. No emails were sent.

User confirmed both legal declarations and app creation on2026-11-07. Created and verified the new Play Console dashboard:

- Store name: Nurbi’s Garden.
- Reserved package: com.thinkheim.nurbisgarden.
- Console app ID:4976351554927399800.
- Dashboard: https://play.google.com/console/u/1/developers/5086445361010659394/app/4976351554927399800/app-dashboard
- Defaults: English/en-US, game, free.

No AAB/APK has been uploaded to Play and the app has not been published there.

## Native integration — 2026-11-07

- Native package/namespace is now `com.thinkheim.nurbisgarden`; launcher label remains Nurbi’s Garden.
- Mobile Ads 25.5.0 and UMP 4.0.0 are packaged. No Firebase, mediation adapters, banners or app-open ads.
- UMP refreshes at each Activity launch. SDK initialization/loading is gated by `canRequestAds()`, never by a homemade stored consent flag. Privacy options are available in About when UMP requires them.
- Native JavaScript bridge is attached only to the asset-only WebView. Remote pages/subframes cannot load inside it; explicit HTTPS links open externally. JSON callbacks reach the prepared same-origin game frame and root. Request IDs isolate pending results across frames.
- Debug builds use Google's dedicated rewarded/interstitial test units. Both build types use Nurbi's actual app ID so UMP can find its published message. Release uses the recorded real units. Requests use NPA=1 and content rating G; this is not a declaration of the Play target audience.
- Existing ad policy is unchanged: three free hints/puzzle, one rewarded video per extra hint. Credit is granted only after the SDK earned-reward callback AND ad dismissal; cancellation/no-fill/failure grants nothing. Interstitials use the existing unique-completion grace, round/time thresholds, and garden protections.
- Native preloads, guards duplicate/background show requests, discards stale ads after55min, retries failed loads with capped backoff, and invalidates in-flight preloads when privacy choices change. No forced delay while waiting for ad loading.
- Published an EU-regulations UMP message for Nurbi only, default English plus German. Direct Do not consent is enabled for all countries; Manage options remains available. Existing Thinkheim message untouched. Google indicates propagation can take up to one hour.
- Dedicated bilingual public policy: https://heinrichheinrichson-bit.github.io/PROJECT_LOGIC/nurbis-garden-privacy.html . Canonical copy is `public/privacy.html`. Published via existing PROJECT_LOGIC Pages workflow, website commit83dfcda. About links to the public page; no puzzle navigation/reset is needed in native Android.

## Validation and remaining release work

Full npm suite passed; dedicated provider and economy tests cover cancellation, unavailability and exactly-one successful reward. Debug build/lint/signature succeeded; manifest/package label and offline asset membership checked. Browser About link/localization checked. **No attached Android device/emulator: SDK rendering, consent and reward lifecycle on a real phone still require a smoke test.** Browser tests do not prove native ad delivery.

`releases/Nurbis-Garden-0.1.28-test.apk` (versionCode29) is a debug/test-ad build, not the signed Play AAB. Release signing, Play Data safety/target audience/store requirements, AdMob store linking/app review and signed AAB upload remain pending. Do not treat this integration as approval or live-delivery verification.

**Tester data:** the new package installs separately from old `app.slink.garden` test APKs. Old data remains in the old app; it is not automatically copied into the new sandbox. Do not uninstall/clear the old app or claim its progress has migrated. Existing JS storage keys and puzzle IDs are preserved.

Official references: https://developers.google.com/admob/android/quick-start , https://developers.google.com/admob/android/privacy , https://developers.google.com/admob/android/rewarded , https://developers.google.com/admob/android/privacy/play-data-disclosure .
