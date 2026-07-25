import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {badge && (
        <span className="inline-flex rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-lg leading-8 text-gray-400 ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}