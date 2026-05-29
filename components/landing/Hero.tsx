import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
              Guidance when families need clarity most
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
              When families lose a loved one,
              <span className="block text-amber-300">
                they shouldn't lose inheritance to paperwork.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              GriefOS helps families navigate claims,
              legal procedures, deadlines, and documentation
              through AI-powered recovery roadmaps.
            </p>
            

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/onboarding"
                className="rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-black hover:bg-amber-300"
              >
                Generate Recovery Roadmap
              </Link>

              <Link
                href="/workspace"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl hover:bg-white/10"
              >
                Open Workspace
              </Link>
            </div>
          </div>

          <div>
            <Image
              src="/images/landing/hero-guidance.png"
              alt="GriefOS Hero"
              width={800}
              height={800}
              className="rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}