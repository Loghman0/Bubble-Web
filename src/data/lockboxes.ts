import type { Lockbox } from "@/types/game";

/**
 * Lockbox + key pairs, mirrored 1:1 from the Bubble Discord bot's
 * `data/lockboxes.js`. Keys drop from fishing events and treasure chests;
 * lockboxes themselves are found via the `sunken_lockbox` fishing event, with
 * tier gated by player level. Open with `/open <lockbox>` once you hold a
 * matching key.
 *
 * Artwork: `public/assets/lockboxes/<key>.png`, key art at
 * `public/assets/keys/<keyId>.png`.
 */
const LOCKBOX_DATA: Record<string, Lockbox> = Object.fromEntries(
  (
    [
      {
        id: "sunken_lockbox",
        keyId: "sunken_key",
        name: "Sunken Lockbox",
        minLevel: 1,
        description: "A heavy, rusted box dragged up from the seafloor.",
        rewards: {
          coinsBase: 12000,
          coinsRange: 10000,
          gemsBase: 60,
          gemsRange: 40,
          enchantChance: 0.25,
          artifactChance: 0,
        },
      },
      {
        id: "magma_lockbox",
        keyId: "magma_key",
        name: "Magma Lockbox",
        minLevel: 25,
        description: "Scorched iron fused shut by volcanic heat deep in underwater vents.",
        rewards: {
          coinsBase: 35000,
          coinsRange: 20000,
          gemsBase: 180,
          gemsRange: 90,
          enchantChance: 0.5,
          artifactChance: 0.25,
        },
      },
      {
        id: "elderwood_lockbox",
        keyId: "elderwood_key",
        name: "Elderwood Lockbox",
        minLevel: 60,
        description: "Ancient petrified wood, sealed with etchings that predate the kingdom.",
        rewards: {
          coinsBase: 90000,
          coinsRange: 50000,
          gemsBase: 500,
          gemsRange: 200,
          enchantChance: 0.85,
          artifactChance: 0.6,
        },
      },
    ] as {
      id: string;
      keyId: string;
      name: string;
      minLevel: number;
      description: string;
      rewards: Lockbox["rewards"];
    }[]
  ).map((l) => [
    l.id,
    {
      key: l.id,
      slug: l.id.replace(/_/g, "-"),
      name: l.name,
      image: `/assets/lockboxes/${l.id}.png`,
      keyId: l.keyId,
      keyImage: `/assets/keys/${l.keyId}.png`,
      minLevel: l.minLevel,
      description: l.description,
      rewards: l.rewards,
    } satisfies Lockbox,
  ]),
);

export const lockboxes: Lockbox[] = Object.values(LOCKBOX_DATA).sort((a, b) => a.minLevel - b.minLevel);

export const lockboxBySlug = (slug: string) => lockboxes.find((l) => l.slug === slug);

export const lockboxByKey = (key: string) => LOCKBOX_DATA[key];
