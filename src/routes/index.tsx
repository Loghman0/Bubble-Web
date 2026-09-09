import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Anchor,
  ArrowRight,
  BookOpen,
  Egg as EggIcon,
  Fish,
  Lock,
  MessagesSquare,
  Package,
  PawPrint,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";

import { DeepHorizon } from "@/components/effects/DeepHorizon";
import { OceanBackdrop } from "@/components/effects/OceanBackdrop";
import { DiscordCastingEmbed, DiscordCatchEmbed } from "@/components/game/discord-embed";
import { Magnetic, RarityBadge, Reveal, StatCard } from "@/components/game/primitives";
import { DISCORD_URL, INVITE_URL } from "@/components/layout/Navbar";

import { Button } from "@/components/ui/button";
import { fishCountByRarity, rosterCounts } from "@/lib/api";
import { WORLDS } from "@/data/worlds";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "Bubble | Discord Fishing MMORPG",
      `Bubble is a fishing MMORPG that lives inside Discord: ${rosterCounts.fish} species across ${rosterCounts.rarities} rarity tiers, ${rosterCounts.rods} rods, ${rosterCounts.baits} baits, ${rosterCounts.pets} pets, ${rosterCounts.eggs} eggs and ${rosterCounts.enchants} enchants.`,
    ),
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const steps = [
  {
    number: "01",
    title: "Cast a line",
    body: "One command, right in your server. No app to install, no account to make.",
  },
  {
    number: "02",
    title: "Build your gear",
    body: "Trade up rods and bait as you go. Better gear means rarer bites.",
  },
  {
    number: "03",
    title: "Fill the dex",
    body: "Hundreds of species across nine rarities, from Common to Divine.",
  },
];

const catalogLinks = [
  { icon: Fish, title: "Fish Encyclopedia", to: "/fish" as const, count: rosterCounts.fish, unit: "species" },
  { icon: Anchor, title: "Rods", to: "/rods" as const, count: rosterCounts.rods, unit: "rods" },
  { icon: Sparkles, title: "Baits", to: "/baits" as const, count: rosterCounts.baits, unit: "baits" },
  { icon: PawPrint, title: "Pets", to: "/pets" as const, count: rosterCounts.pets, unit: "companions" },
  { icon: EggIcon, title: "Eggs", to: "/eggs" as const, count: rosterCounts.eggs, unit: "eggs" },
  { icon: Wand2, title: "Enchants", to: "/enchants" as const, count: rosterCounts.enchants, unit: "enchants" },
  { icon: Package, title: "Backpacks", to: "/backpacks" as const, count: rosterCounts.backpacks, unit: "tiers" },
  { icon: Zap, title: "Minions", to: "/minions" as const, count: rosterCounts.minions, unit: "minions" },
];

