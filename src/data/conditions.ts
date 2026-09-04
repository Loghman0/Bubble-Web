/**
 * CATCH CONDITION REFERENCE
 * -------------------------
 * Seasons, the day/night cycle, and the weather table — mirrored from the
 * Bubble bot's `data/weather.js` and the eligibility checks in
 * `services/fishingService.js`:
 *
 *   if (f.season     !== 'any' && f.season !== world.season)             -> not eligible
 *   if (f.weather    !== 'any' && !f.weather.includes(world.weather.id)) -> not eligible
 *   if (f.activeTime !== 'any' && !f.activeTime.includes(world.timeOfDay)) -> not eligible
 *   if (f.minLuck && effectiveLuck < f.minLuck)                          -> not eligible
 *
 * Everything a player needs to know to catch a species comes out of those
 * four checks plus `requiredRodLevel` and `requiredBait`.
 */

export interface ConditionDef {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export const SEASONS: ConditionDef[] = [
  {
    id: "spring",
    name: "Spring",
    emoji: "🌸",
    description: "The world calendar's first season. Rotates automatically alongside the year.",
  },
  {
    id: "summer",
    name: "Summer",
    emoji: "🌞",
    description: "Warm-water species such as the Bluefin Tuna only run in summer.",
  },
  {
    id: "autumn",
    name: "Autumn",
    emoji: "🍂",
    description: "Migration season. The Lake Sturgeon and friends surface now.",
  },
  {
    id: "winter",
    name: "Winter",
    emoji: "❄️",
    description: "Ice-water species, including the hidden Aurora Icefish, are winter-only.",
  },
];

export const TIMES_OF_DAY: ConditionDef[] = [
  { id: "morning", name: "Morning", emoji: "🌅", description: "Early bite window. Trout and other shallow feeders." },
  { id: "day", name: "Day", emoji: "☀️", description: "The default window; most species are active." },
  { id: "evening", name: "Evening", emoji: "🌆", description: "Predators move in as the light drops." },
  { id: "night", name: "Night", emoji: "🌙", description: "The biggest gate in the game. Most hidden species are night-only." },
];

export interface WeatherDef extends ConditionDef {
  /** Relative chance of being rolled when weather rotates. */
  weight: number;
  treasureChanceAdd: number;
  monsterChanceAdd: number;
}

export const WEATHER: WeatherDef[] = [
  { id: "sunny", name: "Sunny", emoji: "☀️", weight: 300, treasureChanceAdd: 0, monsterChanceAdd: 0, description: "Clear skies. Nothing special, nothing bad." },
  { id: "rain", name: "Rain", emoji: "🌧️", weight: 180, treasureChanceAdd: 0.01, monsterChanceAdd: 0, description: "Fish bite more readily in the rain." },
  { id: "storm", name: "Storm", emoji: "⛈️", weight: 90, treasureChanceAdd: 0.015, monsterChanceAdd: 0.02, description: "Rough water. Big risk, big reward." },
  { id: "snow", name: "Snow", emoji: "🌨️", weight: 90, treasureChanceAdd: 0.01, monsterChanceAdd: 0, description: "Only affects frozen regions, but affects them a lot." },
  { id: "fog", name: "Fog", emoji: "🌫️", weight: 90, treasureChanceAdd: 0.005, monsterChanceAdd: 0.01, description: "You can't see what's on the other end of the line until it's too late." },
  { id: "windy", name: "Windy", emoji: "💨", weight: 130, treasureChanceAdd: 0, monsterChanceAdd: 0, description: "Casts drift further. Purely cosmetic for now." },
  { id: "blood_moon", name: "Blood Moon", emoji: "🌕", weight: 120, treasureChanceAdd: 0.02, monsterChanceAdd: 0.05, description: "Something changes in the water when the moon turns red." },
  { id: "meteor_shower", name: "Meteor Shower", emoji: "☄️", weight: 80, treasureChanceAdd: 0.04, monsterChanceAdd: 0.01, description: "Fragments hit the water. Treasure chests spike hard." },
  { id: "aurora", name: "Aurora", emoji: "🌌", weight: 100, treasureChanceAdd: 0.015, monsterChanceAdd: 0, description: "Rare, beautiful, and the only time some Sky Lake fish surface." },
  { id: "full_moon", name: "Full Moon", emoji: "🌕", weight: 90, treasureChanceAdd: 0.02, monsterChanceAdd: 0.02, description: "The rarest gate of all. Legends say the biggest things surface tonight." },
];

export const weatherById = (id: string) => WEATHER.find((w) => w.id === id);
export const seasonById = (id: string) => SEASONS.find((s) => s.id === id);
export const timeById = (id: string) => TIMES_OF_DAY.find((t) => t.id === id);

/**
 * FISHING EVENTS — the first roll on every cast, before any fish is picked
 * (mirrored from `data/fishingEvents.js`). `baseWeight` is the relative
 * likelihood in a neutral roll.
 */
export const FISHING_EVENTS = [
  { id: "catch", label: "You got a bite!", baseWeight: 5200 },
  { id: "nothing", label: "Nothing bit. The water stays still.", baseWeight: 1600 },
  { id: "junk", label: "You reeled in some junk.", baseWeight: 900 },
  { id: "treasure", label: "A treasure chest surfaced!", baseWeight: 420 },
  { id: "broken_hook", label: "Your hook snapped!", baseWeight: 280 },
  { id: "sunken_lockbox", label: "You hooked a heavy, rusted metal box!", baseWeight: 200 },
  { id: "sea_monster", label: "Something huge is pulling back!", baseWeight: 140 },
  { id: "weather_bonus", label: "The weather is working in your favor!", baseWeight: 110 },
  { id: "pet_bonus", label: "Your pet spotted something!", baseWeight: 90 },
  { id: "golden_fish", label: "A GOLDEN fish flashed past your line!", baseWeight: 60 },
  { id: "legendary_encounter", label: "The water itself seems to be holding its breath...", baseWeight: 18 },
];

/**
 * Rod power levels from the bot's `data/rods.js` — the value each rod is
 * compared against `fish.requiredRodLevel`. The site's `data/rods.ts` only
 * carries the player level needed to buy a rod, so this map is what lets a
 * fish page name the cheapest rod strong enough to hook it.
 */
export const ROD_POWER_LEVEL: Record<string, number> = {
  wood_rod: 1,
  bamboo_rod: 10,
  iron_rod: 25,
  steel_rod: 60,
  reinforced_rod: 130,
  gold_rod: 220,
  coral_rod: 270,
  dragon_rod: 320,
  cosmic_rod: 380,
  sunflower_rod: 1,
  junk_rod: 10,
  peppermint_rod: 25,
  frozen_rod: 60,
  neoncyber_rod: 130,
  lightning_rod: 220,
  steampunk_rod: 270,
  royalscepter_rod: 320,
  necobone_rod: 380,
};
