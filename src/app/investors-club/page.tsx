import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: "Investors Club · Wealthy Women Don't Wait",
  description: 'Comunidad post-curso para mujeres que quieren seguir creciendo su portafolio.',
  openGraph: {
    title: "Investors Club · Wealthy Women Don't Wait",
    description: 'Comunidad post-curso para mujeres que quieren seguir creciendo su portafolio.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Investors Club · Wealthy Women Don't Wait",
    description: 'Comunidad post-curso para mujeres que quieren seguir creciendo su portafolio.',
    images: ['/og-image.png'],
  },
};

const t = locale.ui.investorsClub;
const navT = locale.ui.nav;

const STRIPE_URL = 'https://book.stripe.com/8x228r9uhc3G7HN5AYaIM04?prefilled_promo_code=wwdw';

const SCHEDULE_MONTHS = [
  { color: 'var(--investors-ai)', emoji: '🤖', label: 'AI', month: 'Julio', number: '07' },
  { color: 'var(--mustard-deep)', emoji: '🌿', label: 'Salud & Wellness', month: 'Agosto', number: '08' },
  { color: 'var(--investors-teal)', emoji: '♻️', label: 'Sostenibilidad', month: 'Septiembre', number: '09' },
] as const;

const WEEK_ICONS = ['💌', '🎙️', '💌', '👩‍🏫'] as const;
const WEEK_LABELS = ['W1', 'W2', 'W3', 'W4'] as const;

