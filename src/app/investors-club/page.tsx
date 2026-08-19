import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: "Investors Club · Wealthy Women Don't Wait",
  description: 'Comunidad para mujeres que quieren crecer su patrimonio.',
  openGraph: {
    title: "Investors Club · Wealthy Women Don't Wait",
    description: 'Comunidad para mujeres que quieren crecer su patrimonio.',
    images: [{ url: '/og-investors-club.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Investors Club · Wealthy Women Don't Wait",
    description: 'Comunidad para mujeres que quieren crecer su patrimonio.',
    images: ['/og-investors-club.png'],
  },
};

const t = locale.ui.investorsClub;
const navT = locale.ui.nav;

const STRIPE_PAYMENT_PLAN_URL = 'https://buy.stripe.com/bJe4gBgGudIJdPgaG04Rq01';
const STRIPE_URL = 'https://buy.stripe.com/28E3cxdui3459z07tO4Rq00';

const PAST_MONTHS = [
  { color: 'var(--investors-ai)', number: '07' },
  { color: 'var(--mustard-deep)', number: '08' },
] as const;

const SCHEDULE_MONTHS = [
  { color: 'var(--investors-teal)', emoji: '♻️', label: 'Sostenibilidad', month: 'Septiembre', number: '09' },
  { color: 'var(--investors-cpg)', emoji: '🛒', label: 'Consumer Product Goods', month: 'Octubre', number: '10' },
  { color: 'var(--investors-saas)', emoji: '☁️', label: 'SaaS', month: 'Noviembre', number: '11' },
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
              <p className="max-w-lg text-lg leading-8 text-(--ink-soft) lg:text-lg lg:leading-9">
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
      <section className="border-b border-(--forest) bg-(--forest) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
                {t.features.eyebrow}
              </p>
              <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-white sm:text-6xl">
                {t.features.title}
              </h2>
            </div>
            <div className="shrink-0 sm:text-right">
              <p className="text-sm font-semibold text-white/60">{t.pricing.valueTotalLabel}</p>
              <p className="font-display text-4xl font-bold text-white">{t.pricing.valueTotal}</p>
            </div>
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

      {/* Track record — what the Club has covered so far */}
      <section className="border-b border-(--forest) bg-(--forest) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--mustard)">
              {t.past.eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-white sm:text-6xl">
              {t.past.title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-white/75">
              {t.past.subtitle}
            </p>
          </div>

          <dl className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {t.past.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse rounded-[1.75rem] border border-white/20 bg-white/10 px-5 py-6 text-center backdrop-blur-sm"
              >
                <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  {stat.label}
                </dt>
                <dd className="font-display text-5xl font-bold leading-none text-(--mustard)">
                  {stat.number}
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-4 lg:grid-cols-2">
            {t.past.months.map((month, idx) => (
              <article
                key={month.month}
                className="overflow-hidden rounded-[1.75rem] border border-(--forest) bg-(--card-strong)"
              >
                <div className="h-2" style={{ backgroundColor: PAST_MONTHS[idx].color }} />
                <div className="p-6">
                  <div className="flex items-baseline gap-2.5">
                    <span
                      className="font-display text-5xl font-bold leading-none"
                      style={{ color: PAST_MONTHS[idx].color }}
                    >
                      {PAST_MONTHS[idx].number}
                    </span>
                    <span
                      className="font-display text-xl font-semibold leading-none"
                      style={{ color: PAST_MONTHS[idx].color }}
                    >
                      {month.month}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span aria-hidden="true" className="text-3xl leading-none">
                      {month.emoji}
                    </span>
                    <h3 className="font-display text-3xl leading-tight text-(--forest)">
                      {month.label}
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    {month.highlights.map((highlight) => (
                      <p key={highlight} className="text-sm leading-6 text-(--ink)">
                        <span
                          className="mr-1.5 font-semibold"
                          style={{ color: PAST_MONTHS[idx].color }}
                        >
                          ✓
                        </span>
                        {highlight}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="border-b border-(--forest) bg-(--mustard) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 text-center">
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
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

              {/* Price */}
              <div className="flex items-center justify-between gap-4 border-t border-(--forest) pt-4">
                <p className="text-sm font-semibold text-(--ink-soft)">{t.pricing.priceLabel}</p>
                <p className="shrink-0 font-display text-4xl font-bold text-(--forest)">
                  {t.pricing.price}
                </p>
              </div>

              {/* Payment plan */}
              <div className="flex items-center justify-between gap-4 border-t border-(--forest) pt-4">
                <p className="text-sm font-semibold text-(--ink-soft)">{t.pricing.paymentPlanLabel}</p>
                <p className="shrink-0 font-display text-4xl font-bold text-(--forest)">
                  {t.pricing.paymentPlanInstallment}
                </p>
              </div>

              {/* Deadline — regular price kicks in after the early-bird window */}
              <div className="flex items-center justify-between gap-4 border-t border-(--forest) pt-4">
                <p className="text-sm font-semibold text-(--rose-deep)">
                  {t.pricing.priceIncreaseLabel}
                </p>
                <p className="shrink-0 font-display text-2xl font-bold text-(--rose-deep)">
                  {t.pricing.priceIncrease}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={STRIPE_URL}
                rel="noreferrer noopener"
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-full border border-(--lilac-bar) bg-(--lilac-bar) px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:brightness-110"
              >
                {t.pricing.ctaHere}
              </a>
              <a
                href={STRIPE_PAYMENT_PLAN_URL}
                rel="noreferrer noopener"
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-full border border-(--forest) bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--forest) hover:text-white"
              >
                {t.pricing.ctaPaymentPlan}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
