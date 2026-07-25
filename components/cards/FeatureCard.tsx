"use client";

import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: Route;
  badge?: string;
  variant?: "default" | "primary";
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  href = "/courses",
  badge,
  variant = "default",
}: FeatureCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
        variant === "primary"
          ? "border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 hover:border-cyan-400"
          : "border-gray-800 bg-gray-900/40 hover:border-cyan-500 hover:bg-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

      {/* Badge */}
      {badge && (
        <span className="absolute right-6 top-6 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-black">
          {badge}
        </span>
      )}

      {/* Icon */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition-all duration-300 group-hover:bg-cyan-500">
        <Icon className="h-8 w-8 text-cyan-400 transition group-hover:text-black" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-4 leading-7 text-gray-400">
        {description}
      </p>

      {/* Button */}
      <Link
        href={href}
        className="relative z-10 mt-8 inline-flex items-center font-semibold text-cyan-400 transition hover:text-cyan-300"
      >
        Learn More
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