function Home() {
  return (
    <>
      {/* Hero. Asymmetric split, not centered. Copy left, atmosphere right/behind. */}
      <section className="relative isolate overflow-hidden">
        <DeepHorizon />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-24 sm:px-6 sm:pt-20 sm:pb-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 font-display text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-6xl"
            >
              Cast a line without
              <br />
              <span className="text-gradient-ocean">leaving Discord</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-md text-lg text-pretty text-muted-foreground"
            >
              A cozy fishing MMORPG your whole server can play together. Upgrade your gear, hatch
              a companion, and chase deep-sea rarities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <Button asChild size="lg">
                  <a href={INVITE_URL} target="_blank" rel="noreferrer">
                    Invite Bubble <ArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic strength={10}>
                <Button asChild size="lg" variant="outline">
                  <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                    <MessagesSquare className="size-4" aria-hidden /> Join the Discord
                  </a>
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right column: an actual Discord catch message — this is the product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden w-full max-w-md lg:block"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-lagoon/20 to-treasure/10 blur-2xl" />
            <DiscordCatchEmbed
              fishName="Silent Deep Horror"
              description="You never hear it approach. You only feel the line go still."
              rarity="Celestial"
              weight="118.76 kg"
              length="216.6 cm"
              image="/assets/fish/silent_deep_horror.png"
              time="Today at 19:00"
              detail={{
                xp: "+14,085 XP",
                critical: true,
                levelUp: "491 → 496 · 🪙 24,950 · +3x Worm",
              }}
              className="rotate-[0.5deg]"
            />
          </motion.div>
        </div>
      </section>

      {/* How it plays. 3-step strip, distinct from the card-grid family below */}
      <section className="border-y border-border/60" aria-labelledby="how-it-plays">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 id="how-it-plays" className="sr-only">
            How it plays
          </h2>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
            <div className="grid gap-8 sm:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.number} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <span className="font-display text-3xl font-bold text-primary/40 tabular-nums">
                      {s.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.24} className="lg:w-64">
              <div className="glass grain h-full rounded-3xl p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-foam/80 uppercase">
                  Live catalog
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className="font-display text-3xl font-bold">{rosterCounts.fish}</p>
                    <p className="text-xs text-muted-foreground">Fish species</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold">{rosterCounts.rarities}</p>
                    <p className="text-xs text-muted-foreground">Rarity tiers</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {fishCountByRarity.map((r) => (
                    <RarityBadge key={r.rarity} rarity={r.rarity} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Two real messages from a real server, cast to catch */}
      <section className="relative isolate overflow-hidden border-y border-border/60 py-20" aria-labelledby="in-action">
        <OceanBackdrop bubbles={10} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              In your server
            </p>
            <h2 id="in-action" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Cast, wait, reel it in
            </h2>
            <p className="mt-3 text-muted-foreground">
              One slash command posts the whole exchange to your channel — everyone sees the cast
              and the catch as it happens.
            </p>
          </Reveal>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <Reveal delay={0.05} className="flex justify-center">
              <DiscordCastingEmbed rodName="Coral Rod" time="Today at 15:06" />
            </Reveal>
            <Reveal delay={0.12} className="flex justify-center">
              <DiscordCatchEmbed
                fishName="Prism Serpent"
                description='Bends light around itself. Half the "sightings" are guesses.'
                rarity="Legendary"
                weight="33.08 kg"
                length="130.7 cm"
                image="/assets/fish/prism_serpent.png"
                time="Today at 15:06"
                detail={{
                  xp: "+2,388 XP",
                  combo: "🔥 Combo streak: 2x (10% bonus)",
                  critical: true,
                  levelUp: "496 → 497 · 🪙 5,020",
                }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Catalog bento. Asymmetric, not 7 equal tiles */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" aria-labelledby="systems">
        <Reveal className="max-w-xl">
          <h2 id="systems" className="font-display text-3xl font-bold sm:text-4xl">
            Everything in the game, catalogued
          </h2>
          <p className="mt-3 text-muted-foreground">
            A read-only reference for Bubble's content. Browse it here, play it in Discord.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[13rem]">
          {catalogLinks.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.05}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
            >
              <Link
                to={f.to}
                className={`glass group flex h-full flex-col justify-between rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5 ${i === 0 ? "bg-gradient-to-br from-lagoon/20 to-transparent" : ""
                  }`}
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-lagoon/30 to-transparent text-primary">
                  <f.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{f.count}</span> {f.unit}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={catalogLinks.length * 0.05}>
            <Link
              to="/wiki"
              className="glass group flex h-full flex-col justify-between rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-treasure/30 to-transparent text-accent">
                <BookOpen className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">Wiki</h3>
                <p className="mt-1 text-sm text-muted-foreground">Every system, explained.</p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Worlds. Full-bleed showcase, a layout family used nowhere else on the page */}
      <section className="relative isolate overflow-hidden border-y border-border/60 py-20">
        <OceanBackdrop bubbles={16} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Prestige
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Master a world, then dive deeper
            </h2>
            <p className="mt-3 text-muted-foreground">
              Complete a world's dex and prestige into the next one. Fresh fish, fresh rods, same
              server.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {WORLDS.map((w, i) => (
              <Reveal key={w.id} delay={i * 0.08}>
                {w.comingSoon ? (
                  /* Mystery / undiscovered world card */
                  <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-7 backdrop-blur-sm">
                    <div
                      className={`absolute -top-10 -right-10 size-40 rounded-full bg-gradient-to-br opacity-10 blur-2xl ${w.accent}`}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.015)_2px,rgba(255,255,255,0.015)_4px)]" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-white/30 uppercase">
                          {w.tagline}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-bold tracking-widest text-white/20 select-none">
                          {w.name}
                        </h3>
                        <p className="mt-3 max-w-xs text-sm italic text-white/25">
                          {w.mysteryName}
                        </p>
                      </div>
                      <Lock className="mt-1 size-5 shrink-0 text-white/15" aria-hidden />
                    </div>
                    <p className="relative mt-4 text-[10px] font-mono tracking-widest text-white/15 uppercase">
                      Depth record: unknown
                    </p>
                  </div>
                ) : (
                  /* Known / unlocked world card */
                  <div
                    className={`glass grain relative overflow-hidden rounded-3xl p-7 ${w.id === 0 ? "" : "border-neon/25"
                      }`}
                  >
                    <div
                      className={`absolute -top-10 -right-10 size-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl ${w.accent}`}
                    />
                    <p
                      className={`relative text-xs font-semibold tracking-[0.16em] uppercase ${w.id === 0 ? "text-lagoon" : "text-neon"
                        }`}
                    >
                      {w.tagline}
                    </p>
                    <h3 className="relative mt-2 font-display text-2xl font-bold">{w.name}</h3>
                    <p className="relative mt-2 max-w-xs text-sm text-muted-foreground">
                      {w.description}
                    </p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collection stats */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" aria-labelledby="roster">
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
              <span className="text-sm tabular-nums text-muted-foreground">{r.count} species</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA. Full-bleed dark band, visually distinct from the hero's split composition */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 surface-abyss" />
        <OceanBackdrop bubbles={12} />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
              Your server is one cast away
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Free to add, free to play. Bring Bubble to your Discord and start the collection.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <Button asChild size="lg">
                  <a href={INVITE_URL} target="_blank" rel="noreferrer">
                    Invite Bubble <ArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic strength={10}>
                <Button asChild size="lg" variant="outline">
                  <Link to="/wiki">
                    <BookOpen className="size-4" aria-hidden /> Read the wiki
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
