import { AlertCircle, RadioTower, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { isLiveApiConfigured, isLocalOnlyApi } from "@/lib/live-api";

/** Small pulsing "Live" indicator for widgets backed by useLivePoll. */
export function LiveIndicator({
  className,
  updatedAt,
  offline = false,
}: {
  className?: string;
  updatedAt?: number | null;
  offline?: boolean;
}) {
  if (offline) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground",
          className,
        )}
      >
        <span className="size-2 rounded-full bg-muted-foreground/60" aria-hidden />
        Offline
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium", className)}>
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-emerald-400">Live</span>
      {updatedAt ? (
        <span className="text-muted-foreground">
          · updated{" "}
          {new Date(updatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      ) : null}
    </span>
  );
}

/**
 * Shown when a live widget has no data. Explains *why* in plain language —
 * the most common cause by far is that VITE_BUBBLE_API_URL is unset or points
 * at localhost, which a visitor's browser can never reach.
 */
export function LiveError({ message, onRetry }: { message: string; onRetry?: () => void }) {
  const hint = !isLiveApiConfigured
    ? "The site has no live API address configured yet, so there is nothing to read from."
    : isLocalOnlyApi
      ? "The configured API address is a localhost address. That only works while the bot API and this site run on the same computer — set VITE_BUBBLE_API_URL to a public https:// address."
      : "The bot API is unreachable from your browser. It may be offline, or it may need to allow requests from this site (CORS).";

  return (
    <div className="glass flex flex-col items-center gap-3 rounded-2xl px-6 py-12 text-center">
      <AlertCircle className="size-6 text-destructive" aria-hidden />
      <div>
        <p className="text-sm font-medium text-foreground">Live data is offline</p>
        <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">{hint}</p>
        <p className="mt-2 text-xs text-muted-foreground/70">{message}</p>
      </div>
      {onRetry ? (
        <Button variant="outline" size="sm" onClick={onRetry}>
          <RefreshCw className="size-4" aria-hidden /> Try again
        </Button>
      ) : null}
    </div>
  );
}

export function LiveSkeletonRows({ rows = 6 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full rounded-lg" />
      ))}
    </div>
  );
}

export function OfflineNotice() {
  return (
    <div className="glass flex items-center gap-3 rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
      <RadioTower className="size-4 shrink-0" aria-hidden />
      Live player data comes straight from the Bubble bot. It appears here as soon as the bot&apos;s
      public API is reachable.
    </div>
  );
}
