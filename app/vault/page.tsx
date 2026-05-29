"use client";

import { useState } from "react";
import { extractTextFromImage } from "@/lib/ocr/extract-text";

export default function VaultPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleExtract() {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }

    try {
      setLoading(true);
      setStatus("Starting OCR...");
      setExtractedText("");

      const text = await extractTextFromImage(selectedFile);

setStatus("Analyzing with Gemini...");

const response = await fetch("/api/extract", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ocrText: text,
  }),
});
console.log("Calling Gemini...");

const aiResult = await response.json();

console.log("FETCH RESPONSE:", response);
console.log("AI RESULT:", aiResult);

const parsed = JSON.parse(aiResult.result);

localStorage.setItem(
  "latestExtraction",
  JSON.stringify(parsed)
);

setExtractedText(text);
setStatus("AI extraction complete.");
    } catch (error) {
      console.error(error);
      setStatus("OCR failed.");
      alert("OCR extraction failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen px-6 py-12 bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-400">
            The Vault
          </p>

          <h1 className="mt-4 text-5xl font-semibold">
            Extract document information
          </h1>

          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Upload a clean printed document image to extract readable text.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setSelectedFile(file);
              }
            }}
            className="block w-full rounded-xl border border-white/10 bg-slate-900 p-4"
          />

          <button
            type="button"
            onClick={handleExtract}
            disabled={loading}
            className="mt-6 rounded-2xl bg-amber-400 px-6 py-4 font-medium text-black hover:bg-amber-300 disabled:opacity-50"
          >
            {loading ? "Processing OCR..." : "Extract Document"}
          </button>

          {status && (
            <p className="mt-4 text-sm text-slate-300">
              {status}
            </p>
          )}
        </div>

        {extractedText && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">
              Extracted Text
            </h2>

            <pre className="mt-6 whitespace-pre-wrap text-slate-300 leading-relaxed">
              {extractedText}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}