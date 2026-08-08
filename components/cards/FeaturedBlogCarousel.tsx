"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import { useRef, useState } from "react";
import type { BlogPost } from "@/types/blog";

interface FeaturedBlogCarouselProps {
  blogs: BlogPost[];
}

const SWIPE_DISTANCE = 50;

export default function FeaturedBlogCarousel({
  blogs,
}: FeaturedBlogCarouselProps) {
  const slides = blogs.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (!slides.length) return null;

  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const showNext = () =>
    setActiveIndex((current) => (current + 1) % slides.length);

  const getOffset = (index: number) => {
    const rawOffset = index - activeIndex;
    const half = Math.floor(slides.length / 2);

    if (rawOffset > half) return rawOffset - slides.length;
    if (rawOffset < -half) return rawOffset + slides.length;
    return rawOffset;
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured articles"
      className="mt-20 overflow-hidden rounded-3xl border border-gray-800 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.09),transparent_55%),rgba(17,24,39,0.5)] px-4 py-8 sm:px-8"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;

        const distance = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;

        if (Math.abs(distance) < SWIPE_DISTANCE) return;
        if (distance > 0) showPrevious();
        else showNext();
      }}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm font-medium text-black">
            Featured stories
          </span>
          <p className="mt-3 text-sm text-gray-400">
            Swipe or use the controls to explore our latest reads.
          </p>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Show previous article"
            onClick={showPrevious}
            className="grid h-11 w-11 place-items-center rounded-full border border-gray-700 text-white transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Show next article"
            onClick={showNext}
            className="grid h-11 w-11 place-items-center rounded-full border border-gray-700 text-white transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-black"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative mx-auto h-[530px] max-w-6xl sm:h-[600px] lg:h-[620px]">
        {slides.map((blog, index) => {
          const offset = getOffset(index);
          const isActive = offset === 0;
          const isSideCard = Math.abs(offset) === 1;
          const position =
            offset === 0
              ? "translateX(-50%) scale(1)"
              : offset < 0
                ? "translateX(-128%) translateY(28px) rotate(-5deg) scale(0.82)"
                : "translateX(28%) translateY(28px) rotate(5deg) scale(0.82)";

          return (
            <article
              key={blog.slug}
              aria-hidden={!isActive && !isSideCard}
              className="absolute left-1/2 top-0 w-[74%] max-w-sm overflow-hidden rounded-3xl border border-gray-700 bg-black will-change-transform transition-[transform,opacity,filter,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[52%]"
              style={{
                transform: position,
                opacity: isActive ? 1 : isSideCard ? 0.48 : 0,
                zIndex: isActive ? 30 : isSideCard ? 20 : 0,
                filter: isActive ? "none" : "brightness(0.72)",
                pointerEvents: isActive ? "auto" : "none",
                boxShadow: isActive
                  ? "0 28px 70px rgba(0, 0, 0, 0.7), 0 0 36px rgba(34, 211, 238, 0.2)"
                  : "0 20px 45px rgba(0, 0, 0, 0.6)",
              }}
            >
              <div className="relative h-60 sm:h-72">
                <Image
                  src={blog.coverImage}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 88vw, 460px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-black">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock3 className="h-3.5 w-3.5 text-cyan-400" />
                  {blog.readingTime ?? "5 min read"}
                  <span aria-hidden="true">•</span>
                  {blog.author.name}
                </div>
                <h2 className="mt-3 line-clamp-2 text-2xl font-bold text-white sm:text-3xl">
                  {blog.title}
                </h2>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-400 sm:text-base">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/blog/${blog.slug}` as Route}
                  className="mt-5 inline-flex rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
                >
                  Read article
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Article selector">
        {slides.map((blog, index) => (
          <button
            key={blog.slug}
            type="button"
            aria-label={`Show ${blog.title}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "w-7 bg-cyan-400" : "w-2 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
