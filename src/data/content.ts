import type { WikiArticle } from "@/types/game";

export const wikiCategories = [
  "Getting Started",
  "Fishing & Events",
  "Rods & Enchants",
  "Baits",
  "Pets & Eggs",
  "Economy & Museum",
  "Guilds & Social",
  "Extra Mechanics",
] as const;

export const wikiArticles: WikiArticle[] = [
  {
    slug: "getting-started",
    title: "Getting started with Bubble",
    category: "Getting Started",
    summary: "Your first steps into the fishing world.",
    tags: ["getting started", "new player", "beginner"],
    related: ["fishing-and-weather", "commands", "energy-and-cooldowns"],
    sections: [
      {
        heading: "The Basics",
        body: "You start with the free Wood Rod already equipped and 100 coins in your pocket, so there's nothing to buy first. Just run `/fish` to cast your first line. Once you've earned some coins, browse `/shop` for a better rod, bait, or a bigger backpack, and equip a new rod with `/rod equip <rod>`.",
      },
      {
        heading: "Daily Rewards",
        body: "Don't forget to claim your daily rewards using `/daily`. Claiming regularly builds a streak (with a 48-hour grace window) that grows the reward over time.",
      },
    ],
  },
  {
    slug: "fishing-and-weather",
    title: "Fishing, Weather & Events",
    category: "Fishing & Events",
    summary: "Mechanics behind casting your line and reeling them in.",
    sections: [
      {
        heading: "The Fishing Roll",
        body: "Every time you `/fish`, the game rolls for an event before anything else. Most of the time you'll get a standard bite, but you can also land nothing, reel in junk, snap your hook, hook a treasure chest, a lockbox, a sea monster, a golden fish, or trigger a legendary encounter. Weather and pet bonuses can pile extra rolls on top of a normal catch.",
      },
      {
        heading: "Weather",
        body: "Weather rotates on a weighted random roll every 10 minutes and never repeats the same type twice in a row. Rain, storms, snow, fog, blood moons, meteor showers, auroras and full moons all shift the odds of treasure chests and sea monsters appearing, and a handful of hidden species are gated to a specific weather type. See the Catch Conditions page for the full table and exact percentages. There is currently no in-chat weather alert. Check `/world` (alias `.weather`) any time to see what's active right now.",
      },
      {
        heading: "Seasons & Time of Day",
        body: "The season calendar (Spring → Summer → Autumn → Winter) advances automatically, spending roughly 15 minutes on each season before moving to the next. A full cycle takes about an hour. Time of day runs on a real-world clock in 5-minute phases (Morning → Day → Evening → Night, a 20-minute loop) and is the single biggest gate in the game: most hidden, high-rarity species are Night-only. Both are shown by `/world`.",
      },
      {
        heading: "Combos & Captchas",
        body: "Sometimes you hook something huge, triggering a quick-time captcha! Succeed to secure the catch, fail, and it slips away. Catching fish back-to-back without missing grants a combo multiplier that increases XP and coin payouts.",
      },
      {
        heading: "Energy System",
        body: "Fishing requires Energy. You have a maximum capacity, which regenerates naturally over time. If you run out, you can wait or spend consumable energy refills to keep fishing.",
      },
      {
        heading: "World Events (reference only)",
        body: "The game's data includes six named world events (Ancient Eclipse, Bioluminescent Bloom, Deep Current Surge, Frozen Reverie, Golden Tide and Void Whisper), and a few hidden late-game species reference one by name in their discovery hint. There is currently no live rotation that activates one of these at a time, so don't expect `/world` to show an active event yet. Treat the table on the Catch Conditions page purely as a reference for what those discovery hints mean.",
      },
    ],
  },
  {
    slug: "rarities",
    title: "Rarity Tiers",
    category: "Fishing & Events",
    summary: "Understanding the nine tiers of rarity.",
    tags: ["rarity", "rarities", "common", "divine"],
    related: ["fishing-and-weather", "rods-and-enchants", "worlds"],
    sections: [
      {
        heading: "From Common to Divine",
        body: "There are 250 species across both worlds (150 in The Shallows, 100 in The Neon Tide) distributed across 9 tiers: Common, Uncommon, Rare, Epic, Legendary, Mythic, Ancient, Celestial, and Divine. Catch rates drop steeply. While Commons bite constantly, Divines might take thousands of casts.",
      },
      {
        heading: "Collection value",
        body: "Higher rarity means much higher sell value and bigger Museum donation payouts. Your profile and encyclopedia track every discovery.",
      },
    ],
  },
  {
    slug: "rods-and-enchants",
    title: "Rods, Stats & Enchanting",
    category: "Rods & Enchants",
    summary: "Your most important tool, and how to improve it.",
    tags: ["rods", "enchants", "durability", "repair"],
    related: ["baits", "minions", "worlds"],
    sections: [
      {
        heading: "Rod Stats",
        body: "Every rod has Power (increases XP per catch), Luck (drags fish rarities upward), Monster Resistance (helps survive sea monster encounters), and Treasure Chance.",
      },
      {
        heading: "Durability & Repairs",
        body: "Rods have durability that depletes with use. Once it hits zero the rod stops working. Repair it with `/rod repair` for coins to bring it back to full.",
      },
      {
        heading: "Enchanting",
        body: "Later tier rods (Journeyman and Master) feature Enchant Slots. Enchants themselves aren't bought directly. You earn Upgrade Essence and enchant items from lockboxes, quests, guild raids and the Museum Shop, then apply them to your equipped rod with `/enchant`. Each of the 8 named enchants (Lucky Catch, Coin Blessing, Double Hook and others) has three upgradeable levels, and applying an owned item to a rod that's already at a lower level upgrades it in place. There's no reroll. An enchant's effect at each level is fixed, so choose which rod to invest essence into deliberately. See the Enchants page for the full list and exact values.",
      },
    ],
  },
  {
    slug: "baits",
    title: "Baits & Lures",
    category: "Baits",
    summary: "Target specific fish or boost your luck.",
    sections: [
      {
        heading: "Equipping Bait",
        body: "Baits are consumable items equipped using `/bait equip`. Each cast consumes one bait. They are essential for overcoming bad base luck on lower tier rods.",
      },
      {
        heading: "Bait Effects",
        body: "Some baits flatly increase the chance of pulling a Legendary (like Crystal Shrimp), while others act as \"magnets\" or heavily modify weight limits so you can pull larger fish.",
      },
    ],
  },
  {
    slug: "pets-and-eggs",
    title: "Pets and Eggs",
    category: "Pets & Eggs",
    summary: "Hatch companions that assist you. Powered by fishing, not a timer.",
    tags: ["pets", "eggs", "incubator", "hatch"],
    related: ["minions", "economy-and-museum"],
    sections: [
      {
        heading: "Buying & incubating an egg",
        body: "Buy an egg from `/shop` (Common, Rare or Ancient, in your current world) and start it hatching with `/incubator incubate`. You can have up to 3 eggs incubating at once by default. A Museum Shop buff (Fossilized Incubator Core) can raise that to 5.",
      },
      {
        heading: "Hatching runs on fishing XP, not a clock",
        body: "This is the part that surprises people: eggs don't hatch on a timer at all. Every bit of XP you earn from fishing is also applied to every egg currently incubating, and once an egg's accumulated XP crosses its target it hatches immediately. There's no waiting and nothing to \"speed up\". The only way to make an egg hatch faster is to keep fishing.",
      },
      {
        heading: "Hatch cost scales with your level",
        body: "Each egg's XP target is `baseHatchXp + (your player level × hatchXpPerLevel)`. Common needs 120 + 2 per level, Rare needs 260 + 3 per level, and Ancient needs 420 + 4 per level. So a higher-level character needs more fishing XP to hatch the exact same egg than a fresh one would.",
      },
      {
        heading: "Equipping companions",
        body: "Hatched pets sit in your collection until equipped. `/pets equip <pet>` (alias `.pet`) activates one for its passive bonus. You can have up to 3 pets equipped at once (fewer until you unlock extra slots). Pets like the Cat, Parrot, Shark and Void Wisp each carry one passive skill. Luck, XP gain, bonus coins, treasure chance, energy regen, energy cost reduction, critical-catch chance, rod-durability efficiency, or extra-fish chance, depending on the pet.",
      },
    ],
  },
  {
    slug: "economy-and-museum",
    title: "The Economy & Museum",
    category: "Economy & Museum",
    summary: "Making money, dynamic prices, and preserving history.",
    sections: [
      {
        heading: "Currencies",
        body: "Bubble Coins (earned from fishing/selling. The everyday spending currency), Bubble Gems (a scarcer, premium currency from dailies, golden fish, treasure and certain enchants. Used for backpacks, eggs, and guild expansion), and Ancient Museum Coins (earned exclusively by donating to the Museum, spent exclusively in the Museum Shop and on Minions).",
      },
      {
        heading: "Dynamic Selling Prices",
        body: "Sell prices aren't fixed. Every sale nudges that specific species' local price down by about 1.5%, so dumping the same fish over and over gets you steadily less per fish. Down to a floor of 40% of its base price. Prices drift back up about 1% every hour, and can rise as high as 250% of base if a species goes unsold for a while. Selling a wide variety, or spacing out big sell-offs, keeps your average price higher.",
      },
      {
        heading: "Selling",
        body: "Sell your catch to the game with `/sell` at that species' current dynamic price. There's no player-to-player market yet. See the Player Trading article for details.",
      },
      {
        heading: "The Museum",
        body: "Once you've caught a species, donate it with `/museum donate` for a one-time reward of Ancient Museum Coins. Better/rarer fish are worth more. Artifacts (found from treasure and lockboxes) can be donated too, for their own Ancient Coin value. Each species can only be donated once, so the Museum is really a long, finite dex-completion grind rather than a repeatable income source.",
      },
      {
        heading: "The Museum Shop",
        body: "Spend Ancient Museum Coins at `/museumshop` (alias `.mshop`) on permanent upgrades: small stacking boosts to Luck, coin bonus from selling, and treasure-chest chance; one-time unlocks like extra equipped-pet slots; and, at the higher end, all three Minions. It's the primary long-term sink for Ancient Coins once you've grabbed the basics.",
      },
    ],
  },
  {
    slug: "guilds",
    title: "Guilds & Multiplayer",
    category: "Guilds & Social",
    summary: "Team up, pool resources, and take down raid bosses together.",
    tags: ["guild", "raid", "clan", "multiplayer"],
    related: ["economy-and-museum", "commands"],
    sections: [
      {
        heading: "Creating & Joining",
        body: "Found a guild with `/guild create <name>` for 2,500 coins (3-32 characters, must be unique). By default guilds are open. Anyone can `/guild join <name>` as long as there's a free slot. A leader can close a guild with the settings toggle so only invited players (`/guild invite`) can join. You can only be in one guild at a time.",
      },
      {
        heading: "Roles",
        body: "Three ranks: Leader (the founder. Can rename, transfer leadership, promote/demote, kick, and disband), Officer (can invite/kick regular members and start raids), and Member. Promote trusted members with `/guild promote` and demote with `/guild demote`.",
      },
      {
        heading: "Member Capacity. A paid, sequential upgrade",
        body: "Every guild starts with room for 8 members. Growing past that is entirely gem-funded through `/guild expand`, and tiers must be bought in order. You can't skip ahead. Tier 1 takes you to 16 members for 150 gems, Tier 2 to 22 for 350 gems, Tier 3 to 28 for 500 gems, Tier 4 to 34 for 750 gems, and Tier 5 (the current max) to 40 members for 1,250 gems. Guild level does NOT grant extra member slots. See below.",
      },
      {
        heading: "Guild Level & the Shared Treasury",
        body: "Anyone can `/guild deposit <amount>` coins into the guild's shared storage (`storageCoins`), which also earns the guild XP and, at 1,000 × current-level XP, a level-up. Leveling raises three passive buffs shared by every member. Bonus XP, bonus coins, and bonus luck. Each individually capped at a modest ceiling (XP and coin bonuses cap at 20%, luck bonus caps at 50%) so they stay a nice-to-have rather than a requirement. There is no automatic tax on member earnings; deposits are entirely voluntary. Each member's total lifetime contribution is tracked and typically used to rank members on the guild's internal leaderboard.",
      },
      {
        heading: "Guild Raids",
        body: "An Officer or the Leader can start a raid with `/guild raid` once every 24 hours per guild. The boss's HP and the reward pool both scale up with the guild's level and member count, so bigger, more active guilds fight tougher, more rewarding bosses. Once started, every member can pile on damage with repeated `/guild raid` calls during the 2-hour window. If the boss goes down before time runs out, rewards are split: a flat 25% of the coin pool always goes straight to the guild's shared treasury, and the rest of the coins plus all the gems are paid out to individual participants in proportion to how much damage each of them dealt.",
      },
      {
        heading: "MOTD & Info",
        body: "Leaders and Officers can set a short message-of-the-day with `/guild motd` that shows at the top of `/guild info` for every member. Use `/guild members` to see the full roster with roles and contribution totals, and `/guild list` to browse other guilds before deciding where to apply.",
      },
    ],
  },
  {
    slug: "backpacks",
    title: "Backpacks",
    category: "Fishing & Events",
    summary: "Inventory capacity for your caught fish. Separate from Energy and separate from fishing power.",
    tags: ["backpack", "inventory", "capacity", "satchel"],
    related: ["fishing-and-weather", "economy-and-museum", "minions"],
    sections: [
      {
        heading: "What a backpack does (and doesn't do)",
        body: "Your backpack is the cap on how many fish you can be holding, uncaught-and-unsold, at once. It's purely a capacity item. Backpacks carry no Luck, no Legendary/Mythic chance, and no fishing-speed bonus. If you want to catch better fish, upgrade your rod; if you want to catch and hold MORE fish before you have to sell, upgrade your backpack.",
      },
      {
        heading: "Stacks, not slots",
        body: "Capacity is measured in stacked units shared across every species, not a fixed number of individual fish slots. A single stack of 20 Bluegill costs the same 20 units as 20 fish spread across five different rare species. There's no limit on how many different species you can be carrying at once, only on the total count.",
      },
      {
        heading: "What happens when it's full",
        body: "If your backpack is full and you keep fishing, the catch isn't lost. It's automatically sold on the spot for its normal coin value, and everything else about the catch (XP, quest progress, collection records) still applies normally. It's a nudge to go sell or upgrade, not a hard wall.",
      },
      {
        heading: "The Tiers",
        body: "Novice Satchel. Free starting backpack, 28 units. Durable Rucksack. 800 gems, 65 units. Pro Technical Pack. 2,500 gems, 145 units. Master Bubble Pack. 6,000 gems, 290 units (the current endgame tier). Buy and switch between owned tiers any time from `/shop` → Backpacks, or with `/backpack` (alias `.bp`/`.satchel`) directly.",
      },
    ],
  },
  {
    slug: "minions",
    title: "Minions",
    category: "Pets & Eggs",
    summary: "Companions that fish alongside you. Never on their own.",
    tags: ["minion", "companion", "museum shop", "ancient tokens"],
    related: ["backpacks", "rods-and-enchants", "economy-and-museum", "prestige"],
    sections: [
      {
        heading: "The core rule",
        body: "A minion can ONLY fish as a direct result of YOU actively using `/fish` or `.fish`. There is no \"send fishing\" button and no way to leave a minion running while you're offline. Every catch a minion makes happens in the same moment as one of your own casts, and its results never affect yours or vice versa.",
      },
      {
        heading: "No shared Energy",
        body: "Minions do not touch your Energy bar at all. You spend Energy on your own cast exactly as normal, and whatever a minion does alongside it is completely free.",
      },
      {
        heading: "Getting a minion",
        body: "All three minions are bought from the Museum Shop (`/museumshop`) with Ancient Museum Coins: Nimbus-Hauler for 1,800, Fen-Sifter for 4,500, and Lure-Kin for 9,000. You can own all three at once, and manage any of them from `/minion` (aliases `.minions`/`.companion`).",
      },
      {
        heading: "The three minions",
        body: "Nimbus-Hauler is the accessible, dependable option. Reliable fishing speed and decent rod-durability efficiency, but the weakest odds at rare fish. Fen-Sifter sits in the middle with better speed and noticeably better rare-fish odds to justify its higher price. Lure-Kin is the specialist: the fastest of the three and the best shot at Legendary/Mythic catches, at the highest cost.",
      },
      {
        heading: "Fishing speed & the hard cap",
        body: "Every minion's attempts-per-minute grows slowly as it levels, but is hard-capped well below what an active player can achieve. Even a maxed-out Level 100 Lure-Kin never approaches, let alone exceeds, your own fishing rate. Minions are built to make active fishing more rewarding, not to replace it.",
      },
      {
        heading: "Rarity ceiling",
        body: "Minions can never catch Ancient, Celestial, or Divine fish. Mythic is the hardest cap. They also never find treasure chests, lockboxes, artifacts, keys, gems, golden fish, pet eggs, enchantments, or sea monsters; they only ever produce ordinary fish for their own backpack. Chasing the rarest tiers, and every non-fish reward in the game, still requires you to fish yourself.",
      },
      {
        heading: "Leveling",
        body: "Minions have their own independent level and XP, earned by catching fish, up to Level 100. Leveling does NOT add rare-fish chance. Instead it raises fishing efficiency (within the hard cap above), grows the minion's own backpack capacity at set milestones (Levels 10, 20, 30, 50, 75 and 100), and unlocks the ability to equip stronger rods.",
      },
      {
        heading: "Rods & durability",
        body: "Give a minion one of your own rods from `/minion` → Manage Rod. Stronger rods need a higher Minion Level to unlock. A fresh Level 1 minion can only use the earliest rods, while your best endgame rods need a Level 60-100 minion. Handing a rod to a minion makes an independent copy with its own fresh durability; your own copy (and any enchantments on it) is untouched and works normally again the moment you take the rod back. A minion's rod loses durability as it fishes and stops working entirely at 0. Repair it any time from the minion's profile for coins, the same rate as repairing your own rod. Minion rods do NOT activate enchantments while assigned. The enchantment isn't removed or consumed, it's simply inactive until the rod is back in your own hands.",
      },
      {
        heading: "Collecting the catch",
        body: "Each minion has its own separate backpack. Once it's full the minion stops catching fish (your own fishing continues normally) until you collect it from the minion's profile, which moves everything into your own backpack. Space allowing.",
      },
      {
        heading: "Prestige",
        body: "A minion's level, XP, and ownership all survive Prestige. You keep every minion you've raised. Its assigned rod and its backpack contents are cleared on Prestige, exactly like your own gear and inventory, since a world-specific rod or a bag of last-world's fish wouldn't make sense in the new world.",
      },
    ],
  },
  {
    slug: "prestige",
    title: "Prestige",
    category: "Extra Mechanics",
    summary: "Ascend to a new world once you've mastered this one.",
    tags: ["prestige", "ascend", "reset", "world"],
    related: ["worlds", "minions", "quests-and-levels", "getting-started"],
    sections: [
      {
        heading: "Requirements",
        body: "Prestige unlocks once you've reached player Level 500 AND caught at least one of every fish species in your current world. Full Museum dex completion, no exceptions. Check `/prestige` (alias `.ascend`) any time to see exactly how close you are to both requirements.",
      },
      {
        heading: "What resets",
        body: "Prestiging is a real reset: your player level and XP go back to 1/0, coins reset to the starting amount, your fish inventory (backpack contents) empties, your rods reset to just the starting Wood Rod, your baits and eggs clear out, your pets and any incubating eggs are gone, energy refills to max, and your Luck plus your Ancient/Celestial/Divine pity counters all reset to zero.",
      },
      {
        heading: "What you keep",
        body: "Gems, Ancient Museum Coins, your Museum collection and museum buffs, achievements, guild membership, and every backpack tier you've ever bought all carry over untouched. Owned minions keep their level, XP and ownership too. Only their assigned rod and backpack contents are cleared, matching the same reset your own gear gets. Your completed dex from the world you're leaving isn't deleted; it's archived internally rather than wiped, even though there's currently no in-game command to browse old dexes.",
      },
      {
        heading: "The reward",
        body: "On top of unlocking a brand new world (new fish, new rods, new bait, new pets. See the Worlds article), prestiging grants an immediate +30% XP bonus that lasts 3 days, helping you power back through the early levels quickly.",
      },
    ],
  },
  {
    slug: "worlds",
    title: "Worlds",
    category: "Extra Mechanics",
    summary: "Every Prestige unlocks an entire new world to fish in.",
    tags: ["world", "shallows", "neon tide", "prestige"],
    related: ["prestige", "rods-and-enchants", "fishing-and-weather"],
    sections: [
      {
        heading: "World 0. The Shallows",
        body: "The world every player starts in. Home to 150 fish species and the first 9-rod ladder, from the free Wood Rod up to the 7.5-million-coin Cosmic Rod.",
      },
      {
        heading: "World 1. The Neon Tide",
        body: "Unlocked at your first Prestige. A stranger, bioluminescent, cavern-and-mutation-themed world with its own 100 fish species and its own parallel 9-rod ladder (Sunflower Rod through the equally powerful Necobone Rod). Check `/world` any time to see which world you're currently fishing in alongside the live weather, season, and time of day.",
      },
      {
        heading: "More worlds",
        body: "Each further Prestige is designed to unlock another new world in the same way, with its own fish, rods, bait, and pets. The loop repeats for as many times as you're willing to reset and grind back up.",
      },
    ],
  },
  {
    slug: "lockboxes",
    title: "Lockboxes & Keys",
    category: "Economy & Museum",
    summary: "Locked containers found while fishing, opened with a matching key.",
    tags: ["lockbox", "key", "chest"],
    related: ["fishing-and-weather", "economy-and-museum"],
    sections: [
      {
        heading: "Finding one",
        body: "Lockboxes turn up as their own fishing event (a heavy, rusted box hooked mid-cast) rather than something you buy. Which tier you can find is gated by your player level. Keys drop separately, mainly from treasure chests and other fishing events.",
      },
      {
        heading: "Opening",
        body: "Once you're holding a lockbox and its matching key, open it with `/open <lockbox>`. Higher tiers need a higher player level but pay out substantially more.",
      },
      {
        heading: "The Tiers",
        body: "Sunken Lockbox (Level 1+, opened with a Sunken Key). A solid coin-and-gem reward with a real shot at an enchantment. Magma Lockbox (Level 25+, Magma Key). Bigger coin and gem payouts plus a real shot at an artifact on top of enchantments. Elderwood Lockbox (Level 60+, Elderwood Key). The rarest and richest tier, with high odds of both an enchantment and an artifact alongside the biggest coin and gem rewards.",
      },
    ],
  },
  {
    slug: "quests-and-levels",
    title: "Quests & Leveling",
    category: "Extra Mechanics",
    summary: "Daily tasks and your long-term progression.",
    tags: ["quests", "leveling", "xp", "daily"],
    related: ["getting-started", "prestige", "energy-and-cooldowns"],
    sections: [
      {
        heading: "Player Leveling",
        body: "Every catch rewards XP. Every level-up pays out coins on the spot (a base amount plus a bit more per level), and every 5th level also grants a small batch of bonus bait. So leveling keeps you steadily funded even between bigger goals like a new rod. The encyclopedia also grants its own separate milestone reward as you cross discovery-count thresholds.",
      },
      {
        heading: "Daily Quests",
        body: "Use `/quests` to see your 3 randomly-assigned daily tasks (casting, catching a certain amount, hitting a rarity, or building a combo streak). They reset with the UTC calendar day, and each one pays out its own coins and XP when claimed. There's no separate bonus for finishing all three.",
      },
    ],
  },

  {
    slug: "commands",
    title: "Command reference",
    category: "Getting Started",
    summary: "Every slash command grouped by what it does.",
    tags: ["commands", "slash", "help"],
    related: ["getting-started", "economy-and-museum", "guilds", "backpacks", "minions", "prestige"],
    sections: [
      {
        heading: "Fishing",
        body: "`/fish` casts your line. `/rod equip <rod>` swaps rods, `/rod repair` restores durability, and `/bait equip <bait>` puts a bait on the hook. `/energy` shows your current energy and the next refill tick. `/world` (alias `.weather`) shows the current world, weather, season and time of day.",
      },
      {
        heading: "Collection",
        body: "`/museum` (aliases `.encyclopedia`/`.dex`) lists species you've discovered and lets you donate them for Ancient Museum Coins. `/profile` (aliases `.p`/`.me`) shows your level, stats and equipment.",
      },
      {
        heading: "Economy",
        body: "`/shop` browses rods, baits, eggs and backpacks; `/buy <item>` purchases them, and `/sell` converts your catch to coins at the current dynamic price. `/daily` claims your login streak reward. `/museumshop` (alias `.mshop`) spends Ancient Museum Coins on permanent buffs, pet slots and Minions.",
      },
      {
        heading: "Backpacks & Minions",
        body: "`/backpack` (aliases `.bp`/`.satchel`) shows your current backpack and lets you buy or switch tiers. `/minion` (aliases `.minions`/`.companion`) opens a minion's profile to collect its catch, manage its rod, repair it, or rename it.",
      },
      {
        heading: "Pets and eggs",
        body: "`/incubator incubate <egg>` starts a hatch, `/incubator status` checks the timer, and `/pets equip <pet>` (alias `.pet`) activates a companion's passive bonus.",
      },
      {
        heading: "Prestige",
        body: "`/prestige` (alias `.ascend`) checks your Prestige eligibility and, once you qualify, lets you ascend to the next world.",
      },
      {
        heading: "Guilds",
        body: "`/guild create <name>`, `/guild join <name>`, `/guild invite <@user>`, `/guild deposit <amount>` and `/guild expand` cover the core loop; `/guild raid` starts or contributes to a raid, and `/guild info`/`/guild members` show your guild's dashboard and roster. (`/guild`, `.g`, `.clan` and `.crew` all work as the base command.)",
      },
      {
        heading: "Other",
        body: "`/leaderboard` shows server and global rankings, and `/quests` (aliases `.quest`/`.dq`) lists your daily tasks.",
      },
    ],
  },
  {
    slug: "energy-and-cooldowns",
    title: "Energy, cooldowns and streaks",
    category: "Extra Mechanics",
    summary: "How often you can fish and how to keep the pace up.",
    tags: ["energy", "cooldown", "streak", "daily"],
    related: ["fishing-and-weather", "quests-and-levels"],
    sections: [
      {
        heading: "Spending energy",
        body: "Every cast costs energy. The base maximum is a flat 100. It does NOT grow with player level. The only way to raise your cap is the Museum Shop's Ancient Energy Reserve buff (+10 max energy per purchase, up to 20 times for +200 total). Energy regenerates passively at 1 point per minute whether or not you're online.",
      },
      {
        heading: "Refills",
        body: "There's no refill item that drops from chests or quests. Instead, `/energy refill` tops your bar all the way to full instantly for a flat 25 gems. Useful when you want to keep casting into a good weather window without waiting out the regen timer. `/energy` on its own just shows your current energy and cap.",
      },
      {
        heading: "Streaks",
        body: "Claiming `/daily` builds a streak that makes the reward grow over time. You have a 48-hour grace window to claim again and keep the streak alive. Wait longer than that and it resets to zero.",
      },
    ],
  },
  {
    slug: "market-and-trading",
    title: "Player Trading",
    category: "Economy & Museum",
    summary: "There is currently no player-to-player market or trading system.",
    tags: ["market", "trade", "coins"],
    related: ["economy-and-museum", "rarities"],
    sections: [
      {
        heading: "Not currently available",
        body: "As of this writing, Bubble has no way to trade, gift, or sell items directly to another player. There is no `/market` or `/trade` command. The only way to convert a fish into coins is `/sell`, which always sells to the game itself at that species' current dynamic price (see the Economy & Museum article), never to another player.",
      },
      {
        heading: "Staying safe",
        body: "Because there's no built-in trading system, treat ANY offer to \"trade\" items or currency with another player as a scam. There's no bot-mediated way for it to happen safely, so it's almost certainly someone trying to get you to hand something over first outside the game.",
      },
    ],
  },
  {
    slug: "glossary",
    title: "Glossary",
    category: "Extra Mechanics",
    summary: "Short definitions for the terms used across the wiki.",
    tags: ["glossary", "terms", "definitions"],
    related: ["rarities", "rods-and-enchants", "backpacks", "minions", "prestige"],
    sections: [
      {
        heading: "Stats",
        body: "Power raises XP gained per catch. Luck shifts the rarity roll upward. Monster Resistance reduces losses from sea monster and pirate encounters. Treasure Chance controls how often chests appear.",
      },
      {
        heading: "Items",
        body: "A rod is permanent equipment with durability. A bait is a consumable spent on a cast. An egg hatches into a pet. An enchant book is applied to one specific rod and cannot be applied twice to the same rod. A backpack caps how many fish you can hold at once. See the Backpacks article. A lockbox is a locked container found while fishing that needs a matching key to open.",
      },
      {
        heading: "Currencies",
        body: "Bubble Coins are the standard currency. Bubble Gems are premium and come from dailies, golden fish, treasure and certain enchants. Ancient Museum Coins come from donating ANY species or artifact to the Museum (not just high-rarity ones) and buy Museum Shop goods, including Minions.",
      },
      {
        heading: "Companions",
        body: "A pet is equipped for a passive bonus while you fish, hatched from an egg. A minion is a separate kind of companion that fishes alongside you. See the Minions article for how it differs from a pet.",
      },
      {
        heading: "Progression",
        body: "Prestige is resetting your level and gear to unlock an entirely new world, keeping select long-term progress like gems, museum buffs and owned minions. A world is one full Prestige tier's worth of fish, rods, bait and pets. World 0 (The Shallows) is where every player starts.",
      },
      {
        heading: "Guilds",
        body: "A Guild Raid is a timed, member-scaling boss fight any guild can start once every 24 hours, with rewards split between the shared treasury and individual participants based on damage dealt.",
      },
    ],
  },
];

