"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PasswordGate } from "@/components/password-gate";
import { QuizBanner } from "@/components/quiz/quiz-banner";
import { QuizShell } from "@/components/quiz/quiz-shell";
import { SiteFooter } from "@/components/site-footer";
import { TutorialsModal } from "@/components/tutorials-modal";

import { type Cohort } from "@/lib/constants/cohorts";
import { locale } from "@/lib/i18n";

const t = locale.ui;

/** Rendered on the dark forest banner, so these are the light tints of each topic color. */
const INVESTORS_CLUB_MONTHS = [
  { color: 'var(--mint)', emoji: '♻️', label: 'Sostenibilidad', month: 'Septiembre' },
  {
    color: 'var(--investors-cpg-light)',
    emoji: '🛒',
    label: 'Consumer Product Goods',
    month: 'Octubre',
  },
  {
    color: 'var(--investors-saas-light)',
    emoji: '☁️',
    label: 'SaaS',
    month: 'Noviembre',
  },
] as const;

interface CohortHubProps {
  cohort: Cohort;
}

export function CohortHub({ cohort }: CohortHubProps) {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);

  const curriculumCopy = { ...t.curriculum, ...cohort.copy?.curriculum };
  const homeworkCopy = { ...t.homework, ...cohort.copy?.homework };
  const resourcesCopy = { ...t.resources, ...cohort.copy?.resources };

  useEffect(() => {
    if (!isQuizOpen && !isTutorialsOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isQuizOpen, isTutorialsOpen]);

  return (
    <PasswordGate
      sessionKey={cohort.sessionKey}
      expectedPassword={cohort.password}
    >
    <main className="relative overflow-hidden bg-(--card)">
      <div className="absolute inset-x-0 top-0 -z-10 h-152 bg-[radial-gradient(circle_at_top,rgba(239,200,65,0.44),transparent_48%)]" />

      <div className="w-full border-b border-(--forest) bg-(--lilac-bar)">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-9 text-sm uppercase tracking-[0.24em] text-white sm:px-8 lg:px-10">
          <h4>{t.nav.title}</h4>
          {cohort.hasInvestorsClubPromo ? (
            <Link
              href="/investors-club"
              className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
            >
              {t.investorsClub.cta}
            </Link>
          ) : null}
        </div>
      </div>

      <section className="border-b border-(--forest) pb-16 pt-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div className="flex h-full flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
                {cohort.label}
              </p>
              <h1 className="max-w-4xl font-display text-6xl leading-[0.92] tracking-[-0.04em] text-(--forest) sm:text-7xl lg:text-[6rem]">
                {cohort.hero.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-(--ink-soft)">
                {cohort.hero.descriptionPrefix}{" "}
                <span className="font-semibold text-(--forest)">
                  {cohort.hero.courseName}
                </span>{" "}
                {cohort.hero.descriptionSuffix}
              </p>
            </div>

            {cohort.hasInvestorsClubPromo ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/investors-club"
                  style={{ color: "white" }}
                  className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--lilac-bar) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:brightness-90"
                >
                  {t.investorsClub.cta}
                </Link>
              </div>
            ) : null}
          </div>

          <div className="relative w-full max-w-88 justify-self-end overflow-hidden border border-(--forest) p-5 rounded-4xl shadow-[0_25px_60px_rgba(23,53,45,0.12)]">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/real-estate.webp"
                alt="Dreams themed banner art"
                fill
                priority
                sizes="(min-width: 1024px) 22rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {cohort.hasInvestorsClubPromo ? (
      <section className="border-b border-(--forest) bg-(--forest) py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* Left: pricing card */}
            <div className="order-2 rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-sm lg:order-1">
              {/* Feature list */}
              <div className="mb-6 space-y-3">
                {t.investorsClub.features.items.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span aria-hidden="true" className="shrink-0 text-lg leading-none">
                      {feature.emoji}
                    </span>
                    <span className="text-sm text-white/75">{feature.label}</span>
                    {feature.value ? (
                      <span className="ml-auto text-xs font-bold text-(--mustard) line-through decoration-(--mustard)">
                        {feature.value}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>

              {/* Current price (left) + total value (right) on same row */}
              <div className="mb-1 flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-5xl font-bold text-white">
                    {t.investorsClub.pricing.price}
                  </span>
                </div>
                <span className="font-display text-3xl font-bold text-(--mustard) line-through decoration-(--mustard)">
                  {t.investorsClub.pricing.valueTotal}
                </span>
              </div>
              <p className="mb-7 text-sm font-semibold text-white/80">
                {t.investorsClub.pricing.priceLabel}
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={cohort.stripeUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-full border border-(--lilac-bar) bg-(--lilac-bar) px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  {t.investorsClub.cta} →
                </a>
                <a
                  href={cohort.stripePaymentPlanUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-full border border-white/40 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {t.investorsClub.pricing.paymentPlanInstallment} x 3 ·{' '}
                  {t.investorsClub.pricing.ctaPaymentPlan}
                </a>
              </div>
            </div>

            {/* Right: messaging */}
            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--mustard)">
                {t.investorsClub.hero.eyebrow}
              </p>
              <h2 className="font-display text-6xl leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl">
                {t.investorsClub.banner.headline}
              </h2>
              <p className="max-w-lg text-xl leading-8 text-white/75">
                {t.investorsClub.banner.sub}
              </p>

              <div className="flex flex-col gap-2">
                {INVESTORS_CLUB_MONTHS.map((month) => (
                  <div
                    key={month.label}
                    className="flex items-center gap-3 rounded-[1.25rem] border border-white/20 bg-white/10 px-4 py-3"
                  >
                    <span aria-hidden="true" className="shrink-0 text-2xl leading-none">
                      {month.emoji}
                    </span>
                    <span className="font-display text-xl leading-tight text-white">
                      {month.label}
                    </span>
                    <span
                      className="ml-auto text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: month.color }}
                    >
                      {month.month}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/investors-club"
                className="inline-flex w-fit items-center justify-center rounded-full border border-(--mustard) px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-(--mustard) transition hover:bg-(--mustard) hover:text-(--forest)"
              >
                {t.investorsClub.learnMore}
              </Link>
            </div>

          </div>
        </div>
      </section>
      ) : null}

      {cohort.homework.length > 0 ? (
        <section className="border-b border-(--forest) bg-(--paper-strong) py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
                  {homeworkCopy.title}
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-(--ink-soft)">
                  {homeworkCopy.description}
                </p>
              </div>
            </div>

            <div className="my-8 border-t border-(--forest)" />

            <div className="overflow-hidden rounded-2xl border border-(--forest)">
              <div className="grid grid-cols-[1fr_2fr_2fr] bg-light-blue px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-(--forest)">
                <span>{homeworkCopy.tableDate}</span>
                <span>{homeworkCopy.tableClass}</span>
                <span>{homeworkCopy.tableHomework}</span>
              </div>

              {cohort.homework.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_2fr_2fr] border-t border-(--border) bg-(--paper) px-6 py-5 first:border-t-0"
                >
                  <div className="flex items-start gap-2.5 pr-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-(--mustard)" />
                    <span className="text-base leading-7 text-(--forest)">
                      {item.date}
                    </span>
                  </div>
                  <div className="pr-6">
                    <span className="text-base font-semibold leading-7 text-(--forest)">
                      {item.session}
                    </span>
                  </div>
                  <div>
                    <p className="text-base leading-7 text-(--ink)">{item.task}</p>
                    {item.href && (
                      <a
                        href={item.href}
                        className="mt-2 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-(--forest) underline underline-offset-4"
                      >
                        {homeworkCopy.openAssignment}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-(--forest) bg-(--mustard) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--forest)">
              {resourcesCopy.eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {resourcesCopy.title}
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {cohort.supportStack.map((item) => (
              <article
                key={item.id}
                className="rounded-[1.75rem] border border-(--border-strong) bg-(--card-mid) p-5"
              >
                <h3 className="font-display text-3xl leading-tight text-(--forest)">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-(--ink)">
                  {item.copy}
                </p>
                {item.modal === 'tutorials' ? (
                  <button
                    type="button"
                    onClick={() => setIsTutorialsOpen(true)}
                    className="mt-5 inline-flex rounded-full border border-(--forest) px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:bg-(--forest-ghost)"
                  >
                    {item.label}
                  </button>
                ) : item.href ? (
                  <a
                    href={item.href}
                    className="mt-5 inline-flex rounded-full border border-(--forest) px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:bg-(--forest-ghost)"
                  >
                    {item.label}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {cohort.sessions.length > 0 ? (
        <section
          id="curriculum"
          className="border-b border-(--forest) bg-(--paper-strong) py-16"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
                  {curriculumCopy.eyebrow}
                </p>
                <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
                  {curriculumCopy.title}
                </h2>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {cohort.sessions.map((session) => (
                <article
                  key={session.title}
                  className="rounded-[1.75rem] border border-(--forest) bg-(--card-strong) p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--rose-deep)">
                    {session.date}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-(--forest)">
                    {session.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <QuizBanner onOpen={() => setIsQuizOpen(true)} />

      <SiteFooter />

      {isTutorialsOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-8">
          <button
            type="button"
            aria-label={t.tutorials.close}
            onClick={() => setIsTutorialsOpen(false)}
            className="absolute inset-0 cursor-default bg-[rgba(24,62,53,0.34)] backdrop-blur-md"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t.tutorials.title}
            className="relative z-10 flex h-[min(94vh,920px)] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-(--forest) bg-(--paper) shadow-[0_40px_120px_rgba(23,53,45,0.24)]"
          >
            <TutorialsModal onClose={() => setIsTutorialsOpen(false)} />
          </div>
        </div>
      ) : null}

      {isQuizOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-8">
          <button
            type="button"
            aria-label={t.quiz.shell.close}
            onClick={() => setIsQuizOpen(false)}
            className="absolute inset-0 cursor-default bg-[rgba(24,62,53,0.34)] backdrop-blur-md"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={t.quiz.shell.eyebrow}
            className="relative z-10 flex h-[min(94vh,920px)] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-(--forest) bg-(--paper) shadow-[0_40px_120px_rgba(23,53,45,0.24)]"
          >
            <div className="relative flex min-h-0 flex-1">
              <QuizShell onClose={() => setIsQuizOpen(false)} />
            </div>
          </div>
        </div>
      ) : null}
    </main>
    </PasswordGate>
  );
}
