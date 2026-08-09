export type Rarity =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Epic"
  | "Legendary"
  | "Mythic"
  | "Ancient"
  | "Celestial"
  | "Divine";

export const RARITIES: Rarity[] = [
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
  "Mythic",
  "Ancient",
  "Celestial",
  "Divine",
];

/** Progression tiers used by rods and baits. */
export type Tier = "Beginner" | "Journeyman" | "Master";

/** 'any' or a specific season the fish is more (or only) active in. */
export type Season = "any" | "spring" | "summer" | "autumn" | "winter";

/** 'any', a single weather id, or a list of weather ids that must be active. */
export type WeatherCondition = "any" | string | string[];

/** 'any' or the list of times of day the fish can be caught during. */
export type ActiveTime = "any" | string[];

export interface Fish {
  /** Bot-side id, also the artwork filename: /assets/fish/<key>.png */
  key: string;
  slug: string;
  name: string;
  rarity: Rarity;
  image: string;
  price: number;
  /** Flavor-only lore tag for where this fish is found, e.g. "village_pond". */
  habitat: string;
  /** [min, max] kg */
  weight: [number, number];
  /** [min, max] cm */
  length: [number, number];
  season: Season;
  weather: WeatherCondition;
  activeTime: ActiveTime;
  /** 1-10, feeds the reaction-timing skill check for rare+ fish. */
  difficulty: number;
  /** Minimum rod level needed to hook this fish. */
  requiredRodLevel: number;
  /** Bait id that must be equipped, or null if any/no bait works. */
  requiredBait: string | null;
  /** Base fishing XP awarded on catch. */
  xp: number;
  /** Prestige points awarded on first museum donation. */
  museumValue: number;
  description: string;
  /** True if this species is hidden from the public encyclopedia until first discovered. */
  hidden?: boolean;
  /** Human-readable note on the conditions needed to catch/discover this fish. */
  discoveryCondition?: string;
  /** Minimum player luck required to be eligible, if any. */
  minLuck?: number;
  /** Minimum combo streak required to be eligible, if any. */
  minCombo?: number;
}

export interface Rod {
  key: string;
  slug: string;
  name: string;
  tier: Tier;
  image: string;
  price: number;
  currency: "coins" | "gems";
  luck: number;
  power: number;
  durability: number;
  enchantSlots: number;
  description: string;
}

export interface Bait {
  key: string;
  slug: string;
  name: string;
  tier: Tier;
  image: string;
  price: number;
  currency: "coins" | "gems";
  description: string;
  /** Multiplies the weight of rolling a rare-or-better fish. 1 = no effect. */
  rareChanceMult: number;
  /** Multiplies the weight of rolling a legendary-or-better fish. 1 = no effect. */
  legendaryChanceMult: number;
  /** Multiplies the rolled fish weight (bigger fish = more value). 1 = no effect. */
  weightMult: number;
  /** Flat addition to treasure-chest event odds. */
  treasureChanceAdd: number;
}

export interface Pet {
  key: string;
  slug: string;
  name: string;
  emoji: string;
  image: string;
  rarity: Rarity;
  /** Minimum player level required to unlock/equip this pet. */
  unlockLevel: number;
  skill: string;
  /** Skills sharing a category don't stack additively when two pets are equipped. */
  skillCategory: string;
  skillValue: number;
  description: string;
}

export interface Egg {
  key: string;
  slug: string;
  name: string;
  emoji?: string;
  image: string;
  tier: number;
  price: number;
  currency: "coins" | "gems" | "ancientTokens";
  /** Incubator XP needed to hatch, before hatchXpPerLevel scaling. */
  baseHatchXp: number;
  hatchXpPerLevel: number;
  /** The exact set of pet keys this egg can hatch. */
  eligiblePetIds: string[];
  /** Relative drop weight per pet rarity when this egg hatches. */
  dropWeights: Record<string, number>;
  description: string;
}

export interface Enchant {
  key: string;
  slug: string;
  name: string;
  emoji: string;
  description: string;
  /** Internal system this enchant modifies, e.g. "rarity_roll". */
  appliesTo: string;
  /** Bonus value at level I, II and III respectively. */
  valuePerLevel: [number, number, number];
  /** Book artwork shared by all 3 levels: /assets/enchantments/<key>.png */
  image: string;
  /** Same artwork repeated 3x (I/II/III share one asset, no separate per-level art). */
  levelImages: [string, string, string];
}

export interface Currency {
  key: string;
  name: string;
  image: string;
}

export interface WikiArticle {
  slug: string;
  title: string;
  category: string;
  summary: string;
  sections: { heading: string; body: string }[];
  /** Slugs of related wiki articles shown at the bottom of the page. */
  related?: string[];
  /** Extra search keywords. */
  tags?: string[];
}
