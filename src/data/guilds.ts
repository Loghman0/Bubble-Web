import type { GuildTier } from "@/types/game";

/**
 * Guild member-capacity tiers, mirrored 1:1 from the Bubble Discord bot's
 * `commands/guild/guild.js` (`GUILD_TIERS`). Capacity is a STRICTLY paid,
 * strictly sequential ladder — a guild's level (raised by depositing coins
 * via `/guild deposit`) only scales the guild's passive buffs
 * (xp/coin/luck bonuses); it has never granted member capacity. Every tier
 * must be bought in order with `/guild expand` — a Tier-0 guild's very next
 * offer is always Tier 1, never a later tier.
 */
export const GUILD_TIERS: GuildTier[] = [
  { tier: 0, memberLimit: 8, cost: 0 },
  { tier: 1, memberLimit: 16, cost: 150 },
  { tier: 2, memberLimit: 22, cost: 350 },
  { tier: 3, memberLimit: 28, cost: 500 },
  { tier: 4, memberLimit: 34, cost: 750 },
  { tier: 5, memberLimit: 40, cost: 1250 },
];

/** Coins cost to create a new guild via `/guild create`. */
export const GUILD_CREATE_COST_COINS = 2500;

/**
 * Guild Raids, mirrored from `tryStartOrShowRaid` in the bot's
 * `commands/guild/guild.js` + `services/guildRaidService.js`. Any Officer or
 * the Leader can start one with `/guild raid` once per guild per 24 hours;
 * every member can then contribute damage with repeated `/guild raid` calls
 * until the boss is defeated or the 2-hour timer runs out.
 */
export const GUILD_RAID = {
  /** How often a NEW raid can be started, per guild. */
  cooldownHours: 24,
  /** How long a started raid stays open for members to damage. */
  durationHours: 2,
  /** Base boss HP before guild-level and member-count scaling. */
  baseHp: 5000,
  /** HP added per guild level. */
  hpPerGuildLevel: 2000,
  /** Base coin reward pool before guild-level and member-count scaling. */
  baseRewardCoins: 15000,
  /** Coins added per guild level. */
  rewardCoinsPerGuildLevel: 5000,
  /** Base gem reward pool before guild-level and member-count scaling. */
  baseRewardGems: 30,
  /** Gems added per guild level. */
  rewardGemsPerGuildLevel: 15,
  /** Flat percentage of the coin reward pool that always goes to the guild's shared treasury, on top of individual member payouts. */
  treasuryCutPercent: 25,
  /** Individual payout share is proportional to each member's own recorded damage contribution. */
  payoutMethod: "proportional to damage dealt" as const,
};

export const GUILD_ROLES = ["Leader", "Officer", "Member"] as const;
