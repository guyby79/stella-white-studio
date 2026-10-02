import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
});

// Used only for the italic "stella" in the wordmark, to match the studio's logo
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const title = "Stella White Studio | Event portraits, finished by hand";
const description =
  "Studio-lit black-and-white portraits at weddings, parties and launches. Backdrops and prints made by hand for your event. Travel on request.";
const logo = `${SITE_URL}stella-white-logo.jpg`;

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
    images: [{ url: logo, width: 500, height: 500, alt: "Stella White Studio, event portraits" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [logo],
  },
};

export const viewport: Viewport = {
  themeColor: "#eeede9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
