"use client";

import { useEffect, useRef, useState } from "react";

export interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  once?: boolean;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  once = true,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const [started, setStarted] = useState(false);

  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setStarted(false);
          setCount(from);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [from, once]);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Ease Out Cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const value = from + (to - from) * eased;

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, from, to, duration]);

  return (
    <span
      ref={counterRef}
      className={className}
    >
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}