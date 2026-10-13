"use client";

import Link from "next/link";
import { useState } from "react";
import type { StoryCard, StoryCategory } from "@/content/stories";

export function StoriesFeed({ entries, categories }: { entries: StoryCard[]; categories: readonly StoryCategory[] }) {
  const [category, setCategory] = useState<StoryCategory | "All stories">("All stories");
  const [query, setQuery] = useState("");
  const visible = entries.filter(story => (category === "All stories" || story.category === category) && `${story.title} ${story.subtitle} ${story.category}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <section className="stories-library" aria-label="Story collection">
    <div className="stories-controls">
      <div className="stories-filters" role="group" aria-label="Filter stories">{(["All stories", ...categories] as const).map(item => <button type="button" key={item} aria-pressed={item === category} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <label className="sr-only" htmlFor="stories-search">Search stories</label><input id="stories-search" type="search" placeholder="Find a story" value={query} onChange={event => setQuery(event.target.value)} />
    </div>
    <p className="stories-count" aria-live="polite">{visible.length} {visible.length === 1 ? "story" : "stories"}</p>
    {visible.length ? <div className="stories-grid">{visible.map(story => <article key={story.slug} className={`story-index-card ${story.slug === entries[0].slug && category === "All stories" && !query ? "story-index-featured" : ""}`}>
      <Link className="story-index-cover" href={`/stories/${story.slug}`} aria-label={`Read ${story.title}`}><img src={story.cover} alt={story.coverAlt} width={story.coverWidth} height={story.coverHeight} loading={story.slug === entries[0].slug ? "eager" : "lazy"} /></Link>
      <div className="story-index-copy"><span className="story-category">{story.category}</span><h2><Link href={`/stories/${story.slug}`}>{story.title}</Link></h2><p>{story.subtitle}</p><div className="story-index-meta"><time dateTime={story.date}>{new Intl.DateTimeFormat("en-GB", {day:"numeric", month:"short", year:"numeric", timeZone:"UTC"}).format(new Date(`${story.date}T00:00:00Z`))}</time><span>{story.readMinutes} min read</span></div><Link href={`/stories/${story.slug}`} className="story-read">Read the story</Link></div>
    </article>)}</div> : <div className="stories-empty"><h2>No story matches that yet.</h2><p>Try another subject or category.</p><button type="button" className="hero-secondary" onClick={() => {setCategory("All stories"); setQuery("");}}>Show all stories</button></div>}
  </section>;
}
