/**
 * PRESTIGE SYSTEM — mirrored 1:1 from the Bubble bot's
 * `services/prestigeService.js` and `config/config.js`'s `prestige` block.
 * See the Prestige wiki article for the full player-facing explanation.
 */

/** Player level required before Prestige becomes available at all. */
export const PRESTIGE_MIN_LEVEL = 500;

/** XP bonus granted immediately after prestiging. */
export const PRESTIGE_BOOST_XP_PERCENT = 30;

/** How many days the post-prestige XP boost lasts. */
export const PRESTIGE_BOOST_DURATION_DAYS = 3;

/** Hard ceiling applied once the boost is merged into a player's other XP bonuses. */
export const PRESTIGE_BOOST_MAX_PERCENT = 50;

/**
 * What survives a Prestige reset vs. what's wiped, exactly as implemented in
 * `prestigeService.prestige()`'s atomic update.
 */
export const PRESTIGE_KEPT = [
  "Gems",
  "Ancient Museum Coins",
  "Prestige count (and any prestige-gated cosmetics/titles)",
  "Museum collection & museum buffs",
  "Achievements",
  "Owned minions. Level, XP and ownership persist (their assigned rod and backpack contents are cleared, matching the rod/backpack reset below)",
  "Owned backpacks. Every backpack tier you've bought stays bought",
  "Guild membership",
  "Your completed dex isn't deleted on prestige. It's archived internally (Legacy Collections) rather than wiped, even though there's no in-game command to browse it yet",
] as const;

export const PRESTIGE_RESET = [
  "Player level & XP (back to 1 / 0)",
  "Coins (reset to the starting amount)",
  "Fish inventory (your backpack is emptied)",
  "Owned rods (back to just the Wood Rod) and whichever rod was equipped",
  "Owned baits and owned eggs, and whichever bait was equipped",
  "Owned pets (back to none) and any eggs currently incubating",
  "Energy (refilled to max)",
  "Luck and pity counters (Ancient/Celestial/Divine pity resets to 0)",
] as const;

/**
 * Requirements to actually prestige, from `isEligibleForPrestige()`. Both
 * must be true at the same time.
 */
export const PRESTIGE_REQUIREMENTS = [
  `Reach player level ${PRESTIGE_MIN_LEVEL}`,
  "Catch at least one of every fish species in your CURRENT world (full Museum dex completion. Every species is progression-required, no exceptions)",
] as const;
