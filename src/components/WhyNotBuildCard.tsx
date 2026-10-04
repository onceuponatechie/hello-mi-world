"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { site } from "@/config/site";
const sageLaboratory = "/assets/sage-laboratory.jpg";
const ribbonLaboratory = "/assets/ribbon-laboratory.jpg";

const WIDTH = 360;
const HEIGHT = 486;
const SCREEN_MS = 3800;
const LOOP_MS = SCREEN_MS * 6;

type Screen = {
  category: string;
  lead?: string;
  title: string;
  body: readonly [string, string];
  dark?: boolean;
  image?: "sage" | "ribbon";
};

const screens: readonly Screen[] = [
  { category: "Careers", lead: "06", title: "Six territories. One instinct.", body: ["Understand what's changing.", "Build what comes next."], dark: true },
  { category: "Businesses", title: "Make room for a better way.", body: ["Small experiments. Real possibilities.", "Build a business on your own terms."], image: "sage" },
  { category: "Products", lead: "01", title: "Start with a better question.", body: ["What could work differently?", "Make something worth finding out."], dark: true },
  { category: "Systems", title: "Change how the pieces connect.", body: ["Look beneath the familiar.", "Build systems that make more possible."], image: "ribbon" },
  { category: "Ideas", lead: "What if?", title: "Curiosity is a place to begin.", body: ["Question the default. Test an idea.", "Keep the part that changes something."], dark: true },
  { category: "A better you", title: "You are a work in possibility.", body: ["Learn. Make. Become.", "Why not build something different?"], image: "sage" },
] as const;

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const easeOut = (value: number) => 1 - Math.pow(1 - clamp(value), 3);
const easeInOut = (value: number) => {
  const u = clamp(value);
  return u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
};

function cover(ctx: CanvasRenderingContext2D, image: HTMLImageElement, x: number, y: number, width: number, height: number, anchorX = 0.5, anchorY = 0.5, zoom = 1) {
  const ratio = Math.max(width / image.width, height / image.height) * zoom;
  const drawWidth = image.width * ratio;
  const drawHeight = image.height * ratio;
  ctx.drawImage(image, x + (width - drawWidth) * anchorX, y + (height - drawHeight) * anchorY, drawWidth, drawHeight);
}

function mediaPath(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.moveTo(25.65, 2);
  ctx.bezierCurveTo(50.35, -2, 74.1, 1, 81.7, 5);
  ctx.bezierCurveTo(102.6, 14, 96.9, 32.43, 76, 39.95);
  ctx.bezierCurveTo(56.05, 44.65, 33.25, 51, 17.1, 46);
  ctx.bezierCurveTo(-1.9, 45, -3.8, 11, 10.45, 5);
  ctx.closePath();
}

