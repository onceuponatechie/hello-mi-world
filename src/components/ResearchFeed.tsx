"use client";

import Link from "next/link";
import { useState } from "react";
import { ResearchVisual } from "@/components/ResearchVisual";
import type { Study } from "@/content/research";

export type StudyCard = Pick<Study,"slug"|"title"|"summary"|"topic"|"subject"|"visual"> & {sourceCount: number};
const filters=["All notes","Market notes","Product studies","Systems"] as const;

export function ResearchFeed({entries}: {entries: StudyCard[]}) {
  const [filter,setFilter]=useState<(typeof filters)[number]>("All notes");
  const [query,setQuery]=useState("");
  const visible=entries.filter(entry=>(filter==="All notes" || entry.topic===filter)&&`${entry.title} ${entry.subject} ${entry.topic}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section className="vault-library" aria-labelledby="vault-library-heading">
    <div className="vault-library-top"><h2 id="vault-library-heading" className="section-heading">Open a question.</h2><p aria-live="polite">{visible.length} {visible.length===1?"study":"studies"}</p></div>
    <div className="vault-controls"><div role="group" aria-label="Filter research">{filters.map(item=><button type="button" key={item} aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}</button>)}</div><label className="sr-only" htmlFor="vault-search">Search research</label><input id="vault-search" type="search" placeholder="Find a subject" value={query} onChange={event=>setQuery(event.target.value)} /></div>
    {visible.length ? <div className="vault-grid">{visible.map(entry=><article key={entry.slug} className={`vault-card ${entry.visual==="internet" && filter==="All notes" && !query ? "vault-card-featured":""}`}>
      <Link className="vault-card-visual" href={`/research-vault/${entry.slug}`} aria-label={`Read ${entry.title}`}><ResearchVisual kind={entry.visual} compact /></Link>
      <div className="vault-card-copy"><span>{entry.topic} / {entry.subject}</span><h3><Link href={`/research-vault/${entry.slug}`}>{entry.title}</Link></h3><p>{entry.summary}</p><div><span>{entry.sourceCount} primary sources · 13 Oct 2026</span><Link href={`/research-vault/${entry.slug}`} className="hero-secondary">Read the study</Link></div></div>
    </article>)}</div>:<div className="vault-empty"><h3>No study matches that yet.</h3><p>Try a company, a subject or another category.</p><button type="button" className="hero-secondary" onClick={()=>{setFilter("All notes");setQuery("");}}>Show all studies</button></div>}
    <p className="vault-library-note">Public-source research. Original readings, linked evidence, and the limits of what each study can tell us.</p>
  </section>;
}
