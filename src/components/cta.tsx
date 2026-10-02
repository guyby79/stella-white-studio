import { INSTAGRAM_URL } from "@/lib/site";
import { ChevronRight, InstagramIcon } from "./icons";

type Tone = "onLight" | "onDark";

const tones: Record<Tone, string> = {
  onLight: "bg-ink text-paper hover:bg-black",
  onDark: "bg-paper text-ink hover:bg-white",
};

/** Every call to action on the site goes to the studio's Instagram profile. */
export default function Cta({
  tone = "onLight",
  label = "Message us on Instagram",
  className = "",
}: {
  tone?: Tone;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[17px] font-medium leading-6 tracking-[-0.01em] transition-colors duration-300 ${tones[tone]} ${className}`}
    >
      <InstagramIcon className="h-5 w-5 shrink-0" />
      {label}
    </a>
  );
}

/** Quiet text link with a chevron, the Apple way. Goes to Instagram unless `href` is given. */
export function TextLink({
  children,
  href = INSTAGRAM_URL,
  tone = "onLight",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  tone?: Tone;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/link inline-flex items-center gap-1 text-[17px] font-medium tracking-[-0.01em] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current ${
        tone === "onDark" ? "text-paper" : "text-ink"
      } ${className}`}
    >
      {children}
      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
    </a>
  );
}
