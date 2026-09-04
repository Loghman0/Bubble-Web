import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { GameAsset } from "@/components/game/asset";
import { RarityBadge, WorldBadge } from "@/components/game/primitives";
import { baitBySlug } from "@/lib/api";
import { formatCondition } from "@/lib/game-format";
import { cn } from "@/lib/utils";
import type { Bait, Egg, Enchant, Fish, Pet, Rarity, Rod } from "@/types/game";

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

function TiltCard({
  children,
  className,
  rarity,
}: {
  children: React.ReactNode;
  className?: string;
  rarity?: Rarity;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "glass group h-full rounded-2xl bg-gradient-to-br to-transparent p-4 transition-shadow hover:shadow-[var(--shadow-glow)]",
        rarity ? rarityCardTint[rarity] : undefined,
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
      <TiltCard rarity={fish.rarity}>
        <GameAsset src={fish.image} alt={fish.name} rarity={fish.rarity} />
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-bold sm:text-base">{fish.name}</h3>
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
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-bold sm:text-base">{pet.name}</h3>
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
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-bold sm:text-base">{rod.name}</h3>
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
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-bold sm:text-base">{bait.name}</h3>
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
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-bold sm:text-base">{enchant.name}</h3>
          <TierPill tier={`max ${Math.round(enchant.valuePerLevel[2] * 100)}%`} />
        </div>
      </TiltCard>
    </Link>
  );
}