export const wikiBySlug = (slug: string) => wikiArticles.find((a) => a.slug === slug);

export const faq: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "General",
    items: [
      {
        q: "What is Bubble?",
        a: "Bubble is a fishing MMORPG that runs entirely inside Discord. You fish, collect species, upgrade rods and baits, and hatch companions without leaving your server.",
      },
      {
        q: "How do I add Bubble to my server?",
        a: "Use the Invite Bubble button in the navigation bar. You need the Manage Server permission on the Discord server you are adding it to.",
      },
      {
        q: "Is Bubble free?",
        a: "Yes. Bubble is free to add and free to play.",
      },
    ],
  },
  {
    category: "Content",
    items: [
      {
        q: "How many fish are there?",
        a: "250 species across two worlds. 150 in The Shallows (World 0) and 100 in The Neon Tide (World 1, unlocked at your first Prestige). Spread across nine rarity tiers, from Common to Divine. Every species has its own page in the encyclopedia.",
      },
      {
        q: "How many rods and baits are there?",
        a: "18 rods (9 per world, each split into Beginner, Journeyman and Master tiers) and 24 baits (12 per world).",
      },
      {
        q: "How many pets can I collect?",
        a: "30 companions, hatched from 6 eggs total. Common, Rare and Ancient in each of the two worlds.",
      },
      {
        q: "What do enchants do?",
        a: "Eight rod enchants, each with three levels, boost things like rare-fish odds, sell price and XP gain. See the Enchants page for the full list and values.",
      },
    ],
  },
  {
    category: "This website",
    items: [
      {
        q: "Why do some entries show a placeholder icon?",
        a: "Artwork is loaded from the site's asset folder. Any entry without an uploaded image falls back to a placeholder glyph until the artwork is added.",
      },
      {
        q: "Does the site show live player data?",
        a: "No. This site is a read-only reference for the game's content. Player profiles, rankings and server statistics live inside Discord.",
      },
    ],
  },
];
