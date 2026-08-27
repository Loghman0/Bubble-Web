import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { FishCard } from "@/components/game/cards";
import { EmptyState, PageHeader, Reveal, WorldTransition } from "@/components/game/primitives";
import { WorldSelect } from "@/components/game/world-select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fish as allFish } from "@/lib/api";
import { pageMeta } from "@/lib/seo";
import { RARITIES } from "@/types/game";

export const Route = createFileRoute("/fish/")({
  head: () => ({
    meta: pageMeta(
      "Fish Encyclopedia — Bubble",
      "Browse every species in Bubble across every prestige World, from The Shallows to The Neon Tide — over a hundred fish per world across nine rarity tiers, from Common to Divine.",
    ),
    links: [{ rel: "canonical", href: "/fish" }],
  }),
  component: FishIndex,
});

const PER_PAGE = 24;

function FishIndex() {
  const [query, setQuery] = useState("");
  const [rarity, setRarity] = useState("all");
  const [sort, setSort] = useState("rarity");
  const [page, setPage] = useState(1);
  const [worldId, setWorldId] = useState(0);

  const filtered = useMemo(() => {
    const list = allFish.filter(
      (f) =>
        (f.worldId ?? 0) === worldId &&
        f.name.toLowerCase().includes(query.toLowerCase()) &&
        (rarity === "all" || f.rarity === rarity),
    );
    return [...list].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "rarity-desc")
        return (
          RARITIES.indexOf(b.rarity) - RARITIES.indexOf(a.rarity) || a.name.localeCompare(b.name)
        );
      return (
        RARITIES.indexOf(a.rarity) - RARITIES.indexOf(b.rarity) || a.name.localeCompare(b.name)
      );
    });
  }, [query, rarity, sort, worldId]);

  const worldFishCount = useMemo(
    () => allFish.filter((f) => (f.worldId ?? 0) === worldId).length,
    [worldId],
  );

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const reset = () => setPage(1);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Encyclopedia"
        title="Fish Encyclopedia"
        description={`${worldFishCount} species catalogued in this World across nine rarity tiers. Every entry has its own page.`}
      />

      <div className="mt-8 flex justify-center">
        <WorldSelect
          value={worldId}
          onChange={(id) => {
            setWorldId(id);
            reset();
          }}
        />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              reset();
            }}
            placeholder="Search species"
            aria-label="Search fish species"
            className="pl-9"
          />
        </div>
        <Select
          value={rarity}
          onValueChange={(v) => {
            setRarity(v);
            reset();
          }}
        >
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
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger aria-label="Sort results">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rarity">Rarity: low to high</SelectItem>
            <SelectItem value="rarity-desc">Rarity: high to low</SelectItem>
            <SelectItem value="name">Name: A to Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {filtered.length} species
      </p>

      <WorldTransition worldKey={worldId}>
        {visible.length === 0 ? (
          <div className="mt-8">
            <EmptyState
              title="Nothing in the net"
              description="No species match those filters. Try another rarity, world, or search term."
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
            onClick={() => setPage(current - 1)}
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
            onClick={() => setPage(current + 1)}
          >
            Next
          </Button>
        </nav>
      ) : null}

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Looking for gear instead? Visit the{" "}
        <Link to="/rods" className="text-primary underline">
          rod catalogue
        </Link>
        .
      </p>
    </section>
  );
}
