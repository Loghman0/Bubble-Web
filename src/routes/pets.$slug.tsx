import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { GameAsset } from "@/components/game/asset";
import { RarityBadge, Reveal } from "@/components/game/primitives";
import { Button } from "@/components/ui/button";
import { eggs, petBySlug, pets } from "@/lib/api";
import { formatFlat, formatPercent, titleCase } from "@/lib/game-format";
import { pageMeta } from "@/lib/seo";

/** Skill categories whose skillValue is a flat stat point rather than a percentage. */
const FLAT_SKILL_CATEGORIES = new Set(["luck", "repair"]);

export const Route = createFileRoute("/pets/$slug")({
  loader: ({ params }) => {
    const entry = petBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Pet not found — Bubble" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.entry;
    return {
      meta: pageMeta(
        `${p.name} — Pets — Bubble`,
        `${p.name} is one of the ${pets.length} companions you can hatch in Bubble, the Discord fishing MMORPG.`,
      ),
      links: [{ rel: "canonical", href: `/pets/${params.slug}` }],
    };
  },
  component: PetDetail,
});

function PetDetail() {
  const { entry: p } = Route.useLoaderData();

  const sourceEggs = eggs.filter((e) => e.eligiblePetIds.includes(p.key));
  const skillValueDisplay = FLAT_SKILL_CATEGORIES.has(p.skillCategory)
    ? formatFlat(p.skillValue)
    : formatPercent(p.skillValue);

  const rows: [string, React.ReactNode][] = [
    ["Rarity", <RarityBadge key="rarity" rarity={p.rarity} />],
    ["Unlock Level", p.unlockLevel],
    ["Skill", titleCase(p.skill)],
    ["Skill Value", skillValueDisplay],
    [
      "Hatches From",
      sourceEggs.length ? (
        <span className="flex flex-wrap justify-end gap-2">
          {sourceEggs.map((e) => (
            <Link key={e.key} to="/eggs/$slug" params={{ slug: e.slug }} className="text-primary hover:underline">
              {e.name}
            </Link>
          ))}
        </span>
      ) : (
        "—"
      ),
    ],
    ["In-game id", p.key],
  ];

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/pets" className="hover:text-foreground">
          Pets
        </Link>
        <span aria-hidden> / </span>
        <span className="text-foreground">{p.name}</span>
      </nav>

      <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr]">
        <Reveal>
          <GameAsset src={p.image} alt={p.name} fallback={p.emoji || "🐾"} />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-bold sm:text-4xl">
              {p.emoji} {p.name}
            </h1>
          </div>

          <dl className="mt-6 grid gap-2 sm:grid-cols-2">
            {rows.map(([k, v]) => (
              <div key={k} className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 glass rounded-xl px-4 py-4 text-sm">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{p.description}</p>
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild variant="outline">
              <Link to="/pets">Back to pets</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/eggs">View eggs</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
