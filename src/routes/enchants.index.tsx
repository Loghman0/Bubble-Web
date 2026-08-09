import { createFileRoute, Link } from "@tanstack/react-router";

import { OceanBackdrop } from "@/components/effects/OceanBackdrop";
import { GameAsset } from "@/components/game/asset";
import { PageHeader, Reveal } from "@/components/game/primitives";
import { enchants } from "@/lib/api";
import { formatPercent } from "@/lib/game-format";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/enchants/")({
  head: () => ({
    meta: pageMeta(
      "Enchants — Bubble Rod Enchanting Guide",
      `All ${enchants.length} rod enchants in Bubble, the Discord fishing MMORPG, with their exact bonus at level I, II and III.`,
    ),
    links: [{ rel: "canonical", href: "/enchants" }],
  }),
  component: EnchantsPage,
});

const LEVEL_LABELS = ["I", "II", "III"] as const;

function EnchantsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20">
        <OceanBackdrop bubbles={16} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <PageHeader
            eyebrow="Rod Upgrades"
            title="Enchants"
            description={`${enchants.length} enchants for Journeyman and Master rods. Each one has 3 levels — open an enchant to see every level's book and bonus.`}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enchants.map((e, i) => (
            <li key={e.slug}>
              <Reveal delay={i * 0.04}>
                <Link
                  to="/enchants/$slug"
                  params={{ slug: e.slug }}
                  className="glass block h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <div className="mx-auto w-28">
                    <GameAsset src={e.image} alt={`${e.name} enchantment book`} fallback={e.emoji} />
                  </div>
                  <h2 className="mt-4 text-center font-display text-lg font-bold">{e.name}</h2>
                  <p className="mt-2 text-center text-sm text-muted-foreground">{e.description}</p>
                  <dl className="mt-4 grid grid-cols-3 gap-2">
                    {e.valuePerLevel.map((v, li) => (
                      <div key={li} className="rounded-xl bg-muted/40 px-2 py-2 text-center">
                        <dt className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                          {LEVEL_LABELS[li]}
                        </dt>
                        <dd className="mt-0.5 font-display text-sm font-bold text-primary">
                          {formatPercent(v)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted-foreground">
          Enchants aren&apos;t sold in the shop — find them in treasure chests, guild raid rewards,
          high-level quest rewards, or trade Ancient Museum Coins for one at the Museum Shop. A rod
          can hold as many enchants at once as it has enchant slots, and never the same enchant
          twice.
        </p>
      </section>
    </>
  );
}
