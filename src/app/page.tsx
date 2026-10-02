import type { CSSProperties, ReactNode } from "react";
import Header from "@/components/header";
import Cta, { TextLink } from "@/components/cta";
import Photo from "@/components/photo";
import Carousel from "@/components/carousel";
import Motion from "@/components/motion";
import Words from "@/components/words";
import InstagramEmbeds from "@/components/instagram-embeds";
import { Lockup } from "@/components/wordmark";
import { FeatureIcon, InstagramIcon, PlusIcon } from "@/components/icons";
import {
  BIO_LINE,
  EXPERIENCES,
  FAQS,
  FEED_TILES,
  INCLUDED,
  INSTAGRAM_HANDLE,
  INSTAGRAM_POST_URLS,
  INSTAGRAM_URL,
  LOGO_SRC,
  OCCASIONS,
  OCCASION_NOTE,
  PHOTOS,
  SITE_NAME,
  STATEMENT,
  STEPS,
  photoUrl,
} from "@/lib/site";

const idx = (i: number) => ({ "--i": i }) as CSSProperties;

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

function SectionHead({
  eyebrow,
  title,
  intro,
  dark = false,
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <div data-reveal className="max-w-3xl">
      <p className={`t-eyebrow ${dark ? "text-ash" : "text-steel"}`}>{eyebrow}</p>
      <h2 id={id} className="t-h2 mt-4">
        {title}
      </h2>
      {intro ? <p className={`t-sub mt-6 ${dark ? "text-ash" : "text-steel"}`}>{intro}</p> : null}
    </div>
  );
}

function Hero() {
  const hero = PHOTOS.hero;
  return (
    <section id="top" className="bg-paper text-ink">
      <Container className="pb-12 pt-28 text-center lg:pb-16 lg:pt-32">
        <Lockup className="[--wm:clamp(2.5rem,5vw,3.5rem)]" />
        <h1 className="t-display mx-auto mt-10 max-w-[16ch] lg:mt-12">Portraits, printed in a minute.</h1>
        <p className="t-sub mx-auto mt-6 max-w-2xl text-steel">
          Studio-lit black and white at your wedding, party or launch. Backdrops and prints made by hand, for your event.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          <Cta tone="onLight" />
          <TextLink tone="onLight">See our work on Instagram</TextLink>
        </div>
      </Container>

      <div className="px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[1600px] overflow-hidden rounded-[28px] bg-coal sm:aspect-[16/10] sm:rounded-[40px] lg:aspect-[16/9]">
          <picture>
            <source media="(max-width: 639px)" srcSet={photoUrl(hero.id, 900, 1125, { x: 0.5, y: 0.4 })} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoUrl(hero.id, 2400, 1350, hero.focal)}
              alt={hero.alt}
              width={2400}
              height={1350}
              fetchPriority="high"
              decoding="async"
              className="settle h-full w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="on-dark bg-ink py-24 text-paper lg:py-40" aria-label="About the studio">
      <Container>
        <p
          data-scrollwords
          className="max-w-5xl text-[clamp(2rem,5.2vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.04em]"
        >
          <Words text={STATEMENT} />
        </p>
      </Container>
    </section>
  );
}

