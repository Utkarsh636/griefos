import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-white">Grief</span>
            <span className="text-amber-400">OS</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">

            <a
              href="#features"
              className="hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#jurisdiction"
              className="hover:text-white transition"
            >
              Jurisdiction
            </a>

            <a
              href="#trust"
              className="hover:text-white transition"
            >
              Trust
            </a>

          </nav>

          {/* CTA */}
          <Link
            href="/onboarding"
            className="rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-black hover:bg-amber-300 transition"
          >
            Generate Roadmap
          </Link>

        </div>
      </div>
    </header>
  );
}