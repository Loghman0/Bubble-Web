import type { Egg, Pet, Rarity } from "@/types/game";

/**
 * Companion pets, mirrored 1:1 from the Bubble Discord bot's `data/pets.js`.
 * Pets can ONLY be obtained by hatching an egg — see `eggs` below and each
 * egg's `eligiblePetIds`. Artwork: `public/assets/pets/<key>.png`.
 *
 * Post-Phase-6 (Prestige System): every pet and egg carries a `worldId`.
 * World 1 ("The Neon Tide") reuses World 0's exact rarity/skillValue/tier
 * curve with a reskinned roster — see `data/worlds.ts`.
 */
interface PetSeed {
  id: string;
  numId: number;
  name: string;
  emoji?: string;
  unlockLevel: number;
  skill: string;
  skillCategory: string;
  skillValue: number;
  rarity: string;
  description: string;
  worldId: number;
}

const PET_DATA: Record<string, PetSeed> = Object.fromEntries(
  (
    [
  {
    "worldId": 0,
    "id": "cat",
    "numId": 1,
    "name": "Cat",
    "emoji": "🐱",
    "unlockLevel": 1,
    "skill": "luck",
    "skillCategory": "luck",
    "skillValue": 8,
    "rarity": "common",
    "description": "Judges your casting technique silently."
  },
  {
    "worldId": 0,
    "id": "dog",
    "numId": 2,
    "name": "Dog",
    "emoji": "🐶",
    "unlockLevel": 1,
    "skill": "extra_xp",
    "skillCategory": "xp",
    "skillValue": 0.12,
    "rarity": "common",
    "description": "Enthusiastic about literally every catch."
  },
  {
    "worldId": 0,
    "id": "otter",
    "numId": 3,
    "name": "Otter",
    "emoji": "🦦",
    "unlockLevel": 5,
    "skill": "extra_fish",
    "skillCategory": "extra_fish",
    "skillValue": 0.16,
    "rarity": "uncommon",
    "description": "Occasionally dives in and grabs a second fish for you."
  },
  {
    "worldId": 0,
    "id": "penguin",
    "numId": 4,
    "name": "Penguin",
    "emoji": "🐧",
    "unlockLevel": 10,
    "skill": "coin_bonus",
    "skillCategory": "coin",
    "skillValue": 0.15,
    "rarity": "uncommon",
    "description": "Waddles over with a small tip after every sale."
  },
  {
    "worldId": 0,
    "id": "parrot",
    "numId": 12,
    "name": "Parrot",
    "emoji": "🦜",
    "unlockLevel": 12,
    "skill": "energy_saver",
    "skillCategory": "energy_cost",
    "skillValue": 0.18,
    "rarity": "uncommon",
    "description": "Squawks encouragement that somehow makes casting less tiring."
  },
  {
    "worldId": 0,
    "id": "seal",
    "numId": 5,
    "name": "Seal",
    "emoji": "🦭",
    "unlockLevel": 18,
    "skill": "treasure_chance",
    "skillCategory": "treasure",
    "skillValue": 0.06,
    "rarity": "rare",
    "description": "Has a nose for sunken chests."
  },
  {
    "worldId": 0,
    "id": "shark_pup",
    "numId": 6,
    "name": "Shark Pup",
    "emoji": "🦈",
    "unlockLevel": 28,
    "skill": "critical_catch",
    "skillCategory": "critical",
    "skillValue": 0.25,
    "rarity": "rare",
    "description": "Occasionally scares extra weight onto your catch."
  },
  {
    "worldId": 0,
    "id": "axolotl",
    "numId": 7,
    "name": "Axolotl",
    "emoji": "🦎",
    "unlockLevel": 40,
    "skill": "auto_repair",
    "skillCategory": "repair",
    "skillValue": 3,
    "rarity": "epic",
    "description": "Slowly regenerates your rod's durability. Literally."
  },
  {
    "worldId": 0,
    "id": "kraken_hatchling",
    "numId": 8,
    "name": "Kraken Hatchling",
    "emoji": "🐙",
    "unlockLevel": 60,
    "skill": "extra_fish",
    "skillCategory": "extra_fish",
    "skillValue": 0.32,
    "rarity": "epic",
    "description": "Small enough to be a pet. For now."
  },
  {
    "worldId": 0,
    "id": "sea_spirit",
    "numId": 9,
    "name": "Sea Spirit",
    "emoji": "👻",
    "unlockLevel": 90,
    "skill": "luck",
    "skillCategory": "luck",
    "skillValue": 45,
    "rarity": "legendary",
    "description": "Not quite alive, extremely lucky to have around."
  },
  {
    "worldId": 0,
    "id": "dragon",
    "numId": 10,
    "name": "Dragon",
    "emoji": "🐉",
    "unlockLevel": 140,
    "skill": "treasure_chance",
    "skillCategory": "treasure",
    "skillValue": 0.15,
    "rarity": "legendary",
    "description": "Hoards instincts kick in near every treasure chest."
  },
  {
    "worldId": 0,
    "id": "void_wisp",
    "numId": 11,
    "name": "Void Wisp",
    "emoji": "🌀",
    "unlockLevel": 280,
    "skill": "critical_catch",
    "skillCategory": "critical",
    "skillValue": 0.5,
    "rarity": "mythic",
    "description": "Bends probability just slightly, just for you."
  },
  {
    "worldId": 0,
    "id": "capybara",
    "numId": 13,
    "name": "Capybara",
    "unlockLevel": 1,
    "skill": "energy_regen",
    "skillCategory": "energy_regen",
    "skillValue": 0.14,
    "rarity": "common",
    "description": "Unbothered by everything. Somehow you rest faster with it around."
  },
  {
    "worldId": 0,
    "id": "kitsune_pup",
    "numId": 14,
    "name": "Kitsune Pup",
    "unlockLevel": 35,
    "skill": "luck",
    "skillCategory": "luck",
    "skillValue": 20,
    "rarity": "rare",
    "description": "Three tails, one blue flame, and a talent for bending small odds."
  },
  {
    "worldId": 0,
    "id": "monolith_golem",
    "numId": 15,
    "name": "Monolith Golem",
    "unlockLevel": 200,
    "skill": "rarity_boost",
    "skillCategory": "rarity",
    "skillValue": 0.22,
    "rarity": "ancient",
    "description": "Knuckle-walks the shoreline and drags rarer things up with the tide."
  },
  {
    "worldId": 1,
    "id": "bunny",
    "numId": 16,
    "name": "Bunny",
    "emoji": "🐰",
    "unlockLevel": 1,
    "skill": "energy_regen",
    "skillCategory": "energy_regen",
    "skillValue": 0.14,
    "rarity": "common",
    "description": "Restless and fast. Somehow makes the wait between casts shorter."
  },
  {
    "worldId": 1,
    "id": "froglet",
    "numId": 17,
    "name": "Froglet",
    "emoji": "🐸",
    "unlockLevel": 1,
    "skill": "luck",
    "skillCategory": "luck",
    "skillValue": 8,
    "rarity": "common",
    "description": "Sits on the tackle box and croaks at the water encouragingly."
  },
  {
    "worldId": 1,
    "id": "piglet",
    "numId": 18,
    "name": "Piglet",
    "emoji": "🐷",
    "unlockLevel": 1,
    "skill": "coin_bonus",
    "skillCategory": "coin",
    "skillValue": 0.1,
    "rarity": "common",
    "description": "Noses out value in everything. Even the fish you almost threw back."
  },
  {
    "worldId": 1,
    "id": "duckling",
    "numId": 19,
    "name": "Duckling",
    "emoji": "🐥",
    "unlockLevel": 1,
    "skill": "extra_xp",
    "skillCategory": "xp",
    "skillValue": 0.12,
    "rarity": "common",
    "description": "Paddles alongside the float. Chirps when you get a bite."
  },
  {
    "worldId": 1,
    "id": "sloth",
    "numId": 20,
    "name": "Sloth",
    "emoji": "🦥",
    "unlockLevel": 1,
    "skill": "energy_saver",
    "skillCategory": "energy_cost",
    "skillValue": 0.16,
    "rarity": "common",
    "description": "Moves slow, recovers slow, but somehow spends less energy just by existing near you."
  },
  {
    "worldId": 1,
    "id": "panda",
    "numId": 21,
    "name": "Panda",
    "emoji": "🐼",
    "unlockLevel": 18,
    "skill": "coin_bonus",
    "skillCategory": "coin",
    "skillValue": 0.15,
    "rarity": "rare",
    "description": "Dignified. Accepts exactly one fish per session as tribute."
  },
  {
    "worldId": 1,
    "id": "bear_cub",
    "numId": 22,
    "name": "Bear Cub",
    "emoji": "🐻",
    "unlockLevel": 28,
    "skill": "critical_catch",
    "skillCategory": "critical",
    "skillValue": 0.25,
    "rarity": "rare",
    "description": "Swipes at the water with alarming accuracy. Weight bonus on big catches."
  },
  {
    "worldId": 1,
    "id": "owl_chick",
    "numId": 23,
    "name": "Owl Chick",
    "emoji": "🦉",
    "unlockLevel": 28,
    "skill": "luck",
    "skillCategory": "luck",
    "skillValue": 20,
    "rarity": "rare",
    "description": "Watches the water with enormous eyes and knows things it shouldn't."
  },
  {
    "worldId": 1,
    "id": "baby_walrus",
    "numId": 24,
    "name": "Baby Walrus",
    "emoji": "🦭",
    "unlockLevel": 18,
    "skill": "treasure_chance",
    "skillCategory": "treasure",
    "skillValue": 0.06,
    "rarity": "rare",
    "description": "Belly-flops into the water and sometimes comes up with something shiny."
  },
  {
    "worldId": 1,
    "id": "chameleon",
    "numId": 25,
    "name": "Chameleon",
    "emoji": "🦎",
    "unlockLevel": 35,
    "skill": "extra_fish",
    "skillCategory": "extra_fish",
    "skillValue": 0.16,
    "rarity": "uncommon",
    "description": "Blends in anywhere. Occasionally grabs a second fish while remaining completely invisible."
  },
  {
    "worldId": 1,
    "id": "desert_cobra",
    "numId": 26,
    "name": "Desert Cobra",
    "emoji": "🐍",
    "unlockLevel": 60,
    "skill": "extra_fish",
    "skillCategory": "extra_fish",
    "skillValue": 0.32,
    "rarity": "epic",
    "description": "Coils around the rod and strikes at the water. Doubles your chances in warm currents."
  },
  {
    "worldId": 1,
    "id": "griffin_hatchling",
    "numId": 27,
    "name": "Griffin Hatchling",
    "emoji": "🦅",
    "unlockLevel": 90,
    "skill": "luck",
    "skillCategory": "luck",
    "skillValue": 45,
    "rarity": "legendary",
    "description": "Part lion, part eagle, entirely lucky. Won't admit it."
  },
  {
    "worldId": 1,
    "id": "frost_phoenix",
    "numId": 28,
    "name": "Frost Phoenix",
    "emoji": "🦅",
    "unlockLevel": 140,
    "skill": "treasure_chance",
    "skillCategory": "treasure",
    "skillValue": 0.15,
    "rarity": "legendary",
    "description": "Rises from ice rather than ash. Draws hidden things toward the surface."
  },
  {
    "worldId": 1,
    "id": "lava_salamander",
    "numId": 29,
    "name": "Lava Salamander",
    "emoji": "🦎",
    "unlockLevel": 200,
    "skill": "rarity_boost",
    "skillCategory": "rarity",
    "skillValue": 0.22,
    "rarity": "ancient",
    "description": "Skims the surface of magma vents and pushes rarer things up from beneath."
  },
  {
    "worldId": 1,
    "id": "celestial_dragon",
    "numId": 30,
    "name": "Celestial Dragon",
    "emoji": "🐉",
    "unlockLevel": 280,
    "skill": "critical_catch",
    "skillCategory": "critical",
    "skillValue": 0.5,
    "rarity": "mythic",
    "description": "Curves through the sky above the fishing spot. Things look up, into your hook."
  }
] as any[]
  ).map((x: any) => [x.id, x]),
);
const rarityLabel = (r: string): Rarity => (r.charAt(0).toUpperCase() + r.slice(1)) as Rarity;

