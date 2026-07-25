"use client";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "OpenAI",
  "Netflix",
  "Adobe",
  "Oracle",
];

export default function Companies() {
  return (
    <section className="border-y border-gray-800 bg-[#050505] py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">
            Trusted Technologies
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Learn Skills Used By
            <span className="text-cyan-400"> Top Companies</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Our curriculum is designed around technologies adopted by
            leading software companies and AI organizations worldwide.
          </p>
        </div>

        {/* Companies */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-24 items-center justify-center rounded-2xl border border-gray-800 bg-gray-900/30 transition-all duration-300 hover:border-cyan-500 hover:bg-gray-900"
            >
              <span className="text-lg font-bold text-gray-400 transition hover:text-white">
                {company}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              98%
            </h3>

            <p className="mt-3 text-gray-400">
              Student Satisfaction
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              500+
            </h3>

            <p className="mt-3 text-gray-400">
              Industry Sessions
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              24×7
            </h3>

            <p className="mt-3 text-gray-400">
              Community Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}