import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { Search } from "lucide-react";

import { FishCard } from "@/components/game/cards";
import { EmptyState, PageHeader, Reveal, WorldTransition } from "@/components/game/primitives";
import { WorldSelect } from "@/components/game/world-select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SEASONS, TIMES_OF_DAY, WEATHER } from "@/data/conditions";
import { fish as allFish } from "@/lib/api";
import {
  baitForFish,
  fishSeasons,
  fishTimes,
  fishWeather,
  requiredWorldEvents,
} from "@/lib/catch-conditions";
import { pageMeta } from "@/lib/seo";
import { RARITIES } from "@/types/game";

interface FishSearch {
  q: string;
  rarity: string;
  sort: string;
  world: number;
  season: string;
  time: string;
  weather: string;
  bait: string;
  event: string;
  hidden: string;
  rod: number;
  page: number;
}

const DEFAULTS: FishSearch = {
  q: "",
  rarity: "all",
  sort: "rarity",
  world: 0,
  season: "all",
  time: "all",
  weather: "all",
  bait: "all",
  event: "all",
  hidden: "all",
  rod: 0,
  page: 1,
};

const str = (v: unknown, fallback: string) => (typeof v === "string" && v ? v : fallback);
const num = (v: unknown, fallback: number) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

const MAX_ROD_LEVEL = Math.max(...allFish.map((f) => f.requiredRodLevel));

export const Route = createFileRoute("/fish/")({
  validateSearch: (search: Record<string, unknown>): Partial<FishSearch> => {
    const parsed: FishSearch = {
      q: str(search["q"], DEFAULTS.q),
      rarity: str(search["rarity"], DEFAULTS.rarity),
      sort: str(search["sort"], DEFAULTS.sort),
      world: num(search["world"], DEFAULTS.world),
      season: str(search["season"], DEFAULTS.season),
      time: str(search["time"], DEFAULTS.time),
      weather: str(search["weather"], DEFAULTS.weather),
      bait: str(search["bait"], DEFAULTS.bait),
      event: str(search["event"], DEFAULTS.event),
      hidden: str(search["hidden"], DEFAULTS.hidden),
      rod: num(search["rod"], DEFAULTS.rod),
      page: Math.max(1, num(search["page"], DEFAULTS.page)),
    };
    // Keep shared URLs clean: only non-default values are serialised, and every
    // key stays optional so `<Link to="/fish">` needs no search object.
    const out: Partial<FishSearch> = {};
    for (const key of Object.keys(parsed) as (keyof FishSearch)[]) {
      if (parsed[key] !== DEFAULTS[key]) (out as Record<string, unknown>)[key] = parsed[key];
    }
    return out;
  },

  head: () => ({
    meta: pageMeta(
      "Fish Encyclopedia | Every Species and Its Catch Conditions | Bubble",
      "Browse every fish in Bubble and filter by season, time of day, weather, world event, required bait and rod level to find exactly what you can catch right now.",
    ),
    links: [{ rel: "canonical", href: "/fish" }],
  }),
  component: FishIndex,
});

const PER_PAGE = 24;

