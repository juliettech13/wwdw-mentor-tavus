import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { footerLinks } from '@/lib/constants/footer-links';
import { sessions } from '@/lib/constants/sessions';
import { locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: "Wealthy Women Don't Wait — El Curso",
  description:
    'El curso de 3 semanas que te lleva de "algún día voy a invertir" a tener un portafolio real.',
  openGraph: {
    title: "Wealthy Women Don't Wait — El Curso",
    description:
      'El curso de 3 semanas que te lleva de "algún día voy a invertir" a tener un portafolio real.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wealthy Women Don't Wait — El Curso",
    description:
      'El curso de 3 semanas que te lleva de "algún día voy a invertir" a tener un portafolio real.',
    images: ['/og-image.png'],
  },
};

const STRIPE_URL =
  'https://book.stripe.com/8x228r9uhc3G7HN5AYaIM04?prefilled_promo_code=wwdw';

const STUDENT_LOGOS = [
  { src: '/images/logos/bonita-logo-rojo.avif', alt: 'Bonita' },
  { src: '/images/logos/chanel-logo.png', alt: 'Chanel' },
  { src: '/images/logos/dorben.webp', alt: 'Dorben' },
  { src: '/images/logos/fenomena.avif', alt: 'Fenomena' },
  { src: '/images/logos/mama-jungla.webp', alt: 'Mamá Jungla' },
  { src: '/images/logos/ministerio-ambiente.png', alt: 'Ministerio de Ambiente' },
  { src: '/images/logos/mira-logo.webp', alt: 'Mira Project School' },
  { src: '/images/logos/museo-del-canal.png', alt: 'Museo del Canal' },
  { src: '/images/logos/play-money-logo.webp', alt: 'Play Money' },
  { src: '/images/logos/real-madrid.png', alt: 'Real Madrid' },
  { src: '/images/logos/rev.png', alt: 'Rev On Demand' },
];

