// All editable content for the first-look site lives here.
// Replace placeholders (photos, contact details, location, prices, testimonials) when Jane sends real content.

export const SITE_NAME = "Stella White Studio";
export const INSTAGRAM_URL = "https://www.instagram.com/stellawhitestudio/";
export const INSTAGRAM_HANDLE = "@stellawhitestudio";

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
