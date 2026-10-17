# Sound workshop

`public/klangwerkstatt.html` is a separate sound direction study, not integrated into gameplay or Android. Three procedural Web Audio sketches: garden pop/rustle, small wooden tones, dewdrops. Single event previews and a cardinal 4x4 cover-path fixture with sequential backtracking and last-cell goal. Sound requires a user gesture; style/volume persist in a study-only key. Stop and backgrounding cancel voices. Rapid field sounds are throttled to65ms and active voices capped; no music, loops, downloads or external requests.

Reusable engine: `public/garden-sounds.js`. Functional smoke check: `node tests/garden-sounds.mjs`. Real browser completed16/16 fields, triggered finale, no console errors. Audio aesthetics and device speakers await user review; these are synthesized sketches, not final produced audio.

User rejected synthetic sound character; keep A-C only for comparison. New D 'Durchs Gras' uses an actual CC0 hand-through-grass recording (see public/audio/README.md), loaded locally and decoded after audio gesture. Variable offsets/rate, short overlapping soft-envelope excerpts, low-pass4.4kHz. All events in D use only the recording, no oscillators. Study starts D when no saved selection exists. Main game/APK remain unchanged. Browser decode/play command and audio lifecycle smoke tests pass; aesthetic judgement awaits user.
