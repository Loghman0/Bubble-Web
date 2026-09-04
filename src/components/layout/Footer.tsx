import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

import { DISCORD_URL, INVITE_URL, VOTE_URL } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Game",
    links: [
      { label: "Features", to: "/features" },
      { label: "Fish Encyclopedia", to: "/fish" },
      { label: "Pets", to: "/pets" },
      { label: "Eggs", to: "/eggs" },
    ],
  },
  {
    title: "Gear",
    links: [
      { label: "Rods", to: "/rods" },
      { label: "Baits", to: "/baits" },
      { label: "Enchants", to: "/enchants" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Wiki", to: "/wiki" },
      { label: "FAQ", to: "/faq" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-abyss/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lagoon/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="flex size-9 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-lagoon to-primary">
              <img src="/bubble.png" alt="" className="size-7 object-contain" />
            </span>
            <span className="text-gradient-ocean">Bubble</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A fishing MMORPG that lives inside Discord. Collect species, upgrade your gear, and
            hatch companions with your server.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button asChild size="sm">
              <a href={INVITE_URL} target="_blank" rel="noreferrer">
                Invite Bubble
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                Join the Discord
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={VOTE_URL} target="_blank" rel="noreferrer">
                <Star className="size-3.5" aria-hidden /> Vote on top.gg
              </a>
            </Button>
          </div>
        </div>

        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h2 className="font-display text-sm font-bold tracking-wide uppercase">{c.title}</h2>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bubble. Not affiliated with Discord Inc.
      </div>
    </footer>
  );
}
