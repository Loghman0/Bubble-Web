import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";

import { PageHeader, Reveal } from "@/components/game/primitives";
import { SEASONS, TIMES_OF_DAY, WEATHER, type ConditionDef } from "@/data/conditions";
import { WORLD_EVENTS } from "@/data/world-events";
import { fish } from "@/lib/api";
import { fishSeasons, fishTimes, fishWeather, requiredWorldEvents } from "@/lib/catch-conditions";
import { pageMeta } from "@/lib/seo";
import type { Fish } from "@/types/game";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: pageMeta(
      "Catch Conditions | Seasons, Weather & World Events | Bubble",
      "How Bubble's seasons, day/night cycle, weather table and world events gate every catch, plus the exact species each condition unlocks.",
    ),
    links: [{ rel: "canonical", href: "/conditions" }],
  }),
  component: ConditionsPage,
});

function FishLinks({ list }: { list: Fish[] }) {
  if (list.length === 0) {
    return <p className="mt-3 text-sm text-muted-foreground">No species are locked to this one.</p>;
  }
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {list.map((f) => (
        <li key={f.slug}>
          <Link
            to="/fish/$slug"
            params={{ slug: f.slug }}
            className="inline-flex rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {f.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ConditionCard({
  def,
  meta,
  list,
}: {
  def: ConditionDef;
  meta?: string;
  list: Fish[];
}) {
  return (
    <article className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm">
      <div className="flex items-baseline gap-2">
        <span aria-hidden className="text-xl">
          {def.emoji}
        </span>
        <h3 className="font-display text-lg font-bold">{def.name}</h3>
        <span className="ml-auto text-xs tabular-nums text-muted-foreground">
          {list.length} species
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{def.description}</p>
      {meta ? <p className="mt-1 text-xs text-muted-foreground/80">{meta}</p> : null}
      <FishLinks list={list} />
    </article>
  );
}

function ConditionsPage() {
  const bySeason = useMemo(
    () => SEASONS.map((s) => ({ def: s, list: fish.filter((f) => fishSeasons(f).includes(s.id)) })),
    [],
  );
  const byTime = useMemo(
    () =>
      TIMES_OF_DAY.map((t) => ({ def: t, list: fish.filter((f) => fishTimes(f).includes(t.id)) })),
    [],
  );
  const byWeather = useMemo(
    () => WEATHER.map((w) => ({ def: w, list: fish.filter((f) => fishWeather(f).includes(w.id)) })),
    [],
  );
  const byEvent = useMemo(
    () =>
      WORLD_EVENTS.filter((e) => e.id !== "none").map((e) => ({
        event: e,
        list: fish.filter((f) => requiredWorldEvents(f).some((r) => r.id === e.id)),
      })),
    [],
  );

  const totalWeatherWeight = WEATHER.reduce((sum, w) => sum + w.weight, 0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Reference"
        title="Catch conditions"
        description="Season, time of day, weather and world events decide what is even willing to bite. Here is every condition in the game, and exactly which species it unlocks."
      />

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border/60 bg-muted/30 p-5 text-sm text-muted-foreground">
        <h2 className="font-display text-base font-bold text-foreground">How eligibility works</h2>
        <p className="mt-2">
          On every cast the game checks your world's current season, time of day and weather
          against each species, then your rod level, equipped bait, Luck and combo streak. A fish
          only enters the pool when all of its requirements pass. World events do not gate
          catches, they change the odds, except where a hidden species' discovery note names one.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold">Seasons</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          The world calendar rotates through all four seasons automatically, roughly every 15
          minutes per season (a full spring→winter cycle takes about an hour).
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {bySeason.map((s, i) => (
            <Reveal key={s.def.id} delay={i * 0.04}>
              <ConditionCard def={s.def} list={s.list} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold">Time of day</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          The day/night cycle runs continuously on a real-time clock (about 5 minutes per phase,
          20 minutes for a full loop). Night is the single biggest gate in the game.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {byTime.map((t, i) => (
            <Reveal key={t.def.id} delay={i * 0.04}>
              <ConditionCard def={t.def} list={t.list} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold">Weather</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Weather rotates on a weighted roll every 10 minutes and never repeats the same type
          twice in a row. Percentages below are the chance of each type coming up next.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {byWeather.map((w, i) => (
            <Reveal key={w.def.id} delay={i * 0.03}>
              <ConditionCard
                def={w.def}
                meta={`${((w.def.weight / totalWeatherWeight) * 100).toFixed(1)}% chance on rotation · treasure +${(w.def.treasureChanceAdd * 100).toFixed(1)}% · monsters +${(w.def.monsterChanceAdd * 100).toFixed(1)}%`}
                list={w.list}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold">World events</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          These six events exist in the game's data and a few hidden late-game species name one
          explicitly in their discovery note (shown below), but there's currently no live rotation
          making one active at a time. Treat this table as a reference for what those discovery
          notes mean, not as something to check with{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">/world</code> today.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {byEvent.map((e, i) => (
            <Reveal key={e.event.id} delay={i * 0.03}>
              <ConditionCard
                def={{
                  id: e.event.id,
                  name: e.event.label,
                  emoji: e.event.emoji,
                  description: e.event.description,
                }}
                meta={e.event.boost}
                list={e.list}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
