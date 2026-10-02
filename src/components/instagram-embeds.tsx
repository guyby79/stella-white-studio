"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const POST_URL = /^https:\/\/www\.instagram\.com\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?/;

/**
 * Official Instagram embeds for real post URLs (see INSTAGRAM_POST_URLS in src/lib/site.ts).
 * Renders nothing, and never loads Instagram's embed.js, unless there is at least one valid URL.
 */
export default function InstagramEmbeds({ urls }: { urls: string[] }) {
  const valid = urls.filter((u) => POST_URL.test(u));

  useEffect(() => {
    if (!valid.length) return;
    const process = () => window.instgrm?.Embeds.process();
    if (window.instgrm) {
      process();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = process;
    document.body.appendChild(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valid.length]);

  if (!valid.length) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {valid.map((u) => (
        <blockquote
          key={u}
          className="instagram-media"
          data-instgrm-permalink={u}
          data-instgrm-version="14"
          style={{ margin: 0, width: "100%", maxWidth: 540, minWidth: 0, background: "#fff" }}
        >
          <a href={u} target="_blank" rel="noopener noreferrer">
            View this post on Instagram
          </a>
        </blockquote>
      ))}
    </div>
  );
}
