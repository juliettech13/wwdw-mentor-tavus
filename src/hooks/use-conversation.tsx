"use client";

import { useState, useCallback } from "react";

type ConversationState = "idle" | "loading" | "active" | "ended" | "error";

interface UseConversationReturn {
  conversationUrl: string | null;
  state: ConversationState;
  error: string | null;
  startConversation: (context?: string) => Promise<void>;
  endConversation: () => void;
  resetConversation: () => void;
}

export function useConversation(): UseConversationReturn {
  const [conversationUrl, setConversationUrl] = useState<string | null>(null);
  const [state, setState] = useState<ConversationState>("idle");
  const [error, setError] = useState<string | null>(null);

  const startConversation = useCallback(async (context?: string) => {
    setState("loading");
    setError(null);

    try {
      const response = await fetch("/api/create-conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversational_context: context }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? `Request failed: ${response.status}`);
      }

      const data = (await response.json()) as { conversation_url: string };

      if (!data.conversation_url) {
        throw new Error("No conversation URL returned.");
      }

      setConversationUrl(data.conversation_url);
      setState("active");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setState("error");
    }
  }, []);

  const endConversation = useCallback(() => {
    setConversationUrl(null);
    setState("ended");
  }, []);

  const resetConversation = useCallback(() => {
    setConversationUrl(null);
    setState("idle");
    setError(null);
  }, []);

  return {
    conversationUrl,
    state,
    error,
    startConversation,
    endConversation,
    resetConversation,
  };
}
