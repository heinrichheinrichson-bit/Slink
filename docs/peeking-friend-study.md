# Peeking garden friend study

Separate live study: public/neugierwerkstatt.html. The main home composition and game figure retain their existing poses.

createFuzzyCreature now accepts presentation:'peek' for a dedicated portrait composition. The default ground presentation is unchanged. The portrait creates the original fitted head mesh/fur, face, curved antennae and two original front paws; hidden torso/hind limbs are omitted or hidden. It is actual mesh geometry, not an image. The complete skull, head fur, face and antennae tilt together around the skull centre. Fitted eye patches are neither independently rotated nor squashed. Front paws remain fixed on the island rim while the head gently inclines for greeting. The island uses the existing ivory frame, meadow variants, flowers and living water.

Pose anchors adapt with the75–135% study size control so paws stay on the same edge. Palette selector offers all four approved palettes. Optional breathing, antenna movement and double blink; native reduced-motion preference disables animation initially. Greeting button adds a small whole-head inclination, with paws stationary. No progress or settings writes.

Verification: build/full existing npm test passed. New tests/peek-pose.mjs passes planted front-paw, fitted-eye and finite-bounds checks across idle, blink and greeting; now included in npm test. Browser checked Aprikose/Lavendel,135% size and return100%, idle off/on and greeting, without captured errors. Main/source proportion and gait regressions pass. Built renderer bundles synced to the existing server. Physical mobile performance remains unmeasured. Screenshot docs/screenshots/peeking-friend-study.png. Pose/main-home integration awaits visual feedback.
