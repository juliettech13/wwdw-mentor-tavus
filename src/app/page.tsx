"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Mentor } from "@/components/mentor";

import { footerLinks } from "@/lib/constants/footer-links";
import { mentorPrompts } from "@/lib/constants/mentor-prompts";
import { sessions } from "@/lib/constants/sessions";
import { supportStack } from "@/lib/constants/support-stack";

export default function Page() {
  const [isMentorOpen, setIsMentorOpen] = useState(false);

  useEffect(() => {
    if (!isMentorOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMentorOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMentorOpen]);

  return (
    <main className="relative overflow-hidden bg-(--card)">
      <div className="absolute inset-x-0 top-0 -z-10 h-152 bg-[radial-gradient(circle_at_top,rgba(239,200,65,0.44),transparent_48%)]" />

      <div className="w-full border-b border-(--forest) bg-(--lilac-bar)">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-9 text-sm uppercase tracking-[0.24em] text-white sm:px-8 lg:px-10">
          <h4>Wealthy Women Don&apos;t Wait</h4>
          <button
            type="button"
            onClick={() => setIsMentorOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
          >
            Ask Anything
          </button>
        </div>
      </div>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div className="flex h-full flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="max-w-4xl font-display text-6xl leading-[0.92] tracking-[-0.04em] text-(--forest) sm:text-7xl lg:text-[6rem]">
                Hello Investor
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-(--ink-soft)">
                Welcome to the course hub for{" "}
                <span className="font-semibold text-(--forest)">
                  Wealthy Women Don&apos;t Wait
                </span>{" "}
                - curriculum, resources, and an AI mentor to
                answer any questions you have.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsMentorOpen(true)}
                className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--lilac-bar) text-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
              >
                Talk To Your AI Mentor
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-[22rem] justify-self-end overflow-hidden rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.72)] p-3 shadow-[0_25px_60px_rgba(23,53,45,0.12)]">
            <div className="mb-3 flex items-center gap-3 border border-(--forest) bg-white/70 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-(--forest)">
              <span className="h-4 w-4 bg-(--rose)" />
              <span>Hello Investor</span>
              <span className="flex-1 border-t border-(--forest)" />
              <span className="grid h-5 w-5 place-items-center border border-(--forest) text-[10px]">
                +
              </span>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden border border-(--forest) bg-(--paper)">
              <Image
                src="/images/real-estate.webp"
                alt="Real estate themed banner art"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-(--border) bg-(--mustard) px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-(--forest) lg:flex-row lg:items-center lg:justify-between">
          <p className="font-display text-3xl leading-tight sm:text-4xl">
            Don&apos;t wait until the next class. Ask anything to your AI mentor
          </p>
          <a
            href="https://luma.com/wealthy-women-v2"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-(--forest) bg-(--lilac-bar) text-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-[rgba(255,255,255,0.28)]"
          >
            Let&apos;s chat
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <aside className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.72)] p-3 shadow-[0_30px_80px_rgba(23,53,45,0.12)] backdrop-blur">
          <div className="mb-3 flex items-center gap-3 border border-(--forest) bg-white/70 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-(--forest)">
            <span className="h-4 w-4 bg-(--rose)" />
            <span>MEET GLORIA - YOUR AI MENTOR</span>
            <span className="flex-1 border-t border-(--forest)" />
            <span className="grid h-5 w-5 place-items-center border border-(--forest) text-[10px]">
              +
            </span>
          </div>

          <div className="relative overflow-hidden border border-(--forest) bg-(--paper)">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_40%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_100%)]" />
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/gloria.webp"
                alt="Gloria, the AI mentor"
                fill
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
                <span>Ask Me Anything</span>
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
      </section>

      <section
        id="curriculum"
        className="bg-(--paper-strong) px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
                Curriculum Calendar
              </p>
              <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
                What we&apos;ll learn
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {sessions.map((session) => (
              <article
                key={session.title}
                className="rounded-[1.75rem] border border-(--border) bg-[rgba(255,251,244,0.9)] p-5"
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

      <section className="bg-(--mustard) px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--forest)">
              Everything you need
            </p>
            <h2 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              Course Resources
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {supportStack.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-[rgba(24,62,53,0.18)] bg-[rgba(255,251,244,0.84)] p-5"
              >
                <h3 className="font-display text-3xl leading-tight text-(--forest)">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-(--ink)">
                  {item.copy}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-5 inline-flex rounded-full border border-(--forest) px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:bg-[rgba(24,62,53,0.08)]"
                  >
                    {item.label}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-(--forest) px-5 py-16 text-(--paper) sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
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
                Made with love by Juliettech
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

      {isMentorOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-8">
          <button
            type="button"
            aria-label="Close AI mentor"
            onClick={() => setIsMentorOpen(false)}
            className="absolute inset-0 bg-[rgba(93,103,108,0.56)] backdrop-blur-sm"
          />

          <div className="relative z-10 flex h-[min(92vh,860px)] w-full max-w-6xl flex-col overflow-hidden rounded-4xl border border-[rgba(255,255,255,0.18)] bg-slate-950 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/95 px-5 py-4 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Tavus Mentor
                </p>
                <p className="mt-1 font-display text-3xl text-(--paper)">
                  Ask the investing AI anything.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsMentorOpen(false)}
                className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:bg-slate-800"
              >
                Close
              </button>
            </div>

            <div className="min-h-0 flex-1">
              <Mentor
                autoStart={true}
                variant="modal"
                onDismiss={() => setIsMentorOpen(false)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
