import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { GameAsset } from "@/components/game/asset";
import { Reveal } from "@/components/game/primitives";
import { Button } from "@/components/ui/button";
import { baitBySlug } from "@/lib/api";
import { formatPercent } from "@/lib/game-format";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/baits/$slug")({
    loader: ({ params }) => {
        const entry = baitBySlug(params.slug);
        if (!entry) throw notFound();
        return { entry };
    },
    head: ({ loaderData, params }) => {
        if (!loaderData) {
            return {
                meta: [{ title: "Bait not found — Bubble" }, { name: "robots", content: "noindex" }],
            };
        }
        const b = loaderData.entry;
        return {
            meta: pageMeta(
                `${b.name} — Baits — Bubble`,
                `${b.name} is a fishing bait in Bubble, the Discord fishing MMORPG.`,
            ),
            links: [{ rel: "canonical", href: `/baits/${params.slug}` }],
        };
    },
    component: BaitDetail,
});

function BaitDetail() {
    const { entry: b } = Route.useLoaderData();

    const mult = (m: number) => (m === 1 ? "No effect" : formatPercent(m - 1));

    const rows: [string, string][] = [
        ["Tier", b.tier],
        ["Price", b.price > 0 ? `${b.price.toLocaleString()} ${b.currency}` : "Free"],
        ["Rare+ Chance", mult(b.rareChanceMult)],
        ["Legendary+ Chance", mult(b.legendaryChanceMult)],
        ["Fish Weight", mult(b.weightMult)],
        ["Treasure Chance", b.treasureChanceAdd > 0 ? formatPercent(b.treasureChanceAdd) : "No effect"],
        ["In-game id", b.key],
    ];

    return (
        <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
                <Link to="/baits" className="hover:text-foreground">
                    Baits
                </Link>
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
                        {rows.map(([k, v]) => (
                            <div key={k} className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                                <dt className="text-muted-foreground">{k}</dt>
                                <dd className="font-semibold">{v}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="mt-6 glass rounded-xl px-4 py-4 text-sm">
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground">{b.description}</p>
                    </div>

                    <div className="mt-8 flex gap-3">
                        <Button asChild variant="outline">
                            <Link to="/baits">Back to baits</Link>
                        </Button>
                        <Button asChild variant="ghost">
                            <Link to="/rods">Browse rods</Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </article>
    );
}
