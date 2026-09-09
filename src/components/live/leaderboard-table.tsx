import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Crown, Medal } from "lucide-react";

import { LiveError, LiveIndicator, LiveSkeletonRows } from "@/components/live/status";
import { EmptyState } from "@/components/game/primitives";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLivePoll } from "@/hooks/use-live-poll";
import { liveApi, type LeaderboardSort } from "@/lib/live-api";
import { cn } from "@/lib/utils";

const SORT_OPTIONS: { value: LeaderboardSort; label: string; column: string }[] = [
  { value: "level", label: "Top Level", column: "Level" },
  { value: "coins", label: "Richest (Coins)", column: "Coins" },
  { value: "coinsEarned", label: "Lifetime Coins Earned", column: "Lifetime Coins" },
  { value: "catches", label: "Most Fish Caught", column: "Fish Caught" },
];

const rankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="size-4 text-amber-400" aria-hidden />;
  if (rank === 2) return <Medal className="size-4 text-slate-300" aria-hidden />;
  if (rank === 3) return <Medal className="size-4 text-amber-700" aria-hidden />;
  return null;
};

export function LeaderboardTable() {
  const [sort, setSort] = useState<LeaderboardSort>("level");
  const reduced = useReducedMotion();
  const { data, error, loading, updatedAt, refresh } = useLivePoll(
    () => liveApi.leaderboard(sort, 25),
    { intervalMs: 20_000, deps: [sort] },
  );

  const activeOption = SORT_OPTIONS.find((o) => o.value === sort)!;

  return (
    <div className="glass rounded-2xl p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-lg font-bold">Leaderboard</h3>
          <LiveIndicator updatedAt={updatedAt} offline={Boolean(error) && !data} />
        </div>
        <Select value={sort} onValueChange={(v) => setSort(v as LeaderboardSort)}>
          <SelectTrigger className="w-[220px]" aria-label="Sort leaderboard by">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4">
        {loading && !data ? (
          <LiveSkeletonRows rows={8} />
        ) : error && !data ? (
          <LiveError message={error} onRetry={refresh} />
        ) : !data || data.players.length === 0 ? (
          <EmptyState
            title="No anglers yet"
            description="Once players start fishing, they'll show up here."
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Angler</TableHead>
                <TableHead className="text-right">{activeOption.column}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence initial={false}>
                {data.players.map((p) => (
                  <motion.tr
                    key={`${p.rank}-${p.username}`}
                    layout={!reduced}
                    initial={reduced ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduced ? {} : { opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className={cn(
                      "border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50",
                      p.rank <= 3 && "bg-primary/5",
                    )}
                  >
                    <TableCell className="font-mono text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        {rankIcon(p.rank)}
                        {p.rank}
                      </span>
                    </TableCell>
                    <TableCell className="font-medium">{p.username}</TableCell>
                    <TableCell className="text-right tabular-nums">
                      {sort === "level" && `Lv. ${p.level}`}
                      {sort === "coins" && p.coins.toLocaleString()}
                      {sort === "coinsEarned" && p.totalCoinsEarned.toLocaleString()}
                      {sort === "catches" && p.totalCaught.toLocaleString()}
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
