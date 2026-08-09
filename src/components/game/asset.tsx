import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { Rarity } from "@/types/game";
import { rarityGlow } from "@/components/game/primitives";

/**
 * Renders a 128x128 game asset.
 *
 * Drop your artwork into `public/assets/<folder>/<key>.png` and it appears
 * automatically. Until then the frame shows a fallback glyph.
 */
export function GameAsset({
  src,
  alt,
  rarity,
  fallback = "🫧",
  className,
}: {
  src: string;
  alt: string;
  rarity?: Rarity;
  fallback?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);

  return (
    <div
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br to-deep/60",
        rarity ? rarityGlow[rarity] : "from-lagoon/20",
        className,
      )}
    >
      <span className="absolute text-4xl opacity-60 select-none" aria-hidden>
        {fallback}
      </span>
      {failed ? null : (
        <img
          src={src}
          alt={alt}
          width={128}
          height={128}
          loading="lazy"
          decoding="async"
          className="relative size-3/4 object-contain [image-rendering:pixelated]"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
