import type { Egg, Pet, Rarity } from "@/types/game";

/**
 * Companion pets, mirrored 1:1 from the Bubble Discord bot's `data/pets.js`.
 * Pets can ONLY be obtained by hatching an egg — see `eggs` below and each
 * egg's `eligiblePetIds`. Artwork: `public/assets/pets/<key>.png`.
 */
const PET_DATA: Record<string, any> = Object.fromEntries(
  [
  { id: "cat", numId: 1, name: "Cat", emoji: "🐱", unlockLevel: 1, skill: "luck", skillCategory: "luck", skillValue: 8, rarity: "common", description: "Judges your casting technique silently." },
  { id: "dog", numId: 2, name: "Dog", emoji: "🐶", unlockLevel: 1, skill: "extra_xp", skillCategory: "xp", skillValue: 0.12, rarity: "common", description: "Enthusiastic about literally every catch." },
  { id: "otter", numId: 3, name: "Otter", emoji: "🦦", unlockLevel: 5, skill: "extra_fish", skillCategory: "extra_fish", skillValue: 0.16, rarity: "uncommon", description: "Occasionally dives in and grabs a second fish for you." },
  { id: "penguin", numId: 4, name: "Penguin", emoji: "🐧", unlockLevel: 10, skill: "coin_bonus", skillCategory: "coin", skillValue: 0.15, rarity: "uncommon", description: "Waddles over with a small tip after every sale." },
  { id: "parrot", numId: 12, name: "Parrot", emoji: "🦜", unlockLevel: 12, skill: "energy_saver", skillCategory: "energy_cost", skillValue: 0.18, rarity: "uncommon", description: "Squawks encouragement that somehow makes casting less tiring." },
  { id: "seal", numId: 5, name: "Seal", emoji: "🦭", unlockLevel: 18, skill: "treasure_chance", skillCategory: "treasure", skillValue: 0.06, rarity: "rare", description: "Has a nose for sunken chests." },
  { id: "shark_pup", numId: 6, name: "Shark Pup", emoji: "🦈", unlockLevel: 28, skill: "critical_catch", skillCategory: "critical", skillValue: 0.25, rarity: "rare", description: "Occasionally scares extra weight onto your catch." },
  { id: "axolotl", numId: 7, name: "Axolotl", emoji: "🦎", unlockLevel: 40, skill: "auto_repair", skillCategory: "repair", skillValue: 3.0, rarity: "epic", description: "Slowly regenerates your rod's durability. Literally." },
  { id: "kraken_hatchling", numId: 8, name: "Kraken Hatchling", emoji: "🐙", unlockLevel: 60, skill: "extra_fish", skillCategory: "extra_fish", skillValue: 0.32, rarity: "epic", description: "Small enough to be a pet. For now." },
  { id: "sea_spirit", numId: 9, name: "Sea Spirit", emoji: "👻", unlockLevel: 90, skill: "luck", skillCategory: "luck", skillValue: 45, rarity: "legendary", description: "Not quite alive, extremely lucky to have around." },
  { id: "dragon", numId: 10, name: "Dragon", emoji: "🐉", unlockLevel: 140, skill: "treasure_chance", skillCategory: "treasure", skillValue: 0.15, rarity: "legendary", description: "Hoards instincts kick in near every treasure chest." },
  { id: "void_wisp", numId: 11, name: "Void Wisp", emoji: "🌀", unlockLevel: 280, skill: "critical_catch", skillCategory: "critical", skillValue: 0.5, rarity: "mythic", description: "Bends probability just slightly, just for you." },
  { id: "capybara", numId: 13, name: "Capybara", unlockLevel: 1, skill: "energy_regen", skillCategory: "energy_regen", skillValue: 0.14, rarity: "common", description: "Unbothered by everything. Somehow you rest faster with it around." },
  { id: "kitsune_pup", numId: 14, name: "Kitsune Pup", unlockLevel: 35, skill: "luck", skillCategory: "luck", skillValue: 20, rarity: "rare", description: "Three tails, one blue flame, and a talent for bending small odds." },
  { id: "monolith_golem", numId: 15, name: "Monolith Golem", unlockLevel: 200, skill: "rarity_boost", skillCategory: "rarity", skillValue: 0.22, rarity: "ancient", description: "Knuckle-walks the shoreline and drags rarer things up with the tide." },
  ].map((p) => [p.id, p]),
);

