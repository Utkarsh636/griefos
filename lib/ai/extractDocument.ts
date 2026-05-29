import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function extractDocumentInfo(
  ocrText: string
) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
Extract information from this OCR text.

Return ONLY valid JSON.

{
  "name": "",
  "dateOfDeath": "",
  "state": "",
  "district": "",
  "documentType": ""
}

OCR TEXT:
${ocrText}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}