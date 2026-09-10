import { createFileRoute, Link, notFound, useCanGoBack, useRouter } from "@tanstack/react-router";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

import { GameAsset } from "@/components/game/asset";
import { RarityBadge, Reveal, WorldBadge } from "@/components/game/primitives";
import { Button } from "@/components/ui/button";
import { fishBySlug } from "@/lib/api";
import {
  baitForFish,
  boostingWorldEvents,
  catchConditions,
  catchSummary,
  discoveryConditionText,
  requiredWorldEvents,
  rodForFish,
} from "@/lib/catch-conditions";
import { formatCondition, formatRange } from "@/lib/game-format";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/fish/$slug")({
  loader: ({ params }) => {
    const entry = fishBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Species not found | Bubble" }, { name: "robots", content: "noindex" }],
      };
    }
    const f = loaderData.entry;
    const gates = catchConditions(f)
      .filter((c) => c.required)
      .map((c) => c.value.toLowerCase());
    const conditionText = gates.length ? gates.join(", ") : "no special conditions";
    return {
      meta: pageMeta(
        `How to catch the ${f.name} | Bubble Fish Encyclopedia`,
        `${f.name} is a ${f.rarity} species in Bubble. Requirements: ${conditionText}. Full species data: season, time of day, weather, bait, rod level, weight, length and museum value.`,
      ),
      links: [{ rel: "canonical", href: `/fish/${params.slug}` }],
    };
  },
  component: FishDetail,
});

function FloatingArt({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 200, damping: 20, mass: 0.6 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20, mass: 0.6 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateY.set((x - 0.5) * 14);
    rotateX.set((0.5 - y) * 14);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        rotateX: reduced ? 0 : rotateX,
        rotateY: reduced ? 0 : rotateY,
        transformPerspective: 800,
      }}
    >
      {children}
    </motion.div>
  );
}

function FishDetail() {
  const { entry: f } = Route.useLoaderData();
  const router = useRouter();
  // If the user arrived here by clicking a card in the encyclopedia, the list's
  // world/filter/page selections live in that page's URL (see fish.index.tsx,
  // which writes every change via navigate({ replace: true })). Going back
  // through browser history returns to that exact URL, so selections are kept
  // instead of resetting to the default World ("The Shallows"). Only fall back
  // to a plain link to "/fish" when there's no in-app history to return to
  // (e.g. someone opened this species page directly from a shared link).
  const canGoBack = useCanGoBack();

  const bait = baitForFish(f);
  const rod = rodForFish(f);
  const conditions = catchConditions(f);
  const events = requiredWorldEvents(f);
  const boosts = boostingWorldEvents(f);
  const requiredCount = conditions.filter((c) => c.required).length;
  const byKind = (kind: string) => conditions.find((c) => c.kind === kind);

  const rows: [string, React.ReactNode][] = [
    ["Rarity", f.rarity],
    ["Selling Price", f.price ? `${f.price.toLocaleString()} coins` : "—"],
    ["Weight", formatRange(f.weight, "kg")],
    ["Length", formatRange(f.length, "cm")],
    ["Season", byKind("season")?.value ?? formatCondition(f.season)],
    ["Weather", byKind("weather")?.value ?? formatCondition(f.weather)],
    ["Active Time", byKind("time")?.value ?? formatCondition(f.activeTime)],
    [
      "Required Bait",
      bait ? (
        <Link to="/baits/$slug" params={{ slug: bait.slug }} className="text-primary hover:underline">
          {bait.name}
        </Link>
      ) : (
        (byKind("bait")?.value ?? "Any bait")
      ),
    ],
    ["Difficulty", `${f.difficulty} / 10`],
    [
      "Required Rod Level",
      rod ? (
        <Link to="/rods/$slug" params={{ slug: rod.slug }} className="text-primary hover:underline">
          {f.requiredRodLevel} ({rod.name}+)
        </Link>
      ) : (
        f.requiredRodLevel
      ),
    ],
    ["Fishing XP", f.xp.toLocaleString()],
    ["Museum Value", f.museumValue.toLocaleString()],
    ["In-game id", f.key],
  ];

  if (events.length) {
    rows.splice(7, 0, [
      "World Event",
      <Link to="/conditions" hash="world-events" className="text-primary hover:underline">
        {events.map((e) => e.label).join(" or ")}
      </Link>,
    ]);
  }
  if (typeof f.minLuck === "number") rows.push(["Minimum Luck", `${f.minLuck}+`]);
  if (typeof f.minCombo === "number") rows.push(["Minimum Combo", `${f.minCombo}x`]);


  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        {canGoBack ? (
          <button
            type="button"
            onClick={() => router.history.back()}
            className="cursor-pointer hover:text-foreground"
          >
            Fish Encyclopedia
          </button>
        ) : (
          <Link to="/fish" className="hover:text-foreground">
            Fish Encyclopedia
          </Link>
        )}
        <span aria-hidden> / </span>
        <span className="text-foreground">{f.name}</span>
      </nav>

      <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr]">
        <Reveal>
          <FloatingArt>
            <GameAsset src={f.image} alt={f.name} rarity={f.rarity} />
          </FloatingArt>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-bold sm:text-4xl">{f.name}</h1>
            <RarityBadge rarity={f.rarity} />
            <WorldBadge worldId={f.worldId} />
          </div>

          <p className="mt-4 text-muted-foreground">{f.description}</p>

          {f.hidden ? (
            <div className="mt-4 glass rounded-xl border border-primary/30 px-4 py-3 text-sm">
              <span className="font-semibold text-primary">Hidden species. </span>
              <span className="text-muted-foreground">
                stays out of the public encyclopedia in-game until someone discovers it.
                {f.discoveryCondition ? ` Unlock condition: ${discoveryConditionText(f)}` : ""}
              </span>
            </div>
          ) : null}

          {/* -------------------------------------------------- stats */}
          <h2 className="mt-8 font-display text-lg font-bold">Species data</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {requiredCount === 0
              ? "No special conditions. This one bites in any season, any weather, at any hour."
              : catchSummary(f)}
          </p>
          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
            {rows.map(([k, v], i) => (
              <Reveal
                key={k}
                delay={0.04 * i}
                className="glass flex justify-between gap-4 rounded-xl px-4 py-3 text-sm"
              >
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </Reveal>
            ))}
          </dl>

          <p className="mt-3 text-xs text-muted-foreground">
            {boosts.length
              ? `${boosts.map((e) => e.label).join(" and ")} raises the odds of ${f.rarity} fish. `
              : ""}
            World events change the odds rather than blocking a catch, except where a hidden
            species names one directly. See the{" "}
            <Link to="/conditions" className="text-primary underline">
              conditions guide
            </Link>{" "}
            for how seasons, weather and events rotate.
          </p>


          <div className="mt-8 flex flex-wrap gap-3">
            {canGoBack ? (
              <Button variant="outline" onClick={() => router.history.back()}>
                Back to encyclopedia
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link to="/fish">Back to encyclopedia</Link>
              </Button>
            )}
            <Button asChild variant="ghost">
              <Link to="/conditions">Conditions guide</Link>
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
