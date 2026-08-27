/** A prestige tier / World. World 0 is the base game; higher tiers unlock via prestiging. */
export interface World {
  id: number;
  /** Permanent display name, e.g. "The Shallows", "The Neon Tide". Never "World N". */
  name: string;
  /** Short flavor label shown under the world name, e.g. "Base Game" or "1st Prestige". */
  tagline: string;
  /** Fallback badge emoji, used only if `badgeIcon`/`worldIcon` fail to load. */
  badge: string;
  /**
   * Prestige badge artwork: /assets/World<id>/badge.png. Earned by prestiging
   * INTO this world, so World 0 (the starting world, never prestiged into)
   * has none — leave undefined rather than pointing at a missing file.
   */
  badgeIcon?: string;
  /** World icon artwork: /assets/World<id>/icon.png (larger, used on page headers/cards). */
  worldIcon: string;
  /** Tailwind gradient stop classes used to theme cards/accents for this world. */
  accent: string;
}

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
  /** Prestige/World this species belongs to. 0 (or undefined) = World 0, the base game. */
  worldId?: number;
  /** Whether full-dex discovery of this species blocks prestiging out of its world. Defaults to true. */
  progressionRequired?: boolean;
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
  /** Minimum player level required to purchase this rod. */
  requiredLevel: number;
  /** Prestige/World this rod belongs to. 0 (or undefined) = World 0, the base game. */
  worldId?: number;
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
  /** Minimum player level required to purchase this bait. */
  requiredLevel: number;
  /** Prestige/World this bait belongs to. 0 (or undefined) = World 0, the base game. */
  worldId?: number;
}

export interface Pet {
  key: string;
  slug: string;
  name: string;
  /** Not every pet has a Discord-side emoji glyph (e.g. Capybara, Monolith Golem) — the artwork is the primary identity. */
  emoji?: string;
  image: string;
  rarity: Rarity;
  /** Minimum player level required to unlock/equip this pet. */
  unlockLevel: number;
  skill: string;
  /** Skills sharing a category don't stack additively when two pets are equipped. */
  skillCategory: string;
  skillValue: number;
  description: string;
  /** Prestige/World this pet belongs to. 0 (or undefined) = World 0, the base game. */
  worldId?: number;
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
  /** Minimum player level required to purchase this egg. */
  requiredLevel?: number;
  /** Prestige/World this egg belongs to. 0 (or undefined) = World 0, the base game. */
  worldId?: number;
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
