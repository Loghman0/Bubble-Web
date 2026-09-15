import type { Fish, Rarity } from "@/types/game";

/**
 * Fish species roster, mirrored 1:1 from the Bubble Discord bot's
 * `data/fish.js` (single source of truth for the fishing engine).
 *
 * `key` is the bot's internal id and also the artwork filename:
 * place the 128x128 image at `public/assets/fish/<key>.png`.
 *
 * Post-Phase-6 (Prestige System): every row carries a `worldId`. World 0 is
 * the base game (150 species); World 1 ("The Neon Tide") is the first
 * prestige tier's roster (100 species); World 2 (2nd Prestige) is the
 * second (100 species). Filter any consumer of `fish` by `worldId` to scope
 * it to a single world — see `data/worlds.ts`.
 */
interface FishSeed {
  id: string;
  name: string;
  rarity: string;
  price: number;
  weight: [number, number];
  length: [number, number];
  season: Fish["season"];
  weather: Fish["weather"];
  activeTime: Fish["activeTime"];
  difficulty: number;
  requiredRodLevel: number;
  requiredBait: string | null;
  xp: number;
  museumValue: number;
  hidden?: boolean;
  discoveryCondition?: string;
  minLuck?: number;
  minCombo?: number;
  description: string;
  worldId: number;
}

