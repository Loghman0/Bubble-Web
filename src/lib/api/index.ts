/**
 * Thin data-access layer.
 *
 * Every page reads game content through these functions. They currently return
 * local roster data synchronously wrapped in promises; swapping a body for
 * `fetch(...)` against a live Bubble API requires no UI changes.
 */
import { baitBySlug, baits, baitsByWorld } from "@/data/baits";
import { enchantBySlug, enchants } from "@/data/enchants";
import { fish, fishByRarity, fishBySlug, fishByWorld } from "@/data/fish";
import { backpacks, backpackBySlug } from "@/data/backpacks";
import { minions, minionBySlug } from "@/data/minions";
import {
  eggBySlug,
  eggs,
  eggsByWorld,
  petBySlug,
  pets,
  petsByWorld,
  petsForEgg,
} from "@/data/pets";
import { rodBySlug, rods, rodsByWorld, rodTiers } from "@/data/rods";
import { currencies } from "@/data/currencies";
import { faq, wikiArticles, wikiBySlug, wikiCategories } from "@/data/content";
import { fishCountByRarity, rosterCounts, rosterCountsByWorld } from "@/data/site";
import { WORLDS, worldById } from "@/data/worlds";

const ok = <T>(value: T): Promise<T> => Promise.resolve(value);

export const api = {
  fish: {
    list: () => ok(fish),
    get: (slug: string) => ok(fishBySlug(slug) ?? null),
  },
  pets: {
    list: () => ok(pets),
    get: (slug: string) => ok(petBySlug(slug) ?? null),
  },
  eggs: {
    list: () => ok(eggs),
    get: (slug: string) => ok(eggBySlug(slug) ?? null),
  },
  rods: {
    list: () => ok(rods),
    get: (slug: string) => ok(rodBySlug(slug) ?? null),
  },
  baits: {
    list: () => ok(baits),
    get: (slug: string) => ok(baitBySlug(slug) ?? null),
  },
  enchants: {
    list: () => ok(enchants),
    get: (slug: string) => ok(enchantBySlug(slug) ?? null),
  },
  currencies: { list: () => ok(currencies) },
  wiki: {
    list: () => ok(wikiArticles),
    categories: () => ok(wikiCategories),
    get: (slug: string) => ok(wikiBySlug(slug) ?? null),
  },
  faq: { list: () => ok(faq) },
  roster: { counts: () => ok(rosterCounts) },
  worlds: { list: () => ok(WORLDS) },
};

// Synchronous accessors for render paths that do not need async loading.
export {
  fish,
  fishBySlug,
  fishByRarity,
  fishByWorld,
  pets,
  petBySlug,
  petsByWorld,
  eggs,
  eggBySlug,
  eggsByWorld,
  petsForEgg,
  rods,
  rodBySlug,
  rodTiers,
  rodsByWorld,
  baits,
  baitBySlug,
  baitsByWorld,
  enchants,
  enchantBySlug,
  backpacks,
  backpackBySlug,
  minions,
  minionBySlug,
  currencies,
  wikiArticles,
  wikiBySlug,
  wikiCategories,
  faq,
  rosterCounts,
  rosterCountsByWorld,
  fishCountByRarity,
  WORLDS,
  worldById,
};
