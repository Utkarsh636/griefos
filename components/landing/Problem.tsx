import Image from "next/image";

export default function Problem() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="/images/landing/paperwork-chaos.png"
            alt="Paperwork Chaos"
            width={700}
            height={700}
            className="rounded-3xl"
          />

          <div>
            <p className="text-amber-400 font-medium">
              The Problem
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Families face dozens of disconnected processes.
            </h2>

            <div className="mt-8 space-y-4 text-slate-300">
              <p>✓ Bank Account Claims</p>
              <p>✓ Insurance Settlement</p>
              <p>✓ EPF & Pension Recovery</p>
              <p>✓ Property Succession</p>
              <p>✓ Legal Documentation</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}