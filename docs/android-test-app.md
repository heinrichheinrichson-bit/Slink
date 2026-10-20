# Android test app

Deliverable: releases/SLINK-0.1.23-test.apk (signed debug/test build, applicationId app.slink.garden, versionCode24, versionName0.1.23-test). Android8.1/API27 or later; built with compileSDK36 and targetSDK35. Intended for the user's Galaxy S22 playtest. No actual device installation/runtime test was performed here.

The app bundles the current menu, all1200 puzzles in29 gardens and existing renderers/assets locally. It starts on the home screen. A minimal hardware-accelerated native Android WebView hosts the existing app. Requests map only the reserved HTTPS appassets.androidplatform.net/assets/ origin to packaged AssetManager files, using a native WebViewClient interceptor. Path traversal and external requests are rejected. File/content access and mixed content are disabled; DOM storage is enabled. No INTERNET permission is requested. VIBRATE supports the existing optional haptics. Same-origin local hosting follows the Android guidance: https://developer.android.com/develop/ui/views/layout/webapps/load-local-content . There is no localhost/server dependency or third-party web runtime.

Native status/navigation insets are applied to the content frame, leaving the CSS viewport the actually usable height. Back follows WebView history or closes at the root. Progress and settings are local to this app and persist across launches. Desktop browser progress/settings do not automatically migrate to the APK. Keep the same applicationId/signing identity for future updates; increment versionCode. The machine's normal Android debug key is used and never committed. This APK is for installation/testing, not a Play Store release.

Rebuild on Windows with Android SDK, Android Studio bundled JDK (or Java17+) and Node: powershell -File scripts/build-android.ps1. Pass -Offline when dependencies are cached. The script builds web bundles, assembles Android, runs lint, checks APK signature and copies the versioned APK into releases/. Android/local.properties, build caches and signing keys are ignored. Gradle wrapper8.14.3 and Android plugin8.13.2 are versioned. APKs only in releases/ are intentionally backed up to the user-designated GitHub repo.

Validation: npm test passed; web build passed; assembleDebug/lintDebug passed (0errors,4nonfatal warnings); apksigner verified APK v2 signature; ZIP integrity and15 essential assets match the current source. Browser tested three consecutive Continue/Home cycles. Home fits360×700 and360×640 (clientHeight equals scrollHeight); no scrolling/clipped controls. Screenshot docs/screenshots/home-phone-fit.png. Physical S22 performance, touch feel and native system-bar appearance remain to be tested on that phone.

Menu changes in this build: background-study and home-friend controls moved into gear settings; bottom Gartenfreund slot retained but disabled/reserved. Home uses a flexible scene height and compact rules, with catalogue pages retaining scrolling. Decorative canvas/halo layers cannot intercept Continue clicks; home rendering capped at12.5fps. Earlier intermittent failure was not reproduced in fresh navigation tests, so it is not claimed to have a conclusively diagnosed root cause.


Update0.1.1: menu background now validated/persisted under slink-menu-surface-v1; main game includes approved temporary predecessor meadow brightening with enabled/strength preferences and saved1–15s completion delay. completion-settings.js is explicitly bundled in APK. Browser verified orange survives reload and sand survives game→home navigation. Assemble/lint/signature checks passed; new and previous APK share certificate SHA2567034a8d440bd6fc9e7bb6bf2b1b1e759b7aa8309339e6263cc908608ed5e5bcf. ZIP integrity and8 critical assets byte-equal current public files. APK SHA2564a55dd7f2cf9fb29e8ecd3a17a16f9425006e6a24736b6d69e5b90dce3469daa. Physical phone update/install verification remains pending.


Update0.1.2: approved ivory buttons are baked directly into main HTML by scripts/bake-game-controls.mjs during build; no runtime skin replacement or old initial button classes/icons. Initial fake Level01/0-of16 values replaced by neutral loading text. Main3D render skips all SVG graphical construction, retaining empty board element for sizing/keyboard. Legacy drawing is still used by non3D archives or explicit renderer failure. Shared CSS/studies preserved. Full existing npm test passed, targeted startup-cleanup test additionally checks zeroSVG construction and working fallback. Browser verified emptySVG, labels, hint/undo and keyboard; build/lint/signature/ZIP checks passed. APK SHA256 FC2E4DF68979069A11E4A31105E9973D54EDE603D8A21FEA91733EE7D27FC7E9. No real S22 speed measurement performed.