const rarityLabel = (r: string): Rarity =>
  (r.charAt(0).toUpperCase() + r.slice(1)) as Rarity;

export const pets: Pet[] = Object.values(PET_DATA)
  .sort((a: any, b: any) => a.numId - b.numId)
  .map((p: any) => ({
    key: p.id,
    slug: p.id.replace(/_/g, "-"),
    name: p.name,
    emoji: p.emoji,
    image: `/assets/pets/${p.id}.png`,
    rarity: rarityLabel(p.rarity),
    unlockLevel: p.unlockLevel,
    skill: p.skill,
    skillCategory: p.skillCategory,
    skillValue: p.skillValue,
    description: p.description,
  }));

export const petBySlug = (slug: string) => pets.find((p) => p.slug === slug);

/**
 * Eggs, mirrored 1:1 from the Bubble Discord bot's `data/eggs.js`.
 * Each egg can only hatch its own `eligiblePetIds` pool — adding a pet to
 * the roster never changes an existing egg's odds unless listed here.
 * Artwork: `public/assets/eggs/<key>.png`.
 */
const EGG_DATA: Record<string, any> = Object.fromEntries(
  [
  { id: "common_egg", tier: 1, name: "Common Egg", emoji: "🥚", price: 150, currency: "gems", baseHatchXp: 120, hatchXpPerLevel: 2, eligiblePetIds: ["cat", "dog", "capybara", "otter", "parrot"], dropWeights: { common: 620, uncommon: 380 }, description: "A speckled egg found near shore. Warm, and a little heavier than it looks." },
  { id: "rare_egg", tier: 2, name: "Rare Egg", emoji: "💎", price: 500, currency: "gems", baseHatchXp: 260, hatchXpPerLevel: 3, eligiblePetIds: ["penguin", "seal", "shark_pup", "kitsune_pup", "axolotl"], dropWeights: { uncommon: 300, rare: 450, epic: 250 }, description: "Faintly glittering, faintly humming. Deep-water anglers swear these hatch stronger companions." },
  { id: "ancient_egg", tier: 3, name: "Ancient Egg", price: 1500, currency: "gems", baseHatchXp: 420, hatchXpPerLevel: 4, eligiblePetIds: ["kraken_hatchling", "sea_spirit", "dragon", "void_wisp", "monolith_golem"], dropWeights: { epic: 400, legendary: 450, mythic: 150, ancient: 40 }, description: "Half-fossilized, still ticking with life. The Museum trades these for a reason." },
  ].map((e) => [e.id, e]),
);

export const eggs: Egg[] = Object.values(EGG_DATA)
  .sort((a: any, b: any) => a.tier - b.tier)
  .map((e: any) => ({
    key: e.id,
    slug: e.id.replace(/_/g, "-"),
    name: e.name,
    emoji: e.emoji,
    image: `/assets/eggs/${e.id}.png`,
    tier: e.tier,
    price: e.price,
    currency: e.currency,
    baseHatchXp: e.baseHatchXp,
    hatchXpPerLevel: e.hatchXpPerLevel,
    eligiblePetIds: e.eligiblePetIds,
    dropWeights: e.dropWeights,
    description: e.description,
  }));

export const eggBySlug = (slug: string) => eggs.find((e) => e.slug === slug);

/** Pets hatchable from a given egg, in roster order. */
export const petsForEgg = (egg: Egg): Pet[] =>
  egg.eligiblePetIds
    .map((id) => pets.find((p) => p.key === id))
    .filter((p): p is Pet => Boolean(p));