function drawBackground(ctx: CanvasRenderingContext2D, index: number, local: number, x: number, sage: HTMLImageElement, ribbon: HTMLImageElement) {
  const screen = screens[index];
  ctx.save();
  ctx.translate(x, 0);
  ctx.beginPath();
  ctx.rect(0, 0, WIDTH, HEIGHT);
  ctx.clip();

  if (screen.dark) {
    ctx.fillStyle = "#121311";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    const driftX = Math.sin((local + index * 410) / 2400) * 18;
    const driftY = Math.cos((local + index * 310) / 2800) * 12;
    const glow = ctx.createRadialGradient(150 + driftX, 28 + driftY, 8, 150 + driftX, 28 + driftY, 210);
    glow.addColorStop(0, "#afc996"); glow.addColorStop(0.16, "#789565"); glow.addColorStop(0.42, "#3a5234"); glow.addColorStop(0.72, "#20271c"); glow.addColorStop(1, "#121311");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, WIDTH, 270);
    const strokes = [["#d6ebbd", 22, -25], ["#a7c496", 32, 45], ["#536b47", 42, 110]] as const;
    ctx.save();
    ctx.globalAlpha = 0.37;
    ctx.filter = "blur(22px)";
    for (const [color, width, offset] of strokes) {
      ctx.beginPath();
      ctx.moveTo(-50, 110 + offset + driftY);
      ctx.bezierCurveTo(65 + driftX, -40 + offset, 235 + driftX, 220 + offset, 420, 35 + offset);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
    }
    ctx.restore();
    const fade = ctx.createLinearGradient(0, 70, 0, HEIGHT);
    fade.addColorStop(0, "rgba(17,18,15,0)"); fade.addColorStop(0.6, "rgba(18,19,17,.81)"); fade.addColorStop(1, "#121311");
    ctx.fillStyle = fade;
    ctx.fillRect(0, 70, WIDTH, HEIGHT - 70);
  } else {
    const image = screen.image === "ribbon" ? ribbon : sage;
    const anchorX = index === 5 ? 0.76 : 0.5;
    const anchorY = index === 5 ? 0.35 : 0.5;
    ctx.save();
    if (index === 3) ctx.filter = `blur(${3.8 + 1.2 * Math.sin(local / 2200)}px)`;
    if (index === 5) ctx.filter = "blur(1.1px)";
    cover(ctx, image, -8, -8, 376, 502, anchorX, anchorY, 1.08 + local / 100000);
    ctx.restore();
    ctx.globalCompositeOperation = "color";
    ctx.globalAlpha = index === 1 ? 0.66 : 0.25;
    ctx.fillStyle = index === 1 ? "#bcd7a4" : index === 3 ? "#929f86" : "#aabd94";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    if (index === 1) { ctx.fillStyle = "rgba(178,210,149,.19)"; ctx.fillRect(0, 0, WIDTH, HEIGHT); }
    const shade = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    shade.addColorStop(0, "rgba(10,18,13,.27)"); shade.addColorStop(0.35, "rgba(11,16,12,.02)"); shade.addColorStop(0.64, "rgba(14,18,13,.19)"); shade.addColorStop(1, "rgba(16,20,16,.93)");
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }
  ctx.restore();
}

