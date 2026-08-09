import { createFileRoute } from "@tanstack/react-router";
import { Wand2 } from "lucide-react";

import { OceanBackdrop } from "@/components/effects/OceanBackdrop";
import { PageHeader, Reveal } from "@/components/game/primitives";
import { enchants } from "@/lib/api";
import { formatPercent } from "@/lib/game-format";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/enchants")({
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
            description={`${enchants.length} enchants for Journeyman and Master rods. Each one has 3 levels — reroll in the shop if you don't like what you get.`}
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2">
          {enchants.map((e, i) => (
            <li key={e.slug}>
              <Reveal delay={i * 0.04}>
                <article className="glass h-full rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lagoon/30 to-transparent text-2xl">
                      {e.emoji || <Wand2 className="size-5 text-primary" aria-hidden />}
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-bold">{e.name}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{e.description}</p>
                    </div>
                  </div>

                  <dl className="mt-5 grid grid-cols-3 gap-2">
                    {e.valuePerLevel.map((v, li) => (
                      <div key={li} className="glass rounded-xl px-3 py-2 text-center">
                        <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                          Level {LEVEL_LABELS[li]}
                        </dt>
                        <dd className="mt-1 font-display text-base font-bold text-primary">
                          {formatPercent(v)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted-foreground">
          Enchants aren't sold in the shop — find them in treasure chests, guild raid rewards,
          high-level quest rewards, or trade Ancient Museum Coins for one at the Museum Shop. A rod
          can hold as many enchants at once as it has enchant slots, and never the same enchant
          twice.
        </p>
      </section>
    </>
  );
}
