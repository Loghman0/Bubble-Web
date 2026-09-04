import type { Rod } from "@/types/game";

/**
 * Fishing rods, mirrored from the Bubble Discord bot's `data/rods.js`.
 * Three tiers of three per world — Beginner (Lv 1-25), Journeyman (Lv 60-220),
 * Master (Lv 270-380). Artwork: `public/assets/rods/<key>.png`.
 *
 * Post-Phase-6 (Prestige System): every rod carries a `worldId` and a
 * `requiredLevel` (the player level needed to purchase it — distinct from
 * the bot's internal `level` field, which gates against `fish.requiredRodLevel`
 * and isn't otherwise surfaced here). World 1 ("The Neon Tide") reuses World
 * 0's exact level/price curve with a reskinned id/name/description per rod
 * — see `data/worlds.ts`.
 */
const seeds: [key: string, worldId: number, tier: Rod["tier"], name: string][] = [
  ["wood_rod", 0, "Beginner", "Wood Rod"],
  ["bamboo_rod", 0, "Beginner", "Bamboo Rod"],
  ["iron_rod", 0, "Beginner", "Iron Rod"],
  ["steel_rod", 0, "Journeyman", "Steel Rod"],
  ["reinforced_rod", 0, "Journeyman", "Reinforced Rod"],
  ["gold_rod", 0, "Journeyman", "Gold Rod"],
  ["coral_rod", 0, "Master", "Coral Rod"],
  ["dragon_rod", 0, "Master", "Dragon Rod"],
  ["cosmic_rod", 0, "Master", "Cosmic Rod"],
  ["sunflower_rod", 1, "Beginner", "Sunflower Rod"],
  ["junk_rod", 1, "Beginner", "Junk Rod"],
  ["peppermint_rod", 1, "Beginner", "Peppermint Rod"],
  ["frozen_rod", 1, "Journeyman", "Frozen Rod"],
  ["neoncyber_rod", 1, "Journeyman", "Neon Cyber Rod"],
  ["lightning_rod", 1, "Journeyman", "Lightning Rod"],
  ["steampunk_rod", 1, "Master", "Steampunk Rod"],
  ["royalscepter_rod", 1, "Master", "Royal Scepter Rod"],
  ["necobone_rod", 1, "Master", "Neco Bone Rod"],
];

interface RodStats {
  price: number;
  currency: Rod["currency"];
  requiredLevel: number;
  luck: number;
  power: number;
  durability: number;
  enchantSlots: number;
  description: string;
}

