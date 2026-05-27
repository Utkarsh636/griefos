import Tesseract from "tesseract.js";

export async function extractTextFromImage(file: File) {
  const result = await Tesseract.recognize(file, "eng");
  return result.data.text;
}