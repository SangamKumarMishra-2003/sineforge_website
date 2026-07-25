"use client";

import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Replace with your API call
    console.log("Newsletter Email:", email);

    setEmail("");
  };

  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10">
          <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
                <Sparkles className="h-4 w-4" />
                Stay Updated
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Subscribe to the
                <span className="text-cyan-400"> SineForge Newsletter</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Get weekly updates on AI, Software Engineering,
                Cyber Security, Data Science, internships, fellowship
                programs, career tips, and the latest technology trends.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Weekly Tech Insights",
                  "Exclusive Learning Resources",
                  "Live Event Notifications",
                  "Career Opportunities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="rounded-3xl border border-gray-800 bg-black/40 p-8 backdrop-blur">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Mail className="h-8 w-8 text-cyan-400" />
              </div>

              <h3 className="text-2xl font-bold">
                Join 10,000+ Learners
              </h3>

              <p className="mt-3 text-gray-400">
                Subscribe now and never miss a new course,
                webinar, or career opportunity.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-gray-700 bg-gray-900 px-5 py-4 outline-none transition focus:border-cyan-500"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400"
                >
                  Subscribe Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                We respect your privacy. No spam. Unsubscribe at any
                time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              10K+
            </h3>
            <p className="mt-2 text-gray-400">
              Newsletter Subscribers
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              Every Week
            </h3>
            <p className="mt-2 text-gray-400">
              Curated Tech Content
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              100%
            </h3>
            <p className="mt-2 text-gray-400">
              Free to Subscribe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}