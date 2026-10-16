# Android test app

Deliverable: releases/SLINK-0.1.9-test.apk (signed debug/test build, applicationId app.slink.garden, versionCode10, versionName0.1.9-test). Android8.1/API27 or later; built with compileSDK36 and targetSDK35. Intended for the user's Galaxy S22 playtest. No actual device installation/runtime test was performed here.

The app bundles the current menu, all600 puzzles and existing renderers/assets locally. It starts on the home screen. A minimal hardware-accelerated native Android WebView hosts the existing app. Requests map only the reserved HTTPS appassets.androidplatform.net/assets/ origin to packaged AssetManager files, using a native WebViewClient interceptor. Path traversal and external requests are rejected. File/content access and mixed content are disabled; DOM storage is enabled. No INTERNET permission is requested. VIBRATE supports the existing optional haptics. Same-origin local hosting follows the Android guidance: https://developer.android.com/develop/ui/views/layout/webapps/load-local-content . There is no localhost/server dependency or third-party web runtime.

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
