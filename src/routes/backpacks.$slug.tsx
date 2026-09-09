import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { GameAsset } from "@/components/game/asset";
import { Reveal } from "@/components/game/primitives";
import { Button } from "@/components/ui/button";
import { backpackBySlug } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/backpacks/$slug")({
    loader: ({ params }) => {
        const entry = backpackBySlug(params.slug);
        if (!entry) throw notFound();
        return { entry };
    },
    head: ({ loaderData, params }) => {
        if (!loaderData) return { meta: [{ title: "Backpack not found | Bubble" }, { name: "robots", content: "noindex" }] };
        const b = loaderData.entry;
        return {
            meta: pageMeta(
                `${b.name} | Backpacks | Bubble`,
                `${b.name} holds ${b.capacityUnits} stacked capacity units — a ${b.price > 0 ? b.price.toLocaleString() + " " + b.currency : "free starter"} backpack in Bubble.`,
            ),
            links: [{ rel: "canonical", href: `/backpacks/${params.slug}` }],
        };
    },
    component: BackpackDetail,
});

function BackpackDetail() {
    const { entry: b } = Route.useLoaderData();

    return (
        <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
                <Link to="/backpacks" className="hover:text-foreground">Backpacks</Link>
                <span aria-hidden> / </span>
                <span className="text-foreground">{b.name}</span>
            </nav>

            <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr]">
                <Reveal>
                    <GameAsset src={b.image} alt={b.name} />
                </Reveal>
                <Reveal delay={0.08}>
                    <h1 className="font-display text-3xl font-bold sm:text-4xl">{b.name}</h1>

                    <dl className="mt-6 grid gap-2 sm:grid-cols-2">
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Tier</dt>
                            <dd className="font-semibold">{b.tier}</dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Capacity</dt>
                            <dd className="font-semibold">{b.capacityUnits} units</dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Price</dt>
                            <dd className="font-semibold">
                                {b.price > 0 ? `${b.price.toLocaleString()} ${b.currency}` : "Free (starter)"}
                            </dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Internal ID</dt>
                            <dd className="font-semibold font-mono text-xs">{b.key}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 glass rounded-xl px-4 py-4 text-sm">
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground">{b.description}</p>
                    </div>

                    <div className="mt-6 glass rounded-xl px-4 py-4 text-sm">
                        <h3 className="font-semibold mb-2">About Backpack Capacity</h3>
                        <p className="text-muted-foreground">
                            Capacity is measured in <strong>stacked fish units</strong> — a shared pool across every species. Each fish you catch consumes units based on its stack weight. When the pool is full, you cannot fish until you sell or donate your catch.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-3">
                        <Button asChild variant="outline">
                            <Link to="/backpacks">Back to backpacks</Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </article>
    );
}
