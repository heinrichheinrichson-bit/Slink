# AdMob console setup —2026-11-07

Created and visibly verified in the existing AdMob account:

- Android app: Nurbi’s Garden (not yet linked to a store).
- App ID: ca-app-pub-2541162065593575~6044976588.
- Rewarded unit: Nurbi - Extra Hint (Rewarded), ca-app-pub-2541162065593575/5451923520, reward1 Hint.
- Interstitial unit: Nurbi - Puzzle Transition (Interstitial), ca-app-pub-2541162065593575/9535684947.

Public application/ad-unit identifiers are saved in android/admob-units.json; these are not authentication secrets. Both units are listed in the console. No banner or app-open unit was created. No emails were sent.

User corrected the intended Play identity to Nurbi’s Garden, without Slink. The unsubmitted form now uses Nurbi’s Garden and proposed package com.thinkheim.nurbisgarden (availability verified), English/en-US, game, free. Existing Android test APKs still use app.slink.garden; no native package migration has been made. A new package installs separately and requires a progress migration decision before device transition. Final creation is pending direct user confirmation of the developer-program-policy and US-export declarations. Neither checkbox was checked; nothing was published or uploaded.

SDK integration, consent-message setup, release signing and store release preparation remain outstanding. The existing APK0.1.27 does not yet contain a native ad SDK. Do not claim live advertising is integrated based on console setup alone.
