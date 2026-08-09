import { createFileRoute } from "@tanstack/react-router";

import { OceanBackdrop } from "@/components/effects/OceanBackdrop";
import { EnchantCard } from "@/components/game/cards";
import { PageHeader, Reveal } from "@/components/game/primitives";
import { enchants } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/enchants/")({
  head: () => ({
    meta: pageMeta(
      "Enchants — Bubble Rod Enchanting Guide",
      `All ${enchants.length} rod enchants in Bubble, the Discord fishing MMORPG, with their exact bonus at level I, II and III.`,
    ),
    links: [{ rel: "canonical", href: "/enchants" }],
  }),
  component: EnchantsPage,
});


function EnchantsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20">
        <OceanBackdrop bubbles={16} />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <PageHeader
            eyebrow="Rod Upgrades"
            title="Enchants"
            description={`${enchants.length} enchants for Journeyman and Master rods. Each one has 3 levels — open an enchant to see every level's book and bonus.`}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {enchants.map((e, i) => (
            <li key={e.slug}>
              <Reveal delay={i * 0.04}>
                <EnchantCard enchant={e} />
              </Reveal>
            </li>
          ))}
        </ul>


        <p className="mt-10 text-sm text-muted-foreground">
          Enchants aren&apos;t sold in the shop — find them in treasure chests, guild raid rewards,
          high-level quest rewards, or trade Ancient Museum Coins for one at the Museum Shop. A rod
          can hold as many enchants at once as it has enchant slots, and never the same enchant
          twice.
        </p>
      </section>
    </>
  );
}
