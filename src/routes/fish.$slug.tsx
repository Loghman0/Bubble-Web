import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { GameAsset } from "@/components/game/asset";
import { RarityBadge, Reveal } from "@/components/game/primitives";
import { Button } from "@/components/ui/button";
import { baitBySlug, fishBySlug } from "@/lib/api";
import { formatCondition, formatRange, titleCase } from "@/lib/game-format";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/fish/$slug")({
  loader: ({ params }) => {
    const entry = fishBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Species not found — Bubble" }, { name: "robots", content: "noindex" }],
      };
    }
    const f = loaderData.entry;
    return {
      meta: pageMeta(
        `${f.name} — Fish Encyclopedia — Bubble`,
        `${f.name} is a ${f.rarity} species in Bubble, the Discord fishing MMORPG.`,
      ),
      links: [{ rel: "canonical", href: `/fish/${params.slug}` }],
    };
  },
  component: FishDetail,
});

function FishDetail() {
  const { entry: f } = Route.useLoaderData();

  const bait = f.requiredBait ? baitBySlug(f.requiredBait.replace(/_/g, "-")) : null;

  const rows: [string, React.ReactNode][] = [
    ["Rarity", f.rarity],
    ["Habitat", titleCase(f.habitat)],
    ["Selling Price", f.price ? `${f.price.toLocaleString()} coins` : "—"],
    ["Weight", formatRange(f.weight, "kg")],
    ["Length", formatRange(f.length, "cm")],
    ["Season", formatCondition(f.season)],
    ["Weather", formatCondition(f.weather)],
    ["Active Time", formatCondition(f.activeTime)],
    ["Difficulty", `${f.difficulty} / 10`],
    ["Required Rod Level", f.requiredRodLevel],
    [
      "Required Bait",
      bait ? (
        <Link to="/baits/$slug" params={{ slug: bait.slug }} className="text-primary hover:underline">
          {bait.name}
        </Link>
      ) : (
        "None"
      ),
    ],
    ["Fishing XP", f.xp.toLocaleString()],
    ["Museum Value", f.museumValue.toLocaleString()],
    ...(typeof f.minLuck === "number" ? ([["Minimum Luck", f.minLuck]] as [string, React.ReactNode][]) : []),
    ...(typeof f.minCombo === "number"
      ? ([["Minimum Combo Streak", `${f.minCombo}x`]] as [string, React.ReactNode][])
      : []),
    ["In-game id", f.key],
  ];

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/fish" className="hover:text-foreground">
          Fish Encyclopedia
        </Link>
        <span aria-hidden> / </span>
        <span className="text-foreground">{f.name}</span>
      </nav>

      <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr]">
        <Reveal>
          <GameAsset src={f.image} alt={f.name} rarity={f.rarity} />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-bold sm:text-4xl">{f.name}</h1>
            <RarityBadge rarity={f.rarity} />
          </div>

          {f.hidden && f.discoveryCondition ? (
            <div className="mt-4 glass rounded-xl border border-primary/30 px-4 py-3 text-sm">
              <span className="font-semibold text-primary">Hidden species — </span>
              <span className="text-muted-foreground">
                stays out of the public encyclopedia until first discovered. {f.discoveryCondition}
              </span>
            </div>
          ) : null}

          <h2 className="mt-8 font-display text-lg font-bold">Details</h2>
          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
            {rows.map(([k, v]) => (
              <div key={k} className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 glass rounded-xl px-4 py-4 text-sm">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{f.description}</p>
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild variant="outline">
              <Link to="/fish">Back to encyclopedia</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/rods">Browse rods</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
