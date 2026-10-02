import { INSTAGRAM_URL } from "@/lib/site";
import { InstagramIcon } from "./icons";

type Tone = "champagne" | "outline" | "ink";

const tones: Record<Tone, string> = {
  champagne:
    "bg-champagne text-ink hover:bg-white [--label:rgb(13_13_14/0.62)]",
  outline:
    "border border-white/60 text-white hover:bg-white hover:text-ink [--label:#c8a97e] hover:[--label:rgb(13_13_14/0.6)]",
  ink: "bg-ink text-paper hover:bg-champagne hover:text-ink [--label:#c8a97e] hover:[--label:rgb(13_13_14/0.62)]",
};

/**
 * Every call to action on the site goes to the studio's Instagram profile.
 * `kicker` is the small lead-in ("Check your date", "Enquire"); the main line always reads "Message us on Instagram".
 */
export default function Cta({
  kicker = "Check your date",
  tone = "champagne",
  className = "",
}: {
  kicker?: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex max-w-full items-center gap-4 px-7 py-4 text-left transition-colors duration-500 ${tones[tone]} ${className}`}
    >
      <InstagramIcon className="h-6 w-6 shrink-0" />
      <span className="flex flex-col">
        <span className="eyebrow text-[0.64rem]" style={{ color: "var(--label)" }}>
          {kicker}
        </span>
        <span className="font-serif text-[1.35rem] leading-tight">Message us on Instagram</span>
      </span>
    </a>
  );
}
