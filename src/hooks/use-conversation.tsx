"use client";

import { useState, useCallback } from "react";

type ConversationState =
  | "idle"
  | "loading"
  | "active"
  | "ending"
  | "ended"
  | "error";

interface UseConversationReturn {
  conversationId: string | null;
  conversationUrl: string | null;
  state: ConversationState;
  error: string | null;
  startConversation: (context?: string) => Promise<void>;
  endConversation: () => Promise<boolean>;
  resetConversation: () => void;
}

export function useConversation(): UseConversationReturn {
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [conversationUrl, setConversationUrl] = useState<string | null>(null);
  const [state, setState] = useState<ConversationState>("idle");
  const [error, setError] = useState<string | null>(null);

  const clearConversation = useCallback((nextState: ConversationState) => {
    setConversationId(null);
    setConversationUrl(null);
    setState(nextState);
  }, []);

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

      const data = (await response.json()) as {
        conversation_id: string;
        conversation_url: string;
      };

      if (!data.conversation_id || !data.conversation_url) {
        throw new Error("Incomplete conversation payload returned.");
      }

      setConversationId(data.conversation_id);
      setConversationUrl(data.conversation_url);
      setState("active");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setState("error");
    }
  }, []);

  const endConversation = useCallback(async () => {
    if (!conversationId) {
      clearConversation("ended");
      return true;
    }

    try {
      setState("ending");
      setConversationUrl(null);

      const response = await fetch("/api/end-conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversation_id: conversationId }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        const message = data.error ?? `Request failed: ${response.status}`;

        if (message === "Invalid conversation_id") {
          clearConversation("ended");
          return true;
        }

        throw new Error(message);
      }

      clearConversation("ended");
      return true;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to end the Tavus conversation.",
      );
      setState("error");
      return false;
    }
  }, [clearConversation, conversationId]);

  const resetConversation = useCallback(() => {
    clearConversation("idle");
    setError(null);
  }, [clearConversation]);

  return {
    conversationId,
    conversationUrl,
    state,
    error,
    startConversation,
    endConversation,
    resetConversation,
  };
}
