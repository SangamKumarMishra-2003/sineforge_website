"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
}

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 50,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "down":
        return { x: 0, y: -distance };

      case "left":
        return { x: distance, y: 0 };

      case "right":
        return { x: -distance, y: 0 };

      case "up":
      default:
        return { x: 0, y: distance };
    }
  };

  const initial = getInitialPosition();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: initial.x,
      y: initial.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}