import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { Rarity } from "@/types/game";
import { rarityGlow } from "@/components/game/primitives";

/**
 * Renders a 128x128 game asset.
 *
 * Drop your artwork into `public/assets/<folder>/<key>.png` and it appears
 * automatically. Until the image is decoded — or if it's missing entirely —
 * the frame stays a neutral rarity-tinted panel. Deliberately no emoji/glyph
 * fallback: a Unicode fish showing through while the real PNG loads looks
 * broken.
 */
export function GameAsset({
  src,
  alt,
  rarity,
  className,
}: {
  src: string;
  alt: string;
  rarity?: Rarity;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setFailed(false);
    setLoaded(false);
  }, [src]);

  return (
    <div
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br to-deep/60",
        rarity ? rarityGlow[rarity] : "from-lagoon/20",
        className,
      )}
    >
      {/* Neutral placeholder panel: visible while loading and if the art is missing. */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-2 rounded-lg bg-foreground/[0.04] shadow-[inset_0_0_24px_rgba(255,255,255,0.05)] transition-opacity duration-300",
          loaded && !failed ? "opacity-0" : "opacity-100",
        )}
      />
      {failed ? null : (
        <img
          src={src}
          alt={alt}
          width={128}
          height={128}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "relative size-3/4 object-contain [image-rendering:pixelated] transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  );
}
