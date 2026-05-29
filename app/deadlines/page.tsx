const deadlines = [
  {
    title: "Obtain Death Certificate",
    priority: "Urgent",
    days: "Within 7 Days",
  },
  {
    title: "Notify Bank Accounts",
    priority: "High",
    days: "Within 30 Days",
  },
  {
    title: "Initiate EPF Claim",
    priority: "Medium",
    days: "Within 90 Days",
  },
  {
    title: "Review Insurance Policies",
    priority: "Medium",
    days: "Within 90 Days",
  },
];

export default function DeadlinesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold">
          Recovery Deadlines
        </h1>

        <p className="mt-4 text-slate-400">
          Stay on top of important actions and claim windows.
        </p>

        <div className="grid gap-6 mt-12">

          {deadlines.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex justify-between items-center">

                <div>
                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-slate-400 mt-2">
                    {item.days}
                  </p>
                </div>

                <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-300">
                  {item.priority}
                </span>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}