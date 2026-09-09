import { Link } from "@tanstack/react-router";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";

import { GameAsset } from "@/components/game/asset";
import { RarityBadge, WorldBadge } from "@/components/game/primitives";
import { baitBySlug } from "@/lib/api";
import { formatCondition } from "@/lib/game-format";
import { cn } from "@/lib/utils";
import type { Bait, Backpack, Egg, Enchant, Fish, Minion, Pet, Rarity, Rod } from "@/types/game";

/**
 * Whole-card background tint by rarity — distinct from `rarityGlow` in
 * primitives.tsx, which only tints the art frame. Intensity increases with
 * rarity so Divine items read as visibly more special than Common ones.
 */
const rarityCardTint: Record<Rarity, string> = {
  Common: "from-rarity-common/[0.06]",
  Uncommon: "from-rarity-uncommon/[0.08]",
  Rare: "from-rarity-rare/10",
  Epic: "from-rarity-epic/[0.12]",
  Legendary: "from-rarity-legendary/[0.14]",
  Mythic: "from-rarity-mythic/[0.16]",
  Ancient: "from-rarity-ancient/[0.14]",
  Celestial: "from-rarity-celestial/[0.16]",
  Divine: "from-rarity-divine/[0.18]",
};

/**
 * Every catalog card (fish, pets, rods, baits, eggs, enchants, backpacks,
 * minions) runs through here. Tilt tracks the actual cursor position via
 * motion values — never React state, so hovering never re-renders the tree —
 * and a soft radial glare follows the same coordinates for a tactile,
 * "holding a card up to the light" feel. Springs, not linear easing, so it
 * settles rather than snapping. Fully inert under prefers-reduced-motion.
 */
function TiltCard({
  children,
  className,
  rarity,
}: {
  children: React.ReactNode;
  className?: string;
  rarity?: Rarity;
}) {
  const reduced = useReducedMotion();

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const springCfg = { stiffness: 260, damping: 22, mass: 0.6 };
  const rotateX = useSpring(0, springCfg);
  const rotateY = useSpring(0, springCfg);
  const lift = useSpring(0, springCfg);
  const glare = useMotionTemplate`radial-gradient(220px circle at ${px}% ${py}%, color-mix(in oklab, var(--foam) 16%, transparent), transparent 65%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(x * 100);
    py.set(y * 100);
    rotateY.set((x - 0.5) * 10);
    rotateX.set((0.5 - y) * 10);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    lift.set(0);
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerEnter={() => lift.set(-6)}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY, y: reduced ? 0 : lift, transformPerspective: 900 }}
      className={cn(
        "glass group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br to-transparent p-4 transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]",
        rarity ? rarityCardTint[rarity] : undefined,
        className,
      )}
    >
      {reduced ? null : (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glare }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}

function TierPill({ tier }: { tier: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold tracking-wide whitespace-nowrap text-muted-foreground uppercase">
      {tier}
    </span>
  );
}

export function FishCard({ fish }: { fish: Fish }) {
  return (
    <Link to="/fish/$slug" params={{ slug: fish.slug }} className="block h-full rounded-2xl">
      <TiltCard rarity={fish.rarity}>
        <GameAsset src={fish.image} alt={fish.name} rarity={fish.rarity} />
        <div className="mt-3 flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
          <h3 className="min-w-0 font-display text-sm font-bold sm:text-base">{fish.name}</h3>
          <RarityBadge rarity={fish.rarity} />
        </div>
        {fish.worldId ? (
          <div className="mt-2">
            <WorldBadge worldId={fish.worldId} />
          </div>
        ) : null}
      </TiltCard>
    </Link>
  );
}

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <Link to="/pets/$slug" params={{ slug: pet.slug }} className="block h-full rounded-2xl">
      <TiltCard rarity={pet.rarity}>
        <GameAsset src={pet.image} alt={pet.name} rarity={pet.rarity} />
        <div className="mt-3 flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
          <h3 className="min-w-0 font-display text-sm font-bold sm:text-base">{pet.name}</h3>
          <RarityBadge rarity={pet.rarity} />
        </div>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{pet.skill}</p>
        {pet.worldId ? (
          <div className="mt-2">
            <WorldBadge worldId={pet.worldId} />
          </div>
        ) : null}
      </TiltCard>
    </Link>
  );
}

export function EggCard({ egg }: { egg: Egg }) {
  return (
    <Link to="/eggs/$slug" params={{ slug: egg.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={egg.image} alt={egg.name} className="from-treasure/20" />
        <h3 className="mt-3 font-display text-base font-bold">{egg.name}</h3>
        {egg.worldId ? (
          <div className="mt-2">
            <WorldBadge worldId={egg.worldId} />
          </div>
        ) : null}
      </TiltCard>
    </Link>
  );
}

export function RodCard({ rod }: { rod: Rod }) {
  return (
    <Link to="/rods/$slug" params={{ slug: rod.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={rod.image} alt={rod.name} />
        <div className="mt-3 flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
          <h3 className="min-w-0 font-display text-sm font-bold sm:text-base">{rod.name}</h3>
          <TierPill tier={rod.tier} />
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">Req. Lv {rod.requiredLevel}</span>
          {rod.worldId ? <WorldBadge worldId={rod.worldId} /> : null}
        </div>
      </TiltCard>
    </Link>
  );
}

export function BaitCard({ bait }: { bait: Bait }) {
  return (
    <Link to="/baits/$slug" params={{ slug: bait.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={bait.image} alt={bait.name} />
        <div className="mt-3 flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
          <h3 className="min-w-0 font-display text-sm font-bold sm:text-base">{bait.name}</h3>
          <TierPill tier={bait.tier} />
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">Req. Lv {bait.requiredLevel}</span>
          {bait.worldId ? <WorldBadge worldId={bait.worldId} /> : null}
        </div>
      </TiltCard>
    </Link>
  );
}

export function EnchantCard({ enchant }: { enchant: Enchant }) {
  return (
    <Link to="/enchants/$slug" params={{ slug: enchant.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={enchant.image} alt={`${enchant.name} enchantment book`} />
        <div className="mt-3 flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
          <h3 className="min-w-0 font-display text-sm font-bold sm:text-base">{enchant.name}</h3>
          <TierPill tier={`max ${Math.round(enchant.valuePerLevel[2] * 100)}%`} />
        </div>
      </TiltCard>
    </Link>
  );
}

export function BackpackCard({ backpack }: { backpack: Backpack }) {
  return (
    <Link to="/backpacks/$slug" params={{ slug: backpack.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={backpack.image} alt={backpack.name} />
        <h3 className="mt-3 font-display text-sm font-bold sm:text-base">{backpack.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{backpack.capacityUnits} capacity units</p>
        {backpack.price > 0 ? (
          <p className="mt-1 text-xs text-muted-foreground">{backpack.price.toLocaleString()} {backpack.currency}</p>
        ) : (
          <p className="mt-1 text-xs text-muted-foreground">Free (starter)</p>
        )}
      </TiltCard>
    </Link>
  );
}

export function MinionCard({ minion }: { minion: Minion }) {
  return (
    <Link to="/minions/$slug" params={{ slug: minion.slug }} className="block h-full rounded-2xl">
      <TiltCard>
        <GameAsset src={minion.image} alt={minion.name} />
        <h3 className="mt-3 font-display text-sm font-bold sm:text-base">{minion.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{minion.tagline}</p>
      </TiltCard>
    </Link>
  );
}
