"use client";

import {
  ReactNode,
  useEffect,
  useState,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselProps {
  children: ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  loop?: boolean;
}

export default function Carousel({
  children,
  className,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  loop = true,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const totalSlides = children.length;

  const nextSlide = () => {
    setCurrent((prev) => {
      if (prev === totalSlides - 1) {
        return loop ? 0 : prev;
      }

      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return loop ? totalSlides - 1 : prev;
      }

      return prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  });

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl",
        className
      )}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="min-w-full"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      {showArrows && (
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full border border-gray-700 bg-black/60 p-3 text-white backdrop-blur transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Right Arrow */}
      {showArrows && (
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full border border-gray-700 bg-black/60 p-3 text-white backdrop-blur transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                current === index
                  ? "w-8 bg-cyan-400"
                  : "w-2.5 bg-gray-500 hover:bg-gray-300"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}