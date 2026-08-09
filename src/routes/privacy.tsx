import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/game/primitives";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: pageMeta(
      "Privacy Policy — Bubble",
      "What data Bubble stores, why it is stored, how long it is kept, and how to request deletion.",
    ),
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections: [string, string][] = [
  [
    "What we store",
    "Bubble stores your Discord user ID, server IDs where you play, and your game progress: currencies, catches, museum donations, pets, rods, quests, and guild membership.",
  ],
  [
    "What we do not store",
    "Bubble does not store message content, direct messages, email addresses, payment details, or IP addresses.",
  ],
  [
    "Why we store it",
    "Game state must persist between commands. Data is never sold, rented, or shared with advertisers.",
  ],
  [
    "Public leaderboard & catch feed",
    "This website shows a live leaderboard and a feed of notable (Rare-or-better) catches, plus a directory of servers running Bubble. These only ever show your Discord username and the name of the server a catch happened in — never your Discord user ID, and never anything from outside the game. Run `.privacy hide` in Discord at any time to remove yourself from these public pages; this doesn't affect your progress or anything else about your account. Server owners can similarly ask to have their server left off the server directory.",
  ],
  [
    "Retention",
    "Progress is kept while your account is active. Accounts inactive for 24 months are purged automatically. Entries in the public catch feed age out automatically after 30 days regardless of account status.",
  ],
  [
    "Deletion requests",
    "Ask in the support server or email hello@bubble.gg from an address you can verify. Deletion is permanent and removes all progress, including any entries tied to you on the public leaderboard and catch feed.",
  ],
  [
    "Third parties",
    "Bubble runs on standard cloud hosting and communicates only with Discord's API. No analytics vendors receive your game data. The public leaderboard and catch feed are read-only and served from bubble.gg only.",
  ],
  [
    "Children",
    "Bubble follows Discord's minimum age requirements for your region.",
  ],
  [
    "Changes",
    "Material changes to this policy are announced in the support server before they take effect.",
  ],
];

function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Last updated 9 August 2026." />
      <div className="mt-12 space-y-8">
        {sections.map(([h, b]) => (
          <section key={h}>
            <h2 className="font-display text-xl font-bold">{h}</h2>
            <p className="mt-2 text-muted-foreground">{b}</p>
          </section>
        ))}
      </div>
    </section>
  );
}