export const pets: Pet[] = Object.values(PET_DATA)
  .sort((a: PetSeed, b: PetSeed) => a.numId - b.numId)
  .map((p: PetSeed) => ({
    key: p.id,
    slug: p.id.replace(/_/g, "-"),
    name: p.name,
    image: `/assets/pets/${p.id}.png`,
    rarity: rarityLabel(p.rarity),
    unlockLevel: p.unlockLevel,
    skill: p.skill,
    skillCategory: p.skillCategory,
    skillValue: p.skillValue,
    description: p.description,
    worldId: p.worldId ?? 0,
    ...(p.emoji ? { emoji: p.emoji } : {}),
  }));

export const petBySlug = (slug: string) => pets.find((p) => p.slug === slug);

export const petsByWorld = (worldId: number) => pets.filter((p) => (p.worldId ?? 0) === worldId);

/**
 * Eggs, mirrored 1:1 from the Bubble Discord bot's `data/eggs.js`.
 * Each egg can only hatch its own `eligiblePetIds` pool — adding a pet to
 * the roster never changes an existing egg's odds unless listed here.
 * Artwork: `public/assets/eggs/<key>.png`.
 */
interface EggSeed {
  id: string;
  tier: number;
  name: string;
  emoji?: string;
  price: number;
  currency: Egg["currency"];
  requiredLevel: number;
  baseHatchXp: number;
  hatchXpPerLevel: number;
  eligiblePetIds: string[];
  dropWeights: Record<string, number>;
  description: string;
  worldId: number;
}

