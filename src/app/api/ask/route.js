import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { question } = await req.json();

    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
      });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are Healio AI, a healthcare assistant in the Healio app.

Your responsibilities:
1. If the patient's disease is **mild or primary level** (e.g., common cold, mild fever, slight headache), suggest **basic primary-level medicine** for relief.
2. If the disease seems **beyond primary level** but not life-threatening, do not suggest medicine; instead, recommend consulting a **specialist doctor** available in the Healio app according to the disease category.
3. If the disease seems **serious or critical** (e.g., cancer, stroke, heart attack, severe infection), do not suggest any medicine. Immediately advise the patient to **consult a doctor urgently**.
4. Keep your responses short, clear, and supportive. You are a **guide only**, not a replacement for professional medical consultation.
      `,
        },
        { role: "user", content: question },
      ],
    });

    const answer = completion.choices[0].message.content;
    return new Response(JSON.stringify({ answer }), { status: 200 });
  } catch (error) {
    console.error("AI Error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
