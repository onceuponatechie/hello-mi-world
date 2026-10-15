"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { personal } from "@/content/personal";

const slideNames = ["Book cover", "Reading note", "A line from the book"];

function CurrentRead() {
  const cardRef = useRef<HTMLElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const book = personal.currentRead;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    let intersecting = false;
    const update = () => setVisible(intersecting && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      intersecting = Boolean(entry?.isIntersecting);
      update();
    }, { threshold: 0.3 });
    observer.observe(card);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);

  const autoplay = visible && !paused && !hovered && !reduceMotion;
  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => setSlide(current => (current + 1) % slideNames.length), 7500);
    return () => window.clearTimeout(timer);
  }, [autoplay, slide]);

  function chooseSlide(next: number) {
    setPaused(true);
    setSlide((next + slideNames.length) % slideNames.length);
  }

  function startSwipe(event: PointerEvent<HTMLElement>) {
    if ((event.target as Element).closest("button") || event.button !== 0) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function endSwipe(event: PointerEvent<HTMLElement>) {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 38 && Math.abs(dy) < 65) chooseSlide(slide + (dx < 0 ? 1 : -1));
  }

  return <article ref={cardRef} className="personal-card personal-reading" tabIndex={0} aria-label="Current read and reading notes" aria-roledescription="carousel"
    onPointerDown={startSwipe} onPointerUp={endSwipe} onPointerCancel={() => { pointerStart.current = null; }}
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocus={event => { if (event.target === event.currentTarget) setPaused(true); }}
    onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); chooseSlide(slide + (event.key === "ArrowRight" ? 1 : -1)); } }}>
    <span className="personal-eyebrow">Currently reading</span>
    <div className="personal-reading-stage" aria-live={autoplay ? "off" : "polite"} aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={slide} className={`personal-reading-slide personal-reading-slide-${slide}`} role="group" aria-roledescription="slide" aria-label={`${slide + 1} of 3: ${slideNames[slide]}`}
          initial={{ opacity: 0, x: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: reduceMotion ? 0 : -12 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
          {slide === 0 ? <><h3>{book.title}</h3><span className="personal-book-author">{book.author}</span><img src={book.cover} alt={`${book.title} by ${book.author}`} width={book.width} height={book.height} loading="lazy" draggable={false} /></> : slide === 1 ? <><span className="personal-reading-label">In the margin</span><p className="personal-reading-note">{book.note}</p><span className="personal-note-credit">On {book.title}</span></> : <><span className="personal-reading-label">A line to keep</span><blockquote><p>“{book.quote}”</p><cite title={book.source}>{book.author}<span>{book.title}</span></cite></blockquote></>}
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="personal-reading-controls"><div role="group" aria-label="Choose a reading slide">{slideNames.map((name, index) => <button key={name} type="button" aria-label={`Show ${name.toLowerCase()}`} aria-pressed={slide === index} onFocus={() => setPaused(true)} onClick={() => chooseSlide(index)}><span /></button>)}</div><button type="button" className="personal-reading-pause" onClick={() => setPaused(current => !current)} aria-label={paused ? "Play book slides" : "Pause book slides"}>{paused ? <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="m7 4 9 6-9 6V4Z" /></svg> : <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="3" height="12" rx="1" /><rect x="12" y="4" width="3" height="12" rx="1" /></svg>}</button></div>
  </article>;
}

export function PersonalSection() {
  return <section id="personal" className="personal-section" aria-label="Books, music and a few other interests">
    <div className="personal-grid">
      <CurrentRead />
      <article className="personal-card personal-shelf"><h3 className="personal-eyebrow">Before this</h3><div className="personal-books">{personal.previousReads.map(book => <figure key={book.title}><div><img src={book.cover} alt={`${book.title} by ${book.author}`} width={book.width} height={book.height} loading="lazy" /></div><figcaption>{book.title}</figcaption></figure>)}</div></article>
      <article className="personal-card personal-music"><div className="personal-music-heading"><div><span className="personal-eyebrow">On repeat</span><h3>Press play.</h3></div><span className="personal-spotify-label">Spotify</span></div><iframe src={`https://open.spotify.com/embed/playlist/${personal.playlist.spotifyId}?utm_source=generator&theme=0`} title={`${personal.playlist.title} playlist on Spotify`} width="100%" height="352" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /><p className="personal-music-caption">Good music. Open tabs.</p></article>
      <article className="personal-card personal-fact"><h3 className="personal-eyebrow">Did you know?</h3><p className="personal-fact-word">{personal.fact.title}</p><p className="personal-fact-copy">{personal.fact.text}</p><cite title={personal.fact.source}>{personal.fact.sourceName}</cite></article>
      <div className="personal-card personal-one-liner"><p>{personal.oneLiner}</p><span aria-hidden="true">*</span></div>
    </div>
  </section>;
}
