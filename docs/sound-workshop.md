# Sound workshop

`public/klangwerkstatt.html` is a separate sound direction study, not integrated into gameplay or Android. Three procedural Web Audio sketches: garden pop/rustle, small wooden tones, dewdrops. Single event previews and a cardinal 4x4 cover-path fixture with sequential backtracking and last-cell goal. Sound requires a user gesture; style/volume persist in a study-only key. Stop and backgrounding cancel voices. Rapid field sounds are throttled to65ms and active voices capped; no music, loops, downloads or external requests.

Reusable engine: `public/garden-sounds.js`. Functional smoke check: `node tests/garden-sounds.mjs`. Real browser completed16/16 fields, triggered finale, no console errors. Audio aesthetics and device speakers await user review; these are synthesized sketches, not final produced audio.
