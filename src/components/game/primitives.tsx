import { AnimatePresence, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { worldById } from "@/data/worlds";
import type { Rarity } from "@/types/game";

/* -------------------------------------------------- reveal on scroll */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------- animated counter */

export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string | undefined;
  decimals?: number | undefined;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------- rarity */

const rarityClass: Record<Rarity, string> = {
  Common: "text-rarity-common border-rarity-common/40 bg-rarity-common/10",
  Uncommon: "text-rarity-uncommon border-rarity-uncommon/40 bg-rarity-uncommon/10",
  Rare: "text-rarity-rare border-rarity-rare/40 bg-rarity-rare/10",
  Epic: "text-rarity-epic border-rarity-epic/40 bg-rarity-epic/10",
  Legendary: "text-rarity-legendary border-rarity-legendary/40 bg-rarity-legendary/10",
  Mythic: "text-rarity-mythic border-rarity-mythic/40 bg-rarity-mythic/10",
  Ancient: "text-rarity-ancient border-rarity-ancient/40 bg-rarity-ancient/10",
  Celestial: "text-rarity-celestial border-rarity-celestial/40 bg-rarity-celestial/10",
  Divine: "text-rarity-divine border-rarity-divine/40 bg-rarity-divine/10",
};

export const rarityGlow: Record<Rarity, string> = {
  Common: "from-rarity-common/25",
  Uncommon: "from-rarity-uncommon/25",
  Rare: "from-rarity-rare/30",
  Epic: "from-rarity-epic/30",
  Legendary: "from-rarity-legendary/35",
  Mythic: "from-rarity-mythic/40",
  Ancient: "from-rarity-ancient/35",
  Celestial: "from-rarity-celestial/40",
  Divine: "from-rarity-divine/40",
};

const shimmerTiers: Partial<Record<Rarity, boolean>> = {
  Mythic: true,
  Ancient: true,
  Celestial: true,
  Divine: true,
};

/** Emoji fallback shown until the real rarity icon art is uploaded to `public/assets/rarities/`. */
const rarityEmoji: Record<Rarity, string> = {
  Common: "⚪",
  Uncommon: "🟢",
  Rare: "🔵",
  Epic: "🟣",
  Legendary: "🟠",
  Mythic: "💗",
  Ancient: "🟤",
  Celestial: "🩵",
  Divine: "✨",
};

/** `public/assets/rarities/<lowercase-rarity>.png` — one small icon per tier. */
export function rarityIconPath(rarity: Rarity): string {
  return `/assets/rarities/${rarity.toLowerCase()}.png`;
}

/**
 * A single rarity icon. Tries the uploaded PNG first; if it 404s (not
 * uploaded yet, or a typo'd filename) it silently falls back to the emoji
 * glyph instead of showing a broken image — same pattern as `GameAsset`.
 */
export function RarityIcon({
  rarity,
  className = "size-4",
}: {
  rarity: Rarity;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [rarity]);

  if (failed) {
    return (
      <span aria-hidden className="inline-block leading-none">
        {rarityEmoji[rarity]}
      </span>
    );
  }

  return (
    <img
      src={rarityIconPath(rarity)}
      alt=""
      aria-hidden
      width={16}
      height={16}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn("inline-block object-contain", className)}
    />
  );
}

/**
 * Mythic/Celestial/Divine badges get a light sweep, but only on hover of the
 * badge itself (`group-hover` off the nearest `.group` ancestor, e.g. a
 * TiltCard) — never a perpetual loop. A catalog page can show two dozen
 * Legendary+ cards at once; an always-on shimmer on all of them is noise,
 * not a signature. See design-taste-frontend §"Perpetual Micro-Interactions".
 */
export function RarityBadge({ rarity, className }: { rarity: Rarity; className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide whitespace-nowrap uppercase",
        rarityClass[rarity],
        className,
      )}
    >
      <RarityIcon rarity={rarity} className="size-3.5 shrink-0" />
      {rarity}
      {shimmerTiers[rarity] ? (
        <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-150 group-hover:animate-[shimmer-sweep_1s_ease-in-out] group-hover:opacity-100" />
        </span>
      ) : null}
    </span>
  );
}

