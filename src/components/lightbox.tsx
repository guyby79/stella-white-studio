"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type TouchEvent } from "react";
import { GALLERY } from "@/lib/site";
import { ChevronLeft, ChevronRight, CloseIcon } from "./icons";

/**
 * One photo viewer for the studio's own pictures. Any link on the page with data-lightbox="n" opens it at GALLERY[n]
 * (the links point at the full-size file, so without JavaScript they still open the picture).
 * Native <dialog>: the page behind is inert while it is open. Escape closes, arrow keys move, focus returns to the
 * link that opened it. Fades only when the visitor has not asked for reduced motion (see .lightbox in globals.css).
 */
export default function Lightbox() {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const n = GALLERY.length;

  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + n) % n), [n]);
  const close = useCallback(() => dialog.current?.close(), []);

  useEffect(() => {
    const onClick = (e: globalThis.MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const trigger = (e.target as Element | null)?.closest<HTMLElement>("[data-lightbox]");
      const d = dialog.current;
      if (!trigger || !d || typeof d.showModal !== "function") return;
      const i = Number(trigger.dataset.lightbox);
      if (!Number.isInteger(i) || i < 0 || i >= n) return;
      e.preventDefault();
      opener.current = trigger;
      setIndex(i);
      d.showModal();
      document.documentElement.style.overflow = "hidden";
      closeBtn.current?.focus();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [n]);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const onClose = () => {
      document.documentElement.style.overflow = "";
      opener.current?.focus();
    };
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  // Clicking the dark surround (not the picture or a button) closes it.
  const onSurround = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touchX.current;
    touchX.current = null;
    const end = e.changedTouches[0]?.clientX;
    if (start == null || end == null) return;
    const dx = end - start;
    if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
  };

  const p = GALLERY[index];
  const btn =
    "inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur transition-colors hover:bg-paper/20";

  return (
    <dialog ref={dialog} aria-label="Photos from the studio" onKeyDown={onKeyDown} className="lightbox on-dark text-paper">
      <div
        className="flex h-full w-full flex-col items-center justify-center px-4 pb-24 pt-20 sm:px-24"
        onClick={onSurround}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={p.src}
          src={p.src}
          srcSet={p.srcSet}
          sizes="100vw"
          alt={p.alt}
          width={p.width}
          height={p.height}
          decoding="async"
          className="lightbox-img h-auto max-h-full w-auto rounded-[12px] object-contain"
          style={{ maxWidth: `min(100%, ${p.width}px)` }}
        />
      </div>

      <button ref={closeBtn} type="button" onClick={close} aria-label="Close" className={`${btn} absolute right-4 top-4`}>
        <CloseIcon className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-6">
        <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className={btn}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="min-w-[4ch] text-center text-[14px] tabular-nums text-ash" aria-hidden="true">
          {index + 1} / {n}
        </p>
        <button type="button" onClick={() => go(1)} aria-label="Next photo" className={btn}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {`Photo ${index + 1} of ${n}. ${p.alt}`}
      </p>
    </dialog>
  );
}
