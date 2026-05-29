"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "Generate Roadmap",
    href: "/onboarding",
    description:
      "Create a personalized legal and recovery roadmap using AI guidance.",
    featured: true,
    badge: "AI Powered",
  },
  {
    title: "Jurisdiction Support",
    href: "/jurisdiction",
    description:
      "Find DLSA support, district courts and legal resources.",
  },
  {
    title: "Document Vault",
    href: "/vault",
    description:
      "Store and organize important recovery documents.",
  },
  {
    title: "Deadlines",
    href: "/deadlines",
    description:
      "Track important actions and claim windows.",
  },
  {
    title: "Export PDF",
    href: "/export",
    description:
      "Download your recovery kit and roadmap.",
  },
];

export default function WorkspacePage() {
  const [extraction, setExtraction] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("latestExtraction");
    if (saved) {
      try {
        setExtraction(JSON.parse(saved));
      } catch (err) {
        console.error("Invalid extraction data", err);
      }
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-slate-950 text-white px-6 py-16 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/backgrounds/workspace-dashboard.png')",
        }}
      />

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/10 blur-[180px]" />
      <div className="absolute right-0 top-[400px] w-[600px] h-[600px] bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HERO CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 mb-12">
          <h1 className="text-5xl font-bold">
            GriefOS Workspace
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-3xl">
            Manage recovery roadmaps, legal documentation,
            jurisdiction support, deadlines and AI-powered
            guidance from one unified workspace.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300">
              OCR Ready ✓
            </span>
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300">
              Roadmap Ready ✓
            </span>
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300">
              Jurisdiction Ready ✓
            </span>
            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300">
              PDF Export Ready ✓
            </span>
            <span className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-300">
              Gemini Ready
            </span>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-3xl font-bold text-amber-400">10+</p>
            <p className="text-slate-400">States Supported</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-3xl font-bold text-amber-400">OCR</p>
            <p className="text-slate-400">Document Intelligence</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-3xl font-bold text-amber-400">PDF</p>
            <p className="text-slate-400">Recovery Kit</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <p className="text-3xl font-bold text-amber-400">AI</p>
            <p className="text-slate-400">Roadmap Engine</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">AI Activity</h2>

        {/* RECENT AI EXTRACTION — dynamic */}
        <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-r from-amber-500/10 to-transparent backdrop-blur-xl p-8 mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Recent AI Extraction</h2>
            <span className="px-4 py-2 rounded-full bg-amber-400/20 text-amber-300">
              AI Processed
            </span>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div>
              <p className="text-slate-400">Document</p>
              <p className="font-semibold">
                {extraction?.documentType || "No document"}
              </p>
            </div>
            <div>
              <p className="text-slate-400">Name</p>
              <p className="font-semibold">
                {extraction?.personName || "Not Available"}
              </p>
            </div>
            <div>
              <p className="text-slate-400">State</p>
              <p className="font-semibold">
                {extraction?.state || "Not Available"}
              </p>
            </div>
            <div>
              <p className="text-slate-400">District</p>
              <p className="font-semibold">
                {extraction?.district || "Not Available"}
              </p>
            </div>
          </div>

          {extraction?.dateOfDeath && (
            <div className="mt-8">
              <p className="text-slate-400">Date Of Death</p>
              <p className="font-semibold">{extraction.dateOfDeath}</p>
            </div>
          )}

          {extraction?.importantActions?.length > 0 && (
            <div className="mt-8">
              <p className="text-slate-400 mb-3">AI Detected Actions</p>
              <ul className="space-y-2">
                {extraction.importantActions.map(
                  (action: string, index: number) => (
                    <li key={index}>✓ {action}</li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>

        {/* QUICK ACTIONS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/onboarding"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-xl font-bold">📄 Upload Document</h3>
          </Link>
          <Link
            href="/onboarding"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:bg-white/10"
          >
            <h3 className="text-xl font-bold">🧠 Generate Roadmap</h3>
          </Link>
          <Link
            href="/jurisdiction"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:bg-white/10"
          >
            <h3 className="text-xl font-bold">⚖️ Find Jurisdiction</h3>
          </Link>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition ${
                card.featured ? "md:col-span-2" : ""
              }`}
            >
              {"badge" in card && card.badge && (
                <span className="inline-block mb-4 rounded-full bg-amber-400/20 text-amber-300 px-3 py-1 text-xs">
                  {card.badge}
                </span>
              )}
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="mt-4 text-slate-400">{card.description}</p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}