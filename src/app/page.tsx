import type { ReactNode } from "react";
import Header from "@/components/header";
import Cta from "@/components/cta";
import Photo from "@/components/photo";
import {
  ArrowIcon,
  BrushIcon,
  CompassIcon,
  ContrastIcon,
  FeatureIcon,
  InstagramIcon,
  Monogram,
  PlusIcon,
} from "@/components/icons";
import {
  EXPERIENCES,
  FAQS,
  INCLUDED,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  OCCASIONS,
  OCCASION_NOTE,
  PHOTOS,
  SITE_NAME,
  STEPS,
  photoUrl,
} from "@/lib/site";

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

function Heading({
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
  id?: string;
}) {
  return (
    <div className={`reveal ${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      <p className={`eyebrow ${dark ? "text-champagne" : "text-champagne-deep"}`}>{eyebrow}</p>
      <h2 id={id} className="mt-5 font-serif text-[clamp(2.3rem,5vw,3.9rem)] font-light leading-[1.05]">
        {title}
      </h2>
      {intro ? <p className={`mt-6 text-lg ${dark ? "text-white/70" : "text-mute"}`}>{intro}</p> : null}
    </div>
  );
}

function Hero() {
  const hero = PHOTOS.hero;
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink text-center text-white"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet={photoUrl(hero.id, 900, 1500, { x: 0.45, y: 0.5 })} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoUrl(hero.id, 2200, 1375, hero.focal)}
          alt={hero.alt}
          width={2200}
          height={1375}
          fetchPriority="high"
          decoding="async"
          className="hero-zoom absolute inset-0 -z-20 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.55),rgb(0_0_0/0.3)_45%,rgb(0_0_0/0.7))]" />
      <div className="grain absolute inset-0 -z-10" aria-hidden="true" />

      <Container className="py-32">
        <p className="hero-in eyebrow text-champagne" style={{ "--d": "0.15s" } as React.CSSProperties}>
          Bespoke event portraits
        </p>
        <h1
          className="hero-in mx-auto mt-6 max-w-4xl font-serif text-[clamp(3rem,8.4vw,6.75rem)] font-light leading-[0.98]"
          style={{ "--d": "0.3s" } as React.CSSProperties}
        >
          Your night, in its best light.
        </h1>
        <p
          className="hero-in mx-auto mt-7 max-w-xl text-base text-white/80 sm:text-lg"
          style={{ "--d": "0.5s" } as React.CSSProperties}
        >
          Studio-lit black-and-white portraits at weddings, parties and brand events, with backdrops and prints made by hand
          for you.
        </p>
        <div className="hero-in mt-10 flex flex-col items-center gap-5" style={{ "--d": "0.7s" } as React.CSSProperties}>
          <Cta kicker="Check your date" tone="champagne" />
          <p className="eyebrow text-[0.62rem] text-white/60">Travel on request</p>
        </div>
      </Container>

      <a
        href="#intro"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/60 transition-colors hover:text-white sm:flex"
        aria-label="Scroll to the introduction"
      >
        <span className="eyebrow text-[0.58rem]">Scroll</span>
        <span className="cue-line block h-10 w-px bg-white/50" />
      </a>
    </section>
  );
}

function Intro() {
  const facts = [
    { icon: <ContrastIcon className="h-6 w-6" />, title: "Black and white, by design", body: "Timeless, flattering, and beautiful in print." },
    { icon: <BrushIcon className="h-6 w-6" />, title: "Finished by hand", body: "Backdrops and prints made for your event." },
    { icon: <CompassIcon className="h-6 w-6" />, title: "Travel on request", body: "Tell us where, and we will talk it through." },
  ];
  return (
    <section id="intro" className="bg-paper py-24 lg:py-36">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="reveal">
            <p className="eyebrow text-champagne-deep">The studio</p>
            <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4.1rem)] font-light leading-[1.04]">
              Portraits with presence, finished by hand.
            </h2>
            <p className="mt-8 text-lg text-ink/80">
              Stella White Studio brings a small portrait studio to the heart of your celebration. Real lighting, a backdrop
              designed around your event, and a gentle guide who helps every guest find their best angle.
            </p>
            <p className="mt-5 text-mute">
              Every portrait is made in black and white, printed within moments and finished with care, so it feels like a
              keepsake rather than a snapshot. No two events look alike, and neither do our backdrops.
            </p>
          </div>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {facts.map((f) => (
              <li key={f.title} className="reveal border-t border-line pt-5">
                <span className="text-champagne-deep">{f.icon}</span>
                <h3 className="mt-3 font-serif text-xl leading-snug">{f.title}</h3>
                <p className="mt-1.5 text-sm text-mute">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-12 sm:pb-16 lg:pb-14">
          <div className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden bg-bone">
            <Photo
              id={PHOTOS.introTall.id}
              alt={PHOTOS.introTall.alt}
              ratio={[4, 5]}
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 aspect-[4/5] w-[44%] overflow-hidden border-[6px] border-paper bg-bone shadow-[0_24px_60px_-20px_rgb(0_0_0/0.45)] sm:border-8">
            <Photo
              id={PHOTOS.introSmall.id}
              alt={PHOTOS.introSmall.alt}
              ratio={[4, 5]}
              widths={[300, 520, 800]}
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Experiences() {
  return (
    <section id="experiences" className="bg-bone py-24 lg:py-36">
      <Container>
        <Heading
          center
          eyebrow="The experiences"
          title="Three ways to bring the studio to your event"
          intro="Choose one, or combine them. Each is designed around your date, your space and your guests."
        />
        <div className="mt-20 space-y-24 lg:mt-28 lg:space-y-40">
          {EXPERIENCES.map((e, i) => (
            <article key={e.name} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-ink-2">
                  <Photo
                    id={e.photo.id}
                    alt={e.photo.alt}
                    ratio={[4, 5]}
                    focal={e.focal}
                    sizes="(min-width: 1024px) 45vw, 92vw"
                    className="h-full w-full object-cover grayscale-[0.15] transition-transform duration-[1400ms] ease-lux group-hover:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute inset-4 border border-white/35 transition-all duration-700 ease-lux group-hover:inset-6" />
                </div>
              </div>
              <div className={`reveal ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="font-serif text-[5rem] font-light italic leading-none text-champagne-deep/80 sm:text-[6.5rem]">
                  {e.number}
                </p>
                <h3 className="mt-2 font-serif text-[clamp(2.2rem,4vw,3.3rem)] font-light leading-[1.05]">{e.name}</h3>
                <p className="mt-3 font-serif text-[1.45rem] italic leading-snug text-champagne-deep">{e.tagline}</p>
                <p className="mt-6 max-w-xl text-ink/80">{e.body}</p>
                <ul className="mt-8 max-w-xl space-y-3 border-t border-line pt-6">
                  {e.details.map((d) => (
                    <li key={d} className="flex items-start gap-4 text-[0.95rem]">
                      <span className="mt-[0.82em] h-px w-6 shrink-0 bg-champagne-deep" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline eyebrow mt-9 inline-flex items-center gap-3 pb-1.5 text-[0.72rem] text-ink hover:text-champagne-deep"
                >
                  Message us on Instagram
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-24 text-white lg:py-36">
      <Container>
        <Heading
          dark
          eyebrow="How it works"
          title="From first message to the last print"
          intro="Three simple steps. We look after the details."
        />
        <ol className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-3 lg:gap-14">
          {STEPS.map((s) => (
            <li
              key={s.number}
              className="reveal relative border-t border-white/15 pt-8 before:absolute before:-top-px before:left-0 before:h-px before:w-16 before:bg-champagne"
            >
              <p className="font-serif text-[5.5rem] font-light italic leading-none text-champagne">{s.number}</p>
              <h3 className="mt-4 font-serif text-[2rem] font-light leading-tight">{s.title}</h3>
              <p className="mt-4 max-w-sm text-white/70">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 lg:mt-24">
          <Cta kicker="Check your date" tone="outline" />
        </div>
      </Container>
    </section>
  );
}

function Included() {
  return (
    <section id="included" className="bg-paper py-24 lg:py-36">
      <Container>
        <Heading
          center
          eyebrow="What’s included"
          title="Included in every booking"
          intro="The details that make the studio feel effortless, for you and for your guests."
        />
        <ul className="mx-auto mt-16 grid max-w-5xl gap-x-16 border-t border-line sm:grid-cols-2 lg:mt-24">
          {INCLUDED.map((item) => (
            <li key={item.title} className="reveal group flex gap-5 border-b border-line py-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-champagne-deep transition-colors duration-500 group-hover:border-champagne group-hover:bg-champagne group-hover:text-ink">
                <FeatureIcon name={item.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-[1.45rem] font-normal leading-tight">{item.title}</h3>
                <p className="mt-1.5 text-[0.95rem] text-mute">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Occasions() {
  return (
    <section id="occasions" className="bg-ink py-24 text-white lg:py-36">
      <Container>
        <Heading dark eyebrow="Occasions" title="Made for the moments worth remembering" />
      </Container>
      <Container className="mt-14 lg:mt-20">
        <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {OCCASIONS.map((o) => (
            <li
              key={o.label}
              className="group relative aspect-[3/4] w-[66%] shrink-0 snap-start overflow-hidden bg-ink-2 sm:w-[38%] lg:w-auto"
            >
              <Photo
                id={o.photo.id}
                alt={o.photo.alt}
                ratio={[3, 4]}
                focal={o.photo.focal}
                widths={[360, 600, 900]}
                sizes="(min-width: 1024px) 16vw, 66vw"
                className="h-full w-full object-cover grayscale transition-transform duration-[1400ms] ease-lux group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute inset-x-5 bottom-5 font-serif text-[1.65rem] leading-tight">{o.label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-sm text-white/60">{OCCASION_NOTE}</p>
      </Container>
    </section>
  );
}

function KindWords() {
  return (
    <section id="kind-words" className="bg-bone py-24 text-center lg:py-32">
      <Container>
        <div className="reveal mx-auto max-w-3xl">
          <p className="eyebrow text-champagne-deep">Kind words</p>
          <div className="mt-8 border border-dashed border-champagne-deep/50 px-6 py-12 sm:px-12">
            <span className="block font-serif text-7xl leading-none text-champagne-deep/60" aria-hidden="true">
              “
            </span>
            <p className="-mt-2 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-light italic leading-snug text-ink/85">
              Kind words from our clients will appear here soon.
            </p>
            <p className="mt-5 text-sm text-mute">Placeholder: no testimonials have been added yet.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-paper py-24 lg:py-36">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Heading eyebrow="FAQ" title="Questions, answered" intro="Can’t see your question here? Message us on Instagram." />
            <div className="mt-9">
              <Cta kicker="Ask us anything" tone="ink" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-line">
            {FAQS.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-serif text-[clamp(1.35rem,2.4vw,1.7rem)] leading-snug transition-colors">
                  <span>{f.q}</span>
                  <PlusIcon className="h-6 w-6 shrink-0 text-champagne-deep transition-transform duration-500 ease-lux group-open:rotate-45" />
                </summary>
                <p className="max-w-2xl pb-7 pr-10 text-mute">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  const band = PHOTOS.band;
  return (
    <section
      aria-labelledby="final-cta"
      className="relative isolate overflow-hidden bg-ink py-28 text-center text-white lg:py-44"
    >
      <Photo
        id={band.id}
        alt={band.alt}
        ratio={[16, 10]}
        widths={[800, 1400, 2000]}
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/68" />
      <Container>
        <div className="reveal">
          <p className="eyebrow text-champagne">Your date</p>
          <h2
            id="final-cta"
            className="mx-auto mt-6 max-w-3xl font-serif text-[clamp(2.6rem,6vw,5rem)] font-light leading-[1.02]"
          >
            Let’s make your night look as good as it feels.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
            Tell us the date, the place and the mood. We’ll take it from there.
          </p>
          <div className="mt-10 flex justify-center">
            <Cta kicker="Enquire" tone="champagne" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const links = [
    { href: "#experiences", label: "Experiences" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#included", label: "What’s included" },
    { href: "#occasions", label: "Occasions" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <footer className="border-t border-white/10 bg-ink text-white/70">
      <Container className="grid gap-12 py-16 md:grid-cols-12 lg:py-20">
        <div className="md:col-span-5">
          <a href="#top" className="inline-flex items-center gap-3 text-white" aria-label={`${SITE_NAME}, back to top`}>
            <Monogram className="h-11 w-11 text-champagne" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-wide">Stella White</span>
              <span className="eyebrow mt-1.5 text-[0.58rem] text-white/60">Studio</span>
            </span>
          </a>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Bespoke, hand-finished event portraits. Studio-lit black and white, with backdrops and prints made by hand.
            Travel on request.
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow text-champagne">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline pb-0.5 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="eyebrow text-champagne">Get in touch</p>
          <p className="mt-5 text-sm leading-relaxed">For now, the best way to reach us is Instagram.</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-3 text-white transition-colors hover:text-champagne"
          >
            <InstagramIcon className="h-6 w-6" />
            <span className="font-serif text-xl">{INSTAGRAM_HANDLE}</span>
          </a>
          <p className="mt-4 text-sm text-white/50">Email and studio details will be added here soon.</p>
        </div>
      </Container>
      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-2 text-xs leading-relaxed text-white/45 md:flex-row md:justify-between md:gap-10">
          <p>© 2026 Stella White Studio. All rights reserved.</p>
          <p className="md:max-w-xl md:text-right">
            First-look preview. Photography shown is illustrative stock (Unsplash) and will be replaced with the studio’s own
            work.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Experiences />
        <HowItWorks />
        <Included />
        <Occasions />
        <KindWords />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
