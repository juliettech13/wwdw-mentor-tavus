import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.TAVUS_API_KEY;
  const replicaId = process.env.TAVUS_REPLICA_ID;
  const personaId = process.env.TAVUS_PERSONA_ID;

  if (!apiKey || !replicaId || !personaId) {
    console.error("Missing Tavus environment variables");
    return NextResponse.json(
      { error: "Server misconfiguration." },
      { status: 500 },
    );
  }

  const body = (await request.json().catch(() => ({}))) as {
    conversational_context?: string;
  };

  try {
    const tavusResponse = await fetch("https://tavusapi.com/v2/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        replica_id: replicaId,
        persona_id: personaId,
        // max_call_duration: 1800, // 30 minutes
        ...(body.conversational_context && {
          conversational_context: body.conversational_context,
        }),
      }),
    });

    if (!tavusResponse.ok) {
      const err = (await tavusResponse.json().catch(() => ({}))) as {
        message?: string;
      };

      console.error(
        "Tavus API error:",
        tavusResponse.status,
        JSON.stringify(err),
      );

      return NextResponse.json(
        { error: err.message ?? "Tavus API error" },
        { status: tavusResponse.status },
      );
    }

    const data = (await tavusResponse.json()) as { conversation_url: string };
    return NextResponse.json({ conversation_url: data.conversation_url });
  } catch (err) {
    console.error("Conversation creation failed:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
