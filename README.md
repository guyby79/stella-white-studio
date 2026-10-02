# Stella White Studio: first-look website

A one-page, static marketing site for **Stella White Studio**: bespoke, hand-finished event portraits
(studio-lit black and white, hand-crafted backdrops and print designs).

This is a **first-look preview**. Photography is illustrative royalty-free stock (Unsplash, hotlinked) and
the copy is draft. Every call to action points to the studio's Instagram profile.

- Live: https://guyby79.github.io/stella-white-studio/
- Stack: Next.js (App Router, static export) + Tailwind CSS v4, Cormorant Garamond + Inter via `next/font`
- All editable content (copy, image ids, FAQ, occasions) lives in `src/lib/site.ts`

## Develop

```bash
npm install
npm run dev        # http://localhost:3000/stella-white-studio/
npm run build      # static export to out/
```

## Publish (GitHub Pages)

`out/` is pushed to the `gh-pages` branch, which GitHub Pages serves.

```bash
npm run publish:pages   # = bash scripts/publish.sh (build, then force-push out/ to gh-pages)
```

The site is built for the `/stella-white-studio` base path (see `next.config.mjs`). When it moves to its own
domain, remove `basePath` and `assetPrefix` there and rebuild.
