import { jurisdictions } from "@/data/jurisdictions";
export default function JurisdictionPage() {
  const supportCenters = jurisdictions;


  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Jurisdiction Support
          </p>

          <h1 className="mt-4 text-5xl font-semibold">
            Find Legal Support Near You
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            Access district courts, legal aid services, and official support
            resources relevant to your recovery process.
          </p>
        </div>

        <div className="grid gap-6">
          {supportCenters.map((center) => (
            <div
              key={center.state}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-2xl font-semibold">{center.state}</h2>

              <div className="mt-4 space-y-2 text-slate-300">
                <p>⚖️ Court: {center.court}</p>
                <p>📍 DLSA: {center.dlsa}</p>
                <p>📞 Phone: {center.phone}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${center.phone}`}
                  className="rounded-xl bg-amber-400 px-5 py-3 font-medium text-black"
                >
                  Call DLSA
                </a>

                <a
                  href={center.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 px-5 py-3"
                >
                  Open Maps
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/roadmap"
            className="rounded-2xl bg-white/10 px-6 py-4 inline-block"
          >
            Back to Roadmap
          </a>
        </div>
      </div>
    </main>
  );
}