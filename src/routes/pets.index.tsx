import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PetCard } from "@/components/game/cards";
import { PageHeader, Reveal, WorldTransition } from "@/components/game/primitives";
import { WorldSelect } from "@/components/game/world-select";
import { pets } from "@/lib/api";
import { pageMeta } from "@/lib/seo";
import { RARITIES } from "@/types/game";

export const Route = createFileRoute("/pets/")({
  head: () => ({
    meta: pageMeta(
      "Pets — Bubble Companion Index",
      `All ${pets.length} Bubble companions across every prestige World, from the Parrot and Otter to the Kraken Hatchling, Dragon and Void Wisp.`,
    ),
    links: [{ rel: "canonical", href: "/pets" }],
  }),
  component: PetsIndex,
});

function PetsIndex() {
  const [worldId, setWorldId] = useState(0);

  const worldPets = useMemo(() => pets.filter((p) => (p.worldId ?? 0) === worldId), [worldId]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Companions"
        title="Pets"
        description={`${worldPets.length} companions in this World, hatched from the Common, Rare and Ancient eggs.`}
      />

      <div className="mt-8 flex justify-center">
        <WorldSelect value={worldId} onChange={setWorldId} />
      </div>

      <WorldTransition worldKey={worldId}>
        {RARITIES.map((rarity) => {
          const rarityPets = worldPets.filter((p) => p.rarity === rarity);
          if (rarityPets.length === 0) return null;
          return (
            <div key={rarity} className="mt-12">
              <h2 className="font-display text-xl font-bold">{rarity}</h2>
              <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {rarityPets.map((p, i) => (
                  <li key={p.slug}>
                    <Reveal delay={i * 0.03}>
                      <PetCard pet={p} />
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
