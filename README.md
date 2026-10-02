# Stella White Studio: first-look website

A one-page, static site for **Stella White Studio**, event portraits finished by hand (studio-lit black and
white, hand-made backdrops and print designs).

This is a **first-look preview**. Photography is illustrative royalty-free stock (Unsplash, hotlinked), the copy
is draft, and every call to action points to the studio's Instagram profile.

- Live: https://guyby79.github.io/stella-white-studio/
- Stack: Next.js (App Router, static export) + Tailwind CSS v4. Inter for text; Playfair Display Italic only for
  the "stella" in the wordmark, to match the studio's logo.
- Palette comes from the logo: warm off-white `#EEEDE9` and near-black `#161616`. No colour accent.
- All editable content (copy, image ids, FAQ, occasions, Instagram tiles and post URLs) lives in `src/lib/site.ts`.
- The wordmark is live text (`src/components/wordmark.tsx`), so it stays crisp. The original logo file is
  `public/stella-white-logo.jpg` (used as the Instagram-style avatar and the share image).

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
domain, remove `basePath` and `assetPrefix` there, update `SITE_URL` in `src/lib/site.ts`, and rebuild.

## Instagram

The "See more on Instagram" section shows the profile header (logo, handle, bio line, Follow button) and a
3 x 3 grid of illustrative tiles. Every tile and button links to https://www.instagram.com/stellawhitestudio/.
Nothing is scraped and no posts or captions are invented.

**Show real posts (official embeds).** Paste post or reel URLs into `INSTAGRAM_POST_URLS` in `src/lib/site.ts`:

```ts
export const INSTAGRAM_POST_URLS: string[] = [
  "https://www.instagram.com/p/XXXXXXXXXXX/",
  "https://www.instagram.com/reel/YYYYYYYYYYY/",
];
```

When the array has at least one valid URL, the tile grid is replaced by Instagram's official embeds and
`https://www.instagram.com/embed.js` is loaded. When it is empty, that script is never loaded. Then run
`npm run publish:pages`.

**A live, auto-updating feed** needs the account owner to connect it once: either a feed widget service she signs
into with her Instagram account, or Meta's Instagram Graph API (needs a Business or Creator account linked to a
Facebook Page, plus an access token). Until then, embeds of chosen posts are the clean option.
