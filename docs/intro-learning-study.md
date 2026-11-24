# Introduction: learning gardens (24 November 2026)

Separate proposal at `einfuehrung-ansehen.html`, with the interactive lesson in `einfuehrung-lernspiel.html`. The rejected golden-ring overlay and vague neighbour/number prompts are superseded in this study only. The shipped introduction, normal game, APK and catalogue remain unchanged pending user review.

1. Five cells, two numbered flowers: move Nurbi over every brown cell. The meadow appears on the player's own route. Completion requires every cell, not just the numbers.
2. Nine cells, three flowers: visit numbers in order while retaining the all-cells rule. A premature last number explains that brown cells remain; wrong-number attempts identify the required next number.
3. Nine cells, four flowers: one visit per cell, reversible accepted route. A real dead end explains backtracking; the player may solve directly without being forced into a mistake.

No full solution is autoplayed. A small finger demonstrates only the first move twice, then disappears; it also disappears on the first accepted action. No golden ring, modal lecture, timer, ads, reward changes, catalogue writes or hint consumption. System reduced motion suppresses the finger and settles scenery. Mouse/touch use the existing 3D renderer input, with keyboard and undo-button alternatives. A completed lesson waits for an explicit continuation. Restart and skip are available.

`intro-study-core.js` owns the isolated lesson rules. `intro-study.js` drives the preview. The build compiles the shared renderer into an independent study bundle with a read-only screen projection helper; production renderer source/API are untouched. `scripts/build-intro-study.mjs` checks its insertion point and runs from the normal build. These pages/scripts are deliberately absent from the Android web asset allowlist.

Checks: lesson routes, ordered goals, early end rejection, adjacency/no diagonal, no revisits, backtracking, dead end and no storage/production packaging in `tests/intro-study.cjs`. Browser walkthrough covers all three lessons, premature end, a dead end, reversing the route and completing after correction. Human newcomer comprehension remains to be tested; this is a design proposal, not evidence of calibrated onboarding.

Additional browser checks: mouse dragging grows the first three cells and then completes the five-cell garden; the SVG keyboard layer does not intercept canvas input. Both the first and the longest third lesson fit 320 x 568 with body scrollWidth=320 and scrollHeight=568. The preview returns to lesson one for user review. Finish overlay makes background controls inert.

Validation completed: npm run build and full npm test both passed. No physical phone test or newcomer comprehension test claimed.
