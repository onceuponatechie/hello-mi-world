"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { DoodleStar } from "@/components/DoodleStar";

export function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const reveal = () => setReady(true);
    window.addEventListener("portfolio:entry-ready", reveal);
    const root = document.documentElement;
    const frame = root.dataset.heroEntry !== "true" && root.dataset.entryState !== "loading" ? requestAnimationFrame(reveal) : null;
    return () => {
      window.removeEventListener("portfolio:entry-ready", reveal);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);
  const enter = (delay: number, distance = 18) => ({
    initial: reduce ? false as const : { opacity: 0, y: distance },
    animate: reduce || ready ? { opacity: 1, y: 0 } : { opacity: 0, y: distance },
    transition: { duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section className="hero-scene" aria-label="Meet Essy">
      <div className="hero-copy">
        <motion.p className="hero-availability" {...enter(0.16, 10)}><span /> Open to Collaborations</motion.p>
        <motion.p className="hero-greeting" {...enter(0.23, 12)}>I’m all about</motion.p>
        <h1 className="hero-name">
          <motion.span {...enter(0.3)}>Products, people,</motion.span>{" "}
          <motion.span {...enter(0.39)}>and the stories</motion.span>{" "}
          <motion.span {...enter(0.48)}>worth building.</motion.span>
        </h1>
        <motion.p className="hero-roles" {...enter(0.58, 12)}>Researcher · Builder · Storyteller</motion.p>
        <motion.div className="hero-actions" {...enter(0.67, 12)}>
          <a href="#projects" className="hero-primary">Start here</a>
          <a href="#resources" className="hero-secondary">Grab a freebie</a>
        </motion.div>
      </div>

      <div className="hero-collage" aria-hidden="true">
        <motion.figure className="hero-piece hero-work" style={{ rotate: -10 }} {...enter(0, 30)}>
          <div className="hero-photo-frame"><img src="/assets/essy-laptop-dash.jpg" alt="" fetchPriority="high" width={1024} height={1024} /></div>
          <figcaption>A little less guessing.<br />A little more making.</figcaption>
          <DoodleStar className="hero-star hero-star-lavender" />
        </motion.figure>
        <motion.figure className="hero-piece hero-portrait" {...enter(0.09, 24)}>
          <img src="/assets/essy-udeme-portrait.png" alt="" fetchPriority="high" width={830} height={1000} />
        </motion.figure>
        <motion.div className="hero-piece hero-note" style={{ rotate: 6 }} {...enter(0.68, 20)}>
          <svg viewBox="0 0 80 38" fill="none"><path d="M4 27c5-23 14-26 17-6s16 14 18-1 18-19 17 0 13 7 18-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          <p>What if we<br />tried this?</p>
          <span>Start with a question.</span>
        </motion.div>
        <motion.figure className="hero-piece hero-pocket" style={{ rotate: 11 }} {...enter(0.76, 24)}>
          <img src="/assets/essy-phone.jpg" alt="" width={1024} height={1024} />
          <figcaption>Ideas, made useful.</figcaption>
          <DoodleStar className="hero-star hero-star-butter" />
        </motion.figure>
        <motion.svg className="hero-loop" style={{ rotate: 12 }} {...enter(0.84, 12)} viewBox="0 0 155 100" fill="none"><path d="M6 21c49-26 85-7 80 25S33 74 57 45s67-19 86 37m-20-9 21 11 1-25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></motion.svg>
      </div>
    </section>
  );
}
