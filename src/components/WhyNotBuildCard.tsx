"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { site } from "@/config/site";
import { DURATION, SLIDES, TOTAL, WhyNotBuildRenderer } from "./why-not-build-renderer";

export function WhyNotBuildCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const elapsedRef = useRef(0);
  const pausedRef = useRef(false);
  const redrawRef = useRef<(() => void) | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !host || !context) return;

    const sage = new Image();
    const ribbon = new Image();
    sage.src = "/assets/sage-laboratory.jpg";
    ribbon.src = "/assets/ribbon-laboratory.jpg";
    const renderer = new WhyNotBuildRenderer(context, canvas, { sage, ribbon });
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    pausedRef.current = motion.matches;
    if (motion.matches) elapsedRef.current = 1900;

    let frame = 0;
    let previous = performance.now();
    let lastDrawn = -1;
    let lastIndex = -1;
    let visible = true;
    let disposed = false;

    const draw = () => {
      renderer.draw(elapsedRef.current);
      lastDrawn = elapsedRef.current;
      const index = Math.floor(elapsedRef.current / DURATION);
      if (index !== lastIndex) {
        lastIndex = index;
        setCurrent(index);
      }
    };
    redrawRef.current = draw;

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
      pausedRef.current = motion.matches;
      if (motion.matches) {
        elapsedRef.current = Math.floor(elapsedRef.current / DURATION) * DURATION + 1900;
        draw();
      }
      previous = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);
    motion.addEventListener("change", onMotion);

    const animate = (now: number) => {
      if (!pausedRef.current && visible && !document.hidden) {
        elapsedRef.current = (elapsedRef.current + Math.max(0, Math.min(now - previous, 80))) % TOTAL;
      }
      previous = now;
      if (lastDrawn !== elapsedRef.current) draw();
      frame = requestAnimationFrame(animate);
    };

    // Draw even if one image fails; typography and procedural motion still work.
    Promise.allSettled([sage.decode(), ribbon.decode()]).then(() => {
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
      redrawRef.current = null;
    };
  }, []);

  const select = (index: number) => {
    elapsedRef.current = index * DURATION + 850;
    redrawRef.current?.();
    setCurrent(index);
  };

  return (
    <div ref={hostRef} className="mx-auto w-full lg:max-w-[360px] font-[Arial,Helvetica,sans-serif]">
      <div
        role="group"
        tabIndex={0}
        aria-label="Why Not Build: six territories"
        className="relative aspect-[360/486] w-full overflow-hidden rounded-[27px] bg-[#121311] shadow-[0_17px_26px_-20px_rgba(43,57,40,.31),0_2px_3px_rgba(21,29,21,.08)] ring-1 ring-inset ring-white/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7efd9]"
        onKeyDown={(event) => {
          if (event.key === " " && event.target === event.currentTarget) {
            event.preventDefault();
            pausedRef.current = !pausedRef.current;
          }
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            select((current + (event.key === "ArrowLeft" ? 5 : 1)) % SLIDES.length);
          }
        }}
      >
        <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
        <a href={site.stories} aria-label="Read Why Not Build" className="absolute right-[5.8%] top-[3.3%] h-[8%] w-[8%] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7efd9]" />
        <nav aria-label="Choose a territory" className="absolute inset-x-[10%] bottom-[4.4%] flex h-[22px] gap-[6px]">
          {SLIDES.map((slide, index) => (
            <Button key={slide.category} variant="ghost" type="button" aria-label={`Show ${slide.category}`} aria-current={current === index ? "step" : undefined} onClick={() => select(index)} className="h-full min-w-0 flex-1 rounded-sm bg-transparent p-0 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#e7efd9]" />
          ))}
        </nav>
        <section className="sr-only">
          <h3>Why Not Build</h3>
          <p>Essy&apos;s public laboratory for questions worth investigating and things worth building.</p>
          <p>Instead of accepting the default, what could we understand, test, or build differently?</p>
          <ul>{SLIDES.map((slide) => <li key={slide.category}>{slide.category === "A better you" ? "Build a better you" : `Build better ${slide.category.toLowerCase()}`}. {slide.title.join(" ")} {slide.body.join(" ")}</li>)}</ul>
        </section>
      </div>
    </div>
  );
}
