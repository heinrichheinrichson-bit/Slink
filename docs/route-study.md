# Wegspuren · separate playable study

Open `wegspuren.html`. A/B/C switch on the same accepted path without resetting it. The example button builds nine legal steps; reset allows free play. The original 13-cell bud-test geometry is reused, not counted as a new catalogue puzzle.

A: fine cream dots joining consecutive centres, with a stronger final link. B: the same cue only while touching/dragging the board. C: four quiet points around only the immediate predecessor. The latter cue also accompanies A/B. These are scene-native meshes at meadow height; flowers, meadow and figure remain the existing modules. No additional movement, shortcuts or undo rules.

`route-cue.js` is reusable. `route-study-entry.js` and `wegspur-game.js` are isolated snapshots of current renderer/game with study hooks and separate progress/settings keys. Main gameplay, main bundles, catalogue, and APK remain unchanged. Before integration, move the selected cue into the shared renderer rather than keeping the snapshots as parallel game implementations.

Validation: complete npm test passed; route-cue tests check no diagonal/row-wrap joins, ordered connections, undo, touch visibility, predecessor-only mode. Browser: example nine steps, undo to eight, A=60 dots visible / B=60 hidden after release / C=4 visible; no browser errors. Visual review still belongs to user; phone legibility is not yet verified.

## Grass variant D

User rejected the luminous dots as outside the game world. D is now the study default: irregular laid-down green blade meshes, shared scene lighting, rough physical materials and small real shadows. Seven blades on the predecessor gently lift to indicate the next legal undo. Existing clover/flowers are preserved. A/B/C remain for comparison.

This is a native grass cue added over the surface, not deformation of the original meadow mesh. Undo removes only the corresponding connection. Tests cover ordered segment counts, physical materials, predecessor motion and undo; browser verified nine-to-eight steps without console errors. Phone legibility and aesthetic approval remain pending.

## Highlight variant E
User rejected all trails and additional markings. E is now default. Touch beginning on the figure/current cell enables a temporary colour lift of only the immediate predecessor meadow. Pointer release/cancel restores exact original material colours. No overlay geometry, trail, emissive material or additional shadows. The study-only checkbox freezes the effect for comparison. On-board movement/undo unchanged. Browser preview verified predecessor15 then11 on undo and no highlighted cell when disabled; zero cue meshes and no console errors. Targeted tests cover exact colour restoration and no accumulated whitening. Main game/APK unchanged.

## Main integration
User approved E plus optional settings. Main renderer uses meadow-highlight.js, enabled by default at24%, adjustable10-50% in gear. Only gestures begun on figure/current cell activate it, release/cancel restores colours. Shared saved completion delay1-15s defaults4.4s, applies from next win. Study checkbox remains study-only. Browser verified settings persistence; targeted test checks timer uses selected7600/1000ms. Existing APK remains previous version.
