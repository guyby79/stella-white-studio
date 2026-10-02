import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { PHOTOS, photoUrl } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Stella White Studio | Bespoke, hand-finished event portraits";
const description =
  "Studio-lit black-and-white portraits at weddings, parties and brand events, with bespoke hand-crafted backdrops and print designs. Travel on request.";

export const metadata: Metadata = {
  title,
  description,
  // First-look preview: keep out of search results until the real content is in.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Stella White Studio",
    images: [{ url: photoUrl(PHOTOS.hero.id, 1200, 630, PHOTOS.hero.focal), width: 1200, height: 630, alt: PHOTOS.hero.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [photoUrl(PHOTOS.hero.id, 1200, 630, PHOTOS.hero.focal)],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
