"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  scrollY: number;
  scrollDirection: "up" | "down" | null;
  isScrolled: boolean;
}

export default function useScroll(): ScrollState {
  const [scrollState, setScrollState] =
    useState<ScrollState>({
      scrollY: 0,
      scrollDirection: null,
      isScrolled: false,
    });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollState({
        scrollY: currentScrollY,

        scrollDirection:
          currentScrollY > lastScrollY
            ? "down"
            : currentScrollY < lastScrollY
            ? "up"
            : null,

        isScrolled: currentScrollY > 50,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return scrollState;
}