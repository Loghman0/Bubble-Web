import { Users, Waves } from "lucide-react";

import { LiveError, LiveIndicator, LiveSkeletonRows } from "@/components/live/status";
import { EmptyState, Reveal } from "@/components/game/primitives";
import { useLivePoll } from "@/hooks/use-live-poll";
import { liveApi } from "@/lib/live-api";

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "?";
}

/**
 * Home-page showcase of the Discord servers running Bubble.
 *
 * Only servers at or above `minMembers` are shown, largest crew first.
 * Activity filtering is intentionally not applied yet — the live API does not
 * expose per-server activity, so member size is the only signal available.
 */
export function ServerShowcase({ minMembers = 100, limit = 60 }: { minMembers?: number; limit?: number }) {
  const { data, error, loading, updatedAt, refresh } = useLivePoll(() => liveApi.servers(limit), {
    intervalMs: 60_000,
  });

  const servers = (data?.servers ?? [])
    .filter((s) => s.memberCount >= minMembers)
    .sort((a, b) => b.memberCount - a.memberCount);

  return (
    <section
      className="relative isolate overflow-hidden border-y border-border/60 py-20"
      aria-labelledby="servers"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-lagoon/30 to-transparent text-primary">
              <Waves className="size-5" aria-hidden />
            </span>
            <h2 id="servers" className="font-display text-3xl font-bold sm:text-4xl">
              Servers casting with Bubble
            </h2>
            <LiveIndicator updatedAt={updatedAt} offline={Boolean(error) && !data} />
          </div>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Communities of {minMembers}+ members that have Bubble on the docks, biggest crews first.
            {servers.length > 0 ? ` ${servers.length} shown right now.` : ""}
          </p>
        </Reveal>

        <div className="mt-10">
          {loading && !data ? (
            <LiveSkeletonRows rows={4} />
          ) : error && !data ? (
            <LiveError message={error} onRetry={refresh} />
          ) : servers.length === 0 ? (
            <EmptyState
              title="No crews on the board yet"
              description={`Servers with ${minMembers}+ members running Bubble will surface here.`}
            />
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servers.map((s, i) => (
                <li key={`${s.name}-${i}`}>
                  <Reveal delay={Math.min(i, 8) * 0.04}>
                    <div className="glass flex h-full items-center gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1.5">
                      {s.iconUrl ? (
                        <img
                          src={s.iconUrl}
                          alt=""
                          loading="lazy"
                          className="size-12 shrink-0 rounded-full object-cover ring-2 ring-lagoon/40"
                        />
                      ) : (
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lagoon to-primary text-sm font-bold text-primary-foreground ring-2 ring-lagoon/40">
                          {initials(s.name)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="truncate font-display font-bold">{s.name}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Users className="size-3" aria-hidden />
                          {s.memberCount.toLocaleString()} members
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
