import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { GameAsset } from "@/components/game/asset";
import { RarityBadge, Reveal } from "@/components/game/primitives";
import { Button } from "@/components/ui/button";
import { eggBySlug, petsForEgg } from "@/lib/api";
import type { Rarity } from "@/types/game";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/eggs/$slug")({
  loader: ({ params }) => {
    const entry = eggBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Egg not found | Bubble" }, { name: "robots", content: "noindex" }],
      };
    }
    const e = loaderData.entry;
    return {
      meta: pageMeta(
        `${e.name} | Eggs | Bubble`,
        `${e.name} is one of the three eggs in Bubble, the Discord fishing MMORPG. Hatch it for a companion.`,
      ),
      links: [{ rel: "canonical", href: `/eggs/${params.slug}` }],
    };
  },
  component: EggDetail,
});

function EggDetail() {
  const { entry: e } = Route.useLoaderData();

  const hatchable = petsForEgg(e);
  const dropWeights = e.dropWeights as Record<string, number>;
  const totalWeight = Object.values(dropWeights).reduce((sum, w) => sum + w, 0);
  const rarityRows = Object.entries(dropWeights).sort(([, a], [, b]) => b - a);

  const capitalize = (r: string) => (r.charAt(0).toUpperCase() + r.slice(1)) as Rarity;

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/eggs" className="hover:text-foreground">
          Eggs
        </Link>
        <span aria-hidden> / </span>
        <span className="text-foreground">{e.name}</span>
      </nav>

      <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr]">
        <Reveal>
          <GameAsset src={e.image} alt={e.name} className="from-treasure/20" />
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">{e.name}</h1>
          <p className="mt-4 text-muted-foreground">
            Hatch this egg in Discord for a chance at one of its {hatchable.length} possible companions.
          </p>

          <dl className="mt-6 grid gap-2 sm:grid-cols-2">
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Price</dt>
              <dd className="font-semibold">{e.price.toLocaleString()} {e.currency}</dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Base Hatch XP</dt>
              <dd className="font-semibold">{e.baseHatchXp.toLocaleString()}</dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Hatch XP / Player Level</dt>
              <dd className="font-semibold">+{e.hatchXpPerLevel}</dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">In-game id</dt>
              <dd className="font-semibold">{e.key}</dd>
            </div>
          </dl>
          <p className="mt-2 text-xs text-muted-foreground">
            Total XP needed to hatch scales with your player level: base hatch XP + (hatch XP per level ×
            your level).
          </p>

          <h2 className="mt-8 font-display text-lg font-bold">Hatch Odds by Rarity</h2>
          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
            {rarityRows.map(([rarity, weight]) => (
              <div key={rarity} className="glass flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                <dt><RarityBadge rarity={capitalize(rarity)} /></dt>
                <dd className="font-semibold">{((weight / totalWeight) * 100).toFixed(1)}%</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-8 font-display text-lg font-bold">Possible Companions</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {hatchable.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/pets/$slug"
                  params={{ slug: p.slug }}
                  className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm hover:text-primary"
                >
                  {p.name}
                  <RarityBadge rarity={p.rarity} className="ml-1" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 glass rounded-xl px-4 py-4 text-sm">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{e.description}</p>
          </div>

          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/eggs">Back to eggs</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
