# Dead-end hint recovery

When the current path cannot be completed, the first hint press explains the correction without charging. Confirming spends one hint for the complete action:

1. Retain the longest prefix from which the puzzle can still be solved.
2. Visibly undo the wrong suffix, one cell at a time.
3. After a short pause, make one valid forward move using the normal gameplay handler.

This also applies when the first move after the start was wrong. The next cell is verified before spending a credit; an exhausted search budget leaves the path and credits untouched. Repeated presses during recovery cannot spend additional hints. Undo or reset cancels both pending backward steps and the final forward step.

The main game and sound-test fixture share the behavior. `tests/game.cjs` checks 1173 catalogue wrong routes, long wrong suffixes, a nonunique-board fixture, exhausted credits, repeated clicks and cancellation during the final pause. Existing creature-motion tests cover cardinal rollback synchronization.
