"use client";

import { useEffect, useState } from "react";
import { INSTAGRAM_URL, SITE_NAME } from "@/lib/site";
import { CloseIcon, MenuIcon, Monogram } from "./icons";
import Cta from "./cta";

const LINKS = [
  { href: "#experiences", label: "What we do" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#included", label: "Included" },
  { href: "#occasions", label: "Occasions" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <header className="on-dark fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 text-white backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-12 w-full max-w-[1280px] items-center justify-between px-6 sm:px-8 lg:h-14 lg:px-10">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em]"
            aria-label={`${SITE_NAME}, back to top`}
          >
            <Monogram className="h-6 w-6 text-champagne" />
            <span>Stella White Studio</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] tracking-[-0.005em] text-white/80 transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Message us on Instagram"
              className="hidden min-h-8 items-center rounded-full bg-champagne px-4 text-[13px] font-medium tracking-[-0.005em] text-black transition-colors hover:bg-[#d9bf9a] sm:inline-flex"
            >
              Enquire
              <span className="sr-only"> — message us on Instagram</span>
            </a>
            <button
              type="button"
              className="-mr-2 inline-flex h-12 w-12 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        inert={!open}
        className={`on-dark fixed inset-0 z-40 flex flex-col bg-black px-6 pb-10 pt-24 text-white transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-[32px] font-semibold leading-tight tracking-[-0.035em] transition-colors hover:text-champagne"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Cta tone="champagne" className="w-full" />
      </div>
    </>
  );
}
