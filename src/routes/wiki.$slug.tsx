import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Reveal } from "@/components/game/primitives";
import { wikiArticles, wikiBySlug } from "@/lib/api";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/wiki/$slug")({
  loader: ({ params }) => {
    const entry = wikiBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Bubble" }, { name: "robots", content: "noindex" }],
      };
    }
    const a = loaderData.entry;
    return {
      meta: pageMeta(`${a.title} — Bubble Wiki`, a.summary),
      links: [{ rel: "canonical", href: `/wiki/${params.slug}` }],
    };
  },
  component: WikiArticlePage,
});

const slugifyHeading = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Renders `inline code` spans from the plain-text article body. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <p className="mt-2 leading-relaxed text-muted-foreground">
      {parts.map((part, i) =>
        part.startsWith("`") && part.endsWith("`") && part.length > 2 ? (
          <code
            key={i}
            className="rounded-md bg-muted/60 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

function WikiArticlePage() {
  const { entry: a } = Route.useLoaderData();
  const index = wikiArticles.findIndex((x) => x.slug === a.slug);
  const prev = index > 0 ? wikiArticles[index - 1] : undefined;
  const next = index < wikiArticles.length - 1 ? wikiArticles[index + 1] : undefined;
  const related = (a.related ?? [])
    .map((slug: string) => wikiArticles.find((x) => x.slug === slug))
    .filter(Boolean) as typeof wikiArticles;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1fr_220px]">
        <article className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <Link to="/wiki" className="hover:text-foreground">
              Wiki
            </Link>
            <span aria-hidden> / </span>
            <span className="text-foreground">{a.category}</span>
          </nav>

          <Reveal>
            <h1 className="mt-6 font-display text-3xl font-bold sm:text-4xl">{a.title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{a.summary}</p>

            <div className="mt-10 space-y-10">
              {a.sections.map((s: { heading: string; body: string }) => (
                <section key={s.heading} id={slugifyHeading(s.heading)} className="scroll-mt-24">
                  <h2 className="font-display text-xl font-bold">{s.heading}</h2>
                  <RichText text={s.body} />
                </section>
              ))}
            </div>
          </Reveal>

          {a.slug === "rods-and-enchants" ? (
            <div className="mt-10">
              <Link
                to="/enchants"
                className="glass inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-primary hover:underline"
              >
                Browse every enchant and its book art →
              </Link>
            </div>
          ) : null}

          {related.length > 0 ? (
            <section className="mt-14 border-t border-border/60 pt-8">
              <h2 className="font-display text-lg font-bold">Related articles</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/wiki/$slug"
                      params={{ slug: r.slug }}
                      className="glass block rounded-2xl p-4 transition-transform hover:-translate-y-1"
                    >
                      <p className="font-display text-sm font-bold">{r.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{r.summary}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <nav
            aria-label="Article navigation"
            className="mt-12 flex flex-wrap justify-between gap-3 border-t border-border/60 pt-6 text-sm"
          >
            {prev ? (
              <Link
                to="/wiki/$slug"
                params={{ slug: prev.slug }}
                className="text-muted-foreground hover:text-foreground"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/wiki/$slug"
                params={{ slug: next.slug }}
                className="text-muted-foreground hover:text-foreground"
              >
                {next.title} →
              </Link>
            ) : null}
          </nav>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              On this page
            </h2>
            <ul className="mt-3 space-y-1 text-sm">
              {a.sections.map((s: { heading: string }) => (
                <li key={s.heading}>
                  <a
                    href={`#${slugifyHeading(s.heading)}`}
                    className="block rounded-lg px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
