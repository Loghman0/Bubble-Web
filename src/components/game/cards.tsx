import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { GameAsset } from "@/components/game/asset";
import { RarityBadge } from "@/components/game/primitives";
import { cn } from "@/lib/utils";
import type { Bait, Egg, Fish, Pet, Rod } from "@/types/game";

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "glass group h-full rounded-2xl p-4 transition-shadow hover:shadow-[var(--shadow-glow)]",
        className,
      )}
      style={{ transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  );
}

function TierPill({ tier }: { tier: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
      {tier}
    </span>
  );
}

export function FishCard({ fish }: { fish: Fish }) {
  return (
    <Link to="/fish/$slug" params={{ slug: fish.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={fish.image} alt={fish.name} rarity={fish.rarity} fallback="🐠" />
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-bold sm:text-base">{fish.name}</h3>
          <RarityBadge rarity={fish.rarity} />
        </div>
      </TiltCard>
    </Link>
  );
}

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <Link to="/pets/$slug" params={{ slug: pet.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={pet.image} alt={pet.name} fallback="🐾" />
        <h3 className="mt-3 font-display text-sm font-bold sm:text-base">{pet.name}</h3>
      </TiltCard>
    </Link>
  );
}

export function EggCard({ egg }: { egg: Egg }) {
  return (
    <Link to="/eggs/$slug" params={{ slug: egg.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={egg.image} alt={egg.name} fallback="🥚" className="from-treasure/20" />
        <h3 className="mt-3 font-display text-base font-bold">{egg.name}</h3>
      </TiltCard>
    </Link>
  );
}

export function RodCard({ rod }: { rod: Rod }) {
  return (
    <Link to="/rods/$slug" params={{ slug: rod.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={rod.image} alt={rod.name} fallback="🎣" />
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-bold sm:text-base">{rod.name}</h3>
          <TierPill tier={rod.tier} />
        </div>
      </TiltCard>
    </Link>
  );
}

export function BaitCard({ bait }: { bait: Bait }) {
  return (
    <Link to="/baits/$slug" params={{ slug: bait.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={bait.image} alt={bait.name} fallback="🪱" />
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-bold sm:text-base">{bait.name}</h3>
          <TierPill tier={bait.tier} />
        </div>
      </TiltCard>
    </Link>
  );
}
