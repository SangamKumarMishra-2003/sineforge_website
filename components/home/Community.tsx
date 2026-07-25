"use client";

import Link from "next/link";
import {
  ArrowRight,
  Users,
  MessageSquare,
  Calendar,
  Trophy,
  Globe,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const communityFeatures = [
  {
    icon: MessageSquare,
    title: "24×7 Discussion",
    description:
      "Ask questions, share knowledge, and collaborate with learners and mentors anytime.",
  },
  {
    icon: Calendar,
    title: "Live Events",
    description:
      "Participate in coding sessions, webinars, hackathons, workshops, and AMA sessions.",
  },
  {
    icon: Trophy,
    title: "Challenges",
    description:
      "Solve weekly coding challenges, AI competitions, and cybersecurity CTF events.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Connect with developers, engineers, founders, and students from around the world.",
  },
];

const perks = [
  "Private Discord Community",
  "Weekly Live Mentorship",
  "Hackathons & Coding Contests",
  "Open Source Collaboration",
  "Career & Interview Guidance",
  "Networking Opportunities",
];

export default function Community() {
  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            <Sparkles className="h-4 w-4" />
            SineForge Community
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Learn Better
            <span className="text-cyan-400"> Together</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Join a thriving community of students, developers, AI engineers,
            cybersecurity enthusiasts, and industry mentors who help each
            other grow every day.
          </p>
        </div>

        {/* Main Section */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-6">
            {communityFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-gray-800 bg-gray-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10">
            <div className="inline-flex rounded-2xl bg-cyan-500/10 p-4">
              <Users className="h-10 w-10 text-cyan-400" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Why Join Our Community?
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Learning becomes more effective when you're surrounded by
              passionate people. Collaborate on projects, receive feedback,
              participate in discussions, and grow your professional network.
            </p>

            <div className="mt-10 space-y-4">
              {perks.map((perk) => (
                <div
                  key={perk}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-400" />

                  <span className="text-gray-300">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/community"
              className="mt-10 inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Join Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-24 grid gap-8 md:grid-cols-4">
          <div className="rounded-3xl border border-gray-800 bg-gray-900/40 p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">15K+</h3>
            <p className="mt-3 text-gray-400">Community Members</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900/40 p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">250+</h3>
            <p className="mt-3 text-gray-400">Live Sessions</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900/40 p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
            <p className="mt-3 text-gray-400">Expert Mentors</p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900/40 p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">100+</h3>
            <p className="mt-3 text-gray-400">Events Every Year</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 p-12 text-center">
          <h3 className="text-4xl font-bold">
            Become Part of the SineForge Network
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you're a beginner or an experienced professional,
            our community provides mentorship, collaboration, networking,
            and continuous learning opportunities to help you succeed.
          </p>

          <Link
            href="/signup"
            className="mt-10 inline-flex items-center rounded-xl bg-cyan-500 px-10 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}