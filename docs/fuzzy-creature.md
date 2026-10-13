# Separate 3D fantasy creature study

flauschwerkstatt.html uses createFuzzyCreature, a real reusable THREE.Group with warm apricot coat, compact body, large rounded head, four paws, antennae and facial geometry. Fur consists of seeded curved crossed tapering ribbons with graduated vertex colour and softened alpha edges, over an opaque coat. No generated image or billboard character is used. Existing worm study and main catalogue are preserved.

Interactive nine-field study, four-direction movement, breathing/blink/paw idle animation, 55–150% study-only persisted scale, actual overhead and oblique board views, live close-up with orbit slider. This is a visual prototype pending user judgement, not a claim of matching the supplied highly rendered reference or measured Android performance. Fur currently uses dense geometry for study; mobile LOD and device profiling remain future work before integration. Study storage: slink-fuzzy-study-size.

Browser QA: four direction steps completed, live orbit slider checked, zero captured error logs. Geometry test verifies finite positions/normals, compact bounds, fur mesh, scale and disposal.

## Refinement: fur, eyes and paws
Fur sample counts 7600/2300/1100/11000, longer finer groomed strands, softer root-tip contrast, grounded ends and lower opacity. Eye whites, irises and pupils are curved meshes following the head ellipsoid with shallow relief and an eyelid rim instead of stacked spheres. Blink stays centred on each eye. Paws reduced to softer small forms, overlapping coat-coloured toes and tapered ankle transition. Geometry test now checks animated world-space bounds and outward curved eye surfaces. Front/90-degree side view and four moves verified in browser with no captured errors. Still a separate study; no main-game integration.

## Paw gait and four colours
Single sculpted tapered paw mesh replaces toe spheres. Separate feet stay outside the breathing body rig, with bending ankle connectors. paw-gait.js samples an eight-cycle diagonal walk: stance cancels local root travel, swing follows a smooth lifted return with toe roll. Smooth start/stop envelope, body sway and default 0.95s crossing; optional 2.2s slow motion. Stance tests cover four scales and diagonal support. Direction turns still use the existing smooth root rotation, not a full physical contact solver.
Apricot, Coral, Lavender and Lagoon share geometry and animations. setPalette updates coat/iris material and seeded fur colours without replacing geometry. Four preview canvases are actual renders of the same mesh, camera and lighting, captured once; selected colour is live in both test views. Colour switching preserves route and size. No main catalogue integration or device-performance claim.

## Continuous paws and softer coat (2026-10-14)
Replaced separate paw/ankle meshes with a single curved loft per limb. The surface deforms between toe, broad paw, ankle and shoulder, with subtle toe grooves and no capped joint. Gait reduced from eight to four cycles per crossing, smaller lift and roll; normal crossing 1.25s, slow motion 3s. All four palettes retained.
Fur gains a dense short undercoat on body/head/tail, matte procedurally textured opaque base, and shorter facial fur outside precise eye/muzzle masks instead of a broad bald face area. Extra geometry remains study quality; Android optimisation is still unverified.

## Correction: direct input and rigid limbs
User rejected dense undercoat/nap and elastic continuous limbs. Restored the entire coat geometry, material and palette treatment from commit 728db34. Limbs now use two fixed-length segments (3.8 / 3.4 units), solved with a knee, clamping unreachable targets rather than stretching geometry. Study remains separate.
DirectGridFollower synchronously follows projected pointer positions on grid axes; no timed per-cell motion or queue. Coalesced pointer events and skipped cells are processed immediately. Distance-driven cyclic gait is visual only and cannot delay position. Arrow taps jump immediately; Demo-Tempo controls only generated demo input. This is a small interaction study, not final puzzle routing or collision logic.
Browser verified a real drag across the middle row ending at cell 5, x=1.9604,y=1, pending=0; captured no errors. Tests cover 10000 immediate input changes and invariant bone lengths.

## Field-centred correction
DirectGridFollower now rounds input to discrete cells and always returns integer cell-centre coordinates. It changes heading only for accepted cardinal cell steps; same-cell finger motion preserves heading. Skipped input cells are entered synchronously in adjacent steps, with the last step defining orientation. In the same follow callback, entered cells switch to the clover surface and the root snaps to the last cell centre. No fractional rest positions or queue. Main catalogue still untouched.
Browser QA: same-cell drag/release kept cell5 x2/y1 heading0; drag left across two cells ended at cell3 x0/y1 heading -pi/2, pending0 and grown2,3,4,5. Right/up/back-down clicks gave pi/2,pi,0. No captured errors.
