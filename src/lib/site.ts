// All editable content for the first-look site lives here.
// Replace placeholders (photos, contact details, location, prices, testimonials) when Jane sends real content.

export const SITE_NAME = "Stella White Studio";
export const INSTAGRAM_URL = "https://www.instagram.com/stellawhitestudio/";
export const INSTAGRAM_HANDLE = "@stellawhitestudio";
export const BIO_LINE = "Event portraits · Est. 2024";

/** Where the site is served from. Update when it moves to its own domain. */
export const SITE_URL = "https://guyby79.github.io/stella-white-studio/";
/** Plain <img> tags need the base path added by hand (next.config.mjs sets this). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const LOGO_SRC = `${BASE_PATH}/stella-white-logo.jpg`;

/**
 * Real Instagram posts to embed, e.g. "https://www.instagram.com/p/AbCdEfGhIjK/".
 * Leave empty and the page shows the illustrative tile grid instead. When it has
 * items, the official Instagram embeds render and embed.js loads (only then).
 */
export const INSTAGRAM_POST_URLS: string[] = [];

const UNSPLASH = "https://images.unsplash.com";

export type Focal = { x: number; y: number };

/** Build an images.unsplash.com URL (royalty-free stock; placeholder imagery until Jane supplies her own). */
export function photoUrl(id: string, w: number, h?: number, focal?: Focal): string {
  const p = new URLSearchParams({ auto: "format", q: "72", w: String(w) });
  if (h) {
    p.set("h", String(h));
    p.set("fit", "crop");
    if (focal) {
      p.set("crop", "focalpoint");
      p.set("fp-x", String(focal.x));
      p.set("fp-y", String(focal.y));
      p.set("fp-z", "1");
    }
  }
  return `${UNSPLASH}/${id}?${p.toString()}`;
}

export type Photo = { id: string; alt: string; focal?: Focal };

export const PHOTOS = {
  hero: {
    id: "photo-1634729108740-ea8aa195634a",
    alt: "A couple in flower crowns laugh together, holding a bouquet, in black and white",
    focal: { x: 0.5, y: 0.32 },
  },
  studio: {
    id: "photo-1620122303020-87ec826cf70d",
    alt: "Black-and-white studio portrait of a woman with slicked-back hair against a graduated backdrop",
    focal: { x: 0.5, y: 0.45 },
  },
  atelier: {
    id: "photo-1557676715-93b39337b8ee",
    alt: "A hand-lettered card beside an inkwell and calligraphy pen on black-and-white splatter paper",
    focal: { x: 0.45, y: 0.5 },
  },
  keepsake: {
    id: "photo-1574514120529-364d014b9a0a",
    alt: "Framed black-and-white prints arranged together on a white wall",
    focal: { x: 0.5, y: 0.35 },
  },
} satisfies Record<string, Photo>;

/** Illustrative tiles shown until real posts are embedded. Same stock imagery as the rest of the preview. */
export const FEED_TILES: Photo[] = [
  { id: "photo-1612928414075-bc722ade44f1", alt: "Black-and-white portrait of a woman with curly hair against a light backdrop", focal: { x: 0.5, y: 0.35 } },
  { id: "photo-1614750880774-6e5cb149607b", alt: "A bride in a long gown beside an arched window, in black and white", focal: { x: 0.5, y: 0.55 } },
  { id: "photo-1557676715-93b39337b8ee", alt: "A hand-lettered card beside an inkwell and calligraphy pen", focal: { x: 0.4, y: 0.5 } },
  { id: "photo-1688559688736-140e6cbd2c17", alt: "Two hands raising champagne glasses in a toast, in black and white", focal: { x: 0.45, y: 0.4 } },
  { id: "photo-1634729108740-ea8aa195634a", alt: "A couple in flower crowns laughing together, in black and white", focal: { x: 0.5, y: 0.4 } },
  { id: "photo-1574514120529-364d014b9a0a", alt: "Framed black-and-white prints on a white wall", focal: { x: 0.5, y: 0.45 } },
  { id: "photo-1620122303020-87ec826cf70d", alt: "Black-and-white studio portrait of a woman with slicked-back hair", focal: { x: 0.5, y: 0.42 } },
  { id: "photo-1755862836360-92b2f0696155", alt: "Guests dancing and laughing at a party, in black and white", focal: { x: 0.55, y: 0.5 } },
  { id: "photo-1759209816487-0677a49f01b8", alt: "A strip of black-and-white photo-booth portraits with hand-drawn finishing", focal: { x: 0.5, y: 0.4 } },
];

export const STATEMENT =
  "We bring a real portrait studio to your party. Studio light, a backdrop made for the night, and a black-and-white print in every guest’s hand within a minute.";