const t = locale.ui.landing;
const navT = locale.ui.nav;

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ── Sticky nav ── */}
      <nav className="sticky top-0 z-50 w-full border-b border-(--forest) bg-(--lilac-bar)">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:opacity-80"
          >
            {navT.title}
          </Link>
          <a
            href={STRIPE_URL}
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative border-b border-(--forest) bg-(--card) pb-16 pt-12 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52rem] bg-[radial-gradient(circle_at_top,rgba(239,200,65,0.40),transparent_52%)]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="flex flex-col gap-7">
              <h1 className="max-w-2xl font-display text-7xl leading-[0.88] tracking-[-0.04em] text-(--forest) sm:text-8xl lg:text-[7.5rem]">
                {t.hero.headline}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-(--ink-soft)">
                {t.hero.subheadline}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={STRIPE_URL}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="inline-flex w-fit items-center justify-center rounded-full border border-(--forest) bg-(--lilac-bar) px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(183,132,173,0.35)] transition hover:-translate-y-0.5 hover:brightness-90"
                >
                  {t.hero.cta}
                </a>
                <p className="text-sm text-(--ink-soft)">
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-(--mint)" />
                  {t.hero.trustNote}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                {t.hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-(--border) bg-(--card-mid) px-4 py-4 text-center"
                  >
                    <p className="font-display text-3xl font-bold text-(--forest)">
                      {stat.number}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-(--ink-soft)">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-sm justify-self-end overflow-hidden rounded-[2rem] border border-(--forest) p-4 shadow-[0_25px_60px_rgba(23,53,45,0.14)] lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/investors-club-hero.jpg"
                  alt="Wealthy Women Don't Wait — comunidad de mujeres inversionistas"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Company logos strip ── */}
      <div className="border-b border-(--forest) bg-(--paper-strong) py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-(--ink-soft)">
            Estudiantes de empresas como
          </p>
          <div className="overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-12">
              {[...STUDENT_LOGOS, ...STUDENT_LOGOS].map((logo, i) => (
                <div key={i} className={`relative shrink-0 ${logo.alt === 'Real Madrid' ? 'h-16 w-16 sm:h-20 sm:w-20' : 'h-12 w-32 sm:h-14 sm:w-40'}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── For you / Not for you ── */}
      <section className="border-b border-(--forest) bg-(--mustard) py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.forYou.headline}
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-[3fr_2fr] lg:items-stretch">
            <ul className="flex flex-col gap-3">
              {t.forYou.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 rounded-full border border-(--border-strong) bg-(--card-mid) px-5 py-3"
                >
                  <span className="shrink-0 text-xl leading-none">{item.emoji}</span>
                  <p className="text-base leading-6 text-(--ink)">{item.text}</p>
                </li>
              ))}
            </ul>

            <div className="rounded-[1.75rem] border border-(--border-strong) bg-(--card-strong) p-6">
              <h3 className="font-display text-2xl text-(--forest)">{t.forYou.notTitle}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {t.forYou.notItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base leading-7 text-(--ink-soft)">
                    <span className="mt-1 text-xs font-bold text-(--rose-deep)">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="border-b border-(--forest) bg-(--paper-strong) py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.included.headline}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.included.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-(--forest) bg-(--card-strong) p-6"
              >
                <span className="mb-4 block text-4xl leading-none">{item.emoji}</span>
                <h3 className="font-display text-2xl leading-tight text-(--forest)">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-(--ink-soft)">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section id="curriculum" className="border-b border-(--forest) bg-(--paper-soft) py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.curriculum.headline}
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {sessions.map((session, i) => (
              <article
                key={session.title}
                className="rounded-[1.75rem] border border-(--forest) bg-(--card-strong) p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-(--forest) bg-(--mustard-faint-bg) text-xs font-bold text-(--forest)">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--rose-deep)">
                      {session.date}
                    </p>
                    <h3 className="mt-1 font-display text-2xl leading-tight text-(--forest)">
                      {session.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials (moved up) ── */}
      <section className="border-b border-(--forest) bg-(--paper-light) py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.testimonials.headline}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {t.testimonials.items.map((item, i) => (
              <figure
                key={i}
                className="flex flex-col gap-5 rounded-[1.75rem] border border-(--forest) bg-(--card-strong) p-7"
              >
                <blockquote className="flex-1 text-base italic leading-7 text-(--ink)">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="font-semibold text-(--forest)">{item.name}</p>
                  <p className="text-sm text-(--ink-soft)">{item.city}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instructor ── */}
      <section className="border-b border-(--forest) bg-(--forest) py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
            {/* Photo */}
            <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.3)] lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/juliette.png"
                  alt="Juliette Chevalier — instructora del curso"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-5">
              <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">
                {t.instructor.name}
              </h2>
              <p className="max-w-lg text-lg leading-8 text-white/75">{t.instructor.bio}</p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                {footerLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={item.label}
                    title={item.label}
                    className="footer-social-link transition"
                  >
                    <span>{item.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── FAQ ── */}
      <section className="border-b border-(--forest) bg-(--paper-soft) py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.faq.headline}
            </h2>
          </div>

          <div className="mx-auto max-w-3xl divide-y divide-(--border)">
            {t.faq.items.map((item, i) => (
              <details key={i} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-base font-semibold leading-7 text-(--forest)">{item.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-(--forest) text-sm font-bold text-(--forest) transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-7 text-(--ink-soft)">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="border-b border-(--forest) bg-(--lilac-bar) py-24">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <h2 className="mx-auto mb-3 max-w-3xl font-display text-6xl leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl lg:text-[6rem]">
            {t.finalCta.headline}
          </h2>
          <p className="mb-10 text-lg leading-8 text-white/80">{t.finalCta.sub}</p>
          <a
            href={STRIPE_URL}
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-10 py-6 text-base font-semibold uppercase tracking-[0.18em] text-(--forest) shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
          >
            {t.finalCta.cta}
          </a>
          <p className="mt-5 text-sm text-white/60">{t.finalCta.note}</p>
        </div>
      </section>

      {/* ── AI Mentor Gloria ── */}
      <section className="border-b border-(--forest) bg-(--paper) py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 space-y-3 text-center">
              <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
                {t.mentor.headline}
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-8 text-(--ink-soft)">
                {t.mentor.sub}
              </p>
            </div>

            <aside className="relative overflow-hidden rounded-4xl border border-(--forest) bg-(--card) p-3 shadow-[0_30px_80px_rgba(23,53,45,0.12)]">
              <div className="relative overflow-hidden border border-(--forest)">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_40%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_100%)]" />
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/gloria.webp"
                    alt="Gloria, la mentora AI del curso Wealthy Women Don't Wait"
                    fill
                    sizes="(min-width: 1024px) 80rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-6 flex justify-center px-5">
                  <a
                    href={STRIPE_URL}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-(--forest) bg-(--mustard) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
                  >
                    <span className="text-xl leading-none">☏</span>
                    <span>{t.mentor.cta}</span>
                  </a>
                </div>
              </div>
              <div className="mt-4 grid gap-3 text-base leading-7 text-(--ink) lg:grid-cols-2">
                {t.mentor.prompts.map((prompt) => (
                  <div
                    key={prompt}
                    className="rounded-2xl border border-(--border) bg-white/80 px-4 py-3 italic"
                  >
                    {prompt}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
