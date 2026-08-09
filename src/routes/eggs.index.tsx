import { createFileRoute } from "@tanstack/react-router";

import { EggCard } from "@/components/game/cards";
import { PageHeader, Reveal } from "@/components/game/primitives";
import { eggs, pets } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/eggs/")({
  head: () => ({
    meta: pageMeta(
      "Eggs — Bubble Hatching Guide",
      "The three Bubble eggs — Common, Rare and Ancient — and the companions they hatch.",
    ),
    links: [{ rel: "canonical", href: "/eggs" }],
  }),
  component: EggsIndex,
});

function EggsIndex() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Hatching"
        title="Eggs"
        description={`Three eggs, ${pets.length} possible companions.`}
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {eggs.map((e, i) => (
          <li key={e.slug}>
            <Reveal delay={i * 0.06}>
              <EggCard egg={e} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
