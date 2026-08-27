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
  },
  {
    id: 1,
    name: "The Neon Tide",
    tagline: "1st Prestige",
    badge: "🔮",
    badgeIcon: "/assets/World1/badge.png",
    worldIcon: "/assets/World1/icon.png",
    accent: "from-neon to-neon-secondary",
  },
];

export const worldById = (id: number | undefined): World =>
  WORLDS.find((w) => w.id === (id ?? 0)) ?? WORLDS[0]!;

/** Normalises a possibly-undefined worldId field to a concrete number (0 default). */
export const resolveWorldId = (worldId: number | undefined): number => worldId ?? 0;
