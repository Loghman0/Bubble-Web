import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Anchor, ArrowRight, BookOpen, Egg as EggIcon, Fish, PawPrint, Ship, Sparkles, Wand2 } from "lucide-react";

import { OceanBackdrop } from "@/components/effects/OceanBackdrop";
import { RarityBadge, Reveal, StatCard } from "@/components/game/primitives";
import { DISCORD_URL, INVITE_URL } from "@/components/layout/Navbar";

import { Button } from "@/components/ui/button";
import { fishCountByRarity, rosterCounts } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "Bubble — Discord Fishing MMORPG",
      `Bubble is a fishing MMORPG that lives inside Discord: ${rosterCounts.fish} species across ${rosterCounts.rarities} rarity tiers, ${rosterCounts.rods} rods, ${rosterCounts.baits} baits, ${rosterCounts.pets} pets, ${rosterCounts.eggs} eggs and ${rosterCounts.enchants} enchants.`,
    ),
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Fish,
    title: "Fish Encyclopedia",
    body: `${rosterCounts.fish} species across ${rosterCounts.rarities} rarity tiers, from Common to Divine.`,
    to: "/fish" as const,
  },
  {
    icon: Anchor,
    title: "Rods",
    body: `${rosterCounts.rods} rods split into Beginner, Journeyman and Master tiers.`,
    to: "/rods" as const,
  },
  {
    icon: Sparkles,
    title: "Baits",
    body: `${rosterCounts.baits} baits, from a simple worm to magical dust.`,
    to: "/baits" as const,
  },
  {
    icon: PawPrint,
    title: "Pets",
    body: `${rosterCounts.pets} companions to collect and bring along on every cast.`,
    to: "/pets" as const,
  },
  {
    icon: EggIcon,
    title: "Eggs",
    body: `${rosterCounts.eggs} eggs: Common, Rare and Ancient.`,
    to: "/eggs" as const,
  },
  {
    icon: Wand2,
    title: "Enchants",
    body: `${rosterCounts.enchants} rod enchants, each with 3 upgradeable levels.`,
    to: "/enchants" as const,
  },
  {
    icon: BookOpen,
    title: "Wiki",
    body: "Short, factual guides to every system in the game.",
    to: "/wiki" as const,
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <OceanBackdrop bubbles={30} />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-gradient-to-br from-lagoon to-primary shadow-[var(--shadow-glow)]"
          >
            <Ship className="size-10 text-primary-foreground" aria-hidden />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 font-display text-4xl font-extrabold text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient-ocean">Bubble</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl"
          >
            A cozy fishing MMORPG that lives inside your Discord server. Cast a line, upgrade your
            gear, hatch a companion, and complete the collection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Button asChild size="lg">
              <a href={INVITE_URL} target="_blank" rel="noreferrer">
                Invite Bubble <ArrowRight className="size-4" aria-hidden />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/fish">
                <Fish className="size-4" aria-hidden /> Fish Encyclopedia
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/wiki">
                <BookOpen className="size-4" aria-hidden /> Wiki
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" aria-labelledby="systems">
        <Reveal>
          <h2 id="systems" className="font-display text-3xl font-bold sm:text-4xl">
            Everything in the game, catalogued
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A read-only reference for Bubble's content. Browse it here, play it in Discord.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={i * 0.04}>
                <Link
                  to={f.to}
                  className="glass block h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-lagoon/30 to-transparent text-primary">
                    <f.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Roster counts */}
      <section
        className="relative isolate overflow-hidden border-y border-border/60 py-20"
        aria-labelledby="roster"
      >
        <OceanBackdrop bubbles={14} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 id="roster" className="font-display text-3xl font-bold sm:text-4xl">
              The collection
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {[
              { label: "Fish species", value: rosterCounts.fish },
              { label: "Rods", value: rosterCounts.rods },
              { label: "Baits", value: rosterCounts.baits },
              { label: "Pets", value: rosterCounts.pets },
              { label: "Eggs", value: rosterCounts.eggs },
              { label: "Enchants", value: rosterCounts.enchants },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <StatCard label={s.label} value={s.value} />
              </Reveal>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {fishCountByRarity.map((r) => (
              <li key={r.rarity} className="glass flex items-center gap-2 rounded-full py-1.5 pr-4 pl-2">
                <RarityBadge rarity={r.rarity} />
                <span className="text-sm tabular-nums text-muted-foreground">
                  {r.count} species
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl border border-border p-10 text-center sm:p-16">
            <OceanBackdrop bubbles={18} />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
                Your server is one cast away
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Free to add, free to play. Bring Bubble to your Discord and start the collection.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <a href={INVITE_URL} target="_blank" rel="noreferrer">
                    Invite Bubble <ArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                    Join our Discord
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
