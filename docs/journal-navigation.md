# Gartenbuch hierarchy

The existing Gartenbuch navigation button remains the only top-level entry. No new home-screen action or footer button was added.

- `#journal`: compact overview with catalogue/garden totals, selected Nurbi and available choices, links to backgrounds/statistics, daily puzzle and bookmarks.
- `#journal/nurbi`: selected whole-model preview, all36 look cards, choice balance, milestones and achievement requirements.
- `#journal/backgrounds`: existing menu/game background choices and read-only game preview.
- `#journal/stats`: all six statistics, weekly activity and recording-since notice.

All children reuse journalScreen, the same header/footer and the same persisted data. No extra renderer is created. The large look collection renders only on the Nurbi subpage. The overview uses the existing offline whole-model image.

Child entry pushes history; header/content back returns to the overview. Direct child URLs survive reload and have an overview fallback when no parent history entry exists. Clicking the footer Gartenbuch entry from a child returns without accumulating duplicate overview entries. Same-hash preview history is ignored by the page router, so closing previews does not reset the child view/scroll. Explicit navigation away clears stale journal/playing hashes; the prepared-game home path still returns to the actual home screen.

Verified with targeted journey, prewarm, reward and background-preview tests plus journal-navigation.cjs. Browser checked all children, direct statistics reload with six values, header and browser back, both preview dialogs and the unchanged three-button footer. No Android APK/device test for this UI change.
