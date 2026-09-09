import { cn } from "@/lib/utils";
import { RarityIcon } from "@/components/game/primitives";
import type { Rarity } from "@/types/game";

/**
 * A static, faithful recreation of a real Bubble catch message as it
 * actually renders in Discord — used to show the game in its native habitat
 * without embedding a live iframe. Colors are Discord's own dark-theme
 * palette (#313338 message background, #2b2d31 embed panel), not the site's
 * ocean theme — the whole point is that it reads as an authentic screenshot.
 *
 * Rarity accent colors are pulled 1:1 from the bot's `rarities.config.js`
 * embed colors so e.g. a Legendary catch here matches the orange left-border
 * you'd actually see in Discord. Rarity icons come from `RarityIcon`, which
 * uses the uploaded `public/assets/rarities/<rarity>.png` art (falls back to
 * an emoji glyph until that art is uploaded).
 */

const RARITY_HEX: Record<Rarity, string> = {
  Common: "#B0B0B0",
  Uncommon: "#4CAF50",
  Rare: "#2196F3",
  Epic: "#9C27B0",
  Legendary: "#FF9800",
  Mythic: "#E91E63",
  Ancient: "#795548",
  Celestial: "#00BCD4",
  Divine: "#FFD700",
};

export interface DiscordCatchDetail {
  /** e.g. "+920 XP" */
  xp: string;
  /** e.g. "🔥 Combo streak: 2x (10% bonus)" — omit if no combo. */
  combo?: string;
  /** Shown when the catch rolled a critical (double weight/XP). */
  critical?: boolean;
  /** e.g. "491 → 496 · 🪙 24,950 · +3x Worm" — omit if no level up this catch. */
  levelUp?: string;
}

