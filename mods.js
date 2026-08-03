// The catalogue. Add a mod = add an object. No build step.
//
//   download: release asset URL, or null for "not up yet"
//   side:     "client" / "server", drives the filter
//   status:   "ok" | "issue" | "wip"
window.MODS = [
  {
    id: "parmesan",
    group: "mine",
    name: "Parmesan",
    tagline: "Partizan rework",
    version: "1.0.1",
    spt: "4.1",
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
    download: null,
    source: null
  },
  {
    id: "lootnet",
    group: "mine",
    name: "LootNET",
    tagline: "What did I actually make that raid",
    version: "1.1.0",
    spt: "4.1",
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
    download: "https://github.com/diemitze/LootNet/releases/download/1.1.0/LootNet.zip",
    source: "https://github.com/diemitze/LootNet"
  },
  {
    id: "weekend-drops",
    group: "mine",
    name: "Weekend Drops",
    tagline: "Challenges and crates on a weekly cycle",
    version: "1.0.4",
    spt: "4.1",
    side: ["client", "server"],
    status: "ok",
    blurb:
      "A new set of challenges every weekend. Finish them to fill three reward tiers and get crates mailed to you. Dailies pay GP coins, which you spend in a shop for cases and Arena crates.",
    features: [
      "Tiers count difficulty, not challenges, so one good raid doesn't clear the track",
      "PMC, scav and scav-run objectives",
      "Menu panel, in-raid widget on F7",
      "Kills still count if you die, but banked survival time resets to zero"
    ],
    requires: [],
    download: null,
    source: null
  },
  {
    id: "resound",
    group: "mine",
    name: "Resound",
    tagline: "Different gun sounds",
    version: "1.1.1",
    spt: "4.1",
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
    download: null,
    source: null
  },
  {
    id: "female-pmc-voice",
    group: "mine",
    name: "Female PMC Voice",
    tagline: "Extra voice option",
    version: "1.0.3",
    spt: "4.1",
    side: ["server"],
    status: "ok",
    blurb: "Adds a female PMC voice with a full line set.",
    features: [],
    requires: [{ name: "WTT CommonLib", detail: "3.x, server mod and client plugin" }],
    download: null,
    source: null
  },
  {
    id: "knife-sprint",
    group: "mine",
    name: "Knife Sprint",
    tagline: "Run faster with a knife out",
    version: "1.0.1",
    spt: "4.1",
    side: ["client"],
    status: "ok",
    blurb:
      "You're holding a knife, not a machine gun, so you should move quicker. Speed is configurable in the F12 menu.",
    features: [],
    requires: [],
    // latest release is still 1.0.0 (the 4.0 build); link it once 1.0.1 is tagged
    download: null,
    source: "https://github.com/diemitze/knife-sprint"
  },
  {
    id: "quick-loot",
    group: "mine",
    name: "Quick Loot",
    tagline: "Grabs the stuff you care about",
    version: "1.0.7",
    spt: "4.1",
    side: ["client", "server"],
    status: "issue",
    statusNote:
      "Broken on 4.1 right now. It loads fine but the patches don't bind, so auto-search and quick-loot just do nothing. I'm fixing it, don't bother downloading yet.",
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
