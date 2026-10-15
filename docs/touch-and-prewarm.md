# Touch testing and prepared Continue · 0.1.4

Gear settings in the game: threshold0–35% (default5), side tolerance0–25% (default20), maximum visual follow70–350ms (default220). Saved under slink-touch-settings-v1; reset changes all three without resetting the puzzle. The follow time scales the existing adaptive edge route, not an extra animation queue. Stop stays centred, direction rules preserved.

Hit testing projects pointer samples onto terrain-height plane and applies threshold/corridor tests in actual grid space. No diagonal/remote candidate accepted. Game rules still enforce obstacles/fences, goal order and immediate-predecessor undo. Coalesced touch samples are handled before interpolating the remaining small gaps. Performance readout: age of last pointer sample, synchronous handler time, time from accepted target to sampled centred arrival. This is approximate in-app timing, not hardware latency instrumentation; follow max can exceed actual adaptive duration.

The home page starts one offscreen, viewport-sized same-origin game iframe after idle+350ms. It builds the saved current puzzle once, pauses animation, and announces ready only after load. Continue reuses that exact frame, wakes animation and suspends home animation. If not ready or saved level ID changed, ordinary navigation remains the fallback. Message origin/source are validated. Home exits to top-level menu; parent history supports Back via menu reload. Initial preparation still takes time and resources; immediate Continue can still use the old load path. Actual S22 memory/performance remains unverified.

Browser verified ready marker, Continue remains on menu#playing with already loaded game, settings/reset, hint/undo, Home and Back. Existing npm suite passed; targeted touch-grid test covers boundaries/no diagonals/route centring, prewarm test covers fallback/trusted messages/stale-ID protection. APK includes both settings/prewarm scripts explicitly; build/lint/signature, ZIP and asset matching checked.


##0.1.5 loading correction

Readiness no longer depends on requestAnimationFrame in the offscreen iframe (a potential Android throttling point, not a diagnosed physical-device trace). Preparation begins next event turn instead of waiting for load/idle+350ms. An early Continue request stays on the menu and opens the same frame once ready; it no longer navigates to a second copy. Selected puzzles use the same prepared transition, replacing stale preloaded frame when necessary and closing the selection dialog on reveal. Current-ID stale handling, source/origin validation and top-level Home retained. Unit tests cover early click, stale replacement, message security and child readiness without RAF. Browser verified Continue and selecting a different puzzle; original current selection restored after QA.

Fur buffers now preallocate typed memory and use numeric calculations in the inner vertex loop instead of constructing/cloning per-vertex vectors and colours. Geometry is unchanged: baseline SHA256 matches every position, normal, colour, UV and index byte for both ground and peek models. Local isolated construction observation175ms→118ms for ground,77ms→66ms for peek; these are not mobile benchmarks. No reduction in fur density/shape/material. New fur-data regression fixtures retained.

Signed0.1.5 APK versionCode6, current assets verified. Physical S22 load time remains to be measured.
