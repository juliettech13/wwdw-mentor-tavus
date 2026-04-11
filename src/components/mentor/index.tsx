"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { CVIProvider } from "@/components/cvi/components/cvi-provider";
import { Conversation } from "@/components/cvi/components/conversation";
import { useConversation } from "@/hooks/use-conversation";

export interface MentorHandle {
  requestClose: () => Promise<boolean>;
}

interface MentorProps {
  autoStart?: boolean;
  onDismiss?: () => void;
}

function StatusScreen({
  title,
  copy,
  actionLabel,
  onAction,
  isDisabled = false,
}: {
  title: string;
  copy: string;
  actionLabel?: string;
  onAction?: () => void;
  isDisabled?: boolean;
}) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-transparent px-6 py-10 text-center">
      <div className="max-w-xl rounded-[2rem] border border-(--forest) bg-[rgba(255,251,244,0.86)] p-8 shadow-[0_25px_70px_rgba(23,53,45,0.12)]">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-(--forest) bg-(--mustard) text-3xl text-(--forest)">
          ☏
        </div>
        <p className="font-display text-4xl leading-none text-(--forest)">
          {title}
        </p>
        <p className="mx-auto mt-3 max-w-sm text-(--ink-soft)">{copy}</p>
        {actionLabel && onAction ? (
          <button
            type="button"
            onClick={onAction}
            disabled={isDisabled}
            className="mt-6 rounded-full border border-(--forest) bg-(--mustard) px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep) disabled:cursor-not-allowed disabled:opacity-60"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}

function ActiveSession({
  url,
  onLeave,
  frameClassName,
}: {
  url: string;
  onLeave: () => Promise<void>;
  frameClassName?: string;
}) {
  return (
    <div className="flex min-h-full flex-col bg-transparent">
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

function ErrorScreen({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <StatusScreen
      title="Something went wrong"
      copy={message}
      actionLabel="Try again"
      onAction={onRetry}
    />
  );
}

export const Mentor = forwardRef<MentorHandle, MentorProps>(({
  autoStart = false,
  onDismiss,
}, ref) => {
  const {
    conversationUrl,
    state,
    error,
    startConversation,
    endConversation,
  } = useConversation();
  const didAutoStart = useRef(false);

  useEffect(() => {
    if (!autoStart || didAutoStart.current || state !== "idle") {
      return;
    }

    didAutoStart.current = true;
    void startConversation();
  }, [autoStart, startConversation, state]);

  const requestClose = useCallback(async () => {
    if (state === "active" || state === "loading") {
      const didEnd = await endConversation();

      if (didEnd) {
        onDismiss?.();
      }

      return didEnd;
    }

    onDismiss?.();
    return true;
  }, [endConversation, onDismiss, state]);

  const leaveConversation = async () => {
    await requestClose();
  };

  const retryConversation = () => {
    void startConversation();
  };

  useImperativeHandle(
    ref,
    () => ({
      requestClose,
    }),
    [requestClose],
  );

  return (
    <CVIProvider>
      {state === "idle" && (
        <StatusScreen
          title={autoStart ? "Opening Gloria…" : "Gloria is ready."}
          copy="Start a live conversation with Gloria when you're ready."
          actionLabel="Start conversation"
          onAction={retryConversation}
        />
      )}
      {state === "loading" && (
        <StatusScreen
          title="Calling your mentor…"
          copy="Give Gloria a second to put herself together."
          actionLabel="Starting…"
          onAction={retryConversation}
          isDisabled={true}
        />
      )}
      {state === "ending" && (
        <StatusScreen
          title="Closing Gloria…"
          copy="Ending your Tavus conversation."
          actionLabel="Closing…"
          isDisabled={true}
        />
      )}
      {state === "active" && conversationUrl && (
        <ActiveSession
          url={conversationUrl}
          onLeave={leaveConversation}
          frameClassName="max-w-none"
        />
      )}
      {state === "ended" && (
        <StatusScreen
          title="Conversation complete."
          copy="You can start another Tavus session any time."
          actionLabel="Start again"
          onAction={retryConversation}
        />
      )}
      {state === "error" && (
        <ErrorScreen
          message={error ?? "Unknown error"}
          onRetry={retryConversation}
        />
      )}
    </CVIProvider>
  );
});

Mentor.displayName = "Mentor";
