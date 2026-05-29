import Image from "next/image";

export default function Jurisdiction() {
  return (
    <section className="py-24">
        <section id="jurisdiction" className="py-24"></section>
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-amber-400 font-medium">
              Jurisdiction Support
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Find legal assistance near you.
            </h2>

            <p className="mt-6 text-slate-300">
              Access district courts, DLSA support,
              maps, official resources and jurisdiction-specific guidance.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <p className="text-3xl font-bold text-amber-300">10+</p>
                <p className="text-slate-400">States</p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <p className="text-3xl font-bold text-amber-300">DLSA</p>
                <p className="text-slate-400">Support</p>
              </div>

            </div>
          </div>

          <Image
            src="/images/features/jurisdiction-support.png"
            alt="Jurisdiction Support"
            width={800}
            height={800}
            className="rounded-3xl"
          />

        </div>
      </div>
    </section>
  );
}