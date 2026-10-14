"use client";

import { useState } from "react";
import Link from "next/link";
import { ToolArtwork } from "@/components/ToolArtwork";
import type { Product } from "@/content/products";

export type ProductCardData = Pick<Product, "slug" | "name" | "format" | "category" | "status" | "cover" | "color" | "download">;
const filters = ["All", "Research", "Plan & decide", "Make & share", "Ready to download"] as const;

export function ToolsFeed({ products }: { products: ProductCardData[] }) {
  const readyCount = products.filter(product => product.status === "ready").length;
  const plannedCount = products.length - readyCount;
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");
  const visible = products.filter(product =>
    (filter === "All" || (filter === "Ready to download" ? product.status === "ready" : product.category === filter)) &&
    `${product.name} ${product.format} ${product.category}`.toLowerCase().includes(query.trim().toLowerCase())
  );
  return <section className="tools-library" aria-labelledby="tools-library-heading">
    <div className="tools-library-title"><h2 id="tools-library-heading" className="section-heading">For your next idea.</h2><p aria-live="polite">{visible.length} {visible.length === 1 ? "product" : "products"}</p></div>
    <div className="tools-controls">
      <div className="tools-filters" role="group" aria-label="Filter products">{filters.map(item => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
      <div className="tools-search"><label htmlFor="tools-search" className="sr-only">Search tools and templates</label><input id="tools-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Find a useful thing" /></div>
    </div>
    {visible.length ? <ul className="tools-masonry">
      {visible.map(product => <li key={product.slug} className="tool-pin">
        {product.status === "ready" ? <>
          <Link href={`/tools-and-templates/${product.slug}`} className="tool-pin-main" aria-label={`Read about ${product.name}`}><ToolArtwork {...product} /><h3>{product.name}</h3></Link>
          <div className="tool-pin-meta"><span>{product.format}</span><a className="tool-pin-download" href={product.download!.href} download aria-label={`Download ${product.name}`}>Download</a></div>
        </> : <article className="tool-pin-planned"><div className="tool-pin-cover"><ToolArtwork {...product} /><span className="tool-pin-status">Planned</span></div><h3>{product.name}</h3><div className="tool-pin-meta"><span>{product.format}</span></div></article>}
      </li>)}
    </ul> : <div className="tools-empty"><h3>No match yet.</h3><p>Try a product name or a format, such as PDF or Notion.</p><button type="button" className="hero-secondary" onClick={() => { setQuery(""); setFilter("All"); }}>Show all products</button></div>}
    <p className="tools-library-note">{readyCount} products are ready to download. The {plannedCount} marked Planned have no download or detail page yet.</p>
  </section>;
}
