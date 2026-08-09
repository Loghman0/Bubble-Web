import { baits } from "@/data/baits";
import { enchants } from "@/data/enchants";
import { fish } from "@/data/fish";
import { eggs, pets } from "@/data/pets";
import { rods } from "@/data/rods";
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
  rarities: RARITIES.length,
};

export const fishCountByRarity: { rarity: Rarity; count: number }[] = RARITIES.map((rarity) => ({
  rarity,
  count: fish.filter((f) => f.rarity === rarity).length,
}));
