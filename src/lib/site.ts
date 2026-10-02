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
    id: "photo-1688559688736-140e6cbd2c17",
    alt: "Two hands raising champagne glasses in a toast, in dramatic black and white",
    focal: { x: 0.42, y: 0.42 },
  },
  studio: {
    id: "photo-1620122303020-87ec826cf70d",
    alt: "Black-and-white studio portrait of a woman with slicked-back hair, softly lit against a graduated backdrop",
  },
  atelier: {
    id: "photo-1557676715-93b39337b8ee",
    alt: "A hand-lettered card beside an inkwell and calligraphy pen on black-and-white splatter paper",
  },
  keepsake: {
    id: "photo-1574514120529-364d014b9a0a",
    alt: "Framed black-and-white prints arranged together on a white wall",
  },
  introTall: {
    id: "photo-1612928414075-bc722ade44f1",
    alt: "Black-and-white portrait of a woman with curly hair against a light studio backdrop",
  },
  introSmall: {
    id: "photo-1759209816487-0677a49f01b8",
    alt: "A strip of black-and-white photo-booth portraits finished with hand-drawn halo, hearts and horns",
  },
  band: {
    id: "photo-1504227986464-b07ae4f486f4",
    alt: "A couple walking away along a dark garden path, in black and white",
  },
} satisfies Record<string, Photo>;

export const EXPERIENCES = [
  {
    number: "01",
    name: "The Studio",
    tagline: "Black-and-white portraits under real studio light.",
    body:
      "A proper portrait set-up at the heart of your party: soft studio lighting, a clean backdrop and an attendant who guides every pose, from solo glamour to the whole family. Prints are ready in about a minute, so every guest leaves with something to hold.",
    details: [
      "Real studio lighting, never a ring light",
      "Guided posing for every guest",
      "Prints in about a minute",
    ],
    photo: PHOTOS.studio,
    focal: { x: 0.5, y: 0.4 },
  },
  {
    number: "02",
    name: "The Atelier",
    tagline: "Bespoke backdrops and print designs, made for your event.",
    body:
      "This is where the handwork happens. We design and make the backdrop and the print layout around you: a monogram, a painted floral, an illustrated border, a line in your own handwriting. Both are created for your event alone.",
    details: [
      "Monograms and hand-lettered names",
      "Painted florals and illustrated borders",
      "Backdrop and prints designed as a pair",
    ],
    photo: PHOTOS.atelier,
    focal: { x: 0.45, y: 0.5 },
  },
  {
    number: "03",
    name: "The Keepsake",
    tagline: "A hand-finished guest album or a framed portrait wall.",
    body:
      "The evening’s portraits, turned into something to keep. Choose a guest album that fills up as the night goes on, or a wall of framed prints for your entrance or reception. Each piece is finished by hand and ready to display.",
    details: [
      "A guest album with room for a note beside every portrait",
      "A framed portrait wall for your entrance or reception",
      "Finished by hand, ready to display",
    ],
    photo: PHOTOS.keepsake,
    focal: { x: 0.5, y: 0.5 },
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Enquire",
    body:
      "Message us on Instagram with your date, the place and the feeling you are after. We will tell you if we are free and how we would approach it.",
  },
  {
    number: "02",
    title: "Design",
    body:
      "We talk through the look together: the backdrop, the print design, the finishing touches. You see the plan before anything is made.",
  },
  {
    number: "03",
    title: "Celebrate",
    body:
      "On the day we arrive early, set up the studio and look after every guest. You enjoy your party; we make the portraits.",
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

export const INCLUDED: { icon: IconName; title: string; body: string }[] = [
  { icon: "prints", title: "Unlimited prints", body: "Print as many portraits as your guests like, handed over within about a minute of the shot." },
  { icon: "share", title: "Instant digital sharing", body: "Portraits sent straight to guests’ phones, so they can share while the party is still going." },
  { icon: "light", title: "Real studio lighting", body: "Soft, flattering light that looks wonderful on every skin tone and every outfit." },
  { icon: "backdrop", title: "A bespoke backdrop", body: "Designed and finished by hand for your event." },
  { icon: "props", title: "Curated props", body: "A small, thoughtful selection. Never a pile of plastic." },
  { icon: "design", title: "Custom print design", body: "Your names, date or monogram on every print." },
  { icon: "attendant", title: "A dedicated attendant", body: "Someone friendly to guide poses and keep the line moving." },
  { icon: "setup", title: "Setup and teardown", body: "We arrive early, set up quietly and leave the space as we found it." },
  { icon: "gallery", title: "A private online gallery", body: "Every portrait in one place, for you and your guests." },
  { icon: "download", title: "Downloadable originals", body: "High-resolution files to keep, sent after the event." },
];

export const OCCASIONS: { label: string; photo: Photo }[] = [
  {
    label: "Weddings",
    photo: { id: "photo-1614750880774-6e5cb149607b", alt: "A bride in a long gown beside an arched window, in black and white", focal: { x: 0.5, y: 0.5 } },
  },
  {
    label: "Engagements",
    photo: { id: "photo-1634729108740-ea8aa195634a", alt: "A couple wearing flower crowns, laughing together with a bouquet, in black and white", focal: { x: 0.5, y: 0.45 } },
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
    photo: { id: "photo-1595662000432-f8cdba893fa4", alt: "Two pairs of hands exchanging a ring, in black and white", focal: { x: 0.5, y: 0.5 } },
  },
];

export const FAQS = [
  {
    q: "What is Stella White Studio?",
    a: "We bring a hand-finished portrait studio to your event: real studio lighting, a bespoke backdrop, black-and-white prints in about a minute and a friendly attendant who looks after your guests.",
  },
  {
    q: "How do I check my date?",
    a: "Message us on Instagram with your date and the place. We will let you know whether we are free and what we would suggest.",
  },
  {
    q: "Do you travel?",
    a: "Travel on request. Tell us where your event is and we will talk it through.",
  },
  {
    q: "Can the backdrop and prints match our theme?",
    a: "Yes, that is the heart of The Atelier. We design the backdrop and the print layout around your colours, names, monogram or artwork.",
  },
  {
    q: "Are the portraits only in black and white?",
    a: "Black and white is our signature: it flatters everyone and prints beautifully. If you have something different in mind, tell us and we will see what is possible.",
  },
  {
    q: "Do guests get their portraits on the night?",
    a: "Yes. Prints are ready in about a minute and portraits are shared digitally on the spot, with a private online gallery to follow.",
  },
  {
    q: "How much does it cost?",
    a: "Every event is different, so we quote once we know your date, your guest numbers and the look you want. Pricing details will be added to this page soon.",
  },
  {
    q: "Do you work with planners, venues and brands?",
    a: "Happily. Message us and we will coordinate with your planner, venue or brand team directly.",
  },
];

export const OCCASION_NOTE =
  "Also: graduations, launches, gallery openings, hen parties and private dinners.";
