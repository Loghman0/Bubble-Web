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
      "Pets | Bubble Companion Index",
      `All ${pets.length} Bubble companions across every prestige World, from the Parrot and Otter to the Kraken Hatchling, Dragon and Void Wisp.`,
    ),
    links: [{ rel: "canonical", href: "/pets" }],
  }),
  component: PetsIndex,
});

function PetsIndex() {
  const [worldId, setWorldId] = useState(0);

  const worldPets = useMemo(() => {
    const list = pets.filter((p) => (p.worldId ?? 0) === worldId);
    return [...list].sort(
      (a, b) =>
        RARITIES.indexOf(a.rarity) - RARITIES.indexOf(b.rarity) || a.name.localeCompare(b.name),
    );
  }, [worldId]);

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
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {worldPets.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 0.02}>
                <PetCard pet={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </WorldTransition>
    </section>
  );
}
