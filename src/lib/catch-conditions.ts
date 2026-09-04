/**
 * Turns a fish row into player-facing catch requirements.
 *
 * The fishing engine (`services/fishingService.js` in the bot) decides
 * eligibility with a small set of checks: season, weather, time of day,
 * minimum luck, minimum combo, required rod level and required bait. This
 * module maps each of those onto a readable requirement, and separates true
 * gates from soft boosts (world events change rarity odds — they only gate a
 * catch when a hidden species' discovery condition names one).
 */
import { ROD_POWER_LEVEL, seasonById, timeById, weatherById } from "@/data/conditions";
import { EVENT_RARITY_BOOSTS, WORLD_EVENTS, type WorldEvent } from "@/data/world-events";
import { baits } from "@/data/baits";
import { rods } from "@/data/rods";
import { titleCase } from "@/lib/game-format";
import type { Bait, Fish, Rod } from "@/types/game";

export type ConditionKind =
  | "season"
  | "time"
  | "weather"
  | "world-event"
  | "bait"
  | "rod"
  | "luck"
  | "combo";

export interface CatchCondition {
  kind: ConditionKind;
  /** Tile heading, e.g. "Time of day". */
  label: string;
  /** The resolved value, e.g. "Night only". */
  value: string;
  /** One-line instruction, e.g. "Only bites between dusk and dawn." */
  hint: string;
  /** Leading emoji for the tile. */
  emoji: string;
  /** False when the fish has no restriction on this axis. */
  required: boolean;
}

export const asList = (value: "any" | string | string[] | undefined): string[] => {
  if (!value || value === "any") return [];
  return Array.isArray(value) ? value : [value];
};

export const fishSeasons = (f: Fish) => asList(f.season);
export const fishTimes = (f: Fish) => asList(f.activeTime);
export const fishWeather = (f: Fish) => asList(f.weather);

/** Cheapest rod (in the fish's own world) whose power level can hook this fish. */
export function rodForFish(f: Fish): Rod | undefined {
  const worldId = f.worldId ?? 0;
  return rods
    .filter((r) => (r.worldId ?? 0) === worldId)
    .filter((r) => (ROD_POWER_LEVEL[r.key] ?? 0) >= f.requiredRodLevel)
    .sort((a, b) => (ROD_POWER_LEVEL[a.key] ?? 0) - (ROD_POWER_LEVEL[b.key] ?? 0))[0];
}

/**
 * The bait a fish requires, resolved inside the fish's OWN world.
 *
 * The bot stores `requiredBait` with the base-game (World 0) bait id even for
 * prestige-world species, because every world reuses the same bait curve with
 * reskinned ids. Baits line up one-to-one across worlds by `requiredLevel`, so
 * we look up the base bait and then swap in the same-level bait of the fish's
 * world (Starlight Dust -> Swiss Cheese, Dragon Blood -> Golden Scarab,
 * Magical Dust -> Toxic Sludge for The Neon Tide). Falls back to the original
 * bait when no equivalent exists.
 */
export function baitForFish(f: Fish): Bait | undefined {
  if (!f.requiredBait) return undefined;
  const key = f.requiredBait;
  const base = baits.find((b) => b.key === key || b.slug === key.replace(/_/g, "-"));
  if (!base) return undefined;
  const worldId = f.worldId ?? 0;
  if ((base.worldId ?? 0) === worldId) return base;
  return (
    baits.find((b) => (b.worldId ?? 0) === worldId && b.requiredLevel === base.requiredLevel) ??
    base
  );
}


/**
 * Discovery text for a hidden species, with any base-game bait name swapped for
 * the equivalent bait of the fish's own world (same reasoning as baitForFish).
 */
export function discoveryConditionText(f: Fish): string | undefined {
  const text = f.discoveryCondition;
  if (!text) return undefined;
  const worldId = f.worldId ?? 0;
  if (worldId === 0) return text;
  return baits
    .filter((b) => (b.worldId ?? 0) === 0)
    .reduce((acc, base) => {
      const local = baits.find(
        (b) => (b.worldId ?? 0) === worldId && b.requiredLevel === base.requiredLevel,
      );
      if (!local || local.name === base.name) return acc;
      return acc.replace(new RegExp(base.name, "g"), local.name);
    }, text);
}

/**
 * World events named explicitly in a hidden species' discovery condition.
 * These are the only fish that genuinely require an event to be active.
 */
export function requiredWorldEvents(f: Fish): WorldEvent[] {
  const text = (f.discoveryCondition ?? "").toLowerCase();
  if (!text) return [];
  return WORLD_EVENTS.filter(
    (e) => e.id !== "none" && text.includes(e.label.toLowerCase()) && text.includes("event"),
  );
}

/** Events that merely improve the odds for this fish's rarity. */
export function boostingWorldEvents(f: Fish): WorldEvent[] {
  return WORLD_EVENTS.filter((e) => (EVENT_RARITY_BOOSTS[e.id] ?? []).includes(f.rarity));
}

const listLabel = (ids: string[], lookup: (id: string) => { name: string } | undefined) =>
  ids.map((id) => lookup(id)?.name ?? titleCase(id)).join(" or ");

