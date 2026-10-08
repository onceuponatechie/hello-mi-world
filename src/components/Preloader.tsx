"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const brand = "Essy";

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          clearInterval(t);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, #fafafa 0%, #ececee 70%, #e4e4e4 100%)",
          }}
        >
          <div className="relative flex flex-col items-center">
            <div
              className="relative flex items-center justify-center"
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
              <div className="heading relative z-10 flex text-[52px] tracking-tight text-ink">
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
              </div>
            </div>
            <div className="mt-6 text-[15px] tabular-nums text-muted-ink">
              {pct}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
