"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Mentor, type MentorHandle } from "@/components/mentor";
import { PasswordGate } from "@/components/password-gate";
import { SiteFooter } from "@/components/site-footer";
import { TutorialsModal } from "@/components/tutorials-modal";

import { locale } from "@/lib/i18n";
import { investorsClubSupportStack } from "@/lib/constants/investors-club-support-stack";

const LUMA_CALENDAR_URL = 'https://lu.ma/investors-club';

const SCHEDULE_MONTHS = [
  { color: 'var(--investors-ai)', emoji: '🤖', label: 'AI' },
  { color: 'var(--mustard-deep)', emoji: '🌿', label: 'Salud & Wellness' },
  { color: 'var(--investors-teal)', emoji: '♻️', label: 'Sostenibilidad' },
] as const;

const t = locale.ui;
const th = locale.ui.investorsClubHub;

export default function Page() {
  const [isMentorOpen, setIsMentorOpen] = useState(false);
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);
  const mentorRef = useRef<MentorHandle>(null);

  const requestMentorClose = async () => {
    const didClose = await mentorRef.current?.requestClose();

    if (didClose ?? true) {
      setIsMentorOpen(false);
    }
  };

  useEffect(() => {
    if (!isMentorOpen && !isTutorialsOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMentorOpen, isTutorialsOpen]);

  return (
    <PasswordGate
      sessionKey="investors_club_auth"
      expectedPassword={process.env.NEXT_PUBLIC_INVESTORS_CLUB_PASSWORD}
      copy={th.passwordGate}
      logoAlt="Investors Club"
    >
    <main className="relative overflow-hidden bg-(--card)">
      <div className="absolute inset-x-0 top-0 -z-10 h-152 bg-[radial-gradient(circle_at_top,rgba(183,132,173,0.35),transparent_52%)]" />

      <div className="w-full border-b border-(--forest) bg-(--lilac-bar)">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-9 text-sm uppercase tracking-[0.24em] text-white sm:px-8 lg:px-10">
          <h4>{t.nav.investorsClub}</h4>
          <a
            href={LUMA_CALENDAR_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
          >
            {th.calendarCta}
          </a>
        </div>
      </div>

      <section className="border-b border-(--forest) pb-16 pt-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div className="flex h-full flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="max-w-4xl font-display text-6xl leading-[0.92] tracking-[-0.04em] text-(--forest) sm:text-7xl lg:text-[6rem]">
                {th.hero.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-(--ink-soft)">
                {th.hero.descriptionPrefix}{" "}
                <span className="font-semibold text-(--forest)">
                  {th.hero.courseName}
                </span>{" "}
                {th.hero.descriptionSuffix}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={LUMA_CALENDAR_URL}
                target="_blank"
                rel="noreferrer noopener"
                style={{ color: "white" }}
                className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--lilac-bar) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:brightness-90"
              >
                {th.calendarCta}
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-88 justify-self-end overflow-hidden border border-(--forest) p-5 rounded-4xl shadow-[0_25px_60px_rgba(23,53,45,0.12)]">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/investors-club-hero.jpg"
                alt="Investors Club — comunidad de mujeres inversionistas"
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

      <section
        id="curriculum"
        className="border-b border-(--forest) bg-(--paper-strong) py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
                {th.curriculum.eyebrow}
              </p>
              <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
                {th.curriculum.title}
              </h2>
            </div>

            <a
              href={LUMA_CALENDAR_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-(--forest) px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:bg-(--forest-ghost)"
            >
              {th.curriculum.cta}
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {SCHEDULE_MONTHS.map((month, idx) => (
              <article
                key={month.label}
                className="overflow-hidden rounded-[1.75rem] border border-(--forest) bg-(--card-strong)"
              >
                <div className="h-2" style={{ backgroundColor: month.color }} />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-3xl leading-none">
                      {month.emoji}
                    </span>
                    <h3 className="font-display text-2xl leading-tight text-(--forest)">
                      {month.label}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    {t.investorsClub.schedule.months[idx].topics.map((topic) => (
                      <p key={topic} className="text-sm leading-6 text-(--ink)">
                        <span className="mr-1.5 font-semibold" style={{ color: month.color }}>
                          →
                        </span>
                        {topic}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-(--forest) bg-(--mustard) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--forest)">
              {th.resources.eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {th.resources.title}
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {investorsClubSupportStack.map((item) => (
              <article
                key={item.title}
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

      {isMentorOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-8">
          <button
            type="button"
            aria-label={t.mentor.close}
            onClick={() => {
              void requestMentorClose();
            }}
            className="absolute inset-0 bg-[rgba(24,62,53,0.34)] backdrop-blur-md"
          />

          <div className="relative z-10 flex h-[min(92vh,860px)] w-full max-w-6xl flex-col overflow-hidden rounded-4xl border border-(--forest) bg-[linear-gradient(180deg,rgba(246,241,232,0.98)_0%,rgba(237,229,215,0.96)_100%)] shadow-[0_40px_120px_rgba(23,53,45,0.24)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(239,200,65,0.36),transparent_58%)]" />

            <div className="relative flex items-center justify-between border-b border-(--border) bg-(--card-frosted) px-5 py-4 text-(--forest)">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
                  {t.mentor.modalEyebrow}
                </p>
                <p className="mt-1 font-display text-3xl text-(--forest)">
                  {t.mentor.modalTitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  void requestMentorClose();
                }}
                className="rounded-full border border-(--forest) bg-(--mustard) px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
              >
                {t.mentor.close}
              </button>
            </div>

            <div className="relative min-h-0 flex-1 bg-transparent">
              <Mentor
                ref={mentorRef}
                autoStart={true}
                onDismiss={() => setIsMentorOpen(false)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
    </PasswordGate>
  );
}
