import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PHOTOS, photoUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Stella White Studio | Event portraits, finished by hand";
const description =
  "Studio-lit black-and-white portraits at weddings, parties and launches. Backdrops and prints made by hand for your event. Travel on request.";

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
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
