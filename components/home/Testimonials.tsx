"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Software Engineer @ Google",
    image: "AS",
    rating: 5,
    review:
      "SineForge completely changed the way I learn. The hands-on projects and mentorship helped me crack interviews with confidence.",
  },
  {
    name: "Priya Verma",
    role: "AI Engineer @ Microsoft",
    image: "PV",
    rating: 5,
    review:
      "The AI roadmap is incredibly structured. I went from knowing basic Python to building production-ready machine learning applications.",
  },
  {
    name: "Rahul Kumar",
    role: "Cyber Security Analyst",
    image: "RK",
    rating: 5,
    review:
      "The cybersecurity fellowship gave me practical exposure to penetration testing, networking, and real-world security tools.",
  },
  {
    name: "Sneha Patel",
    role: "Full Stack Developer",
    image: "SP",
    rating: 5,
    review:
      "The mentorship sessions were the best part. Every concept was explained with real projects instead of just theory.",
  },
  {
    name: "Ankit Singh",
    role: "Cloud Engineer",
    image: "AK",
    rating: 5,
    review:
      "From Docker to Kubernetes and AWS deployment, every module was practical and industry-focused.",
  },
  {
    name: "Neha Gupta",
    role: "Data Scientist",
    image: "NG",
    rating: 5,
    review:
      "One of the best learning platforms I've used. The curriculum, community, and career support exceeded my expectations.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050505] py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Loved by
            <span className="text-cyan-400"> Students & Professionals</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Thousands of learners have accelerated their careers through
            mentorship, practical learning, and real-world projects.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group rounded-3xl border border-gray-800 bg-gray-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-gray-900"
            >
              {/* Quote */}
              <div className="flex items-center justify-between">
                <Quote className="h-10 w-10 text-cyan-400" />

                <div className="flex">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="mt-8 leading-8 text-gray-400">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-lg font-bold text-black">
                  {item.image}
                </div>

                <div>
                  <h4 className="font-semibold">{item.name}</h4>

                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 p-10">
          <div className="grid gap-10 text-center md:grid-cols-4">
            <div>
              <h3 className="text-5xl font-bold text-cyan-400">10K+</h3>
              <p className="mt-3 text-gray-400">Students</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">4.9★</h3>
              <p className="mt-3 text-gray-400">Average Rating</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">95%</h3>
              <p className="mt-3 text-gray-400">Course Completion</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">500+</h3>
              <p className="mt-3 text-gray-400">Hiring Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}