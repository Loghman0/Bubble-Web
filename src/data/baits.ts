import type { Bait } from "@/types/game";

/**
 * Baits, mirrored 1:1 from the Bubble Discord bot's `data/baits.js`.
 * All 12 baits are priced in coins — the top three (Starlight Dust, Dragon
 * Blood, Magical Dust) are a deliberate late-game coin sink rather than a
 * gem cost, so gems stay reserved for rods and Gem Eggs.
 *
 * `magical_dust` and `dragon_blood` are required by specific top-tier fish
 * (see `Fish.requiredBait`), which is why their multipliers are strongest.
 * Artwork: place the 128x128 image at `public/assets/baits/<key>.png`.
 */
const BAIT_DATA: Record<string, any> = Object.fromEntries(
  [
  { id: "worm", numId: 1, name: "Worm", price: 3, currency: "coins", rareChanceMult: 1, legendaryChanceMult: 1, weightMult: 1, treasureChanceAdd: 0, description: "The classic. Works everywhere, excites no one." },
  { id: "shrimp", numId: 2, name: "Shrimp", price: 8, currency: "coins", rareChanceMult: 1.08, legendaryChanceMult: 1, weightMult: 1.02, treasureChanceAdd: 0, description: "A step up from worm. Slightly." },
  { id: "cricket", numId: 3, name: "Cricket", price: 16, currency: "coins", rareChanceMult: 1.15, legendaryChanceMult: 1, weightMult: 1.05, treasureChanceAdd: 0.003, description: "Loud. Fish seem to like that." },
  { id: "leech", numId: 4, name: "Leech", price: 30, currency: "coins", rareChanceMult: 1.25, legendaryChanceMult: 1.03, weightMult: 1.1, treasureChanceAdd: 0.005, description: "Unpleasant to hook. Effective anyway." },
  { id: "squid_strip", numId: 5, name: "Squid Strip", price: 60, currency: "coins", rareChanceMult: 1.4, legendaryChanceMult: 1.08, weightMult: 1.15, treasureChanceAdd: 0.008, description: "Ocean fish can't resist it." },
  { id: "enchanted_worm", numId: 6, name: "Enchanted Worm", price: 220, currency: "coins", rareChanceMult: 1.6, legendaryChanceMult: 1.18, weightMult: 1.2, treasureChanceAdd: 0.012, description: "Faintly glowing. Somebody enchanted a worm. For science." },
  { id: "magic_worm", numId: 7, name: "Magic Worm", price: 500, currency: "coins", rareChanceMult: 1.85, legendaryChanceMult: 1.3, weightMult: 1.28, treasureChanceAdd: 0.016, description: "Never runs out of wiggle." },
  { id: "crystal_shrimp", numId: 8, name: "Crystal Shrimp", price: 1200, currency: "coins", rareChanceMult: 2.15, legendaryChanceMult: 1.5, weightMult: 1.35, treasureChanceAdd: 0.02, description: "Grown in the Crystal Cave, apparently." },
  { id: "gold_worm", numId: 9, name: "Gold Worm", price: 2800, currency: "coins", rareChanceMult: 2.5, legendaryChanceMult: 1.75, weightMult: 1.42, treasureChanceAdd: 0.026, description: "Worth more than most of what it catches. Almost." },
  { id: "starlight_dust", numId: 10, name: "Starlight Dust", price: 42000, currency: "coins", rareChanceMult: 3, legendaryChanceMult: 2.2, weightMult: 1.55, treasureChanceAdd: 0.034, description: "Falls slower than it should through water." },
  { id: "dragon_blood", numId: 11, name: "Dragon Blood", price: 85000, currency: "coins", rareChanceMult: 3.6, legendaryChanceMult: 2.8, weightMult: 1.68, treasureChanceAdd: 0.042, description: "Never fully cools. Required to bait the Volcano's worst." },
  { id: "magical_dust", numId: 12, name: "Magical Dust", price: 195000, currency: "coins", rareChanceMult: 4.5, legendaryChanceMult: 3.8, weightMult: 1.85, treasureChanceAdd: 0.055, description: "Required to hook the largest things that swim. Or float." },
  ].map((b) => [b.id, b]),
);

/**
 * The bot has no explicit bait tier field, so this groups the 12 baits into
 * three even brackets of 4 by their numId / price progression (matching the
 * pattern used for rods) for display purposes only.
 */
const TIER_BY_ID: Record<string, Bait["tier"]> = {
  worm: "Beginner",
  shrimp: "Beginner",
  cricket: "Beginner",
  leech: "Beginner",
  squid_strip: "Journeyman",
  enchanted_worm: "Journeyman",
  magic_worm: "Journeyman",
  crystal_shrimp: "Journeyman",
  gold_worm: "Master",
  starlight_dust: "Master",
  dragon_blood: "Master",
  magical_dust: "Master",
};

export const baits: Bait[] = Object.values(BAIT_DATA)
  .sort((a: any, b: any) => a.numId - b.numId)
  .map((b: any) => ({
    key: b.id,
    slug: b.id.replace(/_/g, "-"),
    name: b.name,
    tier: TIER_BY_ID[b.id] ?? "Beginner",
    image: `/assets/baits/${b.id}.png`,
    price: b.price,
    currency: b.currency,
    description: b.description,
    rareChanceMult: b.rareChanceMult,
    legendaryChanceMult: b.legendaryChanceMult,
    weightMult: b.weightMult,
    treasureChanceAdd: b.treasureChanceAdd,
  }));

export const baitBySlug = (slug: string) => baits.find((b) => b.slug === slug);
