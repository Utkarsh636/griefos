import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          How GriefOS Works
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">
              Upload Documents
            </h3>

            <p className="mt-4 text-slate-300">
              Upload death certificates and supporting documents.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">
              Generate Roadmap
            </h3>

            <p className="mt-4 text-slate-300">
              Receive a personalized recovery workflow.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">
              Take Action
            </h3>

            <p className="mt-4 text-slate-300">
              Track deadlines and access legal support.
            </p>
          </div>

        </div>

        <div className="mt-12">
          <Image
            src="/images/features/ocr-document-intelligence.png"
            alt="OCR"
            width={1400}
            height={700}
            className="rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}