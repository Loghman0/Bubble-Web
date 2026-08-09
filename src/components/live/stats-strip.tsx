import { AnimatedCounter } from "@/components/game/primitives";
import { LiveIndicator, LiveSkeletonRows } from "@/components/live/status";
import { useLivePoll } from "@/hooks/use-live-poll";
import { isLiveApiConfigured, liveApi } from "@/lib/live-api";

export function LiveStatsStrip() {
  const { data, error, loading, updatedAt } = useLivePoll(() => liveApi.stats(), {
    intervalMs: 30_000,
    enabled: isLiveApiConfigured,
  });

  if (!isLiveApiConfigured) return null;

  if (loading && !data) {
    return <LiveSkeletonRows rows={1} />;
  }

  if (error && !data) {
    // A quiet homepage widget shouldn't show a big error block — just omit it.
    return null;
  }

  if (!data) return null;

  const items: { label: string; value: number; suffix?: string }[] = [
    { label: "Anglers", value: data.players },
    { label: "Servers", value: data.servers },
    { label: "Fish Caught", value: data.totalFishCaught },
    { label: "Fish Species", value: data.fishSpecies },
  ];

  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          Right Now In Bubble
        </p>
        <LiveIndicator updatedAt={updatedAt} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="font-display text-2xl font-bold sm:text-3xl">
              <AnimatedCounter value={item.value} suffix={item.suffix} />
            </div>
            <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
