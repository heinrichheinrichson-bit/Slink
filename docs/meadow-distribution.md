# Meadow distribution in the game

Approved integration: all14 meadow modules, unchanged base green/geometry. A deterministic seeded plan selects40% floral fields among ordinary walkable cells,75% grouping, at most2 principal floral species and1 meadow insect tile per puzzle. Goal cells use calm grass to preserve goal/character legibility. Holes/hazards never receive grass. Input cell order is sorted, so the decoration does not depend on or reveal the solution traversal.

Existing puzzle IDs/data, original meadowVariants metadata, water/lava/stones/fences and rules remain unchanged. Original approved modules/studies are retained. New plan is applied by createGameMeadow at lazy growth construction; restart/undo does not reroll. Native extra flower layouts vary deterministically in count/position/height/lean.

Verification: tests/game-meadow-plan.mjs covers all600 IDs, exact floral ratio, retained data, goal clearance and traversal independence; meadow-extra covers identical base and bounded decoration; distribution checks deterministic counts and neighbour grouping.

Browser integration only. APK0.1.11 predates this change.