function FishIndex() {
  const search: FishSearch = { ...DEFAULTS, ...Route.useSearch() };
  const navigate = useNavigate({ from: "/fish/" });

  const set = (patch: Partial<FishSearch>) => {
    const next: FishSearch = { ...search, ...patch, ...(patch.page ? {} : { page: 1 }) };
    void navigate({ search: next, replace: true });
  };

  const filtered = useMemo(() => {
    const list = allFish.filter((f) => {
      if ((f.worldId ?? 0) !== search.world) return false;
      if (!f.name.toLowerCase().includes(search.q.toLowerCase())) return false;
      if (search.rarity !== "all" && f.rarity !== search.rarity) return false;

      if (search.season !== "all") {
        const seasons = fishSeasons(f);
        if (search.season === "any" ? seasons.length > 0 : !seasons.includes(search.season))
          return false;
      }
      if (search.time !== "all") {
        const times = fishTimes(f);
        if (search.time === "any" ? times.length > 0 : !times.includes(search.time)) return false;
      }
      if (search.weather !== "all") {
        const weather = fishWeather(f);
        if (search.weather === "any" ? weather.length > 0 : !weather.includes(search.weather))
          return false;
      }
      if (search.bait === "none" && f.requiredBait) return false;
      if (search.bait !== "all" && search.bait !== "none") {
        if (search.bait === "required" ? !f.requiredBait : f.requiredBait !== search.bait)
          return false;
      }
      if (search.event === "required" && requiredWorldEvents(f).length === 0) return false;
      if (search.hidden === "hidden" && !f.hidden) return false;
      if (search.hidden === "standard" && f.hidden) return false;
      if (search.rod > 0 && f.requiredRodLevel > search.rod) return false;
      return true;
    });

    return [...list].sort((a, b) => {
      if (search.sort === "name") return a.name.localeCompare(b.name);
      if (search.sort === "rod") return a.requiredRodLevel - b.requiredRodLevel;
      if (search.sort === "rarity-desc")
        return (
          RARITIES.indexOf(b.rarity) - RARITIES.indexOf(a.rarity) || a.name.localeCompare(b.name)
        );
      return (
        RARITIES.indexOf(a.rarity) - RARITIES.indexOf(b.rarity) || a.name.localeCompare(b.name)
      );
    });
  }, [search]);

  const worldFishCount = useMemo(
    () => allFish.filter((f) => (f.worldId ?? 0) === search.world).length,
    [search.world],
  );

  // Bait ids are stored per base game, but the displayed name must be the bait
  // of the currently selected World (see baitForFish).
  const baitOptions = useMemo(() => {
    const map = new Map<string, string>();
    for (const f of allFish) {
      if (!f.requiredBait || (f.worldId ?? 0) !== search.world) continue;
      map.set(f.requiredBait, baitForFish(f)?.name ?? f.requiredBait);
    }
    return [...map.entries()];
  }, [search.world]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(search.page, pages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const filtersActive =
    search.season !== "all" ||
    search.time !== "all" ||
    search.weather !== "all" ||
    search.bait !== "all" ||
    search.event !== "all" ||
    search.hidden !== "all" ||
    search.rod > 0 ||
    search.rarity !== "all" ||
    search.q !== "";

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Encyclopedia"
        title="Fish Encyclopedia"
        description={`${worldFishCount} species catalogued in this World. Filter by season, time of day, weather, world event, bait and rod level to see exactly what you can catch.`}
      />

      <div className="mt-8 flex justify-center">
        <WorldSelect value={search.world} onChange={(id) => set({ world: id })} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            value={search.q}
            onChange={(e) => set({ q: e.target.value })}
            placeholder="Search species"
            aria-label="Search fish species"
            className="pl-9"
          />
        </div>

        <Select value={search.rarity} onValueChange={(v) => set({ rarity: v })}>
          <SelectTrigger aria-label="Filter by rarity">
            <SelectValue placeholder="Rarity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All rarities</SelectItem>
            {RARITIES.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={search.sort} onValueChange={(v) => set({ sort: v })}>
          <SelectTrigger aria-label="Sort results">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rarity">Rarity: low to high</SelectItem>
            <SelectItem value="rarity-desc">Rarity: high to low</SelectItem>
            <SelectItem value="name">Name: A to Z</SelectItem>
            <SelectItem value="rod">Rod level: low to high</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ------------------------------------------------ condition filters */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Select value={search.season} onValueChange={(v) => set({ season: v })}>
          <SelectTrigger aria-label="Filter by season">
            <SelectValue placeholder="Season" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any season filter</SelectItem>
            <SelectItem value="any">No season requirement</SelectItem>
            {SEASONS.map((s) => (
              <SelectItem key={s.id} value={s.id}>
                {s.emoji} {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={search.time} onValueChange={(v) => set({ time: v })}>
          <SelectTrigger aria-label="Filter by time of day">
            <SelectValue placeholder="Time of day" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any time filter</SelectItem>
            <SelectItem value="any">No time requirement</SelectItem>
            {TIMES_OF_DAY.map((t) => (
              <SelectItem key={t.id} value={t.id}>
                {t.emoji} {t.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={search.weather} onValueChange={(v) => set({ weather: v })}>
          <SelectTrigger aria-label="Filter by weather">
            <SelectValue placeholder="Weather" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any weather filter</SelectItem>
            <SelectItem value="any">No weather requirement</SelectItem>
            {WEATHER.map((w) => (
              <SelectItem key={w.id} value={w.id}>
                {w.emoji} {w.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={search.bait} onValueChange={(v) => set({ bait: v })}>
          <SelectTrigger aria-label="Filter by required bait">
            <SelectValue placeholder="Bait" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any bait filter</SelectItem>
            <SelectItem value="none">No bait required</SelectItem>
            <SelectItem value="required">Needs a specific bait</SelectItem>
            {baitOptions.map(([id, label]) => (
              <SelectItem key={id} value={id}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={search.event} onValueChange={(v) => set({ event: v })}>
          <SelectTrigger aria-label="Filter by world event requirement">
            <SelectValue placeholder="World event" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any world event filter</SelectItem>
            <SelectItem value="required">World-event locked only</SelectItem>
          </SelectContent>
        </Select>

        <Select value={search.hidden} onValueChange={(v) => set({ hidden: v })}>
          <SelectTrigger aria-label="Filter by discovery status">
            <SelectValue placeholder="Discovery" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Hidden and standard</SelectItem>
            <SelectItem value="hidden">Hidden species only</SelectItem>
            <SelectItem value="standard">Standard species only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="glass mt-3 rounded-xl px-4 py-4">
        <div className="flex items-center justify-between gap-4 text-sm">
          <label htmlFor="rod-level" className="text-muted-foreground">
            Max rod level I can use
          </label>
          <span className="font-semibold">
            {search.rod > 0 ? `Level ${search.rod}` : "No limit"}
          </span>
        </div>
        <Slider
          id="rod-level"
          className="mt-3"
          min={0}
          max={MAX_ROD_LEVEL}
          step={5}
          value={[search.rod]}
          onValueChange={(v) => set({ rod: v[0] ?? 0 })}
          aria-label="Maximum required rod level"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {filtered.length} species match
        </p>
        {filtersActive ? (
          <Button variant="ghost" size="sm" onClick={() => set({ ...DEFAULTS, world: search.world })}>
            Clear filters
          </Button>
        ) : null}
      </div>

      <WorldTransition worldKey={search.world}>
        {visible.length === 0 ? (
          <div className="mt-8">
            <EmptyState
              title="Nothing in the net"
              description="No species match those catch conditions. Try loosening the weather, season or rod level filter."
            />
          </div>
        ) : (
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {visible.map((f, i) => (
              <li key={f.slug}>
                <Reveal delay={i * 0.015}>
                  <FishCard fish={f} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </WorldTransition>

      {pages > 1 ? (
        <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
          <Button
            variant="outline"
            size="sm"
            disabled={current === 1}
            onClick={() => set({ page: current - 1 })}
          >
            Previous
          </Button>
          <span className="px-3 text-sm text-muted-foreground">
            Page {current} of {pages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={current === pages}
            onClick={() => set({ page: current + 1 })}
          >
            Next
          </Button>
        </nav>
      ) : null}

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Not sure what a condition means? Read the{" "}
        <Link to="/conditions" className="text-primary underline">
          catch conditions guide
        </Link>
        .
      </p>
    </section>
  );
}
