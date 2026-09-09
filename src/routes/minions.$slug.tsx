import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { GameAsset } from "@/components/game/asset";
import { Reveal } from "@/components/game/primitives";
import { Button } from "@/components/ui/button";
import { minionBySlug } from "@/lib/api";
import { pageMeta } from "@/lib/seo";
import { MAX_MINION_LEVEL, MINION_CAPACITY_MILESTONES } from "@/data/minions";

export const Route = createFileRoute("/minions/$slug")({
    loader: ({ params }) => {
        const entry = minionBySlug(params.slug);
        if (!entry) throw notFound();
        return { entry };
    },
    head: ({ loaderData, params }) => {
        if (!loaderData) return { meta: [{ title: "Minion not found | Bubble" }, { name: "robots", content: "noindex" }] };
        const m = loaderData.entry;
        return {
            meta: pageMeta(
                `${m.name} | Minions | Bubble`,
                `${m.name} — ${m.tagline}. Fishes ${m.baseAttemptsPerMinute} times per minute, with a ${(m.legendaryChance * 100).toFixed(1)}% legendary chance per attempt.`,
            ),
            links: [{ rel: "canonical", href: `/minions/${params.slug}` }],
        };
    },
    component: MinionDetail,
});

function MinionDetail() {
    const { entry: m } = Route.useLoaderData();

    const pct = (n: number) => `${(n * 100).toFixed(2)}%`;

    return (
        <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
                <Link to="/minions" className="hover:text-foreground">Minions</Link>
                <span aria-hidden> / </span>
                <span className="text-foreground">{m.name}</span>
            </nav>

            <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr]">
                <Reveal>
                    <GameAsset src={m.image} alt={m.name} />
                </Reveal>
                <Reveal delay={0.08}>
                    <h1 className="font-display text-3xl font-bold sm:text-4xl">{m.name}</h1>
                    <p className="mt-1 text-muted-foreground">{m.tagline}</p>

                    <dl className="mt-6 grid gap-2 sm:grid-cols-2">
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Price</dt>
                            <dd className="font-semibold">{m.price.toLocaleString()} {m.currency === "ancientTokens" ? "Ancient Tokens" : m.currency}</dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Attempts / min (base)</dt>
                            <dd className="font-semibold">{m.baseAttemptsPerMinute}</dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Attempts / min (max lv.{MAX_MINION_LEVEL})</dt>
                            <dd className="font-semibold">
                                {(m.baseAttemptsPerMinute + m.attemptsGrowthPerLevel * MAX_MINION_LEVEL).toFixed(2)}
                            </dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Base backpack capacity</dt>
                            <dd className="font-semibold">{m.baseBackpackCapacity} units</dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Legendary chance / cast</dt>
                            <dd className="font-semibold">{pct(m.legendaryChance)}</dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Mythic chance / cast</dt>
                            <dd className="font-semibold">{pct(m.mythicChance)}</dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Rod durability efficiency</dt>
                            <dd className="font-semibold">{m.rodDurabilityEfficiency}× slower drain</dd>
                        </div>
                        <div className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm">
                            <dt className="text-muted-foreground">Max level</dt>
                            <dd className="font-semibold">{MAX_MINION_LEVEL}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 glass rounded-xl px-4 py-4 text-sm">
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground">{m.description}</p>
                    </div>

                    <div className="mt-6 glass rounded-xl px-4 py-4 text-sm">
                        <h3 className="font-semibold mb-3">Capacity Milestones</h3>
                        <ul className="space-y-1">
                            {MINION_CAPACITY_MILESTONES.map((ms) => (
                                <li key={ms.level} className="flex justify-between text-muted-foreground">
                                    <span>Level {ms.level}</span>
                                    <span className="font-semibold text-foreground">+{ms.bonus} units ({m.baseBackpackCapacity + ms.bonus} total)</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 flex gap-3">
                        <Button asChild variant="outline">
                            <Link to="/minions">Back to minions</Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </article>
    );
}
