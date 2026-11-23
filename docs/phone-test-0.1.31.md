# Phone test 0.1.31

Includes the introduction and all fixes documented in qa-fixes-2026-11-23.md.

Build with `scripts/build-android.ps1 -Offline -PhoneTest`. The opt-in debug package is `com.thinkheim.nurbisgarden.test`, labeled **Nurbi’s Garden · Test**, version 0.1.31-test (32). It installs alongside the Play version because a locally debug-signed APK cannot update a Google Play-signed installation. Production identity is unchanged. PhoneTest and LegacyTransfer are mutually exclusive, and test packages cannot be built as release artifacts.

## Installation and saved progress

1. In the existing app, open Settings → Sichern & übertragen → Datei sichern.
2. Install `releases/Nurbis-Garden-0.1.31-test.apk`; open **Nurbi’s Garden · Test**.
3. In its Settings → Sichern & übertragen → Datei öffnen, select the backup, check it and choose Wiederherstellen.

The existing app and its saved progress remain intact. The test app has independent storage; progress does not synchronize automatically. No uninstall is required. This debug build uses test ad units. It is not a new Play release or AAB.

## Focused phone checks

- Leave a partly solved puzzle, close/reopen the app and verify route and time resume; repeat after using a hint.
- Open Help above Settings and use Android Back: only the top dialog should close each time.
- Replay the introduction through Help. Imported existing progress intentionally suppresses automatic first-run introduction.
- With reduced system motion enabled, check that flowers appear in their settled state.

Desktop checks and Android lint do not establish physical phone behavior; these checks remain for the tester.

## Build verification

APK built successfully with assembleDebug and lintDebug; signature verified. Package/version/label checked from the packaged manifest. Puzzle sessions, native Back, introduction, main game, renderer, economy and ad policy assets match current sources exactly; developer recovery tools excluded.

SHA-256: 04F292B765C0210F6674D8038A68B971844437D372018A02493236C52062C3EF.

