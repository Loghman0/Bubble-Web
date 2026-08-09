import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { GameAsset } from "@/components/game/asset";
import { Reveal } from "@/components/game/primitives";
import { enchantBySlug, enchants, rods } from "@/lib/api";
import { formatPercent, titleCase } from "@/lib/game-format";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/enchants/$slug")({
  loader: ({ params }) => {
    const entry = enchantBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Enchant not found — Bubble" }, { name: "robots", content: "noindex" }],
      };
    }
    const e = loaderData.entry;
    return {
      meta: pageMeta(
        `${e.name} — Enchants — Bubble`,
        `${e.name}: ${e.description} Exact bonus at level I, II and III in Bubble, the Discord fishing MMORPG.`,
      ),
      links: [{ rel: "canonical", href: `/enchants/${params.slug}` }],
    };
  },
  component: EnchantDetail,
});

const LEVEL_LABELS = ["I", "II", "III"] as const;

function EnchantDetail() {
  const { entry: e } = Route.useLoaderData();
  const index = enchants.findIndex((x) => x.slug === e.slug);
  const prev = index > 0 ? enchants[index - 1] : undefined;
  const next = index < enchants.length - 1 ? enchants[index + 1] : undefined;
  const compatibleRods = rods.filter((r) => (r.enchantSlots ?? 0) > 0);

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/enchants" className="hover:text-foreground">
          Enchants
        </Link>
        <span aria-hidden> / </span>
        <span className="text-foreground">{e.name}</span>
      </nav>

      <Reveal>
        <div className="mt-6 grid gap-8 sm:grid-cols-[160px_1fr] sm:items-start">
          <div className="mx-auto w-40 sm:mx-0">
            <GameAsset src={e.image} alt={`${e.name} enchantment book`} />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold sm:text-4xl">{e.name}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{e.description}</p>
            <dl className="mt-5 flex flex-wrap gap-2 text-sm">
              <div className="glass rounded-full px-3 py-1">
                <dt className="inline text-muted-foreground">Affects: </dt>
                <dd className="inline font-medium">{titleCase(e.appliesTo)}</dd>
              </div>
              <div className="glass rounded-full px-3 py-1">
                <dt className="inline text-muted-foreground">Levels: </dt>
                <dd className="inline font-medium">3</dd>
              </div>
              <div className="glass rounded-full px-3 py-1">
                <dt className="inline text-muted-foreground">Max bonus: </dt>
                <dd className="inline font-medium text-primary">
                  {formatPercent(e.valuePerLevel[2])}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-12 font-display text-xl font-bold">Levels</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {(e.levelImages as string[]).map((img: string, li: number) => (
            <li key={li} className="glass rounded-2xl p-5 text-center">
              <div className="mx-auto w-24">
                <GameAsset
                  src={img}
                  alt={`${e.name} level ${LEVEL_LABELS[li]} book`}
                />
              </div>
              <p className="mt-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Level {LEVEL_LABELS[li]}
              </p>
              <p className="mt-1 font-display text-xl font-bold text-primary">
                {formatPercent(e.valuePerLevel[li]!)}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-12 font-display text-xl font-bold">How to get it</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Treasure chests found while fishing.</li>
          <li>Guild raid rewards.</li>
          <li>High-level quest rewards.</li>
          <li>The Museum Shop, in exchange for Ancient Museum Coins.</li>
        </ul>

        <h2 className="mt-10 font-display text-xl font-bold">Slot rules</h2>
        <p className="mt-3 text-muted-foreground">
          Enchants apply to a specific owned rod, not to your account — switching rods means
          starting over on that rod. A rod can hold as many enchants as it has enchant slots, and
          the same enchant can never be applied twice to one rod.
        </p>

        <h3 className="mt-6 font-display text-base font-bold">Rods with enchant slots</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {compatibleRods.map((r) => (
            <li key={r.slug}>
              <Link
                to="/rods/$slug"
                params={{ slug: r.slug }}
                className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm hover:text-primary"
              >
                {r.name}
                <span className="text-xs text-muted-foreground">{r.enchantSlots} slots</span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <nav
        aria-label="Enchant navigation"
        className="mt-14 flex flex-wrap justify-between gap-3 border-t border-border/60 pt-6 text-sm"
      >
        {prev ? (
          <Link
            to="/enchants/$slug"
            params={{ slug: prev.slug }}
            className="text-muted-foreground hover:text-foreground"
          >
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/enchants/$slug"
            params={{ slug: next.slug }}
            className="text-muted-foreground hover:text-foreground"
          >
            {next.name} →
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