const EGG_DATA: Record<string, EggSeed> = Object.fromEntries(
  (
    [
      {
        id: "common_egg",
        tier: 1,
        name: "Common Egg",
        emoji: "🥚",
        price: 150,
        currency: "gems",
        requiredLevel: 1,
        baseHatchXp: 120,
        hatchXpPerLevel: 2,
        eligiblePetIds: ["cat", "dog", "capybara", "otter", "parrot"],
        dropWeights: { common: 620, uncommon: 380 },
        description: "A speckled egg found near shore. Warm, and a little heavier than it looks.",
        worldId: 0,
      },
      {
        id: "rare_egg",
        tier: 2,
        name: "Rare Egg",
        emoji: "💎",
        price: 500,
        currency: "gems",
        requiredLevel: 30,
        baseHatchXp: 260,
        hatchXpPerLevel: 3,
        eligiblePetIds: ["penguin", "seal", "shark_pup", "kitsune_pup", "axolotl"],
        dropWeights: { uncommon: 300, rare: 450, epic: 250 },
        description:
          "Faintly glittering, faintly humming. Deep-water anglers swear these hatch stronger companions.",
        worldId: 0,
      },
      {
        id: "ancient_egg",
        tier: 3,
        name: "Ancient Egg",
        price: 1500,
        currency: "gems",
        requiredLevel: 80,
        baseHatchXp: 420,
        hatchXpPerLevel: 4,
        eligiblePetIds: ["kraken_hatchling", "sea_spirit", "dragon", "void_wisp", "monolith_golem"],
        dropWeights: { epic: 400, legendary: 450, mythic: 150, ancient: 40 },
        description:
          "Half-fossilized, still ticking with life. The Museum trades these for a reason.",
        worldId: 0,
      },
      {
        id: "w1_common_egg",
        tier: 1,
        name: "Common Egg",
        emoji: "🥚",
        price: 150,
        currency: "gems",
        requiredLevel: 1,
        baseHatchXp: 120,
        hatchXpPerLevel: 2,
        eligiblePetIds: ["bunny", "froglet", "piglet", "duckling", "sloth", "chameleon"],
        dropWeights: { common: 560, uncommon: 440 },
        description: "A speckled egg found in The Neon Tide. A fresh start awaits inside.",
        worldId: 1,
      },
      {
        id: "w1_rare_egg",
        tier: 2,
        name: "Rare Egg",
        emoji: "💎",
        price: 500,
        currency: "gems",
        requiredLevel: 30,
        baseHatchXp: 260,
        hatchXpPerLevel: 3,
        eligiblePetIds: ["panda", "bear_cub", "owl_chick", "baby_walrus"],
        dropWeights: { rare: 750, epic: 250 },
        description: "A faintly humming Neon Tide egg. Something rare is ready to hatch.",
        worldId: 1,
      },
      {
        id: "w1_ancient_egg",
        tier: 3,
        name: "Ancient Egg",
        price: 1500,
        currency: "gems",
        requiredLevel: 80,
        baseHatchXp: 420,
        hatchXpPerLevel: 4,
        eligiblePetIds: [
          "desert_cobra",
          "griffin_hatchling",
          "frost_phoenix",
          "lava_salamander",
          "celestial_dragon",
        ],
        dropWeights: { epic: 400, legendary: 450, mythic: 100, ancient: 50 },
        description:
          "Ancient beyond The Neon Tide. Whatever hatches from this was waiting a long time.",
        worldId: 1,
      },
    ] as EggSeed[]
  ).map((e) => [e.id, e]),
);

