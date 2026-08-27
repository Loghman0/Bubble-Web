import type { Bait } from "@/types/game";

/**
 * Baits, mirrored 1:1 from the Bubble Discord bot's `data/baits.js`.
 * All baits are priced in coins — the top three per world (e.g. Starlight
 * Dust, Dragon Blood, Magical Dust in World 0) are a deliberate late-game
 * coin sink. Artwork: `public/assets/baits/<key>.png`.
 *
 * Post-Phase-6 (Prestige System): every bait carries a `worldId` and a
 * `requiredLevel` (minimum player level to purchase). World 1 ("Neon
 * Frontier") reuses World 0's exact requiredLevel/price curve with a
 * reskinned id/name/description per bait — see `data/worlds.ts`. Tiers
 * (Beginner/Journeyman/Master) are derived here from `requiredLevel` bands
 * so a future world's baits are grouped automatically without manual tagging.
 */
const seeds: [key: string, worldId: number, tier: Bait["tier"], name: string][] = [
  ["worm", 0, "Beginner", "Worm"],
  ["shrimp", 0, "Beginner", "Shrimp"],
  ["cricket", 0, "Beginner", "Cricket"],
  ["leech", 0, "Beginner", "Leech"],
  ["squid_strip", 0, "Beginner", "Squid Strip"],
  ["enchanted_worm", 0, "Journeyman", "Enchanted Worm"],
  ["magic_worm", 0, "Journeyman", "Magic Worm"],
  ["crystal_shrimp", 0, "Journeyman", "Crystal Shrimp"],
  ["gold_worm", 0, "Journeyman", "Gold Worm"],
  ["starlight_dust", 0, "Master", "Starlight Dust"],
  ["dragon_blood", 0, "Master", "Dragon Blood"],
  ["magical_dust", 0, "Master", "Magical Dust"],
  ["blueberry", 1, "Beginner", "Blueberry"],
  ["clockwork_beetle", 1, "Beginner", "Clockwork Beetle"],
  ["clockwork_minnow", 1, "Beginner", "Clockwork Minnow"],
  ["creepy_eyeball", 1, "Beginner", "Creepy Eyeball"],
  ["crispy_bacon", 1, "Beginner", "Crispy Bacon"],
  ["crystal_snail", 1, "Journeyman", "Crystal Snail"],
  ["glowing_spore", 1, "Journeyman", "Glowing Spore"],
  ["magnetic_grub", 1, "Journeyman", "Magnetic Grub"],
  ["neon_gummy", 1, "Journeyman", "Neon Gummy"],
  ["swiss_cheese", 1, "Master", "Swiss Cheese"],
  ["golden_scarab", 1, "Master", "Golden Scarab"],
  ["toxic_sludge", 1, "Master", "Toxic Sludge"],
];

interface BaitStats {
  price: number;
  currency: Bait["currency"];
  requiredLevel: number;
  rareChanceMult: number;
  legendaryChanceMult: number;
  weightMult: number;
  treasureChanceAdd: number;
  description: string;
}

