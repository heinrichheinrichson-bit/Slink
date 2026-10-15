# SLINK Android test builds

[Download SLINK0.1.6 test APK](SLINK-0.1.6-test.apk)

Signed test build for installation on Android8.1+. Includes600 puzzles and all current modules, offline. Browser progress is separate from app progress. Build/signature/lint verified; physical Galaxy S22 testing remains pending. Source and rebuild instructions: ../docs/android-test-app.md.

SHA-256: AC009E9BC600C43DAE92F92CECE73AEBCAB9C0CC7BB8BE3CEF92302AF9ADA419

0.1.1 adds persistent menu background, optional predecessor highlight/strength and configurable completion wait. Same applicationId/signing key, higher versionCode2: designed to update0.1.0 without uninstalling. Previous build retained.

0.1.2: static approved buttons from first HTML paint; no hidden SVG graphics construction in3D mode. Same signing identity, versionCode3. Install as update without uninstalling.

0.1.3/versionCode4: deferred meadow creation, batched static earth, static menu controls, persisted home/category preview caches. First uncached previews still require rendering. Same signing identity; physical phone performance pending.

0.1.4/versionCode5: saved Touch test sliders/reset/readout and prepared Continue from home. Ready same-origin frame reused; early/stale preparation falls back to normal navigation. Install as update, no uninstall.

0.1.5/versionCode6: prompt prepare, no offscreen animation-frame readiness dependency, early Continue reuses the pending scene, selected-puzzle transition included. Lower allocation fur generation with byte-identical geometry. S22 timings pending.

0.1.6/versionCode7: next terrain prepared behind completion card using same renderer/character; one future board cached and adopted on Next. No physical S22 timing verification.