export const EXPERIENCES = {
  studio: {
    label: "The Studio",
    title: "Studio light. At your party.",
    body: "Real lights, a clean backdrop and someone to guide every pose. Prints in about a minute.",
  },
  atelier: {
    label: "The Atelier",
    title: "Backdrops, made by hand.",
    body: "Bespoke monograms, painted florals and illustrated borders, designed with you for one event.",
  },
  keepsake: {
    label: "The Keepsake",
    title: "A keepsake you can hold.",
    body: "A guest album that fills as the night goes on, or a wall of framed portraits. Finished by hand.",
  },
};

export const STEPS = [
  {
    number: "1",
    title: "Message us.",
    body: "Send the date, the place and the mood on Instagram. We’ll tell you if we’re free.",
  },
  {
    number: "2",
    title: "We design it.",
    body: "Backdrop, print layout, finishing. You approve the plan before anything is made.",
  },
  {
    number: "3",
    title: "We set up. You party.",
    body: "We arrive early, build the studio and look after every guest.",
  },
];

export type IconName =
  | "prints"
  | "share"
  | "light"
  | "backdrop"
  | "props"
  | "design"
  | "attendant"
  | "setup"
  | "gallery"
  | "download";

export const INCLUDED: { icon: IconName; title: string; body: string; wide?: boolean }[] = [
  { icon: "prints", title: "Prints, as many as you like", body: "Every guest leaves with one, ready in about a minute.", wide: true },
  { icon: "share", title: "Instant sharing", body: "Portraits on guests’ phones before the song ends." },
  { icon: "light", title: "Real studio light", body: "Soft, even and kind to everyone." },
  { icon: "backdrop", title: "A bespoke backdrop", body: "Designed and finished by hand." },
  { icon: "design", title: "Your design on every print", body: "Names, a date or a monogram." },
  { icon: "attendant", title: "An attendant", body: "Guides the poses, keeps the line moving and looks after the kit.", wide: true },
  { icon: "setup", title: "Setup and teardown", body: "In early. Out clean." },
  { icon: "props", title: "Props", body: "A short list of good ones." },
  { icon: "gallery", title: "A private gallery", body: "Every portrait in one place." },
  { icon: "download", title: "Original files", body: "High-resolution downloads after the event." },
];

export const OCCASIONS: { label: string; photo: Photo }[] = [
  {
    label: "Weddings",
    photo: { id: "photo-1614750880774-6e5cb149607b", alt: "A bride in a long gown beside an arched window, in black and white", focal: { x: 0.5, y: 0.5 } },
  },
  {
    label: "Engagements",
    photo: { id: "photo-1595662000432-f8cdba893fa4", alt: "Two pairs of hands exchanging a ring, in black and white", focal: { x: 0.5, y: 0.5 } },
  },
  {
    label: "Birthdays",
    photo: { id: "photo-1755862836360-92b2f0696155", alt: "Guests dancing and laughing at a lively party, in black and white", focal: { x: 0.55, y: 0.5 } },
  },
  {
    label: "Brand events",
    photo: { id: "photo-1727764894973-28e7283a600c", alt: "A woman holding a glass, posing in front of a black curtain backdrop", focal: { x: 0.62, y: 0.5 } },
  },
  {
    label: "Festive evenings",
    photo: { id: "photo-1755862836272-31ab5661e31a", alt: "Guests dancing close together at an evening celebration, in black and white", focal: { x: 0.5, y: 0.5 } },
  },
  {
    label: "Anniversaries",
    photo: { id: "photo-1633638990410-c828b4f27f24", alt: "A couple close together under a veil, soft and bright, in black and white", focal: { x: 0.5, y: 0.4 } },
  },
];

export const OCCASION_NOTE = "Also graduations, gallery openings, hen parties and private dinners.";

export const FAQS = [
  {
    q: "How do I check my date?",
    a: "Message us on Instagram with the date and the place. We’ll tell you if we’re free.",
  },
  {
    q: "Do you travel?",
    a: "Travel on request. Tell us where and we’ll work it out.",
  },
  {
    q: "Can the backdrop match our theme?",
    a: "That’s what The Atelier is for. Send colours, names, a monogram or artwork and we’ll design around it.",
  },
  {
    q: "Is everything black and white?",
    a: "It’s our signature, and it flatters everyone. If you want something else, ask.",
  },
  {
    q: "Do guests get their photos on the night?",
    a: "Prints in about a minute and digital copies on the spot, with a private gallery to follow.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the date, the guest count and the design. Pricing will appear here soon. Until then, message us.",
  },
  {
    q: "Do you work with planners and venues?",
    a: "Yes. Message us and we’ll talk to them directly.",
  },
];
