# Phone test 0.1.33: direct playable help

The previous APK retained the original textual How to play action, with a separately appended replay button only in the puzzle's help dialog. The home menu did not load the introduction controller at all. The user's report exposed a real entry-point gap; checking that files were packaged was insufficient.

## Corrected behavior

On both the home screen and a puzzle: **Settings → How to play** directly opens the three learning gardens. **Game rules** is a separate action for the existing textual rules. The former buried replay button is retained only as an additional link in textual rules, not the required route.

The controller is now present on the home page too, with shared dialog styles. It never auto-opens on home. Existing progress/preview/first-play gates remain in force. Closing/skip restores the underlying page and prior pause state. Lessons, text and gesture behavior are unchanged from the approved version.

## APK

`releases/Nurbis-Garden-0.1.33-test.apk`, version code 34, same separate package `com.thinkheim.nurbisgarden.test`. Install over the previous Test app without uninstalling. The Play installation is unaffected. Debug test ads remain unchanged; no new AAB/upload.

SHA-256: 55A600E9DDFCBCD92B9F0872AF74A4978DAA8740493621F0E972CAE27AB160C5.

## Verification

Actual browser walkthroughs from BOTH gartenstudio.html and slink.html?preview=1: open Settings, click How to play, observe embedded lesson page, actual board, Nurbi and interactive controls. No intervening text dialog. Unit coverage now checks the exact direct home action, separate rules action and no auto-intro on home, in addition to existing source/origin guards, pause restoration, replay/Back and asset checks. Android build/lint/signature checks passed. Packaged controller, shared CSS, menu, puzzle and lesson assets match current source. Full regression suite result recorded below when complete. Physical phone behavior remains for the user to confirm.

Full npm test passed after the direct-entry correction.