const ROD_DATA: Record<string, RodStats> = {
  wood_rod: {
    price: 0,
    currency: "coins",
    requiredLevel: 1,
    luck: 0,
    power: 1,
    durability: 100,
    enchantSlots: 0,
    description: "Everyone starts here. Free, humble, gets the job done.",
  },
  bamboo_rod: {
    price: 1500,
    currency: "coins",
    requiredLevel: 5,
    luck: 3,
    power: 4,
    durability: 140,
    enchantSlots: 0,
    description: "Light and flexible, a real step up from a stick.",
  },
  iron_rod: {
    price: 9000,
    currency: "coins",
    requiredLevel: 15,
    luck: 7,
    power: 9,
    durability: 190,
    enchantSlots: 1,
    description: "Forged, not whittled. Sturdy enough for a real fight.",
  },
  steel_rod: {
    price: 45000,
    currency: "coins",
    requiredLevel: 40,
    luck: 16,
    power: 22,
    durability: 260,
    enchantSlots: 2,
    description: "Reliable and battle-tested, the workhorse of any serious angler.",
  },
  reinforced_rod: {
    price: 160000,
    currency: "coins",
    requiredLevel: 90,
    luck: 30,
    power: 42,
    durability: 350,
    enchantSlots: 3,
    description: "Built to survive sea monsters, not just fish.",
  },
  gold_rod: {
    price: 300000,
    currency: "coins",
    requiredLevel: 160,
    luck: 48,
    power: 66,
    durability: 440,
    enchantSlots: 4,
    description: "A status symbol as much as a tool. Gates several hidden fish.",
  },
  coral_rod: {
    price: 750000,
    currency: "coins",
    requiredLevel: 200,
    luck: 72,
    power: 98,
    durability: 540,
    enchantSlots: 5,
    description: "Grown, not built, in the heart of the reef.",
  },
  dragon_rod: {
    price: 3000000,
    currency: "coins",
    requiredLevel: 260,
    luck: 108,
    power: 150,
    durability: 680,
    enchantSlots: 7,
    description: "Carved from a single dragon-tooth. Still faintly warm.",
  },
  cosmic_rod: {
    price: 7500000,
    currency: "coins",
    requiredLevel: 320,
    luck: 165,
    power: 230,
    durability: 880,
    enchantSlots: 9,
    description:
      "Reportedly not from this world. Endgame players only, it gates the Celestial Leviathan.",
  },
  sunflower_rod: {
    price: 0,
    currency: "coins",
    requiredLevel: 1,
    luck: 0,
    power: 1,
    durability: 100,
    enchantSlots: 0,
    description: "Bright, warm, and free. A new world begins here.",
  },
  junk_rod: {
    price: 1500,
    currency: "coins",
    requiredLevel: 5,
    luck: 3,
    power: 4,
    durability: 140,
    enchantSlots: 0,
    description: "Assembled from scrap. Barely holds together but gets the fish biting.",
  },
  peppermint_rod: {
    price: 9000,
    currency: "coins",
    requiredLevel: 15,
    luck: 7,
    power: 9,
    durability: 190,
    enchantSlots: 1,
    description: "Candy-striped and surprisingly rigid. First rod to actually fight back.",
  },
  frozen_rod: {
    price: 45000,
    currency: "coins",
    requiredLevel: 40,
    luck: 16,
    power: 22,
    durability: 260,
    enchantSlots: 2,
    description: "Preserved in glacier resin. Casts with precision in the coldest water.",
  },
  neoncyber_rod: {
    price: 160000,
    currency: "coins",
    requiredLevel: 90,
    luck: 30,
    power: 42,
    durability: 350,
    enchantSlots: 3,
    description: "Glows in the deep. A signal fish can't ignore.",
  },
  lightning_rod: {
    price: 300000,
    currency: "coins",
    requiredLevel: 160,
    luck: 48,
    power: 66,
    durability: 440,
    enchantSlots: 4,
    description: "Channels static into every cast. Fish feel it a hundred meters out.",
  },
  steampunk_rod: {
    price: 750000,
    currency: "coins",
    requiredLevel: 200,
    luck: 72,
    power: 98,
    durability: 540,
    enchantSlots: 5,
    description: "Clockwork tension in every gear. Build to dominate the mechanical depths.",
  },
  royalscepter_rod: {
    price: 3000000,
    currency: "coins",
    requiredLevel: 260,
    luck: 108,
    power: 150,
    durability: 680,
    enchantSlots: 7,
    description: "More scepter than rod. Neon Tide lords wield this as a symbol of supremacy.",
  },
  necobone_rod: {
    price: 7500000,
    currency: "coins",
    requiredLevel: 320,
    luck: 165,
    power: 230,
    durability: 880,
    enchantSlots: 9,
    description:
      "Ancient bone from something that ruled the first world. Still radiates authority.",
  },
};

export const rods: Rod[] = seeds.map(([key, worldId, tier, name]) => ({
  key,
  slug: key.replace(/_/g, "-"),
  name,
  tier,
  image: `/assets/rods/${key}.png`,
  price: ROD_DATA[key]?.price ?? 0,
  currency: ROD_DATA[key]?.currency ?? "coins",
  luck: ROD_DATA[key]?.luck ?? 0,
  power: ROD_DATA[key]?.power ?? 0,
  durability: ROD_DATA[key]?.durability ?? 0,
  enchantSlots: ROD_DATA[key]?.enchantSlots ?? 0,
  requiredLevel: ROD_DATA[key]?.requiredLevel ?? 1,
  description: ROD_DATA[key]?.description ?? "",
  worldId,
}));

export const rodBySlug = (slug: string) => rods.find((r) => r.slug === slug);

export const rodTiers: Rod["tier"][] = ["Beginner", "Journeyman", "Master"];

export const rodsByWorld = (worldId: number) => rods.filter((r) => (r.worldId ?? 0) === worldId);
