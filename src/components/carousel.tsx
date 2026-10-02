"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "./icons";

/** Horizontal scroll-snap row with previous/next buttons. Cards bleed to the screen edge. */
export default function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  const btn =
    "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10";

  return (
    <div>
      <div className="mx-auto mb-8 hidden w-full max-w-[1280px] justify-end gap-2 px-10 sm:flex">
        <button type="button" className={btn} onClick={() => go(-1)} disabled={!canPrev} aria-label="Previous">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" className={btn} onClick={() => go(1)} disabled={!canNext} aria-label="Next">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <ul ref={ref} aria-label={label} className="gutter no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {children}
      </ul>
    </div>
  );
}
