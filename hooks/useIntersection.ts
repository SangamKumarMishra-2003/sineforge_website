"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";


interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}


export default function useIntersection({
  threshold = 0.2,
  rootMargin = "0px",
  once = true,
}: IntersectionOptions = {}) {

  const elementRef =
    useRef<HTMLElement | null>(null);


  const [isVisible, setIsVisible] =
    useState(false);


  useEffect(() => {
    const element =
      elementRef.current;


    if (!element)
      return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setIsVisible(true);


            if (once) {
              observer.disconnect();
            }

          } else if (!once) {

            setIsVisible(false);

          }

        },
        {
          threshold,
          rootMargin,
        }
      );


    observer.observe(
      element
    );


    return () => {
      observer.disconnect();
    };

  }, [
    threshold,
    rootMargin,
    once,
  ]);


  return {
    elementRef,
    isVisible,
  };
}