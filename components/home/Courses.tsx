"use client";

import Link from "next/link";
import { ArrowRight, Clock, Users, Star } from "lucide-react";

const courses = [
  {
    title: "Artificial Intelligence & Machine Learning",
    category: "AI",
    level: "Beginner to Advanced",
    duration: "16 Weeks",
    students: "2,500+",
    rating: "4.9",
    image: "/images/courses/ai.jpg",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Full Stack Web Development",
    category: "Development",
    level: "Intermediate",
    duration: "14 Weeks",
    students: "3,200+",
    rating: "4.8",
    image: "/images/courses/fullstack.jpg",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Cyber Security",
    category: "Security",
    level: "All Levels",
    duration: "12 Weeks",
    students: "1,700+",
    rating: "4.9",
    image: "/images/courses/cyber.jpg",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Data Science & Analytics",
    category: "Data Science",
    level: "Intermediate",
    duration: "15 Weeks",
    students: "2,100+",
    rating: "4.8",
    image: "/images/courses/datascience.jpg",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Cloud Computing & DevOps",
    category: "Cloud",
    level: "Intermediate",
    duration: "10 Weeks",
    students: "1,300+",
    rating: "4.8",
    image: "/images/courses/cloud.jpg",
    color: "from-sky-500 to-cyan-600",
  },
  {
    title: "Mobile App Development",
    category: "Mobile",
    level: "Beginner",
    duration: "12 Weeks",
    students: "1,800+",
    rating: "4.7",
    image: "/images/courses/mobile.jpg",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Courses() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Popular Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Learn In-Demand
            <span className="text-cyan-400"> Tech Skills</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Industry-designed programs focused on practical learning,
            real-world projects, mentorship, and career growth.
          </p>
        </div>

        {/* Course Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/40 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500"
            >
              {/* Course Banner */}
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${course.color}`}
              >
                <h3 className="px-6 text-center text-3xl font-bold text-white">
                  {course.category}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                  {course.level}
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-snug">
                  {course.title}
                </h3>

                {/* Stats */}
                <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                <Link
                  href="/courses"
                  className="mt-8 inline-flex items-center font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  View Course
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 p-10">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold">
                Explore Our Complete Learning Path
              </h3>

              <p className="mt-4 text-lg text-gray-400">
                Choose from AI, Full Stack Development, Data Science,
                Cyber Security, Cloud Computing, DevOps, Mobile
                Development, and many more industry-focused programs.
              </p>
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}