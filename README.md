# Bubble Website — Ocean-Themed UI/UX Redesign

Verified: tsc --noEmit clean, full production build succeeds, and every
major route confirmed returning HTTP 200 with correct content via a live
dev server (homepage, all 6 catalog indexes, fish/rod detail pages, wiki
index and article pages, 404 handling).

## Design direction

Redesign-overhaul on top of the site's existing (already solid) oklch/glass
dark ocean design system, not a rebuild from scratch. Kept Baloo 2 (display)
+ Nunito Sans (body) since that pairing already correctly avoids generic
defaults. Primary visual reference: the "Creatures of the Deep" mood image
you provided (split horizon, pale sky over deep teal water, drifting kraken
silhouette) became the homepage's signature hero. The clean glass-panel
clarity of the second reference informed the UI chrome treatment.

## 1. Design system fixes

A real, pre-existing inconsistency: buttons used rounded-md, cards used
rounded-xl, badges used rounded-md, inputs used rounded-md, while the
game's own card components (FishCard, RarityBadge, etc.) already used
rounded-2xl/rounded-full. Locked a coherent 3-tier shape system (documented
in styles.css):

- Interactive/tag elements (buttons, badges, pills, nav chips) -> full pill
- Containers (cards, panels, glass surfaces, dialogs, dropdowns) -> rounded-2xl
- Form controls (inputs, selects) -> rounded-xl

Applied to: button.tsx, card.tsx, badge.tsx, input.tsx, dropdown-menu.tsx,
dialog.tsx, the Navbar/Footer logo marks, nav hover-chips, and the
404/error page buttons in __root.tsx.

Also gave buttons real tactile press/hover states (subtle lift + shadow
bloom on primary, active-scale on press) instead of a flat color swap.

## 2. Homepage, full rebuild

The original had a dead-centered hero with 3 competing CTA buttons, and
three sections in a row using the identical background-layer-plus-centered-
glass-cards formula, a textbook generic-AI-template pattern.

New structure, each section a genuinely different layout family:

- Hero: asymmetric split (copy left, floating glass stat card right), built
  on a new DeepHorizon backdrop component (pale-sky-to-deep-water split
  composition, drifting kraken silhouette, light rays, bubbles), the
  homepage's one unmistakable visual moment.
- How it plays: new 3-step numbered strip, did not exist before.
- Catalog bento: asymmetric grid (one large tile, rest smaller), replacing
  7 identical cards.
- Worlds/Prestige showcase: brand new section. The site never mentioned
  the Worlds/Prestige system on the homepage before, despite it being a
  whole game system.
- Stats and CTA: visually distinct full-bleed dark band, not a repeat of
  the hero.

## 3. Site-wide ambient atmosphere

New AmbientOcean component mounted once in __root.tsx: a fixed, very
subtle depth vignette plus a handful of slow bubbles behind every page.
Before this, 9 of 11 catalog/wiki pages had zero ocean texture at all (flat
background, PageHeader only). Deliberately much quieter than
DeepHorizon/OceanBackdrop (which stay section-scoped hero treatments) so it
does not fight individual pages' own compositions.

Catalog/wiki pages themselves keep their centered PageHeader, per the
frontend-design skill's own documented exception: centered utility headers
on filterable data-browser pages (fish encyclopedia, rod stat tables) are
the correct, expected pattern (Stripe docs, Linear, Notion templates all do
this), unlike a marketing homepage hero being centered, which was fixed.

## 4. Copy correctness sweep

Found and removed 145 em-dashes across 44 files (a banned character per the
design skill's typography rules) plus 2 more hidden as \u2014 Unicode
escapes in rods.ts that a literal-character search missed on the first
pass. Fixed with proper clause-splitting and capitalization, verified
against:

- The full 250-fish database (0 duplicate descriptions, 0
  lowercase-after-period grammar artifacts)
- Live rendered HTML from a running dev server, not just source

This also surfaced and fixed a real bug: several page title tags had been
mechanically damaged into broken fragments (e.g. "Fish Encyclopedia.
Bubble") during an earlier editing pass. All title strings across every
route now use a clean pipe separator ("Page | Section | Bubble"), verified
via curl against real rendered title tags.

Also fixed: an emoji used as an icon in the Footer's Vote button (now a
proper lucide Star icon, matching the Navbar's equivalent), and an
inconsistent "Join our Discord" vs "Join the Discord" CTA label (now one
canonical string everywhere).

## Files changed/added (48 total)

New components: DeepHorizon.tsx, AmbientOcean.tsx

Design system: styles.css, button.tsx, card.tsx, badge.tsx, input.tsx,
dropdown-menu.tsx, dialog.tsx

Layout: Navbar.tsx, Footer.tsx, __root.tsx

Rebuilt: index.tsx (homepage)

Copy/title fixes only (em-dash removal plus title separator fix, no
structural changes): every other route file, plus data/*.ts and
lib/catch-conditions.ts

## Deploying

Copy every file in this archive into the website repo at the same relative
paths, then npm install && npm run build.
