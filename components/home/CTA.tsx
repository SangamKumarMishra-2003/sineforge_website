"use client";

import Link from "next/link";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-10 md:p-16">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              <Sparkles className="h-4 w-4" />
              Start Your Learning Journey Today
            </span>

            {/* Heading */}
            <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
              Transform Your Career
              <br />
              With
              <span className="text-cyan-400"> SineForge</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Learn from industry experts, build real-world projects,
              earn certifications, join an active developer community,
              and prepare for internships and high-paying technology
              careers.
            </p>

            {/* Features */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {[
                "Live Mentorship",
                "Hands-on Projects",
                "Industry Certificates",
                "Career Guidance",
                "Community Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-700 bg-black/40 px-5 py-3 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Started Free
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center rounded-xl border border-gray-700 px-8 py-4 font-semibold transition hover:border-cyan-500 hover:text-cyan-400"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Bottom Stats */}
            <div className="mt-16 grid gap-8 border-t border-gray-800 pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  10K+
                </h3>
                <p className="mt-2 text-gray-400">
                  Active Learners
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  50+
                </h3>
                <p className="mt-2 text-gray-400">
                  Premium Courses
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  4.9★
                </h3>
                <p className="mt-2 text-gray-400">
                  Average Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
