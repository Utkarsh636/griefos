import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { ocrText } = await req.json();

    const prompt = `
Analyze this OCR text and extract structured information.

Return ONLY valid JSON.

{
  "documentType":"",
  "personName":"",
  "dateOfDeath":"",
  "state":"",
  "district":"",
  "importantActions":[]
}

OCR TEXT:
${ocrText}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You extract information from OCR documents. Return ONLY valid JSON. No markdown. No explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0,
    });

    let result =
  completion.choices[0]?.message?.content ?? "{}";

result = result
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

    return Response.json({
      result,
    });
  } catch (error) {
    console.error("GROQ ERROR:", error);

    return Response.json(
      {
        error: "Groq extraction failed",
      },
      {
        status: 500,
      }
    );
  }
}