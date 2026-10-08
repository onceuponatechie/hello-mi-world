"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeWords } from "@/components/Reveal";
const reading = "/assets/essy-reading.jpg";
const portrait = "/assets/essy-portrait.jpg";
const notes = "/assets/essy-notes.jpg";
const waves = "/assets/essy-waves.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;
const heroImages = [reading, portrait, notes, waves];

/* One shared entrance timeline. The inline media lands first, then the
   supporting elements, then the headline, then the subline and CTAs. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

/* ---------- animated smiley reel ---------- */

function SmileyReel() {
  const [panel, setPanel] = useState(0); // 0 smiley, 1 hand, 2 spacer
  const [wink, setWink] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (panel === 0) {
      t = setTimeout(() => setWink(true), 1400);
      const t2 = setTimeout(() => {
        setWink(false);
        setPanel(1);
      }, 2000);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }
    t = setTimeout(() => setPanel((p) => (p === 1 ? 2 : 0)), panel === 1 ? 1500 : 400);
    return () => clearTimeout(t);
  }, [panel]);

  return (
    <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#FDFBE6]">
      <div className="h-7 w-7 overflow-hidden">
      <div
        className="h-full w-full"
        style={{
          transform: `translateY(-${panel * 100}%)`,
          transition: "transform 0.5s cubic-bezier(0.7, 0, 0.2, 1)",
        }}
      >
        {/* smiley */}
        <div className="grid h-7 w-7 place-items-center">
          <svg viewBox="0 0 44 44" className="h-6 w-6">
            <circle cx="16" cy="18" r="2.4" fill="#1a1a1a" />
            {wink ? (
              <path d="M25 18.5c1.4-1.6 3.4-1.6 4.8 0" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            ) : (
              <circle cx="28" cy="18" r="2.4" fill="#1a1a1a" />
            )}
            <path d="M14 26c2.6 3.6 13.4 3.6 16 0" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        {/* waving hand */}
        <div className="grid h-7 w-7 place-items-center">
          <motion.svg
            viewBox="0 0 44 44"
            className="h-6 w-6"
            style={{ originX: 0.5, originY: 1 }}
            animate={{ rotate: [-12, 18, -12] }}
            transition={{ duration: 0.7, ease: "easeInOut", repeat: Infinity }}
          >
            <g stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 24V13.5a2 2 0 0 1 4 0V22" />
              <path d="M19 21v-9.5a2 2 0 0 1 4 0V22" />
              <path d="M23 21v-8a2 2 0 0 1 4 0V23" />
              <path d="M27 22v-5a2 2 0 0 1 4 0v9a9 9 0 0 1-9 9c-4 0-6-2-7.4-5L11 25a2 2 0 0 1 3.4-2.1l1.6 2.3" />
            </g>
          </motion.svg>
        </div>
        {/* spacer */}
        <div className="h-7 w-7" />
      </div>
      </div>
    </div>
  );
}

/* ---------- inline media chip ---------- */

function MediaChip({ offset, delay }: { offset: number; delay: number }) {
  const [i, setI] = useState(offset % heroImages.length);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % heroImages.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: EASE, delay }}
      className="relative mx-[6px] inline-block h-[41px] w-[68px] overflow-hidden rounded-2xl border border-white/20 align-middle shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)] min-[600px]:h-11 min-[600px]:w-[72px]"
      style={{ backgroundColor: "hsl(0 0% 12%)" }}
    >
      {heroImages.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[800ms]"
          style={{ opacity: idx === i ? 1 : 0 }}
        />
      ))}
    </motion.span>
  );
}

function Word({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.span
      className="inline"
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 min-[600px]:pb-36 min-[600px]:pt-6">
      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div {...rise(0.5)}>
          <SmileyReel />
        </motion.div>

        <motion.div {...rise(0.68)} className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-card px-4 py-2 text-[12px] font-normal text-muted-ink shadow-sm">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-sage opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-sage" />
            </span>
            Open to Collaborations
          </span>
        </motion.div>

        <h1 className="mt-8 text-[clamp(32px,6vw,68px)] font-normal leading-[1.12] tracking-tight text-ink min-[600px]:tracking-[-2.5px]">
          <Word delay={0.9}>
            <span className="inline-block mb-[0.14em] min-[600px]:mb-0">Products, people,</span>
          </Word>
          <br className="min-[600px]:hidden" />{" "}
          <Word delay={1.02}>and the</Word>
          <br className="hidden min-[600px]:block" />
          <MediaChip offset={0} delay={0.12} />
          <Word delay={1.14}>stories</Word>
          <br className="min-[600px]:hidden" />{" "}
          <Word delay={1.26}>worth</Word>
          <br className="hidden min-[600px]:block" />
          <MediaChip offset={2} delay={0.28} />
          <br className="min-[600px]:hidden" />
          <Word delay={1.38}>building.</Word>
        </h1>


        <motion.p {...rise(1.7)} className="mt-7 text-[16px] text-muted-ink">
          <TypeWords text="Researcher · Builder · Storyteller" delay={1.75} step={0.09} inView={false} />
        </motion.p>

        <motion.div {...rise(2.1)} className="mt-9 flex flex-col items-center justify-center gap-3 min-[600px]:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-[13px] font-normal text-ink transition-all hover:bg-ink hover:text-white hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)]"
          >
            Start here
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#resources"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-[13px] font-normal text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Grab a freebie
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
