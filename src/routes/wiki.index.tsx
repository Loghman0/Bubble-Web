import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { EmptyState, PageHeader, Reveal } from "@/components/game/primitives";
import { Input } from "@/components/ui/input";
import { wikiArticles, wikiCategories } from "@/lib/api";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/wiki/")({
  head: () => ({
    meta: pageMeta(
      "Wiki — Bubble Documentation",
      "Official Bubble documentation: getting started, commands, energy, fishing, weather, rods, enchants, baits, pets, eggs, market, museum, guilds and quests.",
    ),
    links: [{ rel: "canonical", href: "/wiki" }],
  }),
  component: WikiIndex,
});

function WikiIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return wikiArticles.filter((a) => {
      if (category && a.category !== category) return false;
      if (!q) return true;
      const haystack = [
        a.title,
        a.summary,
        a.category,
        ...(a.tags ?? []),
        ...a.sections.map((s) => `${s.heading} ${s.body}`),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const a of wikiArticles) map.set(a.category, (map.get(a.category) ?? 0) + 1);
    return map;
  }, []);

  const grouped = useMemo(() => {
    return wikiCategories
      .map((c) => ({ category: c, items: results.filter((a) => a.category === c) }))
      .filter((g) => g.items.length > 0);
  }, [results]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Documentation"
        title="Bubble Wiki"
        description="Everything about how the game actually works — mechanics, commands, items and progression, written for players who want the detail."
      />

      <div className="relative mx-auto mt-8 max-w-lg">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles, mechanics or commands"
          aria-label="Search the wiki"
          className="pl-9"
        />
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2 lg:hidden">
        <CategoryChip active={category === null} onClick={() => setCategory(null)}>
          All
        </CategoryChip>
        {wikiCategories.map((c) => (
          <CategoryChip key={c} active={category === c} onClick={() => setCategory(c)}>
            {c}
          </CategoryChip>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[240px_1fr]">
        <nav aria-label="Wiki categories" className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Categories
            </h2>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setCategory(null)}
                  aria-current={category === null ? "true" : undefined}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-left transition-colors",
                    category === null
                      ? "bg-primary/15 font-semibold text-primary"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                  )}
                >
                  All articles
                  <span className="text-xs">{wikiArticles.length}</span>
                </button>
              </li>
              {wikiCategories.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-current={category === c ? "true" : undefined}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-1.5 text-left transition-colors",
                      category === c
                        ? "bg-primary/15 font-semibold text-primary"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                    )}
                  >
                    <span>{c}</span>
                    <span className="text-xs">{counts.get(c) ?? 0}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div>
          {grouped.length === 0 ? (
            <EmptyState
              title="No articles found"
              description="Try a different search term or pick another category."
            />
          ) : (
            <div className="space-y-12">
              {grouped.map((group) => (
                <section key={group.category}>
                  <h2 className="font-display text-lg font-bold">{group.category}</h2>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                    {group.items.map((a, i) => (
                      <li key={a.slug}>
                        <Reveal delay={i * 0.03}>
                          <Link
                            to="/wiki/$slug"
                            params={{ slug: a.slug }}
                            className="glass block h-full rounded-2xl p-5 transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                          >
                            <h3 className="font-display text-base font-bold">{a.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{a.summary}</p>
                            <p className="mt-3 text-xs text-muted-foreground">
                              {a.sections.length} sections
                            </p>
                          </Link>
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CategoryChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
        active ? "bg-primary text-primary-foreground" : "glass text-muted-foreground",
      )}
    >
      {children}
    </button>
  );
}
