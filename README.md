# website

Static site listing SPT mods. No build step, no dependencies. GitHub Pages serves it as-is.

```
index.html   the whole page (styles + script inline)
mods.js      the catalogue
```

## Adding or updating a mod

Edit `mods.js`. One object per mod:

```js
{
  id: "my-mod",               // unique, lowercase
  group: "mine",              // "mine" or "archive", picks the section
  name: "My Mod",
  tagline: "One line, shown next to the name",
  version: "1.0.0",
  spt: "4.1",
  side: ["client", "server"], // shown next to the version, drives the filter
  status: "ok",               // "ok" | "issue" | "wip"
  statusNote: "",             // warning strip, shown when status is not "ok"
  blurb: "A paragraph of what it does.",
  features: ["Bullet", "Bullet"],                   // optional, [] to omit
  requires: [{ name: "Some Lib", detail: "3.x" }],  // optional
  author: "",                 // archive entries only, whoever wrote it
  download: null,             // release asset URL, null shows "No build up yet"
  source: null,               // repo URL, omitted when null
  original: null              // archive entries only, link to the author's page
}
```

Commit and push. That's the whole workflow.

## The two sections

`group: "mine"` is stuff written here. `group: "archive"` is other people's mods ported
forward, and those should carry `author` and, where it still exists, `original`.

The archive section shows a placeholder while it's empty, so the page never looks broken.

## Downloads

`download` should point at a release asset so the file survives independently of the
original host:

1. Draft a release on the repo holding that mod
2. Attach the packaged zip
3. Copy the asset URL into `download`

Leave it `null` until a release exists. The card shows "No build up yet" rather than a
dead link.

## Takedowns

`.github/ISSUE_TEMPLATE/takedown.yml` backs the link in the takedown section. Anything
filed lands with a `takedown` label.

## Local preview

Open `index.html` in a browser. `mods.js` sets a global rather than being fetched, so it
works straight off the filesystem with no server.

## Enabling GitHub Pages

Settings, then Pages, then Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
