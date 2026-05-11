"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Mentor, type MentorHandle } from "@/components/mentor";
import { QuizBanner } from "@/components/quiz/quiz-banner";
import { QuizShell } from "@/components/quiz/quiz-shell";
import { TutorialsModal } from "@/components/tutorials-modal";

import { locale } from "@/lib/i18n";
import { footerLinks } from "@/lib/constants/footer-links";
import { homework } from "@/lib/constants/homework";
import { sessions } from "@/lib/constants/sessions";
import { mentorPrompts } from "@/lib/constants/mentor-prompts";
import { supportStack } from "@/lib/constants/support-stack";

const t = locale.ui;

export default function Page() {
  const [isMentorOpen, setIsMentorOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);
  const mentorRef = useRef<MentorHandle>(null);

  const requestMentorClose = async () => {
    const didClose = await mentorRef.current?.requestClose();

    if (didClose ?? true) {
      setIsMentorOpen(false);
    }
  };

  useEffect(() => {
    if (!isMentorOpen && !isQuizOpen && !isTutorialsOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMentorOpen, isQuizOpen, isTutorialsOpen]);

  return (
    <main className="relative overflow-hidden bg-(--card)">
      <div className="absolute inset-x-0 top-0 -z-10 h-152 bg-[radial-gradient(circle_at_top,rgba(239,200,65,0.44),transparent_48%)]" />

      <div className="w-full border-b border-(--forest) bg-(--lilac-bar)">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-9 text-sm uppercase tracking-[0.24em] text-white sm:px-8 lg:px-10">
          <h4>{t.nav.title}</h4>
          <a
            href="https://lu.ma/wealthy-women-v2"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
          >
            {t.nav.calendarCta}
          </a>
        </div>
      </div>

      <section className="border-b border-(--forest) pb-16 pt-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div className="flex h-full flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="max-w-4xl font-display text-6xl leading-[0.92] tracking-[-0.04em] text-(--forest) sm:text-7xl lg:text-[6rem]">
                {t.hero.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-(--ink-soft)">
                {t.hero.descriptionPrefix}{" "}
                <span className="font-semibold text-(--forest)">
                  {t.hero.courseName}
                </span>{" "}
                {t.hero.descriptionSuffix}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://lu.ma/wealthy-women-v2"
                target="_blank"
                rel="noreferrer noopener"
                style={{ color: "white" }}
                className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--lilac-bar) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:brightness-90"
              >
                {t.hero.cta}
              </a>
            </div>
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

      <section
        id="curriculum"
        className="border-b border-(--forest) bg-(--paper-strong) py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
                {t.curriculum.eyebrow}
              </p>
              <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
                {t.curriculum.title}
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {sessions.map((session) => (
              <article
                key={session.title}
                className="rounded-[1.75rem] border border-(--border) bg-(--card-strong) p-5"
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

      <section className="border-b border-(--forest) bg-(--paper-soft) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3">
              </div>
              <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
                {t.homework.title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-(--ink-soft)">
                {t.homework.description}
              </p>
            </div>
          </div>

          <div className="my-8 border-t border-(--forest)" />

          <div className="overflow-hidden rounded-2xl border border-(--forest)">
            <div className="grid grid-cols-[1fr_2fr_2fr] bg-light-blue px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-(--forest)">
              <span>{t.homework.tableDate}</span>
              <span>{t.homework.tableClass}</span>
              <span>{t.homework.tableHomework}</span>
            </div>

            {homework.map((item, i) => (
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
                  <a
                    href={item.href}
                    className="mt-2 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-(--forest) underline underline-offset-4"
                  >
                    {t.homework.openAssignment}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-(--forest) bg-(--mustard) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--forest)">
              {t.resources.eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.resources.title}
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {supportStack.map((item) => (
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

      <QuizBanner onOpen={() => setIsQuizOpen(true)} />

      <section className="border-b border-(--forest) bg-(--paper-strong) py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <aside className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-4xl border border-(--forest) bg-(--card) p-3 shadow-[0_30px_80px_rgba(23,53,45,0.12)] backdrop-blur">
          <div className="mb-3 flex items-center gap-3 border border-(--forest) bg-white/70 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-(--forest)">
            <span className="h-4 w-4 bg-(--rose)" />
            <span>{t.mentor.badge}</span>
            <span className="flex-1 border-t border-(--forest)" />
            <span className="grid h-5 w-5 place-items-center border border-(--forest) text-[10px]">
              +
            </span>
          </div>

          <div className="relative overflow-hidden border border-(--forest) bg-(--paper)">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_40%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_100%)]" />
            <div className="relative aspect-video w-full">
              <Image
                src="/images/gloria.webp"
                alt="Gloria, the AI mentor"
                fill
                sizes="(min-width: 1024px) 80rem, 100vw"
                className="object-cover"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-6 flex justify-center px-5">
              <button
                type="button"
                onClick={() => setIsMentorOpen(true)}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-(--forest) bg-(--mustard) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
              >
                <span className="text-xl leading-none">☏</span>
                <span>{t.mentor.cta}</span>
              </button>
            </div>
          </div>

          <div className="mt-4 grid gap-3 text-sm leading-7 text-(--ink) lg:grid-cols-2">
            {mentorPrompts.map((prompt) => (
              <div
                key={prompt}
                className="rounded-2xl border border-(--border) bg-white/80 px-4 py-3"
              >
                {prompt}
              </div>
            ))}
          </div>
          </aside>
        </div>
      </section>

      <footer className="bg-(--forest) py-16 text-(--paper)">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="space-y-6">
            <Image
              src="/images/logo-small.webp"
              alt="Logo"
              width={72}
              height={72}
              className="h-14 w-auto"
            />

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                {t.footer.credit}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
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
      </footer>

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
  );
}
