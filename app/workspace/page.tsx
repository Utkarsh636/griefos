import Link from "next/link";

const cards = [
  {
    title: "Generate Roadmap",
    href: "/onboarding",
    description: "Create a personalized recovery roadmap.",
  },
  {
    title: "Jurisdiction Support",
    href: "/jurisdiction",
    description: "Find courts and legal aid.",
  },
  {
    title: "Document Vault",
    href: "/vault",
    description: "Manage important documents.",
  },
  {
    title: "Deadlines",
    href: "/deadlines",
    description: "Track important tasks.",
  },
  {
    title: "Export PDF",
    href: "/export",
    description: "Download recovery kit.",
  },
];

export default function WorkspacePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold">
          GriefOS Workspace
        </h1>

        <p className="mt-4 text-slate-400">
          Manage every step of the recovery process from one place.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition"
            >
              <h2 className="text-2xl font-semibold">
                {card.title}
              </h2>

              <p className="mt-4 text-slate-400">
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}