const FISH_DATA: Record<string, FishSeed> = Object.fromEntries(
  (
    [
  {
    "id": "bluegill",
    "name": "Bluegill",
    "rarity": "common",
    "price": 6,
    "weight": [
      0.1,
      0.6
    ],
    "length": [
      8,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 4,
    "museumValue": 5,
    "description": "A tiny, ever-present panfish. Everyone's first catch.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "pond_minnow",
    "name": "Pond Minnow",
    "rarity": "common",
    "price": 4,
    "weight": [
      0.02,
      0.1
    ],
    "length": [
      3,
      7
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 3,
    "museumValue": 4,
    "description": "So small it barely counts as fishing.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "marsh_frogfish",
    "name": "Marsh Frogfish",
    "rarity": "common",
    "price": 8,
    "weight": [
      0.1,
      0.4
    ],
    "length": [
      6,
      12
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 6,
    "description": "Looks more amphibian than fish. Tastes worse than it looks.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "pond_koi",
    "name": "Pond Koi",
    "rarity": "uncommon",
    "price": 55,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      15,
      35
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 2,
    "requiredBait": null,
    "xp": 14,
    "museumValue": 30,
    "description": "Ornamental and proud of it. Villagers consider it good luck.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "golden_pond_carp",
    "name": "Golden Pond Carp",
    "rarity": "rare",
    "price": 130,
    "weight": [
      1,
      4
    ],
    "length": [
      25,
      50
    ],
    "season": "any",
    "weather": [
      "sunny"
    ],
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 4,
    "requiredBait": null,
    "xp": 40,
    "museumValue": 55,
    "description": "A shimmering carp locals say grants a small wish. It does not.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "river_trout",
    "name": "River Trout",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.3,
      1.2
    ],
    "length": [
      12,
      30
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 6,
    "museumValue": 8,
    "description": "Fast water, faster fish.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "crawdad",
    "name": "Crawdad",
    "rarity": "common",
    "price": 9,
    "weight": [
      0.05,
      0.2
    ],
    "length": [
      5,
      10
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 7,
    "description": "Technically a crustacean. The rod doesn't care.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "rainbow_trout",
    "name": "Rainbow Trout",
    "rarity": "uncommon",
    "price": 60,
    "weight": [
      0.5,
      2
    ],
    "length": [
      20,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning","day"],
    "difficulty": 3,
    "requiredRodLevel": 3,
    "requiredBait": null,
    "xp": 16,
    "museumValue": 32,
    "description": "Named for the iridescent stripe along its side.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "silver_pike",
    "name": "Silver Pike",
    "rarity": "rare",
    "price": 260,
    "weight": [
      2,
      6
    ],
    "length": [
      40,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening","night"],
    "difficulty": 5,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 46,
    "museumValue": 100,
    "description": "An ambush predator with a bite that leaves scars on rods.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "river_spirit_eel",
    "name": "River Spirit Eel",
    "rarity": "epic",
    "price": 900,
    "weight": [
      3,
      9
    ],
    "length": [
      60,
      130
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": ["morning"],
    "difficulty": 6,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 110,
    "museumValue": 260,
    "description": "Said to be the ghost of a fisherman who never went home.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "largemouth_bass",
    "name": "Largemouth Bass",
    "rarity": "common",
    "price": 14,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      20,
      45
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 8,
    "museumValue": 10,
    "description": "The trophy fish of beginner anglers everywhere.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "channel_catfish",
    "name": "Channel Catfish",
    "rarity": "common",
    "price": 16,
    "weight": [
      1,
      5
    ],
    "length": [
      30,
      60
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning"],
    "difficulty": 3,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 9,
    "museumValue": 11,
    "description": "A bottom-feeder with a face only a museum curator could love.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "lake_sturgeon",
    "name": "Lake Sturgeon",
    "rarity": "uncommon",
    "price": 75,
    "weight": [
      4,
      15
    ],
    "length": [
      60,
      120
    ],
    "season": "autumn",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 8,
    "requiredBait": null,
    "xp": 20,
    "museumValue": 38,
    "description": "A living fossil that has outlived several fishing rods.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "moonlit_perch",
    "name": "Moonlit Perch",
    "rarity": "rare",
    "price": 300,
    "weight": [
      0.8,
      2.5
    ],
    "length": [
      20,
      35
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 5,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 50,
    "museumValue": 110,
    "description": "Its scales glow faintly under a full moon.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "lake_guardian_turtle",
    "name": "Lake Guardian Turtle",
    "rarity": "epic",
    "price": 1100,
    "weight": [
      10,
      30
    ],
    "length": [
      50,
      90
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 12,
    "requiredBait": null,
    "xp": 130,
    "museumValue": 300,
    "description": "Local legend says it has watched over the lake for 300 years.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "mackerel",
    "name": "Mackerel",
    "rarity": "common",
    "price": 18,
    "weight": [
      0.3,
      1.5
    ],
    "length": [
      20,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 12,
    "requiredBait": null,
    "xp": 10,
    "museumValue": 12,
    "description": "Sold by the crate in every harbor market.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "herring",
    "name": "Herring",
    "rarity": "common",
    "price": 15,
    "weight": [
      0.1,
      0.6
    ],
    "length": [
      15,
      30
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 12,
    "requiredBait": null,
    "xp": 9,
    "museumValue": 11,
    "description": "Travels in shoals thousands strong.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "bluefin_tuna",
    "name": "Bluefin Tuna",
    "rarity": "uncommon",
    "price": 95,
    "weight": [
      30,
      120
    ],
    "length": [
      100,
      250
    ],
    "season": "summer",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 14,
    "requiredBait": null,
    "xp": 26,
    "museumValue": 45,
    "description": "Prized on every table in every kingdom.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "swordfish",
    "name": "Swordfish",
    "rarity": "rare",
    "price": 340,
    "weight": [
      40,
      150
    ],
    "length": [
      150,
      300
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 16,
    "requiredBait": null,
    "xp": 55,
    "museumValue": 130,
    "description": "Its bill has punched clean through hull planks.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "blue_marlin",
    "name": "Blue Marlin",
    "rarity": "epic",
    "price": 1300,
    "weight": [
      60,
      250
    ],
    "length": [
      200,
      350
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 18,
    "requiredBait": null,
    "xp": 150,
    "museumValue": 340,
    "description": "A prize fish that has ended more fishing tournaments than it has lost.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "poseidons_herald",
    "name": "Poseidon's Herald",
    "rarity": "legendary",
    "price": 4200,
    "weight": [
      80,
      300
    ],
    "length": [
      220,
      400
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 22,
    "requiredBait": null,
    "xp": 420,
    "museumValue": 900,
    "description": "Fishers say it only surfaces to warn of coming storms.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "anglerfish",
    "name": "Anglerfish",
    "rarity": "uncommon",
    "price": 110,
    "weight": [
      1,
      4
    ],
    "length": [
      15,
      35
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 4,
    "requiredRodLevel": 22,
    "requiredBait": null,
    "xp": 30,
    "museumValue": 50,
    "description": "Its bioluminescent lure has ended more careers than storms have.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "giant_squid_hatchling",
    "name": "Giant Squid Hatchling",
    "rarity": "rare",
    "price": 400,
    "weight": [
      5,
      20
    ],
    "length": [
      50,
      120
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 26,
    "requiredBait": null,
    "xp": 65,
    "museumValue": 150,
    "description": "Already the size of a canoe. Its parents are the size of ships.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "deep_sea_serpent",
    "name": "Deep Sea Serpent",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      20,
      60
    ],
    "length": [
      150,
      300
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 7,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 175,
    "museumValue": 380,
    "description": "No light has ever properly photographed one alive.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "abyssal_leviathan_pup",
    "name": "Abyssal Leviathan Pup",
    "rarity": "legendary",
    "price": 5200,
    "weight": [
      100,
      400
    ],
    "length": [
      200,
      500
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 35,
    "requiredBait": "magical_dust",
    "xp": 520,
    "museumValue": 1100,
    "description": "A juvenile. Nobody wants to meet the adult.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "krakens_eye_jelly",
    "name": "Kraken's Eye Jelly",
    "rarity": "mythic",
    "price": 14000,
    "weight": [
      2,
      8
    ],
    "length": [
      30,
      70
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 9,
    "requiredRodLevel": 40,
    "requiredBait": null,
    "xp": 1400,
    "museumValue": 3200,
    "description": "Pulses with a light that seems to watch you back.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "arctic_char",
    "name": "Arctic Char",
    "rarity": "common",
    "price": 24,
    "weight": [
      0.5,
      2
    ],
    "length": [
      20,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 12,
    "museumValue": 16,
    "description": "Thrives in water cold enough to numb your hands through the rod.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "ice_perch",
    "name": "Ice Perch",
    "rarity": "uncommon",
    "price": 130,
    "weight": [
      0.5,
      2
    ],
    "length": [
      15,
      30
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 32,
    "requiredBait": null,
    "xp": 34,
    "museumValue": 55,
    "description": "Its scales are faintly frosted even out of the water.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "frostfin_salmon",
    "name": "Frostfin Salmon",
    "rarity": "rare",
    "price": 460,
    "weight": [
      3,
      10
    ],
    "length": [
      50,
      90
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 34,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 170,
    "description": "Swims upstream even through solid ice.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "glacier_wyrmling",
    "name": "Glacier Wyrmling",
    "rarity": "epic",
    "price": 1700,
    "weight": [
      15,
      45
    ],
    "length": [
      100,
      220
    ],
    "season": "any",
    "weather": [
      "snow"
    ],
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 38,
    "requiredBait": null,
    "xp": 195,
    "museumValue": 420,
    "description": "Young enough to still be curious about fishing rods.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "aurora_icefish",
    "name": "Aurora Icefish",
    "rarity": "legendary",
    "price": 5800,
    "weight": [
      10,
      30
    ],
    "length": [
      60,
      110
    ],
    "season": "winter",
    "weather": [
      "snow"
    ],
    "activeTime": ["night"],
    "difficulty": 8,
    "requiredRodLevel": 42,
    "requiredBait": null,
    "xp": 580,
    "museumValue": 1250,
    "hidden": true,
    "discoveryCondition": "Snowfall + nighttime on the Frozen Lake.",
    "description": "Its fins shimmer like the aurora dancing above the ice.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "mudskipper",
    "name": "Mudskipper",
    "rarity": "common",
    "price": 20,
    "weight": [
      0.1,
      0.5
    ],
    "length": [
      8,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 40,
    "requiredBait": null,
    "xp": 12,
    "museumValue": 15,
    "description": "Spends more time out of the water than in it.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "bog_eel",
    "name": "Bog Eel",
    "rarity": "uncommon",
    "price": 150,
    "weight": [
      1,
      5
    ],
    "length": [
      40,
      90
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 4,
    "requiredRodLevel": 42,
    "requiredBait": null,
    "xp": 36,
    "museumValue": 60,
    "description": "Slick, sour-smelling, and surprisingly strong.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "swamp_snapper_turtle",
    "name": "Swamp Snapper Turtle",
    "rarity": "rare",
    "price": 520,
    "weight": [
      8,
      25
    ],
    "length": [
      40,
      70
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 46,
    "requiredBait": null,
    "xp": 82,
    "museumValue": 190,
    "description": "Its bite has ended more than one dare among local kids.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "willowisp_fish",
    "name": "Will-o'-Wisp Fish",
    "rarity": "epic",
    "price": 1900,
    "weight": [
      1,
      4
    ],
    "length": [
      15,
      35
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": ["night"],
    "difficulty": 7,
    "requiredRodLevel": 50,
    "requiredBait": null,
    "xp": 210,
    "museumValue": 460,
    "description": "Its glow has led more than one traveler off the safe path.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "bog_witchs_familiar",
    "name": "Bog Witch's Familiar",
    "rarity": "mythic",
    "price": 15500,
    "weight": [
      3,
      9
    ],
    "length": [
      25,
      55
    ],
    "season": "any",
    "weather": [
      "rain"
    ],
    "activeTime": ["night"],
    "difficulty": 9,
    "requiredRodLevel": 55,
    "requiredBait": null,
    "xp": 1550,
    "museumValue": 3400,
    "hidden": true,
    "discoveryCondition": "Rainfall at night in the Swamp.",
    "description": "Locals swear it answers to a name, if you know which one.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "magma_minnow",
    "name": "Magma Minnow",
    "rarity": "uncommon",
    "price": 180,
    "weight": [
      0.1,
      0.4
    ],
    "length": [
      5,
      12
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 55,
    "requiredBait": null,
    "xp": 40,
    "museumValue": 65,
    "description": "Swims comfortably in water hot enough to boil steel.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "ember_eel",
    "name": "Ember Eel",
    "rarity": "rare",
    "price": 600,
    "weight": [
      2,
      8
    ],
    "length": [
      50,
      100
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 58,
    "requiredBait": null,
    "xp": 95,
    "museumValue": 210,
    "description": "Leaves scorch marks on any net that isn't fireproof.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "obsidian_ray",
    "name": "Obsidian Ray",
    "rarity": "epic",
    "price": 2200,
    "weight": [
      15,
      50
    ],
    "length": [
      80,
      160
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 62,
    "requiredBait": null,
    "xp": 240,
    "museumValue": 520,
    "description": "Its skin is as hard and black as volcanic glass.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "phoenix_koi",
    "name": "Phoenix Koi",
    "rarity": "legendary",
    "price": 6800,
    "weight": [
      3,
      10
    ],
    "length": [
      30,
      60
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 68,
    "requiredBait": null,
    "xp": 680,
    "museumValue": 1450,
    "description": "Said to be reborn from its own ashes every hundred years.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "molten_core_serpent",
    "name": "Molten Core Serpent",
    "rarity": "ancient",
    "price": 42000,
    "weight": [
      40,
      120
    ],
    "length": [
      200,
      400
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 75,
    "requiredBait": "dragon_blood",
    "xp": 4200,
    "museumValue": 9200,
    "hidden": true,
    "discoveryCondition": "Caught deep in the Volcano.",
    "description": "A living fault line. Water boils a hundred meters around it.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "clownfish",
    "name": "Clownfish",
    "rarity": "common",
    "price": 26,
    "weight": [
      0.05,
      0.2
    ],
    "length": [
      5,
      12
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 70,
    "requiredBait": null,
    "xp": 14,
    "museumValue": 18,
    "description": "Fiercely territorial for something so small.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "parrotfish",
    "name": "Parrotfish",
    "rarity": "uncommon",
    "price": 190,
    "weight": [
      1,
      3
    ],
    "length": [
      20,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 72,
    "requiredBait": null,
    "xp": 44,
    "museumValue": 70,
    "description": "Grinds coral into the sand you're standing on.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "reef_shark_pup",
    "name": "Reef Shark Pup",
    "rarity": "rare",
    "price": 700,
    "weight": [
      5,
      15
    ],
    "length": [
      60,
      100
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 76,
    "requiredBait": null,
    "xp": 105,
    "museumValue": 235,
    "description": "Curious, fast, and not yet afraid of anything.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "coral_guardian",
    "name": "Coral Guardian",
    "rarity": "epic",
    "price": 2600,
    "weight": [
      10,
      35
    ],
    "length": [
      70,
      140
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 80,
    "requiredBait": null,
    "xp": 270,
    "museumValue": 580,
    "description": "Believed to be older than the reef it protects.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "rainbow_reef_dragon",
    "name": "Rainbow Reef Dragon",
    "rarity": "legendary",
    "price": 7500,
    "weight": [
      5,
      20
    ],
    "length": [
      80,
      150
    ],
    "season": "summer",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 85,
    "requiredBait": null,
    "xp": 750,
    "museumValue": 1600,
    "description": "Every scale is a different color. No two sightings match.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "ghost_shrimp",
    "name": "Ghost Shrimp",
    "rarity": "uncommon",
    "price": 210,
    "weight": [
      0.05,
      0.2
    ],
    "length": [
      3,
      8
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 5,
    "requiredRodLevel": 85,
    "requiredBait": null,
    "xp": 48,
    "museumValue": 75,
    "description": "Nearly transparent. You mostly feel it on the line.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "cursed_mackerel",
    "name": "Cursed Mackerel",
    "rarity": "rare",
    "price": 780,
    "weight": [
      1,
      3
    ],
    "length": [
      25,
      45
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 88,
    "requiredBait": null,
    "xp": 118,
    "museumValue": 260,
    "description": "Sailors used to throw these back before they even landed.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "shipwreck_kraken_spawn",
    "name": "Shipwreck Kraken Spawn",
    "rarity": "epic",
    "price": 3100,
    "weight": [
      20,
      70
    ],
    "length": [
      100,
      220
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 92,
    "requiredBait": null,
    "xp": 310,
    "museumValue": 660,
    "description": "If this is a hatchling, best not to think about the parent.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "davy_jones_locket_fish",
    "name": "Davy Jones' Locket Fish",
    "rarity": "legendary",
    "price": 8200,
    "weight": [
      2,
      6
    ],
    "length": [
      15,
      30
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 8,
    "requiredRodLevel": 95,
    "requiredBait": null,
    "xp": 820,
    "museumValue": 1750,
    "description": "Its belly, when opened, always holds a single old coin.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "phantom_captains_eel",
    "name": "Phantom Captain's Eel",
    "rarity": "mythic",
    "price": 17000,
    "weight": [
      5,
      15
    ],
    "length": [
      90,
      180
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 9,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "minLuck": 250,
    "xp": 1700,
    "museumValue": 3700,
    "hidden": true,
    "discoveryCondition": "Caught at night with Luck above 250 in the Sunken Ship.",
    "description": "Answers only to whoever last commanded this wreck.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "crystal_tetra",
    "name": "Crystal Tetra",
    "rarity": "rare",
    "price": 950,
    "weight": [
      0.1,
      0.5
    ],
    "length": [
      5,
      12
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 105,
    "requiredBait": null,
    "xp": 135,
    "museumValue": 290,
    "description": "Its scales refract cave light into tiny rainbows.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "geode_turtle",
    "name": "Geode Turtle",
    "rarity": "epic",
    "price": 3600,
    "weight": [
      15,
      40
    ],
    "length": [
      50,
      90
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 110,
    "requiredBait": null,
    "xp": 350,
    "museumValue": 740,
    "description": "Crack its shell (please don't) and you'd find raw crystal.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "prism_serpent",
    "name": "Prism Serpent",
    "rarity": "legendary",
    "price": 9200,
    "weight": [
      10,
      30
    ],
    "length": [
      100,
      200
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 115,
    "requiredBait": null,
    "xp": 920,
    "museumValue": 1950,
    "description": "Bends light around itself. Half the \"sightings\" are guesses.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "diamond_scaled_wyrm",
    "name": "Diamond-Scaled Wyrm",
    "rarity": "mythic",
    "price": 19500,
    "weight": [
      30,
      90
    ],
    "length": [
      150,
      300
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 120,
    "requiredBait": null,
    "xp": 1950,
    "museumValue": 4100,
    "description": "Worth more melted down than caught, but nobody's tried twice.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "cloudfin_ray",
    "name": "Cloudfin Ray",
    "rarity": "epic",
    "price": 4400,
    "weight": [
      8,
      25
    ],
    "length": [
      60,
      120
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 135,
    "requiredBait": null,
    "xp": 420,
    "museumValue": 880,
    "description": "Glides more than it swims. Occasionally forgets gravity.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "stormcaller_eel",
    "name": "Stormcaller Eel",
    "rarity": "legendary",
    "price": 10800,
    "weight": [
      10,
      35
    ],
    "length": [
      100,
      220
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 140,
    "requiredBait": null,
    "xp": 1080,
    "museumValue": 2300,
    "description": "A hooked strike from this one arrives with actual thunder.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "thunderbird_koi",
    "name": "Thunderbird Koi",
    "rarity": "mythic",
    "price": 22000,
    "weight": [
      5,
      15
    ],
    "length": [
      40,
      80
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 148,
    "requiredBait": null,
    "xp": 2200,
    "museumValue": 4600,
    "description": "Static crackles off its fins between strikes.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "rainbow_sky_serpent",
    "name": "Rainbow Sky Serpent",
    "rarity": "celestial",
    "price": 65000,
    "weight": [
      20,
      60
    ],
    "length": [
      150,
      300
    ],
    "season": "any",
    "weather": [
      "aurora"
    ],
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 160,
    "requiredBait": null,
    "xp": 6500,
    "museumValue": 14000,
    "hidden": true,
    "discoveryCondition": "Caught while the Aurora world weather is active over the Sky Lake.",
    "description": "Every color of the aurora runs down its back at once.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "guardian_sphinx_fish",
    "name": "Guardian Sphinx Fish",
    "rarity": "legendary",
    "price": 13500,
    "weight": [
      15,
      40
    ],
    "length": [
      80,
      150
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 175,
    "requiredBait": null,
    "xp": 1350,
    "museumValue": 2900,
    "description": "Guards a treasure it seemingly forgot it was guarding.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "pharaohs_golden_carp",
    "name": "Pharaoh's Golden Carp",
    "rarity": "mythic",
    "price": 27000,
    "weight": [
      8,
      25
    ],
    "length": [
      50,
      100
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 185,
    "requiredBait": null,
    "xp": 2700,
    "museumValue": 5700,
    "description": "Its scales are, unnervingly, actual gold leaf.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "sunstone_leviathan",
    "name": "Sunstone Leviathan",
    "rarity": "ancient",
    "price": 55000,
    "weight": [
      60,
      180
    ],
    "length": [
      250,
      450
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 195,
    "requiredBait": "magical_dust",
    "xp": 5500,
    "museumValue": 11500,
    "description": "Warm to the touch, even underwater, even in winter.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "voidscale_ripper",
    "name": "Voidscale Ripper",
    "rarity": "mythic",
    "price": 31000,
    "weight": [
      25,
      70
    ],
    "length": [
      130,
      260
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 225,
    "requiredBait": null,
    "xp": 3100,
    "museumValue": 6500,
    "description": "It doesn't so much bite as unmake what it touches.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "null_current_wyrm",
    "name": "Null Current Wyrm",
    "rarity": "ancient",
    "price": 61000,
    "weight": [
      80,
      250
    ],
    "length": [
      300,
      550
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 240,
    "requiredBait": null,
    "xp": 6100,
    "museumValue": 12800,
    "description": "Currents around it flow backward. Nobody knows why.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "silent_deep_horror",
    "name": "Silent Deep Horror",
    "rarity": "celestial",
    "price": 140000,
    "weight": [
      50,
      150
    ],
    "length": [
      200,
      400
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 260,
    "requiredBait": null,
    "xp": 14000,
    "museumValue": 29000,
    "hidden": true,
    "discoveryCondition": "Caught in the Dark Abyss.",
    "description": "You never hear it approach. You only feel the line go still.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "reverie_koi",
    "name": "Reverie Koi",
    "rarity": "ancient",
    "price": 72000,
    "weight": [
      3,
      10
    ],
    "length": [
      30,
      60
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 295,
    "requiredBait": null,
    "xp": 7200,
    "museumValue": 15000,
    "description": "Swims in slow loops that don't quite obey the water.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "lucid_dream_serpent",
    "name": "Lucid Dream Serpent",
    "rarity": "celestial",
    "price": 165000,
    "weight": [
      10,
      30
    ],
    "length": [
      80,
      160
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 10,
    "requiredRodLevel": 310,
    "requiredBait": null,
    "xp": 16500,
    "museumValue": 34000,
    "description": "You're fairly sure you've caught this one before, in a dream.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "astral_leviathan",
    "name": "Astral Leviathan",
    "rarity": "divine",
    "price": 600000,
    "weight": [
      100,
      400
    ],
    "length": [
      300,
      600
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 350,
    "requiredBait": "magical_dust",
    "xp": 60000,
    "museumValue": 125000,
    "description": "Older than the dream it swims in.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "celestial_leviathan",
    "name": "Celestial Leviathan",
    "rarity": "divine",
    "price": 2000000,
    "weight": [
      200,
      600
    ],
    "length": [
      400,
      800
    ],
    "season": "any",
    "weather": [
      "full_moon"
    ],
    "activeTime": ["night"],
    "difficulty": 10,
    "requiredRodLevel": 380,
    "requiredBait": "magical_dust",
    "minLuck": 250,
    "xp": 200000,
    "museumValue": 500000,
    "hidden": true,
    "discoveryCondition": "Full moon, night, a Gold Rod or better, Luck above 250, at the Dream World. The rarest gate in the game.",
    "description": "The first player to catch this triggers a server-wide world announcement and permanently adds it to the encyclopedia.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "sunfish_fry",
    "name": "Sunfish Fry",
    "rarity": "common",
    "price": 5,
    "weight": [
      0.02,
      0.15
    ],
    "length": [
      4,
      9
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 3,
    "museumValue": 4,
    "description": "Barely bigger than the hook it bit.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "rock_bass",
    "name": "Rock Bass",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.2,
      0.9
    ],
    "length": [
      12,
      25
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 6,
    "museumValue": 8,
    "description": "Hides between stones and waits for something to drift by.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "yellow_perch",
    "name": "Yellow Perch",
    "rarity": "common",
    "price": 13,
    "weight": [
      0.1,
      0.5
    ],
    "length": [
      10,
      22
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning","day"],
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 6,
    "museumValue": 9,
    "description": "Stripes like a tiny referee. Travels in loose schools.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "sand_darter",
    "name": "Sand Darter",
    "rarity": "common",
    "price": 7,
    "weight": [
      0.01,
      0.06
    ],
    "length": [
      3,
      6
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 4,
    "museumValue": 5,
    "description": "Buries in the sand and darts out before you notice it was there.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "puddle_guppy",
    "name": "Puddle Guppy",
    "rarity": "common",
    "price": 4,
    "weight": [
      0.005,
      0.03
    ],
    "length": [
      2,
      4
    ],
    "season": "any",
    "weather": [
      "rain"
    ],
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 3,
    "museumValue": 4,
    "description": "Shows up in puddles that shouldn't have fish in them at all.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "creek_chub",
    "name": "Creek Chub",
    "rarity": "common",
    "price": 17,
    "weight": [
      0.2,
      0.8
    ],
    "length": [
      14,
      26
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 2,
    "requiredBait": null,
    "xp": 8,
    "museumValue": 11,
    "description": "Common enough that most anglers stop noticing it by their third cast.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "moss_goby",
    "name": "Moss Goby",
    "rarity": "uncommon",
    "price": 68,
    "weight": [
      0.1,
      0.5
    ],
    "length": [
      8,
      16
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 5,
    "requiredBait": null,
    "xp": 18,
    "museumValue": 36,
    "description": "Green enough to vanish against the reeds until it moves.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "lantern_fish",
    "name": "Lantern Fish",
    "rarity": "uncommon",
    "price": 120,
    "weight": [
      0.1,
      0.4
    ],
    "length": [
      8,
      15
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 4,
    "requiredRodLevel": 8,
    "requiredBait": null,
    "xp": 24,
    "museumValue": 45,
    "description": "Carries its own tiny light. Doesn't need the moon.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "tiger_barb",
    "name": "Tiger Barb",
    "rarity": "uncommon",
    "price": 88,
    "weight": [
      0.1,
      0.4
    ],
    "length": [
      6,
      12
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 20,
    "museumValue": 40,
    "description": "Strikes fast and pulls harder than something its size should.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "glass_catfish",
    "name": "Glass Catfish",
    "rarity": "uncommon",
    "price": 145,
    "weight": [
      0.1,
      0.6
    ],
    "length": [
      10,
      20
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 30,
    "museumValue": 58,
    "description": "Nearly transparent — you can watch its skeleton swim.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "flying_fish",
    "name": "Flying Fish",
    "rarity": "uncommon",
    "price": 175,
    "weight": [
      0.3,
      1.2
    ],
    "length": [
      20,
      40
    ],
    "season": "any",
    "weather": [
      "windy"
    ],
    "activeTime": ["day"],
    "difficulty": 4,
    "requiredRodLevel": 12,
    "requiredBait": null,
    "xp": 38,
    "museumValue": 68,
    "description": "Clears the water entirely when it's startled. Startles easily.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "cave_blindfish",
    "name": "Cave Blindfish",
    "rarity": "uncommon",
    "price": 195,
    "weight": [
      0.2,
      0.7
    ],
    "length": [
      10,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 4,
    "requiredRodLevel": 14,
    "requiredBait": null,
    "xp": 44,
    "museumValue": 72,
    "description": "Has no use for eyes down here, so it stopped growing them.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "lionfish",
    "name": "Lionfish",
    "rarity": "rare",
    "price": 380,
    "weight": [
      0.3,
      1.2
    ],
    "length": [
      15,
      35
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 18,
    "requiredBait": null,
    "xp": 62,
    "museumValue": 150,
    "description": "Every spine is a warning. Most anglers heed it.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "electric_eel",
    "name": "Electric Eel",
    "rarity": "rare",
    "price": 540,
    "weight": [
      3,
      12
    ],
    "length": [
      80,
      150
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": ["evening"],
    "difficulty": 6,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 88,
    "museumValue": 200,
    "description": "The rod hums for a full second after you reel it in.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "moonlight_tetra",
    "name": "Moonlight Tetra",
    "rarity": "rare",
    "price": 310,
    "weight": [
      0.05,
      0.3
    ],
    "length": [
      4,
      9
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 5,
    "requiredRodLevel": 22,
    "requiredBait": null,
    "xp": 55,
    "museumValue": 130,
    "description": "A shoal of them looks like scattered moonlight underwater.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "driftwood_catfish",
    "name": "Driftwood Catfish",
    "rarity": "rare",
    "price": 420,
    "weight": [
      4,
      14
    ],
    "length": [
      40,
      90
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 35,
    "requiredBait": null,
    "xp": 72,
    "museumValue": 175,
    "description": "Camouflaged so well it's been mistaken for actual driftwood twice.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "frostbite_cod",
    "name": "Frostbite Cod",
    "rarity": "rare",
    "price": 480,
    "weight": [
      2,
      7
    ],
    "length": [
      30,
      60
    ],
    "season": "winter",
    "weather": [
      "snow"
    ],
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 40,
    "requiredBait": null,
    "xp": 80,
    "museumValue": 190,
    "description": "Its blood runs colder than the water it swims in.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "toxic_puff",
    "name": "Toxic Puff",
    "rarity": "rare",
    "price": 650,
    "weight": [
      0.5,
      2
    ],
    "length": [
      10,
      25
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 48,
    "requiredBait": null,
    "xp": 105,
    "museumValue": 240,
    "description": "Puffs up on contact. The museum insisted on a sealed display case.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "shadow_stingray",
    "name": "Shadow Stingray",
    "rarity": "epic",
    "price": 1450,
    "weight": [
      15,
      45
    ],
    "length": [
      90,
      180
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 7,
    "requiredRodLevel": 55,
    "requiredBait": null,
    "xp": 155,
    "museumValue": 340,
    "description": "Glides past close enough to feel, too dark to actually see.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "prism_angel",
    "name": "Prism Angel",
    "rarity": "epic",
    "price": 2100,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      15,
      30
    ],
    "season": "any",
    "weather": [
      "sunny"
    ],
    "activeTime": ["day"],
    "difficulty": 7,
    "requiredRodLevel": 65,
    "requiredBait": null,
    "xp": 210,
    "museumValue": 480,
    "description": "Splits sunlight into a full spectrum along every scale.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "magma_angler",
    "name": "Magma Angler",
    "rarity": "epic",
    "price": 2650,
    "weight": [
      3,
      10
    ],
    "length": [
      30,
      60
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 8,
    "requiredRodLevel": 78,
    "requiredBait": null,
    "xp": 260,
    "museumValue": 560,
    "description": "Its lure glows like a coal. The rest of it stays hidden in the dark.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "bioluminescent_jelly",
    "name": "Bioluminescent Jelly",
    "rarity": "epic",
    "price": 1750,
    "weight": [
      1,
      5
    ],
    "length": [
      20,
      45
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 6,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 175,
    "museumValue": 400,
    "description": "Pulses in slow rhythm, like it's breathing light instead of water.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "starlight_flounder",
    "name": "Starlight Flounder",
    "rarity": "epic",
    "price": 3300,
    "weight": [
      4,
      12
    ],
    "length": [
      35,
      70
    ],
    "season": "any",
    "weather": [
      "aurora",
      "sunny"
    ],
    "activeTime": ["evening"],
    "difficulty": 8,
    "requiredRodLevel": 95,
    "requiredBait": null,
    "xp": 330,
    "museumValue": 700,
    "description": "Flat, patient, and speckled with what looks like actual stars.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "emerald_arowana",
    "name": "Emerald Arowana",
    "rarity": "epic",
    "price": 4000,
    "weight": [
      5,
      15
    ],
    "length": [
      50,
      100
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 110,
    "requiredBait": null,
    "xp": 395,
    "museumValue": 820,
    "description": "Old money in fish form. Collectors have fought over less.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "kraken_tentacle_fish",
    "name": "Kraken-Tentacle Fish",
    "rarity": "legendary",
    "price": 5400,
    "weight": [
      10,
      35
    ],
    "length": [
      80,
      200
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 8,
    "requiredRodLevel": 28,
    "requiredBait": null,
    "xp": 540,
    "museumValue": 1150,
    "description": "Evolved to look like something much bigger is holding onto it.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "phoenix_dragonfish",
    "name": "Phoenix Dragonfish",
    "rarity": "legendary",
    "price": 7200,
    "weight": [
      8,
      25
    ],
    "length": [
      60,
      130
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 55,
    "requiredBait": null,
    "xp": 690,
    "museumValue": 1480,
    "description": "Scales run warm to the touch, like embers that never fully cooled.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "frost_orca_pup",
    "name": "Frost Orca Pup",
    "rarity": "legendary",
    "price": 8600,
    "weight": [
      40,
      120
    ],
    "length": [
      150,
      300
    ],
    "season": "winter",
    "weather": [
      "snow"
    ],
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 80,
    "requiredBait": null,
    "xp": 830,
    "museumValue": 1750,
    "description": "Too young to be this dangerous. Still is.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "necro_lamprey",
    "name": "Necro Lamprey",
    "rarity": "legendary",
    "price": 9800,
    "weight": [
      3,
      10
    ],
    "length": [
      70,
      140
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": ["evening"],
    "difficulty": 9,
    "requiredRodLevel": 105,
    "requiredBait": null,
    "xp": 960,
    "museumValue": 2000,
    "description": "Circles wrecks that sank long before anyone alive was born.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "solar_sailfish",
    "name": "Solar Sailfish",
    "rarity": "legendary",
    "price": 11500,
    "weight": [
      60,
      180
    ],
    "length": [
      200,
      350
    ],
    "season": "summer",
    "weather": [
      "sunny"
    ],
    "activeTime": ["day"],
    "difficulty": 9,
    "requiredRodLevel": 145,
    "requiredBait": null,
    "xp": 1150,
    "museumValue": 2450,
    "description": "Its dorsal fin catches the sun like a sail catches wind.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "abyssal_maw",
    "name": "Abyssal Maw",
    "rarity": "mythic",
    "price": 17500,
    "weight": [
      50,
      150
    ],
    "length": [
      150,
      300
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 9,
    "requiredRodLevel": 50,
    "requiredBait": null,
    "xp": 1750,
    "museumValue": 3900,
    "description": "You don't catch this so much as it decides to let go.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "time_weaver_eel",
    "name": "Time-Weaver Eel",
    "rarity": "mythic",
    "price": 23000,
    "weight": [
      5,
      18
    ],
    "length": [
      100,
      220
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 130,
    "requiredBait": null,
    "xp": 2300,
    "museumValue": 5100,
    "description": "Its wake ripples slightly out of sync with the water around it.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "soul_stealer_carp",
    "name": "Soul-Stealer Carp",
    "rarity": "mythic",
    "price": 28500,
    "weight": [
      10,
      35
    ],
    "length": [
      80,
      160
    ],
    "season": "any",
    "weather": [
      "blood_moon"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 190,
    "requiredBait": null,
    "xp": 2850,
    "museumValue": 6200,
    "description": "Local legend says it remembers every angler who threw it back.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "runic_coelacanth",
    "name": "Runic Coelacanth",
    "rarity": "ancient",
    "price": 51000,
    "weight": [
      30,
      90
    ],
    "length": [
      120,
      250
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 110,
    "requiredBait": null,
    "xp": 5100,
    "museumValue": 11200,
    "hidden": true,
    "discoveryCondition": "Caught in the Ancient Temple with a Steel Rod or better.",
    "description": "Symbols older than any written language run down both flanks.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "fossil_dunkleosteus",
    "name": "Fossil Dunkleosteus",
    "rarity": "ancient",
    "price": 66000,
    "weight": [
      200,
      600
    ],
    "length": [
      300,
      600
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 200,
    "requiredBait": "dragon_blood",
    "xp": 6600,
    "museumValue": 14200,
    "hidden": true,
    "discoveryCondition": "Caught in the Dark Abyss with Dragon Blood equipped.",
    "description": "Armored plating that should have gone extinct 350 million years ago. Should have.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "supernova_shrimp",
    "name": "Supernova Shrimp",
    "rarity": "celestial",
    "price": 95000,
    "weight": [
      0.5,
      2
    ],
    "length": [
      10,
      25
    ],
    "season": "any",
    "weather": [
      "meteor_shower"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 180,
    "requiredBait": null,
    "xp": 9500,
    "museumValue": 20000,
    "hidden": true,
    "discoveryCondition": "Caught in the Sky Lake while the Meteor Shower world weather is active.",
    "description": "Detonates into a brief shower of light the moment it clears the water.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "galaxy_whale_shark",
    "name": "Galaxy Whale Shark",
    "rarity": "celestial",
    "price": 148000,
    "weight": [
      400,
      1200
    ],
    "length": [
      500,
      900
    ],
    "season": "any",
    "weather": [
      "aurora"
    ],
    "activeTime": ["morning"],
    "difficulty": 10,
    "requiredRodLevel": 240,
    "requiredBait": "magical_dust",
    "minLuck": 180,
    "xp": 14800,
    "museumValue": 31000,
    "hidden": true,
    "discoveryCondition": "Caught in the Deep Ocean during Aurora weather, with Magical Dust equipped and Luck above 180.",
    "description": "Its markings drift and rearrange like slow-moving constellations.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "seraphim_koi",
    "name": "Seraphim Koi",
    "rarity": "divine",
    "price": 850000,
    "weight": [
      50,
      150
    ],
    "length": [
      200,
      400
    ],
    "season": "any",
    "weather": [
      "full_moon"
    ],
    "activeTime": ["morning"],
    "difficulty": 10,
    "requiredRodLevel": 380,
    "requiredBait": "magical_dust",
    "minLuck": 280,
    "xp": 85000,
    "museumValue": 180000,
    "hidden": true,
    "discoveryCondition": "Full moon, morning, in the Dream World, with Magical Dust equipped and Luck above 280.",
    "description": "Every scale is a small, perfect wing. It does not need water to move.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "chronos_wyrm",
    "name": "Chronos Wyrm",
    "rarity": "divine",
    "price": 1650000,
    "weight": [
      150,
      500
    ],
    "length": [
      400,
      800
    ],
    "season": "any",
    "weather": [
      "blood_moon",
      "full_moon"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 380,
    "requiredBait": "magical_dust",
    "minLuck": 300,
    "xp": 165000,
    "museumValue": 420000,
    "hidden": true,
    "discoveryCondition": "Blood Moon or Full Moon, evening, in the Ancient Temple, Magical Dust equipped, Luck above 300.",
    "description": "Older than the Temple built around it. It was probably here first.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "bitterling",
    "name": "Bitterling",
    "rarity": "common",
    "price": 7,
    "weight": [
      0.02,
      0.15
    ],
    "length": [
      4,
      9
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 4,
    "museumValue": 6,
    "description": "A palm-sized carp that lays its eggs inside living mussels.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "brown_trout",
    "name": "Brown Trout",
    "rarity": "common",
    "price": 13,
    "weight": [
      0.4,
      2
    ],
    "length": [
      20,
      45
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 3,
    "requiredBait": null,
    "xp": 7,
    "museumValue": 9,
    "description": "Speckled, stubborn, and smarter than the average river fish.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "mud_loach",
    "name": "Mud Loach",
    "rarity": "common",
    "price": 9,
    "weight": [
      0.05,
      0.35
    ],
    "length": [
      8,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 2,
    "requiredRodLevel": 2,
    "requiredBait": null,
    "xp": 6,
    "museumValue": 7,
    "description": "Buries itself in the silt and waits for the rod to give up.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "pond_smelt",
    "name": "Pond Smelt",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.02,
      0.12
    ],
    "length": [
      6,
      14
    ],
    "season": "winter",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 4,
    "requiredBait": null,
    "xp": 7,
    "museumValue": 9,
    "description": "Runs in shivering schools under the winter ice.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "common_shiner",
    "name": "Common Shiner",
    "rarity": "common",
    "price": 6,
    "weight": [
      0.03,
      0.2
    ],
    "length": [
      6,
      15
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 6,
    "description": "Flashes silver in the shallows all day long, catching every eye but its own.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "silver_beam",
    "name": "Silver Bream",
    "rarity": "common",
    "price": 15,
    "weight": [
      0.2,
      1.2
    ],
    "length": [
      15,
      35
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 5,
    "requiredBait": null,
    "xp": 8,
    "museumValue": 10,
    "description": "A flat, coin-bright bream that travels in polite, orderly shoals.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "mossy_stone_loach",
    "name": "Mossy Stone Loach",
    "rarity": "common",
    "price": 17,
    "weight": [
      0.05,
      0.3
    ],
    "length": [
      7,
      16
    ],
    "season": "any",
    "weather": [
      "rain",
      "fog"
    ],
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 7,
    "requiredBait": null,
    "xp": 10,
    "museumValue": 12,
    "description": "Wears a coat of river moss so convincing that most anglers hook a rock first.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "neon_tetra",
    "name": "Neon Tetra",
    "rarity": "uncommon",
    "price": 58,
    "weight": [
      0.01,
      0.05
    ],
    "length": [
      2,
      5
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 4,
    "requiredBait": null,
    "xp": 15,
    "museumValue": 30,
    "description": "A living stripe of blue and red, brightest in dark water.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "archer_fish",
    "name": "Archerfish",
    "rarity": "uncommon",
    "price": 72,
    "weight": [
      0.1,
      0.5
    ],
    "length": [
      10,
      25
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning","day"],
    "difficulty": 4,
    "requiredRodLevel": 8,
    "requiredBait": null,
    "xp": 18,
    "museumValue": 34,
    "description": "Shoots insects off branches with a jet of water. Occasionally shoots anglers.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "cherry_barb",
    "name": "Cherry Barb",
    "rarity": "uncommon",
    "price": 64,
    "weight": [
      0.01,
      0.06
    ],
    "length": [
      3,
      6
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 3,
    "requiredBait": null,
    "xp": 16,
    "museumValue": 31,
    "description": "Turns deep crimson when it decides to show off, which is often.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "leaf_fish",
    "name": "Leaf Fish",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.05,
      0.3
    ],
    "length": [
      6,
      12
    ],
    "season": "autumn",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 20,
    "museumValue": 36,
    "description": "Drifts sideways like a fallen leaf until something edible swims past.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "spotted_gar",
    "name": "Spotted Gar",
    "rarity": "uncommon",
    "price": 95,
    "weight": [
      2,
      8
    ],
    "length": [
      50,
      110
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 14,
    "requiredBait": null,
    "xp": 24,
    "museumValue": 42,
    "description": "An armored torpedo with a mouth full of needles and no rush at all.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "theradfin_ranbowfish",
    "name": "Threadfin Rainbowfish",
    "rarity": "uncommon",
    "price": 88,
    "weight": [
      0.01,
      0.08
    ],
    "length": [
      4,
      8
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning"],
    "difficulty": 4,
    "requiredRodLevel": 11,
    "requiredBait": null,
    "xp": 22,
    "museumValue": 40,
    "description": "Trails fins like fine thread and catches the sunrise in all of them.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "copper_corydoras",
    "name": "Copper Corydoras",
    "rarity": "uncommon",
    "price": 68,
    "weight": [
      0.02,
      0.1
    ],
    "length": [
      4,
      9
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 17,
    "museumValue": 33,
    "description": "A tireless little bottom cleaner plated in warm copper.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "discus_fish",
    "name": "Discus Fish",
    "rarity": "rare",
    "price": 180,
    "weight": [
      0.2,
      1
    ],
    "length": [
      15,
      25
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 12,
    "requiredBait": null,
    "xp": 45,
    "museumValue": 70,
    "description": "A perfect painted disc. Keepers call it the king of the still water.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "mandarin_fish",
    "name": "Mandarinfish",
    "rarity": "rare",
    "price": 260,
    "weight": [
      0.02,
      0.1
    ],
    "length": [
      5,
      8
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 5,
    "requiredRodLevel": 20,
    "requiredBait": null,
    "xp": 55,
    "museumValue": 95,
    "description": "Patterned like silk embroidery and just as delicate to land.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "bichir",
    "name": "Bichir",
    "rarity": "rare",
    "price": 300,
    "weight": [
      1,
      4
    ],
    "length": [
      30,
      70
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning"],
    "difficulty": 5,
    "requiredRodLevel": 25,
    "requiredBait": null,
    "xp": 62,
    "museumValue": 110,
    "description": "Breathes air, walks on its fins, and predates most things that do either.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "elephant_nose_fish",
    "name": "Elephant Nose Fish",
    "rarity": "rare",
    "price": 340,
    "weight": [
      0.3,
      1.5
    ],
    "length": [
      20,
      35
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning"],
    "difficulty": 6,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 70,
    "museumValue": 125,
    "description": "Reads the riverbed with a weak electric field and a very odd chin.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "stargazer_fish",
    "name": "Stargazer Fish",
    "rarity": "rare",
    "price": 420,
    "weight": [
      1,
      5
    ],
    "length": [
      25,
      55
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 6,
    "requiredRodLevel": 36,
    "requiredBait": null,
    "xp": 85,
    "museumValue": 150,
    "description": "Buries itself with only its eyes exposed, staring straight up forever.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "phanton_ribbon_eel",
    "name": "Phantom Ribbon Eel",
    "rarity": "rare",
    "price": 560,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      60,
      120
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 44,
    "requiredBait": null,
    "xp": 100,
    "museumValue": 210,
    "description": "A ribbon of pale light that fades out the moment you look directly at it.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "origami_koi",
    "name": "Origami Koi",
    "rarity": "rare",
    "price": 640,
    "weight": [
      0.5,
      3
    ],
    "length": [
      25,
      55
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 48,
    "requiredBait": null,
    "xp": 105,
    "museumValue": 240,
    "description": "Folded, not born. The creases still hold along every fin.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "bioluminescent_shark",
    "name": "Bioluminescent Shark",
    "rarity": "epic",
    "price": 1600,
    "weight": [
      30,
      110
    ],
    "length": [
      150,
      300
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 7,
    "requiredRodLevel": 58,
    "requiredBait": null,
    "xp": 165,
    "museumValue": 380,
    "description": "Lights its own belly to erase its silhouette. You never see it coming.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "magma_ray",
    "name": "Magma Ray",
    "rarity": "epic",
    "price": 2400,
    "weight": [
      20,
      70
    ],
    "length": [
      100,
      220
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 72,
    "requiredBait": null,
    "xp": 240,
    "museumValue": 520,
    "description": "Glides over lava vents with cracks of molten orange running down its wings.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "spectral_seahorse",
    "name": "Spectral Seahorse",
    "rarity": "epic",
    "price": 1900,
    "weight": [
      0.05,
      0.4
    ],
    "length": [
      10,
      25
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": ["morning"],
    "difficulty": 7,
    "requiredRodLevel": 64,
    "requiredBait": null,
    "xp": 190,
    "museumValue": 430,
    "description": "Anchors its tail to a wreck that isn't quite there anymore.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "crystal_sturgeon",
    "name": "Crystal Sturgeon",
    "rarity": "epic",
    "price": 3100,
    "weight": [
      25,
      90
    ],
    "length": [
      120,
      260
    ],
    "season": "winter",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 88,
    "requiredBait": null,
    "xp": 310,
    "museumValue": 660,
    "description": "Its scutes grew as clear quartz. You can watch it breathe from the outside.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "nebula_grouper",
    "name": "Nebula Grouper",
    "rarity": "epic",
    "price": 3600,
    "weight": [
      30,
      120
    ],
    "length": [
      120,
      240
    ],
    "season": "any",
    "weather": [
      "aurora",
      "sunny"
    ],
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "xp": 355,
    "museumValue": 750,
    "description": "Enormous, slow, and freckled with the colors of a distant nursery of stars.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "thunder_eel",
    "name": "Thunder Eel",
    "rarity": "epic",
    "price": 2800,
    "weight": [
      5,
      20
    ],
    "length": [
      80,
      180
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 80,
    "requiredBait": null,
    "xp": 280,
    "museumValue": 600,
    "description": "Every storm over the lake is really just this eel waking up.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "venomous_liontoad",
    "name": "Venomous Liontoad",
    "rarity": "epic",
    "price": 2200,
    "weight": [
      2,
      9
    ],
    "length": [
      25,
      50
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["day"],
    "difficulty": 8,
    "requiredRodLevel": 68,
    "requiredBait": null,
    "xp": 220,
    "museumValue": 490,
    "description": "Half lionfish, half toad, entirely a mistake the swamp made on purpose.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "golden_arowana",
    "name": "Golden Arowana",
    "rarity": "legendary",
    "price": 6800,
    "weight": [
      6,
      20
    ],
    "length": [
      70,
      120
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 40,
    "requiredBait": null,
    "xp": 660,
    "museumValue": 1400,
    "description": "A bar of living gold that jumps clean out of the water to feed.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "abyssal_goliath",
    "name": "Abyssal Goliath",
    "rarity": "legendary",
    "price": 9400,
    "weight": [
      150,
      500
    ],
    "length": [
      250,
      500
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 9,
    "requiredRodLevel": 95,
    "requiredBait": null,
    "xp": 920,
    "museumValue": 1900,
    "description": "So large the line goes slack because it simply hasn't noticed you yet.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "frist_wyrm_fish",
    "name": "Frost Wyrm Fish",
    "rarity": "legendary",
    "price": 10500,
    "weight": [
      40,
      140
    ],
    "length": [
      180,
      340
    ],
    "season": "winter",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 120,
    "requiredBait": null,
    "xp": 1030,
    "museumValue": 2150,
    "description": "Freezes the water behind it as it swims. The hole reopens for no one else.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "solar_flare_ray",
    "name": "Solar Flare Ray",
    "rarity": "legendary",
    "price": 12500,
    "weight": [
      60,
      200
    ],
    "length": [
      200,
      380
    ],
    "season": "summer",
    "weather": "any",
    "activeTime": ["day"],
    "difficulty": 9,
    "requiredRodLevel": 150,
    "requiredBait": null,
    "xp": 1240,
    "museumValue": 2600,
    "description": "Surfaces at noon and briefly makes the sea too bright to look at.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "maelstrom_serpent_hatchling",
    "name": "Maelstrom Serpent Hatchling",
    "rarity": "legendary",
    "price": 14000,
    "weight": [
      20,
      80
    ],
    "length": [
      150,
      320
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 165,
    "requiredBait": null,
    "xp": 1380,
    "museumValue": 2900,
    "description": "Still a hatchling. Already drags a whirlpool everywhere it goes.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "abyssal_bell_jelly",
    "name": "Abyssal Bell Jelly",
    "rarity": "legendary",
    "price": 8200,
    "weight": [
      5,
      25
    ],
    "length": [
      60,
      160
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 8,
    "requiredRodLevel": 70,
    "requiredBait": null,
    "xp": 800,
    "museumValue": 1700,
    "description": "Rings once, very low, when it is lifted from the water. Nobody enjoys it.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "time_rift_squid",
    "name": "Time Rift Squid",
    "rarity": "mythic",
    "price": 21000,
    "weight": [
      8,
      30
    ],
    "length": [
      80,
      200
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 120,
    "requiredBait": null,
    "xp": 2100,
    "museumValue": 4600,
    "description": "Its ink shows you the cast you are about to make, a second too late.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "void_walker_crab",
    "name": "Void Walker Crab",
    "rarity": "mythic",
    "price": 25000,
    "weight": [
      15,
      60
    ],
    "length": [
      40,
      120
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 150,
    "requiredBait": null,
    "xp": 2500,
    "museumValue": 5400,
    "description": "Steps sideways out of one place and into another. Cannot be cornered.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "ethereal_manta",
    "name": "Ethereal Manta",
    "rarity": "mythic",
    "price": 27000,
    "weight": [
      80,
      300
    ],
    "length": [
      250,
      500
    ],
    "season": "any",
    "weather": [
      "aurora",
      "full_moon"
    ],
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 170,
    "requiredBait": null,
    "xp": 2700,
    "museumValue": 5800,
    "description": "Flies more than it swims, and only over water that reflects the sky.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "grim_reaper_angler",
    "name": "Grim Reaper Angler",
    "rarity": "mythic",
    "price": 30000,
    "weight": [
      20,
      80
    ],
    "length": [
      100,
      220
    ],
    "season": "any",
    "weather": [
      "blood_moon",
      "fog"
    ],
    "activeTime": ["night"],
    "difficulty": 10,
    "requiredRodLevel": 195,
    "requiredBait": null,
    "minLuck": 120,
    "xp": 3000,
    "museumValue": 6500,
    "description": "Its lure is shaped like a small, patient hourglass.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "jurassic_megaladon_pup",
    "name": "Jurassic Megalodon Pup",
    "rarity": "ancient",
    "price": 58000,
    "weight": [
      300,
      900
    ],
    "length": [
      350,
      650
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 150,
    "requiredBait": null,
    "minLuck": 100,
    "xp": 5800,
    "museumValue": 12500,
    "description": "A pup by its own standards. Larger than most boats by everyone else's.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "obsidian_placoderm",
    "name": "Obsidian Placoderm",
    "rarity": "ancient",
    "price": 70000,
    "weight": [
      250,
      700
    ],
    "length": [
      300,
      550
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 190,
    "requiredBait": "dragon_blood",
    "xp": 7000,
    "museumValue": 15000,
    "description": "Volcanic glass plating, chipped in a hundred fights it clearly won.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "astral_star_ray",
    "name": "Astral Star Ray",
    "rarity": "celestial",
    "price": 110000,
    "weight": [
      50,
      200
    ],
    "length": [
      200,
      420
    ],
    "season": "any",
    "weather": [
      "aurora",
      "meteor_shower"
    ],
    "activeTime": ["day"],
    "difficulty": 10,
    "requiredRodLevel": 200,
    "requiredBait": null,
    "minLuck": 150,
    "xp": 11000,
    "museumValue": 23000,
    "description": "Each wingbeat leaves a constellation hanging in the water for a moment.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "comet_tail_koi",
    "name": "Comet Tail Koi",
    "rarity": "celestial",
    "price": 132000,
    "weight": [
      20,
      90
    ],
    "length": [
      120,
      300
    ],
    "season": "any",
    "weather": [
      "meteor_shower",
      "full_moon"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 220,
    "requiredBait": "starlight_dust",
    "minLuck": 170,
    "xp": 13200,
    "museumValue": 27000,
    "description": "Trails a tail of burning dust that keeps glowing long after release.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "id": "astral_weaver",
    "name": "Astral Weaver",
    "rarity": "divine",
    "price": 1200000,
    "weight": [
      80,
      300
    ],
    "length": [
      300,
      600
    ],
    "season": "any",
    "weather": [
      "aurora",
      "full_moon"
    ],
    "activeTime": ["day"],
    "difficulty": 10,
    "requiredRodLevel": 380,
    "requiredBait": "starlight_dust",
    "minLuck": 260,
    "xp": 120000,
    "museumValue": 300000,
    "description": "It does not swim through the water. It weaves the water it needs and moves on.",
    "worldId": 0,
    "progressionRequired": true
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "algae_tangled_chub",
    "name": "Algae Tangled Chub",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Drags a permanent curtain of glowing algae behind it. Impossible to sneak up on."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "blind_cave_minnow",
    "name": "Blind Cave Minnow",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Lost its eyes generations ago. Navigates entirely by the hum of the water."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "cavern_leech_eel",
    "name": "Cavern Leech Eel",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Not a leech, not quite an eel. The name stuck before anyone could argue."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "chitin_plated_barb",
    "name": "Chitin Plated Barb",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Its scales clatter like loose armor plates when it thrashes on the line."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "damp_fungus_guppy",
    "name": "Damp Fungus Guppy",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "A thin coat of luminous mold grows on its fins and never seems to bother it."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "echo_fin_bream",
    "name": "Echo Fin Bream",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Its fins vibrate at a pitch just low enough to feel in your teeth."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "gilded_vein_sardine",
    "name": "Gilded Vein Sardine",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Thin metallic streaks run under its scales like veins of ore."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "glow_moss_tetra",
    "name": "Glow Moss Tetra",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Carries a faint green glow wherever it swims, like a very small lantern."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "iron_dust_smelt",
    "name": "Iron Dust Smelt",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Shakes loose a fine rust-colored powder when it's pulled from the water."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "mud_burrower_catfish",
    "name": "Mud Burrower Catfish",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Spends most of its life buried snout-first in silt. Resents being interrupted."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "pale_eyed_rasbora",
    "name": "Pale Eyed Rasbora",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Its eyes have gone milky white, but it still flinches at shadows."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "pebble_hide_gudgeon",
    "name": "Pebble Hide Gudgeon",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Scales textured like river stone. Sits dead still and hopes you walk past."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "shadow_silk_dart",
    "name": "Shadow Silk Dart",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Slips through the water so fast it leaves a dark smear in your vision."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "silt_glider_flounder",
    "name": "Silt Glider Flounder",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Flat as a dinner plate and just as easy to lose against the seafloor."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "slate_scaled_loach",
    "name": "Slate Scaled Loach",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Grey, flat, and unbothered. It has seen a thousand hooks and dodged most of them."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "spore_dusted_roach",
    "name": "Spore Dusted Roach",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Kicks up a faint cloud of spores every time it startles."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "stalactite_horned_pike",
    "name": "Stalactite Horned Pike",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "A single hardened spike juts from its skull, shaped uncannily like cave rock."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "sulfur_stripe_anchovy",
    "name": "Sulfur Stripe Anchovy",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Smells faintly of rotten eggs. Tastes better than that sounds."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "whisker_sense_dace",
    "name": "Whisker Sense Dace",
    "rarity": "common",
    "price": 10,
    "weight": [
      0.1,
      1
    ],
    "length": [
      5,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Long, twitching whiskers do the seeing its eyes gave up on long ago."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "acid_archerfish",
    "name": "Acid Archerfish",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Spits a thin jet of acidic water at bugs on the surface. Wear gloves."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "amethyst_shard_koi",
    "name": "Amethyst Shard Koi",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Grew up around a mineral vein and came out looking half gemstone."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "bone_plated_haddock",
    "name": "Bone Plated Haddock",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Its skull has calcified into a visible plate you can knock on."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "bronze_jaw_grouper",
    "name": "Bronze Jaw Grouper",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "A jaw the color and hardness of cast bronze. Bites down like it too."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "crimson_bio_shark",
    "name": "Crimson Bio Shark",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Small for a shark, but its blood-red bioluminescence makes it look bigger in the dark."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "crystal_shell_crab",
    "name": "Crystal Shell Crab",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Not a fish, technically, but the rod hooks it just the same. Its shell refracts light like glass."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "echo_chamber_puffer",
    "name": "Echo Chamber Puffer",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Puffs up into a near-perfect sphere and hums with the cave's own echo."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "ember_scale_tetra",
    "name": "Ember Scale Tetra",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Its scales hold warmth long after it's out of the water."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "fungal_parasite_salmon",
    "name": "Fungal Parasite Salmon",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Something's growing on it that isn't salmon. It doesn't seem to mind."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "ghost_flame_tetra",
    "name": "Ghost Flame Tetra",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "A cold blue flame flickers along its spine without ever burning it."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "jade_eye_flounder",
    "name": "Jade Eye Flounder",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "One eye has gone a deep, polished green. The other stayed ordinary."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "lantern_stalk_angelfish",
    "name": "Lantern Stalk Angelfish",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Grew a small glowing stalk over one eye, like it's been expecting company."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "magma_vent_skate",
    "name": "Magma Vent Skate",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Lives close enough to the thermal vents that its underside is always warm to the touch."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "magnetite_nose_marlin",
    "name": "Magnetite Nose Marlin",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "A mineral deposit in its snout makes compasses spin when it swims close."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "needle_spine_eel",
    "name": "Needle Spine Eel",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "A row of hair-thin spines runs its full length. Handle it by the tail only."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "neon_vein_snapper",
    "name": "Neon Vein Snapper",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Bright veins of light pulse under its skin, brighter the angrier it gets."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "slag_scale_carp",
    "name": "Slag Scale Carp",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Its scales look like cooled volcanic slag, rough and faintly warm."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "spore_cloud_dory",
    "name": "Spore Cloud Dory",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Releases a puff of pale spores the instant it feels the hook."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "toxic_spore_puffer",
    "name": "Toxic Spore Puffer",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "The spores on its skin are mildly poisonous. The fish itself is fine to eat."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "venom_dart_killifish",
    "name": "Venom Dart Killifish",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Tiny and fast, with a sting sharp enough to make bigger fish keep their distance."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "webbed_cave_ray",
    "name": "Webbed Cave Ray",
    "rarity": "uncommon",
    "price": 80,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 10,
    "requiredBait": null,
    "xp": 25,
    "museumValue": 45,
    "description": "Its fins have thinned into near-transparent webbing, built for total darkness."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "abyssal_maw_grouper",
    "name": "Abyssal Maw Grouper",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "A jaw built to swallow things larger than common sense would allow."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "blood_quartz_guppy",
    "name": "Blood Quartz Guppy",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Carries a single vivid red crystal fused into its dorsal fin."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "chlorophyll_mutant_pike",
    "name": "Chlorophyll Mutant Pike",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Its scales have gone plant-green and photosynthesize, faintly, in bright light."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "crystalline_barb",
    "name": "Crystalline Barb",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Half its body has calcified into translucent crystal. Still swims fine."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "diamond_back_ray",
    "name": "Diamond Back Ray",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "A ridge of hardened, gem-bright scales runs down its spine."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "emerald_prism_mahi",
    "name": "Emerald Prism Mahi",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Refracts light into a full spectrum with every turn. Divers chase it for the view alone."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "geode_core_snapper",
    "name": "Geode Core Snapper",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Crack one open — carefully — and there's a small hollow of crystal at its core."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "glacial_shard_sturgeon",
    "name": "Glacial Shard Sturgeon",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Cold enough to the touch that frost forms on the line reeling it in."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "inferno_belly_coelacanth",
    "name": "Inferno Belly Coelacanth",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "A living fossil with a molten-orange underside that never actually burns."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "iron_maiden_puffer",
    "name": "Iron Maiden Puffer",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Puffs into a ball of hardened iron-flecked spines. Handle with thick gloves."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "luminous_coral_angelfish",
    "name": "Luminous Coral Angelfish",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Trails a faint coral-pink glow, like it never quite left its reef behind."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "magma_blood_catfish",
    "name": "Magma Blood Catfish",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Its blood runs warm enough to fog cold glass. Best not to think about why."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "mycelium_network_carp",
    "name": "Mycelium Network Carp",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "A pale fungal net spreads across its flank, pulsing faintly when it swims."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "necro_bone_angler",
    "name": "Necro Bone Angler",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Its lure is a small, bare bone. Nobody's found where the rest of it came from."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "petrified_eel",
    "name": "Petrified Eel",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Half its body has turned to stone over the years, and it still hunts fine with the other half."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "plasma_pulse_eel",
    "name": "Plasma Pulse Eel",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Discharges a soft blue pulse down its length, strong enough to feel through the rod."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "razor_whip_ray",
    "name": "Razor Whip Ray",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Its tail has hardened into a blade-thin whip. Reel in from the side, not behind."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "shadow_weaver_flounder",
    "name": "Shadow Weaver Flounder",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Bends the dim cave light around itself until it's barely there at all."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "toxic_sludge_leviathan_pup",
    "name": "Toxic Sludge Leviathan Pup",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Small for now. Whatever it grows into, best not to find out up close."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "void_scale_mackerel",
    "name": "Void Scale Mackerel",
    "rarity": "rare",
    "price": 300,
    "weight": [
      2,
      10
    ],
    "length": [
      20,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 30,
    "requiredBait": null,
    "xp": 75,
    "museumValue": 150,
    "description": "Its scales don't reflect light so much as swallow it whole."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "banshee_fish",
    "name": "Banshee Fish",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": ["night"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Screams once when lifted from the water. Everyone in the area hears it."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "blood_iron_swordfish",
    "name": "Blood Iron Swordfish",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Its bill carries enough charge to arc through the rain. Only surfaces in storms."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "chrono_stasis_puffer",
    "name": "Chrono Stasis Puffer",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Puffs up and time stalls around it for half a second. Long enough to notice."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "crystal_ray",
    "name": "Crystal Ray",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "aurora",
      "sunny"
    ],
    "activeTime": ["day"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Refracts the light above it into a hundred beams. Only swims when there's sky to reflect."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "crystal_titan_gar",
    "name": "Crystal Titan Gar",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "winter",
    "weather": [
      "snow"
    ],
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Crystal plates fused by deep cold. The scales only form in winter snowfall."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "deep_void_kraken",
    "name": "Deep Void Kraken",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Rises from nothing. Returns to nothing. Only ever seen as the light fails."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "fractal_glass_angler",
    "name": "Fractal Glass Angler",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": ["morning"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Its lure fractures into a thousand repeating images. Only one of them is real."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "frost_snapper",
    "name": "Frost Snapper",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "winter",
    "weather": [
      "snow"
    ],
    "activeTime": ["morning","day"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Snaps its jaws once and the water around it skins over with ice."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "hammerhead_shark",
    "name": "Hammerhead Shark",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "summer",
    "weather": [
      "sunny"
    ],
    "activeTime": ["day"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Turns its head to watch both directions at once. Missed nothing yet."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "magma_eel",
    "name": "Magma Eel",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Swims through solid rock as easily as water, leaving a glowing seam behind it."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "meteorite_carapace_crab",
    "name": "Meteorite Carapace Crab",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "meteor_shower"
    ],
    "activeTime": ["evening"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Its shell still radiates the heat of atmospheric entry."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "obsidian_dragonet",
    "name": "Obsidian Dragonet",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": ["day"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Fins like shattered glass. Anything that gets too close, gets cut."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "phantom_soul_moray",
    "name": "Phantom Soul Moray",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "fog",
      "blood_moon"
    ],
    "activeTime": ["night"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Slips through nets like it was never quite solid to begin with."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "plague_bringer_sturgeon",
    "name": "Plague Bringer Sturgeon",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Nothing else lives long in the water it passes through."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "plasma_core_leviathan",
    "name": "Plasma Core Leviathan",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "aurora"
    ],
    "activeTime": ["day"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "A slow, visible pulse of light beats beneath its skin."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "radioactive_isotope_shark",
    "name": "Radioactive Isotope Shark",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["day"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Glows faintly green in the dark. The counters agree it shouldn't."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "spore_shark",
    "name": "Spore Shark",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Trails a cloud of spores that takes root wherever it settles."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "sunken_reactor_eel",
    "name": "Sunken Reactor Eel",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Hums with a current no sunken reactor should still be producing."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "thunder_storm_ray",
    "name": "Thunder Storm Ray",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Every wingbeat cracks like distant thunder rolling under the waves."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "void_barbel",
    "name": "Void Barbel",
    "rarity": "epic",
    "price": 1500,
    "weight": [
      10,
      50
    ],
    "length": [
      50,
      150
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": ["morning"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 200,
    "museumValue": 450,
    "description": "Its whiskers trail off into nothing. Touch one and your hand goes numb."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "abyssal_trench_serpent",
    "name": "Abyssal Trench Serpent",
    "rarity": "legendary",
    "price": 7000,
    "weight": [
      30,
      150
    ],
    "length": [
      100,
      300
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "xp": 750,
    "museumValue": 1600,
    "description": "Lives at depths where the pressure alone should have crushed it flat."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "astral_geode_behemoth",
    "name": "Astral Geode Behemoth",
    "rarity": "legendary",
    "price": 7000,
    "weight": [
      30,
      150
    ],
    "length": [
      100,
      300
    ],
    "season": "any",
    "weather": [
      "aurora"
    ],
    "activeTime": ["day"],
    "difficulty": 8,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "minLuck": 60,
    "xp": 750,
    "museumValue": 1600,
    "description": "Cracked open once by accident. Someone's still finding the light from it."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "ethereal_world_weaver",
    "name": "Ethereal World Weaver",
    "rarity": "legendary",
    "price": 7000,
    "weight": [
      30,
      150
    ],
    "length": [
      100,
      300
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "minLuck": 70,
    "xp": 750,
    "museumValue": 1600,
    "description": "Loose threads drift from its body and never quite land."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "fungus_god_goliath",
    "name": "Fungus God Goliath",
    "rarity": "legendary",
    "price": 7000,
    "weight": [
      30,
      150
    ],
    "length": [
      100,
      300
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "xp": 750,
    "museumValue": 1600,
    "description": "An entire ecosystem has taken root along its spine."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "molten_core_megalodon",
    "name": "Molten Core Megalodon",
    "rarity": "legendary",
    "price": 7000,
    "weight": [
      30,
      150
    ],
    "length": [
      100,
      300
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening","night"],
    "difficulty": 8,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "minLuck": 65,
    "xp": 750,
    "museumValue": 1600,
    "description": "Bites clean through stone. The water near it never fully cools."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "storm_king_tarpon",
    "name": "Storm King Tarpon",
    "rarity": "legendary",
    "price": 7000,
    "weight": [
      30,
      150
    ],
    "length": [
      100,
      300
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": ["day","evening"],
    "difficulty": 8,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "minLuck": 55,
    "xp": 750,
    "museumValue": 1600,
    "description": "Leaps clear of the surface and the sky answers with lightning."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "astral_apex_ray",
    "name": "Astral Apex Ray",
    "rarity": "mythic",
    "price": 20000,
    "weight": [
      50,
      250
    ],
    "length": [
      150,
      400
    ],
    "season": "any",
    "weather": [
      "meteor_shower"
    ],
    "activeTime": ["day"],
    "difficulty": 9,
    "requiredRodLevel": 180,
    "requiredBait": null,
    "minLuck": 100,
    "xp": 2200,
    "museumValue": 4800,
    "hidden": true,
    "discoveryCondition": "Caught during a Meteor Shower in the day in The Neon Tide.",
    "description": "Every angler who's caught it swears it belonged to a different world."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "nebula_shark",
    "name": "Nebula Shark",
    "rarity": "mythic",
    "price": 20000,
    "weight": [
      50,
      250
    ],
    "length": [
      150,
      400
    ],
    "season": "any",
    "weather": [
      "aurora"
    ],
    "activeTime": ["evening"],
    "difficulty": 9,
    "requiredRodLevel": 180,
    "requiredBait": null,
    "minLuck": 110,
    "xp": 2200,
    "museumValue": 4800,
    "hidden": true,
    "discoveryCondition": "Caught during Aurora weather in the evening in The Neon Tide.",
    "description": "Its markings are still expanding, slowly, like a galaxy of its own."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "paradox_serpent",
    "name": "Paradox Serpent",
    "rarity": "mythic",
    "price": 20000,
    "weight": [
      50,
      250
    ],
    "length": [
      150,
      400
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": ["morning"],
    "difficulty": 9,
    "requiredRodLevel": 180,
    "requiredBait": null,
    "minLuck": 105,
    "xp": 2200,
    "museumValue": 4800,
    "hidden": true,
    "discoveryCondition": "Caught in dense morning fog in The Neon Tide.",
    "description": "Caught it once. Caught it twice. Not sure which memory is real."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "rift_whale",
    "name": "Rift Whale",
    "rarity": "mythic",
    "price": 20000,
    "weight": [
      50,
      250
    ],
    "length": [
      150,
      400
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 9,
    "requiredRodLevel": 180,
    "requiredBait": null,
    "minLuck": 95,
    "xp": 2200,
    "museumValue": 4800,
    "hidden": true,
    "discoveryCondition": "Caught during a storm in The Neon Tide.",
    "description": "Where it swims, the water briefly forgets which world it belongs to."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "singularity_angler",
    "name": "Singularity Angler",
    "rarity": "mythic",
    "price": 20000,
    "weight": [
      50,
      250
    ],
    "length": [
      150,
      400
    ],
    "season": "any",
    "weather": [
      "blood_moon",
      "fog"
    ],
    "activeTime": ["evening"],
    "difficulty": 9,
    "requiredRodLevel": 180,
    "requiredBait": null,
    "minLuck": 120,
    "xp": 2200,
    "museumValue": 4800,
    "hidden": true,
    "discoveryCondition": "Caught on a Blood Moon or in heavy evening fog in The Neon Tide.",
    "description": "Its lure doesn't glow. It bends the light around it inward."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "vortex_leviathan",
    "name": "Vortex Leviathan",
    "rarity": "mythic",
    "price": 20000,
    "weight": [
      50,
      250
    ],
    "length": [
      150,
      400
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": ["evening","night"],
    "difficulty": 9,
    "requiredRodLevel": 180,
    "requiredBait": null,
    "minLuck": 100,
    "xp": 2200,
    "museumValue": 4800,
    "hidden": true,
    "discoveryCondition": "Caught during a storm in the evening or night in The Neon Tide.",
    "description": "Drags the current into a slow spiral wherever it turns."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "ooze_leviathan",
    "name": "Ooze Leviathan",
    "rarity": "ancient",
    "price": 60000,
    "weight": [
      100,
      500
    ],
    "length": [
      250,
      600
    ],
    "season": "any",
    "weather": [
      "rain",
      "fog"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 250,
    "requiredBait": "magical_dust",
    "minLuck": 140,
    "xp": 6200,
    "museumValue": 13000,
    "hidden": true,
    "discoveryCondition": "Caught in rain or fog in the evening in The Neon Tide, with Magical Dust equipped and Luck above 140.",
    "description": "Older than the reef, and still quietly dissolving everything it touches."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "petrified_coelacanth",
    "name": "Petrified Coelacanth",
    "rarity": "ancient",
    "price": 60000,
    "weight": [
      100,
      500
    ],
    "length": [
      250,
      600
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": ["morning"],
    "difficulty": 10,
    "requiredRodLevel": 250,
    "requiredBait": "dragon_blood",
    "minLuck": 160,
    "xp": 6200,
    "museumValue": 13000,
    "hidden": true,
    "discoveryCondition": "Caught in heavy morning fog with Dragon Blood equipped and Luck above 160 in The Neon Tide.",
    "description": "Stone on the outside, somehow, still swimming."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "rune_bound_titan_gar",
    "name": "Rune Bound Titan Gar",
    "rarity": "ancient",
    "price": 60000,
    "weight": [
      100,
      500
    ],
    "length": [
      250,
      600
    ],
    "season": "any",
    "weather": [
      "blood_moon"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 250,
    "requiredBait": null,
    "minLuck": 180,
    "xp": 6200,
    "museumValue": 13000,
    "hidden": true,
    "discoveryCondition": "Caught on a Blood Moon in the evening with Luck above 180 in The Neon Tide.",
    "description": "Bound in symbols from a language nobody's cracked. It seems to understand them fine."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "galaxy_emperor_ray",
    "name": "Galaxy Emperor Ray",
    "rarity": "celestial",
    "price": 125000,
    "weight": [
      200,
      800
    ],
    "length": [
      300,
      800
    ],
    "season": "any",
    "weather": [
      "aurora",
      "meteor_shower"
    ],
    "activeTime": ["morning"],
    "difficulty": 10,
    "requiredRodLevel": 300,
    "requiredBait": "starlight_dust",
    "minLuck": 200,
    "xp": 12500,
    "museumValue": 25000,
    "hidden": true,
    "discoveryCondition": "Caught during Aurora or Meteor Shower in the morning in The Neon Tide, with Starlight Dust equipped and Luck above 200.",
    "description": "Wears a slowly turning spiral galaxy across both wings."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "starlight_koi",
    "name": "Starlight Koi",
    "rarity": "celestial",
    "price": 125000,
    "weight": [
      200,
      800
    ],
    "length": [
      300,
      800
    ],
    "season": "any",
    "weather": [
      "full_moon",
      "meteor_shower"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 300,
    "requiredBait": "starlight_dust",
    "minLuck": 220,
    "xp": 12500,
    "museumValue": 25000,
    "hidden": true,
    "discoveryCondition": "Caught under a Full Moon or Meteor Shower in the evening in The Neon Tide, with Starlight Dust equipped and Luck above 220.",
    "description": "Leaves a trail of dim starlight that fades a minute after it passes."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "supernova_sturgeon",
    "name": "Supernova Sturgeon",
    "rarity": "celestial",
    "price": 125000,
    "weight": [
      200,
      800
    ],
    "length": [
      300,
      800
    ],
    "season": "any",
    "weather": [
      "meteor_shower"
    ],
    "activeTime": ["day"],
    "difficulty": 10,
    "requiredRodLevel": 300,
    "requiredBait": "magical_dust",
    "minLuck": 250,
    "xp": 12500,
    "museumValue": 25000,
    "hidden": true,
    "discoveryCondition": "Caught during a Meteor Shower in the day in The Neon Tide, with Magical Dust equipped and Luck above 250.",
    "description": "Doesn't attack. Just detonates, and the water forgives it."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "genesis_world_whale",
    "name": "Genesis World Whale",
    "rarity": "divine",
    "price": 800000,
    "weight": [
      400,
      1500
    ],
    "length": [
      400,
      1000
    ],
    "season": "any",
    "weather": [
      "full_moon"
    ],
    "activeTime": ["night"],
    "difficulty": 10,
    "requiredRodLevel": 350,
    "requiredBait": "magical_dust",
    "minLuck": 300,
    "xp": 80000,
    "museumValue": 180000,
    "hidden": true,
    "discoveryCondition": "Full moon, night, in The Neon Tide, with Magical Dust equipped and Luck above 300. The rarest gate in World 1.",
    "description": "Some say the first world was built on its back."
  },
  {
    "worldId": 1,
    "progressionRequired": true,
    "id": "seraphim_sunfish",
    "name": "Seraphim Sunfish",
    "rarity": "divine",
    "price": 800000,
    "weight": [
      400,
      1500
    ],
    "length": [
      400,
      1000
    ],
    "season": "summer",
    "weather": [
      "sunny",
      "full_moon"
    ],
    "activeTime": ["day","night"],
    "difficulty": 10,
    "requiredRodLevel": 350,
    "requiredBait": "starlight_dust",
    "minLuck": 320,
    "xp": 80000,
    "museumValue": 180000,
    "hidden": true,
    "discoveryCondition": "Sunny day or Full Moon night in summer in The Neon Tide, with Starlight Dust equipped and Luck above 320.",
    "description": "Every fin is a small wing of pure light. It answers to nothing."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "amberjaw_darter",
    "name": "Amberjaw Darter",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.05,
      0.5
    ],
    "length": [
      5,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "A small amber-jawed fish that darts between the reeds too fast to see clearly."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "azuretail_rudd",
    "name": "Azuretail Rudd",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.05,
      0.5
    ],
    "length": [
      5,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Common in shallow pools. Its blue tail is the only splash of color in muddy water."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "birchscale_roach",
    "name": "Birchscale Roach",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.05,
      0.5
    ],
    "length": [
      5,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Pale and patterned like birch bark. Blends into pebbly shallows."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "boulderhead_tetra",
    "name": "Boulderhead Tetra",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.05,
      0.5
    ],
    "length": [
      5,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Its oversized head looks comical. The grip it has on the hook does not."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "brookscale_minnow",
    "name": "Brookscale Minnow",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.05,
      0.5
    ],
    "length": [
      5,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning","day"],
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Runs in every brook in World 3. The first thing new anglers catch."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "brookscale_sculpin",
    "name": "Brookscale Sculpin",
    "rarity": "common",
    "price": 12,
    "weight": [
      0.05,
      0.5
    ],
    "length": [
      5,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 6,
    "museumValue": 9,
    "description": "Hides under flat rocks and darts out. Mistaken for a brookscale minnow until it bites."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "claybelly_chub",
    "name": "Claybelly Chub",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.1,
      0.8
    ],
    "length": [
      8,
      22
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 2,
    "requiredBait": null,
    "xp": 6,
    "museumValue": 9,
    "description": "Belly the color of river clay. Sits on the bottom and waits for the rod to do the work."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "cloverbelly_tetra",
    "name": "Cloverbelly Tetra",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.05,
      0.4
    ],
    "length": [
      4,
      12
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "The green patch on its belly looks painted. It is not."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "driftleaf_minnow",
    "name": "Driftleaf Minnow",
    "rarity": "common",
    "price": 12,
    "weight": [
      0.02,
      0.2
    ],
    "length": [
      3,
      9
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Flat-bodied, drifts like a fallen leaf at the surface. Hard to hook."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "duststripe_perch",
    "name": "Duststripe Perch",
    "rarity": "common",
    "price": 14,
    "weight": [
      0.1,
      0.9
    ],
    "length": [
      10,
      25
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning","day"],
    "difficulty": 2,
    "requiredRodLevel": 2,
    "requiredBait": null,
    "xp": 7,
    "museumValue": 10,
    "description": "Dusty brown stripes run head to tail. You almost miss it on the surface."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "dusttail_darter",
    "name": "Dusttail Darter",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.02,
      0.15
    ],
    "length": [
      3,
      8
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Its tail kicks up a tiny plume of silt with every dart. Always moving."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "embernose_chub",
    "name": "Embernose Chub",
    "rarity": "common",
    "price": 14,
    "weight": [
      0.15,
      1
    ],
    "length": [
      12,
      28
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 3,
    "requiredBait": null,
    "xp": 7,
    "museumValue": 10,
    "description": "The tip of its snout glows faintly orange. Not bioluminescence — just sunburn."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "glassscale_smelt",
    "name": "Glassscale Smelt",
    "rarity": "common",
    "price": 12,
    "weight": [
      0.02,
      0.12
    ],
    "length": [
      5,
      14
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Translucent scales catch light like fragments of bottle glass."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "maplefin_bream",
    "name": "Maplefin Bream",
    "rarity": "common",
    "price": 14,
    "weight": [
      0.2,
      1.2
    ],
    "length": [
      14,
      30
    ],
    "season": "autumn",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 3,
    "requiredBait": null,
    "xp": 7,
    "museumValue": 10,
    "description": "Autumn-red fins. Most abundant when the leaves turn."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "mossback_bleak",
    "name": "Mossback Bleak",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.02,
      0.15
    ],
    "length": [
      4,
      10
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "A thin coat of green moss has taken root on its dorsal. It does not mind."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "pebble_dartfish",
    "name": "Pebble Dartfish",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.01,
      0.08
    ],
    "length": [
      3,
      7
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Pebble-colored. You've mistaken it for a pebble three times and it knows."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "rainpool_gudgeon",
    "name": "Rainpool Gudgeon",
    "rarity": "common",
    "price": 12,
    "weight": [
      0.05,
      0.35
    ],
    "length": [
      6,
      15
    ],
    "season": "any",
    "weather": [
      "rain"
    ],
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 2,
    "requiredBait": null,
    "xp": 6,
    "museumValue": 9,
    "description": "Only appears in standing rainwater. Gone when it dries."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "reedtip_tetra",
    "name": "Reedtip Tetra",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.02,
      0.15
    ],
    "length": [
      4,
      10
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 1,
    "requiredRodLevel": 1,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "The tip of its dorsal fin looks exactly like a reed. Anglers have cast at the wrong thing."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "saffron_shad",
    "name": "Saffron Shad",
    "rarity": "common",
    "price": 13,
    "weight": [
      0.1,
      0.8
    ],
    "length": [
      10,
      22
    ],
    "season": "summer",
    "weather": "any",
    "activeTime": ["day"],
    "difficulty": 2,
    "requiredRodLevel": 2,
    "requiredBait": null,
    "xp": 6,
    "museumValue": 9,
    "description": "Warm gold scales brighten in summer sun. Popular at market."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "sandnose_roach",
    "name": "Sandnose Roach",
    "rarity": "common",
    "price": 11,
    "weight": [
      0.1,
      0.7
    ],
    "length": [
      8,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 2,
    "requiredRodLevel": 2,
    "requiredBait": null,
    "xp": 5,
    "museumValue": 8,
    "description": "Ploughs the sandy riverbed snout-first. Occasionally comes up with something in its mouth."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "brookamber_smelt",
    "name": "Brookamber Smelt",
    "rarity": "uncommon",
    "price": 90,
    "weight": [
      0.05,
      0.5
    ],
    "length": [
      8,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 5,
    "requiredBait": null,
    "xp": 22,
    "museumValue": 42,
    "description": "Amber-tinted, swims in loose schools over gravel-bed brooks."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "cobalt_threefin",
    "name": "Cobalt Threefin",
    "rarity": "uncommon",
    "price": 95,
    "weight": [
      0.1,
      0.8
    ],
    "length": [
      10,
      25
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["day"],
    "difficulty": 3,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 24,
    "museumValue": 44,
    "description": "Three distinct fins, each cobalt blue. Navigates with uncanny precision."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "copperball_loach",
    "name": "Copperball Loach",
    "rarity": "uncommon",
    "price": 85,
    "weight": [
      0.05,
      0.4
    ],
    "length": [
      6,
      15
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 5,
    "requiredBait": null,
    "xp": 21,
    "museumValue": 40,
    "description": "Rolls into a copper-sheened ball when threatened. Still gets caught anyway."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "copperglass_darter",
    "name": "Copperglass Darter",
    "rarity": "uncommon",
    "price": 88,
    "weight": [
      0.05,
      0.35
    ],
    "length": [
      5,
      14
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 5,
    "requiredBait": null,
    "xp": 22,
    "museumValue": 41,
    "description": "Copper-tinted scales that look transparent in shallow light."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "coralstripe_wrasse",
    "name": "Coralstripe Wrasse",
    "rarity": "uncommon",
    "price": 100,
    "weight": [
      0.1,
      0.6
    ],
    "length": [
      10,
      22
    ],
    "season": "summer",
    "weather": "any",
    "activeTime": ["day"],
    "difficulty": 4,
    "requiredRodLevel": 8,
    "requiredBait": null,
    "xp": 26,
    "museumValue": 46,
    "description": "Bright coral stripes run along its flanks. A tropical stowaway."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "fernstripe_pikelet",
    "name": "Fernstripe Pikelet",
    "rarity": "uncommon",
    "price": 85,
    "weight": [
      0.1,
      0.7
    ],
    "length": [
      8,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 5,
    "requiredBait": null,
    "xp": 21,
    "museumValue": 40,
    "description": "Fern-green stripes, miniature pike attitude. Bites harder than its size warrants."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "fogwater_shiner",
    "name": "Fogwater Shiner",
    "rarity": "uncommon",
    "price": 90,
    "weight": [
      0.05,
      0.4
    ],
    "length": [
      6,
      14
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 22,
    "museumValue": 42,
    "description": "Active only in foggy conditions. The mist seems to feed it."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "goldenflare_mackerel",
    "name": "Goldenflare Mackerel",
    "rarity": "uncommon",
    "price": 105,
    "weight": [
      0.3,
      1.5
    ],
    "length": [
      15,
      35
    ],
    "season": "any",
    "weather": [
      "sunny"
    ],
    "activeTime": ["day"],
    "difficulty": 4,
    "requiredRodLevel": 9,
    "requiredBait": null,
    "xp": 27,
    "museumValue": 48,
    "description": "Golden flares radiate from its gills when it catches sunlight."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "lilyroot_sculpin",
    "name": "Lilyroot Sculpin",
    "rarity": "uncommon",
    "price": 85,
    "weight": [
      0.1,
      0.6
    ],
    "length": [
      8,
      20
    ],
    "season": "spring",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 5,
    "requiredBait": null,
    "xp": 21,
    "museumValue": 40,
    "description": "Nests among lily roots in spring. Territorial enough to bite your fingers."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "marblehorn_fish",
    "name": "Marblehorn Fish",
    "rarity": "uncommon",
    "price": 95,
    "weight": [
      0.1,
      0.8
    ],
    "length": [
      10,
      24
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 7,
    "requiredBait": null,
    "xp": 24,
    "museumValue": 44,
    "description": "A small horn of marbled stone grows from its forehead. A natural curiosity."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "mosscrest_killifish",
    "name": "Mosscrest Killifish",
    "rarity": "uncommon",
    "price": 88,
    "weight": [
      0.02,
      0.2
    ],
    "length": [
      4,
      10
    ],
    "season": "any",
    "weather": [
      "rain",
      "fog"
    ],
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 22,
    "museumValue": 41,
    "description": "A crest of soft green algae grows from its head, season after season."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "pinecone_goby",
    "name": "Pinecone Goby",
    "rarity": "uncommon",
    "price": 85,
    "weight": [
      0.05,
      0.3
    ],
    "length": [
      5,
      12
    ],
    "season": "autumn",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 5,
    "requiredBait": null,
    "xp": 21,
    "museumValue": 40,
    "description": "Scales textured and shaped like a pinecone. Falls to the bottom when alarmed."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "puddlefin_killifish",
    "name": "Puddlefin Killifish",
    "rarity": "uncommon",
    "price": 88,
    "weight": [
      0.02,
      0.18
    ],
    "length": [
      3,
      9
    ],
    "season": "any",
    "weather": [
      "rain"
    ],
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 5,
    "requiredBait": null,
    "xp": 22,
    "museumValue": 41,
    "description": "Colonizes roadside puddles overnight. Disappears before the puddle does."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "rainspot_dace",
    "name": "Rainspot Dace",
    "rarity": "uncommon",
    "price": 90,
    "weight": [
      0.05,
      0.4
    ],
    "length": [
      6,
      16
    ],
    "season": "any",
    "weather": [
      "rain"
    ],
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 23,
    "museumValue": 43,
    "description": "Spots appear on its flanks only when wet. In the rain, it looks like a different fish."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "reedwhisker_carp",
    "name": "Reedwhisker Carp",
    "rarity": "uncommon",
    "price": 95,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      18,
      38
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 4,
    "requiredRodLevel": 8,
    "requiredBait": null,
    "xp": 24,
    "museumValue": 44,
    "description": "Long whiskers trail behind it through the reeds. Never in a hurry."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "slatewhisker_barbel",
    "name": "Slatewhisker Barbel",
    "rarity": "uncommon",
    "price": 95,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      18,
      38
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning"],
    "difficulty": 4,
    "requiredRodLevel": 8,
    "requiredBait": null,
    "xp": 24,
    "museumValue": 44,
    "description": "Slate-grey whiskers that feel the riverbed in total darkness."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "stonefin_bramiet",
    "name": "Stonefin Bramiet",
    "rarity": "uncommon",
    "price": 90,
    "weight": [
      0.1,
      0.8
    ],
    "length": [
      10,
      22
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 7,
    "requiredBait": null,
    "xp": 23,
    "museumValue": 43,
    "description": "Fins rigid as stone. They scratch anything they brush against."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "sunbrick_tench",
    "name": "Sunbrick Tench",
    "rarity": "uncommon",
    "price": 100,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      18,
      38
    ],
    "season": "summer",
    "weather": [
      "sunny"
    ],
    "activeTime": ["day"],
    "difficulty": 4,
    "requiredRodLevel": 9,
    "requiredBait": null,
    "xp": 26,
    "museumValue": 46,
    "description": "Warm orange-red scales, brightest in full summer sun. Slow and heavy."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "willowfin_roach",
    "name": "Willowfin Roach",
    "rarity": "uncommon",
    "price": 88,
    "weight": [
      0.1,
      0.8
    ],
    "length": [
      10,
      22
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 3,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 22,
    "museumValue": 41,
    "description": "Fins droop and sway like willow branches. Remarkably peaceful to watch."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "yellowtail_gudgeon",
    "name": "Yellowtail Gudgeon",
    "rarity": "uncommon",
    "price": 88,
    "weight": [
      0.05,
      0.4
    ],
    "length": [
      6,
      14
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning","day"],
    "difficulty": 3,
    "requiredRodLevel": 6,
    "requiredBait": null,
    "xp": 22,
    "museumValue": 41,
    "description": "Yellow tail catches the morning light. Schools in sunny shallows."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "ambercrest_lungfish",
    "name": "Ambercrest Lungfish",
    "rarity": "rare",
    "price": 420,
    "weight": [
      1,
      5
    ],
    "length": [
      30,
      70
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 20,
    "requiredBait": null,
    "xp": 68,
    "museumValue": 155,
    "description": "Breathes air when the water is too warm. Amber crest rises like a crown."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "bramblefin_catfish",
    "name": "Bramblefin Catfish",
    "rarity": "rare",
    "price": 450,
    "weight": [
      2,
      8
    ],
    "length": [
      35,
      80
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning"],
    "difficulty": 5,
    "requiredRodLevel": 22,
    "requiredBait": null,
    "xp": 72,
    "museumValue": 162,
    "description": "Thorned fins like briar brambles. The net pays for it every time."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "brookruby_dory",
    "name": "Brookruby Dory",
    "rarity": "rare",
    "price": 400,
    "weight": [
      0.3,
      1.5
    ],
    "length": [
      15,
      35
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 18,
    "requiredBait": null,
    "xp": 64,
    "museumValue": 148,
    "description": "Ruby-red shimmer in running water. Very fast, very nervous."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "copperleaf_sunfish",
    "name": "Copperleaf Sunfish",
    "rarity": "rare",
    "price": 430,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      18,
      40
    ],
    "season": "summer",
    "weather": [
      "sunny"
    ],
    "activeTime": ["day"],
    "difficulty": 5,
    "requiredRodLevel": 20,
    "requiredBait": null,
    "xp": 70,
    "museumValue": 158,
    "description": "Scales the color of copper leaf, blazing in afternoon sun."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "jadeglass_surgeon",
    "name": "Jadeglass Surgeon",
    "rarity": "rare",
    "price": 500,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      20,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 26,
    "requiredBait": null,
    "xp": 80,
    "museumValue": 175,
    "description": "Jade-green with a razor spine at the base of its tail. Surgeons are named for something."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "moonberry_gourami",
    "name": "Moonberry Gourami",
    "rarity": "rare",
    "price": 440,
    "weight": [
      0.2,
      1.2
    ],
    "length": [
      12,
      28
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 5,
    "requiredRodLevel": 22,
    "requiredBait": null,
    "xp": 71,
    "museumValue": 160,
    "description": "Moon-silver with berry-blue spots. Only feeds under starlight."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "opalwing_flyingfish",
    "name": "Opalwing Flyingfish",
    "rarity": "rare",
    "price": 480,
    "weight": [
      0.3,
      1.5
    ],
    "length": [
      20,
      40
    ],
    "season": "any",
    "weather": [
      "windy"
    ],
    "activeTime": ["day"],
    "difficulty": 6,
    "requiredRodLevel": 25,
    "requiredBait": null,
    "xp": 78,
    "museumValue": 172,
    "description": "Opal-shimmering pectoral fins that catch the wind and carry it out of the water."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "orchidfin_tetra",
    "name": "Orchidfin Tetra",
    "rarity": "rare",
    "price": 410,
    "weight": [
      0.05,
      0.4
    ],
    "length": [
      5,
      12
    ],
    "season": "spring",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 18,
    "requiredBait": null,
    "xp": 66,
    "museumValue": 152,
    "description": "Orchid-purple fins bloom open when it senses a threat. Doesn't help much."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "prismback_discus",
    "name": "Prismback Discus",
    "rarity": "rare",
    "price": 460,
    "weight": [
      0.3,
      1.5
    ],
    "length": [
      15,
      32
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 24,
    "requiredBait": null,
    "xp": 74,
    "museumValue": 165,
    "description": "Every scale on its back splits light into a tiny prism. Dense schools look like a mirror."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "prismfin_wrasse",
    "name": "Prismfin Wrasse",
    "rarity": "rare",
    "price": 460,
    "weight": [
      0.3,
      1.5
    ],
    "length": [
      15,
      35
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["day"],
    "difficulty": 6,
    "requiredRodLevel": 24,
    "requiredBait": null,
    "xp": 74,
    "museumValue": 165,
    "description": "Fins fracture light into spectral beams. Divers spot it from twenty meters above."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "rosewater_gar",
    "name": "Rosewater Gar",
    "rarity": "rare",
    "price": 430,
    "weight": [
      1,
      5
    ],
    "length": [
      35,
      80
    ],
    "season": "spring",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 21,
    "requiredBait": null,
    "xp": 69,
    "museumValue": 156,
    "description": "Rose-pink hue fades to white at the tips. A gar that forgot it was supposed to look dangerous."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "rubywing_swordtail",
    "name": "Rubywing Swordtail",
    "rarity": "rare",
    "price": 440,
    "weight": [
      0.1,
      0.8
    ],
    "length": [
      8,
      20
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 22,
    "requiredBait": null,
    "xp": 71,
    "museumValue": 160,
    "description": "Ruby-red wings bracket a rapier tail extension. Slices through current effortlessly."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "rumicheart_carp",
    "name": "Rumicheart Carp",
    "rarity": "rare",
    "price": 420,
    "weight": [
      1,
      4
    ],
    "length": [
      25,
      55
    ],
    "season": "any",
    "weather": [
      "rain"
    ],
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 20,
    "requiredBait": null,
    "xp": 68,
    "museumValue": 155,
    "description": "A perfect heart marking on its flank in deep maroon. Poets pay well for the sight of one."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "sapphire_cheek_barb",
    "name": "Sapphire Cheek Barb",
    "rarity": "rare",
    "price": 450,
    "weight": [
      0.1,
      0.7
    ],
    "length": [
      8,
      18
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["morning"],
    "difficulty": 5,
    "requiredRodLevel": 22,
    "requiredBait": null,
    "xp": 72,
    "museumValue": 162,
    "description": "Sapphire blue cheek patches that light up at first light. Early anglers know to look."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "scarlet_mudfish",
    "name": "Scarlet Mudfish",
    "rarity": "rare",
    "price": 410,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      15,
      35
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 5,
    "requiredRodLevel": 19,
    "requiredBait": null,
    "xp": 66,
    "museumValue": 152,
    "description": "Scarlet against dark mud. Only emerges at dusk to feed."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "stonefang_gar",
    "name": "Stonefang Gar",
    "rarity": "rare",
    "price": 500,
    "weight": [
      2,
      8
    ],
    "length": [
      40,
      90
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 6,
    "requiredRodLevel": 27,
    "requiredBait": null,
    "xp": 80,
    "museumValue": 175,
    "description": "Fangs calcified stone-hard. Bites clean through standard leaders."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "sunset_ribbonfish",
    "name": "Sunset Ribbonfish",
    "rarity": "rare",
    "price": 480,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      60,
      140
    ],
    "season": "any",
    "weather": [
      "sunny"
    ],
    "activeTime": ["evening"],
    "difficulty": 6,
    "requiredRodLevel": 26,
    "requiredBait": null,
    "xp": 78,
    "museumValue": 172,
    "description": "Long as a ribbon, sunset-orange. Surfaces only at dusk."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "topazback_mollie",
    "name": "Topazback Mollie",
    "rarity": "rare",
    "price": 400,
    "weight": [
      0.05,
      0.4
    ],
    "length": [
      4,
      10
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 5,
    "requiredRodLevel": 18,
    "requiredBait": null,
    "xp": 64,
    "museumValue": 148,
    "description": "Topaz yellow on its back, fading to white below. Common in clear, fast water."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "amethyst_emperor_fish",
    "name": "Amethyst Emperor Fish",
    "rarity": "epic",
    "price": 2800,
    "weight": [
      15,
      50
    ],
    "length": [
      80,
      170
    ],
    "season": "any",
    "weather": [
      "aurora"
    ],
    "activeTime": ["day"],
    "difficulty": 7,
    "requiredRodLevel": 60,
    "requiredBait": null,
    "xp": 280,
    "museumValue": 600,
    "description": "Amethyst bioluminescence runs from nose to tail. Rules the aurora pools."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "azure_anglerfish",
    "name": "Azure Anglerfish",
    "rarity": "epic",
    "price": 2500,
    "weight": [
      3,
      12
    ],
    "length": [
      30,
      65
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 7,
    "requiredRodLevel": 55,
    "requiredBait": null,
    "xp": 250,
    "museumValue": 540,
    "description": "Azure lure bobs in the dark. Curious fish follow it straight to you."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "blueberry_lanternfish",
    "name": "Blueberry Lanternfish",
    "rarity": "epic",
    "price": 2300,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      25
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["night"],
    "difficulty": 7,
    "requiredRodLevel": 52,
    "requiredBait": null,
    "xp": 230,
    "museumValue": 500,
    "description": "Deep-blue photophores cluster along its belly like ripe berries."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "cobalt_lionfish",
    "name": "Cobalt Lionfish",
    "rarity": "epic",
    "price": 2700,
    "weight": [
      0.5,
      2.5
    ],
    "length": [
      15,
      40
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 58,
    "requiredBait": null,
    "xp": 270,
    "museumValue": 580,
    "description": "Cobalt-tipped venomous spines. Reef fish give it a wide berth."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "coralfire_grouper",
    "name": "Coralfire Grouper",
    "rarity": "epic",
    "price": 2900,
    "weight": [
      10,
      40
    ],
    "length": [
      60,
      130
    ],
    "season": "summer",
    "weather": [
      "sunny"
    ],
    "activeTime": ["day"],
    "difficulty": 7,
    "requiredRodLevel": 62,
    "requiredBait": null,
    "xp": 290,
    "museumValue": 620,
    "description": "Coral-red with fire-orange blotches. Territorial over its reef section."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "crimson_lanternfish",
    "name": "Crimson Lanternfish",
    "rarity": "epic",
    "price": 2400,
    "weight": [
      0.5,
      3
    ],
    "length": [
      10,
      25
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 7,
    "requiredRodLevel": 54,
    "requiredBait": null,
    "xp": 240,
    "museumValue": 520,
    "description": "Crimson photophores pulse in a rhythm. Schools of them look like slow-moving fire."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "crimsonveil_manta",
    "name": "Crimsonveil Manta",
    "rarity": "epic",
    "price": 3200,
    "weight": [
      30,
      90
    ],
    "length": [
      100,
      220
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 70,
    "requiredBait": null,
    "xp": 320,
    "museumValue": 680,
    "description": "Crimson-edged fins billow in storm surf. Appears only in rough weather."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "emberjaw_snapper",
    "name": "Emberjaw Snapper",
    "rarity": "epic",
    "price": 2600,
    "weight": [
      5,
      20
    ],
    "length": [
      35,
      75
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 57,
    "requiredBait": null,
    "xp": 260,
    "museumValue": 560,
    "description": "Jaws glow ember-orange when it opens wide. A warning. Not a nice one."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "jadefang_barracuda",
    "name": "Jadefang Barracuda",
    "rarity": "epic",
    "price": 3000,
    "weight": [
      8,
      30
    ],
    "length": [
      60,
      140
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening","night"],
    "difficulty": 8,
    "requiredRodLevel": 65,
    "requiredBait": null,
    "xp": 300,
    "museumValue": 640,
    "description": "Jade-tipped teeth. Faster than its size should allow."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "mirrorfin_sailfish",
    "name": "Mirrorfin Sailfish",
    "rarity": "epic",
    "price": 3100,
    "weight": [
      20,
      80
    ],
    "length": [
      150,
      300
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["day"],
    "difficulty": 8,
    "requiredRodLevel": 68,
    "requiredBait": null,
    "xp": 310,
    "museumValue": 660,
    "description": "Dorsal fin mirrors the sky above perfectly. You've mistaken its shadow for a cloud."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "moonveil_angler",
    "name": "Moonveil Angler",
    "rarity": "epic",
    "price": 2700,
    "weight": [
      3,
      12
    ],
    "length": [
      25,
      55
    ],
    "season": "any",
    "weather": [
      "full_moon"
    ],
    "activeTime": ["evening"],
    "difficulty": 7,
    "requiredRodLevel": 59,
    "requiredBait": null,
    "xp": 270,
    "museumValue": 578,
    "description": "Its lure glows silver-white under a rising full moon. Timing matters."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "opalcrest_discus",
    "name": "Opalcrest Discus",
    "rarity": "epic",
    "price": 2900,
    "weight": [
      0.5,
      3
    ],
    "length": [
      15,
      32
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 63,
    "requiredBait": null,
    "xp": 290,
    "museumValue": 620,
    "description": "An opal crest fans across its forehead, shifting color with each angle."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "opalwing_ray",
    "name": "Opalwing Ray",
    "rarity": "epic",
    "price": 3100,
    "weight": [
      20,
      70
    ],
    "length": [
      100,
      220
    ],
    "season": "any",
    "weather": [
      "aurora",
      "sunny"
    ],
    "activeTime": ["night","day"],
    "difficulty": 8,
    "requiredRodLevel": 68,
    "requiredBait": null,
    "xp": 310,
    "museumValue": 660,
    "description": "Wings shift opal in aurora or sunlight. Hard to look at for long."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "sapphire_ribbon_eel",
    "name": "Sapphire Ribbon Eel",
    "rarity": "epic",
    "price": 2800,
    "weight": [
      0.5,
      3
    ],
    "length": [
      60,
      140
    ],
    "season": "any",
    "weather": [
      "fog"
    ],
    "activeTime": "any",
    "difficulty": 7,
    "requiredRodLevel": 61,
    "requiredBait": null,
    "xp": 280,
    "museumValue": 600,
    "description": "Sapphire ribbon, drifts on the current in fog. Almost impossible to distinguish from water."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "thundercheck_char",
    "name": "Thundercheck Char",
    "rarity": "epic",
    "price": 3000,
    "weight": [
      2,
      10
    ],
    "length": [
      30,
      70
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 66,
    "requiredBait": null,
    "xp": 300,
    "museumValue": 640,
    "description": "Cheek markings like lightning strikes. Emerges whenever thunder rolls."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "abyssal_crown_ray",
    "name": "Abyssal Crown Ray",
    "rarity": "legendary",
    "price": 10000,
    "weight": [
      50,
      200
    ],
    "length": [
      200,
      400
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 90,
    "requiredBait": null,
    "xp": 1000,
    "museumValue": 2100,
    "description": "A crown of spines forms a natural diadem. Deep-water lords bow to nothing, and neither does this."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "astral_flamefin",
    "name": "Astral Flamefin",
    "rarity": "legendary",
    "price": 11000,
    "weight": [
      10,
      40
    ],
    "length": [
      80,
      160
    ],
    "season": "any",
    "weather": [
      "aurora",
      "meteor_shower"
    ],
    "activeTime": ["day"],
    "difficulty": 8,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "minLuck": 55,
    "xp": 1100,
    "museumValue": 2300,
    "description": "Fins burn with an astral flame that doesn't consume itself. Appears during sky events."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "crystalmane_koi",
    "name": "Crystalmane Koi",
    "rarity": "legendary",
    "price": 9500,
    "weight": [
      5,
      20
    ],
    "length": [
      50,
      100
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 88,
    "requiredBait": null,
    "xp": 950,
    "museumValue": 2000,
    "description": "A mane of crystal filaments trails behind it. They chime in moving water."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "dreamfire_koi",
    "name": "Dreamfire Koi",
    "rarity": "legendary",
    "price": 12000,
    "weight": [
      5,
      20
    ],
    "length": [
      50,
      110
    ],
    "season": "any",
    "weather": [
      "full_moon"
    ],
    "activeTime": ["evening"],
    "difficulty": 9,
    "requiredRodLevel": 110,
    "requiredBait": null,
    "minLuck": 60,
    "xp": 1200,
    "museumValue": 2550,
    "description": "Leaves a glowing wake of dreamfire behind it under a full moon."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "frostcrown_sturgeon",
    "name": "Frostcrown Sturgeon",
    "rarity": "legendary",
    "price": 10500,
    "weight": [
      40,
      150
    ],
    "length": [
      150,
      300
    ],
    "season": "winter",
    "weather": [
      "snow"
    ],
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 95,
    "requiredBait": null,
    "xp": 1050,
    "museumValue": 2200,
    "description": "Frost crystallizes across its crown plates in winter. Heavy with cold."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "leviathan_pike",
    "name": "Leviathan Pike",
    "rarity": "legendary",
    "price": 13000,
    "weight": [
      60,
      250
    ],
    "length": [
      200,
      450
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening","night"],
    "difficulty": 9,
    "requiredRodLevel": 120,
    "requiredBait": null,
    "minLuck": 65,
    "xp": 1300,
    "museumValue": 2750,
    "description": "The largest pike ever catalogued. Fishers who've seen it argue over the length."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "obsidian_sailfish",
    "name": "Obsidian Sailfish",
    "rarity": "legendary",
    "price": 11500,
    "weight": [
      50,
      180
    ],
    "length": [
      180,
      350
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["day"],
    "difficulty": 9,
    "requiredRodLevel": 105,
    "requiredBait": null,
    "xp": 1150,
    "museumValue": 2420,
    "description": "Black as volcanic glass from sail to tail. Reflects nothing."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "solarfin_marlin",
    "name": "Solarfin Marlin",
    "rarity": "legendary",
    "price": 12500,
    "weight": [
      60,
      220
    ],
    "length": [
      200,
      380
    ],
    "season": "summer",
    "weather": [
      "sunny"
    ],
    "activeTime": ["day"],
    "difficulty": 9,
    "requiredRodLevel": 115,
    "requiredBait": null,
    "xp": 1250,
    "museumValue": 2640,
    "description": "Its dorsal fin charges with solar energy at noon. Handle with rubber gloves."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "stormscale_arowana",
    "name": "Stormscale Arowana",
    "rarity": "legendary",
    "price": 11000,
    "weight": [
      8,
      30
    ],
    "length": [
      80,
      150
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": "any",
    "difficulty": 8,
    "requiredRodLevel": 100,
    "requiredBait": null,
    "minLuck": 58,
    "xp": 1100,
    "museumValue": 2310,
    "description": "Leaps out of storm surf to feed. Scale pattern matches thunderhead clouds."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "thundercrest_pike",
    "name": "Thundercrest Pike",
    "rarity": "legendary",
    "price": 12000,
    "weight": [
      30,
      120
    ],
    "length": [
      150,
      320
    ],
    "season": "any",
    "weather": [
      "storm"
    ],
    "activeTime": ["evening","night"],
    "difficulty": 9,
    "requiredRodLevel": 112,
    "requiredBait": null,
    "minLuck": 62,
    "xp": 1200,
    "museumValue": 2530,
    "description": "Crest crackles blue-white in storms. The line goes live with current when you reel it in."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "eclipse_serpent",
    "name": "Eclipse Serpent",
    "rarity": "mythic",
    "price": 26000,
    "weight": [
      10,
      40
    ],
    "length": [
      100,
      250
    ],
    "season": "any",
    "weather": [
      "blood_moon",
      "full_moon"
    ],
    "activeTime": ["day"],
    "difficulty": 9,
    "requiredRodLevel": 160,
    "requiredBait": null,
    "xp": 2600,
    "museumValue": 5500,
    "description": "Only appears during ecliptic weather. Its body blocks the light below the surface."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "eden_bloomfish",
    "name": "Eden Bloomfish",
    "rarity": "mythic",
    "price": 28000,
    "weight": [
      5,
      20
    ],
    "length": [
      40,
      90
    ],
    "season": "spring",
    "weather": "any",
    "activeTime": ["morning","day"],
    "difficulty": 9,
    "requiredRodLevel": 170,
    "requiredBait": null,
    "minLuck": 90,
    "xp": 2800,
    "museumValue": 5900,
    "description": "Flowers bloom from its fins in spring. The water it swam through smells like a garden."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "gilded_mooneel",
    "name": "Gilded Mooneel",
    "rarity": "mythic",
    "price": 27000,
    "weight": [
      5,
      20
    ],
    "length": [
      90,
      180
    ],
    "season": "any",
    "weather": [
      "full_moon"
    ],
    "activeTime": ["night"],
    "difficulty": 9,
    "requiredRodLevel": 165,
    "requiredBait": null,
    "minLuck": 95,
    "xp": 2700,
    "museumValue": 5700,
    "description": "Every scale is gilded. Surfaces only under a full moon, like it is waiting for applause."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "phoenixfin_koi",
    "name": "Phoenixfin Koi",
    "rarity": "mythic",
    "price": 30000,
    "weight": [
      5,
      20
    ],
    "length": [
      50,
      110
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 180,
    "requiredBait": null,
    "minLuck": 100,
    "xp": 3000,
    "museumValue": 6300,
    "description": "Fins ignite and regrow with each cast of light. Some anglers swear it has been caught before."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "primordial_wishfish",
    "name": "Primordial Wishfish",
    "rarity": "mythic",
    "price": 32000,
    "weight": [
      3,
      12
    ],
    "length": [
      30,
      70
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 190,
    "requiredBait": null,
    "minLuck": 110,
    "xp": 3200,
    "museumValue": 6700,
    "description": "Said to grant the desire of whoever hooks it. Nobody has proven it. Nobody has disproven it."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "wyrmfin_deepseer",
    "name": "Wyrmfin Deepseer",
    "rarity": "mythic",
    "price": 29000,
    "weight": [
      20,
      80
    ],
    "length": [
      150,
      320
    ],
    "season": "any",
    "weather": [
      "fog",
      "blood_moon"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 175,
    "requiredBait": null,
    "minLuck": 105,
    "xp": 2900,
    "museumValue": 6100,
    "description": "Its eyes are open even in the deepest dark. It has been watching you cast."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "fossiljaw_titanfish",
    "name": "Fossiljaw Titanfish",
    "rarity": "ancient",
    "price": 68000,
    "weight": [
      300,
      900
    ],
    "length": [
      350,
      700
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 230,
    "requiredBait": "dream_blob",
    "minLuck": 130,
    "xp": 6800,
    "museumValue": 14500,
    "hidden": true,
    "discoveryCondition": "Caught in the Fossil Trench with Dream Blob equipped.",
    "description": "A jaw that has been fossilized, refossilized, and is still biting."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "fossilwing_paddlefish",
    "name": "Fossilwing Paddlefish",
    "rarity": "ancient",
    "price": 65000,
    "weight": [
      150,
      500
    ],
    "length": [
      250,
      550
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 220,
    "requiredBait": null,
    "minLuck": 120,
    "xp": 6500,
    "museumValue": 13800,
    "hidden": true,
    "discoveryCondition": "Caught in the Fossil Trench with Luck above 120.",
    "description": "Stone wings stretch across its flanks, still shaped for swimming through ancient seas."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "ironplate_placodont",
    "name": "Ironplate Placodont",
    "rarity": "ancient",
    "price": 72000,
    "weight": [
      200,
      600
    ],
    "length": [
      300,
      600
    ],
    "season": "any",
    "weather": "any",
    "activeTime": "any",
    "difficulty": 10,
    "requiredRodLevel": 240,
    "requiredBait": "dream_blob",
    "minLuck": 145,
    "xp": 7200,
    "museumValue": 15200,
    "hidden": true,
    "discoveryCondition": "Caught in the Fossil Trench with Dream Blob and Luck above 145.",
    "description": "Iron-dense plates cover it completely. The fossil record says this one shouldn't exist anymore."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "rootspine_coelacanth",
    "name": "Rootspine Coelacanth",
    "rarity": "ancient",
    "price": 63000,
    "weight": [
      50,
      200
    ],
    "length": [
      150,
      350
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 215,
    "requiredBait": null,
    "minLuck": 115,
    "xp": 6300,
    "museumValue": 13200,
    "hidden": true,
    "discoveryCondition": "Caught in the evening in the Fossil Trench with Luck above 115.",
    "description": "Root-like spines branch from its spine. A living fossil older than most rocks."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "garden_of_stars_koi",
    "name": "Garden of Stars Koi",
    "rarity": "celestial",
    "price": 140000,
    "weight": [
      20,
      80
    ],
    "length": [
      120,
      280
    ],
    "season": "any",
    "weather": [
      "aurora",
      "meteor_shower"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 290,
    "requiredBait": "dream_blob",
    "minLuck": 200,
    "xp": 14000,
    "museumValue": 29500,
    "hidden": true,
    "discoveryCondition": "Caught during Aurora or Meteor Shower in the evening with Dream Blob and Luck above 200.",
    "description": "Each scale is a different constellation. The full map rotates with the season."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "seraphic_voidfish",
    "name": "Seraphic Voidfish",
    "rarity": "celestial",
    "price": 155000,
    "weight": [
      30,
      120
    ],
    "length": [
      150,
      350
    ],
    "season": "any",
    "weather": "any",
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 310,
    "requiredBait": "dream_blob",
    "minLuck": 220,
    "xp": 15500,
    "museumValue": 32500,
    "hidden": true,
    "discoveryCondition": "Caught in the evening with Dream Blob and Luck above 220 anywhere in World 3.",
    "description": "Neither fully here nor elsewhere. Seraphic in form, void in substance."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "starforge_arowana",
    "name": "Starforge Arowana",
    "rarity": "celestial",
    "price": 145000,
    "weight": [
      10,
      50
    ],
    "length": [
      100,
      220
    ],
    "season": "any",
    "weather": [
      "meteor_shower"
    ],
    "activeTime": ["day"],
    "difficulty": 10,
    "requiredRodLevel": 295,
    "requiredBait": "dream_blob",
    "minLuck": 210,
    "xp": 14500,
    "museumValue": 30500,
    "hidden": true,
    "discoveryCondition": "Caught during a Meteor Shower in the day with Dream Blob and Luck above 210.",
    "description": "Forged in a stellar nursery, then somehow ended up here. The scales still hold heat."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "starforge_ray",
    "name": "Starforge Ray",
    "rarity": "celestial",
    "price": 148000,
    "weight": [
      80,
      350
    ],
    "length": [
      200,
      500
    ],
    "season": "any",
    "weather": [
      "aurora",
      "meteor_shower"
    ],
    "activeTime": ["morning"],
    "difficulty": 10,
    "requiredRodLevel": 300,
    "requiredBait": "dream_blob",
    "minLuck": 215,
    "xp": 14800,
    "museumValue": 31000,
    "hidden": true,
    "discoveryCondition": "Caught during Aurora or Meteor Shower in the morning with Dream Blob and Luck above 215.",
    "description": "Wings of stardust, pressed flat. Glides through the space between water and sky."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "celestine_leviathan",
    "name": "Celestine Leviathan",
    "rarity": "divine",
    "price": 900000,
    "weight": [
      200,
      700
    ],
    "length": [
      400,
      900
    ],
    "season": "any",
    "weather": [
      "aurora"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 350,
    "requiredBait": "dream_blob",
    "minLuck": 280,
    "xp": 90000,
    "museumValue": 200000,
    "hidden": true,
    "discoveryCondition": "Aurora weather, evening, in World 3, with Dream Blob and Luck above 280.",
    "description": "Crystal-blue leviathan older than the world it swims in. Moves in slow circles for reasons only it knows."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "eternal_tide_dragonfish",
    "name": "Eternal Tide Dragonfish",
    "rarity": "divine",
    "price": 1800000,
    "weight": [
      300,
      900
    ],
    "length": [
      500,
      1000
    ],
    "season": "any",
    "weather": [
      "full_moon",
      "blood_moon"
    ],
    "activeTime": ["evening"],
    "difficulty": 10,
    "requiredRodLevel": 350,
    "requiredBait": "dream_blob",
    "minLuck": 310,
    "xp": 180000,
    "museumValue": 450000,
    "hidden": true,
    "discoveryCondition": "Full Moon or Blood Moon, evening, in World 3, with Dream Blob and Luck above 310.",
    "description": "Dragonfish of the eternal tide. The tide is not referring to water."
  },
  {
    "worldId": 2,
    "progressionRequired": true,
    "id": "worldspring_leviathan",
    "name": "Worldspring Leviathan",
    "rarity": "divine",
    "price": 2500000,
    "weight": [
      400,
      1500
    ],
    "length": [
      600,
      1200
    ],
    "season": "spring",
    "weather": [
      "full_moon"
    ],
    "activeTime": ["morning"],
    "difficulty": 10,
    "requiredRodLevel": 380,
    "requiredBait": "dream_blob",
    "minLuck": 350,
    "xp": 250000,
    "museumValue": 600000,
    "hidden": true,
    "discoveryCondition": "Spring, Full Moon, morning, World 3, Dream Blob equipped, Luck above 350. The rarest gate in World 3.",
    "description": "The first player to catch this triggers a server-wide announcement. It has been here since the world was new."
  },
  // ==================== WORLD 4 FISH ====================
  {
  "worldId": 3,
  "id": "brokenshell_bream",
  "name": "Brokenshell Bream",
  "rarity": "common",
  "price": 90,
  "weight": [
    0.1,
    1.2
  ],
  "length": [
    8,
    22
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 9,
  "museumValue": 20,
  "description": "Its shell is cracked but it keeps swimming. Admirable, really."
},
  {
  "worldId": 3,
  "id": "cobblegill_perch",
  "name": "Cobblegill Perch",
  "rarity": "common",
  "price": 95,
  "weight": [
    0.2,
    1.5
  ],
  "length": [
    10,
    25
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 10,
  "museumValue": 21,
  "description": "Gills caked with river cobble. Thrives in shallow, fast water."
},
  {
  "worldId": 3,
  "id": "coralarmor_snapper",
  "name": "Coralarmor Snapper",
  "rarity": "common",
  "price": 105,
  "weight": [
    0.3,
    2
  ],
  "length": [
    12,
    28
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 11,
  "museumValue": 22,
  "description": "Natural coral plating lines its back. Too tough for most predators."
},
  {
  "worldId": 3,
  "id": "crumbletooth_gudgeon",
  "name": "Crumbletooth Gudgeon",
  "rarity": "common",
  "price": 80,
  "weight": [
    0.1,
    0.8
  ],
  "length": [
    6,
    18
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 8,
  "museumValue": 18,
  "description": "Teeth worn to stumps from gravel feeding. Harmless to everything."
},
  {
  "worldId": 3,
  "id": "duckstone_tetra",
  "name": "Duckstone Tetra",
  "rarity": "common",
  "price": 85,
  "weight": [
    0.05,
    0.5
  ],
  "length": [
    4,
    12
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 9,
  "museumValue": 19,
  "description": "Hides under flat stones like a duck under a wing."
},
  {
  "worldId": 3,
  "id": "firstwarden_fish",
  "name": "Firstwarden Fish",
  "rarity": "common",
  "price": 120,
  "weight": [
    0.5,
    3
  ],
  "length": [
    15,
    40
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 12,
  "museumValue": 26,
  "description": "The first fish settlers in the world caught. Still as common as ever."
},
  {
  "worldId": 3,
  "id": "genesiscoral_carp",
  "name": "Genesis Coral Carp",
  "rarity": "common",
  "price": 110,
  "weight": [
    0.4,
    2.5
  ],
  "length": [
    14,
    35
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 11,
  "museumValue": 24,
  "description": "Grew alongside the oldest reef. Coral patterns cover its belly."
},
  {
  "worldId": 3,
  "id": "gravelscale_dace",
  "name": "Gravelscale Dace",
  "rarity": "common",
  "price": 75,
  "weight": [
    0.05,
    0.6
  ],
  "length": [
    5,
    15
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 8,
  "museumValue": 17,
  "description": "Scales like river gravel. Blends into riverbeds almost perfectly."
},
  {
  "worldId": 3,
  "id": "greenflame_bream",
  "name": "Greenflame Bream",
  "rarity": "common",
  "price": 100,
  "weight": [
    0.2,
    1.8
  ],
  "length": [
    10,
    28
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 10,
  "museumValue": 22,
  "description": "Emerald fins catch light like fire in shallow noon water."
},
  {
  "worldId": 3,
  "id": "greywater_carp",
  "name": "Greywater Carp",
  "rarity": "common",
  "price": 85,
  "weight": [
    0.5,
    4
  ],
  "length": [
    20,
    50
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 9,
  "museumValue": 19,
  "description": "Grey as the murky rivers it calls home. Nobody's favourite but everyone's catch."
},
  {
  "worldId": 3,
  "id": "hollowfin_roach",
  "name": "Hollowfin Roach",
  "rarity": "common",
  "price": 70,
  "weight": [
    0.1,
    0.9
  ],
  "length": [
    6,
    20
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 7,
  "museumValue": 16,
  "description": "Fins folded hollow like dry leaves. Quick to scatter."
},
  {
  "worldId": 3,
  "id": "hollowking_pike",
  "name": "Hollowking Pike",
  "rarity": "common",
  "price": 125,
  "weight": [
    0.5,
    4.5
  ],
  "length": [
    25,
    65
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 13,
  "museumValue": 27,
  "description": "Named for the hollow in its jaw. More bark than bite."
},
  {
  "worldId": 3,
  "id": "hollowlight_tetra",
  "name": "Hollowlight Tetra",
  "rarity": "common",
  "price": 80,
  "weight": [
    0.05,
    0.4
  ],
  "length": [
    3,
    10
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 8,
  "museumValue": 18,
  "description": "Translucent fins that glow faintly in dim water."
},
  {
  "worldId": 3,
  "id": "ironroot_catfish",
  "name": "Ironroot Catfish",
  "rarity": "common",
  "price": 115,
  "weight": [
    1,
    8
  ],
  "length": [
    30,
    70
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 12,
  "museumValue": 25,
  "description": "Hides in root tangles. Iron-coloured, slow, and stubborn to hook."
},
  {
  "worldId": 3,
  "id": "lowlight_chub",
  "name": "Lowlight Chub",
  "rarity": "common",
  "price": 70,
  "weight": [
    0.1,
    1
  ],
  "length": [
    7,
    20
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 7,
  "museumValue": 16,
  "description": "Prefers overcast days and shadowed pools. Shy but plentiful."
},
  {
  "worldId": 3,
  "id": "moltenglass_carp",
  "name": "Molten Glass Carp",
  "rarity": "common",
  "price": 100,
  "weight": [
    0.3,
    2.5
  ],
  "length": [
    15,
    40
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 10,
  "museumValue": 22,
  "description": "Scales flash like glass in sunlight. Feels heavier than it looks."
},
  {
  "worldId": 3,
  "id": "murkfin_bleak",
  "name": "Murkfin Bleak",
  "rarity": "common",
  "price": 65,
  "weight": [
    0.05,
    0.4
  ],
  "length": [
    4,
    12
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 7,
  "museumValue": 15,
  "description": "Barely visible in murky water. Anglers catch it by accident half the time."
},
  {
  "worldId": 3,
  "id": "originrune_serpent",
  "name": "Originrune Serpent",
  "rarity": "common",
  "price": 130,
  "weight": [
    0.3,
    2
  ],
  "length": [
    30,
    80
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 13,
  "museumValue": 28,
  "description": "Old runes along its side. Older than the rivers it swims in."
},
  {
  "worldId": 3,
  "id": "pebble_minnow",
  "name": "Pebble Minnow",
  "rarity": "common",
  "price": 60,
  "weight": [
    0.02,
    0.2
  ],
  "length": [
    2,
    8
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 6,
  "museumValue": 14,
  "description": "So small it barely counts as fishing. But it does count."
},
  {
  "worldId": 3,
  "id": "pillarwatch_bass",
  "name": "Pillarwatch Bass",
  "rarity": "common",
  "price": 115,
  "weight": [
    0.5,
    4
  ],
  "length": [
    20,
    55
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 12,
  "museumValue": 25,
  "description": "Circles ancient stone pillars submerged in the shallows."
},
  {
  "worldId": 3,
  "id": "river_chub",
  "name": "River Chub",
  "rarity": "common",
  "price": 70,
  "weight": [
    0.1,
    1
  ],
  "length": [
    8,
    22
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 7,
  "museumValue": 16,
  "description": "The river's most reliable resident. Always biting, never impressive."
},
  {
  "worldId": 3,
  "id": "rubblebelly_raoch",
  "name": "Rubblebelly Roach",
  "rarity": "common",
  "price": 70,
  "weight": [
    0.1,
    1.2
  ],
  "length": [
    7,
    22
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 7,
  "museumValue": 16,
  "description": "Belly armored with rubble-coloured scales. Bottom-feeds in gravel."
},
  {
  "worldId": 3,
  "id": "ruinback_darter",
  "name": "Ruinback Darter",
  "rarity": "common",
  "price": 90,
  "weight": [
    0.05,
    0.5
  ],
  "length": [
    4,
    14
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 9,
  "museumValue": 20,
  "description": "Darts between ruins faster than the eye can follow."
},
  {
  "worldId": 3,
  "id": "sagerune_carp",
  "name": "Sagerune Carp",
  "rarity": "common",
  "price": 105,
  "weight": [
    0.4,
    3
  ],
  "length": [
    18,
    45
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 11,
  "museumValue": 23,
  "description": "Markings read like a sage's recipe. Nobody knows what it means."
},
  {
  "worldId": 3,
  "id": "saltworn_dace",
  "name": "Saltworn Dace",
  "rarity": "common",
  "price": 80,
  "weight": [
    0.1,
    0.8
  ],
  "length": [
    6,
    18
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 8,
  "museumValue": 18,
  "description": "Scales eroded by salt drift. A traveller from brackish water."
},
  {
  "worldId": 3,
  "id": "slit_barbel",
  "name": "Slit Barbel",
  "rarity": "common",
  "price": 85,
  "weight": [
    0.2,
    1.5
  ],
  "length": [
    10,
    28
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 9,
  "museumValue": 19,
  "description": "Barbels thin as slits. Tastes the riverbed before taking a bite."
},
  {
  "worldId": 3,
  "id": "stilwater_roach",
  "name": "Stillwater Roach",
  "rarity": "common",
  "price": 70,
  "weight": [
    0.1,
    1
  ],
  "length": [
    7,
    22
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 7,
  "museumValue": 16,
  "description": "Only found in completely still water. Doesn't handle currents well."
},
  {
  "worldId": 3,
  "id": "stonevein_grouper",
  "name": "Stonevein Grouper",
  "rarity": "common",
  "price": 120,
  "weight": [
    1,
    7
  ],
  "length": [
    28,
    65
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 12,
  "museumValue": 26,
  "description": "Stone-veined pattern across its sides. A bottom-dweller who holds ground."
},
  {
  "worldId": 3,
  "id": "sunkencrown_fish",
  "name": "Sunkencrown Fish",
  "rarity": "common",
  "price": 110,
  "weight": [
    0.3,
    2.5
  ],
  "length": [
    15,
    38
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 11,
  "museumValue": 24,
  "description": "The crown-like fin gave it a regal name. It is not regal."
},
  {
  "worldId": 3,
  "id": "templetail_carp",
  "name": "Templetail Carp",
  "rarity": "common",
  "price": 115,
  "weight": [
    0.5,
    4
  ],
  "length": [
    20,
    50
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 12,
  "museumValue": 25,
  "description": "Tail shaped like a carved temple arch. Swims near ancient stonework."
},
  {
  "worldId": 3,
  "id": "tideworn_roach",
  "name": "Tideworn Roach",
  "rarity": "common",
  "price": 70,
  "weight": [
    0.1,
    1
  ],
  "length": [
    7,
    22
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 7,
  "museumValue": 16,
  "description": "Worn by years of tidal pull. Resilient in ways you'd never expect."
},
  {
  "worldId": 3,
  "id": "tombtide_barbel",
  "name": "Tombtide Barbel",
  "rarity": "common",
  "price": 90,
  "weight": [
    0.2,
    2
  ],
  "length": [
    12,
    35
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 9,
  "museumValue": 20,
  "description": "Found near sunken tombs. Feeds on what washes out of them."
},
  {
  "worldId": 3,
  "id": "wrackline_minnow",
  "name": "Wrackline Minnow",
  "rarity": "common",
  "price": 60,
  "weight": [
    0.02,
    0.3
  ],
  "length": [
    2,
    9
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 1,
  "requiredBait": null,
  "xp": 6,
  "museumValue": 14,
  "description": "Congregates along debris lines on the surface. Abundant and bite-sized."
},
  {
  "worldId": 3,
  "id": "abyssrune_eel",
  "name": "Abyssrune Eel",
  "rarity": "uncommon",
  "price": 280,
  "weight": [
    0.3,
    3
  ],
  "length": [
    30,
    90
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 28,
  "museumValue": 60,
  "description": "Rune-marked eel from deeper channels. Leaves faint glowing trails."
},
  {
  "worldId": 3,
  "id": "coldrune_pike",
  "name": "Coldrune Pike",
  "rarity": "uncommon",
  "price": 320,
  "weight": [
    1,
    8
  ],
  "length": [
    40,
    100
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 32,
  "museumValue": 68,
  "description": "Cold runes etched across its back. Bites in freezing water others ignore."
},
  {
  "worldId": 3,
  "id": "coreglass_anglerfish",
  "name": "Coreglass Anglerfish",
  "rarity": "uncommon",
  "price": 350,
  "weight": [
    0.5,
    4
  ],
  "length": [
    15,
    45
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 15,
  "requiredBait": null,
  "xp": 35,
  "museumValue": 75,
  "description": "A glass-clear core that glows like a lantern in deep water."
},
  {
  "worldId": 3,
  "id": "driftrune_smelt",
  "name": "Driftrune Smelt",
  "rarity": "uncommon",
  "price": 260,
  "weight": [
    0.1,
    0.8
  ],
  "length": [
    8,
    22
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 26,
  "museumValue": 56,
  "description": "Drifts wherever the current takes it. Runes shift with the flow."
},
  {
  "worldId": 3,
  "id": "duskglass_minnow",
  "name": "Duskglass Minnow",
  "rarity": "uncommon",
  "price": 270,
  "weight": [
    0.05,
    0.6
  ],
  "length": [
    4,
    14
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 27,
  "museumValue": 58,
  "description": "Glass-scaled at dusk. Invisible until the light hits it wrong."
},
  {
  "worldId": 3,
  "id": "glasswater_eel",
  "name": "Glasswater Eel",
  "rarity": "uncommon",
  "price": 340,
  "weight": [
    0.2,
    2.5
  ],
  "length": [
    25,
    75
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 15,
  "requiredBait": null,
  "xp": 34,
  "museumValue": 72,
  "description": "Transparent body shaped like still water. Unnerving in shallow pools."
},
  {
  "worldId": 3,
  "id": "mossfin_guppy",
  "name": "Mossfin Guppy",
  "rarity": "uncommon",
  "price": 240,
  "weight": [
    0.02,
    0.3
  ],
  "length": [
    2,
    8
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 24,
  "museumValue": 52,
  "description": "Fins draped in living moss. Common in spring ponds."
},
  {
  "worldId": 3,
  "id": "mossy_perch",
  "name": "Mossy Perch",
  "rarity": "uncommon",
  "price": 260,
  "weight": [
    0.2,
    2
  ],
  "length": [
    12,
    32
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 26,
  "museumValue": 56,
  "description": "Covered in algae like old timber. Blends into the weedy bottom."
},
  {
  "worldId": 3,
  "id": "mosscrest_killi",
  "name": "Mosscrest Killi",
  "rarity": "uncommon",
  "price": 255,
  "weight": [
    0.05,
    0.5
  ],
  "length": [
    4,
    14
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 26,
  "museumValue": 55,
  "description": "Moss-covered crest rises when it displays. Tiny but bold."
},
  {
  "worldId": 3,
  "id": "pilarfin_shiner",
  "name": "Pilarfin Shiner",
  "rarity": "uncommon",
  "price": 275,
  "weight": [
    0.1,
    1
  ],
  "length": [
    7,
    20
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 28,
  "museumValue": 59,
  "description": "Dorsal fin like a stone pillar. Swims in pillared ruins."
},
  {
  "worldId": 3,
  "id": "puddlefin_killi",
  "name": "Puddlefin Killi",
  "rarity": "uncommon",
  "price": 240,
  "weight": [
    0.03,
    0.3
  ],
  "length": [
    2,
    8
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 24,
  "museumValue": 52,
  "description": "Thrives in leftover puddles. It's tougher than its name suggests."
},
  {
  "worldId": 3,
  "id": "rosewater_garra",
  "name": "Rosewater Garra",
  "rarity": "uncommon",
  "price": 300,
  "weight": [
    0.1,
    1.5
  ],
  "length": [
    8,
    25
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 15,
  "requiredBait": null,
  "xp": 30,
  "museumValue": 64,
  "description": "Pink hue from feeding on mineral-rich roses that grow underwater."
},
  {
  "worldId": 3,
  "id": "ruinguard_barracuda",
  "name": "Ruinguard Barracuda",
  "rarity": "uncommon",
  "price": 390,
  "weight": [
    2,
    12
  ],
  "length": [
    50,
    110
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 20,
  "requiredBait": null,
  "xp": 39,
  "museumValue": 83,
  "description": "Patrols the ruins it claims. Fast and unpleasant to meet uninvited."
},
  {
  "worldId": 3,
  "id": "runicgill_perch",
  "name": "Runicgill Perch",
  "rarity": "uncommon",
  "price": 310,
  "weight": [
    0.3,
    2.5
  ],
  "length": [
    15,
    38
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 15,
  "requiredBait": null,
  "xp": 31,
  "museumValue": 66,
  "description": "Gills marked with faint runes. Breathes deeper than its size should allow."
},
  {
  "worldId": 3,
  "id": "runic_salmon",
  "name": "Runic Salmon",
  "rarity": "uncommon",
  "price": 370,
  "weight": [
    1.5,
    10
  ],
  "length": [
    45,
    90
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 20,
  "requiredBait": null,
  "xp": 37,
  "museumValue": 79,
  "description": "Runes along the lateral line glow during spawning runs."
},
  {
  "worldId": 3,
  "id": "scarlet_reedfish",
  "name": "Scarlet Reedfish",
  "rarity": "uncommon",
  "price": 330,
  "weight": [
    0.2,
    2
  ],
  "length": [
    20,
    60
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 15,
  "requiredBait": null,
  "xp": 33,
  "museumValue": 70,
  "description": "Scarlet and reed-thin. Slips through reed beds faster than a cast."
},
  {
  "worldId": 3,
  "id": "stonefin_breamlet",
  "name": "Stonefin Breamlet",
  "rarity": "uncommon",
  "price": 250,
  "weight": [
    0.1,
    1.2
  ],
  "length": [
    7,
    22
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 25,
  "museumValue": 54,
  "description": "Tiny and stone-finned. Bottom-feeds in rocky streams."
},
  {
  "worldId": 3,
  "id": "sunken_dace",
  "name": "Sunken Dace",
  "rarity": "uncommon",
  "price": 265,
  "weight": [
    0.05,
    0.7
  ],
  "length": [
    5,
    17
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 27,
  "museumValue": 57,
  "description": "Prefers sunken debris as shelter. Skittish above the wreck line."
},
  {
  "worldId": 3,
  "id": "topazback_molly",
  "name": "Topazback Molly",
  "rarity": "uncommon",
  "price": 280,
  "weight": [
    0.05,
    0.5
  ],
  "length": [
    3,
    12
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 10,
  "requiredBait": null,
  "xp": 28,
  "museumValue": 60,
  "description": "Topaz-yellow back. Small, common, pretty enough for a showcase tank."
},
  {
  "worldId": 3,
  "id": "voidscaled_trout",
  "name": "Voidscaled Trout",
  "rarity": "uncommon",
  "price": 350,
  "weight": [
    0.5,
    4.5
  ],
  "length": [
    25,
    60
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 15,
  "requiredBait": null,
  "xp": 35,
  "museumValue": 75,
  "description": "Void-black scales absorb light. Difficult to see, easy to catch."
},
  {
  "worldId": 3,
  "id": "amberjaw_dace",
  "name": "Amberjaw Dace",
  "rarity": "rare",
  "price": 750,
  "weight": [
    0.2,
    2
  ],
  "length": [
    12,
    35
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 30,
  "requiredBait": null,
  "xp": 75,
  "museumValue": 160,
  "description": "Amber-tinged jaw that snaps at anything shining. Tricky to release."
},
  {
  "worldId": 3,
  "id": "brackenrune_loach",
  "name": "Brackenrune Loach",
  "rarity": "rare",
  "price": 820,
  "weight": [
    0.1,
    1.5
  ],
  "length": [
    8,
    28
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 30,
  "requiredBait": null,
  "xp": 82,
  "museumValue": 175,
  "description": "Runes among bracken patterns. Hides in root tangles until disturbed."
},
  {
  "worldId": 3,
  "id": "brookruby_darter",
  "name": "Brookruby Darter",
  "rarity": "rare",
  "price": 900,
  "weight": [
    0.05,
    0.8
  ],
  "length": [
    5,
    18
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 35,
  "requiredBait": null,
  "xp": 90,
  "museumValue": 192,
  "description": "Ruby-red flash as it darts. Blink and you've missed its sprint."
},
  {
  "worldId": 3,
  "id": "cobalt_threeline",
  "name": "Cobalt Threeline",
  "rarity": "rare",
  "price": 880,
  "weight": [
    0.3,
    3
  ],
  "length": [
    15,
    42
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 35,
  "requiredBait": null,
  "xp": 88,
  "museumValue": 188,
  "description": "Three cobalt stripes run snout to tail. Uncommon in most waterways."
},
  {
  "worldId": 3,
  "id": "coral_snapper",
  "name": "Coral Snapper",
  "rarity": "rare",
  "price": 960,
  "weight": [
    0.5,
    5
  ],
  "length": [
    22,
    55
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 40,
  "requiredBait": null,
  "xp": 96,
  "museumValue": 205,
  "description": "Coral-pink with a bite to match. Aggressive near reefs."
},
  {
  "worldId": 3,
  "id": "crimsonveil_moray",
  "name": "Crimsonveil Moray",
  "rarity": "rare",
  "price": 1100,
  "weight": [
    0.5,
    6
  ],
  "length": [
    40,
    120
  ],
  "season": "any",
  "weather": [
    "fog",
    "any"
  ],
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 45,
  "requiredBait": null,
  "xp": 110,
  "museumValue": 234,
  "description": "Crimson-veiled moray spotted in fog. The veil is not decorative."
},
  {
  "worldId": 3,
  "id": "dusktail_darter",
  "name": "Dusktail Darter",
  "rarity": "rare",
  "price": 840,
  "weight": [
    0.05,
    0.8
  ],
  "length": [
    5,
    17
  ],
  "season": "any",
  "weather": "any",
  "activeTime": [
    "evening"
  ],
  "difficulty": 5,
  "requiredRodLevel": 30,
  "requiredBait": null,
  "xp": 84,
  "museumValue": 179,
  "description": "Tail glows at dusk. Appears only in the last hour of daylight."
},
  {
  "worldId": 3,
  "id": "echostone_ray",
  "name": "Echostone Ray",
  "rarity": "rare",
  "price": 1200,
  "weight": [
    5,
    30
  ],
  "length": [
    60,
    160
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 50,
  "requiredBait": null,
  "xp": 120,
  "museumValue": 256,
  "description": "Wings of compressed echostone. Hums when it glides."
},
  {
  "worldId": 3,
  "id": "emberrune_koi",
  "name": "Emberrune Koi",
  "rarity": "rare",
  "price": 1050,
  "weight": [
    0.5,
    5
  ],
  "length": [
    22,
    60
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 45,
  "requiredBait": null,
  "xp": 105,
  "museumValue": 224,
  "description": "Ember-red runes glow when it tenses. Beautiful and difficult."
},
  {
  "worldId": 3,
  "id": "gilded_moon_eel",
  "name": "Gilded Moon Eel",
  "rarity": "rare",
  "price": 1150,
  "weight": [
    0.3,
    4
  ],
  "length": [
    30,
    95
  ],
  "season": "any",
  "weather": "any",
  "activeTime": [
    "evening",
    "night"
  ],
  "difficulty": 5,
  "requiredRodLevel": 50,
  "requiredBait": null,
  "xp": 115,
  "museumValue": 245,
  "description": "Gilded scales catch moonlight like mirrors. Active from dusk onward."
},
  {
  "worldId": 3,
  "id": "gloomlantern_eel",
  "name": "Gloomlantern Eel",
  "rarity": "rare",
  "price": 1000,
  "weight": [
    0.3,
    3.5
  ],
  "length": [
    25,
    80
  ],
  "season": "any",
  "weather": "any",
  "activeTime": [
    "night"
  ],
  "difficulty": 5,
  "requiredRodLevel": 40,
  "requiredBait": null,
  "xp": 100,
  "museumValue": 213,
  "description": "Its lantern organ casts a gloomy yellow-green glow. Night-active only."
},
  {
  "worldId": 3,
  "id": "glowveil_anglerfish",
  "name": "Glowveil Anglerfish",
  "rarity": "rare",
  "price": 1080,
  "weight": [
    0.5,
    5
  ],
  "length": [
    18,
    50
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 45,
  "requiredBait": null,
  "xp": 108,
  "museumValue": 230,
  "description": "Veil of light threads around its body. The lure is just marketing."
},
  {
  "worldId": 3,
  "id": "mistgate_koi",
  "name": "Mistgate Koi",
  "rarity": "rare",
  "price": 990,
  "weight": [
    0.5,
    5
  ],
  "length": [
    22,
    60
  ],
  "season": "any",
  "weather": [
    "fog"
  ],
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 40,
  "requiredBait": null,
  "xp": 99,
  "museumValue": 211,
  "description": "Appears only at the \"gate of mist\". That means foggy mornings on the eastern bank."
},
  {
  "worldId": 3,
  "id": "nebula_stalker",
  "name": "Nebula Stalker",
  "rarity": "rare",
  "price": 1300,
  "weight": [
    3,
    18
  ],
  "length": [
    50,
    120
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 55,
  "requiredBait": null,
  "xp": 130,
  "museumValue": 277,
  "description": "Hunts like a stalking predator. Nebula markings are its camouflage."
},
  {
  "worldId": 3,
  "id": "runeheart_carp",
  "name": "Runeheart Carp",
  "rarity": "rare",
  "price": 1050,
  "weight": [
    1,
    8
  ],
  "length": [
    30,
    70
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 45,
  "requiredBait": null,
  "xp": 105,
  "museumValue": 224,
  "description": "A single large rune across its heart region. What it means is debated."
},
  {
  "worldId": 3,
  "id": "shardfin_wrasse",
  "name": "Shardfin Wrasse",
  "rarity": "rare",
  "price": 780,
  "weight": [
    0.2,
    2
  ],
  "length": [
    12,
    35
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 30,
  "requiredBait": null,
  "xp": 78,
  "museumValue": 167,
  "description": "Fins broken into sharp crystal shards. Handle with gloves."
},
  {
  "worldId": 3,
  "id": "wardenkraken_pup",
  "name": "Wardenkraken Pup",
  "rarity": "rare",
  "price": 1250,
  "weight": [
    2,
    15
  ],
  "length": [
    40,
    110
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 55,
  "requiredBait": null,
  "xp": 125,
  "museumValue": 266,
  "description": "Young spawn of a Warden Kraken. Still more squid than horror, barely."
},
  {
  "worldId": 3,
  "id": "wardenscale_koi",
  "name": "Wardenscale Koi",
  "rarity": "rare",
  "price": 980,
  "weight": [
    0.5,
    5
  ],
  "length": [
    22,
    58
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 40,
  "requiredBait": null,
  "xp": 98,
  "museumValue": 209,
  "description": "Scales like armour plating. A warden's pet gone wild."
},
  {
  "worldId": 3,
  "id": "witnesslight_fish",
  "name": "Witnesslight Fish",
  "rarity": "rare",
  "price": 1100,
  "weight": [
    0.3,
    3
  ],
  "length": [
    18,
    50
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 45,
  "requiredBait": null,
  "xp": 110,
  "museumValue": 234,
  "description": "Said to have witnessed the First World's birth. Carries the light of that day."
},
  {
  "worldId": 3,
  "id": "astral_pike",
  "name": "Astral Pike",
  "rarity": "epic",
  "price": 2600,
  "weight": [
    5,
    35
  ],
  "length": [
    70,
    160
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 60,
  "requiredBait": null,
  "xp": 260,
  "museumValue": 555,
  "description": "Astral energy runs through its spine. Rivals are blinded when it charges."
},
  {
  "worldId": 3,
  "id": "azure_antlerfish",
  "name": "Azure Antlerfish",
  "rarity": "epic",
  "price": 2800,
  "weight": [
    3,
    20
  ],
  "length": [
    40,
    100
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 65,
  "requiredBait": null,
  "xp": 280,
  "museumValue": 598,
  "description": "Azure antlers branch from its crown. Territorial and spectacular."
},
  {
  "worldId": 3,
  "id": "crownreef_shark",
  "name": "Crownreef Shark",
  "rarity": "epic",
  "price": 3200,
  "weight": [
    20,
    90
  ],
  "length": [
    120,
    250
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 75,
  "requiredBait": null,
  "xp": 320,
  "museumValue": 682,
  "description": "Reigns over a dome of coral. Unbothered by most lures."
},
  {
  "worldId": 3,
  "id": "driftlantern_fish",
  "name": "Driftlantern Fish",
  "rarity": "epic",
  "price": 2500,
  "weight": [
    0.5,
    5
  ],
  "length": [
    15,
    45
  ],
  "season": "any",
  "weather": "any",
  "activeTime": [
    "evening",
    "night"
  ],
  "difficulty": 5,
  "requiredRodLevel": 60,
  "requiredBait": null,
  "xp": 250,
  "museumValue": 533,
  "description": "Drifts like a discarded lantern. Anglers mistake it for a buoy before it bites."
},
  {
  "worldId": 3,
  "id": "edenborn_serpent",
  "name": "Edenborn Serpent",
  "rarity": "epic",
  "price": 3000,
  "weight": [
    3,
    18
  ],
  "length": [
    80,
    200
  ],
  "season": "spring",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 70,
  "requiredBait": null,
  "xp": 300,
  "museumValue": 639,
  "description": "Born in the eden springs of World 4. Springs into motion in spring."
},
  {
  "worldId": 3,
  "id": "frostcrypt_fish",
  "name": "Frostcrypt Fish",
  "rarity": "epic",
  "price": 2900,
  "weight": [
    5,
    25
  ],
  "length": [
    50,
    120
  ],
  "season": "any",
  "weather": [
    "snow"
  ],
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 68,
  "requiredBait": null,
  "xp": 290,
  "museumValue": 618,
  "description": "Sealed in frost between casts. Comes alive only in snowfall."
},
  {
  "worldId": 3,
  "id": "frostwarden_grouper",
  "name": "Frostwarden Grouper",
  "rarity": "epic",
  "price": 3100,
  "weight": [
    10,
    50
  ],
  "length": [
    70,
    160
  ],
  "season": "winter",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 72,
  "requiredBait": null,
  "xp": 310,
  "museumValue": 660,
  "description": "Warden of a frozen pool. Territorial and armored in frost-plate."
},
  {
  "worldId": 3,
  "id": "glided_bass",
  "name": "Gilded Bass",
  "rarity": "epic",
  "price": 2700,
  "weight": [
    1,
    10
  ],
  "length": [
    30,
    80
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 65,
  "requiredBait": null,
  "xp": 270,
  "museumValue": 575,
  "description": "Gilded sheen from nose to tail. Trophy fish for aspiring champions."
},
  {
  "worldId": 3,
  "id": "hymnaltide_wrasse",
  "name": "Hymnaltide Wrasse",
  "rarity": "epic",
  "price": 3300,
  "weight": [
    1,
    8
  ],
  "length": [
    25,
    65
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 78,
  "requiredBait": null,
  "xp": 330,
  "museumValue": 703,
  "description": "Hums in tidal cycles. Anglers time their casts to its rhythm."
},
  {
  "worldId": 3,
  "id": "ruinheart_leviathan",
  "name": "Ruinback Leviathan",
  "rarity": "epic",
  "price": 3500,
  "weight": [
    50,
    200
  ],
  "length": [
    200,
    400
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 85,
  "requiredBait": null,
  "xp": 350,
  "museumValue": 745,
  "description": "A leviathan with ruin markings along its spine. Slower than it once was."
},
  {
  "worldId": 3,
  "id": "shatteredmoon_koi",
  "name": "Shatteredmoon Koi",
  "rarity": "epic",
  "price": 2800,
  "weight": [
    0.5,
    5
  ],
  "length": [
    22,
    58
  ],
  "season": "any",
  "weather": [
    "full_moon"
  ],
  "activeTime": [
    "night"
  ],
  "difficulty": 5,
  "requiredRodLevel": 65,
  "requiredBait": null,
  "xp": 280,
  "museumValue": 597,
  "description": "Appears when the full moon is reflected in shattered patterns on the water."
},
  {
  "worldId": 3,
  "id": "sunkenoracle_koi",
  "name": "Sunkenoracle Koi",
  "rarity": "epic",
  "price": 3000,
  "weight": [
    1,
    8
  ],
  "length": [
    30,
    72
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 70,
  "requiredBait": null,
  "xp": 300,
  "museumValue": 639,
  "description": "Swims in sunken oracle chambers. Regarded locally as prophetic. It is a fish."
},
  {
  "worldId": 3,
  "id": "supernova_koi",
  "name": "Supernova Koi",
  "rarity": "epic",
  "price": 3200,
  "weight": [
    1,
    10
  ],
  "length": [
    35,
    80
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 75,
  "requiredBait": null,
  "xp": 320,
  "museumValue": 682,
  "description": "Emits a burst of light when startled. Literally supernova-bright in a pool."
},
  {
  "worldId": 3,
  "id": "verdantrelic_pike",
  "name": "Verdantrelic Pike",
  "rarity": "epic",
  "price": 2900,
  "weight": [
    3,
    22
  ],
  "length": [
    60,
    140
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 68,
  "requiredBait": null,
  "xp": 290,
  "museumValue": 618,
  "description": "Ancient pike covered in verdant moss. A living relic of World 4's first rivers."
},
  {
  "worldId": 3,
  "id": "abysscrown_monarch",
  "name": "Abysscrown Monarch",
  "rarity": "legendary",
  "price": 10500,
  "weight": [
    80,
    300
  ],
  "length": [
    250,
    500
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 95,
  "requiredBait": null,
  "minLuck": 58,
  "xp": 1050,
  "museumValue": 2200,
  "description": "The monarch of abyssal waters. Its crown has never touched the surface before now."
},
  {
  "worldId": 3,
  "id": "comet_sailfish",
  "name": "Comet Sailfish",
  "rarity": "legendary",
  "price": 11000,
  "weight": [
    60,
    220
  ],
  "length": [
    200,
    380
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 100,
  "requiredBait": null,
  "minLuck": 60,
  "xp": 1100,
  "museumValue": 2310,
  "description": "Trails light like a comet across open water. Fastest catch in World 4."
},
  {
  "worldId": 3,
  "id": "hymnalgod_pike",
  "name": "Hymnalgod Pike",
  "rarity": "legendary",
  "price": 12500,
  "weight": [
    40,
    160
  ],
  "length": [
    180,
    350
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 115,
  "requiredBait": null,
  "minLuck": 65,
  "xp": 1250,
  "museumValue": 2625,
  "description": "A pike sanctified by the hymnal current. Pulls the line like a prayer."
},
  {
  "worldId": 3,
  "id": "starshard_shark",
  "name": "Starshard Shark",
  "rarity": "legendary",
  "price": 11500,
  "weight": [
    60,
    250
  ],
  "length": [
    200,
    420
  ],
  "season": "any",
  "weather": [
    "meteor_shower",
    "aurora"
  ],
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 105,
  "requiredBait": null,
  "minLuck": 62,
  "xp": 1150,
  "museumValue": 2415,
  "description": "Shards of stardust line its dorsal fin. Appears during sky events above the water."
},
  {
  "worldId": 3,
  "id": "godsrune_serpent",
  "name": "Godsrune Serpent",
  "rarity": "mythic",
  "price": 28000,
  "weight": [
    10,
    50
  ],
  "length": [
    150,
    350
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 175,
  "requiredBait": null,
  "minLuck": 95,
  "xp": 2800,
  "museumValue": 5900,
  "description": "Runes inscribed by a god, or so the stone tablets claim. The serpent doesn't comment."
},
  {
  "worldId": 3,
  "id": "hymnking_serpent",
  "name": "Hymnking Serpent",
  "rarity": "mythic",
  "price": 30000,
  "weight": [
    15,
    60
  ],
  "length": [
    180,
    380
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 185,
  "requiredBait": null,
  "minLuck": 105,
  "xp": 3000,
  "museumValue": 6300,
  "description": "The king of the hymnal depths. Its movement sends ripples that sound like song."
},
  {
  "worldId": 3,
  "id": "voidrune_serpent",
  "name": "Voidrune Serpent",
  "rarity": "mythic",
  "price": 27000,
  "weight": [
    8,
    40
  ],
  "length": [
    120,
    300
  ],
  "season": "any",
  "weather": [
    "blood_moon",
    "full_moon"
  ],
  "activeTime": [
    "evening"
  ],
  "difficulty": 5,
  "requiredRodLevel": 168,
  "requiredBait": null,
  "minLuck": 90,
  "xp": 2700,
  "museumValue": 5670,
  "description": "Runes of pure void. Surfaces only under blood-red or full moon skies."
},
  {
  "worldId": 3,
  "id": "abysswarden_grouper",
  "name": "Abysswarden Grouper",
  "rarity": "mythic",
  "price": 32000,
  "weight": [
    100,
    400
  ],
  "length": [
    300,
    600
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 195,
  "requiredBait": null,
  "minLuck": 110,
  "xp": 3200,
  "museumValue": 6720,
  "description": "A warden of the deepest abyss. Nothing passes it without permission."
},
  {
  "worldId": 3,
  "id": "fossilized_megaladon",
  "name": "Fossilized Megalodon",
  "rarity": "ancient",
  "price": 70000,
  "weight": [
    500,
    2000
  ],
  "length": [
    500,
    1000
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 240,
  "requiredBait": "hymnal_bug",
  "minLuck": 140,
  "xp": 7000,
  "museumValue": 14800,
  "hidden": true,
  "discoveryCondition": "Caught in World 4 with Hymnal Bug equipped and Luck above 140.",
  "description": "A megalodon preserved in fossil state but still swimming. The jaw should not function. It does."
},
  {
  "worldId": 3,
  "id": "primordial_titanfish",
  "name": "Primordial Titanfish",
  "rarity": "ancient",
  "price": 65000,
  "weight": [
    300,
    1000
  ],
  "length": [
    400,
    900
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 225,
  "requiredBait": "edenspore_seed",
  "minLuck": 125,
  "xp": 6500,
  "museumValue": 13700,
  "hidden": true,
  "discoveryCondition": "Caught in World 4 with Edenspore Seed and Luck above 125.",
  "description": "The first titan. Larger than anything in the fossil record. The fossil record is wrong."
},
  {
  "worldId": 3,
  "id": "aurelian_seraph",
  "name": "Aurelian Seraph",
  "rarity": "celestial",
  "price": 150000,
  "weight": [
    50,
    200
  ],
  "length": [
    200,
    420
  ],
  "season": "any",
  "weather": [
    "aurora"
  ],
  "activeTime": [
    "morning"
  ],
  "difficulty": 5,
  "requiredRodLevel": 305,
  "requiredBait": "hymnal_bug",
  "minLuck": 215,
  "xp": 15000,
  "museumValue": 31500,
  "hidden": true,
  "discoveryCondition": "Aurora weather, morning, in World 4, with Hymnal Bug and Luck above 215.",
  "description": "Aureate wings fold like a seraph in prayer. The aurora parts around it."
},
  {
  "worldId": 3,
  "id": "genesis_primefish",
  "name": "Genesis Primefish",
  "rarity": "celestial",
  "price": 160000,
  "weight": [
    30,
    150
  ],
  "length": [
    150,
    380
  ],
  "season": "any",
  "weather": "any",
  "activeTime": "any",
  "difficulty": 5,
  "requiredRodLevel": 315,
  "requiredBait": "voidmoth_larva",
  "minLuck": 225,
  "xp": 16000,
  "museumValue": 33600,
  "hidden": true,
  "discoveryCondition": "World 4, any weather, with Voidmoth Larva and Luck above 225.",
  "description": "The very first fish. World 4 remembers it. The other worlds have forgotten."
},
  {
  "worldId": 3,
  "id": "abysscrown_kraken",
  "name": "Abysscrown Kraken",
  "rarity": "divine",
  "price": 1200000,
  "weight": [
    500,
    2000
  ],
  "length": [
    600,
    1400
  ],
  "season": "any",
  "weather": [
    "blood_moon"
  ],
  "activeTime": [
    "evening"
  ],
  "difficulty": 5,
  "requiredRodLevel": 360,
  "requiredBait": "voidmoth_larva",
  "minLuck": 290,
  "xp": 120000,
  "museumValue": 290000,
  "hidden": true,
  "discoveryCondition": "Blood Moon, evening, World 4, with Voidmoth Larva and Luck above 290.",
  "description": "A kraken born from the abyssal crown. The blood moon coaxes it to the surface. Once. Ever."
},
  {
  "worldId": 3,
  "id": "hymnal_leviathan",
  "name": "Hymnal Leviathan",
  "rarity": "divine",
  "price": 2800000,
  "weight": [
    800,
    3000
  ],
  "length": [
    800,
    1500
  ],
  "season": "any",
  "weather": [
    "full_moon"
  ],
  "activeTime": [
    "evening"
  ],
  "difficulty": 5,
  "requiredRodLevel": 385,
  "requiredBait": "hymnal_bug",
  "minLuck": 360,
  "xp": 280000,
  "museumValue": 650000,
  "hidden": true,
  "discoveryCondition": "Full Moon, evening, World 4, with Hymnal Bug and Luck above 360. The hardest catch in World 4.",
  "description": "The leviathan that hums the hymn of World 4's existence. Catching it is not recommended, and yet."
}
] as any[]
  ).map((x: any) => [x.id, x]),
);const rarityLabel = (r: string): Rarity => (r.charAt(0).toUpperCase() + r.slice(1)) as Rarity;

export const fish: Fish[] = Object.values(FISH_DATA).map((f: FishSeed) => ({
  key: f.id,
  slug: f.id.replace(/_/g, "-"),
  name: f.name,
  rarity: rarityLabel(f.rarity),
  image: `/assets/fish/${f.id}.png`,
  price: f.price,
  weight: f.weight,
  length: f.length,
  season: f.season,
  weather: f.weather,
  activeTime: f.activeTime,
  difficulty: f.difficulty,
  requiredRodLevel: f.requiredRodLevel,
  requiredBait: f.requiredBait,
  xp: f.xp,
  museumValue: f.museumValue,
  description: f.description,
  worldId: f.worldId ?? 0,
  ...(f.hidden ? { hidden: true } : {}),
  ...(f.discoveryCondition ? { discoveryCondition: f.discoveryCondition } : {}),
  ...(typeof f.minLuck === "number" ? { minLuck: f.minLuck } : {}),
  ...(typeof f.minCombo === "number" ? { minCombo: f.minCombo } : {}),
}));

export const fishBySlug = (slug: string) => fish.find((f) => f.slug === slug);

export const fishByRarity = (rarity: Rarity) => fish.filter((f) => f.rarity === rarity);

export const fishByWorld = (worldId: number) => fish.filter((f) => (f.worldId ?? 0) === worldId);
