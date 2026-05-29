import Stats from "@/components/landing/Stats";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Jurisdiction from "@/components/landing/Jurisdiction";
import Trust from "@/components/landing/Trust";
import CTA from "@/components/landing/CTA";
import Impact from "@/components/landing/Impact";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-amber-500/10 blur-[180px]" />

      <div className="absolute right-0 top-[600px] w-[700px] h-[700px] bg-blue-500/10 blur-[200px]" />

      <div className="absolute left-[30%] top-[1400px] w-[500px] h-[500px] bg-purple-500/10 blur-[180px]" />

      <Navbar />

      <Hero />

      <Problem />
      <Impact />
      <HowItWorks />

      <div className="my-12 mx-auto w-full max-w-4xl px-6">
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 rounded-xl p-0.5">
          <div className="bg-slate-950 rounded-lg px-6 py-4 text-center">
            <p className="text-sm text-slate-300 tracking-wide">Trusted by founders · operators · builders</p>
            <h3 className="mt-1 text-2xl font-semibold">Built for high-growth teams</h3>
          </div>
        </div>
      </div>

      <Features />

      <Jurisdiction />

      <Stats />

      <Trust />

      <CTA />

    </main>
  );
}