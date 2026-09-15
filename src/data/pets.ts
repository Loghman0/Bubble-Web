import type { Egg, Pet, Rarity } from "@/types/game";

/**
 * Companion pets, mirrored 1:1 from the Bubble Discord bot's `data/pets.js`.
 * Pets can ONLY be obtained by hatching an egg — see `eggs` below and each
 * egg's `eligiblePetIds`. Artwork: `public/assets/pets/<key>.png`.
 *
 * Post-Phase-6 (Prestige System): every pet and egg carries a `worldId`.
 * Each prestige tier (World 1 "The Neon Tide", World 2 "2nd Prestige")
 * reuses World 0's exact rarity/skillValue/tier curve with a reskinned
 * roster — see `data/worlds.ts`.
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
        "emoji": "🦫",
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
        "emoji": "🦊",
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
        "emoji": "🗿",
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
      },
      {
        "worldId": 2,
        "id": "cowlet",
        "numId": 31,
        "name": "Cowlet",
        "emoji": "🐄",
        "unlockLevel": 1,
        "skill": "coin_bonus",
        "skillCategory": "coin",
        "skillValue": 0.1,
        "rarity": "common",
        "description": "Moos softly whenever you reel in. Coins seem to follow it."
      },
      {
        "worldId": 2,
        "id": "squirrel",
        "numId": 32,
        "name": "Squirrel",
        "emoji": "🐿️",
        "unlockLevel": 1,
        "skill": "extra_xp",
        "skillCategory": "xp",
        "skillValue": 0.12,
        "rarity": "common",
        "description": "Scurries around gathering anything dropped. Very diligent about XP."
      },
      {
        "worldId": 2,
        "id": "hedgehog",
        "numId": 33,
        "name": "Hedgehog",
        "emoji": "🦔",
        "unlockLevel": 1,
        "skill": "energy_regen",
        "skillCategory": "energy_regen",
        "skillValue": 0.14,
        "rarity": "common",
        "description": "Curls up between casts. Its calm presence speeds your recovery."
      },
      {
        "worldId": 2,
        "id": "fawn",
        "numId": 34,
        "name": "Fawn",
        "emoji": "🦌",
        "unlockLevel": 1,
        "skill": "luck",
        "skillCategory": "luck",
        "skillValue": 8,
        "rarity": "uncommon",
        "description": "Skittish but lucky. Good things happen near it."
      },
      {
        "worldId": 2,
        "id": "racoon",
        "numId": 35,
        "name": "Racoon",
        "emoji": "🦝",
        "unlockLevel": 1,
        "skill": "treasure_chance",
        "skillCategory": "treasure",
        "skillValue": 0.06,
        "rarity": "uncommon",
        "description": "Rummages through the tackle box looking for shiny things. Finds them."
      },
      {
        "worldId": 2,
        "id": "turtle",
        "numId": 36,
        "name": "Turtle",
        "emoji": "🐢",
        "unlockLevel": 18,
        "skill": "auto_repair",
        "skillCategory": "repair",
        "skillValue": 3,
        "rarity": "rare",
        "description": "Patient and steady. Slowly patches the rod while you wait."
      },
      {
        "worldId": 2,
        "id": "armadillo",
        "numId": 37,
        "name": "Armadillo",
        "emoji": "🦔",
        "unlockLevel": 28,
        "skill": "critical_catch",
        "skillCategory": "critical",
        "skillValue": 0.25,
        "rarity": "rare",
        "description": "Rolls into a ball and launches at the water. Extra weight is guaranteed."
      },
      {
        "worldId": 2,
        "id": "monkey",
        "numId": 38,
        "name": "Monkey",
        "emoji": "🐒",
        "unlockLevel": 28,
        "skill": "extra_fish",
        "skillCategory": "extra_fish",
        "skillValue": 0.16,
        "rarity": "rare",
        "description": "Climbs wherever it pleases and occasionally drops a second fish in the bucket."
      },
      {
        "worldId": 2,
        "id": "horse",
        "numId": 39,
        "name": "Horse",
        "emoji": "🐴",
        "unlockLevel": 40,
        "skill": "energy_saver",
        "skillCategory": "energy_cost",
        "skillValue": 0.18,
        "rarity": "epic",
        "description": "Carries the load. Casting costs a bit less when it's by your side."
      },
      {
        "worldId": 2,
        "id": "eaglet",
        "numId": 40,
        "name": "Eaglet",
        "emoji": "🦅",
        "unlockLevel": 60,
        "skill": "luck",
        "skillCategory": "luck",
        "skillValue": 20,
        "rarity": "epic",
        "description": "Circles overhead scanning the water. Sharp eyes mean better odds."
      },
      {
        "worldId": 2,
        "id": "baby_crocodile",
        "numId": 41,
        "name": "Baby Crocodile",
        "emoji": "🐊",
        "unlockLevel": 60,
        "skill": "extra_fish",
        "skillCategory": "extra_fish",
        "skillValue": 0.32,
        "rarity": "epic",
        "description": "Snaps at the water beside your line. Sometimes brings up something extra."
      },
      {
        "worldId": 2,
        "id": "elephant",
        "numId": 42,
        "name": "Elephant",
        "emoji": "🐘",
        "unlockLevel": 90,
        "skill": "luck",
        "skillCategory": "luck",
        "skillValue": 45,
        "rarity": "legendary",
        "description": "Never forgets where the rare fish hide. Neither will you."
      },
      {
        "worldId": 2,
        "id": "wolf",
        "numId": 43,
        "name": "Wolf",
        "emoji": "🐺",
        "unlockLevel": 140,
        "skill": "treasure_chance",
        "skillCategory": "treasure",
        "skillValue": 0.15,
        "rarity": "legendary",
        "description": "Howls when a chest is near. You've learned to trust the howl."
      },
      {
        "worldId": 2,
        "id": "snow_golem",
        "numId": 44,
        "name": "Snow Golem",
        "emoji": "⛄",
        "unlockLevel": 280,
        "skill": "critical_catch",
        "skillCategory": "critical",
        "skillValue": 0.5,
        "rarity": "mythic",
        "description": "Made of impossible ice. Bends the cold odds in your favor."
      },
      {
        "worldId": 2,
        "id": "red_dragon",
        "numId": 45,
        "name": "Red Dragon",
        "emoji": "🐲",
        "unlockLevel": 400,
        "skill": "rarity_boost",
        "skillCategory": "rarity",
        "skillValue": 0.28,
        "rarity": "celestial",
        "description": "The apex of World 3 companions. Its presence pulls rarest things from the deep."
      },
      // ==================== WORLD 4 PETS (The First Waters — 3rd Prestige) ====================
      // Common Egg tier
      {
        "worldId": 3, "id": "hound", "numId": 46, "name": "Hound", "emoji": "🐕",
        "unlockLevel": 1, "skill": "extra_xp", "skillCategory": "xp", "skillValue": 0.14,
        "rarity": "common",
        "description": "A faithful hound bred for riverbanks. Every catch earns a little more experience."
      },
      {
        "worldId": 3, "id": "polecat", "numId": 47, "name": "Polecat", "emoji": "🦦",
        "unlockLevel": 1, "skill": "coin_bonus", "skillCategory": "coin", "skillValue": 0.12,
        "rarity": "common",
        "description": "Nimble and opportunistic. Sniffs out extra coins in every sale."
      },
      {
        "worldId": 3, "id": "heron", "numId": 48, "name": "Heron", "emoji": "🦢",
        "unlockLevel": 1, "skill": "energy_regen", "skillCategory": "energy_regen", "skillValue": 0.16,
        "rarity": "common",
        "description": "Stands motionless for hours. Its stillness hastens your energy recovery."
      },
      // Uncommon Egg tier
      {
        "worldId": 3, "id": "kingfisher", "numId": 49, "name": "Kingfisher", "emoji": "🐦",
        "unlockLevel": 10, "skill": "luck", "skillCategory": "luck", "skillValue": 10,
        "rarity": "uncommon",
        "description": "Dives faster than you can blink. Shares its instinct for hitting the right spot."
      },
      {
        "worldId": 3, "id": "osprey", "numId": 50, "name": "Osprey", "emoji": "🦅",
        "unlockLevel": 15, "skill": "extra_fish", "skillCategory": "extra_fish", "skillValue": 0.18,
        "rarity": "uncommon",
        "description": "Aerial fisher who never misses. Its eye occasionally guides a second fish onto the line."
      },
      {
        "worldId": 3, "id": "falcon", "numId": 51, "name": "Falcon", "emoji": "🪶",
        "unlockLevel": 20, "skill": "energy_saver", "skillCategory": "energy_cost", "skillValue": 0.20,
        "rarity": "uncommon",
        "description": "A hunter's bird. Efficient in everything — including how much energy you spend each cast."
      },
      // Rare Egg tier
      {
        "worldId": 3, "id": "jackal", "numId": 52, "name": "Jackal", "emoji": "🐺",
        "unlockLevel": 30, "skill": "coin_bonus", "skillCategory": "coin", "skillValue": 0.20,
        "rarity": "rare",
        "description": "Cunning scavenger who finds extra value in everything. Especially your catches."
      },
      {
        "worldId": 3, "id": "panther", "numId": 53, "name": "Panther", "emoji": "🐆",
        "unlockLevel": 40, "skill": "extra_xp", "skillCategory": "xp", "skillValue": 0.22,
        "rarity": "rare",
        "description": "Silent and lethal. Studying its focus grants noticeably more experience per catch."
      },
      {
        "worldId": 3, "id": "direwolf_pup", "numId": 54, "name": "Direwolf Pup", "emoji": "🐕‍🦺",
        "unlockLevel": 50, "skill": "auto_repair", "skillCategory": "repair", "skillValue": 3.0,
        "rarity": "rare",
        "description": "Gnaws on everything, including cracked rods. Repairs durability every cast."
      },
      // Epic Egg tier
      {
        "worldId": 3, "id": "lantern_owl", "numId": 55, "name": "Lantern Owl", "emoji": "🦉",
        "unlockLevel": 70, "skill": "luck", "skillCategory": "luck", "skillValue": 28,
        "rarity": "epic",
        "description": "Its lantern-lit eyes pierce any darkness. A meaningful boost to rare-fish odds."
      },
      {
        "worldId": 3, "id": "slit_lynx", "numId": 56, "name": "Slit Lynx", "emoji": "🐈",
        "unlockLevel": 90, "skill": "treasure_chance", "skillCategory": "treasure", "skillValue": 0.10,
        "rarity": "epic",
        "description": "Spots the glitter of treasure beneath murky water. A strong nose for sunken chests."
      },
      // Legendary Egg tier
      {
        "worldId": 3, "id": "griffon", "numId": 57, "name": "Griffon", "emoji": "🦁",
        "unlockLevel": 110, "skill": "critical_catch", "skillCategory": "critical", "skillValue": 0.38,
        "rarity": "legendary",
        "description": "Half eagle, half lion. When it locks on, the fish arrives heavier than expected."
      },
      // Mythic Egg tier
      {
        "worldId": 3, "id": "runic_ferret", "numId": 58, "name": "Runic Ferret", "emoji": "🦡",
        "unlockLevel": 150, "skill": "energy_regen", "skillCategory": "energy_regen", "skillValue": 0.36,
        "rarity": "mythic",
        "description": "Marked with runes it does not understand. Energy pours off it in waves."
      },
      {
        "worldId": 3, "id": "coralgolem", "numId": 59, "name": "Coral Golem", "emoji": "🪸",
        "unlockLevel": 200, "skill": "auto_repair", "skillCategory": "repair", "skillValue": 7.0,
        "rarity": "mythic",
        "description": "Animated coral that rebuilds rods without being asked. Territorial about its work."
      },
      // Ancient Egg tier
      {
        "worldId": 3, "id": "cosmicbird", "numId": 60, "name": "Cosmic Bird", "emoji": "🦚",
        "unlockLevel": 280, "skill": "rarity_boost", "skillCategory": "rarity", "skillValue": 0.28,
        "rarity": "ancient",
        "description": "A bird that crosses between worlds. Its presence bends the rarity of every catch upward."
      }
    ] as any[]
  ).map((x: any) => [x.id, x]),
); const rarityLabel = (r: string): Rarity => (r.charAt(0).toUpperCase() + r.slice(1)) as Rarity;

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
      {
        id: "w3_common_egg",
        tier: 1,
        name: "Common Egg",
        emoji: "🥚",
        price: 150,
        currency: "gems",
        requiredLevel: 1,
        baseHatchXp: 120,
        hatchXpPerLevel: 2,
        eligiblePetIds: ["cowlet", "squirrel", "hedgehog", "fawn", "racoon"],
        dropWeights: { common: 580, uncommon: 420 },
        description: "A warm egg from World 3. Something small and scrappy is ready to emerge.",
        worldId: 2,
      },
      {
        id: "w3_rare_egg",
        tier: 2,
        name: "Rare Egg",
        emoji: "💎",
        price: 500,
        currency: "gems",
        requiredLevel: 30,
        baseHatchXp: 260,
        hatchXpPerLevel: 3,
        eligiblePetIds: ["turtle", "armadillo", "monkey", "horse", "eaglet"],
        dropWeights: { rare: 700, epic: 300 },
        description: "A glimmering World 3 egg. A capable companion waits inside.",
        worldId: 2,
      },
      {
        id: "w3_ancient_egg",
        tier: 3,
        name: "Ancient Egg",
        price: 1500,
        currency: "gems",
        requiredLevel: 80,
        baseHatchXp: 420,
        hatchXpPerLevel: 4,
        eligiblePetIds: ["baby_crocodile", "elephant", "wolf", "snow_golem", "red_dragon"],
        dropWeights: { epic: 700, legendary: 250, mythic: 100, celestial: 60 },
        description: "A World 3 relic egg. What hatches from this commands the wilderness.",
        worldId: 2,
      },
      {
        id: "w4_common_egg",
        numId: 10,
        tier: 1,
        name: "Common Egg",
        emoji: "🥚",
        price: 150,
        currency: "gems",
        requiredLevel: 1,
        baseHatchXp: 120,
        hatchXpPerLevel: 2,
        hatchLevel: 1,
        eligiblePetIds: ["hound", "polecat", "heron", "kingfisher", "osprey", "falcon"],
        dropWeights: { common: 600, uncommon: 400 },
        description: "A mossy egg found near ancient ruins. Something scrappy rustles inside.",
        worldId: 3,
      },
      {
        id: "w4_rare_egg",
        numId: 11,
        tier: 2,
        name: "Rare Egg",
        emoji: "💎",
        price: 500,
        currency: "gems",
        requiredLevel: 30,
        baseHatchXp: 260,
        hatchXpPerLevel: 3,
        hatchLevel: 8,
        eligiblePetIds: ["jackal", "panther", "direwolf_pup", "lantern_owl", "slit_lynx"],
        dropWeights: { rare: 720, epic: 280 },
        description: "A rune-etched egg pulsing with warmth. Something fiercer than expected waits within.",
        worldId: 3,
      },
      {
        id: "w4_ancient_egg",
        numId: 12,
        tier: 3,
        name: "Ancient Egg",
        price: 1500,
        currency: "gems",
        requiredLevel: 80,
        baseHatchXp: 420,
        hatchXpPerLevel: 4,
        hatchLevel: 18,
        eligiblePetIds: ["griffon", "runic_ferret", "coralgolem", "cosmicbird"],
        dropWeights: { legendary: 650, mythic: 280, ancient: 70 },
        description: "A First Waters relic, half-stone and half-alive. What hatches here has been waiting since before memory.",
        worldId: 3,
      }
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
