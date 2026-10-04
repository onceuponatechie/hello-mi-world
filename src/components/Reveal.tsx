"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Dir = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Dir, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: -40 },
  right: { x: 40 },
  none: {},
};

/** One shared, calm scroll reveal used across the page. */
export function Reveal({
  children,
  dir = "up",
  delay = 0,
  duration = 0.7,
  className,
  blur = false,
  once = true,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  duration?: number;
  className?: string;
  blur?: boolean;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[dir], ...(blur ? { filter: "blur(8px)" } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Splits a string into words that fade/blur in one after another. */
export function TypeWords({
  text,
  className,
  delay = 0,
  step = 0.055,
  inView = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  if (reduce) return <span className={className}>{text}</span>;

  const anim = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="inline-block whitespace-pre"
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          {...(inView
            ? { whileInView: anim, viewport: { once: true, margin: "-10%" } }
            : { animate: anim })}
          transition={{ duration: 0.5, ease: EASE, delay: delay + i * step }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
