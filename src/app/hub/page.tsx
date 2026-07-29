import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { getCohorts } from "@/lib/constants/cohorts";
import { locale } from "@/lib/i18n";

const t = locale.ui;

const CARD_CLASSNAME =
  "group flex flex-col justify-between gap-6 rounded-[1.75rem] border border-(--forest) bg-(--card-strong) p-6 transition hover:-translate-y-0.5 hover:shadow-[0_25px_60px_rgba(23,53,45,0.12)]";

const CARD_CTA_CLASSNAME =
  "inline-flex w-fit rounded-full border border-(--forest) px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition group-hover:brightness-95";

const COHORT_CTA_CLASSNAME = `${CARD_CTA_CLASSNAME} bg-(--rose)`;

const INVESTORS_CLUB_CTA_CLASSNAME = `${CARD_CTA_CLASSNAME} bg-(--light-blue)`;

export default function Page() {
  const cohortsNewestFirst = getCohorts().slice().reverse();

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-(--card)">
      <div className="absolute inset-x-0 top-0 -z-10 h-152 bg-[radial-gradient(circle_at_top,rgba(239,200,65,0.44),transparent_48%)]" />

      <div className="w-full border-b border-(--forest) bg-(--lilac-bar)">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-9 text-sm uppercase tracking-[0.24em] text-white sm:px-8 lg:px-10">
          <h4>{t.nav.title}</h4>
          <Link
            href="/investors-club"
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
          >
            {t.investorsClub.cta}
          </Link>
        </div>
      </div>

      <section className="flex-1 py-16">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <Image
              src="/images/logo-small.webp"
              alt={t.nav.title}
              width={56}
              height={56}
              priority
              className="h-14 w-auto"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
              {t.hubSelector.eyebrow}
            </p>
            <h1 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.hubSelector.title}
            </h1>
            <p className="max-w-xl text-base leading-7 text-(--ink-soft)">
              {t.hubSelector.subtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/investors-club/hub" className={CARD_CLASSNAME}>
              <div className="space-y-2">
                <h2 className="font-display text-3xl leading-tight text-(--forest)">
                  {t.hubSelector.investorsClubLabel}
                </h2>
                <p className="text-base leading-7 text-(--ink-soft)">
                  {t.hubSelector.investorsClubTagline}
                </p>
              </div>
              <span className={INVESTORS_CLUB_CTA_CLASSNAME}>
                {t.hubSelector.cta}
              </span>
            </Link>

            {cohortsNewestFirst.map((cohort) => (
              <Link
                key={cohort.slug}
                href={`/hub/${cohort.slug}`}
                className={CARD_CLASSNAME}
              >
                <div className="space-y-2">
                  <h2 className="font-display text-3xl leading-tight text-(--forest)">
                    {cohort.label}
                  </h2>
                  <p className="text-base leading-7 text-(--ink-soft)">
                    {cohort.tagline}
                  </p>
                </div>
                <span className={COHORT_CTA_CLASSNAME}>
                  {t.hubSelector.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
