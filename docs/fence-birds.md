# Birds on wooden fences

Separate study in zaunwerkstatt.html. Native reusable createFenceBird and createBirdFence in src/renderer/fence-birds.js. rails=Spatz, picket=Rotkehlchen, cross=Blaumeise, logs=Zaunkönig. Works with both existing wood tones and all edge/join shapes. Optional bird:false preserves exact original fence.

One bird attaches to one shared post. No movement of fences, blocked edges or cells. Main board and detail comparison are independent fixtures, each has at mostone bird. Future game rule: at mostONE bird in the whole puzzle, some puzzles without. Not integrated into game yet.

Breathing, irregularly scheduled seeded head look, blink and occasional small wing/tail movement; feet stay on post. Seeded API permits stable per-puzzle assignment. Geometry/fence invariants tested in tests/fence-birds.mjs. Both wood colours and all designs/toggle visually checked in browser.
