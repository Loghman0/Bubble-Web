import type { Backpack } from "@/types/game";

/**
 * Backpack tiers, mirrored 1:1 from the Bubble Discord bot's `data/backpacks.js`.
 * Every player starts on the free `novice_satchel`; the other three are
 * permanent, one-time gem purchases from `/shop` → Backpacks. Capacity is a
 * STACKED-UNIT pool shared across every fish species (see the Backpacks wiki
 * article) — it is not a count of individual fish slots.
 *
 * Artwork: `public/assets/backpacks/<key>.png`.
 */
const BACKPACK_DATA: Record<string, Backpack> = Object.fromEntries(
  (
    [
      {
        id: "novice_satchel",
        name: "Novice Satchel",
        tier: 0,
        price: 0,
        currency: "gems",
        capacityUnits: 28,
        description:
          "Everyone starts here. Small and cramped. Fills up fast, so sell or upgrade often.",
      },
      {
        id: "durable_rucksack",
        name: "Durable Rucksack",
        tier: 1,
        price: 800,
        currency: "gems",
        capacityUnits: 65,
        description: "Reinforced canvas and a proper frame. The first real upgrade.",
      },
      {
        id: "pro_technical_pack",
        name: "Pro Technical Pack",
        tier: 2,
        price: 2500,
        currency: "gems",
        capacityUnits: 145,
        description: "Modular compartments built for anglers who fish for hours, not minutes.",
      },
      {
        id: "master_bubble_pack",
        name: "Master Bubble Pack",
        tier: 3,
        price: 6000,
        currency: "gems",
        capacityUnits: 290,
        description: "The last backpack you will ever need. Endgame anglers swear by it.",
      },
    ] as { id: string; name: string; tier: number; price: number; currency: "coins" | "gems"; capacityUnits: number; description: string }[]
  ).map((b) => [
    b.id,
    {
      key: b.id,
      slug: b.id.replace(/_/g, "-"),
      name: b.name,
      tier: b.tier,
      image: `/assets/backpacks/${b.id}.png`,
      price: b.price,
      currency: b.currency,
      capacityUnits: b.capacityUnits,
      description: b.description,
    } satisfies Backpack,
  ]),
);

export const backpacks: Backpack[] = Object.values(BACKPACK_DATA).sort((a, b) => a.tier - b.tier);

export const backpackBySlug = (slug: string) => backpacks.find((b) => b.slug === slug);

export const backpackByKey = (key: string) => BACKPACK_DATA[key];
