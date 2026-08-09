# Bubble website — changed files

Copy these over your project, keeping the same paths. Deleted files:
- src/components/effects/SwimmingFish.tsx  (delete it)
- src/routes/enchants.tsx  (replaced by src/routes/enchants.index.tsx)

## What changed
1. Enchantment book art — enchants now use /assets/enchantments/<id>.png and
   <id>_1/_2/_3.png. New grid page + per-enchant detail page with all 3 levels.
2. Live leaderboard — now reports exactly why it's offline, retries, and shows
   last sync time. See .env.example: VITE_BUBBLE_API_URL must be a public HTTPS
   URL reachable by visitors (localhost only works on your own machine) and the
   bot API must send CORS headers for your site origin.
3. Homepage — swimming fish removed; bubbles only, with drift, varied sizes,
   reduced-motion and mobile handling, rendered client-side (no flicker).
4. Discord link (discord.gg/F6wCs93hhb) in navbar, mobile menu and footer.
5. Wiki rebuilt — category sidebar with counts, full-text search across section
   bodies, grouped results, per-article table of contents, inline command code
   styling, related articles and prev/next navigation. 4 new articles
   (Command reference, Energy & cooldowns, Market & trading, Glossary).
