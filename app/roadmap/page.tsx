"use client";

import { useAppStore } from "@/lib/storage/app-store";
import { generateRoadmap } from "@/lib/rules/workflow-engine";
import { exportRecoveryPdf } from "@/lib/pdf/export-pdf";

export default function RoadmapPage() {
  const { deceasedName, relationship, state, assets } = useAppStore();

  // Guard against missing values from the store to avoid runtime errors
  const displayRelationship = (relationship ?? "").toLowerCase();
  const displayState = state ?? "";

  const roadmap = generateRoadmap(assets ?? []);

  async function handleExport() {
    await exportRecoveryPdf({
      deceasedName,
      relationship,
      state,
      assets,
      roadmap,
    });
  }

  return (
    <main className="min-h-screen px-6 py-12 bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-sm text-amber-400">
            Personalized Recovery Plan
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-tight">
            Next steps after the loss of your{" "}
            <span className="text-amber-300">
              {displayRelationship}
            </span>
          </h1>

          <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-3xl">
            Based on the information provided for{" "}
            <span className="font-medium text-white">{deceasedName ?? ""}</span> in{" "}
            <span className="font-medium text-white">{displayState}</span>, here are
            the most important administrative and legal next steps.
          </p>
        </div>

        {/* EMPTY STATE */}
        {roadmap.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="text-2xl font-semibold">No roadmap generated</h2>

            <p className="mt-4 text-slate-300">
              Please return to onboarding and select at least one asset.
            </p>
          </div>
        )}

        {/* ROADMAP CARDS */}
        <div className="grid gap-6">
          {roadmap
            .filter((i): i is NonNullable<typeof i> => i != null)
            .map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl"
            >
              {/* TOP SECTION */}
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-2xl font-semibold">
                  {item.title}
                </h2>

                <span
                  className={`rounded-full px-5 py-2 text-sm font-medium ${
                    item.deadlineInfo.urgency === "high"
                      ? "bg-red-500/20 text-red-200 border border-red-500/20"
                      : item.deadlineInfo.urgency === "medium"
                      ? "bg-amber-500/20 text-amber-200 border border-amber-500/20"
                      : "bg-green-500/20 text-green-200 border border-green-500/20"
                  }`}
                >
                  {item.deadlineInfo.daysRemaining} days remaining
                </span>
              </div>

              {/* INFO */}
              <div className="mt-5 space-y-2">
                <p className="text-slate-400 text-sm">
                  Source: {item.source}
                </p>

                <p className="text-sm text-slate-300">
                  {item.deadlineInfo.label}
                </p>
              </div>

              {/* STEPS */}
              <div className="mt-8 space-y-4">
                {item.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="rounded-2xl border border-white/10 bg-slate-900 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-black font-semibold">
                        {stepIndex + 1}
                      </div>

                      <p className="text-slate-200 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="/vault"
            className="inline-block rounded-2xl bg-amber-400 px-6 py-4 font-medium text-black hover:bg-amber-300"
          >
            Continue to Document Vault
          </a>

          <button
            onClick={handleExport}
            className="rounded-2xl border border-white/10 px-6 py-4 font-medium hover:bg-white/5"
          >
            Export Recovery PDF
          </button>
        </div>
      </div>
    </main>
  );
}
