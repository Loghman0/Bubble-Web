/**
 * WORLD EVENTS — mirrored 1:1 from the Bubble bot's `data/worldEvents.js`.
 *
 * ACCURACY NOTE: this table exists in the bot's data and a handful of hidden
 * World-1 fish name a specific event in their `discoveryCondition` text (e.g.
 * the Molten Core Serpent references an Ancient Eclipse) — that's the only
 * place these six events currently surface. As of this writing there is no
 * live rotation job and no `activeWorldEvent` field anywhere in the bot's
 * world state (`models/WorldState.js` only tracks weather/season/time-of-day/
 * community goal), so nothing actually flips these on right now. Keep this
 * data around for the fish discovery-condition references, but do not present
 * it to players as a currently-rotating mechanic — see the "World Events"
 * section of the Worlds & Prestige wiki article for the honest wording.
 */
export interface WorldEvent {
  id: string;
  label: string;
  emoji: string;
  /** Relative chance of being picked on rotation. */
  weight: number;
  /** Plain-language summary of what the event changes for anglers. */
  boost: string;
  description: string;
}

export const WORLD_EVENTS: WorldEvent[] = [
  {
    id: "none",
    label: "No Active Event",
    emoji: "🌊",
    weight: 60,
    boost: "Nothing is boosted. A neutral roll.",
    description: "The waters are calm. No world event is active right now.",
  },
  {
    id: "ancient_eclipse",
    label: "Ancient Eclipse",
    emoji: "🌘",
    weight: 20,
    boost: "Ancient-rarity fish are 3× more likely to bite.",
    description:
      "The sky darkens mid-day. Ancient-rarity fish are far more likely to bite. The Volcano's worst included.",
  },
  {
    id: "sea_is_angry",
    label: "The Sea Is Angry",
    emoji: "🌊",
    weight: 25,
    boost: "Sea monster encounters +5% per cast.",
    description: "The water churns without wind. Sea monster encounters spike.",
  },
  {
    id: "pirate_invasion",
    label: "Pirate Invasion",
    emoji: "🏴‍☠️",
    weight: 25,
    boost: "Treasure chests +4% per cast.",
    description: "Sails on the horizon. Treasure chests are washing up more often.",
  },
  {
    id: "golden_tide",
    label: "Golden Tide",
    emoji: "🌟",
    weight: 20,
    boost: "Golden fish are 2.5× more likely to surface.",
    description:
      "The water shimmers gold at the edges. Golden fish are surfacing more often.",
  },
  {
    id: "deep_migration",
    label: "Deep Migration",
    emoji: "🐋",
    weight: 20,
    boost: "Rare-rarity fish are 2× more likely to bite.",
    description:
      "Something is moving through the deep water. Rare fish are shoaling closer to the surface.",
  },
];

export const worldEventById = (id: string) => WORLD_EVENTS.find((e) => e.id === id);

/** Which rarities each event's multiplier directly helps, for the fish pages. */
export const EVENT_RARITY_BOOSTS: Record<string, string[]> = {
  ancient_eclipse: ["Ancient"],
  deep_migration: ["Rare"],
};
