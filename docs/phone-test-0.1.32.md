# Phone test 0.1.32

User approved the revised learning gardens and requested an APK. The old text-card introduction is replaced by the three playable lessons, with the approved concise instructions and finger gesture repeating until play begins. The actual puzzle, catalogue progress, hints and rewards are not modified by the lessons.

## Installation and access

Install `releases/Nurbis-Garden-0.1.32-test.apk` over **Nurbi’s Garden · Test** 0.1.31-test. Same application ID `com.thinkheim.nurbisgarden.test` and debug signing identity; version code 33. Keep the existing app installed to retain its data. The separate Play Store app remains unchanged.

Because this tester already has progress, automatic introduction is suppressed. Open a puzzle → Settings → How to play → View introduction (German: Einstellungen → So spielst du → Einführung ansehen).

For a first install of the separate test app, optionally transfer the backup from the existing Play app using Sichern & übertragen. No uninstall is needed.

## Integration

The introduction runs in a same-origin dialog frame. Parent game animation and timer pause. The child may request completion only through an origin- and source-validated message. Completion, skip or Android Back closes the introduction, unloads the frame and restores the previous pause state; underlying open dialogs still pause the timer. Help replay remains available. Existing version-1 finished flags and solved catalogue progress retain their suppression behavior; new completion writes version 2 under the same backed-up key. Preview does not trigger automatic introduction.

Lesson files now appear in the Android asset allowlist; the browser-only reviewer wrapper remains excluded. No automatic menu navigation occurs inside the embedded lesson. German/English use the normal language preference. Reduced motion disables the hand and settles the scene.

## Verification

Android assembleDebug/lintDebug succeeded; APK signature verified. Packaged manifest confirms the test identity/version, and all introduction/localization assets match source byte for byte. Browser Help replay showed the embedded English lesson in a normal puzzle. Targeted first-steps integration, lesson rules, localization, native Back, prewarm, backup, startup/fallback and economy checks passed. Full suite result recorded after completion below. Physical phone testing remains for the user.

SHA-256: 851713598ABCCF15674B2960EBCA136A7BE02B2849E721E2C8DA5C0B172D3436.

Full npm test passed. APK 0.1.31-test and 0.1.32-test have identical signing certificate SHA-256 (7034a8d440bd6fc9e7bb6bf2b1b1e759b7aa8309339e6263cc908608ed5e5bcf), confirming update compatibility.

