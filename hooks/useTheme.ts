"use client";

import { useEffect, useState } from "react";

type Theme =
  | "light"
  | "dark"
  | "system";


export default function useTheme() {
  const [theme, setTheme] =
    useState<Theme>("system");

  const [resolvedTheme, setResolvedTheme] =
    useState<"light" | "dark">("dark");


  useEffect(() => {
    const savedTheme =
      localStorage.getItem(
        "theme"
      ) as Theme | null;


    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);


  useEffect(() => {
    const root =
      document.documentElement;


    let currentTheme:
      | "light"
      | "dark";


    if (theme === "system") {
      currentTheme =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light";
    } else {
      currentTheme = theme;
    }


    root.classList.remove(
      "light",
      "dark"
    );

    root.classList.add(
      currentTheme
    );


    setResolvedTheme(
      currentTheme
    );


    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);


  return {
    theme,
    setTheme,
    resolvedTheme,
  };
}