Update0.1.3: startup changes documented in performance-startup.md. APK SHA2563E03B29C06D3468BF5FF923FF41514C85779352E9E8579479D70A485606D58B1. Offline build/lint/signature/ZIP and current asset matching passed. S22 timing comparison pending.


Update0.1.4: see touch-and-prewarm.md. SHA256 E13B1477A4F1D5B88D5522A5608023A1F8979818F18016A0A71E22F00843699B. Build/lint/signature/archive/assets verified; native S22 touch feel and prepared-frame history behaviour need real device playtest.


Update0.1.5: see loading correction in touch-and-prewarm.md. SHA256 B1997572AC3A5043738FF210E3260D62A5617BEE7634DC2963418460AF0EC1FE. Build/lint/signature, archive/current assets checked. Native device runtime/timings not verified.


Update0.1.6: next-level-preparation.md. SHA256 AC009E9BC600C43DAE92F92CECE73AEBCAB9C0CC7BB8BE3CEF92302AF9ADA419. Build/lint/signature/archive/current assets verified.


Update0.1.7: keep the parent menu and its home renderer alive while playing. Trusted child Home messaging and history Back pause/hide the game and restore the existing shell; progress and category focus refresh from stable IDs. No menu navigation/reload on return. Lightweight menu-shell.js fills progress, Continue subtitle and gear handlers before the deferred 3D bundle. Bundled native-rendered home-preview.webp covers the first uncached launch; matching personalized cached previews still take precedence. WebP is explicitly packaged and served with image MIME. Visual designs and fur buffers unchanged. Browser Continue→Home and Continue→Back verified; physical S22 timing remains pending. SHA256 1FDC6303941F80EB5BFC4899DD8DEFBEF5D4951017AD29B48FC757E216E3D33C.


Update0.1.8: offline advertising policy, persistent three-free-hints-per-puzzle, explicit test-ad option and ready/visible stopwatch. See monetisation-and-stopwatch.md. No actual ad or billing SDK. SHA256 E821157EC4326A2E82AAFA1F7E8076443C6598C68C620629A36750D271ADAC7A.


Update0.1.9: gameplay layout now uses the available viewport height and reserves fixed UI rows before allocating the remaining space to the board. Removed effective inline fixed-height budget via scoped CSS max-width override; SVG/canvas share the actual remaining rectangle, and existing3D camera fit preserves tile shape. Dialogs/catalogue remain scrollable. Browser reproduced37px overflow at360x640 before fix. After fix scrollHeight equals innerHeight at360x640/700/780, footer within viewport. Verified small fence board and41-cell late board; screenshot screenshots/game-phone-fit.png. Native S22 not directly tested. SHA256 4926B7D15ECBF9195F17902D66D8152F3DEE70099165286028CF8C9C00FEF2D0.


## 0.1.10-test (versionCode 11)

Includes current browser work and full-head rise followed by gentle joy on the final cell. In-game gear > Abschlussanimation · Test provides enabled toggle, zoom100–160%, duration0.3–4s, delay0–3s and reset. Defaults145%/1.8s/0.6s. Preferences persist on device. Camera orientation and lighting stay unchanged; animation enforces minimum7.4s before card, longer chosen delays respected. Same app.slink.garden/debug signing identity; update existing install without uninstalling. Built offline with lint and signature verification. No physical S22 performance claim.


## 0.1.11-test (versionCode 12)

Finale zoom now eases the view centre to the final creature face instead of retaining its former screen position. Camera orientation/lighting and saved strength/duration/delay unchanged.100% retains unmodified view. Offline build/lint/signature verified.


## 0.1.12-test (versionCode 13)

Includes integrated14 meadow variants/40% clustered floral distribution and optional animated fence birds (73/100 fence puzzles, maxone). Species follows fence design. Ground visits select nearby walkable non-goal fields with quiet meadow, use offcentre positions, variable3.5–8s stays/look/pecks and early return for current/adjacent logical player path. Actual growing-ground height tracked. Long quiet gaps; no automatic pure flutter. Prior head-lift/joy/centred zoom settings retained. Package/signing unchanged; offline assemble/lint/signature verified. No physical-phone performance claim.

