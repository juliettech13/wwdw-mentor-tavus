import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.TAVUS_API_KEY;

  if (!apiKey) {
    console.error("Missing Tavus API key");
    return NextResponse.json(
      { error: "Server misconfiguration." },
      { status: 500 },
    );
  }

  const body = (await request.json().catch(() => ({}))) as {
    conversation_id?: string;
  };
  const conversationId = body.conversation_id?.trim();

  if (!conversationId) {
    return NextResponse.json(
      { error: "conversation_id is required." },
      { status: 400 },
    );
  }

  try {
    const tavusResponse = await fetch(
      `https://tavusapi.com/v2/conversations/${encodeURIComponent(conversationId)}/end`,
      {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
        },
      },
    );

    if (!tavusResponse.ok) {
      const err = (await tavusResponse.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      console.error(
        "Tavus end conversation error:",
        tavusResponse.status,
        JSON.stringify(err),
      );

      return NextResponse.json(
        { error: err.error ?? err.message ?? "Tavus API error" },
        { status: tavusResponse.status },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Conversation end failed:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
