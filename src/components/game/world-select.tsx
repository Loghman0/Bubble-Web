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
 * Prestige icon with a graceful emoji fallback if the PNG hasn't been
 * uploaded yet or fails to load. Prefers `badgeIcon` (the numbered prestige
 * medallion) over `worldIcon` — the globe-style world icons are retired site
 * wide; every prestige tier (1-10) has its own numbered badge, and World 0
 * (Base Game, not actually a prestige) is the one deliberate exception that
 * still falls back to its globe icon since no "0th prestige" badge exists.
 */
function PrestigeIcon({ src, emoji, size = 26 }: { src: string; emoji: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  if (failed) return <span aria-hidden>{emoji}</span>;
  return (
    <img
      src={src}
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
            <span aria-hidden className="flex size-9 shrink-0 items-center justify-center">
              <PrestigeIcon
                src={current.badgeIcon ?? current.worldIcon}
                emoji={current.badge}
                size={30}
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
              <span aria-hidden className="flex size-8 shrink-0 items-center justify-center">
                <PrestigeIcon src={w.badgeIcon ?? w.worldIcon} emoji={w.badge} size={24} />
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
