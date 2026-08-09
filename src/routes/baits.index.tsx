import { createFileRoute } from "@tanstack/react-router";

import { BaitCard } from "@/components/game/cards";
import { PageHeader, Reveal } from "@/components/game/primitives";
import { baits } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/baits/")({
  head: () => ({
    meta: pageMeta(
      "Baits — Bubble Bait Catalogue",
      "All twelve Bubble baits, grouped from beginner worms to master-tier magical dust.",
    ),
    links: [{ rel: "canonical", href: "/baits" }],
  }),
  component: BaitsIndex,
});

const tiers = ["Beginner", "Journeyman", "Master"] as const;

function BaitsIndex() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Gear"
        title="Baits"
        description={`${baits.length} baits, from a simple worm to magical dust.`}
      />
      {tiers.map((tier) => (
        <div key={tier} className="mt-12">
          <h2 className="font-display text-xl font-bold">{tier}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {baits
              .filter((b) => b.tier === tier)
              .map((b, i) => (
                <li key={b.slug}>
                  <Reveal delay={i * 0.04}>
                    <BaitCard bait={b} />
                  </Reveal>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