function Experiences() {
  const e = EXPERIENCES;
  const fill =
    "absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]";
  return (
    <section id="experiences" className="bg-paper py-24 lg:py-40">
      <Container>
        <SectionHead eyebrow="What we do" title="Pick one. Or all three." />
        <div className="mt-16 grid gap-4 lg:mt-24 lg:grid-cols-6 lg:gap-6">
          <div data-reveal className="lg:col-span-4">
            <article className="lift on-dark group grid h-full overflow-hidden rounded-[28px] bg-ink text-paper lg:grid-cols-2">
              <div className="order-2 flex flex-col justify-end p-8 lg:order-1 lg:min-h-[640px] lg:p-12">
                <p className="t-eyebrow text-ash">{e.studio.label}</p>
                <h3 className="t-h3 mt-3 max-w-sm">{e.studio.title}</h3>
                <p className="mt-4 max-w-sm text-[17px] text-paper/75">{e.studio.body}</p>
                <TextLink tone="onDark" className="mt-6">
                  Message us on Instagram
                </TextLink>
              </div>
              <div className="relative order-1 aspect-[4/5] overflow-hidden lg:order-2 lg:aspect-auto">
                <Photo
                  id={PHOTOS.studio.id}
                  alt={PHOTOS.studio.alt}
                  ratio={[3, 4]}
                  focal={PHOTOS.studio.focal}
                  widths={[480, 800, 1100]}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={fill}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent lg:hidden" />
                <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-ink to-transparent lg:block" />
              </div>
            </article>
          </div>

          <div data-reveal style={idx(1)} className="lg:col-span-2">
            <article className="lift group flex h-full min-h-[560px] flex-col overflow-hidden rounded-[28px] bg-bone lg:min-h-[640px]">
              <div className="p-8 lg:p-10">
                <p className="t-eyebrow text-steel">{e.atelier.label}</p>
                <h3 className="t-h3 mt-3">{e.atelier.title}</h3>
                <p className="mt-4 text-[17px] text-steel">{e.atelier.body}</p>
                <TextLink tone="onLight" className="mt-6">
                  Message us on Instagram
                </TextLink>
              </div>
              <div className="relative mt-auto min-h-[240px] flex-1 overflow-hidden">
                <Photo
                  id={PHOTOS.atelier.id}
                  alt={PHOTOS.atelier.alt}
                  ratio={[4, 3]}
                  focal={PHOTOS.atelier.focal}
                  widths={[480, 800, 1100]}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={`${fill} grayscale`}
                />
              </div>
            </article>
          </div>

          <div data-reveal className="lg:col-span-6">
            <article className="lift on-dark group grid overflow-hidden rounded-[28px] bg-coal text-paper lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 lg:p-16">
                <p className="t-eyebrow text-ash">{e.keepsake.label}</p>
                <h3 className="t-h3 mt-3 max-w-md">{e.keepsake.title}</h3>
                <p className="mt-4 max-w-md text-[17px] text-ash">{e.keepsake.body}</p>
                <TextLink tone="onDark" className="mt-6">
                  Message us on Instagram
                </TextLink>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[520px]">
                <Photo
                  id={PHOTOS.keepsake.id}
                  alt={PHOTOS.keepsake.alt}
                  ratio={[5, 4]}
                  focal={PHOTOS.keepsake.focal}
                  widths={[640, 1000, 1400]}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={fill}
                />
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="on-dark bg-ink py-24 text-paper lg:py-40">
      <Container>
        <SectionHead dark eyebrow="How it works" title="From first message to last print." />
        <ol className="mt-16 grid gap-4 lg:mt-24 lg:grid-cols-3 lg:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.number} data-reveal style={idx(i)} className="flex">
              <div className="lift flex min-h-[320px] w-full flex-col rounded-[28px] bg-coal p-8 lg:min-h-[400px] lg:p-10">
                <span aria-hidden="true" className="text-[96px] font-semibold leading-none tracking-[-0.06em] lg:text-[128px]">
                  {s.number}
                </span>
                <h3 className="t-h3 mt-auto pt-12">{s.title}</h3>
                <p className="mt-3 text-[17px] text-ash">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-16 lg:mt-24">
          <Cta tone="onDark" />
        </div>
      </Container>
    </section>
  );
}

