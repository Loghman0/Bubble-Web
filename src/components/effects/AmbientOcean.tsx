import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Fixed, whole-session ambient layer: a very faint depth vignette plus a
 * handful of slow bubbles, mounted once in the root layout so pages that
 * don't build their own hero (most catalog/wiki pages, which correctly use
 * a plain centered PageHeader per the utility-product exception) still sit
 * on top of something rather than a flat solid background. Deliberately
 * much sparser and quieter than OceanBackdrop/DeepHorizon, which are
 * section-scoped, richer, and used for specific hero moments.
 */
export function AmbientOcean() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = !mounted || reduced ? 0 : 9;

  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const r = (n: number) => ((Math.sin((i + 1) * n) + 1) / 2) as number;
        return {
          left: Math.round(r(19.31) * 100),
          size: 3 + Math.round(r(61.7) * 10),
          delay: Math.round(r(37.9) * 300) / 10,
          duration: 34 + Math.round(r(88.2) * 220) / 10,
          opacity: 0.08 + r(9.4) * 0.14,
        };
      }),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(90% 60% at 50% -10%, color-mix(in oklab, var(--lagoon) 10%, transparent), transparent 60%), radial-gradient(70% 50% at 100% 100%, color-mix(in oklab, var(--abyss) 55%, transparent), transparent 70%)",
        }}
      />
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-[-6vh] rounded-full bg-foam/10"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            ["--drift" as string]: "0px",
            animation: `bubble-rise ${b.duration}s linear ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