export const eggs: Egg[] = Object.values(EGG_DATA)
  .sort((a: EggSeed, b: EggSeed) => (a.worldId ?? 0) - (b.worldId ?? 0) || a.tier - b.tier)
  .map((e: EggSeed) => ({
    key: e.id,
    slug: e.id.replace(/_/g, "-"),
    name: e.name,
    image: `/assets/eggs/${e.id}.png`,
    tier: e.tier,
    price: e.price,
    currency: e.currency,
    requiredLevel: e.requiredLevel,
    baseHatchXp: e.baseHatchXp,
    hatchXpPerLevel: e.hatchXpPerLevel,
    eligiblePetIds: e.eligiblePetIds,
    dropWeights: e.dropWeights,
    description: e.description,
    worldId: e.worldId ?? 0,
    ...(e.emoji ? { emoji: e.emoji } : {}),
  }));

export const eggBySlug = (slug: string) => eggs.find((e) => e.slug === slug);

export const eggsByWorld = (worldId: number) => eggs.filter((e) => (e.worldId ?? 0) === worldId);

/** Pets hatchable from a given egg, in roster order. */
export const petsForEgg = (egg: Egg): Pet[] =>
  egg.eligiblePetIds
    .map((id) => pets.find((p) => p.key === id))
    .filter((p): p is Pet => Boolean(p));
