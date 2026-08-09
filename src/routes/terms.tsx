import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/game/primitives";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: pageMeta(
      "Terms of Service — Bubble",
      "The rules for using Bubble: acceptable use, account handling, virtual items, availability, and liability.",
    ),
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections: [string, string][] = [
  ["Acceptance", "By adding Bubble to a server or running any Bubble command, you agree to these terms and to Discord's own Terms of Service."],
  ["Acceptable use", "Do not automate commands, exploit bugs, use alternate accounts to farm rewards, or harass other players. Report exploits in the support server instead of using them."],
  ["Accounts and progress", "Progress belongs to a Discord account, not a server. We may reset progress obtained through exploits or automation."],
  ["Virtual items", "Coins, gems, ancient coins, fish, pets, and rods have no real-world value, cannot be exchanged for money, and may be rebalanced or removed."],
  ["Availability", "Bubble is provided as-is with no uptime guarantee. Features may change, pause, or be retired."],
  ["Termination", "We may restrict access to Bubble for any account that breaks these terms."],
  ["Liability", "To the maximum extent permitted by law, Bubble and its maintainers are not liable for lost progress or damages arising from use of the bot."],
  ["Contact", "Questions about these terms: hello@bubble.gg or the support server."],
];

function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Legal" title="Terms of Service" description="Last updated 28 July 2026." />
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
