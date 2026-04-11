"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CVIProvider } from "@/components/cvi/components/cvi-provider";
import { Conversation } from "@/components/cvi/components/conversation";
import { useConversation } from "@/hooks/use-conversation";
import { mentorPrompts } from "@/lib/constants/mentor-prompts";

type MentorVariant = "page" | "modal";

function PageShell({
  children,
  eyebrow = "AI Investing Mentor",
  title = "Ask Gloria anything.",
  copy = "Course questions, investing concepts, portfolio confusion, resource scavenger hunts. She can handle it.",
}: {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <div className="min-h-screen bg-(--card)">
      <div className="absolute inset-x-0 top-0 -z-10 h-152 bg-[radial-gradient(circle_at_top,rgba(239,200,65,0.44),transparent_48%)]" />

      <div className="w-full border-b border-(--forest) bg-(--lilac-bar)">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-9 text-sm uppercase tracking-[0.24em] text-white sm:px-8 lg:px-10">
          <h4>Wealthy Women Don&apos;t Wait</h4>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
          >
            Back To Hub
          </Link>
        </div>
      </div>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
              {eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-6xl leading-[0.92] tracking-[-0.04em] text-(--forest) sm:text-7xl lg:text-[6rem]">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-(--ink-soft)">
              {copy}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem] overflow-hidden rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.72)] p-3 shadow-[0_25px_60px_rgba(23,53,45,0.12)]">
            <div className="mb-3 flex items-center gap-3 border border-(--forest) bg-white/70 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-(--forest)">
              <span className="h-4 w-4 bg-(--rose)" />
              <span>Face-To-Face Mentor</span>
              <span className="flex-1 border-t border-(--forest)" />
              <span className="grid h-5 w-5 place-items-center border border-(--forest) text-[10px]">
                +
              </span>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden border border-(--forest) bg-(--paper)">
              <Image
                src="/images/gloria.webp"
                alt="Gloria, the AI mentor"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {children}
      </section>
    </div>
  );
}

