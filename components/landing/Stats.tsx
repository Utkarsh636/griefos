export default function Stats() {
  const stats = [
    {
      value: "10+",
      label: "States Supported",
    },
    {
      value: "OCR",
      label: "Document Intelligence",
    },
    {
      value: "PDF",
      label: "Recovery Kit",
    },
    {
      value: "24/7",
      label: "Guided Recovery",
    },
  ];

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-amber-400">
                {stat.value}
              </h3>

              <p className="mt-2 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}