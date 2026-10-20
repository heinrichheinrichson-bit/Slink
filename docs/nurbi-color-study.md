# Nurbi color study

Open `nurbifarben.html`. Separate real-model study; no game palette or reward changes and no APK integration. Four original coats plus eight new directions. Editable coat/root/tip, face, iris, cheeks, antenna tips and softly blended belly/back accent. Full original ground model, turn controls, grass/ivory comparison and optional idle motion. Geometry, proportions and fur coverage are unchanged.

One WebGL renderer and one model; twelve static thumbnails captured sequentially. Study-only `nurbi-color-study-v1` stores drafts per direction, selected direction, favorites, angle, surface and motion preference. Copy exports a JSON draft; reset affects only the selected draft. Gallery images show original directions, while the large model shows edits. Nothing writes gameplay, progress or app cosmetic keys.

Build: `npm run build`. Checks: `node tests/nurbi-colors.mjs`, `node tests/fuzzy-creature.mjs`.

Own variants: the new-variant button clones the selected edited draft into a stable custom UUID entry. No application limit on count. Name and all colors are editable and persist under the same v1 key, alongside the original twelve drafts (no migration/reset). Thumbnails now reflect edited drafts, not factory colors. Reset returns only the selected draft to its own starting values. The qa=1 URL uses a separate key for browser tests. Browser checked adding two copies, renaming, switching and reload persistence.

Fur drawings include transverse stripes, spots, fine speckles, a face mask and a tail tip, alongside retained belly/back choices. Size 50-180%, strength 0-100%; default 100% preserves prior drawings. Markings color fur and base surfaces without geometry changes. Paw materials cloned for independent color; absent old paw values inherit coat. Old drafts/custom entries remain in v1 storage. Solid disables inactive accent/size/strength controls.

Added twelve achievement directions (24 total): Sternentau, Kleeglueck, Wildbeere, Honigpfote, Mondbluete, Abendfuchs, Farnschatten, Rosenquarz, Bernstein, Eisklee, Pflaumenbluete, Loewenzahn. Stable reward-prefixed IDs; existing and custom drafts preserved. Study proposals only, no game unlock rules.

Tiger pattern: separately retained alongside generic stripes. Six explicit nonperiodic curved bands with unequal width/length, tapered tips, asymmetric flanks and two selected forks. Stable coordinates, same masks on base and fur; no per-frame randomness. Tigerpfote is additive preset25. Tests cover finite masks/geometry and flank asymmetry.

Tiger revision after user rejected the thin/cracked appearance: replace six forked bands with three broader individually shaped marks. Angular spine-to-flank coordinates follow the tapered body, varying endpoints per flank, with clear head/belly. Same tiger ID and all stored colors retained; only drawing geometry changes. Tests cover clear head/belly and asymmetry.

Tiger face extension: two short tapered cheek sweeps per side and a compact forehead chevron. Head markings restricted to side fur/upper forehead with explicit eye and muzzle exclusion masks. Same drawing color/size/strength, no expression geometry or material changes. Tested cheek/brow visibility and eye/muzzle/belly exclusion; browser three-quarter view checked.

Leopardenpfote preset26 adds separate leopard pattern: fixed individually rotated/distorted open rosettes on body-relative angular coordinates, lightly tinted centres, smaller toward tail, localized solid head spots with eye/muzzle clearance. Existing colors/custom drafts preserved. Pattern size/strength controls apply; no game integration.

Leopard head revision: replace sparse floating 3D dot centres with surface-anchored spots spanning crown, forehead, temples and cheeks. Ellipsoid-direction masks stay aligned through the fur depth. Eye/muzzle exclusion retained. Actual head surface coverage tested, three-quarter browser view checked; old stored colors/drafts unchanged.

Removing drafts: Entwurf entfernen hides selected built-in or custom entry using ordered persisted removed IDs. Edited data/favorites remain intact for undo, including after reload. Restore pops last removed entry; one visible draft must remain. Removal exits favorites filter and selects a remaining entry. Removed thumbnails skipped at startup. Browser remove/reload/undo checked using qa storage.