function WelcomeScreen({
  isLoading,
  onStart,
}: {
  isLoading: boolean;
  onStart: () => void;
}) {
  return (
    <PageShell
      eyebrow="Mentor Console"
      title="Gloria is ready when you are."
      copy="She can help with concepts from class, point students to the right resource, and talk through investing decisions without sounding like a finance bro in a fleece vest."
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.84)] p-6 shadow-[0_25px_70px_rgba(23,53,45,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
            Start Here
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={onStart}
              disabled={isLoading}
              className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep) disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Connecting…" : "Talk To Gloria"}
            </button>
            <span className="text-sm leading-7 text-(--ink-soft)">
              Live Tavus conversation, straight from the course hub.
            </span>
          </div>
        </div>

        <div className="grid gap-3">
          {mentorPrompts.map((prompt) => (
            <div
              key={prompt}
              className="rounded-2xl border border-(--border) bg-white/80 px-4 py-4 text-sm leading-7 text-(--ink)"
            >
              {prompt}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function ActiveSession({
  url,
  onLeave,
  frameClassName,
  showHeader = true,
  variant = "page",
}: {
  url: string;
  onLeave: () => void;
  frameClassName?: string;
  showHeader?: boolean;
  variant?: MentorVariant;
}) {
  if (variant === "page") {
    return (
      <PageShell
        eyebrow="Live Conversation"
        title="Face-to-face with Gloria."
        copy="Ask the awkward question, the beginner question, the portfolio question, or the 'wait what did she mean in class?' question."
      >
        <div className="rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.84)] p-4 shadow-[0_25px_70px_rgba(23,53,45,0.08)]">
          <div className="mb-4 flex items-center gap-3 border border-(--forest) bg-white/70 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-(--forest)">
            <span className="h-4 w-4 bg-(--rose)" />
            <span>Face-To-Face Video</span>
            <span className="flex-1 border-t border-(--forest)" />
            <button
              type="button"
              onClick={onLeave}
              className="grid h-7 w-7 place-items-center border border-(--forest) bg-white text-base leading-none"
            >
              ×
            </button>
          </div>

          <div
            className={`overflow-hidden rounded-[1.5rem] border border-(--forest) bg-slate-950 ${frameClassName ?? ""}`}
          >
            <Conversation conversationUrl={url} onLeave={onLeave} />
          </div>
        </div>
      </PageShell>
    );
  }

  return (
    <div className="flex min-h-full flex-col bg-transparent">
      {showHeader ? (
        <header className="flex items-center gap-3 border-b border-(--border) bg-[rgba(255,251,244,0.92)] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-(--forest) bg-(--mustard) text-sm text-(--forest)">
            ☏
          </div>
          <span className="text-sm font-semibold text-(--forest)">
            Gloria — WWDW Mentor
          </span>
        </header>
      ) : null}

      <main className="flex flex-1 items-center justify-center p-4 md:p-5">
        <div
          className={`w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-(--forest) bg-slate-950 shadow-[0_25px_70px_rgba(23,53,45,0.18)] ${frameClassName ?? ""}`}
        >
          <Conversation conversationUrl={url} onLeave={onLeave} />
        </div>
      </main>
    </div>
  );
}

function EndScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <PageShell
      eyebrow="Session Finished"
      title="Conversation complete."
      copy="Gloria is still around if you want another round. Go ask the follow-up instead of pretending you totally got it the first time."
    >
      <div className="rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.84)] p-8 text-center shadow-[0_25px_70px_rgba(23,53,45,0.08)]">
        <p className="mx-auto max-w-xl text-lg leading-8 text-(--ink-soft)">
          Come back any time with more questions about the curriculum, resources,
          or your investing decisions.
        </p>
        <button
          onClick={onRestart}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
        >
          Start Another Conversation
        </button>
      </div>
    </PageShell>
  );
}

function ErrorScreen({
  message,
  onRetry,
  variant,
}: {
  message: string;
  onRetry: () => void;
  variant: MentorVariant;
}) {
  if (variant === "modal") {
    return (
      <div className="flex min-h-full flex-col items-center justify-center bg-transparent px-6 text-center">
        <div className="max-w-xl rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.86)] p-8 shadow-[0_25px_70px_rgba(23,53,45,0.12)]">
          <p className="mb-2 text-lg font-semibold text-(--rose-deep)">
            Something went wrong
          </p>
          <p className="mb-8 max-w-sm text-sm text-(--ink-soft)">{message}</p>
          <button
            onClick={onRetry}
            className="rounded-full border border-(--forest) bg-(--mustard) px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <PageShell
      eyebrow="Connection Error"
      title="Gloria fumbled the entrance."
      copy="The mentor session did not spin up correctly. Try again and Tavus should sort itself out."
    >
      <div className="rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.84)] p-8 text-center shadow-[0_25px_70px_rgba(23,53,45,0.08)]">
        <p className="mx-auto max-w-xl text-base leading-8 text-(--ink-soft)">
          {message}
        </p>
        <button
          onClick={onRetry}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--mustard) px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep)"
        >
          Try Again
        </button>
      </div>
    </PageShell>
  );
}

export function Mentor({
  autoStart = false,
  variant = "page",
  onDismiss,
}: {
  autoStart?: boolean;
  variant?: MentorVariant;
  onDismiss?: () => void;
}) {
  const {
    conversationUrl,
    state,
    error,
    startConversation,
    endConversation,
    resetConversation,
  } = useConversation();
  const didAutoStart = useRef(false);

  useEffect(() => {
    if (!autoStart || didAutoStart.current || state !== "idle") {
      return;
    }

    didAutoStart.current = true;
    void startConversation();
  }, [autoStart, startConversation, state]);

  const leaveConversation = () => {
    endConversation();
    if (variant === "modal") {
      onDismiss?.();
    }
  };

  const retryConversation = () => {
    void startConversation();
  };

  return (
    <CVIProvider>
      {state === "idle" && variant === "page" && (
        <WelcomeScreen isLoading={false} onStart={() => startConversation()} />
      )}
      {state === "loading" && variant === "page" && (
        <WelcomeScreen isLoading={true} onStart={() => startConversation()} />
      )}
      {state === "loading" && variant === "modal" && (
        <div className="flex min-h-full flex-col items-center justify-center bg-transparent px-6 py-10 text-center">
          <div className="max-w-xl rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.86)] p-8 shadow-[0_25px_70px_rgba(23,53,45,0.12)]">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-(--forest) bg-(--mustard) text-3xl text-(--forest)">
              ☏
            </div>
            <p className="font-display text-4xl leading-none text-(--forest)">
              Calling your mentor…
            </p>
            <p className="mx-auto mt-3 max-w-sm text-(--ink-soft)">
              Give Tavus a second to put herself together.
            </p>
          </div>
        </div>
      )}
      {state === "active" && conversationUrl && (
        <ActiveSession
          url={conversationUrl}
          onLeave={leaveConversation}
          frameClassName={variant === "modal" ? "max-w-none" : undefined}
          showHeader={variant !== "modal"}
          variant={variant}
        />
      )}
      {state === "ended" && variant === "page" && (
        <EndScreen onRestart={resetConversation} />
      )}
      {state === "error" && (
        <ErrorScreen
          message={error ?? "Unknown error"}
          onRetry={retryConversation}
          variant={variant}
        />
      )}
    </CVIProvider>
  );
}
