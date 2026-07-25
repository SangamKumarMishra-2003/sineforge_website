"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
}

const slideUpVariants = (distance: number): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});

export default function SlideUp({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  amount = 0.2,
}: SlideUpProps) {
  return (
    <motion.div
      className={className}
      variants={slideUpVariants(distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth ease-out
      }}
    >
      {children}
    </motion.div>
  );
}