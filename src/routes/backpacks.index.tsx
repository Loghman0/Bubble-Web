import { createFileRoute } from "@tanstack/react-router";

import { BackpackCard } from "@/components/game/cards";
import { EmptyState, PageHeader, Reveal } from "@/components/game/primitives";
import { backpacks } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/backpacks/")({
    head: () => ({
        meta: pageMeta(
            "Backpacks | Bubble Storage Guide",
            "Every backpack tier in Bubble — compare capacity units and gem costs to find the right upgrade for your fishing style.",
        ),
        links: [{ rel: "canonical", href: "/backpacks" }],
    }),
    component: BackpacksIndex,
});

function BackpacksIndex() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <PageHeader
                eyebrow="Gear"
                title="Backpacks"
                description={`${backpacks.length} backpack tiers. Capacity is measured in stacked fish units shared across all species — upgrade to carry more before selling.`}
            />

            {backpacks.length === 0 ? (
                <div className="mt-8">
                    <EmptyState title="No backpacks found" description="No backpack data available." />
                </div>
            ) : (
                <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {backpacks.map((b, i) => (
                        <li key={b.slug}>
                            <Reveal delay={i * 0.06}>
                                <BackpackCard backpack={b} />
                            </Reveal>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
