"use client";

import {
  Brain,
  ShieldCheck,
  Code2,
  Database,
  Cloud,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Master Machine Learning, Deep Learning, LLMs, Computer Vision, NLP, and Generative AI through practical projects.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Build production-ready web applications using React, Next.js, Node.js, TypeScript, and modern backend technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Learn ethical hacking, penetration testing, digital forensics, network security, and secure software development.",
  },
  {
    icon: Database,
    title: "Data Science",
    description:
      "Work with Python, SQL, Power BI, Pandas, NumPy, and real-world datasets to extract meaningful insights.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploy scalable applications using Docker, Kubernetes, AWS, Azure, CI/CD pipelines, and cloud-native tools.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description:
      "Receive mentorship, interview preparation, resume reviews, internship support, and placement guidance.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Why Choose SineForge
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Learn the Skills That Shape the
            <span className="text-cyan-400"> Future</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            From AI to Cloud Computing, our programs are designed with
            industry experts to help you build practical experience and
            become job-ready.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-800 bg-gray-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-gray-900"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500">
                  <Icon className="h-8 w-8 text-cyan-400 group-hover:text-black" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-400">
                  {feature.description}
                </p>

                <Link
                  href="/courses"
                  className="mt-8 inline-flex items-center font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 p-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold">
                Build Real-World Experience
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-400">
                Every course includes hands-on projects, industry case studies,
                mentorship, certifications, and career guidance to help you
                confidently transition into the tech industry.
              </p>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}