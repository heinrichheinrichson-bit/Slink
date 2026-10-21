# Approved Nurbi looks and rewards

The user approved all 36 active, favorited study drafts, including ten custom variants. Their exact colors, patterns, size and strength are captured in `src/renderer/approved-nurbi-palettes.json`. Stable IDs and the user's names are preserved, including “Mein Nurbi 7”. Removed study drafts are excluded. Later workshop edits do not silently overwrite the shipped collection.

The garden book divides them into four immediate start colors (Aprikose, Koralle, Lavendel, Lagune), 26 freely selectable looks and six fixed achievement looks. No XP, random draws, purchases, streak requirement or no-hint requirement.

## Fixed achievements

| Look | Requirement |
| --- | --- |
| Sternentau | Complete the last catalogue garden |
| Mondblüte | Solve 10 daily puzzles in total |
| Tiger (user's custom variant) | Complete 10 gardens |
| Barnhold | Complete 20 gardens |
| Leopard schwarz | Solve 600 distinct catalogue puzzles |
| Schneeleopard | Solve 30 daily puzzles in total |

## Choice milestones

Each milestone earns one storable choice, usable on any of the 26 choice looks:

- Catalogue puzzles: 10, 25, 50, 100, 150, 200, 300, 400, 500, 650, 800, 1000.
- Completed gardens: 1, 2, 3, 5, 7, 10, 14, 18, 23, 29.
- Daily puzzles in total: 3, 10, 25, 50.

Existing evidence is credited retroactively from the normal stable puzzle completion IDs and the separate daily records. Replays cannot duplicate milestones. Earned milestones, chosen looks and fixed entitlements remain stored if catalogue order or temporary test progress changes. Selection itself costs nothing; only unlocking a new choice look consumes one choice. Already owned looks cannot spend twice. Fixed achievements cannot be bought with choices.

`nurbi-rewards.js` is the pure catalogue/rules module; `nurbi-reward-store.js` derives progress and persists `nurbi-rewards-v1` (separate `nurbi-rewards-preview-v1` in preview games). The existing `nurbi-all-rewards-test-v1` checkbox permits all looks without consuming choices or permanently granting them. In the checked browser profile, six choices were retroactively available with test bypass off; the original checked bypass and selected Lavendel were restored after QA.

## Rendering and UI

`creature-coloring.js` shares the approved study markings with both the regular/peek model and the actual head-lift game model. All 36 look colors match the study in tests; geometry, animation and exact original fur data remain preserved. Game, home and completion now use the selected look. The study retains its independent editable drafts and undo history.

The garden book has static offline thumbnails of the actual whole figure, grouped look cards, progress/requirements, choice balance, an expandable milestone list and a preview dialog. Previewing does not spend or select. Explicit unlock/select applies the look. Close, Escape and history back dismiss the preview. Existing background rewards are unchanged. About 551 KiB of thumbnails total avoids creating 36 live fur renderers.

Game/home settings expose available colors, including all colors with tester bypass. The next Android asset sync includes the three reward scripts and nested thumbnail directory; no new APK was requested or built for this change.

## Verification

- `npm run build`, full `npm test` passed.
- `tests/nurbi-rewards.cjs`: 4/26/6 allocation, exact approved data, offline previews, retroactive and idempotent milestones, spending and fixed/test rules.
- `tests/approved-looks.mjs`: all 36 exact fur colors in study, normal and actual head-lift game models; unchanged geometry.
- Existing fur hashes, hint/backtracking, celebrations, daily isolation, economy, background previews and 1200-puzzle checks passed.
- Browser: 36 cards, preview and selection, restored original selected look, test off/on with six retrospective choices and fixed conditions, history back closes preview, actual game accepts custom black leopard with no renderer errors. Mobile device installation/performance was not tested.
