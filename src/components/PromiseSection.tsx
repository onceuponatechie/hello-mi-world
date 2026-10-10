"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { Reveal, TypeWords } from "@/components/Reveal";
const laptopDash = "/assets/essy-laptop-dash.jpg";
const insight = "/assets/essy-insight.jpg";
const phone = "/assets/essy-phone.jpg";
const slide = "/assets/essy-slide.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    name: "Streamline Dashboard",
    tag: "Case study",
    year: "2026",
    role: "Product design",
    body: "A single canvas for revenue ops. Cut daily reporting from 2 hours to 6 minutes without adding a single new tool.",
    img: laptopDash,
    stat: "38%",
    statLabel: "faster decision loop",
  },
  {
    name: "Insight Studio",
    tag: "Case study",
    year: "2025",
    role: "Web · Analytics",
    body: "A calmer analytics home for a research team who lived in eight tabs at once, rebuilt around one question at a time.",
    img: insight,
    stat: "4×",
    statLabel: "less tab switching",
  },
  {
    name: "Pocket Coach",
    tag: "Case study",
    year: "2025",
    role: "iOS · Wellness",
    body: "A pocket-sized nudge app that helps founders keep one promise a day, with streaks that forgive a missed morning.",
    img: phone,
    stat: "4.8★",
    statLabel: "App Store rating",
  },
  {
    name: "Sage Deck",
    tag: "Case study",
    year: "2024",
    role: "Brand · Deck system",
    body: "A deck kit that reads like a magazine and closes like a founder brief — built once, reused across every raise.",
    img: slide,
    stat: "3 May",
    statLabel: "launch day",
  },
];

export function PromiseSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  // Measure the normal-flow stack, never a transformed sticky card. Smooth the
  // background scale without delaying the incoming card's native sticky position.
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 40, mass: 0.25 });
  return (
    <section id="projects" className="builds-section relative px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal dir="down" blur>
          <h2 className="text-[clamp(28px,3.6vw,44px)] leading-none tracking-tight text-ink">
            The Builds
          </h2>
        </Reveal>
        <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-muted-ink">
          <TypeWords
            delay={0.15}
            step={0.03}
            text="A handful of the things I've made lately — for people I like, on ideas I couldn't stop thinking about."
          />
        </p>
      </div>

      <div ref={stackRef} className="project-stack relative mt-14">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} index={i} total={projects.length} progress={progress} {...p} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="builds-more mx-auto mt-5 flex max-w-6xl items-center justify-center"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-[13px] font-normal text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Explore more builds
        </a>
      </motion.div>
    </section>
  );
}

type ProjectProps = (typeof projects)[number] & { index: number; total: number; progress: MotionValue<number> };

function ProjectCard({
  name,
  tag,
  year,
  role,
  body,
  img,
  stat,
  statLabel,
  index,
  total,
  progress,
}: ProjectProps) {
  const reduce = useReducedMotion();
  const scale = useTransform(progress, [index / total, (index + 1) / total], [1, 0.96]);
  const isLast = index === total - 1;

  return (
    <div
      className="project-sticky mt-6 first:mt-0 md:mt-10"
      style={{ zIndex: index + 1, "--project-index": index } as CSSProperties}
    >
      <motion.article
        style={{
          scale: isLast || reduce ? 1 : scale,
          transformOrigin: "top center",
        }}
        className="project-card group relative mx-auto max-w-6xl"
      >
        <div className="project-row">
          <a href="#projects" className="project-image" aria-label={`View ${name}`}>
            <img
              src={img}
              alt={name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover saturate-[1.08] contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.04] group-active:scale-[1.04]"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            />

          </a>

          {/* text */}
          <div className="project-copy">
            <p className="project-meta">{tag} · {year} · {role}</p>
            <h3>
              {name}
            </h3>
            <p className="project-description">
              {body}
            </p>
            <p className="project-result"><span>{stat}</span> {statLabel}</p>
            <div className="project-links">
              <a href="#projects" className="inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-[12px] font-normal text-white transition-opacity hover:opacity-90">
                View Case Study
              </a>
              <a
                href="#projects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[12px] font-normal text-ink hover:underline"
              >
                Go live
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
