"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Signal,
} from "lucide-react";

export interface CourseCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  students: string;
  rating: number;
  lessons: number;
  image: string;
  price?: string;
  featured?: boolean;
}

export default function CourseCard({
  slug,
  title,
  description,
  category,
  level,
  duration,
  students,
  rating,
  lessons,
  image,
  price = "Free",
  featured = false,
}: CourseCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border bg-gray-900/40 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 ${
        featured
          ? "border-cyan-500/40"
          : "border-gray-800"
      }`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Category */}
        <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-black">
          {category}
        </span>

        {/* Featured */}
        {featured && (
          <span className="absolute right-5 top-5 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-7">
        {/* Level */}
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
          {level}
        </span>

        {/* Title */}
        <h3 className="mt-5 line-clamp-2 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 line-clamp-3 leading-7 text-gray-400">
          {description}
        </p>

        {/* Meta */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-cyan-400" />
            {duration}
          </div>

          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-cyan-400" />
            {students}
          </div>

          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-cyan-400" />
            {lessons} Lessons
          </div>

          <div className="flex items-center gap-2">
            <Signal className="h-4 w-4 text-cyan-400" />
            {level}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-800 pt-6">
          <div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              <span className="font-semibold text-white">
                {rating.toFixed(1)}
              </span>

              <span className="text-sm text-gray-500">
                /5
              </span>
            </div>

            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {price}
            </p>
          </div>

          <Link
            href={`/courses/${slug}` as Route}
            className="inline-flex items-center rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            View Course
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
