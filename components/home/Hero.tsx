"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import HeroBackground from "./HeroBackground";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-24 text-white">
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge>
            <Sparkles className="mr-2 h-4 w-4" />
            Next Generation Learning Platform
          </Badge>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Master
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              AI{" "}
            </span>
            &
            <br />
            Modern Software Engineering
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            Learn Artificial Intelligence, Full Stack Development,
            Cyber Security, Data Science, Cloud Computing and modern
            technologies through industry-led courses, live mentorship,
            and real-world projects.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button href="/courses" size="lg">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Link
              href="#demo"
              className="inline-flex items-center rounded-xl border border-gray-700 px-8 py-4 font-semibold transition hover:border-cyan-500 hover:text-cyan-400"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h2 className="text-4xl font-bold text-cyan-400">10K+</h2>
              <p className="mt-2 text-gray-400">
                Learners
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">50+</h2>
              <p className="mt-2 text-gray-400">
                Courses
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">100+</h2>
              <p className="mt-2 text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">25+</h2>
              <p className="mt-2 text-gray-400">
                Mentors
              </p>
            </div>
          </div>

          {/* Trusted */}
          <div className="mt-20">
            <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
              Trusted by Students & Developers Worldwide
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-10 text-lg font-semibold text-gray-600">
              <span>Google</span>
              <span>Microsoft</span>
              <span>Amazon</span>
              <span>Meta</span>
              <span>OpenAI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-14 w-8 justify-center rounded-full border border-gray-700">
          <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-cyan-400" />
        </div>
      </div>
    </section>
  );
}