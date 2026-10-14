# Wooden fence module study

`public/zaunwerkstatt.html` uses the real `createWoodFence` factory from `src/renderer/wood-fence.js`. No bitmap mockup. Standalone study only; no main-game renderer or catalogue changes.

- `createWoodFence({n,walls,pitch:80,origin:[40,-40],baseZ:8.5,style:'honey'})` returns `{group,edges,dispose}`. Z-up. Main catalogue integration would use origin `[60,-60]`.
- `walls` contains pairs of side-adjacent cell IDs, matching the existing game wall representation. Validates bounds/adjacency and deduplicates reversed pairs.
- Posts sit on the endpoints of exact shared cell boundaries; adjoining spans/corners share one post. Fixed pitch80, unchanged tile footprints and zero occupied puzzle cells. Visible posts extend slightly to either side of the mathematical boundary.
- Two rounded wooden rails, capped posts, fine geometry grain/knots, small nail heads and shared materials. Two wood tones: honey and chestnut. No texture download, external service or generated raster required.
- Posts are rooted below earth top8.5. Both rails clear grown grass top18. Detail and play board use identical dimensions and base height; detail is magnified only by camera.
- Test board has16 walkable cells, six blocked edges, start0/final3 and a validated covering route. This is a mechanics fixture; uniqueness or rated difficulty is not claimed. Pointer sampling and keyboard input reject diagonal crossings/fence edges and allow only immediate predecessor backtracking. Clicking “Lösungsweg zeigen” demonstrates the legal route.
- Browser checked blocked0→4 and5→6, legal0→1→5 and single-step5→1 undo. Both wood tones and shape selection render without captured errors. New tests check placements, shared corner posts, rail clearance, finite geometry and the test solution.

Await user visual review before replacing existing wall visuals or creating catalogue puzzles with this module. Mobile hardware performance unmeasured.
