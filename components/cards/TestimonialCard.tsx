"use client";

import { Quote, Star, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  review: string;
  image: string;
  rating?: number;
  linkedin?: string;
  twitter?: string;
  featured?: boolean;
}

export default function TestimonialCard({
  name,
  role,
  company,
  review,
  image,
  rating = 5,
  linkedin,
  twitter,
  featured = false,
}: TestimonialCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 ${
        featured
          ? "border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10"
          : "border-gray-800 bg-gray-900/40"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

      <div className="relative z-10 p-8">
        {/* Quote */}
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
            <Quote className="h-7 w-7 text-cyan-400" />
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Review */}
        <p className="mt-8 leading-8 text-gray-300">
          “{review}”
        </p>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800" />

        {/* User */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-gray-700">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                {name}
              </h3>

              <p className="text-sm text-gray-400">
                {role}
              </p>

              <p className="text-sm font-medium text-cyan-400">
                {company}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {linkedin && (
              <a
                href={linkedin}
                rel="noreferrer"
                target="_blank"
                className="rounded-lg border border-gray-700 p-2 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}

            {twitter && (
              <a
                href={twitter}
                rel="noreferrer"
                target="_blank"
                className="rounded-lg border border-gray-700 p-2 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
