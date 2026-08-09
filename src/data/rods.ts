import type { Rod } from "@/types/game";

/**
 * Fishing rods, mirrored from the Bubble Discord bot.
 * Artwork: place the 128x128 image at `public/assets/rods/<key>.png`.
 */
const seeds: [key: string, tier: Rod["tier"]][] = [
  ["wood_rod", "Beginner"],
  ["bamboo_rod", "Beginner"],
  ["iron_rod", "Beginner"],
  ["steel_rod", "Journeyman"],
  ["reinforced_rod", "Journeyman"],
  ["gold_rod", "Journeyman"],
  ["coral_rod", "Master"],
  ["dragon_rod", "Master"],
  ["cosmic_rod", "Master"],
];

const title = (key: string) =>
  key
    .split("_")
    .map((w) => w[0]!.toUpperCase() + w.slice(1))
    .join(" ");

const ROD_DATA: Record<string, any> = {
  "wood_rod": {
    "id": "wood_rod",
    "numId": 1,
    "name": "Wood Rod",
    "level": 1,
    "price": 0,
    "currency": "coins",
    "luck": 0,
    "power": 1,
    "castSpeedMs": 0,
    "treasureChance": 0.01,
    "monsterResistance": 0,
    "durability": 100,
    "enchantSlots": 0,
    "description": "Everyone starts here. Free, humble, gets the job done."
  },
  "bamboo_rod": {
    "id": "bamboo_rod",
    "numId": 2,
    "name": "Bamboo Rod",
    "level": 10,
    "price": 800,
    "currency": "coins",
    "luck": 3,
    "power": 4,
    "castSpeedMs": -150,
    "treasureChance": 0.018,
    "monsterResistance": 1,
    "durability": 140,
    "enchantSlots": 0,
    "description": "Light and flexible, a real step up from a stick."
  },
  "iron_rod": {
    "id": "iron_rod",
    "numId": 3,
    "name": "Iron Rod",
    "level": 25,
    "price": 4500,
    "currency": "coins",
    "luck": 7,
    "power": 9,
    "castSpeedMs": -280,
    "treasureChance": 0.028,
    "monsterResistance": 3,
    "durability": 190,
    "enchantSlots": 1,
    "description": "Forged, not whittled. Sturdy enough for a real fight."
  },
  "steel_rod": {
    "id": "steel_rod",
    "numId": 4,
    "name": "Steel Rod",
    "level": 60,
    "price": 18000,
    "currency": "coins",
    "luck": 16,
    "power": 22,
    "castSpeedMs": -420,
    "treasureChance": 0.05,
    "monsterResistance": 9,
    "durability": 260,
    "enchantSlots": 2,
    "description": "Reliable and battle-tested — the workhorse of any serious angler."
  },
  "reinforced_rod": {
    "id": "reinforced_rod",
    "numId": 5,
    "name": "Reinforced Rod",
    "level": 130,
    "price": 60000,
    "currency": "coins",
    "luck": 30,
    "power": 42,
    "castSpeedMs": -550,
    "treasureChance": 0.08,
    "monsterResistance": 18,
    "durability": 350,
    "enchantSlots": 3,
    "description": "Built to survive sea monsters, not just fish."
  },
  "gold_rod": {
    "id": "gold_rod",
    "numId": 6,
    "name": "Gold Rod",
    "level": 220,
    "price": 220000,
    "currency": "coins",
    "luck": 48,
    "power": 66,
    "castSpeedMs": -650,
    "treasureChance": 0.11,
    "monsterResistance": 28,
    "durability": 440,
    "enchantSlots": 4,
    "description": "A status symbol as much as a tool. Gates several hidden fish."
  },
  "coral_rod": {
    "id": "coral_rod",
    "numId": 7,
    "name": "Coral Rod",
    "level": 310,
    "price": 3200,
    "currency": "gems",
    "luck": 72,
    "power": 98,
    "castSpeedMs": -740,
    "treasureChance": 0.15,
    "monsterResistance": 42,
    "durability": 540,
    "enchantSlots": 5,
    "description": "Grown, not built, in the heart of the reef."
  },
  "dragon_rod": {
    "id": "dragon_rod",
    "numId": 8,
    "name": "Dragon Rod",
    "level": 390,
    "price": 7500,
    "currency": "gems",
    "luck": 108,
    "power": 150,
    "castSpeedMs": -820,
    "treasureChance": 0.21,
    "monsterResistance": 62,
    "durability": 680,
    "enchantSlots": 7,
    "description": "Carved from a single dragon-tooth. Still faintly warm."
  },
  "cosmic_rod": {
    "id": "cosmic_rod",
    "numId": 9,
    "name": "Cosmic Rod",
    "level": 460,
    "price": 16000,
    "currency": "gems",
    "luck": 165,
    "power": 230,
    "castSpeedMs": -900,
    "treasureChance": 0.3,
    "monsterResistance": 92,
    "durability": 880,
    "enchantSlots": 9,
    "isPremium": true,
    "description": "Reportedly not from this world. Endgame players only — gates the Celestial Leviathan."
  }
};

export const rods: Rod[] = seeds.map(([key, tier]) => ({
  key,
  slug: key.replace(/_/g, "-"),
  name: title(key),
  tier,
  image: `/assets/rods/${key}.png`,
  price: ROD_DATA[key]?.price ?? 0,
  currency: ROD_DATA[key]?.currency ?? "coins",
  luck: ROD_DATA[key]?.luck ?? 0,
  power: ROD_DATA[key]?.power ?? 0,
  durability: ROD_DATA[key]?.durability ?? 0,
  enchantSlots: ROD_DATA[key]?.enchantSlots ?? 0,
  description: ROD_DATA[key]?.description ?? "",
}));

export const rodBySlug = (slug: string) => rods.find((r) => r.slug === slug);

export const rodTiers: Rod["tier"][] = ["Beginner", "Journeyman", "Master"];
