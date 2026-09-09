import { baits } from "@/data/baits";
import { enchants } from "@/data/enchants";
import { fish } from "@/data/fish";
import { backpacks } from "@/data/backpacks";
import { minions } from "@/data/minions";
import { eggs, pets } from "@/data/pets";
import { rods } from "@/data/rods";
import { WORLDS } from "@/data/worlds";
import { RARITIES, type Rarity } from "@/types/game";

/**
 * Content counts derived from the real roster. No player, server, or
 * economy figures are published here — those live inside the bot.
 */
export const rosterCounts = {
  fish: fish.length,
  rods: rods.length,
  baits: baits.length,
  pets: pets.length,
  eggs: eggs.length,
  enchants: enchants.length,
  backpacks: backpacks.length,
  minions: minions.length,
  rarities: RARITIES.length,
  worlds: WORLDS.filter((w) => !w.comingSoon).length,
};

export const fishCountByRarity: { rarity: Rarity; count: number }[] = RARITIES.map((rarity) => ({
  rarity,
  count: fish.filter((f) => f.rarity === rarity).length,
}));

/** Per-world roster counts, for the world selector and per-world page headers. */
export const rosterCountsByWorld = (worldId: number) => ({
  fish: fish.filter((f) => (f.worldId ?? 0) === worldId).length,
  rods: rods.filter((r) => (r.worldId ?? 0) === worldId).length,
  baits: baits.filter((b) => (b.worldId ?? 0) === worldId).length,
  pets: pets.filter((p) => (p.worldId ?? 0) === worldId).length,
  eggs: eggs.filter((e) => (e.worldId ?? 0) === worldId).length,
});
