# Wegspuren · separate playable study

Open `wegspuren.html`. A/B/C switch on the same accepted path without resetting it. The example button builds nine legal steps; reset allows free play. The original 13-cell bud-test geometry is reused, not counted as a new catalogue puzzle.

A: fine cream dots joining consecutive centres, with a stronger final link. B: the same cue only while touching/dragging the board. C: four quiet points around only the immediate predecessor. The latter cue also accompanies A/B. These are scene-native meshes at meadow height; flowers, meadow and figure remain the existing modules. No additional movement, shortcuts or undo rules.

`route-cue.js` is reusable. `route-study-entry.js` and `wegspur-game.js` are isolated snapshots of current renderer/game with study hooks and separate progress/settings keys. Main gameplay, main bundles, catalogue, and APK remain unchanged. Before integration, move the selected cue into the shared renderer rather than keeping the snapshots as parallel game implementations.

Validation: complete npm test passed; route-cue tests check no diagonal/row-wrap joins, ordered connections, undo, touch visibility, predecessor-only mode. Browser: example nine steps, undo to eight, A=60 dots visible / B=60 hidden after release / C=4 visible; no browser errors. Visual review still belongs to user; phone legibility is not yet verified.
