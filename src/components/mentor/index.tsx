"use client";

import { CVIProvider } from "@/components/cvi/components/cvi-provider";
import { Conversation } from "@/components/cvi/components/conversation";
import { useConversation } from "@/hooks/use-conversation";

function WelcomeScreen({
  isLoading,
  onStart,
}: {
  isLoading: boolean;
  onStart: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <div className="mb-10 flex flex-col items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-3xl">
          💸
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Wealthy Women Don&apos;t Wait
        </h1>
        <p className="max-w-sm text-slate-400">
          Ask Valentina anything about investing — stocks, ETFs, angel
          investing, portfolio strategy, or just where to start.
        </p>
      </div>

      <button
        onClick={onStart}
        disabled={isLoading}
        className="rounded-xl bg-purple-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? "Connecting…" : "Talk to Valentina"}
      </button>

      <p className="mt-6 text-sm text-slate-600">
        Your AI investing mentor, available anytime.
      </p>
    </div>
  );
}

function ActiveSession({ url, onLeave }: { url: string; onLeave: () => void }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <header className="flex items-center gap-3 border-b border-slate-800 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm">
          💸
        </div>
        <span className="text-sm font-semibold text-white">
          Valentina — WWDW Mentor
        </span>
      </header>

      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl">
          <Conversation conversationUrl={url} onLeave={onLeave} />
        </div>
      </main>
    </div>
  );
}

function EndScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <p className="mb-2 text-2xl font-bold text-white">
        Great conversation! 🎉
      </p>
      <p className="mb-8 text-slate-400">
        Come back anytime with more questions.
      </p>
      <button
        onClick={onRestart}
        className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
      >
        Start a new session
      </button>
    </div>
  );
}

function ErrorScreen({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <p className="mb-2 text-lg font-semibold text-red-400">
        Something went wrong
      </p>
      <p className="mb-8 max-w-sm text-sm text-slate-400">{message}</p>
      <button
        onClick={onRetry}
        className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500"
      >
        Try again
      </button>
    </div>
  );
}

export function Mentor() {
  const {
    conversationUrl,
    state,
    error,
    startConversation,
    endConversation,
    resetConversation,
  } = useConversation();

  return (
    <CVIProvider>
      {state === "idle" && (
        <WelcomeScreen isLoading={false} onStart={() => startConversation()} />
      )}
      {state === "loading" && (
        <WelcomeScreen isLoading={true} onStart={() => startConversation()} />
      )}
      {state === "active" && conversationUrl && (
        <ActiveSession url={conversationUrl} onLeave={endConversation} />
      )}
      {state === "ended" && <EndScreen onRestart={resetConversation} />}
      {state === "error" && (
        <ErrorScreen
          message={error ?? "Unknown error"}
          onRetry={() => startConversation()}
        />
      )}
    </CVIProvider>
  );
}
