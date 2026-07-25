"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Bot,
  Cpu,
  Database,
  Sparkles,
  Trophy,
} from "lucide-react";

const roadmap = [
  {
    icon: Brain,
    title: "Learn Fundamentals",
    description:
      "Build a strong foundation in Python, mathematics, statistics, data structures, and problem-solving.",
  },
  {
    icon: Database,
    title: "Work with Data",
    description:
      "Master SQL, data preprocessing, visualization, feature engineering, and exploratory data analysis.",
  },
  {
    icon: Bot,
    title: "Build AI Models",
    description:
      "Learn Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI through real projects.",
  },
  {
    icon: Cpu,
    title: "Deploy AI Systems",
    description:
      "Deploy AI applications using FastAPI, Docker, Cloud, Vector Databases, and modern MLOps workflows.",
  },
];

const technologies = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "OpenAI",
  "LangChain",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "Docker",
  "AWS",
  "FastAPI",
  "MongoDB",
];

export default function AIJourney() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            <Sparkles className="h-4 w-4" />
            AI Learning Roadmap
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Your Journey to Becoming an
            <span className="text-cyan-400"> AI Engineer</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Follow a structured roadmap from programming fundamentals to
            deploying production-ready Artificial Intelligence
            applications used by modern companies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-cyan-500/30 lg:block" />

          <div className="space-y-10">
            {roadmap.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group relative flex flex-col gap-6 rounded-3xl border border-gray-800 bg-gray-900/40 p-8 transition-all duration-300 hover:border-cyan-500 hover:bg-gray-900 lg:flex-row lg:items-center"
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:absolute lg:-left-3 lg:flex">
                    <div className="h-6 w-6 rounded-full border-4 border-black bg-cyan-400" />
                  </div>

                  {/* Step Number */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-2xl font-bold text-black">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-24 rounded-3xl border border-gray-800 bg-gray-900/40 p-10">
          <h3 className="text-center text-3xl font-bold">
            Technologies You'll Master
          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-300 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Career Banner */}
        <div className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 p-10">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 p-3">
                <Trophy className="h-8 w-8 text-cyan-400" />
              </div>

              <h3 className="text-3xl font-bold">
                Become an Industry-Ready AI Engineer
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Build an impressive portfolio, solve real-world AI
                problems, receive mentorship from experienced engineers,
                and prepare for internships and full-time opportunities.
              </p>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}