export default function InvestorsClubPage() {
  return (
    <main className="relative overflow-hidden bg-(--card)">
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top,rgba(183,132,173,0.35),transparent_52%)]" />

      {/* Nav */}
      <div className="w-full border-b border-(--forest) bg-(--lilac-bar)">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-9 text-sm uppercase tracking-[0.24em] text-white sm:px-8 lg:px-10">
          <Link href="/" className="transition hover:opacity-80">
            {navT.title}
          </Link>
          <a
            href={STRIPE_URL}
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
          >
            {t.cta}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-(--forest) pb-16 pt-12 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="flex flex-col gap-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--rose-deep)">
                {t.hero.eyebrow}
              </p>
              <h1 className="font-display text-6xl leading-[0.92] tracking-[-0.04em] text-(--forest) sm:text-7xl lg:text-[5.5rem]">
                {t.hero.headline}
              </h1>
              <p className="max-w-lg text-xl leading-8 text-(--ink-soft) lg:text-2xl lg:leading-9">
                {t.hero.subheadline}
              </p>
              <a
                href={STRIPE_URL}
                rel="noreferrer noopener"
                target="_blank"
                className="inline-flex w-fit items-center justify-center rounded-full border border-(--forest) bg-(--lilac-bar) px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:brightness-90"
              >
                {t.cta} →
              </a>
            </div>

            <div className="relative w-full max-w-sm justify-self-end overflow-hidden rounded-[2rem] border border-(--forest) p-4 shadow-[0_25px_60px_rgba(23,53,45,0.12)] lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/investors-club-hero.jpg"
                  alt="Investors Club — comunidad de mujeres inversionistas"
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

      {/* Discount banner */}
      <div className="border-b border-(--forest) bg-(--mustard) py-6 text-center">
        <p className="text-base font-semibold tracking-[0.14em] text-(--forest)">
          {t.discountBanner}
        </p>
      </div>

      {/* "Es para tí si..." */}
      <section className="border-b border-(--forest) bg-(--paper-strong) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="mb-10 font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
            {t.forYou.title}
          </h2>
          <ul className="grid gap-4 lg:grid-cols-2">
            {t.forYou.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-[1.75rem] border border-(--forest) bg-(--card-strong) px-6 py-5"
              >
                <span aria-hidden="true" className="mt-0.5 shrink-0 text-2xl leading-none">
                  {item.emoji}
                </span>
                <p className="text-base leading-7 text-(--ink)">
                  {item.before}
                  <strong className="font-semibold text-(--forest)">{item.bold}</strong>
                  {item.after}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-(--forest) bg-(--paper-light) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
              {t.features.eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.features.title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 rounded-[1.75rem] border border-(--forest) bg-(--card-strong) p-6 text-center"
              >
                <span aria-hidden="true" className="text-4xl leading-none">
                  {feature.emoji}
                </span>
                <div>
                  <p className="font-semibold text-(--forest)">{feature.label}</p>
                  {feature.value ? (
                    <p className="mt-0.5 text-sm text-(--ink-soft)">{feature.value}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="border-b border-(--forest) bg-(--paper-strong) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
              {t.schedule.eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.schedule.title}
            </h2>
          </div>
          <div className="lg:overflow-x-auto lg:rounded-[1.75rem] lg:border lg:border-(--forest) lg:bg-(--background)">
            <div className="flex flex-col gap-4 lg:min-w-[480px] lg:grid lg:grid-cols-3 lg:divide-x lg:divide-(--forest) lg:gap-0">
              {SCHEDULE_MONTHS.map((month, idx) => (
                <div key={month.number} className="flex flex-col overflow-hidden rounded-[1.75rem] border border-(--forest) bg-(--background) lg:rounded-none lg:border-0">
                  {/* Solid top color bar */}
                  <div className="h-5" style={{ backgroundColor: month.color }} />

                  {/* Number + month name */}
                  <div className="border-b border-(--border) px-6 py-6">
                    <div className="flex items-baseline gap-2.5">
                      <span
                        className="font-display text-6xl font-bold leading-none sm:text-7xl lg:text-8xl"
                        style={{ color: month.color }}
                      >
                        {month.number}
                      </span>
                      <span
                        className="font-display text-xl font-semibold leading-none sm:text-2xl"
                        style={{ color: month.color }}
                      >
                        {month.month}
                      </span>
                    </div>
                  </div>

                  {/* Category label — emoji + name on one line, colored bg */}
                  <div
                    className="flex items-center gap-3 border-b border-(--border) px-5 py-5"
                    style={{ backgroundColor: month.color }}
                  >
                    <span className="text-3xl leading-none sm:text-4xl">{month.emoji}</span>
                    <span className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                      {month.label}
                    </span>
                  </div>

                  {/* W1–W4 labels */}
                  <div className="grid grid-cols-4 border-b border-(--border) px-3 py-2">
                    {WEEK_LABELS.map((w) => (
                      <span
                        key={w}
                        className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-(--ink-soft)"
                      >
                        {w}
                      </span>
                    ))}
                  </div>

                  {/* Week icons */}
                  <div className="grid grid-cols-4 border-b border-(--border) px-3 py-6">
                    {WEEK_ICONS.map((icon, i) => (
                      <span key={i} className="text-center text-4xl leading-none">
                        {icon}
                      </span>
                    ))}
                  </div>

                  {/* Example topics */}
                  <div className="flex flex-col gap-2 px-5 py-5">
                    {t.schedule.months[idx].topics.map((topic, j) => (
                      <p key={j} className="text-sm leading-snug text-(--ink)">
                        <span className="mr-1.5 font-semibold" style={{ color: month.color }}>
                          →
                        </span>
                        {topic}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="border-b border-(--forest) bg-(--forest) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 text-center">
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-white sm:text-6xl">
              {t.pricing.sectionTitle}
            </h2>
          </div>
          <div className="mx-auto max-w-xl rounded-[2rem] border border-(--forest) bg-(--card-strong) px-8 py-10">
            <div className="flex flex-col gap-4">
              {/* Total retail value */}
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-semibold text-(--ink-soft)">{t.pricing.valueTotalLabel}</p>
                <p className="shrink-0 font-display text-2xl font-bold line-through decoration-(--ink-soft) text-(--ink-soft)">
                  {t.pricing.valueTotal}
                </p>
              </div>

              {/* Regular price */}
              <div className="flex items-baseline justify-between gap-4 border-t border-(--border) pt-4">
                <p className="text-sm font-semibold text-(--ink-soft)">{t.pricing.originalPriceLabel}</p>
                <p className="shrink-0 font-display text-2xl font-bold line-through decoration-(--ink-soft) text-(--ink-soft)">
                  {t.pricing.originalPrice}
                </p>
              </div>

              {/* Current price */}
              <div className="flex items-center justify-between gap-4 border-t border-(--forest) pt-4">
                <div>
                  <span className="rounded-full bg-(--mustard) px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-(--forest)">
                    {t.pricing.badge}
                  </span>
                  <p className="mt-1.5 text-xs font-semibold text-(--ink-soft)">{t.pricing.validUntil}</p>
                </div>
                <p className="shrink-0 font-display text-4xl font-bold text-(--forest)">
                  {t.pricing.price}
                </p>
              </div>
            </div>

            <a
              href={STRIPE_URL}
              rel="noreferrer noopener"
              target="_blank"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-(--lilac-bar) bg-(--lilac-bar) px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:brightness-110"
            >
              {t.pricing.ctaHere}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
