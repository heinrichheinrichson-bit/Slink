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

No AAB/APK was uploaded and nothing was published. Existing native test APKs still use app.slink.garden; future release integration must switch to the approved com.thinkheim.nurbisgarden identity. This installs separately, leaving the old test app and its local progress intact. Account creation alone does not migrate native code or saved data.

SDK integration, consent-message setup, release signing and store release preparation remain outstanding. The existing APK0.1.27 does not yet contain a native ad SDK. Do not claim live advertising is integrated based on console setup alone.
