import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { RodCard } from "@/components/game/cards";
import { PageHeader, Reveal, WorldTransition } from "@/components/game/primitives";
import { WorldSelect } from "@/components/game/world-select";
import { rods, rodTiers } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/rods/")({
  head: () => ({
    meta: pageMeta(
      "Rods — Bubble Gear Catalogue",
      "Every Bubble fishing rod across every prestige World, grouped into Beginner, Journeyman and Master tiers.",
    ),
    links: [{ rel: "canonical", href: "/rods" }],
  }),
  component: RodsIndex,
});

function RodsIndex() {
  const [worldId, setWorldId] = useState(0);

  const worldRods = useMemo(() => rods.filter((r) => (r.worldId ?? 0) === worldId), [worldId]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Gear"
        title="Rods"
        description={`${worldRods.length} rods across three progression tiers in this World. Every rod has its own page.`}
      />

      <div className="mt-8 flex justify-center">
        <WorldSelect value={worldId} onChange={setWorldId} />
      </div>

      <WorldTransition worldKey={worldId}>
        {rodTiers.map((tier) => {
          const tierRods = worldRods.filter((r) => r.tier === tier);
          if (tierRods.length === 0) return null;
          return (
            <div key={tier} className="mt-12">
              <h2 className="font-display text-xl font-bold">{tier}</h2>
              <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {tierRods.map((r, i) => (
                  <li key={r.slug}>
                    <Reveal delay={i * 0.04}>
                      <RodCard rod={r} />
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