export function DiscordCatchEmbed({
  username = "iamlowen",
  command = "fish",
  time = "Today at 19:00",
  fishName,
  description,
  rarity,
  weight,
  length,
  image,
  detail,
  className,
}: {
  username?: string;
  command?: string;
  time?: string;
  fishName: string;
  description: string;
  rarity: Rarity;
  weight: string;
  length: string;
  image: string;
  detail: DiscordCatchDetail;
  className?: string;
}) {
  const accent = RARITY_HEX[rarity];
  const summary = `Discord message: ${username} used /${command}. Bubble replied: ${rarity} catch, ${fishName}. ${description} Weight ${weight}, length ${length}. ${detail.xp}${detail.combo ? `, ${detail.combo}` : ""}${detail.critical ? ", critical catch" : ""}${detail.levelUp ? `, level up ${detail.levelUp}` : ""}.`;

  return (
    <div
      role="img"
      aria-label={summary}
      className={cn(
        "w-full max-w-md overflow-hidden rounded-lg font-sans shadow-2xl",
        className,
      )}
      style={{ background: "#313338" }}
    >
      {/* Decorative recreation of a real Discord message — the aria-label above
          gives assistive tech one clean sentence instead of this markup. */}
      <div aria-hidden className="contents">
      {/* command invocation line */}
      <div className="flex items-center gap-1.5 px-4 pt-3 text-[13px] text-[#949ba4]">
        <span className="text-[#949ba4]/70">↪</span>
        <span className="font-medium text-[#dbdee1]">{username}</span>
        <span>used</span>
        <span className="font-medium text-[#c9cdfb]">#{command}</span>
      </div>

      {/* message row: avatar + app name + embed */}
      <div className="flex gap-3 px-4 pt-1.5 pb-4">
        <img
          src="/bubble.png"
          alt=""
          width={40}
          height={40}
          className="mt-0.5 size-10 shrink-0 rounded-full bg-[#5865f2]/20 object-contain p-1 [image-rendering:pixelated]"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-[15px] font-semibold text-[#f2b93d]">Bubble</span>
            <span
              className="inline-flex items-center gap-0.5 rounded-[3px] bg-[#5865f2] px-1 py-px text-[10px] font-bold text-white"
              aria-hidden
            >
              ✓ APP
            </span>
            <span className="text-[11px] text-[#949ba4]">{time}</span>
          </div>

          {/* embed card */}
          <div
            className="mt-1.5 max-w-sm rounded border-l-4 py-2 pr-3 pl-3"
            style={{ background: "#2b2d31", borderColor: accent }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[15px] leading-snug font-semibold text-[#f2f3f5]">
                  <RarityIcon rarity={rarity} className="mr-0.5 inline-block size-4 align-[-3px]" />{" "}
                  {rarity.toUpperCase()} CATCH! <span className="font-semibold">{fishName}</span>
                </p>
                <p className="mt-1 text-[13px] leading-snug text-[#dbdee1]">{description}</p>
              </div>
              <img
                src={image}
                alt={fishName}
                width={56}
                height={56}
                className="size-12 shrink-0 rounded object-contain [image-rendering:pixelated] sm:size-14"
              />
            </div>

            <div className="mt-2.5 flex gap-8 text-[13px]">
              <div>
                <p className="font-semibold text-[#f2f3f5]">Rarity</p>
                <p className="mt-0.5 flex items-center gap-1 text-[#dbdee1]">
                  <RarityIcon rarity={rarity} className="size-3.5" /> {rarity}
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#f2f3f5]">Weight</p>
                <p className="mt-0.5 text-[#dbdee1]">{weight}</p>
              </div>
              <div>
                <p className="font-semibold text-[#f2f3f5]">Length</p>
                <p className="mt-0.5 text-[#dbdee1]">{length}</p>
              </div>
            </div>

            <div className="mt-2.5">
              <p className="text-[13px] font-semibold text-[#f2f3f5]">Details</p>
              <div className="mt-0.5 space-y-0.5 text-[13px] text-[#dbdee1]">
                <p>{detail.xp}</p>
                {detail.combo ? <p>{detail.combo}</p> : null}
                {detail.critical ? (
                  <p>
                    <span aria-hidden>💥</span> <span className="font-semibold">Critical catch!</span> Double
                    weight and double XP.
                  </p>
                ) : null}
                {detail.levelUp ? (
                  <p>
                    <span aria-hidden>⬆️</span> <span className="font-semibold">Level up!</span> {detail.levelUp}
                  </p>
                ) : null}
              </div>
            </div>

            <p className="mt-2.5 text-[11px] text-[#949ba4]">
              <span className="font-semibold">Bubble</span> • {time}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

/**
 * A minimal "casting" message — the line before a catch resolves. Mirrors
 * the bot's real `/fish` casting embed (thinking/waiting state).
 */
export function DiscordCastingEmbed({
  username = "iamlowen",
  time = "Today at 15:06",
  rodName = "Coral Rod",
  className,
}: {
  username?: string;
  time?: string;
  rodName?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Discord message: ${username} used /fish. Bubble replied: ${username} casts their ${rodName} into the deep blue. Waiting for a bite.`}
      className={cn(
        "w-full max-w-md overflow-hidden rounded-lg font-sans shadow-2xl",
        className,
      )}
      style={{ background: "#313338" }}
    >
      <div aria-hidden className="contents">
      <div className="flex items-center gap-1.5 px-4 pt-3 text-[13px] text-[#949ba4]">
        <span className="text-[#949ba4]/70">↪</span>
        <span className="font-medium text-[#dbdee1]">{username}</span>
        <span>used</span>
        <span className="font-medium text-[#c9cdfb]">#fish</span>
      </div>

      <div className="flex gap-3 px-4 pt-1.5 pb-4">
        <img
          src="/bubble.png"
          alt=""
          width={40}
          height={40}
          className="mt-0.5 size-10 shrink-0 rounded-full bg-[#5865f2]/20 object-contain p-1 [image-rendering:pixelated]"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-[15px] font-semibold text-[#f2b93d]">Bubble</span>
            <span className="inline-flex items-center gap-0.5 rounded-[3px] bg-[#5865f2] px-1 py-px text-[10px] font-bold text-white">
              ✓ APP
            </span>
            <span className="text-[11px] text-[#949ba4]">{time}</span>
          </div>
          <div className="mt-1.5 max-w-sm rounded border-l-4 border-[#5865f2] py-2 pr-3 pl-3" style={{ background: "#2b2d31" }}>
            <p className="text-[13px] leading-snug text-[#dbdee1]">
              <span aria-hidden>🎣</span> <span className="font-semibold text-[#f2f3f5]">{username}</span>{" "}
              winds up and casts their <span className="font-semibold text-[#f2f3f5]">{rodName}</span> into the
              deep blue<span aria-hidden>…🌊</span>
            </p>
            <p className="mt-2 text-[13px] text-[#949ba4] italic">
              Waiting for a bite<span aria-hidden>… 💧</span>
            </p>
            <p className="mt-2.5 text-[11px] text-[#949ba4]">
              <span className="font-semibold">Bubble</span> • {time}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