export function catchConditions(f: Fish): CatchCondition[] {
  const seasons = fishSeasons(f);
  const times = fishTimes(f);
  const weather = fishWeather(f);
  const bait = baitForFish(f);
  const rod = rodForFish(f);
  const events = requiredWorldEvents(f);
  const boosts = boostingWorldEvents(f);

  const conditions: CatchCondition[] = [
    {
      kind: "season",
      label: "Season",
      emoji: seasons.length === 1 ? (seasonById(seasons[0]!)?.emoji ?? "📅") : "📅",
      value: seasons.length ? listLabel(seasons, seasonById) : "Any season",
      hint: seasons.length
        ? `Only bites during ${listLabel(seasons, seasonById).toLowerCase()}.`
        : "Bites all year round.",
      required: seasons.length > 0,
    },
    {
      kind: "time",
      label: "Time of day",
      emoji: times.length === 1 ? (timeById(times[0]!)?.emoji ?? "🕒") : "🕒",
      value: times.length ? listLabel(times, timeById) : "Any time",
      hint: times.length
        ? `Only active in the ${listLabel(times, timeById).toLowerCase()} window.`
        : "Active around the clock.",
      required: times.length > 0,
    },
    {
      kind: "weather",
      label: "Weather",
      emoji: weather.length === 1 ? (weatherById(weather[0]!)?.emoji ?? "🌤️") : "🌤️",
      value: weather.length ? listLabel(weather, weatherById) : "Any weather",
      hint: weather.length
        ? `The world weather must be ${listLabel(weather, weatherById)}.`
        : "Weather does not matter for this species.",
      required: weather.length > 0,
    },
    {
      kind: "world-event",
      label: "World event",
      emoji: events[0]?.emoji ?? "🌐",
      value: events.length ? events.map((e) => e.label).join(" or ") : "Not required",
      hint: events.length
        ? `Only surfaces while the ${events.map((e) => e.label).join(" or ")} world event is running.`
        : boosts.length
          ? `No event needed, but ${boosts.map((e) => e.label).join(" and ")} raises the odds of ${f.rarity} fish.`
          : "No world event is needed for this catch.",
      required: events.length > 0,
    },
    {
      kind: "bait",
      label: "Bait",
      emoji: "🪱",
      value: bait ? bait.name : f.requiredBait ? titleCase(f.requiredBait) : "Any bait",
      hint: bait
        ? `${bait.name} must be equipped when you cast.`
        : f.requiredBait
          ? `${titleCase(f.requiredBait)} must be equipped when you cast.`
          : "Any bait works. Even none.",
      required: Boolean(f.requiredBait),
    },
    {
      kind: "rod",
      label: "Rod level",
      emoji: "🎣",
      value: `Level ${f.requiredRodLevel}+`,
      hint: rod
        ? `${rod.name} or better is strong enough to hook it.`
        : "Beyond every rod currently in the catalogue. An endgame gate.",
      required: f.requiredRodLevel > 1,
    },
  ];

  if (typeof f.minLuck === "number") {
    conditions.push({
      kind: "luck",
      label: "Luck",
      emoji: "🍀",
      value: `${f.minLuck}+`,
      hint: `Your effective Luck must be above ${f.minLuck} at the moment of the cast.`,
      required: true,
    });
  }

  if (typeof f.minCombo === "number") {
    conditions.push({
      kind: "combo",
      label: "Combo streak",
      emoji: "🔥",
      value: `${f.minCombo}x`,
      hint: `Requires an active catch streak of ${f.minCombo} or more.`,
      required: true,
    });
  }

  return conditions;
}

/** One sentence that stitches every active requirement together. */
export function catchSummary(f: Fish): string {
  const parts: string[] = [];
  const seasons = fishSeasons(f);
  const times = fishTimes(f);
  const weather = fishWeather(f);
  const events = requiredWorldEvents(f);
  const bait = baitForFish(f);
  const rod = rodForFish(f);

  parts.push(`a rod of level ${f.requiredRodLevel} or higher${rod ? ` (${rod.name}+)` : ""}`);
  if (bait) parts.push(`${bait.name} equipped`);
  else if (f.requiredBait) parts.push(`${titleCase(f.requiredBait)} equipped`);
  if (seasons.length) parts.push(`${listLabel(seasons, seasonById).toLowerCase()}`);
  if (times.length) parts.push(`the ${listLabel(times, timeById).toLowerCase()} window`);
  if (weather.length) parts.push(`${listLabel(weather, weatherById)} weather`);
  if (events.length) parts.push(`the ${events.map((e) => e.label).join(" or ")} world event`);
  if (typeof f.minLuck === "number") parts.push(`Luck above ${f.minLuck}`);
  if (typeof f.minCombo === "number") parts.push(`a ${f.minCombo}x combo streak`);

  const last = parts.pop();
  const joined = parts.length ? `${parts.join(", ")} and ${last}` : last;
  return `To catch the ${f.name} you need ${joined}.`;
}

/** Compact requirement chips used on cards and list rows. */
export function conditionChips(f: Fish): string[] {
  return catchConditions(f)
    .filter((c) => c.required && c.kind !== "rod")
    .map((c) => `${c.emoji} ${c.value}`);
}
