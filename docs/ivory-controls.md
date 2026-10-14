# Ivory control study

Separate live study: `public/bedienwerkstatt.html`. Main game controls and puzzle data are unchanged.

Reusable assets:
- `public/ivory-controls.css`: scoped native-button skins. Solid layered ivory body with broad shoulder gradients, light warm side, subtle CSS/SVG pore grain and no raised outline tube. No generated bitmap skin.
- `public/ivory-controls.js`: `createIvoryControl({action,variant,compact,gold,label})` returns a native `<button type="button">`. Actions undo/hint/reset/home/settings; variants cast/soft/satin. Caller wires existing game actions.
- `src/renderer/ui-button-study.js`: preview game context using the existing real3D ivory frame, earth, meadow, water, lava and stone modules. Button appearance uses HTML/CSS, rather than the frame's WebGL shader. Future integration would reuse exactly these DOM/CSS controls.

Variants: A Elfenbeinguss (warm rounded casting), B Weich modelliert (softer asymmetric corners/deeper side), C Matter Schliff (quieter shallow profile). Existing buttons appear in a reference row. All sample controls act on the same small demo board. All-ivory is default; optional gold hint. Native disabled undo preview, keyboard focus and reduced-motion handling included. Native dialog opens from the settings control. No localStorage/progress writes.

Nominal play controls82×76 CSSpx, hint92×83, compact header47×47. Very narrow viewport rules reduce play sizes to74×70/hint80×76 with12px gaps. Studies compare real sizes; actual phone rendering/performance is not asserted.

Browser checked variant switching, keyboard Enter action, count update, reset/undo, gold flag, disabled state and dialog open/close. Observed normal dimensions82×76/92×83 and native disabled undo. No captured renderer errors. Snapshot: docs/screenshots/ivory-controls-study.png. Build and full npm test passed. New design selection/main integration awaits user review.

## Label/icon refinement and narrow comparison
User favours C (satin), with A as alternative; no main integration authorization yet. Study now defaults to C. Replaced new-control artwork with a consistent24-unit SVG grid, safe margins,2-unit rounded strokes, symmetrical gear and optically centred undo. Old reference row retains its original32-grid icons and10px labels. Removed bright SVG drop shadow, used darker warm ink, and increased new labels to12px system text with explicit16px line height and6px icon/text gap. Original lightbulb outline extended above its viewBox; revised bulb is fully within the grid.

Added preview width selector320/360/390/440 CSS pixels (default360). Container queries shrink the preview's action controls to74×70/hint80×76 when necessary, while compact header controls stay47×47. This simulates available width; it does not establish the preferred material on a physical phone. Browser measured all buttons/icons/labels inside their bounds at all four widths; native keyboard Enter still changes the demo. C and A remain available for direct comparison. Main game's buttons unchanged.

## Brown engraving comparison
The study offers Warme Umbra (#704a2c), Alte Sepia (#5e4936), Rauchbraun (#5c5043) and Kakaobraun (#63432f). All new controls, including header controls, share the selected ink; the original-button reference stays unchanged. Optional fine engraving edge duplicates the SVG stroke 0.65 units lower in warm cream and adds a crisp lower label edge. This is an optical SVG/CSS treatment, not cut 3D geometry. Reusable factory now accepts ink (six-digit hex) and engraved (boolean); defaults retain the previous plain treatment. The study enables engraving for comparison. Browser verified all four ink switches and engraving off/on, with no captured errors. Snapshot: docs/screenshots/ivory-controls-engraving.png. No final ink selection or main-game integration yet.
Additional optional data-deep=true treatment strengthens the upper dark cut lip and lower warm light edge for icons and labels. Study checkbox Gravur leicht vertiefen enables comparison. Optical CSS effect only; all four ink colours retained. Build and browser toggle verification passed with no captured errors.
Reusable createIvoryControl also accepts deep (default false), effective when engraved is true.
Follow-up feedback: reduced label weight from650 to500 and symbol stroke from2 to1.7; engraving lips narrowed accordingly to avoid heavy lettering.
Engraved controls now mix the selected brown with12% warm ivory and soften the upper shadow to offset apparent darkening. Plain controls retain the exact selected ink. This is a visual adjustment, not a claim of identical perceived colour.
Approved ink treatment: Warme Umbra + fine engraving edge, extra depth disabled because it makes symbols appear blurred. Study now defaults to that combination; existing12% warm-ivory lightening retained. Main game unchanged.
