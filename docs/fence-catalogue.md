# Additive fence catalogue

100 new puzzles extend the main collection from500 to600. The original `public/slink-levels.js` is unchanged. New data lives in `public/slink-fence-levels.js`, inserted in five sets between existing chapters. Existing puzzle objects and relative order remain identical.

| New set | Count | Insert after original puzzle |
|---|---:|---:|
| Am Gartenzaun |10|30|
| Über kleine Umwege |20|80|
| Zwischen Holz und Wasser |20|130|
| Verborgene Durchgänge |25|230|
| Verzäunte Denkpfade |25|290|

First two sets use at most5 columns. Remaining boards use at most6, below the existing maximum7. Selection order uses solver/choice heuristics and compact introductory boards; labels are not human-calibrated difficulty.

## Selection evidence
-1190 seeded candidates examined;100 qualified.
-30 fence-only boards,70 mixed boards with new walkable outlines not repeated from the original500 or one another.
-All600 boards have distinct canonical walkable-cell/blocked-edge layouts under translation, rotation and reflection. Fence-only boards can share a rectangle but have genuinely different blocked-edge layouts. Colours/checkpoints alone do not count as new layouts.
-Exact ordered covering-path solver proves one solution for every new puzzle, without cutoff. Validation rejects solution steps through walls.
-308 fences total. Removing ANY retained fence permits at least two solutions with the same cells/goals/other walls. Redundant barriers were removed during generation.
-2–3 checkpoints,2–7 fences. Sparse blocked edges leave room for player decisions; forced-choice ratio≤.82 and long forced runs filtered. Wrong-choice metrics remain heuristics.
-All four approved designs and both wood tones used. One explicit design/tone per puzzle, unchanged on redraw/restart.

## Runtime and progress
`world-catalogue-entry.js` uses the approved `createWoodFence` factory at origin[60,-60] for fence levels only. Both cells remain walkable; shared posts remain at the exact grid corners. Existing game edge checks reject blocked movement; the creature consumes accepted routes only.

Insertion changes display indexes, so main progress now stores stable `level-id`/`done-ids`. When absent, legacy numeric values are converted through the original500 ID list captured BEFORE insertion. Numeric keys are left untouched as a backup. Isolated tests prove current-level/completion migration and new-fence progress reload. Local reviews already use IDs. Browser observed92 previous completions retained as92/600.

## Checks
-Independent unpruned reference enumeration:5000 small wall/ordered-goal boards agrees with the extended solver, in addition to8640 existing wall-free cases.
-New catalogue test:100 unique solutions, all308 barriers essential, canonical graph deduplication, eight themes, original500 exact preservation.
-Gameplay test: all600 normal/hint completions,573 plausible wrong-route hint checks,308 fence crossing rejections and stale completion cancellation.
-Figure and decoration tests include all600 boards. Settings and progress migration tests pass.
-Browser fixture `renderer-pruefung.html?preview=1`, button “100 Zaunrätsel prüfen”:100/100 terrain/fence layouts rendered, no captured errors, span counts match data. Report: `docs/fence-render-check.json`. This verifies renderer construction, not Android performance or human difficulty.

Generator: `npm run catalogue:fences`. It is deterministic for thisv1 data, but must never overwrite published IDs with different puzzles. Future additions require a new version/ID range. Candidate checkpoints remain under ignored `work/`; only selected data/report is committed. Studies, old112 archive and separate Denkpfade are retained.
