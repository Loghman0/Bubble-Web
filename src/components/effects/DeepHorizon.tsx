import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";

import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Signature hero backdrop, used ONCE on the homepage. A split horizon: pale
 * teal sky above a hard waterline, deep abyss below, drifting light rays,
 * a distant kraken-tentacle silhouette, and rising bubbles. Deliberately a
 * different composition from OceanBackdrop (which is the reusable, lighter
 * full-page-depth layer used elsewhere) so the homepage has one unmistakable
 * moment instead of the same background repeated on every section.
 */
export function DeepHorizon() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const bubbleCount = !mounted || reduced ? 0 : isMobile ? 10 : 20;

  const bubbles = useMemo(
    () =>
      Array.from({ length: bubbleCount }, (_, i) => {
        const r = (n: number) => ((Math.sin((i + 1) * n) + 1) / 2) as number;
        return {
          left: Math.round(r(12.9898) * 100),
          size: 3 + Math.round(r(78.233) * 16),
          delay: Math.round(r(43.111) * 200) / 10,
          duration: 16 + Math.round(r(93.989) * 140) / 10,
          drift: Math.round((r(27.42) - 0.5) * 70),
          opacity: 0.2 + r(11.7) * 0.4,
        };
      }),
    [bubbleCount],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 surface-horizon" />

      {/* Light rays fanning down from the surface */}
      <div
        className="absolute inset-x-0 top-[30%] bottom-0 opacity-30 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 200deg at 30% 0%, transparent 0deg, color-mix(in oklab, var(--foam) 30%, transparent) 8deg, transparent 22deg, transparent 40deg, color-mix(in oklab, var(--lagoon) 22%, transparent) 50deg, transparent 66deg)",
          animation: reduced ? undefined : "light-rays-drift 16s ease-in-out infinite",
        }}
      />

      {/* Caustics shimmer near the waterline */}
      <div
        className="absolute inset-x-0 top-[30%] h-[26%] opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(50% 100% at 25% 0%, color-mix(in oklab, var(--foam) 35%, transparent), transparent 70%), radial-gradient(40% 100% at 75% 10%, color-mix(in oklab, var(--lagoon) 30%, transparent), transparent 70%)",
          animation: reduced ? undefined : "caustics-shift 12s ease-in-out infinite",
        }}
      />

      {/* Distant kraken tentacle, rising from the depths on the right */}
      <svg
        className="absolute right-[-4%] bottom-[-6%] h-[62%] w-auto opacity-[0.16] sm:h-[75%]"
        style={{
          transformOrigin: "bottom right",
          animation: reduced ? undefined : "tentacle-sway 9s ease-in-out infinite",
        }}
        viewBox="0 0 320 420"
        fill="none"
      >
        <path
          d="M300 420C300 420 260 300 220 240C180 180 140 170 130 120C120 70 160 20 210 10C170 30 150 70 160 110C170 150 210 160 240 200C280 250 300 340 300 420Z"
          fill="var(--abyss)"
        />
        <path
          d="M300 420C300 420 270 320 235 255C230 245 224 235 218 226"
          stroke="var(--foam)"
          strokeOpacity="0.15"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* Waterline highlight */}
      <div className="absolute inset-x-0 top-[33.5%] h-px bg-gradient-to-r from-transparent via-foam/40 to-transparent" />

      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-[-8vh] rounded-full border border-foam/25 bg-foam/10"
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
