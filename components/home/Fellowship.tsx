"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Users,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Real Industry Projects",
    description:
      "Work on production-ready applications and gain practical experience that strengthens your portfolio.",
  },
  {
    icon: Users,
    title: "1:1 Mentorship",
    description:
      "Learn directly from experienced software engineers and AI professionals through live mentorship sessions.",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Receive an industry-recognized certificate after successfully completing the fellowship.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description:
      "Attend weekend live sessions while completing assignments at your own pace.",
  },
];

const highlights = [
  "Live mentor sessions",
  "Hands-on capstone project",
  "Resume & LinkedIn review",
  "Mock interviews",
  "Internship opportunities",
  "Career guidance",
];

export default function Fellowship() {
  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            SineForge Fellowship
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Learn.
            <span className="text-cyan-400"> Build.</span>
            <br />
            Get Industry Ready.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            The SineForge Fellowship is an immersive learning program
            designed to help students and professionals gain practical
            experience through mentorship, real-world projects, and
            collaborative learning.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="rounded-3xl border border-gray-800 bg-gray-900/40 p-10">
            <h3 className="text-3xl font-bold">
              What You'll Get
            </h3>

            <div className="mt-10 space-y-6">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
                      <Icon className="h-7 w-7 text-cyan-400" />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold">
                        {item.title}
                      </h4>

                      <p className="mt-2 leading-7 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10">
            <h3 className="text-3xl font-bold">
              Fellowship Highlights
            </h3>

            <p className="mt-5 text-gray-400">
              Everything you need to become an
              industry-ready software engineer.
            </p>

            <div className="mt-10 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-400" />

                  <span className="text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-gray-700 bg-black/40 p-6">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <h4 className="text-3xl font-bold text-cyan-400">
                    12
                  </h4>
                  <p className="mt-2 text-gray-400">
                    Weeks
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-cyan-400">
                    100%
                  </h4>
                  <p className="mt-2 text-gray-400">
                    Practical
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-cyan-400">
                    Live
                  </h4>
                  <p className="mt-2 text-gray-400">
                    Mentorship
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-cyan-400">
                    Certificate
                  </h4>
                  <p className="mt-2 text-gray-400">
                    Completion
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/fellowship"
              className="mt-10 inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Apply for Fellowship
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl border border-gray-800 bg-gray-900/40 p-10 text-center">
          <h3 className="text-3xl font-bold">
            Become Part of the Next Generation of Innovators
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            Learn alongside ambitious developers, collaborate on
            impactful projects, receive expert mentorship, and
            accelerate your career with the SineForge Fellowship.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex items-center rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            Join Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}