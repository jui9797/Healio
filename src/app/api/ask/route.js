import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 1) function schema
export const getMyCalendarDataByDateSchema = {
  name: "getMyCalendarDataByDate",
  description:
    "Get the list of meetings for a specific date from Google Calendar",
  parameters: {
    type: "object",
    properties: {
      date: {
        type: "string",
        description: "The date to get meetings for, in YYYY-MM-DD format",
      },
    },
    required: ["date"],
    additionalProperties: false,
  },
};

// 2) MCP tool caller
export async function callMcpTool(date) {
  const res = await fetch(`${process.env.MCP_SERVER_URL}/tool/getMyMeetings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`MCP tool error: ${res.status} ${text}`);
  }
  return res.json();
}

// 3) /ask handler (merged)
export async function POST(req) {
  try {
    const { question } = await req.json();
    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
      });
    }

    // First pass: let the model decide if it needs calendar tool
    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `
You are Healio AI, a healthcare assistant in the Healio app.
You can also fetch the user's Google Calendar when appropriate.

Responsibilities:
1. If the patient's disease is mild or primary level (e.g., common cold, mild fever, slight headache), suggest basic primary-level medicine.
2. If the disease seems beyond primary level but not life-threatening, do not suggest medicine; instead, recommend consulting a specialist doctor in the Healio app.
3. If the disease seems serious or critical (e.g., cancer, stroke, heart attack, severe infection), do not suggest medicine. Immediately advise urgent doctor consultation.
4. Keep responses short, clear, supportive. You are a guide only.
          `,
        },
        { role: "user", content: question },
      ],
      functions: [getMyCalendarDataByDateSchema],
      function_call: "auto",
      temperature: 0.2,
    });

    const choice = completion.choices[0];
    const msg = choice.message;

    // If calendar tool requested
    if (choice.finish_reason === "function_call" && msg.function_call) {
      const args = JSON.parse(msg.function_call.arguments || "{}");
      const date = args.date;

      // Call MCP tool
      const calendarData = await callMcpTool(date);

      // Second pass: include tool result in final answer
      const completion2 = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `
You are Healio AI, a healthcare assistant in the Healio app.
You can also fetch the user's Google Calendar when appropriate.
            `,
          },
          { role: "user", content: question },
          {
            role: "function",
            name: "getMyCalendarDataByDate",
            content: JSON.stringify(calendarData),
          },
        ],
        temperature: 0.2,
      });

      const answer = completion2.choices[0].message?.content || "";
      return new Response(JSON.stringify({ answer, data: calendarData }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Otherwise return direct medical/chat answer
    const answer = msg?.content || "";
    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Ask API error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
