import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Reveal } from "@/components/game/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: pageMeta(
      "FAQ — Bubble Questions Answered",
      "Answers about getting started, fishing, pets, the museum, guilds, eggs, the economy, and enchants in Bubble.",
    ),
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.flatMap((g) =>
            g.items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PageHeader eyebrow="Support" title="Frequently asked questions" />
      <div className="mt-12 space-y-10">
        {faq.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.03}>
            <h2 className="font-display text-xl font-bold">{group.category}</h2>
            <Accordion type="single" collapsible className="mt-3">
              {group.items.map((item, i) => (
                <AccordionItem key={item.q} value={`${group.category}-${i}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
