import { createFileRoute } from "@tanstack/react-router";

import { MinionCard } from "@/components/game/cards";
import { EmptyState, PageHeader, Reveal } from "@/components/game/primitives";
import { minions } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/minions/")({
    head: () => ({
        meta: pageMeta(
            "Minions | Bubble Fishing Companions",
            "Every Minion in Bubble — compare fishing rates, legendary chances, capacity bonuses and rod efficiency to pick the right companion.",
        ),
        links: [{ rel: "canonical", href: "/minions" }],
    }),
    component: MinionsIndex,
});

function MinionsIndex() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <PageHeader
                eyebrow="Companions"
                title="Minions"
                description={`${minions.length} minions available from the Museum Shop. Each fishes automatically while you play — level them up to improve their rates.`}
            />

            {minions.length === 0 ? (
                <div className="mt-8">
                    <EmptyState title="No minions found" description="No minion data available." />
                </div>
            ) : (
                <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {minions.map((m, i) => (
                        <li key={m.slug}>
                            <Reveal delay={i * 0.06}>
                                <MinionCard minion={m} />
                            </Reveal>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
