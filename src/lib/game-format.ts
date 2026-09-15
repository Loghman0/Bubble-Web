/**
 * Small formatting helpers shared by the encyclopedia detail pages
 * (fish/baits/pets/eggs/enchants) for turning raw bot data into readable text.
 */

/** "village_pond" -> "Village Pond" */
export const titleCase = (id: string) =>
  id
    .split("_")
    .map((w) => (w ? w[0]!.toUpperCase() + w.slice(1) : w))
    .join(" ");

/** "any" -> "Any" | "fog" -> "Fog" | ["morning","day"] -> "Morning, Day" */
export function formatCondition(value: "any" | string | string[] | undefined): string {
  if (!value || value === "any") return "Any";
  if (Array.isArray(value)) return value.map(titleCase).join(", ");
  return titleCase(value);
}

/** [0.1, 0.6] -> "0.1–0.6 kg" (collapses to a single value when min === max) */
export function formatRange([min, max]: [number, number], unit: string): string {
  const fmt = (n: number) => (Number.isInteger(n) ? n.toString() : n.toFixed(2));
  return min === max ? `${fmt(min)} ${unit}` : `${fmt(min)}–${fmt(max)} ${unit}`;
}

/** 0.07 -> "+7%" | 0.055 -> "+5.5%" */
export function formatPercent(value: number): string {
  const pct = value * 100;
  const rounded = Math.round(pct * 100) / 100;
  return `+${rounded}%`;
}

/** 25 -> "+25" (for flat, non-percentage skill/enchant values) */
export function formatFlat(value: number): string {
  return `+${value}`;
}

/**
 * Human-readable descriptions for every pet skill type.
 * Shown alongside the skill name on pet detail pages and egg catalogues.
 */
export const SKILL_DESCRIPTIONS: Record<string, string> = {
  extra_fish: "Chance to catch a second fish on every cast.",
  extra_xp: "Bonus XP added to every catch.",
  coin_bonus: "Extra coins earned from every fish sale.",
  treasure_chance: "Increased chance of finding a treasure chest while fishing.",
  auto_repair: "Automatically restores rod durability after each catch.",
  luck: "Raises the overall luck stat — better odds at rarer fish.",
  critical_catch: "Chance to land a critical catch, awarding bonus weight and value.",
  auto_bait: "Automatically re-equips the same bait after each cast.",
  energy_saver: "Reduces the energy cost of each cast.",
  energy_regen: "Increases energy recovery speed between casts.",
  rarity_boost: "Shifts the rarity distribution of every catch toward rarer tiers.",
};

/** Friendly display label for each skill id. */
export const SKILL_LABELS: Record<string, string> = {
  extra_fish: "Extra Fish",
  extra_xp: "Extra XP",
  coin_bonus: "Coin Bonus",
  treasure_chance: "Treasure Chance",
  auto_repair: "Auto Repair",
  luck: "Luck",
  critical_catch: "Critical Catch",
  auto_bait: "Auto Bait",
  energy_saver: "Energy Saver",
  energy_regen: "Energy Regen",
  rarity_boost: "Rarity Boost",
};
