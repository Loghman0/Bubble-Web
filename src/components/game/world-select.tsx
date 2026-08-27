import { motion } from "motion/react";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { WORLDS, worldById } from "@/data/worlds";

/**
 * Small glyph for a world: prefers the earned prestige badge, falls back to
 * the world icon, then to an emoji if neither PNG is available/loaded. World
 * 0 has no badge (it's the starting world, never prestiged into) so it always
 * falls through to its world icon.
 */
function BadgeIcon({
  badgeSrc,
  iconSrc,
  emoji,
  size = 20,
}: {
  badgeSrc?: string | undefined;
  iconSrc: string;
  emoji: string;
  size?: number;
}) {
  const primary = badgeSrc ?? iconSrc;
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [primary]);
  if (failed) return <span aria-hidden>{emoji}</span>;
  return (
    <img
      src={primary}
      alt=""
      aria-hidden
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
}

/**
 * Prestige/World selector for the encyclopedia catalog pages (fish, rods,
 * baits, pets). Defaults to World 0 (Base Game); selecting a different world
 * re-scopes whatever list sits below it by `worldId`. Add a new World by
 * appending to `data/worlds.ts` — this component (and every page using it)
 * picks it up automatically, no code change required here.
 */
export function WorldSelect({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (worldId: number) => void;
  className?: string;
}) {
  const current = worldById(value);

  return (
    <Select value={String(value)} onValueChange={(v) => onChange(Number(v))}>
      <SelectTrigger
        aria-label="Select world"
        className={cn(
          "glass h-auto w-full min-w-[220px] gap-3 rounded-2xl border-primary/20 px-4 py-3 text-left shadow-[var(--shadow-glass)] transition-shadow hover:shadow-[var(--shadow-glow)] sm:w-auto",
          className,
        )}
      >
        <SelectValue asChild>
          <motion.span
            key={current.id}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span
              aria-hidden
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-lg",
                current.accent,
              )}
            >
              <BadgeIcon
                badgeSrc={current.badgeIcon}
                iconSrc={current.worldIcon}
                emoji={current.badge}
                size={22}
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm font-bold sm:text-base">{current.name}</span>
              <span className="text-xs text-muted-foreground">{current.tagline}</span>
            </span>
          </motion.span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="min-w-[240px]">
        {WORLDS.map((w) => (
          <SelectItem key={w.id} value={String(w.id)} className="py-2.5">
            <span className="flex items-center gap-3">
              <span
                aria-hidden
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-sm",
                  w.accent,
                )}
              >
                <BadgeIcon badgeSrc={w.badgeIcon} iconSrc={w.worldIcon} emoji={w.badge} size={18} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-semibold">{w.name}</span>
                <span className="text-xs text-muted-foreground">{w.tagline}</span>
              </span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
