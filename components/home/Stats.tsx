"use client";

import { Award, Users, BookOpen, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Learners",
    description:
      "Students and professionals learning with SineForge.",
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Industry Courses",
    description:
      "Comprehensive courses covering modern technologies.",
  },
  {
    icon: Briefcase,
    value: "100+",
    label: "Real Projects",
    description:
      "Hands-on projects to build your professional portfolio.",
  },
  {
    icon: Award,
    value: "25+",
    label: "Expert Mentors",
    description:
      "Experienced engineers guiding your learning journey.",
  },
];

export default function Stats() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Empowering Future
            <span className="text-cyan-400"> Tech Professionals</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our growing community continues to build successful careers
            through practical learning, expert mentorship, and real-world
            experience.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-gray-800 bg-gray-900/30 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:bg-gray-900/60"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500">
                  <Icon className="h-8 w-8 text-cyan-400 group-hover:text-black" />
                </div>

                <h3 className="mt-8 text-5xl font-bold text-cyan-400">
                  {item.value}
                </h3>

                <h4 className="mt-4 text-xl font-semibold">
                  {item.label}
                </h4>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">
                Ready to Start Your Tech Journey?
              </h3>

              <p className="mt-4 text-gray-400">
                Join thousands of learners building industry-ready skills in
                Artificial Intelligence, Full Stack Development, Cyber
                Security, Cloud Computing, and more.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="text-4xl font-bold text-cyan-400">
                  98%
                </h4>
                <p className="mt-2 text-gray-400">
                  Completion Rate
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-cyan-400">
                  4.9★
                </h4>
                <p className="mt-2 text-gray-400">
                  Student Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}