import { createFileRoute } from "@tanstack/react-router";

import { RodCard } from "@/components/game/cards";
import { PageHeader, Reveal } from "@/components/game/primitives";
import { rods, rodTiers } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/rods/")({
  head: () => ({
    meta: pageMeta(
      "Rods — Bubble Gear Catalogue",
      "All nine Bubble fishing rods, grouped into Beginner, Journeyman and Master tiers.",
    ),
    links: [{ rel: "canonical", href: "/rods" }],
  }),
  component: RodsIndex,
});

function RodsIndex() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Gear"
        title="Rods"
        description="Nine rods across three progression tiers. Every rod has its own page."
      />
      {rodTiers.map((tier) => (
        <div key={tier} className="mt-12">
          <h2 className="font-display text-xl font-bold">{tier}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {rods
              .filter((r) => r.tier === tier)
              .map((r, i) => (
                <li key={r.slug}>
                  <Reveal delay={i * 0.04}>
                    <RodCard rod={r} />
                  </Reveal>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