function Included() {
  return (
    <section id="included" className="bg-paper py-24 lg:py-40">
      <Container>
        <SectionHead eyebrow="Included" title="In every booking." />
        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-6">
          {INCLUDED.map((item, i) => (
            <li key={item.title} data-reveal style={idx(i % 4)} className={item.wide ? "lg:col-span-2" : ""}>
              <div className="lift flex h-full min-h-[176px] flex-col justify-between rounded-[28px] bg-bone p-8 sm:min-h-[240px] lg:min-h-[280px]">
                <FeatureIcon name={item.icon} className="h-8 w-8 text-ink" />
                <div className="mt-8 lg:mt-12">
                  <h3
                    className={`font-semibold leading-[1.1] tracking-[-0.03em] ${
                      item.wide ? "text-[28px] lg:text-[32px]" : "text-[24px]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[17px] text-steel">{item.body}</p>
                </div>
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
    <section id="occasions" className="on-dark bg-ink py-24 text-paper lg:py-40">
      <Container>
        <SectionHead dark eyebrow="Occasions" title="Weddings to launch parties." />
      </Container>
      <div className="mt-12 lg:mt-16">
        <Carousel label="Occasions">
          {OCCASIONS.map((o) => (
            <li key={o.label} className="w-[72%] shrink-0 snap-start sm:w-[44%] lg:w-[26%]">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${o.label}: see our work on Instagram`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[28px] bg-coal"
              >
                <Photo
                  id={o.photo.id}
                  alt={o.photo.alt}
                  ratio={[3, 4]}
                  focal={o.photo.focal}
                  widths={[360, 600, 900]}
                  sizes="(min-width: 1024px) 26vw, (min-width: 640px) 44vw, 72vw"
                  className="h-full w-full object-cover grayscale transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute inset-x-6 bottom-6 text-[24px] font-semibold leading-tight tracking-[-0.03em]">
                  {o.label}
                </p>
                <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/50 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <InstagramIcon className="h-5 w-5" />
                </span>
              </a>
            </li>
          ))}
        </Carousel>
      </div>
      <Container>
        <p className="mt-12 text-[17px] text-ash">{OCCASION_NOTE}</p>
      </Container>
    </section>
  );
}

function InstagramSection() {
  const hasPosts = INSTAGRAM_POST_URLS.length > 0;
  return (
    <section id="instagram" className="bg-bone py-24 lg:py-40">
      <Container>
        <SectionHead eyebrow="Instagram" title="See more on Instagram." />
        <div data-reveal className="mx-auto mt-16 max-w-[935px] lg:mt-24">
          {/* Profile header, Instagram style */}
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-12 sm:text-left">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full"
              aria-label={`Open ${SITE_NAME} on Instagram`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_SRC}
                alt={`${SITE_NAME} logo`}
                width={500}
                height={500}
                className="h-28 w-28 rounded-full bg-paper ring-1 ring-ink/10 sm:h-36 sm:w-36"
              />
            </a>
            <div>
              <p className="text-[24px] font-medium leading-tight tracking-[-0.02em]">stellawhitestudio</p>
              <p className="mt-1 text-[17px] text-steel">{BIO_LINE}</p>
              <p className="text-[17px] text-steel">Travel on request.</p>
              <div className="mt-6">
                <Cta tone="onLight" label="Follow on Instagram" />
              </div>
            </div>
          </div>

          {/* Feed: real embeds once post URLs are configured, otherwise an illustrative tile grid */}
          <div className="mt-12">
            {hasPosts ? (
              <InstagramEmbeds urls={INSTAGRAM_POST_URLS} />
            ) : (
              <>
                <ul className="grid grid-cols-3 gap-1">
                  {FEED_TILES.map((t) => (
                    <li key={t.id}>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open Instagram: ${t.alt}`}
                        className="group relative block aspect-square overflow-hidden bg-coal"
                      >
                        <Photo
                          id={t.id}
                          alt={t.alt}
                          ratio={[1, 1]}
                          focal={t.focal}
                          widths={[240, 420, 640]}
                          sizes="(min-width: 935px) 310px, 33vw"
                          className="h-full w-full object-cover grayscale transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-ink/45 text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                          <InstagramIcon className="h-8 w-8" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-center text-[13px] text-steel">
                  Illustrative preview. Select any tile to open the real feed on Instagram.
                </p>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-paper py-24 lg:py-32" aria-label="Reviews">
      <Container>
        <div
          data-reveal
          className="mx-auto max-w-3xl rounded-[28px] border border-dashed border-hairline px-8 py-16 text-center"
        >
          <p className="t-eyebrow text-steel">Reviews</p>
          <p className="t-h3 mt-4">Kind words from our clients will appear here soon.</p>
          <p className="mt-4 text-[15px] text-steel">Placeholder: no testimonials have been added yet.</p>
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-bone py-24 lg:py-40">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHead eyebrow="FAQ" title="Questions." intro="Not here? Message us on Instagram." />
            <div className="mt-8">
              <Cta tone="onLight" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-hairline">
            {FAQS.map((f) => (
              <details key={f.q} className="group border-b border-hairline">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-[22px] font-semibold leading-snug tracking-[-0.025em] transition-colors hover:text-steel lg:text-[24px]">
                  <span>{f.q}</span>
                  <PlusIcon className="h-6 w-6 shrink-0 transition-transform duration-500 ease-out group-open:rotate-45" />
                </summary>
                <p className="max-w-2xl pb-8 pr-12 text-[17px] text-steel">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section aria-labelledby="final-cta" className="on-dark bg-ink py-32 text-center text-paper lg:py-48">
      <Container>
        <div data-reveal>
          <h2 id="final-cta" className="t-display mx-auto max-w-[16ch]">
            Check your date.
          </h2>
          <p className="t-sub mx-auto mt-6 max-w-xl text-ash">
            Message us on Instagram with the date, the place and the mood.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6">
            <Cta tone="onDark" />
            <TextLink tone="onDark">Follow {INSTAGRAM_HANDLE}</TextLink>
            <p className="text-[14px] text-ash">Travel on request.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const links = [
    { href: "#experiences", label: "What we do" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#included", label: "Included" },
    { href: "#occasions", label: "Occasions" },
    { href: "#instagram", label: "Instagram" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <footer className="border-t border-hairline bg-paper text-[12px] leading-5 text-steel">
      <Container className="py-12">
        <div className="grid gap-10 border-b border-hairline pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-block text-ink" aria-label={`${SITE_NAME}, back to top`}>
              <Lockup className="lockup-left [--wm:2.25rem]" />
            </a>
            <p className="mt-6 max-w-xs">Finished by hand. Travel on request.</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="font-semibold text-ink">Explore</p>
            <ul className="mt-3 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="font-semibold text-ink">Get in touch</p>
            <p className="mt-3">The best way to reach us is Instagram.</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-steel"
            >
              <InstagramIcon className="h-5 w-5" />
              {INSTAGRAM_HANDLE}
            </a>
            <p className="mt-3">Email and studio details to follow.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 md:flex-row md:justify-between md:gap-10">
          <p>© 2026 Stella White Studio. All rights reserved.</p>
          <p className="md:max-w-xl md:text-right">
            First-look preview. Photography shown is illustrative stock (Unsplash) and will be replaced with the studio’s own
            work.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Statement />
        <Experiences />
        <HowItWorks />
        <Included />
        <Occasions />
        <InstagramSection />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