const BAIT_DATA: Record<string, BaitStats> = {
  worm: {
    price: 3,
    currency: "coins",
    requiredLevel: 1,
    rareChanceMult: 1,
    legendaryChanceMult: 1,
    weightMult: 1,
    treasureChanceAdd: 0,
    description: "The classic. Works everywhere, excites no one.",
  },
  shrimp: {
    price: 8,
    currency: "coins",
    requiredLevel: 1,
    rareChanceMult: 1.08,
    legendaryChanceMult: 1,
    weightMult: 1.02,
    treasureChanceAdd: 0,
    description: "A step up from worm. Slightly.",
  },
  cricket: {
    price: 16,
    currency: "coins",
    requiredLevel: 1,
    rareChanceMult: 1.15,
    legendaryChanceMult: 1,
    weightMult: 1.05,
    treasureChanceAdd: 0.003,
    description: "Loud. Fish seem to like that.",
  },
  leech: {
    price: 30,
    currency: "coins",
    requiredLevel: 1,
    rareChanceMult: 1.25,
    legendaryChanceMult: 1.03,
    weightMult: 1.1,
    treasureChanceAdd: 0.005,
    description: "Unpleasant to hook. Effective anyway.",
  },
  squid_strip: {
    price: 60,
    currency: "coins",
    requiredLevel: 20,
    rareChanceMult: 1.4,
    legendaryChanceMult: 1.08,
    weightMult: 1.15,
    treasureChanceAdd: 0.008,
    description: "Ocean fish can't resist it.",
  },
  enchanted_worm: {
    price: 150,
    currency: "coins",
    requiredLevel: 50,
    rareChanceMult: 1.6,
    legendaryChanceMult: 1.18,
    weightMult: 1.2,
    treasureChanceAdd: 0.012,
    description: "Faintly glowing. Somebody enchanted a worm. For science.",
  },
  magic_worm: {
    price: 180,
    currency: "coins",
    requiredLevel: 70,
    rareChanceMult: 1.85,
    legendaryChanceMult: 1.3,
    weightMult: 1.28,
    treasureChanceAdd: 0.016,
    description: "Never runs out of wiggle.",
  },
  crystal_shrimp: {
    price: 400,
    currency: "coins",
    requiredLevel: 100,
    rareChanceMult: 2.15,
    legendaryChanceMult: 1.5,
    weightMult: 1.35,
    treasureChanceAdd: 0.02,
    description: "Grown in the Crystal Cave, apparently.",
  },
  gold_worm: {
    price: 900,
    currency: "coins",
    requiredLevel: 140,
    rareChanceMult: 2.5,
    legendaryChanceMult: 1.75,
    weightMult: 1.42,
    treasureChanceAdd: 0.026,
    description: "Worth more than most of what it catches. Almost.",
  },
  starlight_dust: {
    price: 5000,
    currency: "coins",
    requiredLevel: 200,
    rareChanceMult: 3,
    legendaryChanceMult: 2.2,
    weightMult: 1.55,
    treasureChanceAdd: 0.034,
    description: "Falls slower than it should through water.",
  },
  dragon_blood: {
    price: 12000,
    currency: "coins",
    requiredLevel: 240,
    rareChanceMult: 3.6,
    legendaryChanceMult: 2.8,
    weightMult: 1.68,
    treasureChanceAdd: 0.042,
    description: "Never fully cools. Required to bait the Volcano's worst.",
  },
  magical_dust: {
    price: 28000,
    currency: "coins",
    requiredLevel: 310,
    rareChanceMult: 4.5,
    legendaryChanceMult: 3.8,
    weightMult: 1.85,
    treasureChanceAdd: 0.055,
    description: "Required to hook the largest things that swim. Or float.",
  },
  blueberry: {
    price: 4,
    currency: "coins",
    requiredLevel: 1,
    rareChanceMult: 1,
    legendaryChanceMult: 1,
    weightMult: 1,
    treasureChanceAdd: 0,
    description: "Surprisingly appealing to the denizens of The Neon Tide.",
  },
  clockwork_beetle: {
    price: 10,
    currency: "coins",
    requiredLevel: 1,
    rareChanceMult: 1.08,
    legendaryChanceMult: 1,
    weightMult: 1.02,
    treasureChanceAdd: 0,
    description: "Ticks faintly. Something about the rhythm is irresistible.",
  },
  clockwork_minnow: {
    price: 18,
    currency: "coins",
    requiredLevel: 1,
    rareChanceMult: 1.16,
    legendaryChanceMult: 1,
    weightMult: 1.05,
    treasureChanceAdd: 0.003,
    description: "Gears and springs, silver fins. Moves like a real fish if you squint.",
  },
  creepy_eyeball: {
    price: 32,
    currency: "coins",
    requiredLevel: 1,
    rareChanceMult: 1.26,
    legendaryChanceMult: 1.03,
    weightMult: 1.1,
    treasureChanceAdd: 0.005,
    description: "Always watching. Fish seem transfixed by it.",
  },
  crispy_bacon: {
    price: 65,
    currency: "coins",
    requiredLevel: 20,
    rareChanceMult: 1.42,
    legendaryChanceMult: 1.08,
    weightMult: 1.15,
    treasureChanceAdd: 0.008,
    description: "Smells incredible. Works on everything with a nose.",
  },
  crystal_snail: {
    price: 160,
    currency: "coins",
    requiredLevel: 50,
    rareChanceMult: 1.62,
    legendaryChanceMult: 1.18,
    weightMult: 1.2,
    treasureChanceAdd: 0.012,
    description: "A snail encased in translucent crystal. Rare things come to investigate.",
  },
  glowing_spore: {
    price: 200,
    currency: "coins",
    requiredLevel: 70,
    rareChanceMult: 1.88,
    legendaryChanceMult: 1.3,
    weightMult: 1.28,
    treasureChanceAdd: 0.016,
    description: "Pulses softly in the dark. The deep things are drawn to it.",
  },
  magnetic_grub: {
    price: 420,
    currency: "coins",
    requiredLevel: 100,
    rareChanceMult: 2.18,
    legendaryChanceMult: 1.5,
    weightMult: 1.35,
    treasureChanceAdd: 0.02,
    description: "Vibrates subtly at the exact frequency that pulls rare fish upward.",
  },
  neon_gummy: {
    price: 950,
    currency: "coins",
    requiredLevel: 140,
    rareChanceMult: 2.55,
    legendaryChanceMult: 1.75,
    weightMult: 1.42,
    treasureChanceAdd: 0.026,
    description: "Synthetic, neon, and irresistible to things that glow themselves.",
  },
  swiss_cheese: {
    price: 5500,
    currency: "coins",
    requiredLevel: 200,
    rareChanceMult: 3.05,
    legendaryChanceMult: 2.2,
    weightMult: 1.55,
    treasureChanceAdd: 0.034,
    description: "The holes let the scent spread further. Old Neon Tide wisdom.",
  },
  golden_scarab: {
    price: 12000,
    currency: "coins",
    requiredLevel: 240,
    rareChanceMult: 3.6,
    legendaryChanceMult: 2.8,
    weightMult: 1.68,
    treasureChanceAdd: 0.042,
    description:
      "An ancient beetle preserved in gold. The Neon Tide's rarest species can't resist its gleam.",
  },
  toxic_sludge: {
    price: 30000,
    currency: "coins",
    requiredLevel: 310,
    rareChanceMult: 4.6,
    legendaryChanceMult: 3.9,
    weightMult: 1.88,
    treasureChanceAdd: 0.058,
    description:
      "Lethal to most things. Required to hook the most dangerous species in The Neon Tide.",
  },
};

export const baits: Bait[] = seeds.map(([key, worldId, tier, name]) => ({
  key,
  slug: key.replace(/_/g, "-"),
  name,
  tier,
  image: `/assets/baits/${key}.png`,
  price: BAIT_DATA[key]?.price ?? 0,
  currency: BAIT_DATA[key]?.currency ?? "coins",
  requiredLevel: BAIT_DATA[key]?.requiredLevel ?? 1,
  rareChanceMult: BAIT_DATA[key]?.rareChanceMult ?? 1,
  legendaryChanceMult: BAIT_DATA[key]?.legendaryChanceMult ?? 1,
  weightMult: BAIT_DATA[key]?.weightMult ?? 1,
  treasureChanceAdd: BAIT_DATA[key]?.treasureChanceAdd ?? 0,
  description: BAIT_DATA[key]?.description ?? "",
  worldId,
}));

export const baitBySlug = (slug: string) => baits.find((b) => b.slug === slug);

export const baitsByWorld = (worldId: number) => baits.filter((b) => (b.worldId ?? 0) === worldId);
