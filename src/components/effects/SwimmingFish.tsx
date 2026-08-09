import { motion, useReducedMotion } from "motion/react";

const FishShape = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 32" className={className} aria-hidden focusable="false">
    <path
      d="M2 16c10-12 26-14 38-9 6 2 10 6 12 9-2 3-6 7-12 9-12 5-28 3-38-9z"
      fill="currentColor"
      opacity="0.55"
    />
    <path d="M52 16l10-8v16l-10-8z" fill="currentColor" opacity="0.4" />
    <circle cx="16" cy="14" r="1.8" fill="var(--abyss)" />
  </svg>
);

/** Decorative silhouettes drifting across the hero. */
export function SwimmingFish() {
  const reduced = useReducedMotion();
  const lanes = [
    { top: "18%", size: 54, dur: 34, delay: 0, color: "text-lagoon" },
    { top: "42%", size: 92, dur: 48, delay: 6, color: "text-foam" },
    { top: "64%", size: 40, dur: 28, delay: 3, color: "text-treasure" },
    { top: "78%", size: 70, dur: 54, delay: 12, color: "text-lagoon" },
  ];

  if (reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {lanes.map((l, i) => (
        <motion.div
          key={i}
          className={`absolute ${l.color} opacity-30`}
          style={{ top: l.top, width: l.size }}
          initial={{ x: "-20vw" }}
          animate={{ x: "115vw", y: [0, -14, 6, 0] }}
          transition={{
            x: { duration: l.dur, delay: l.delay, repeat: Infinity, ease: "linear" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <FishShape className="w-full" />
        </motion.div>
      ))}
    </div>
  );
}
