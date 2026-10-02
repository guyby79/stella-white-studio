import { INSTAGRAM_URL } from "@/lib/site";
import { ChevronRight, InstagramIcon } from "./icons";

type Tone = "champagne" | "light" | "dark";

const tones: Record<Tone, string> = {
  champagne: "bg-champagne text-black hover:bg-[#d9bf9a]",
  light: "bg-white text-black hover:bg-fog",
  dark: "bg-ink text-white hover:bg-black",
};

/** Every call to action on the site goes to the studio's Instagram profile. */
export default function Cta({ tone = "champagne", className = "" }: { tone?: Tone; className?: string }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[17px] font-medium leading-6 tracking-[-0.01em] transition-colors duration-300 ${tones[tone]} ${className}`}
    >
      <InstagramIcon className="h-5 w-5 shrink-0" />
      Message us on Instagram
    </a>
  );
}

/** Quiet text link with a chevron, the Apple way. Also goes to Instagram unless `href` is given. */
export function TextLink({
  children,
  href = INSTAGRAM_URL,
  tone = "dark",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/link inline-flex items-center gap-1 text-[17px] font-medium tracking-[-0.01em] transition-colors ${
        tone === "dark" ? "text-champagne hover:text-white" : "text-champagne-deep hover:text-ink"
      } ${className}`}
    >
      {children}
      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
    </a>
  );
}
