/** "stella" in an italic serif run straight into "white" in a heavy sans, as in the studio's logo. Size it with font-size. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Stella White"
      className={`inline-flex items-baseline whitespace-nowrap leading-none ${className}`}
    >
      <span aria-hidden="true" className="font-wm text-[1.05em] font-medium italic tracking-[-0.015em]">
        stella
      </span>
      <span aria-hidden="true" className="font-sans font-extrabold tracking-[-0.05em]">
        white
      </span>
    </span>
  );
}

/** Full lockup: wordmark, STUDIO, and the studio's own line. Size it with --wm. */
export function Lockup({ className = "", meta = true }: { className?: string; meta?: boolean }) {
  return (
    <div className={`lockup ${className}`}>
      <Wordmark />
      <span className="lockup-studio">Studio</span>
      {meta ? <span className="lockup-meta">Event portraits · Est. 2024</span> : null}
    </div>
  );
}
