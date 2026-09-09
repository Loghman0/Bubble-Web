# Rarity icon assets

Drop one square PNG per tier here, named exactly (lowercase, no spaces):

- common.png
- uncommon.png
- rare.png
- epic.png
- legendary.png
- mythic.png
- ancient.png
- celestial.png
- divine.png

They're picked up automatically everywhere `RarityBadge` or `RarityIcon` is
used (catalog cards, item detail pages, the Discord message mockups on the
homepage) — no code changes needed. Until a given file is uploaded, that
tier falls back to a small emoji glyph automatically, so the site never
shows a broken image.

Recommended: transparent background, roughly square (the site renders them
at 14–16px inline and up to ~24px in a few places), consistent style across
all 9 so the rarity ladder reads as one set.
