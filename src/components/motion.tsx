"use client";

import { useEffect } from "react";

/**
 * Scroll motion, kept deliberately small:
 *  - [data-reveal] blocks fade up once as they enter the viewport
 *  - [data-scrollwords] text lights up word by word as it scrolls through
 * Everything is fully visible without JS, with reduced motion, and for automated captures (navigator.webdriver).
 */
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || navigator.webdriver || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("is-in");
      else io.observe(el);
    });
    root.classList.add("reveal-on");

    // Word-by-word text
    const blocks = Array.from(document.querySelectorAll<HTMLElement>("[data-scrollwords]"));
    const words = blocks.map((b) => Array.from(b.querySelectorAll<HTMLElement>(".w")));
    let raf = 0;
    const paint = () => {
      raf = 0;
      const h = window.innerHeight;
      blocks.forEach((b, bi) => {
        const r = b.getBoundingClientRect();
        const start = h * 0.88;
        const end = h * 0.36;
        const p = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height)));
        const list = words[bi];
        const n = list.length;
        list.forEach((w, i) => {
          const t = Math.min(1, Math.max(0, (p * (n + 4) - i) / 4));
          w.style.opacity = String(0.22 + 0.78 * t);
        });
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    if (blocks.length) {
      paint();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      io.disconnect();
      root.classList.remove("reveal-on");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
