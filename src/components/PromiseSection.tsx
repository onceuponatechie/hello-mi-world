"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { builds } from "@/content/builds";

const EASE = [0.22, 1, 0.36, 1] as const;
const projects = builds.slice(0, 4);

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
          <h2 className="section-heading">
            The Builds
          </h2>
        </Reveal>
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
        <Link
          href="/builds"
          className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-[13px] font-normal text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Explore more builds
        </Link>
      </motion.div>
    </section>
  );
}

type ProjectProps = (typeof projects)[number] & { index: number; total: number; progress: MotionValue<number> };

function ProjectCard({
  name,
  slug,
  format,
  summary,
  image,
  output,
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
          <Link href={`/builds/${slug}`} className="project-image" aria-label={`Read ${name}`}>
            <img
              src={image}
              alt={`${name} concept cover`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover saturate-[1.08] contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.04] group-active:scale-[1.04]"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            />

          </Link>

          {/* text */}
          <div className="project-copy">
            <p className="project-meta">Concept study · {format}</p>
            <h3>
              {name}
            </h3>
            <p className="project-description">
              {summary}
            </p>
            <p className="project-result">{output}</p>
            <div className="project-links">
              <Link href={`/builds/${slug}`} className="hero-primary">
                See the build
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
