import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ExternalLink, Menu, MessagesSquare } from "lucide-react";

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
  "https://discord.com/oauth2/authorize?client_id=1314851118840414300&permissions=4504288969967680&integration_type=0&scope=bot";

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
      { label: "Pets", to: "/pets" },
      { label: "Eggs", to: "/eggs" },
      { label: "Rods", to: "/rods" },
      { label: "Baits", to: "/baits" },
      { label: "Enchants", to: "/enchants" },
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6"
      >
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-lagoon to-primary">
            <img src="/bubble.png" alt="" className="size-7 object-contain" />
          </span>
          <span className="text-gradient-ocean">Bubble</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primary.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={activeProps}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {l.label}
            </Link>
          ))}
          {groups.map((g) => (
            <DropdownMenu key={g.label}>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
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
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
                    <MessagesSquare className="size-4" aria-hidden /> Join our Discord
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
