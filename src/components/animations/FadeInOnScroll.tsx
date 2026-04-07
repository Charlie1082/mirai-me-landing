"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const directionOffset = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function FadeInOnScroll({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInOnScrollProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
