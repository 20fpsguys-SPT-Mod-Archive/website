# website

Static site listing my SPT mods with direct downloads, a backup in case other hosts go away. No build step, no dependencies. GitHub Pages serves it as-is.

```
index.html   the whole page (styles + script inline)
mods.js      the catalogue
```

## Adding or updating a mod

Edit `mods.js`. One object per mod:

```js
{
  id: "my-mod",               // unique, lowercase
  name: "My Mod",
  tagline: "One line, shown next to the name",
  version: "1.0.0",
  spt: "4.1",
  side: ["client", "server"], // shown next to the version, drives the filter
  status: "ok",               // "ok" | "issue" | "wip" | "pending"
  statusNote: "",             // warning strip, shown when status is not "ok"
  blurb: "A paragraph of what it does.",
  features: ["Bullet", "Bullet"],                   // optional, [] to omit
  requires: [{ name: "Some Lib", detail: "3.x" }],  // optional
  download: null,             // release asset URL, null shows "No build up yet"
  extra: [{ label: "4.0 build", url: "..." }],      // optional, more download links
  source: null                // repo URL, omitted when null
}
```

Commit and push. That's the whole workflow.

## Downloads

`download` should point at a release asset so the file survives independently of
any mod host:

1. Draft a release on the repo holding that mod
2. Attach the packaged zip
3. Copy the asset URL into `download`

Leave it `null` until a release exists. The card shows "No build up yet" rather than a
dead link.

## Local preview

Open `index.html` in a browser. `mods.js` sets a global rather than being fetched, so it
works straight off the filesystem with no server.

## Enabling GitHub Pages

Settings, then Pages, then Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
