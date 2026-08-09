/**
 * Client for the LIVE Bubble API (src/api in the bot repo) — real player
 * data (leaderboard, recent/rarest catches, server directory), unlike
 * @/lib/api which serves the static game-content roster (fish/pets/rods
 * definitions bundled at build time).
 *
 * Configure the API origin with VITE_BUBBLE_API_URL in .env (see .env.example).
 *
 * IMPORTANT: this fetch happens in the *visitor's browser*. A localhost URL
 * therefore resolves to the visitor's own machine, not your bot host, which
 * is why the leaderboard stays empty on a deployed site until
 * VITE_BUBBLE_API_URL points at a public https:// origin with CORS enabled
 * for this site.
 */
const RAW_BASE = (import.meta.env["VITE_BUBBLE_API_URL"] || "").trim();

export const API_BASE = RAW_BASE.replace(/\/$/, "");

/** True when an API origin has been configured at build time. */
export const isLiveApiConfigured = API_BASE.length > 0;

/**
 * A localhost origin only works while you run the site and the bot API on the
 * same machine. Anyone else's browser cannot reach it.
 */
export const isLocalOnlyApi = /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:|\/|$)/i.test(
  API_BASE,
);

export class LiveApiError extends Error {
  readonly kind: "unconfigured" | "network" | "http" | "parse";
  constructor(kind: LiveApiError["kind"], message: string) {
    super(message);
    this.name = "LiveApiError";
    this.kind = kind;
  }
}

export type LiveStats = {
  players: number;
  servers: number;
  totalFishCaught: number;
  totalCoinsEarned: number;
  fishSpecies: number;
  generatedAt: string;
};

export type LeaderboardSort = "level" | "coins" | "catches" | "coinsEarned";

export type LeaderboardPlayer = {
  rank: number;
  username: string;
  level: number;
  xp: number;
  coins: number;
  totalCaught: number;
  totalCoinsEarned: number;
};

export type PublicCatch = {
  fishId: string;
  fishName: string;
  rarity: string;
  rarityLabel: string;
  weight: number;
  length: number;
  isMutant: boolean;
  caughtByUsername: string;
  serverName: string | null;
  caughtAt: string;
};

export type PublicServer = {
  name: string;
  iconUrl: string | null;
  memberCount: number;
  joinedAt: string;
};

const TIMEOUT_MS = 10_000;

async function getJson<T>(path: string): Promise<T> {
  if (!isLiveApiConfigured) {
    throw new LiveApiError(
      "unconfigured",
      "No live API origin is configured (VITE_BUBBLE_API_URL).",
    );
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
  } catch {
    throw new LiveApiError(
      "network",
      isLocalOnlyApi
        ? "The API origin is a localhost address, which only works on the machine running the bot."
        : "The live API did not respond. It may be offline, blocked by CORS, or unreachable.",
    );
  } finally {
    clearTimeout(timer);
  }

  if (!res.ok) {
    throw new LiveApiError("http", `The live API replied with ${res.status} ${res.statusText}.`);
  }

  const text = await res.text();
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new LiveApiError(
      "parse",
      "The live API returned something that is not JSON (usually an error or login page).",
    );
  }
}

export const liveApi = {
  stats: () => getJson<LiveStats>("/api/public/stats"),
  leaderboard: (by: LeaderboardSort = "level", limit = 25) =>
    getJson<{ by: LeaderboardSort; players: LeaderboardPlayer[] }>(
      `/api/public/leaderboard?by=${by}&limit=${limit}`,
    ),
  recentCatches: (limit = 20) =>
    getJson<{ catches: PublicCatch[] }>(`/api/public/catches/recent?limit=${limit}`),
  rarestCatches: (limit = 20) =>
    getJson<{ catches: PublicCatch[] }>(`/api/public/catches/rarest?limit=${limit}`),
  servers: (limit = 24) =>
    getJson<{ servers: PublicServer[] }>(`/api/public/servers?limit=${limit}`),
};
