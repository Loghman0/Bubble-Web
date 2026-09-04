import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { GameAsset } from "@/components/game/asset";
import { Reveal, WorldBadge } from "@/components/game/primitives";
import { Button } from "@/components/ui/button";
import { rodBySlug } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/rods/$slug")({
  loader: ({ params }) => {
    const entry = rodBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Rod not found | Bubble" }, { name: "robots", content: "noindex" }],
      };
    }
    const r = loaderData.entry;
    return {
      meta: pageMeta(
        `${r.name} | Rods | Bubble`,
        `${r.name} is a ${r.tier}-tier fishing rod in Bubble, the Discord fishing MMORPG.`,
      ),
      links: [{ rel: "canonical", href: `/rods/${params.slug}` }],
    };
  },
  component: RodDetail,
});

function RodDetail() {
  const { entry: r } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/rods" className="hover:text-foreground">
          Rods
        </Link>
        <span aria-hidden> / </span>
        <span className="text-foreground">{r.name}</span>
      </nav>

      <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr]">
        <Reveal>
          <GameAsset src={r.image} alt={r.name} />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-bold sm:text-4xl">{r.name}</h1>
            <WorldBadge worldId={r.worldId} />
          </div>

          <dl className="mt-6 grid gap-2 sm:grid-cols-2">
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Tier</dt>
              <dd className="font-semibold">{r.tier}</dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Required Level</dt>
              <dd className="font-semibold">{r.requiredLevel}</dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">In-game id</dt>
              <dd className="font-semibold">{r.key}</dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Price</dt>
              <dd className="font-semibold">
                {r.price > 0 ? `${r.price.toLocaleString()} ${r.currency}` : "Free"}
              </dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Luck</dt>
              <dd className="font-semibold">+{r.luck}</dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Power</dt>
              <dd className="font-semibold">{r.power}</dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Durability</dt>
              <dd className="font-semibold">{r.durability}</dd>
            </div>
            <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
              <dt className="text-muted-foreground">Enchant Slots</dt>
              <dd className="font-semibold">{r.enchantSlots > 0 ? r.enchantSlots : "None"}</dd>
            </div>
          </dl>

          <div className="mt-6 glass rounded-xl px-4 py-4 text-sm">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{r.description}</p>
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild variant="outline">
              <Link to="/rods">Back to rods</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/baits">Browse baits</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
