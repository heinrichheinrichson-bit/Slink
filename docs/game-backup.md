# Player backup and transfer

Settings → Sichern & übertragen / Back up & transfer, available from menu and catalogue/daily game settings. Both languages are supported. Preview/study entries do not expose or restore the main save.

## Scope

Versioned `nurbis-garden-backup` JSON contains an explicit portable-key allowlist: completed/current stable puzzle IDs, legacy catalogue index migration keys, Gartenbuch/daily completions, active time/play days/statistics/bookmarks, earned/selected cosmetics, separate menu/game backgrounds, per-puzzle free/earned hint balances and ad pacing, language, player preferences and selected Nurbi. Legacy audio/marker/stopwatch/backtrack preferences are included for migration. The current selected puzzle is retained; a partially drawn route is not persisted by the existing game and is not invented by the backup.

No thumbnails, renderer caches, study drafts, developer unlocks/unlimited hints, preview state, unrelated origin data or native Google consent/identifiers are copied. This is manual backup, not automatic cloud sync or merging. Users choose the document provider/clipboard recipient. Files/codes are plaintext and user controlled.

## Restore safety

Complete format/version/key/type/size/prototype and checksum validation before writing. Checksum detects accidental corruption, not intentional editing. Restore requires a preview (date, completed/daily counts) and explicit Restore action; typing/loading alone changes nothing. Incoming portable state REPLACES existing portable state, including removal of absent keys. Other storage keys are untouched.

Before changing data, store the previous snapshot and a pending-transaction marker. Remove portable keys before writing to avoid unnecessary peak quota. Failure rolls back; interruption recovery runs before settings/game startup. A successful import leaves the recovery copy available under Restore previous data, again with preview/confirmation. Backup export flushes active game timers. Restore freezes stale economy/journal writers in root/prepared frames before reloading the entire app to home.

## Android

`BackupIO.java` is attached only to the local-only asset WebView. User-triggered ClipboardManager copy/paste; Android ACTION_CREATE_DOCUMENT/ACTION_OPEN_DOCUMENT for files (no broad storage permission). Bounded input, asynchronous file I/O, cancellation handling and chunked JSON-only callbacks isolated by requester IDs. No automatic clipboard read. Browser uses clipboard/file-picker/download with manual code fallback when clipboard permission is unavailable.

## Existing tester progress

Two code30 APKs:
- `Nurbis-Garden-0.1.29-transfer.apk`: app.slink.garden, label Nurbi’s Garden · Transfer; same debug signing certificate as old0.1.27. Install as UPDATE without uninstalling the old app. Export there.
- `Nurbis-Garden-0.1.29-test.apk`: com.thinkheim.nurbisgarden. Import the saved file/code here.

The transfer switch is `scripts/build-android.ps1 -Offline -LegacyTransfer`; Gradle refuses release tasks with that switch. Normal release identity stays com.thinkheim.nurbisgarden. Old app data stays in its own sandbox until the user deliberately removes it; no silent migration or forced uninstall. Both APKs use test ads. No Play upload.

## Validation

Backup tests cover roundtrip across progress/stats/rewards/hints/preferences, bad/foreign/future/oversized payloads, developer/cache exclusion, quota rollback, interrupted-import recovery, empty saves and bootstrap order. Economy regression also checks flush/freeze does not overwrite imported data. Existing suite passed up to economy; its browser-global fixture was extended for the new flush listener, then all remaining tests passed. Targeted backup tests rerun after final core changes.

Actual browser checks: normal112-completion export validates; isolated127.0.0.1 origin imports a two-completion fixture and English settings, restarts at puzzle3, then restores original zero-completion/German state. File download works; invalid JSON cannot reveal Restore.360×740 phone layout checked. A transient observer error in a document being torn down was fixed with startup target guards; import and recovery were repeated with no console errors. Actual Android file picker/clipboard/install migration remain phone smoke tests (no attached device). Both builds/lint/signatures, package identities and matching packaged JS verified.

Public policy was extended with manual backup/transfer, website commit f6a6b3a.
