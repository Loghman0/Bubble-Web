import { createFileRoute } from "@tanstack/react-router";

import { PetCard } from "@/components/game/cards";
import { PageHeader, Reveal } from "@/components/game/primitives";
import { pets } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/pets/")({
  head: () => ({
    meta: pageMeta(
      "Pets — Bubble Companion Index",
      `All ${pets.length} Bubble companions, from the Parrot and Otter to the Kraken Hatchling, Dragon and Void Wisp.`,
    ),
    links: [{ rel: "canonical", href: "/pets" }],
  }),
  component: PetsIndex,
});

function PetsIndex() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Companions"
        title="Pets"
        description={`${pets.length} companions, hatched from the Common, Rare and Ancient eggs.`}
      />
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pets.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={i * 0.03}>
              <PetCard pet={p} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
