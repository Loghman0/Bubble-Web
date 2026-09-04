# New assets needed — Backpack/Minion/Lockbox wiki update

This update adds four new data-backed catalogs to the site. Each references
artwork under `public/assets/<category>/<key>.png` that doesn't exist yet.
Folders + per-folder README checklists have already been created; this file
is just the consolidated list for convenience.

## public/assets/backpacks/ (4 files)
novice_satchel.png · durable_rucksack.png · pro_technical_pack.png · master_bubble_pack.png

## public/assets/minions/ (3 files)
nimbus_hauler.png · fen_sifter.png · lure_kin.png

## public/assets/lockboxes/ (3 files)
sunken_lockbox.png · magma_lockbox.png · elderwood_lockbox.png

## public/assets/keys/ (3 files)
sunken_key.png · magma_key.png · elderwood_key.png

---

**13 files total.** All filenames use underscores (matching the Discord
bot's Application Emoji names exactly, since Discord custom emoji names
can't contain hyphens) — double-check against each folder's own README
before uploading, a single typo'd filename will just silently 404 rather
than break the build.

Nothing else needed changing — every other asset folder this update touches
(`fish`, `rods`, `baits`, `pets`, `eggs`, `enchantments`, `World0`, `World1`,
`currencies`) already existed and already has the right filenames referenced
in their respective `src/data/*.ts` files.
