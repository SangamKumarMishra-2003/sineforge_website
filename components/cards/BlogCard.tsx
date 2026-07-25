"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import {
  Calendar,
  Clock3,
  ArrowRight,
  User,
  Tag,
} from "lucide-react";

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  image,
  author,
  category,
  publishedAt,
  readTime,
  featured = false,
}: BlogCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border bg-gray-900/40 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 ${
        featured ? "border-cyan-500/40" : "border-gray-800"
      }`}
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Category */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-black">
          <Tag className="h-4 w-4" />
          {category}
        </div>

        {/* Featured */}
        {featured && (
          <span className="absolute right-5 top-5 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-cyan-400" />
            {author}
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-cyan-400" />
            {publishedAt}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-cyan-400" />
            {readTime}
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-5 line-clamp-2 text-2xl font-bold text-white transition group-hover:text-cyan-400">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="mt-4 line-clamp-3 leading-7 text-gray-400">
          {excerpt}
        </p>

        {/* Button */}
        <Link
          href={`/blog/${slug}` as Route}
          className="mt-8 inline-flex items-center font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          Read Article
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
