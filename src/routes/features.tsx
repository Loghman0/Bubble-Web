import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Coins, Egg, Fish, PawPrint, Sparkles, Wand2 } from "lucide-react";

import { OceanBackdrop } from "@/components/effects/OceanBackdrop";
import { GameAsset } from "@/components/game/asset";
import { PageHeader, RarityBadge, Reveal } from "@/components/game/primitives";
import { baits, currencies, eggs, enchants, fishCountByRarity, pets, rods } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: pageMeta(
      "Features — Bubble Fishing MMORPG",
      `Bubble's content at a glance: nine rarity tiers, 107 fish species, ${rods.length} rods, ${baits.length} baits, ${pets.length} pets, ${eggs.length} eggs, ${enchants.length} enchants and three currencies.`,
    ),
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: FeaturesPage,
});

const systems = [
  {
    icon: Fish,
    title: "Fishing",
    body: "Cast your line in Discord and work through 107 species spread over nine rarity tiers, from Common all the way to Divine.",
  },
  {
    icon: Anchor,
    title: "Rods",
    body: "Nine rods in three brackets: Beginner (Wood, Bamboo, Iron), Journeyman (Steel, Reinforced, Gold) and Master (Coral, Dragon, Cosmic).",
  },
  {
    icon: Sparkles,
    title: "Baits",
    body: "Twelve baits, from worms and crickets up to Starlight Dust and Magical Dust.",
  },
  {
    icon: PawPrint,
    title: "Pets",
    body: `${pets.length} companions to collect, including the Otter, Kraken Hatchling, Dragon and Void Wisp.`,
  },
  {
    icon: Egg,
    title: "Eggs",
    body: "Three eggs — Common, Rare and Ancient — each a route to a new companion.",
  },
  {
    icon: Wand2,
    title: "Enchants",
    body: `${enchants.length} rod enchants, from Lucky Catch to Double Hook, each with three upgradeable levels.`,
  },
  {
    icon: Coins,
    title: "Currencies",
    body: "Bubble Coins for everyday fishing, Bubble Gems for premium purchases, and the rare Ancient Coin.",
  },
];

function FeaturesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20">
        <OceanBackdrop bubbles={18} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <PageHeader
            eyebrow="Gameplay"
            title="A full fishing MMORPG in a chat window"
            description="Everything Bubble ships with today, laid out in one place."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.04}>
                <article className="glass h-full rounded-2xl p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-lagoon/30 to-transparent text-primary">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-labelledby="rarities">
        <Reveal>
          <h2 id="rarities" className="font-display text-2xl font-bold sm:text-3xl">
            Rarity tiers
          </h2>
          <p className="mt-2 text-muted-foreground">
            Nine tiers, and the number of species in each.
          </p>
        </Reveal>
        <ul className="mt-6 flex flex-wrap gap-3">
          {fishCountByRarity.map((r) => (
            <li key={r.rarity} className="glass flex items-center gap-2 rounded-full py-1.5 pr-4 pl-2">
              <RarityBadge rarity={r.rarity} />
              <span className="text-sm tabular-nums text-muted-foreground">{r.count} species</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" aria-labelledby="currencies">
        <Reveal>
          <h2 id="currencies" className="font-display text-2xl font-bold sm:text-3xl">
            Currencies
          </h2>
        </Reveal>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {currencies.map((c, i) => (
            <li key={c.key}>
              <Reveal delay={i * 0.05}>
                <div className="glass flex items-center gap-4 rounded-2xl p-5">
                  <div className="w-16 shrink-0">
                    <GameAsset src={c.image} alt={c.name} fallback="🪙" />
                  </div>
                  <span className="font-display font-bold">{c.name}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted-foreground">
          {rods.length} rods · {baits.length} baits · {pets.length} pets · {eggs.length} eggs ·{" "}
          {enchants.length} enchants
        </p>
      </section>
    </>
  );
}
