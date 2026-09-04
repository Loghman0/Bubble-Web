import type { Minion } from "@/types/game";

/**
 * Minion catalog, mirrored 1:1 from the Bubble Discord bot's `data/minions.js`.
 * Minions are bought from the Museum Shop with Ancient Museum Coins and only
 * ever fish as a byproduct of the OWNER actively using `/fish` — see the
 * Minions wiki article for the full mechanic and the leveling/rod-gating math.
 *
 * Artwork: `public/assets/minions/<key>.png`.
 */
const MINION_DATA: Record<string, Minion> = Object.fromEntries(
  (
    [
      {
        id: "nimbus_hauler",
        name: "Nimbus-Hauler",
        tagline: "Capacity & reliable fishing",
        price: 1800,
        currency: "ancientTokens",
        baseAttemptsPerMinute: 3.0,
        attemptsGrowthPerLevel: 0.012,
        baseBackpackCapacity: 60,
        legendaryChance: 0.006,
        mythicChance: 0.001,
        rodDurabilityEfficiency: 1.25,
        description: "The dependable workhorse. Not flashy, but it never stops hauling in the basics.",
      },
      {
        id: "fen_sifter",
        name: "Fen-Sifter",
        tagline: "Balanced all-round performance",
        price: 4500,
        currency: "ancientTokens",
        baseAttemptsPerMinute: 3.6,
        attemptsGrowthPerLevel: 0.016,
        baseBackpackCapacity: 75,
        legendaryChance: 0.012,
        mythicChance: 0.003,
        rodDurabilityEfficiency: 1.4,
        description: "A quicker eye for the good stuff. Clearly worth its higher price over Nimbus-Hauler.",
      },
      {
        id: "lure_kin",
        name: "Lure-Kin",
        tagline: "Best access to high-rarity fish",
        price: 9000,
        currency: "ancientTokens",
        baseAttemptsPerMinute: 4.2,
        attemptsGrowthPerLevel: 0.018,
        baseBackpackCapacity: 90,
        legendaryChance: 0.02,
        mythicChance: 0.007,
        rodDurabilityEfficiency: 1.6,
        description: "The specialist. Every cast is a real shot at something special.",
      },
    ] as {
      id: string;
      name: string;
      tagline: string;
      price: number;
      currency: "coins" | "gems" | "ancientTokens";
      baseAttemptsPerMinute: number;
      attemptsGrowthPerLevel: number;
      baseBackpackCapacity: number;
      legendaryChance: number;
      mythicChance: number;
      rodDurabilityEfficiency: number;
      description: string;
    }[]
  ).map((m) => [
    m.id,
    {
      key: m.id,
      slug: m.id.replace(/_/g, "-"),
      name: m.name,
      tagline: m.tagline,
      image: `/assets/minions/${m.id}.png`,
      price: m.price,
      currency: m.currency,
      baseAttemptsPerMinute: m.baseAttemptsPerMinute,
      attemptsGrowthPerLevel: m.attemptsGrowthPerLevel,
      baseBackpackCapacity: m.baseBackpackCapacity,
      legendaryChance: m.legendaryChance,
      mythicChance: m.mythicChance,
      rodDurabilityEfficiency: m.rodDurabilityEfficiency,
      description: m.description,
    } satisfies Minion,
  ]),
);

export const minions: Minion[] = Object.values(MINION_DATA);

export const minionBySlug = (slug: string) => minions.find((m) => m.slug === slug);

export const minionByKey = (key: string) => MINION_DATA[key];

/** Minions never level past 100. */
export const MAX_MINION_LEVEL = 100;

/** Flat capacity bonus ADDED to a minion's baseBackpackCapacity once it reaches each level. Sparse, meaningful milestones — not a per-level increment. */
export const MINION_CAPACITY_MILESTONES: { level: number; bonus: number }[] = [
  { level: 10, bonus: 20 },
  { level: 20, bonus: 30 },
  { level: 30, bonus: 40 },
  { level: 50, bonus: 60 },
  { level: 75, bonus: 90 },
  { level: 100, bonus: 160 },
];

/**
 * Minimum Minion Level required before a rod of a given internal power level
 * can be assigned to a minion. Feed this the value from
 * `data/conditions.ts#ROD_POWER_LEVEL[rodKey]` — NOT `Rod.power` or
 * `Rod.requiredLevel` from `data/rods.ts`, both of which are different,
 * unrelated scales. Mirrors `requiredMinionLevelForRod` in the bot's
 * `data/minions.js` exactly.
 */
export function requiredMinionLevelForRod(rodInternalLevel: number): number {
  if (rodInternalLevel <= 25) return 1;
  if (rodInternalLevel <= 60) return 10;
  if (rodInternalLevel <= 130) return 25;
  if (rodInternalLevel <= 220) return 45;
  if (rodInternalLevel <= 270) return 60;
  if (rodInternalLevel <= 320) return 80;
  return 100;
}
