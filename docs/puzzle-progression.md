# Per-garden progression

Approved2026-11-07: each of the29 gardens independently starts with puzzles1–3 available. Puzzle4 requires puzzle3 solved; every later puzzle requires its immediate predecessor. Completing1 alone does not unlock4. Any previously completed puzzle remains accessible, including scattered completions from the formerly open catalogue; its successor also unlocks. No progress is deleted or reassigned. All87 starting puzzles are available without playing another garden first.

`puzzle-progression.js` is the shared pure stable-ID policy. Menu path/grid disable locked nodes and show a restrained padlock. First unfinished available puzzle receives focus. Continue normalizes stale locked selections to an available puzzle in the same garden before preparing a frame. The game load guard covers direct URLs, stale saves, picker, reset and Next. Bookmarks use the same policy. Daily puzzles retain their separate progress and bypass catalogue locks; developer entry points remain unrestricted.

The preference cleanup and all puzzle structure/order are unchanged. New progression code is packaged offline with both main entry points. Tests cover all29 gardens, previous completions, stepwise unlocks and actual game load/solve; browser checked untouched garden12: only1–3 enabled,4+ locked, and direct URL for6 resolves to1.

See difficulty-review-2026-11-07.json for the refreshed full catalogue audit. All1200 stored scores match recomputed branching/forced-move/trap metrics; all385 expert puzzles meet their thresholds, with no within-garden score reversals. Existing order is retained. Deliberate gentle fence introduction is preserved; the small score dip at12→13 accompanies an increase in delayed decisions. This is an algorithmic review, not a claim about measured human solve times.

Next release preparation step after this work is real ads, before the user's planned closed Play Store test. No advertising SDK is added here.
