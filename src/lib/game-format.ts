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
