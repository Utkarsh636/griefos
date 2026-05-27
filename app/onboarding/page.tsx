"use client";

import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/storage/app-store";

const assets = [
  { id: "bank", label: "Bank Accounts" },
  { id: "pf", label: "Provident Fund" },
  { id: "insurance", label: "Insurance" },
  { id: "property", label: "Property" },
] as const;

export default function OnboardingPage() {
  const router = useRouter();

  const {
    deceasedName,
    relationship,
    state,
    assets: selectedAssets,
    setDeceasedName,
    setRelationship,
    setState,
    toggleAsset,
  } = useAppStore();

  function continueFlow() {
    if (
      !deceasedName ||
      !relationship ||
      !state ||
      selectedAssets.length === 0
    ) {
      alert("Please complete all fields and select at least one asset.");
      return;
    }

    router.push("/roadmap");
  }

  return (
    <main className="min-h-screen px-6 py-12 flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
          GriefOS
        </p>

        <h1 className="mt-4 text-4xl font-semibold">
          Let us guide your next steps.
        </h1>

        <p className="mt-4 text-slate-300">
          Answer a few questions to generate your personalized recovery roadmap.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <label className="block mb-3 text-sm text-slate-300">
              Name of deceased person
            </label>

            <input
              value={deceasedName}
              onChange={(e) => setDeceasedName(e.target.value)}
              placeholder="e.g. Rajesh Kumar"
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"
            />
          </div>

          <div>
            <label className="block mb-3 text-sm text-slate-300">
              Relationship
            </label>

            <select
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white"
            >
              <option value="">Select relationship</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Spouse">Spouse</option>
              <option value="Sibling">Sibling</option>
            </select>
          </div>

          <div>
            <label className="block mb-3 text-sm text-slate-300">
              State
            </label>

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white"
            >
              <option value="">Select state</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>

          <div>
            <label className="block mb-4 text-sm text-slate-300">
              Select assets
            </label>

            <div className="grid grid-cols-2 gap-4">
              {assets.map((asset) => {
                const active = selectedAssets.includes(asset.id);

                return (
                  <button
                    key={asset.id}
                    type="button"
                    onClick={() => toggleAsset(asset.id)}
                    className={`rounded-2xl border px-5 py-5 text-left transition ${
                      active
                        ? "border-amber-400 bg-amber-400/10 text-white"
                        : "border-white/10 bg-slate-900 text-slate-300"
                    }`}
                  >
                    {asset.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={continueFlow}
            className="w-full rounded-2xl bg-amber-400 px-6 py-4 text-lg font-medium text-black hover:bg-amber-300"
          >
            Generate Recovery Roadmap
          </button>
        </div>
      </div>
    </main>
  );
}