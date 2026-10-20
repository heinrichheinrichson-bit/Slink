# SLINK Android test builds

[Download Nurbi’s Garden 0.1.20 test APK](SLINK-0.1.20-test.apk)

Signed test build for installation on Android8.1+. Includes1200 puzzles in29 gardens and all current modules, offline. Browser progress is separate from app progress. Build/signature/lint verified; physical Galaxy S22 testing remains pending. Source and rebuild instructions: ../docs/android-test-app.md.

SHA-256: C38271589EA0A6DD70CDF16A32D04E36544E700058C12AE30466CABF98DD8A04

0.1.1 adds persistent menu background, optional predecessor highlight/strength and configurable completion wait. Same applicationId/signing key, higher versionCode2: designed to update0.1.0 without uninstalling. Previous build retained.

0.1.2: static approved buttons from first HTML paint; no hidden SVG graphics construction in3D mode. Same signing identity, versionCode3. Install as update without uninstalling.

0.1.3/versionCode4: deferred meadow creation, batched static earth, static menu controls, persisted home/category preview caches. First uncached previews still require rendering. Same signing identity; physical phone performance pending.

0.1.4/versionCode5: saved Touch test sliders/reset/readout and prepared Continue from home. Ready same-origin frame reused; early/stale preparation falls back to normal navigation. Install as update, no uninstall.

0.1.5/versionCode6: prompt prepare, no offscreen animation-frame readiness dependency, early Continue reuses the pending scene, selected-puzzle transition included. Lower allocation fur generation with byte-identical geometry. S22 timings pending.

0.1.6/versionCode7: next terrain prepared behind completion card using same renderer/character; one future board cached and adopted on Next. No physical S22 timing verification.

0.1.7/versionCode8: retained home menu on game Home/history Back, lightweight startup metadata/gear, native scene fallback preview before live3D. Install as update without uninstalling. Phone timing to be tested.

0.1.8/versionCode9: stopwatch from ready/visible puzzle; saved three free tips per puzzle plus rewarded credits. Offline ad policy matches arrow.joy/Hex&Joy cadence. No real ads/provider yet; development simulation opt-in only. Same signing identity, install as update.

0.1.9/versionCode10: gameplay fits available viewport including stopwatch/hint row, controls and footer; camera fits remaining board area without stretching modules. Browser360x640/700/780 verified.

0.1.13/versionCode14:1200 certified puzzles in29 reordered gardens (500 total fence puzzles), preserved existing puzzle IDs/progress; persisted developer unlimited-hint mode, no credit consumption or ads while enabled. Same package/signing identity. Settings → Entwicklung · Tipps & Werbung → Unbegrenzte Tipps. Install as update without uninstalling; browser and app settings remain separate. Build/lint/signature and bundled-source checks passed; phone playtest pending.

0.1.14/versionCode15: selected full Harp Glissando blooms and Level Up03 completion response integrated. Permanent persisted sound enable/disable; master/bloom/completion/target-tail volumes and temporary fade/timing controls in game settings. No movement sound selected. Same1200 puzzles/29 gardens and existing animation/card timing. CC BY4.0 Level Up03 attribution accessible under Klangnachweise and in packaged audio/selected-sounds.txt. Same signing identity; previous APK retained.

0.1.15/versionCode16: saved editable game-screen title (settings Schriftzug · Test), immediate text-only update/automatic fit/reset to SLINK. Menu title, app package and puzzle state unchanged. Same signing identity.

0.1.16/versionCode17: hint confirmation preserves the longest solvable prefix and rewinds only the incorrect suffix; creature path reconciliation fixes stuck positions after recovery/rapid undo. Build, lint, signature and packaged source checks passed. Same signing identity; install as update.

0.1.17/versionCode18: Nurbi’s Garden branding, approved playful ivory B logo without antennae on home/game, icon C as launcher icon. Title artwork D stored separately in assets/brand; no store upload. Existing package ID/key retained. Build/lint/signature and packaged branding checks passed.

0.1.18/versionCode19: fixed approved logo on game screen; removed custom-title test setting and its Android asset. Old saved names cannot override the logo. Same update identity; build/lint/signature/package checks passed.

0.1.19/versionCode20: compact completion card, one headline and elapsed time; redundant kicker/subtitle/time caption removed. Actual completed puzzle browser checked at360x740. Build/lint/signature/package checks passed; phone testing pending.

0.1.20/versionCode21: garden detail opens centered on first unsolved puzzle, including gaps; preserves focus in path/grid. Compact header, count/bar, conditional next link, no repeated description/percentage/legend. Fully solved gardens have no false next marker. Removed obsolete completion theme label. Catalogue remains unlocked. Build/lint/signature/package and browser phone360x740 checked.
