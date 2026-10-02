"use client";

import { useEffect, useState } from "react";
import { INSTAGRAM_URL, SITE_NAME } from "@/lib/site";
import { CloseIcon, InstagramIcon, MenuIcon, Monogram } from "./icons";
import Cta from "./cta";

const LINKS = [
  { href: "#experiences", label: "Experiences" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#included", label: "What’s included" },
  { href: "#occasions", label: "Occasions" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          solid ? "bg-ink/90 shadow-[0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)} aria-label={`${SITE_NAME}, back to top`}>
            <Monogram className="h-9 w-9 text-champagne transition-transform duration-700 group-hover:rotate-[360deg]" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[1.35rem] tracking-wide">Stella White</span>
              <span className="eyebrow mt-1 text-[0.56rem] text-white/70">Studio</span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline eyebrow pb-1 text-[0.7rem] text-white/85 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Message us on Instagram"
              className="eyebrow inline-flex items-center gap-2 border border-champagne px-5 py-2.5 text-[0.7rem] text-champagne transition-colors duration-300 hover:bg-champagne hover:text-ink"
            >
              <InstagramIcon className="h-4 w-4" />
              Enquire
              <span className="sr-only"> — message us on Instagram</span>
            </a>
          </nav>

          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-24 text-white transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-white/10 py-4 font-serif text-[2rem] leading-none transition-colors hover:text-champagne"
            >
              <span className="eyebrow w-6 text-[0.62rem] text-champagne">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <Cta kicker="Enquire" tone="champagne" className="w-full justify-center" />
      </div>
    </>
  );
}