/* -------------------------------------------------- art placeholder */

export function ArtPlaceholder({
  label,
  rarity,
  className,
  emoji = "🐟",
}: {
  label: string;
  rarity?: Rarity;
  className?: string;
  emoji?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} artwork placeholder`}
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br to-deep/60",
        rarity ? rarityGlow[rarity] : "from-lagoon/20",
        className,
      )}
    >
      <span className="text-4xl opacity-80 select-none">{emoji}</span>
      <span className="absolute bottom-2 text-[10px] tracking-widest text-muted-foreground uppercase">
        Art placeholder
      </span>
    </div>
  );
}

/* -------------------------------------------------- world / prestige */

export function WorldBadge({
  worldId,
  className,
}: {
  worldId?: number | undefined;
  className?: string;
}) {
  const world = worldById(worldId);
  if (world.id === 0) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-neon/30 bg-neon/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-neon uppercase",
        className,
      )}
    >
      <WorldBadgeGlyph world={world} size={14} />
      {world.name}
    </span>
  );
}

function WorldBadgeGlyph({ world, size }: { world: ReturnType<typeof worldById>; size: number }) {
  const src = world.badgeIcon ?? world.worldIcon;
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  if (failed) return <span aria-hidden>{world.badge}</span>;
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{ width: size, height: size }}
      className="object-contain"
    />
  );
}

/**
 * Wraps catalog grids so switching worlds gets a smooth cross-fade + slide
 * instead of an instant swap. Pass a `worldKey` (usually the selected
 * worldId) so React remounts the animation on every world change.
 */
export function WorldTransition({
  worldKey,
  children,
}: {
  worldKey: string | number;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={worldKey}
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduced ? {} : { opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/* -------------------------------------------------- misc */

export function StatCard({
  label,
  value,
  suffix,
  icon,
}: {
  label: string;
  value: number;
  suffix?: string | undefined;
  icon?: ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
      {icon ? <div className="mb-3 text-primary">{icon}</div> : null}
      <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass flex flex-col items-center rounded-2xl px-6 py-16 text-center">
      <span className="text-4xl" aria-hidden>
        🫧
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 font-display text-3xl font-bold text-balance sm:text-5xl">{title}</h1>
      {description ? (
        <p className="mt-4 text-base text-pretty text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  );
}

export function ProgressBar({
  value,
  label,
  className,
}: {
  value: number;
  label?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {label ? (
        <div className="mb-1.5 flex justify-between text-xs text-muted-foreground">
          <span>{label}</span>
          <span className="tabular-nums">{Math.round(value)}%</span>
        </div>
      ) : null}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={Math.round(value)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? "Progress"}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-lagoon to-treasure"
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min(100, value)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------- magnetic wrapper */

/**
 * Wraps a single interactive child (typically a primary CTA `Button`) and
 * pulls it a few pixels toward the cursor within its own bounds — the
 * "magnetic micro-physics" pattern, reserved for the handful of buttons that
 * matter most (invite/join CTAs), not applied globally to every button.
 * Driven entirely by motion values so hovering never triggers a re-render.
 */
export function Magnetic({
  children,
  strength = 14,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * strength);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * strength);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: reduced ? 0 : springX, y: reduced ? 0 : springY }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------- reading progress */

/**
 * A thin bar that fills as the reader moves through a specific element
 * (an article body), not the whole page — so it reaches 100% exactly when
 * the content ends, regardless of footer height. Pass the same ref used on
 * the article container.
 */
export function ReadingProgress({ target }: { target: React.RefObject<HTMLElement | null> }) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 32, mass: 0.3 });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="sticky top-16 z-30 h-[2px] w-full origin-left bg-gradient-to-r from-lagoon via-primary to-treasure"
      style={{ scaleX: progress }}
    />
  );
}
