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
    sections: [
      {
        heading: "The Basics",
        body: "Once you invite Bubble to your server, you start with enough Bubble Coins to buy your first rod. Use `/shop` to browse equipment and `/buy rod wood_rod` to begin. Equip it with `/rod equip wood_rod` and you're ready to use `/fish`.",
      },
      {
        heading: "Daily Rewards",
        body: "Don't forget to claim your daily rewards using `/daily`. Logging in every day builds up a streak that increases your reward, capping out at a massive daily coin and gem boost.",
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
        body: "Every time you `/fish`, the game rolls for an event before anything else. You might catch a standard fish, find a treasure chest, encounter a sea monster, or get a weather bonus.",
      },
      {
        heading: "Weather Events",
        body: "The world of Bubble features a dynamic weather system that changes every hour. Rare legendary fishes only emerge during specific weather patterns like Storms or Blizzards. Weather alerts are broadcasted directly into active bot channels so you always know when a legendary window opens.",
      },
      {
        heading: "Combos & Captchas",
        body: "Sometimes you hook something huge, triggering a quick-time captcha! Succeed to secure the catch, fail, and it slips away. Catching fish back-to-back without missing grants a combo multiplier that increases XP and coin payouts.",
      },
      {
        heading: "Energy System",
        body: "Fishing requires Energy. You have a maximum capacity, which regenerates naturally over time. If you run out, you can wait or spend consumable energy refills to keep fishing.",
      }
    ],
  },
  {
    slug: "rarities",
    title: "Rarity Tiers",
    category: "Fishing & Events",
    summary: "Understanding the nine tiers of rarity.",
    sections: [
      {
        heading: "From Common to Divine",
        body: "There are 150 species distributed across 9 tiers: Common, Uncommon, Rare, Epic, Legendary, Mythic, Ancient, Celestial, and Divine. Catch rates drop exponentially—while Commons bite constantly, Divines might take thousands of casts.",
      },
      {
        heading: "Collection value",
        body: "Higher rarity means much higher sell value and massive museum token payouts. Your profile and encyclopedia track every discovery.",
      },
    ],
  },
  {
    slug: "rods-and-enchants",
    title: "Rods, Stats & Enchanting",
    category: "Rods & Enchants",
    summary: "Your most important tool, and how to improve it.",
    sections: [
      {
        heading: "Rod Stats",
        body: "Every rod has Power (increases XP), Luck (drags fish rarities upward), Monster Resistance (helps survive pirate attacks), and Treasure Chance.",
      },
      {
        heading: "Durability & Repairs",
        body: "Rods have durability that depletes upon heavy use. Don't worry—they don't break forever! You can repair them in the shop to keep them in top condition.",
      },
      {
        heading: "Enchanting",
        body: "Later tier rods (Journeyman and Master) feature Enchant Slots! You can apply enchants like Lucky Catch, Coin Blessing and Double Hook, each with three upgradeable levels. If you don't like an enchant, you can reroll it. See the Enchants page for the full list and exact values.",
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
    summary: "Hatch companions that assist you.",
    sections: [
      {
        heading: "Incubators",
        body: "Purchase an egg from `/shop eggs` and place it in the incubator using `/incubator incubate`. It takes time to hatch, but you can speed it up.",
      },
      {
        heading: "Companions",
        body: "Companions like Parrots, Sharks, and Void Wisps have unique passive stats. An active pet might buff your energy regeneration, give you bonus coins on every catch, or passively hunt for treasure chests while you cast.",
      },
    ],
  },
  {
    slug: "economy-and-museum",
    title: "The Economy & Museum",
    category: "Economy & Museum",
    summary: "Making money and preserving history.",
    sections: [
      {
        heading: "Currencies",
        body: "Bubble Coins (earned from fishing/selling), Bubble Gems (premium/rare drops), and Ancient Coins (exclusive to the Museum).",
      },
      {
        heading: "The Market",
        body: "You can trade items with other players using the `/market`. Note that a market tax exists to prevent hyperinflation, so list your prices wisely.",
      },
      {
        heading: "The Museum",
        body: "Once you catch a species, you can donate it to the museum (`/museum donate`). The museum rewards you with Museum Tokens. High-rarity fish grant Ancient Coins, which can be spent on exclusive end-game artifacts and titles.",
      },
    ],
  },
  {
    slug: "guilds",
    title: "Guilds & Multi-player",
    category: "Guilds & Social",
    summary: "Team up and rule the ocean.",
    sections: [
      {
        heading: "Creating a Guild",
        body: "Pool your resources and create a Guild. You can invite friends, assign officer roles, and chat in your unified guild bank.",
      },
      {
        heading: "Guild Perks & Taxes",
        body: "Guilds can set an optional guild tax, where a percentage of member earnings go to the guild bank. These funds are used to level up the guild, unlocking massive global luck and power buffs for all members.",
      },
    ],
  },
  {
    slug: "quests-and-levels",
    title: "Quests & Leveling",
    category: "Extra Mechanics",
    summary: "Daily tasks and your long-term progression.",
    sections: [
      {
        heading: "Player Leveling",
        body: "Every action rewards experience. The level curve gets steeper as you go, but passing milestones grants massive one-time rewards of gems and coins.",
      },
      {
        heading: "Daily Quests",
        body: "Use `/quests` to see your 3 daily tasks. They reset at midnight UTC. Completing all three grants extra experience and lootboxes.",
      },
    ],
  },

  {
    slug: "commands",
    title: "Command reference",
    category: "Getting Started",
    summary: "Every slash command grouped by what it does.",
    tags: ["commands", "slash", "help"],
    related: ["getting-started", "economy-and-museum", "guilds"],
    sections: [
      {
        heading: "Fishing",
        body: "`/fish` casts your line. `/rod equip <rod>` swaps rods, `/rod repair` restores durability, and `/bait equip <bait>` puts a bait on the hook. `/energy` shows your current energy and the next refill tick.",
      },
      {
        heading: "Collection",
        body: "`/encyclopedia` lists species you have discovered, `/profile` shows your level, stats and equipment, and `/museum donate` hands a species over for museum tokens.",
      },
      {
        heading: "Economy",
        body: "`/shop` browses rods, baits and eggs, `/buy <item>` purchases them, `/sell` converts your catch to coins, and `/market` lists or buys player offers. `/daily` claims your login streak reward.",
      },
      {
        heading: "Pets and eggs",
        body: "`/incubator incubate <egg>` starts a hatch, `/incubator status` checks the timer, and `/pet equip <pet>` activates a companion's passive bonus.",
      },
      {
        heading: "Social",
        body: "`/guild create`, `/guild invite`, `/guild bank` and `/guild upgrade` cover guild play. `/leaderboard` shows server and global rankings, and `/quests` lists your daily tasks.",
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
        body: "Every cast costs energy. Your maximum pool grows with your player level, and energy regenerates on a fixed timer whether or not you are online.",
      },
      {
        heading: "Refills",
        body: "Energy refills drop from chests, quests and the shop. They top your pool back up instantly, which matters most during a limited-time weather window.",
      },
      {
        heading: "Streaks",
        body: "Claiming `/daily` on consecutive days builds a streak multiplier. Missing a day resets it, so claim first and fish afterwards.",
      },
    ],
  },
  {
    slug: "market-and-trading",
    title: "Market and trading",
    category: "Economy & Museum",
    summary: "Buying and selling between players, and the tax that applies.",
    tags: ["market", "trade", "tax", "coins"],
    related: ["economy-and-museum", "rarities"],
    sections: [
      {
        heading: "Listing an item",
        body: "Use `/market list <item> <price>` to put fish, baits or eggs up for sale. Listings are visible to every server the bot is in, so price against the global market and not just your own.",
      },
      {
        heading: "The tax",
        body: "A percentage of every completed sale is removed from circulation. It keeps coin inflation in check, so factor it into your asking price before undercutting a rival.",
      },
      {
        heading: "Safe trading",
        body: "All trades happen through the bot; there is no direct hand-off. If someone asks you to send items first outside the `/market`, it is a scam.",
      },
    ],
  },
  {
    slug: "glossary",
    title: "Glossary",
    category: "Extra Mechanics",
    summary: "Short definitions for the terms used across the wiki.",
    tags: ["glossary", "terms", "definitions"],
    related: ["rarities", "rods-and-enchants"],
    sections: [
      {
        heading: "Stats",
        body: "Power raises XP gained per catch. Luck shifts the rarity roll upward. Monster Resistance reduces losses from sea monster and pirate encounters. Treasure Chance controls how often chests appear.",
      },
      {
        heading: "Items",
        body: "A rod is permanent equipment with durability. A bait is a consumable spent on a cast. An egg hatches into a pet. An enchant book is applied to one specific rod and cannot be applied twice to the same rod.",
      },
      {
        heading: "Currencies",
        body: "Bubble Coins are the standard currency. Bubble Gems are premium and come from rare drops and milestones. Ancient Museum Coins come only from donating high-rarity species and buy museum-exclusive goods.",
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
        a: "150 species spread across nine rarity tiers, from Common to Divine. Every species has its own page in the encyclopedia.",
      },
      {
        q: "How many rods and baits are there?",
        a: "Nine rods split into Beginner, Journeyman and Master tiers, plus twelve baits.",
      },
      {
        q: "How many pets can I collect?",
        a: "Twelve companions, hatched from the Common, Rare and Ancient eggs.",
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
