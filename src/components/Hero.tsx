"use client";

import { motion, useReducedMotion } from "framer-motion";

function Star({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 100 100" fill="none">
      <path d="m50 4 9 28 26-16-16 26 27 8-27 9 16 26-26-16-9 27-8-27-26 16 16-26-28-9 28-8-16-26 26 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero-scene" aria-label="Meet Essy">
      <motion.div
        className="hero-copy"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <p className="hero-availability"><span /> Open to Collaborations</p>
        <p className="hero-greeting">I’m all about</p>
        <h1 className="hero-name">
          <span>Products, people,</span>{" "}
          <span>and the stories</span>{" "}
          <span>worth building.</span>
        </h1>
        <p className="hero-roles">Researcher · Builder · Storyteller</p>
        <div className="hero-actions">
          <a href="#projects" className="hero-primary">Start here</a>
          <a href="#resources" className="hero-secondary">Grab a freebie</a>
        </div>
      </motion.div>

      <div className="hero-collage" aria-hidden="true">
        <figure className="hero-piece hero-work">
          <div className="hero-photo-frame"><img src="/assets/essy-laptop-dash.jpg" alt="" fetchPriority="high" width={1024} height={1024} /></div>
          <figcaption>A little less guessing.<br />A little more making.</figcaption>
          <Star className="hero-star hero-star-lavender" />
        </figure>
        <figure className="hero-piece hero-portrait">
          <img src="/assets/essy-reading.jpg" alt="" fetchPriority="high" width={1024} height={1024} />
        </figure>
        <div className="hero-piece hero-note">
          <svg viewBox="0 0 80 38" fill="none"><path d="M4 27c5-23 14-26 17-6s16 14 18-1 18-19 17 0 13 7 18-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          <p>What if we<br />tried this?</p>
          <span>Start with a question.</span>
        </div>
        <figure className="hero-piece hero-pocket">
          <img src="/assets/essy-phone.jpg" alt="" width={1024} height={1024} />
          <figcaption>Ideas, made useful.</figcaption>
          <Star className="hero-star hero-star-butter" />
        </figure>
        <svg className="hero-loop" viewBox="0 0 155 100" fill="none"><path d="M6 21c49-26 85-7 80 25S33 74 57 45s67-19 86 37m-20-9 21 11 1-25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
    </section>
  );
}
