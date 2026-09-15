import type { World } from "@/types/game";

/**
 * Prestige tiers, mirrored from the Bubble Discord bot's prestige system
 * (see `Bubble_Prestige_System_Design.md`). A player prestiges once they
 * hit max level and complete the current tier's fish dex — each new tier
 * swaps in a fresh Fish/Rod/Bait/Pet roster tagged with a matching `worldId`,
 * reusing identical mechanics (same rarity odds, same price/XP curve shape)
 * just reskinned.
 *
 * Naming: each tier gets its own permanent name (never "World 0" / "World 1"
 * in anything user-facing) — the numeric `id` is purely an internal key that
 * must match the `worldId` values in the data files. Renaming `name`/`tagline`
 * here is safe at any time; changing `id` is not, since it's a join key.
 *
 * To add the next tier: append an entry here with a real name, then add rows
 * with the matching `worldId` to `data/fish.ts`, `data/rods.ts`,
 * `data/baits.ts`, and `data/pets.ts` — every catalog page and detail page
 * picks it up automatically.
 */
export const WORLDS: World[] = [
  {
    id: 0,
    name: "The Shallows",
    tagline: "Base Game",
    badge: "🌊",
    worldIcon: "/assets/World0/icon.png",
    accent: "from-lagoon to-treasure",
    description: "Where every angler starts. Cast your first line, fill the dex, master the shallows.",
  },
  {
    id: 1,
    name: "The Neon Tide",
    tagline: "1st Prestige",
    badge: "🔮",
    badgeIcon: "/assets/World1/badge.png",
    worldIcon: "/assets/World1/icon.png",
    accent: "from-neon to-neon-secondary",
    description: "Unlocked at your first Prestige. A stranger, bioluminescent, cavern-and-mutation-themed tide awaits.",
  },
  {
    id: 2,
    name: "The Frontier",
    tagline: "2nd Prestige",
    badge: "⚙️",
    badgeIcon: "/assets/World2/badge.png",
    worldIcon: "/assets/World2/icon.png",
    accent: "from-teal-600 to-amber-700",
    description: "Unlocked at your second Prestige. Druidic groves, deep-sea trenches, volcanic calderas and clockwork machinery, all sharing the same tide.",
  },
  {
    id: 3,
    name: "The First Waters",
    tagline: "3rd Prestige",
    badge: "🔱",
    badgeIcon: "/assets/World3/badge.png",
    worldIcon: "/assets/World3/icon.png",
    accent: "from-amber-800 to-stone-900",
    description: "The primal wellspring — ancient ruins, rune-touched waters, and the oldest fish in existence. Nothing here is young.",
  },
  {
    id: 4,
    name: "???",
    tagline: "4th Prestige",
    badge: "🕳️",
    badgeIcon: "/assets/World4/badge.png",
    worldIcon: "/assets/World0/icon.png",
    accent: "from-stone-900 to-black",
    comingSoon: true,
    mysteryName: "No signal reaches this depth",
  },
  {
    id: 5,
    name: "???",
    tagline: "5th Prestige",
    badge: "✦",
    badgeIcon: "/assets/World5/badge.png",
    worldIcon: "/assets/World0/icon.png",
    accent: "from-violet-950 to-black",
    comingSoon: true,
    mysteryName: "Even the fish don't come back",
  },
  {
    id: 6,
    name: "???",
    tagline: "6th Prestige",
    badge: "🌘",
    badgeIcon: "/assets/World6/badge.png",
    worldIcon: "/assets/World0/icon.png",
    accent: "from-zinc-900 to-black",
    comingSoon: true,
    mysteryName: "The maps disagree with each other here",
  },
  {
    id: 7,
    name: "???",
    tagline: "7th Prestige",
    badge: "🕸️",
    badgeIcon: "/assets/World7/badge.png",
    worldIcon: "/assets/World0/icon.png",
    accent: "from-purple-950 to-black",
    comingSoon: true,
    mysteryName: "Something is keeping score",
  },
  {
    id: 8,
    name: "???",
    tagline: "8th Prestige",
    badge: "🩸",
    badgeIcon: "/assets/World8/badge.png",
    worldIcon: "/assets/World0/icon.png",
    accent: "from-red-950 to-black",
    comingSoon: true,
    mysteryName: "The last log entry just says 'don't'",
  },
  {
    id: 9,
    name: "???",
    tagline: "9th Prestige",
    badge: "🫧",
    badgeIcon: "/assets/World9/badge.png",
    worldIcon: "/assets/World0/icon.png",
    accent: "from-cyan-950 to-black",
    comingSoon: true,
    mysteryName: "Silence, then a single bubble",
  },
  {
    id: 10,
    name: "???",
    tagline: "10th Prestige",
    badge: "🌌",
    badgeIcon: "/assets/World10/badge.png",
    worldIcon: "/assets/World0/icon.png",
    accent: "from-slate-950 to-black",
    comingSoon: true,
    mysteryName: "Where the water ends",
  },
];

export const worldById = (id: number | undefined): World =>
  WORLDS.find((w) => w.id === (id ?? 0)) ?? WORLDS[0]!;

/** Normalises a possibly-undefined worldId field to a concrete number (0 default). */
export const resolveWorldId = (worldId: number | undefined): number => worldId ?? 0;
