import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useState } from "react";
import { ChevronDown, ExternalLink, Menu, MessagesSquare, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const DISCORD_URL = "https://discord.gg/PGbQFCFTC2";

export const INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1314851118840414300&permissions=4503601775232000&integration_type=0&scope=bot";

export const VOTE_URL = "https://top.gg/bot/1314851118840414300/vote";

type NavLink = { label: string; to: string };

const primary: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Wiki", to: "/wiki" },
];

const groups: { label: string; links: NavLink[] }[] = [
  {
    label: "Encyclopedia",
    links: [
      { label: "Fish Encyclopedia", to: "/fish" },
      { label: "Catch Conditions", to: "/conditions" },

      { label: "Pets", to: "/pets" },
      { label: "Eggs", to: "/eggs" },
      { label: "Rods", to: "/rods" },
      { label: "Baits", to: "/baits" },
      { label: "Enchants", to: "/enchants" },
      { label: "Backpacks", to: "/backpacks" },
      { label: "Minions", to: "/minions" },
    ],
  },
  {
    label: "More",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

const allLinks = [...primary, ...groups.flatMap((g) => g.links)];

const activeProps = { className: "text-primary" };

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  // Read-page-progress bar along the header's bottom edge, and a slight
  // header compression once the page has actually scrolled — both driven off
  // one useScroll() subscription, never a raw scroll listener (see
  // design-taste-frontend §5.D).
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 32, mass: 0.3 });
  const barScale = useTransform(progress, (p) => (reduced ? 0 : p));

  const headerHeight = useTransform(scrollY, [0, 120], [64, 56], { clamp: true });
  const heightPx = useSpring(headerHeight, { stiffness: 260, damping: 30 });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <motion.nav
        aria-label="Main navigation"
        style={{ height: reduced ? 64 : heightPx }}
        className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6"
      >
        <Link to="/" className="group flex items-center gap-2 font-display text-lg font-bold">
          <motion.span
            whileHover={reduced ? {} : { rotate: [0, -8, 8, -4, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex size-9 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-lagoon to-primary"
          >
            <img src="/bubble.png" alt="" className="size-7 object-contain" />
          </motion.span>
          <span className="text-gradient-ocean">Bubble</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primary.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={activeProps}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {l.label}
            </Link>
          ))}
          {groups.map((g) => (
            <DropdownMenu key={g.label}>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {g.label}
                <ChevronDown className="size-3.5" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {g.links.map((l) => (
                  <DropdownMenuItem key={l.to} asChild>
                    <Link to={l.to} activeProps={activeProps}>
                      {l.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex">
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">
              <MessagesSquare className="size-4" aria-hidden /> Discord
            </a>
          </Button>
          <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex">
            <a href={VOTE_URL} target="_blank" rel="noreferrer">
              <Star className="size-4" aria-hidden /> Vote
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={INVITE_URL} target="_blank" rel="noreferrer">
              Invite Bubble <ExternalLink className="size-4" aria-hidden />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] overflow-y-auto">
              <SheetTitle className="font-display">Navigation</SheetTitle>
              <ul className="mt-6 space-y-1">
                {allLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      activeOptions={{ exact: l.to === "/" }}
                      activeProps={activeProps}
                      onClick={() => setOpen(false)}
                      className="block rounded-full px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2">
                <Button asChild>
                  <a href={INVITE_URL} target="_blank" rel="noreferrer">
                    Invite Bubble
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                    <MessagesSquare className="size-4" aria-hidden /> Join the Discord
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href={VOTE_URL} target="_blank" rel="noreferrer">
                    <Star className="size-4" aria-hidden /> Vote on top.gg
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>
      {reduced ? null : (
        <motion.div
          aria-hidden
          className="h-[2px] w-full origin-left bg-gradient-to-r from-lagoon via-primary to-treasure"
          style={{ scaleX: barScale }}
        />
      )}
    </header>
  );
}
