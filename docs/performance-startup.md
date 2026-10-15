# Startup optimisation · 0.1.3

Main renderer records install/terrain/tiles/firstRender/total milliseconds in terrain3d data-startup. Same desktop16-cell fixture measured406ms before and375ms after; these are individual local observations, not a benchmark or S22 speed claim. Preparation terrain+tiles changed191ms→94ms; first-render accounting changed because an unnecessary early empty scene render was removed.

Changes:
- Generate grown meadow only when its cell is first visited. Keep it for undo/revisit. Do not build all hidden meadows before the empty-earth puzzle appears.
- Meadow factory requests surfaceOnly base. Previously it generated detailed clover/grass only to dispose it immediately and replace the decor. Exact approved surface geometry/material/emissive retained; existing module tests pass.
- Batch static earth by material:32 meshes→4, preserving triangle count, material objects and transformed vertex bounds. Pure geometry grouping, no reduced artwork. Regression test batch-terrain.mjs.
- Meadow highlight and opacity updates skip unchanged state rather than revisiting every material on every frame.
- Menu header controls baked into HTML, handlers attach to those existing elements.
- Home displays last native rendered scene snapshot immediately on repeat visits, only if friend settings match. It is replaced by live canvas after first frame. No cached match on first installation.
- Chapter images cached asWebP in local storage, one current cache entry per15 chapters keyed by progress and design version. Valid cached images load without WebGL reconstruction. Visible cache misses are queued one per turn; thumbnail WebGL context is created only when needed, not on home startup. First-ever visits still need native rendering; this is not claimed fully solved.

Browser verified16-cell growth to completion, undo, no console errors,3 category images restored from cache before opening gardens, menu firstframe383ms desktop. Physical phone timings pending. npm test and batch geometry test run; APK build/lint/signature and matching assets checked.
