"use client";

import { useEffect, useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const id = useId().replace(/:/g, "");
  const reduce = useReducedMotion();
  const brand = "Essy";

  useEffect(() => {
    let progress = 0;
    let finish: ReturnType<typeof setTimeout> | undefined;
    const t = setInterval(() => {
      progress = Math.min(100, progress + 2);
      setPct(progress);
      if (progress === 100) {
        clearInterval(t);
        finish = setTimeout(() => setDone(true), 220);
      }
    }, 40);
    return () => {
      clearInterval(t);
      clearTimeout(finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: reduce ? 0 : 1 }}
          transition={{ duration: reduce ? 0.18 : 1.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          <svg className="absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id={`${id}-background`}>
                <stop offset="0%" stopColor="#fafafa" />
                <stop offset="70%" stopColor="#ececee" />
                <stop offset="100%" stopColor="#e4e4e4" />
              </radialGradient>
              <mask id={`${id}-reveal`} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                <rect width="100%" height="100%" fill="white" />
                <motion.circle cx="50%" cy="50%" fill="black" initial={{ r: "0%" }} exit={{ r: reduce ? "0%" : "100%" }} transition={{ delay: 0.2, duration: 1.1, ease: [0.76, 0, 0.24, 1] }} />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id}-background)`} mask={`url(#${id}-reveal)`} />
          </svg>
          <div className="relative flex flex-col items-center">
            <motion.div
              className="relative flex items-center justify-center"
              exit={{ scale: reduce ? 1 : 12, opacity: 0 }}
              transition={{ scale: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }, opacity: { delay: reduce ? 0 : 0.2, duration: reduce ? 0.18 : 0.35 } }}
              style={{
                width: "min(440px, 84vw)",
                height: "min(440px, 84vw)",
                borderRadius: 9999,
                background:
                  "radial-gradient(circle at 35% 25%, #ffffff 0%, #f2f2f4 45%, #e7e7ea 70%, #dcdce0 100%)",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.10), inset 0 -30px 60px rgba(255,255,255,0.9)",
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: 260,
                  height: 120,
                  left: 30,
                  bottom: 40,
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)",
                  filter: "blur(10px)",
                }}
              />
              <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="heading relative z-10 flex text-[52px] tracking-tight text-ink">
                {brand.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="absolute top-full mt-6 text-[15px] tabular-nums text-muted-ink">
              {pct}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