function drawHeader(ctx: CanvasRenderingContext2D, index: number, offset: number, alpha: number) {
  const category = screens[index].category;
  ctx.save();
  ctx.translate(offset * 0.42, 0);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "rgba(237,245,210,.19)"; ctx.strokeStyle = "rgba(239,248,221,.2)"; ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.arc(29, 30, 13.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = "rgba(242,247,228,.78)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(21, 30); ctx.lineTo(37, 30); ctx.moveTo(29, 22); ctx.lineTo(29, 38); ctx.moveTo(23.5, 24.5); ctx.lineTo(34.5, 35.5); ctx.moveTo(34.5, 24.5); ctx.lineTo(23.5, 35.5); ctx.stroke();
  ctx.font = "10.5px Arial"; ctx.fillStyle = "#e2e8d7"; ctx.fillText("Why Not Build", 49, 33);
  ctx.font = "9.5px Arial";
  const capsuleWidth = ctx.measureText(category).width + 26;
  const capsuleX = 307 - capsuleWidth;
  ctx.strokeStyle = "rgba(245,247,226,.24)";
  ctx.beginPath(); ctx.roundRect(capsuleX, 16, capsuleWidth, 28, 14); ctx.stroke();
  ctx.fillStyle = "#e2e8d2"; ctx.fillText(category, capsuleX + 12, 33);
  ctx.beginPath(); ctx.arc(325, 30, 14, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = "rgba(245,247,238,.72)"; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(321, 34); ctx.lineTo(329, 26); ctx.moveTo(323, 26); ctx.lineTo(329, 26); ctx.lineTo(329, 32); ctx.stroke();
  ctx.restore();
}

function drawCopy(ctx: CanvasRenderingContext2D, index: number, local: number, x: number, alphaOverride = 1, sage?: HTMLImageElement, ribbon?: HTMLImageElement) {
  const screen = screens[index];
  const entering = easeOut(local / 650);
  const leaving = easeInOut((local - 2780) / 640);
  const offset = x + (30 * (1 - entering)) - (135 * leaving);
  const alpha = entering * (1 - leaving) * alphaOverride;
  drawHeader(ctx, index, x + (offset - x) * 0.42, alpha);
  if (alpha <= 0.001) return;
  ctx.save(); ctx.translate(offset, 0); ctx.globalAlpha = alpha;
  if (screen.dark) {
    if (screen.lead === "What if?") {
      ctx.font = "49px Arial"; ctx.fillStyle = "#f2f1e9"; ctx.fillText(screen.lead, 30, 184);
      ctx.fillStyle = "#d7cde3"; ctx.beginPath(); ctx.arc(222, 171, 3.2, 0, Math.PI * 2); ctx.fill();
    } else {
      const target = Number(screen.lead);
      const countDuration = target === 6 ? 1420 : 1200;
      const value = Math.round(target * easeOut((local - 160) / countDuration));
      ctx.font = "68px Arial"; ctx.fillStyle = "#f2f1e9"; ctx.fillText(String(value).padStart(2, "0"), 30, 184);
      ctx.strokeStyle = "rgba(242,241,233,.6)"; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(121, 146); ctx.lineTo(133, 134); ctx.moveTo(126, 134); ctx.lineTo(133, 134); ctx.lineTo(133, 141); ctx.stroke();
    }
    ctx.font = "600 12.8px Arial"; ctx.fillStyle = "#f3f3e9"; ctx.fillText(screen.title, 30, 268);
    ctx.font = "12.2px Arial"; ctx.fillStyle = "#adb1a6"; ctx.fillText(screen.body[0], 30, 285); ctx.fillText(screen.body[1], 30, 301);
    if (sage && ribbon) {
      const mediaAlpha = easeOut((local - 250) / 700) * (1 - leaving);
      const mediaRise = 9 * (1 - easeOut((local - 250) / 700));
      [[sage, 30, 0.025, "rgba(201,234,177,.08)"], [ribbon, 137, -0.045, "rgba(170,160,188,.09)"]].forEach(([image, mediaX, rotation, tint]) => {
        ctx.save(); ctx.globalAlpha = mediaAlpha; ctx.translate(Number(mediaX) + 47.5, 357.5 + mediaRise); ctx.rotate(Number(rotation)); ctx.translate(-47.5, -23.5); mediaPath(ctx); ctx.clip(); cover(ctx, image as HTMLImageElement, -4, -4, 103, 55, 0.5, 0.34, 1.12 + Math.sin(local / 3300) * 0.04); ctx.fillStyle = String(tint); ctx.fillRect(-4, -4, 103, 55); ctx.restore();
      });
    }
  } else {
    ctx.font = "600 12.6px Arial"; ctx.fillStyle = "#fbf9f0"; ctx.fillText(screen.title, 30, 377);
    ctx.font = "12px Arial"; ctx.fillStyle = "#d2d7c7"; ctx.fillText(screen.body[0], 30, 395); ctx.fillText(screen.body[1], 30, 411);
  }
  ctx.restore();
}

export function WhyNotBuildCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const elapsedRef = useRef(0);
  const playingRef = useRef(true);
  const visibleRef = useRef(true);
  const [playing, setPlaying] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => { playingRef.current = playing; }, [playing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const sage = new Image(); const ribbon = new Image();
    sage.src = sageLaboratory; ribbon.src = ribbonLaboratory;
    let frame = 0; let previous = performance.now(); let ready = false; let disposed = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { elapsedRef.current = 1900; setPlaying(false); }
    const observer = new IntersectionObserver(([entry]) => { visibleRef.current = entry?.isIntersecting ?? true; }, { threshold: 0.05 });
    observer.observe(host);
    const visibility = () => { visibleRef.current = !document.hidden && host.getBoundingClientRect().bottom > 0 && host.getBoundingClientRect().top < innerHeight; };
    document.addEventListener("visibilitychange", visibility);

    const render = (now: number) => {
      const delta = Math.min(now - previous, 60); previous = now;
      if (ready && playingRef.current && visibleRef.current) elapsedRef.current = (elapsedRef.current + delta) % LOOP_MS;
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const displayWidth = canvas.clientWidth || WIDTH;
      const displayHeight = canvas.clientHeight || HEIGHT;
      const pixelWidth = Math.round(displayWidth * dpr);
      const pixelHeight = Math.round(displayHeight * dpr);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) { canvas.width = pixelWidth; canvas.height = pixelHeight; }
      const scaleX = displayWidth / WIDTH;
      const scaleY = displayHeight / HEIGHT;
      context.setTransform(dpr * scaleX, 0, 0, dpr * scaleY, 0, 0); context.clearRect(0, 0, WIDTH, HEIGHT);
      if (ready) {
        const index = Math.floor(elapsedRef.current / SCREEN_MS) % 6;
        const local = elapsedRef.current % SCREEN_MS;
        const travel = easeInOut((local - 3030) / 770);
        const next = (index + 1) % 6;
        drawBackground(context, index, local, -WIDTH * travel, sage, ribbon);
        if (travel > 0) drawBackground(context, next, 0, WIDTH * (1 - travel), sage, ribbon);
        drawCopy(context, index, local, -WIDTH * travel, 1, sage, ribbon);
        if (travel > 0) drawHeader(context, next, WIDTH * (1 - travel), 0.5 * travel);
        for (let i = 0; i < 6; i++) {
          const x = 40 + i * 47;
          context.fillStyle = "rgba(243,245,234,.2)"; context.beginPath(); context.roundRect(x, 451, 38, 2, 1); context.fill();
          if (i === index) { context.fillStyle = "#e7efd9"; context.beginPath(); context.roundRect(x, 451, Math.max(2, 38 * local / SCREEN_MS), 2, 1); context.fill(); }
        }
        setCurrent((value) => value === index ? value : index);
      }
      frame = requestAnimationFrame(render);
    };
    Promise.all([sage.decode(), ribbon.decode()]).then(() => {
      if (disposed) return;
      ready = true; frame = requestAnimationFrame(render);
    }).catch(() => { canvas.setAttribute("aria-hidden", "false"); canvas.setAttribute("aria-label", "Why Not Build: Questions worth investigating and things worth building."); });
    return () => { disposed = true; cancelAnimationFrame(frame); observer.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);

  const select = (index: number) => { elapsedRef.current = index * SCREEN_MS + 850; setCurrent(index); };
  const toggle = () => setPlaying((value) => !value);

  return (
    <div ref={hostRef} className="mx-auto w-full lg:max-w-[360px] font-[Arial,Helvetica,sans-serif]">
      <div className="relative aspect-[360/486] w-full overflow-hidden rounded-[27px] bg-[#121311] shadow-[0_17px_26px_-20px_rgba(43,57,40,.31),0_2px_3px_rgba(21,29,21,.08)] ring-1 ring-inset ring-white/[0.13]" onKeyDown={(event) => { if (event.key === " ") { event.preventDefault(); toggle(); } if (event.key === "ArrowLeft") select((current + 5) % 6); if (event.key === "ArrowRight") select((current + 1) % 6); }}>
        <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
        <a href={site.stories} aria-label="Read Why Not Build" className="absolute right-[5.8%] top-[3.3%] h-[8%] w-[8%] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7efd9]" />
        <Button variant="ghost" type="button" aria-label={playing ? "Pause animation" : "Play animation"} onClick={toggle} className="absolute right-[15%] top-[3.3%] h-[6%] w-[24%] rounded-full bg-transparent p-0 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#e7efd9]" />
        <div className="absolute inset-x-[10%] bottom-[4.4%] flex h-[22px] gap-[6px]">
          {screens.map((screen, index) => <Button key={screen.category} variant="ghost" type="button" aria-label={`Show ${screen.category}`} aria-current={current === index ? "true" : undefined} onClick={() => select(index)} className="h-full min-w-0 flex-1 rounded-sm bg-transparent p-0 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#e7efd9]" />)}
        </div>
        <section className="sr-only" aria-live="polite"><h3>Why Not Build</h3><p>Essy&apos;s public laboratory for questions worth investigating and things worth building.</p><h4>{screens[current].category}</h4><p>{screens[current].title} {screens[current].body.join(" ")}</p></section>
      </div>
    </div>
  );
}
