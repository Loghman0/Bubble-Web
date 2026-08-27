import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Reveal } from "@/components/game/primitives";
import { CatchFeed } from "@/components/live/catch-feed";
import { LeaderboardTable } from "@/components/live/leaderboard-table";

import { LiveStatsStrip } from "@/components/live/stats-strip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: pageMeta(
      "Live Leaderboard — Bubble",
      "Real-time Bubble leaderboard: top anglers, the latest and rarest catches server-wide, and every Discord server running Bubble.",
    ),
    links: [{ rel: "canonical", href: "/leaderboard" }],
  }),
  component: LeaderboardPage,
});

function LeaderboardPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Live"
        title="Leaderboard & Live Stats"
        description="Real player data, straight from the bot. Updates automatically — no need to refresh."
      />

      <Reveal className="mt-10">
        <LiveStatsStrip />
      </Reveal>

      <Reveal delay={0.05} className="mt-8">
        <Tabs defaultValue="leaderboard">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3">
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="recent">Latest Catches</TabsTrigger>
            <TabsTrigger value="rarest">Rarest Catches</TabsTrigger>
          </TabsList>
          <TabsContent value="leaderboard" className="mt-6">
            <LeaderboardTable />
          </TabsContent>
          <TabsContent value="recent" className="mt-6">
            <CatchFeed mode="recent" />
          </TabsContent>
          <TabsContent value="rarest" className="mt-6">
            <CatchFeed mode="rarest" />
          </TabsContent>

        </Tabs>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <p className="text-center text-sm text-muted-foreground">
          Only your Discord username and the server a catch happened in are ever shown here — never
          your Discord ID. Run <code className="rounded bg-muted px-1.5 py-0.5">.privacy hide</code>{" "}
          in Discord to opt out any time. See the{" "}
          <a href="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </a>{" "}
          for details.
        </p>
      </Reveal>
    </section>
  );
}
