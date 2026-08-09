import { useEffect, useRef, useState } from "react";

type PollState<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  /** Timestamp (ms) of the last successful load, or null if never loaded. */
  updatedAt: number | null;
};

/**
 * Fetches once immediately, then re-fetches on an interval. Used by every
 * live widget (leaderboard, catch feeds, stats strip) so they all share the
 * same loading/error/refresh behavior instead of each hand-rolling it.
 *
 * Ignores results from stale in-flight requests (e.g. if the poll interval
 * fires again before a slow request resolves, or deps change mid-request) so
 * a slow response can never clobber newer data.
 */
export function useLivePoll<T>(
  fetcher: () => Promise<T>,
  { intervalMs = 20_000, deps = [] as unknown[], enabled = true } = {},
): PollState<T> & { refresh: () => void } {
  const [state, setState] = useState<PollState<T>>({
    data: null,
    error: null,
    loading: enabled,
    updatedAt: null,
  });
  const requestId = useRef(0);
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  const load = () => {
    if (!enabled) return;
    const id = ++requestId.current;
    setState((prev) => ({ ...prev, loading: true }));
    fetcherRef
      .current()
      .then((data) => {
        if (id !== requestId.current) return;
        setState({ data, error: null, loading: false, updatedAt: Date.now() });
      })
      .catch((err: unknown) => {
        if (id !== requestId.current) return;
        setState((prev) => ({
          data: prev.data,
          updatedAt: prev.updatedAt,
          error: err instanceof Error ? err.message : "Failed to load live data.",
          loading: false,
        }));
      });
  };

  useEffect(() => {
    if (!enabled) {
      setState((prev) => ({ ...prev, loading: false }));
      return;
    }
    load();
    const timer = setInterval(load, intervalMs);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, enabled, ...deps]);

  return { ...state, refresh: load };
}
