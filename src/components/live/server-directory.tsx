import { Users } from "lucide-react";

import { LiveError, LiveIndicator, LiveSkeletonRows } from "@/components/live/status";
import { EmptyState } from "@/components/game/primitives";
import { useLivePoll } from "@/hooks/use-live-poll";
import { liveApi } from "@/lib/live-api";

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "?";
}

export function ServerDirectory({ limit = 24 }: { limit?: number }) {
  const { data, error, loading, updatedAt, refresh } = useLivePoll(
    () => liveApi.servers(limit),
    { intervalMs: 60_000 },
  );

  return (
    <div className="glass rounded-2xl p-4 sm:p-6">
      <div className="flex items-center gap-2">
        <h3 className="font-display text-lg font-bold">Servers Using Bubble</h3>
        <LiveIndicator updatedAt={updatedAt} offline={Boolean(error) && !data} />
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        A sample of Discord servers currently running Bubble. Server owners can opt out of this list
        any time.
      </p>

      <div className="mt-4">
        {loading && !data ? (
          <LiveSkeletonRows rows={4} />
        ) : error && !data ? (
          <LiveError message={error} onRetry={refresh} />
        ) : !data || data.servers.length === 0 ? (
          <EmptyState
            title="No servers yet"
            description="Servers running Bubble will be listed here."
          />
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.servers.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3"
              >
                {s.iconUrl ? (
                  <img
                    src={s.iconUrl}
                    alt=""
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lagoon to-primary text-sm font-bold text-primary-foreground">
                    {initials(s.name)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="truncate font-medium">{s.name}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="size-3" aria-hidden />
                    {s.memberCount.toLocaleString()} members
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
