import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";

import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Decorative animated ocean layer: caustics, depth gradient, drifting bubbles.
 * Bubbles only — no swimming silhouettes.
 */
export function OceanBackdrop({ bubbles = 24 }: { bubbles?: number }) {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  // Bubbles are client-only: the SSR pass renders the static ocean gradient so
  // markup matches on hydration, then the drifting bubbles fade in.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = !mounted || reduced ? 0 : isMobile ? Math.ceil(bubbles / 2) : bubbles;

  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        // Deterministic pseudo-random so SSR and client agree.
        const r = (n: number) => ((Math.sin((i + 1) * n) + 1) / 2) as number;
        return {
          left: Math.round(r(12.9898) * 100),
          size: 4 + Math.round(r(78.233) * 22),
          delay: Math.round(r(43.111) * 220) / 10,
          duration: 18 + Math.round(r(93.989) * 160) / 10,
          drift: Math.round((r(27.42) - 0.5) * 90),
          opacity: 0.25 + r(11.7) * 0.45,
        };
      }),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 surface-abyss" />
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(60% 45% at 20% 0%, color-mix(in oklab, var(--lagoon) 45%, transparent), transparent 70%), radial-gradient(50% 40% at 85% 10%, color-mix(in oklab, var(--treasure) 25%, transparent), transparent 70%)",
          animation: reduced ? undefined : "caustics-shift 14s ease-in-out infinite",
        }}
      />
      {items.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-[-12vh] rounded-full border border-foam/20 bg-foam/10"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            ["--drift" as string]: `${b.drift}px`,
            animation: `bubble-rise ${b.duration}s linear ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
