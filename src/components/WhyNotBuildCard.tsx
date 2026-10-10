"use client";

import { useEffect, useId, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { CATEGORIES, FIRST_SCREEN, WhyNotBuildRenderer } from "./why-not-build-renderer";

export function WhyNotBuildCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const elapsedRef = useRef(0);
  const pausedRef = useRef(false);
  const manualPauseRef = useRef(false);
  const reduceRef = useRef(false);
  const motionHintId = useId();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !host || !context) return;

    const sage = new Image();
    const ribbon = new Image();
    sage.src = "/assets/sage-laboratory.jpg";
    ribbon.src = "/assets/ribbon-laboratory.jpg";
    const styles = getComputedStyle(host);
    const fonts = {
      heading: styles.getPropertyValue("--font-syne").trim(),
      body: styles.getPropertyValue("--font-jakarta").trim(),
    };
    const renderer = new WhyNotBuildRenderer(context, canvas, { sage, ribbon }, fonts);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    pausedRef.current = motion.matches;
    reduceRef.current = motion.matches;
    if (motion.matches) elapsedRef.current = 1900;

    let frame = 0;
    let previous = performance.now();
    let lastDrawn = -1;
    let visible = true;
    let disposed = false;

    const draw = () => {
      renderer.draw(elapsedRef.current);
      lastDrawn = elapsedRef.current;
    };

    const resize = new ResizeObserver(() => {
      const ratio = Math.min(window.devicePixelRatio || 1, 3);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * ratio));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * ratio));
      draw();
    });
    resize.observe(canvas);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      previous = performance.now();
    });
    observer.observe(host);

    const onVisibility = () => { previous = performance.now(); };
    const onMotion = () => {
      reduceRef.current = motion.matches;
      pausedRef.current = motion.matches || manualPauseRef.current;
      if (motion.matches) {
        elapsedRef.current = Math.max(elapsedRef.current, 1900);
        draw();
      }
      previous = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", onMotion);

    const animate = (now: number) => {
      if (!pausedRef.current && visible && !document.hidden) {
        elapsedRef.current += Math.max(0, Math.min(now - previous, 80));
      }
      previous = now;
      if (lastDrawn !== elapsedRef.current) draw();
      frame = requestAnimationFrame(animate);
    };

    // Draw even if one image fails; typography and procedural motion still work.
    Promise.allSettled([sage.decode(), ribbon.decode(), document.fonts.load(`500 16px ${fonts.heading}`), document.fonts.load(`400 12px ${fonts.body}`)]).then(() => {
      if (disposed) return;
      draw();
      previous = performance.now();
      frame = requestAnimationFrame(animate);
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  const toggleMotion = () => {
    if (reduceRef.current) return;
    pausedRef.current = !pausedRef.current;
    manualPauseRef.current = pausedRef.current;
  };

  return (
    <div ref={hostRef} className="dark-surface mx-auto w-full">
      <div
        role="group"
        tabIndex={0}
        aria-label="Why Not Build publication: six categories"
        aria-describedby={motionHintId}
        className="relative aspect-[360/486] w-full overflow-hidden rounded-[27px] bg-ink shadow-[0_17px_26px_-20px_rgba(43,57,40,.31),0_2px_3px_rgba(21,29,21,.08)] ring-1 ring-inset ring-white/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7efd9]"
        onKeyDown={(event) => {
          if (event.key === " " && event.target === event.currentTarget) {
            event.preventDefault();
            toggleMotion();
          }
        }}
      >
        <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
        <a href={site.stories} aria-label="Read Why Not Build" className="wnb-read"><ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></a>
        <section className="sr-only">
          <p id={motionHintId}>Press Space while this card is focused to pause or resume the artwork.</p>
          <h3>Why Not Build</h3>
          <p>{FIRST_SCREEN.title.join(" ")}</p>
          <p>Six categories:</p>
          <ul>{CATEGORIES.map(category => <li key={category}>{category}</li>)}</ul>
        </section>
      </div>
    </div>
  );
}
