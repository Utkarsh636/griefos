export default function Features() {
  const features = [
    "AI Recovery Roadmaps",
    "OCR Document Intelligence",
    "PDF Recovery Kit",
    "Deadline Tracking",
    "Jurisdiction Support",
    "Document Vault",
  ];

  return (
    <section className="py-24">
    <section id="features" className="py-24"></section>
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Core Features
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold">
                {feature}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}