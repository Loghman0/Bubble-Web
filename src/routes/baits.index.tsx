import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { BaitCard } from "@/components/game/cards";
import { PageHeader, Reveal, WorldTransition } from "@/components/game/primitives";
import { WorldSelect } from "@/components/game/world-select";
import { baits } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/baits/")({
  head: () => ({
    meta: pageMeta(
      "Baits — Bubble Bait Catalogue",
      "Every Bubble bait across every prestige World, from beginner worms to master-tier magical dust.",
    ),
    links: [{ rel: "canonical", href: "/baits" }],
  }),
  component: BaitsIndex,
});

const tiers = ["Beginner", "Journeyman", "Master"] as const;

function BaitsIndex() {
  const [worldId, setWorldId] = useState(0);

  const worldBaits = useMemo(() => baits.filter((b) => (b.worldId ?? 0) === worldId), [worldId]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Gear"
        title="Baits"
        description={`${worldBaits.length} baits in this World, from a simple worm to magical dust.`}
      />

      <div className="mt-8 flex justify-center">
        <WorldSelect value={worldId} onChange={setWorldId} />
      </div>

      <WorldTransition worldKey={worldId}>
        {tiers.map((tier) => {
          const tierBaits = worldBaits.filter((b) => b.tier === tier);
          if (tierBaits.length === 0) return null;
          return (
            <div key={tier} className="mt-12">
              <h2 className="font-display text-xl font-bold">{tier}</h2>
              <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {tierBaits.map((b, i) => (
                  <li key={b.slug}>
                    <Reveal delay={i * 0.04}>
                      <BaitCard bait={b} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </WorldTransition>
    </section>
  );
}
