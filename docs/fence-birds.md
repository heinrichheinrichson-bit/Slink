# Birds on wooden fences

Separate study in zaunwerkstatt.html. Native reusable createFenceBird and createBirdFence in src/renderer/fence-birds.js. rails=Spatz, picket=Rotkehlchen, cross=Blaumeise, logs=Zaunkönig. Works with both existing wood tones and all edge/join shapes. Optional bird:false preserves exact original fence.

One bird attaches to one shared post. No movement of fences, blocked edges or cells. Main board and detail comparison are independent fixtures, each has at mostone bird. Future game rule: at mostONE bird in the whole puzzle, some puzzles without. Not integrated into game yet.

Breathing, irregularly scheduled seeded head look, blink and occasional small wing/tail movement; feet stay on post. Seeded API permits stable per-puzzle assignment. Geometry/fence invariants tested in tests/fence-birds.mjs. Both wood colours and all designs/toggle visually checked in browser.


Flutter revision:1.9s bounded lift (13 local units), modest yaw and wing beats, return to exact same post. Native flight group includes feet/body/head. Manual flutter() and study replay button; automatic demonstration with20–26s quiet gaps. Fixed outer anchor, one bird rule unchanged. Test covers rise/turn/return.


Latest study:3.6s outward curved flight38units to the side/23units high, gentle turnaround then return to same perch. Supersedes small stationary flutter.


Ground-visit study:groundVisit() samples an optional safe world-space groundTarget callback. Fixture maincell9 offset22/18 (centre stays free), detailfield0 offset20/20.1.8s cubic outbound,2.8s ground pauses with three varied pecks,2s distinct return. Heading follows curve with gradual turning. Height callback follows earth/meadow surface. User has not yet judged naturalness; no game integration. Future real puzzle assignment must consider goals, creature clearance and terrain.


Latest preferred behaviour:ground stays3.5–8s, varied eligible neighbour cells and four offcentre placements, slow looking around and spaced pecks. Automatic ground visits28–42s apart replace automatic pure flutter. groundTargets/isUnsafe/returnToPerch accept integration-supplied eligibility. Study candidate cells8/9/12/13 form the four neighbouring fields around the chosen perch; current/adjacent pathhead blocks landing and triggers early return. Annäherung simulieren provides manual review. Interrupted outbound return begins at actual position; no jump. Tests verify variable cells/durations and unsafe/early-return continuity. Still study-only.


Game integration approved:game-fence-bird-plan.js selects73 of100 fence puzzles, one bird each, nearest eligible non-goal quiet meadow cells around a real shared post. Species matches explicit fence design, no wall/data changes. Renderer preserves bird state across next-board preparation/adoption and follows grown terrain heights. Current/adjacent accepted pathhead forces early return; completion prevents ground trips. Included in APK0.1.12-test.
