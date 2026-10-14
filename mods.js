// The catalogue. Add a mod = add an object. No build step.
//
//   download: release asset URL, or null for "not up yet"
//   extra:    more download links, [{ label, url }]
//   side:     "client" / "server", drives the filter
//   status:   "ok" | "issue" | "wip" | "pending"
window.MODS = [
  {
    id: "backpack-gun-slot",
    img: "img/backpack-gun-slot.png",
    name: "Backpack Gun Slot",
    tagline: "Strap a gun to your backpack",
    version: "1.0.1",
    spt: "4.1.6",
    side: ["client", "server"],
    status: "ok",
    blurb:
      "Every backpack gets an ON PACK weapon slot that carries a gun without eating grid space. The bigger the pack, the bigger the gun it takes.",
    features: [
      "Size tiers: sling bags take pistols, raid packs take rifles",
      "The slot shape and outline show what fits, hover it for the full list",
      "Your own tiers, per-backpack overrides, or let every pack take anything",
      "Works with Fika and headless"
    ],
    requires: [],
    download: "https://github.com/diemitze/BackpackGunSlot/releases/download/1.0.1/BackpackGunSlot-1.0.1.zip",
    source: "https://github.com/diemitze/BackpackGunSlot"
  },
  {
    id: "lootnet",
    img: "img/lootnet.png",
    name: "LootNET",
    tagline: "What did I actually make that raid",
    version: "1.2.0",
    spt: "4.1.6",
    side: ["client", "server"],
    status: "ok",
    blurb:
      "Shows the flea value of your loot while you're in the raid, then a summary when you get out: total, best finds, kills. Keeps your high scores between raids.",
    features: [
      "Live value label in the inventory screen",
      "PMC raids count what you picked up, scav raids count the whole kit",
      "Flea prices, falls back to handbook when flea has nothing"
    ],
    requires: [],
    download: "https://github.com/diemitze/LootNet/releases/download/1.2.0/LootNet.zip",
    source: "https://github.com/diemitze/LootNet"
  },
  {
    id: "weekend-drops",
    name: "Weekend Drops",
    tagline: "Challenges and crates on a weekly cycle",
    version: "1.0.7",
    spt: "4.1.6",
    side: ["client", "server"],
    status: "pending",
    statusNote: "4.1 is in Beta right now",
    blurb:
      "A new set of challenges every weekend. Finish them to fill three reward tiers and get crates mailed to you. Dailies pay GP coins, which you spend in a shop for cases and Arena crates.",
    features: [
      "Tiers count difficulty, not challenges, so one good raid doesn't clear the track",
      "PMC, scav and scav-run objectives",
      "Menu panel, in-raid widget on F7",
      "Kills still count if you die, but banked survival time resets to zero"
    ],
    requires: [],
    download: "https://github.com/diemitze/WeekendDrops/releases/download/1.0.7/WeekendDrops-1.0.7.zip",
    source: "https://github.com/diemitze/WeekendDrops"
  },
  {
    id: "resound",
    img: "img/resound.png",
    name: "Resound",
    tagline: "Different gun sounds",
    version: "1.2.0",
    spt: "4.1.6",
    side: ["client"],
    status: "ok",
    blurb:
      "Swaps weapon fire audio. Ships with Black Ops II for most guns and CS2 for the Deagles, but it just reads WAVs out of folders, so you can build your own pack for anything.",
    features: [
      "30 weapons, 10 sound sets",
      "Config page in the browser for picking packs per weapon",
      "Anything a pack doesn't cover stays vanilla"
    ],
    requires: [],
    download: "https://github.com/diemitze/resound/releases/download/1.2.0/Resound.zip",
    source: "https://github.com/diemitze/resound"
  },
  {
    id: "mia-lounge",
    img: "img/mia-lounge.png",
    name: "MIA Lounge",
    tagline: "Minigames for when you're dead",
    version: "1.0.0",
    spt: "4.1.3",
    side: ["server"],
    status: "ok",
    blurb:
      "A small arcade on your SPT server. Open a page in a browser while your friend finishes the raid, pick your profile and play against a bot or whoever else is dead. Winnings are paid out as XP and roubles through in-game mail.",
    features: [
      "Server only, nobody else installs anything",
      "Works from a second monitor, a phone or an alt-tab"
    ],
    requires: [],
    download: "https://github.com/diemitze/MIA-Lounge/releases/download/1.0.0/MIA-Lounge-1.0.0-SPT-4.1.zip",
    extra: [
      { label: "SPT 4.0 build", url: "https://github.com/diemitze/MIA-Lounge/releases/download/1.0.0/MIA-Lounge-1.0.0-SPT-4.0.zip" }
    ],
    source: "https://github.com/diemitze/MIA-Lounge"
  },
  {
    id: "female-pmc-voice",
    img: "img/female-pmc-voice.png",
    name: "Female PMC Voice (USEC)",
    tagline: "Extra voice option",
    version: "1.0.5",
    spt: "4.1.6",
    side: ["server"],
    status: "ok",
    blurb: "Adds a female PMC voice with a full line set.",
    features: [],
    requires: [{ name: "WTT CommonLib", detail: "3.x, server mod and client plugin" }],
    download: "https://github.com/diemitze/female-pmc-voice-USEC/releases/download/1.0.5/FemalePMCVoice_v1.0.5.zip",
    source: "https://github.com/diemitze/female-pmc-voice-USEC"
  },
  {
    id: "parmesan",
    img: "img/parmesan.png",
    name: "Parmesan",
    tagline: "Partizan rework",
    version: "1.0.1",
    spt: "4.1.2",
    side: ["client"],
    status: "ok",
    blurb:
      "Partizan is hardcoded to hunt you. He knows where you are at all times and comes for you every raid, wherever you spawn. This points him at the AI PMCs instead, so he roams and picks fights with them. He'll still shoot you if he actually sees you.",
    features: [
      "Targets a random living AI PMC instead of you, scavs left alone",
      "No more wallhack tracking, he uses normal sight and sound",
      "Optional: roams faster, and plants the grenades he already carries"
    ],
    requires: [],
    download: "https://github.com/diemitze/Parmesan---Partizan-Rework/releases/download/1.0.1/Parmesan.zip",
    source: "https://github.com/diemitze/Parmesan---Partizan-Rework"
  },
  {
    id: "knife-sprint",
    img: "img/knife-sprint.png",
    name: "Knife Sprint",
    tagline: "Run faster with a knife out",
    version: "1.0.1",
    spt: "4.1.6",
    side: ["client"],
    status: "ok",
    blurb:
      "everyone runs faster with a knife!. Speed is configurable in the F12 menu.",
    features: [],
    requires: [],
    download: "https://github.com/diemitze/knife-sprint/releases/download/1.0.1/KnifeSprint.zip",
    source: "https://github.com/diemitze/knife-sprint"
  },
  {
    id: "breakout-outlines",
    img: "img/breakout-outlines.png",
    author: "harmony",
    name: "Breakout Outlines",
    tagline: "Arena Breakout style loot outlines",
    version: "1.2.0",
    spt: "4.1.6",
    side: ["client"],
    status: "pending",
    statusNote: "Newest is 1.2.0 on Forge. The backup download here is still the original 1.0.0.",
    blurb:
      "Draws Arena Breakout Infinite style outlines around containers, loose loot and bodies so they're easier to spot. Made by harmony, co-developed with me.",
    features: [],
    requires: [],
    download: "https://github.com/diemitze/loot-outline/releases/download/1.0.0/LootOutline.zip",
    source: "https://github.com/diemitze/loot-outline"
  },
  {
    id: "sixth-sense-isac",
    name: "Sixth Sense ISAC",
    tagline: "Sound swap addon",
    version: "1.0.0",
    spt: "4.1",
    side: ["client"],
    status: "ok",
    blurb:
      "Replaces the default Sixth Sense sound with the ISAC rogue agent voice line from The Division.",
    features: [],
    requires: [{ name: "Sixth Sense" }],
    download: "https://github.com/diemitze/Sixth-Sense-addon/releases/download/1.0.0/BepInEx.7z",
    source: "https://github.com/diemitze/Sixth-Sense-addon"
  },
  {
    id: "bot-roaming",
    name: "no name yet",
    tagline: "a mod makeing bots roam in raids",
    version: "",
    spt: "4.1",
    side: ["client"],
    status: "wip",
    blurb: "a mod makeing bots roam around the map and run to POIs",
    features: [],
    requires: [],
    download: null,
    source: null
  },
  {
    id: "quick-loot",
    name: "Quick Loot",
    tagline: "Grabs the stuff you care about",
    version: "1.0.6",
    spt: "4.0.13",
    side: ["client", "server"],
    status: "issue",
    statusNote:
      "Semi broken on 4.1. working on a full rework and improve the Quick loot behavor etc.",
    blurb:
      "Opens containers and pulls out what matches your rules, so you're not clicking through every crate.",
    features: [
      "Searches unsearched containers and corpses first",
      "Rules by category: money, meds, food, ammo for guns you're carrying, barter, stims",
      "Anything on your wishlist or needed for a hideout upgrade",
      "High value stuff by flea price, optionally straight into the secure container"
    ],
    requires: [],
    download: null,
    source: null
  }
];
