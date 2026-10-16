# Completion card

Integrated approved workshop A on2026-10-16. Text remains provisional: Alles blüht! / Ein kleiner Garten. Dein Werk. Native animated island scene is shared by workshop and main, through completion-scene.js. Explicit approved palette/camera/size values remain independent of workshop saved drafts.

Main loads game-completion.js only when the completion card is shown; one renderer retained and paused while card hidden or prepared game paused. Existing joy/completion delay and next-board preparation remain intact. No extra progress writes. Stopwatch uses actual frozen completion time and respects visibility preference. Weiter advances through existing ad policy; Noch einmal resets the same puzzle without replenishing tips. Joy replay only restarts scene animation.

Card height adapts to viewport, max650px, width390px. Existing underlying board/UI hidden only while card visible. Browser360x640 verified: card top12/bottom628, page height640, visible primary button. Replay returns original game controls/board. Study remains separate and editable. Prior detached portrait retained as historical alternative, no longer loaded in main. No APK built in this revision; new bundle added to future Android asset list.
