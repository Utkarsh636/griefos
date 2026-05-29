import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="/images/landing/family-recovered.png"
            alt="Recovery Complete"
            width={800}
            height={800}
            className="rounded-3xl"
          />

          <div>

            <h2 className="text-4xl font-bold">
              Start your recovery journey with clarity.
            </h2>

            <p className="mt-6 text-slate-300">
              Generate a personalized roadmap and
              organize important documents in one place.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <Link
                href="/onboarding"
                className="rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-black"
              >
                Generate Roadmap
              </Link>

              <Link
                href="/workspace"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4"
              >
                Open Workspace
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}