import type { Enchant } from "@/types/game";

/**
 * Rod enchants, mirrored 1:1 from the Bubble Discord bot's `data/enchants.js`.
 *
 * Enchants apply to a specific owned rod instance, not to the player
 * globally — switching rods means starting over on that rod's enchants.
 * A rod can hold at most `Rod.enchantSlots` enchants at once (0 on Wood/
 * Bamboo, scaling up to 9 on Cosmic), and the same enchant can't be applied
 * twice to one rod. Each enchant has 3 levels (I/II/III); `valuePerLevel`
 * gives the bonus at each level. Enchants are NOT sold in the shop — they
 * come from treasure chests, guild raid rewards, high-level quest rewards,
 * and the Museum Shop (bought with Ancient Museum Coins).
 */
const ENCHANT_DATA: Record<string, any> = Object.fromEntries(
  [
  { id: "lucky_catch", name: "Lucky Catch", emoji: "🍀", description: "Increases the chance of rolling a rare-or-better fish.", appliesTo: "rarity_roll", valuePerLevel: [0.02, 0.04, 0.07] },
  { id: "treasure_hunter", name: "Treasure Hunter", emoji: "🗺️", description: "Increases the chance of finding a treasure chest.", appliesTo: "treasure_event", valuePerLevel: [0.01, 0.02, 0.035] },
  { id: "gem_hunter", name: "Gem Hunter", emoji: "💎", description: "Small chance to find a few bonus gems on any catch.", appliesTo: "gem_bonus", valuePerLevel: [0.01, 0.02, 0.035] },
  { id: "efficient_line", name: "Efficient Line", emoji: "🧵", description: "Reduces the energy cost of casting.", appliesTo: "energy_cost", valuePerLevel: [0.05, 0.1, 0.15] },
  { id: "experienced_angler", name: "Experienced Angler", emoji: "📘", description: "Increases fishing XP earned per catch.", appliesTo: "xp_gain", valuePerLevel: [0.05, 0.1, 0.18] },
  { id: "coin_blessing", name: "Coin Blessing", emoji: "🪙", description: "Increases coins earned when selling fish.", appliesTo: "sell_price", valuePerLevel: [0.04, 0.08, 0.14] },
  { id: "museum_instinct", name: "Museum Instinct", emoji: "🏛️", description: "Increases the chance of finding fish valuable to the Museum.", appliesTo: "museum_bias", valuePerLevel: [0.03, 0.06, 0.1] },
  { id: "double_hook", name: "Double Hook", emoji: "🪝", description: "Small chance to catch two fish in a single cast.", appliesTo: "double_catch", valuePerLevel: [0.02, 0.035, 0.05] },
  ].map((e) => [e.id, e]),
);

export const enchants: Enchant[] = Object.values(ENCHANT_DATA).map((e: any) => ({
  key: e.id,
  slug: e.id.replace(/_/g, "-"),
  name: e.name,
  emoji: e.emoji,
  description: e.description,
  appliesTo: e.appliesTo,
  valuePerLevel: e.valuePerLevel as [number, number, number],
  image: `/assets/enchantments/${e.id}.png`,
  levelImages: [
    `/assets/enchantments/${e.id}_1.png`,
    `/assets/enchantments/${e.id}_2.png`,
    `/assets/enchantments/${e.id}_3.png`,
  ] as [string, string, string],
}));

export const enchantBySlug = (slug: string) => enchants.find((e) => e.slug === slug);