Update0.1.13: expanded catalogue and developer unlimited hints are packaged. Unlimited mode uses separate main/preview local settings, displays ∞, skips reward prompts and interstitial checks without spending normal credits. Turning it off restores saved limited credits. Default remains off. Tested500 uninterrupted hint approvals, persistence/reversion and preview separation. All three catalogue sources and economy/settings files match APK assets byte-for-byte. APK SHA256 E17E54DA9B35DCFE9BABBADB3190E07C685F9EE8273766FA15220A27BB5B7812.

Update0.1.14: selected sounds and persistent audio settings included; APK asset verification matches current HTML/game/audio modules/renderer and selected originals, no noncommercial Happy Harp. Build/lint/apksigner passed; certificate unchanged. Browser checks passed mute persistence, full actual puzzle sounds/completion, live volume changes preserving route; physical phone sound judgement remains pending. SHA256 1B8EC4DE6D7358FCD034B3B9B6763FC3B0A395B23615C3D9517A78CC392C1BB4.

Update0.1.15: editable saved game-screen title, preview-key isolation, long-title fit and SLINK reset. Browser checked live route unchanged3/15, name survives reload,32-character text fits heading and no errors. Build/lint/signature and packaged HTML/module source equality pass. SHA256 E9C3FA46858E938A0E7078490FD2C308737CD6AAB6557D5B1A4D16FB757CB078.

Update0.1.16: solvable-prefix hint recovery and synchronized creature rollback, including interrupted recovery/rapid undo. Existing1200-puzzle suite passed. Offline assemble/lint and signature checks passed; packaged main game and renderer match current source. Physical device testing pending. APK SHA256 60CE08D9B7A1D5BD89FAFE3FD60F594AFDF9A89005701E36BC27B797F30CD8CE.

Update0.1.17: Nurbi’s Garden label/icon and B wordmark without antennae. Same applicationId and signing key preserves update compatibility. Build/lint/signature/package checks passed; phone installation not performed. SHA256 85788850A1C9A6E2FCA057C2157C21F1964C1EC3F6DBDC175FE4E24E837837AA.

Update0.1.18: removed custom-title test setting. Fixed approved logo is independent of previous saved names. APK verified to exclude title-settings script, include current logo/HTML/CSS. Build/lint/signature passed. SHA256 F7BB8C665613E27AC6AD08909B471166157CF83B8E91F956012F37B1C6C4A197. Physical device result pending.

Update0.1.19: simplified completion copy and tighter540px card, preserved original reward scene. Browser real completion tested360x740; build/lint/signature/packaged HTML+CSS verified. SHA256 9054C74E90FB9DCCE810CBADFE8AEBB7466CB17207C4B68089EA6BDAB487B56B.

Update0.1.20: simplified garden selector and automatic first-unsolved focus in both views; fully solved categories have no next marker. Browser checked existing24/26 garden with earlier gap21 and all-solved30/30 category, phone360x740. Catalogue unchanged/unlocked. Build/lint/signature/packaged files passed. SHA256 C38271589EA0A6DD70CDF16A32D04E36544E700058C12AE30466CABF98DD8A04. Phone install not performed.

Update0.1.21: garden journal/daily/bookmarks/statistics/cosmetic rewards and tester unlock. See garden-journal.md. Existing full test suite and focused journey/economy tests passed. Offline assemble/lint/signature and ZIP asset equality verified. Home fits360x640 in browser. Physical phone installation remains pending. SHA256 EB07DB1E1EF92BDCD2AA2BB57755DB47D84A0A50D206E0D2F030051BE5D2C3E6.

Update0.1.22: separate11game backgrounds/menu restriction, whole-model preview and daily home exit. Targeted journey/background tests and real browser theme change preserving2/15route and reload persistence passed. Build/lint/signature and ZIP source/image equality passed. Physical device testing pending. SHA256 55E62BE94D1DD282041D746A940FE9EF00F12B2CDF3B73C1CF120D4BCCAA2765.

Update0.1.23: background preview read-only example and commit/cancel dialog. Existing native back delegates to WebView history; browser back tested, physical back testing pending. Build/lint/signature/ZIP assets verified. SHA256 08CC1E9ABCA95D618BDC79614333B22FB6AF67CFA68E7139E45875FEE7F27339.
