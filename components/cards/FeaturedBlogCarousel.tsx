"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { BlogPost } from "@/types/blog";

interface FeaturedBlogCarouselProps {
  blogs: BlogPost[];
}

const SWIPE_DISTANCE = 50;
const AUTO_SWIPE_INTERVAL = 4000;

export default function FeaturedBlogCarousel({
  blogs,
}: FeaturedBlogCarouselProps) {
  const slides = blogs.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    if (slides.length < 2) return;

    const interval = window.setInterval(showNext, AUTO_SWIPE_INTERVAL);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured articles"
      className="mt-20 rounded-3xl border border-gray-800 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.09),transparent_55%),rgba(17,24,39,0.5)] px-4 py-8 sm:px-8"
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
            Explore our latest reads.
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

      <div className="overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.article
            key={slides[activeIndex].slug}
            custom={direction}
            initial={(slideDirection) => ({
              opacity: 0,
              x: slideDirection > 0 ? 110 : -110,
              scale: 0.98,
            })}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={(slideDirection) => ({
              opacity: 0,
              x: slideDirection > 0 ? -110 : 110,
              scale: 0.98,
            })}
            transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.8 }}
            className="rounded-3xl border border-gray-700 bg-[#080c14] p-8 sm:p-12"
          >
            <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm font-medium text-black">
              {slides[activeIndex].featured ? "Featured" : slides[activeIndex].category}
            </span>
            <div className="mt-7 max-w-4xl">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock3 className="h-4 w-4 text-cyan-400" />
                {slides[activeIndex].readingTime ?? "5 min read"}
              </div>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
                {slides[activeIndex].title}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
                {slides[activeIndex].excerpt}
              </p>
              <Link
                href={`/blog/${slides[activeIndex].slug}` as Route}
                className="mt-8 inline-flex rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                Read Article
              </Link>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Article selector">
        {slides.map((blog, index) => (
          <button
            key={blog.slug}
            type="button"
            aria-label={`Show ${blog.title}`}
            aria-current={index === activeIndex}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "w-7 bg-cyan-400" : "w-2 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
