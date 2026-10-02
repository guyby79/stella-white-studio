"use client";

import { useEffect, useState } from "react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE_NAME } from "@/lib/site";
import { CloseIcon, InstagramIcon, MenuIcon } from "./icons";
import { Wordmark } from "./wordmark";
import Cta from "./cta";

const LINKS = [
  { href: "#experiences", label: "What we do" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#included", label: "Included" },
  { href: "#occasions", label: "Occasions" },
  { href: "#instagram", label: "Instagram" },
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/75 text-ink backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-14 w-full max-w-[1280px] items-center justify-between px-6 sm:px-8 lg:px-10">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex flex-col items-center leading-none"
            aria-label={`${SITE_NAME}, back to top`}
          >
            <Wordmark className="text-[24px]" />
            <span className="mt-1 pl-[0.5em] text-[8px] font-medium uppercase tracking-[0.5em]" aria-hidden="true">
              Studio
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] tracking-[-0.005em] text-ink/70 transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SITE_NAME} on Instagram, ${INSTAGRAM_HANDLE}`}
              title="Instagram"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-ink/5"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Message us on Instagram"
              className="hidden min-h-8 items-center rounded-full bg-ink px-4 text-[13px] font-medium tracking-[-0.005em] text-paper transition-colors hover:bg-black sm:inline-flex"
            >
              Enquire
              <span className="sr-only"> — message us on Instagram</span>
            </a>
            <button
              type="button"
              className="-mr-2 inline-flex h-12 w-12 items-center justify-center xl:hidden"
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
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-6 pb-10 pt-24 text-ink transition-opacity duration-500 xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-4 text-[32px] font-semibold leading-tight tracking-[-0.035em] transition-colors hover:text-steel"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Cta tone="onLight" className="w-full" />
      </div>
    </>
  );
}
