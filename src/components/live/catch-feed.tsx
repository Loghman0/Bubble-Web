import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";

import { LiveError, LiveIndicator, LiveSkeletonRows } from "@/components/live/status";
import { EmptyState, RarityBadge } from "@/components/game/primitives";
import { useLivePoll } from "@/hooks/use-live-poll";
import { liveApi, type PublicCatch } from "@/lib/live-api";
import type { Rarity } from "@/types/game";

function timeAgo(iso: string): string {
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function CatchRow({ entry }: { entry: PublicCatch }) {
  const reduced = useReducedMotion();
  return (
    <motion.li
      layout={!reduced}
      initial={reduced ? false : { opacity: 0, y: -12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduced ? {} : { opacity: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
      className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3"
    >
      <span className="text-2xl" aria-hidden>
        {entry.isMutant ? "🧬" : "🐟"}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="truncate font-semibold">{entry.fishName}</span>
          <RarityBadge rarity={entry.rarityLabel as Rarity} />
          {entry.isMutant ? (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-fuchsia-400">
              <Sparkles className="size-3" aria-hidden /> Mutant
            </span>
          ) : null}
        </div>
        <p className="mt-0.5 truncate text-sm text-muted-foreground">
          Caught by <span className="text-foreground">{entry.caughtByUsername}</span>
          {entry.serverName ? (
            <>
              {" "}
              in <span className="text-foreground">{entry.serverName}</span>
            </>
          ) : null}
          {" · "}
          {entry.weight}kg
        </p>
      </div>
      <span className="shrink-0 text-xs text-muted-foreground">{timeAgo(entry.caughtAt)}</span>
    </motion.li>
  );
}

export function CatchFeed({ mode }: { mode: "recent" | "rarest" }) {
  const { data, error, loading, updatedAt, refresh } = useLivePoll(
    () => (mode === "recent" ? liveApi.recentCatches(15) : liveApi.rarestCatches(15)),
    { intervalMs: 15_000, deps: [mode] },
  );

  return (
    <div className="glass rounded-2xl p-4 sm:p-6">
      <div className="flex items-center gap-2">
        <h3 className="font-display text-lg font-bold">
          {mode === "recent" ? "Latest Catches" : "Rarest Catches"}
        </h3>
        <LiveIndicator updatedAt={updatedAt} offline={Boolean(error) && !data} />
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        {mode === "recent"
          ? "Rare-or-better fish landed across every server, as they happen."
          : "The single rarest catches from the last 30 days, server-wide."}
      </p>

      <div className="mt-4">
        {loading && !data ? (
          <LiveSkeletonRows rows={6} />
        ) : error && !data ? (
          <LiveError message={error} onRetry={refresh} />
        ) : !data || data.catches.length === 0 ? (
          <EmptyState
            title="Nothing yet"
            description="Rare-or-better catches will show up here as soon as someone lands one."
          />
        ) : (
          <ul className="space-y-2">
            <AnimatePresence initial={false}>
              {data.catches.map((c, i) => (
                <CatchRow key={`${c.fishId}-${c.caughtAt}-${i}`} entry={c} />
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>
    </div>
  );
}
