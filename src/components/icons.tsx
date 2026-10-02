import type { SVGProps } from "react";
import type { IconName } from "@/lib/site";

type P = SVGProps<SVGSVGElement>;

function Base({ children, strokeWidth = 1.25, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function InstagramIcon(props: P) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function ArrowIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M4 12h15" />
      <path d="M13.5 6.5L19 12l-5.5 5.5" />
    </Base>
  );
}

export function MenuIcon(props: P) {
  return (
    <Base {...props} strokeWidth={1.5}>
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </Base>
  );
}

export function CloseIcon(props: P) {
  return (
    <Base {...props} strokeWidth={1.5}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </Base>
  );
}

export function PlusIcon(props: P) {
  return (
    <Base {...props} strokeWidth={1.25}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Base>
  );
}

export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="19.5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
      <text
        x="24"
        y="30.5"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 19, fontWeight: 500, letterSpacing: 1 }}
      >
        SW
      </text>
    </svg>
  );
}

export function FeatureIcon({ name, ...props }: P & { name: IconName }) {
  switch (name) {
    case "prints":
      return (
        <Base {...props}>
          <path d="M7 9V4h10v5" />
          <rect x="3.5" y="9" width="17" height="8" rx="1.5" />
          <path d="M7 14h10v6H7z" />
        </Base>
      );
    case "share":
      return (
        <Base {...props}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M12 15.5V8" />
          <path d="M9.3 10.7L12 8l2.7 2.7" />
        </Base>
      );
    case "light":
      return (
        <Base {...props}>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3z" />
        </Base>
      );
    case "backdrop":
      return (
        <Base {...props}>
          <path d="M3 4h18" />
          <path d="M5.5 4c.5 5-.8 10.5.2 16" />
          <path d="M18.5 4c-.5 5 .8 10.5-.2 16" />
          <path d="M9.5 4c.6 4.2-.6 8.4.3 12" />
          <path d="M14.5 4c-.6 4.2.6 8.4-.3 12" />
        </Base>
      );
    case "props":
      return (
        <Base {...props}>
          <path d="M11 3l1.9 5.4L18.5 10l-5.6 1.7L11 17.5l-1.9-5.8L3.5 10l5.6-1.6z" />
          <path d="M18.5 16l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
        </Base>
      );
    case "design":
      return (
        <Base {...props}>
          <path d="M12 3l5 8-5 10-5-10z" />
          <circle cx="12" cy="11" r="1.2" />
          <path d="M12 12.2V21" />
        </Base>
      );
    case "attendant":
      return (
        <Base {...props}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
        </Base>
      );
    case "setup":
      return (
        <Base {...props}>
          <path d="M3.5 8L12 3.5 20.5 8v8L12 20.5 3.5 16z" />
          <path d="M3.5 8L12 12.5 20.5 8" />
          <path d="M12 12.5v8" />
        </Base>
      );
    case "gallery":
      return (
        <Base {...props}>
          <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="M3.5 16.5l5-4 4 3 3-2 5 3.5" />
        </Base>
      );
    case "download":
      return (
        <Base {...props}>
          <path d="M12 4v11" />
          <path d="M7.5 10.5L12 15l4.5-4.5" />
          <path d="M4.5 19.5h15" />
        </Base>
      );
  }
}

export function ContrastIcon(props: P) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />
    </Base>
  );
}

export function BrushIcon(props: P) {
  return (
    <Base {...props}>
      <path d="M4 20c3 0 4.2-1.6 4.2-3.6L17.5 4 20 6.5 10.6 15.8C10.2 18 8.6 20 4 20z" />
    </Base>
  );
}

export function CompassIcon(props: P) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.6 8.4l-2 5.2-5.2 2 2-5.2z" />
    </Base>
  );
}
