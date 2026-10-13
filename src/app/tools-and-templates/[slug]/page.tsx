import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { ToolArtwork } from "@/components/ToolArtwork";
import { getProduct, readyProducts } from "@/content/products";
import { stories } from "@/content/stories";

export const dynamicParams = false;
export function generateStaticParams() { return readyProducts.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug} = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {title: `${product.name} — Tools & Templates — Essy Udeme`, description: product.summary, alternates: {canonical: `/tools-and-templates/${slug}`}};
}

export default async function ProductPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const product = getProduct(slug);
  if (!product?.download || !product.includes || !product.steps || !product.preview) notFound();
  const related = readyProducts.filter(item => item.slug !== slug).slice(0, 2);
  const linkedStories = stories.filter(story => story.resourceSlug === slug);
  return <div id="top" tabIndex={-1} className="site-base tool-detail-page focus:outline-none">
    <div className="inner-nav"><Nav /></div>
    <main>
      <nav className="tool-breadcrumb" aria-label="Breadcrumb"><Link href="/tools-and-templates">Tools & Templates</Link><span aria-hidden="true">/</span><span>{product.name}</span></nav>
      <header className="tool-product-intro">
        <figure><ToolArtwork {...product} detail /><figcaption>{product.format} / {product.name}</figcaption></figure>
        <div className="tool-product-copy"><p className="tool-product-format">{product.format} · Free</p><h1>{product.name}</h1><p>{product.summary}</p><a className="hero-primary" href={product.download.href} download>{product.download.label}</a><span className="tool-download-format">{product.download.format} · No email required</span><p className="tool-product-note">{product.note}</p>{slug === "research-notebook" && <a className="tool-import-help" href="https://www.notion.com/help/import-data-into-notion" target="_blank" rel="noreferrer">Notion’s CSV import guide</a>}</div>
      </header>
      <div className="tool-product-story">
        <p className="tool-product-introduction">{product.introduction}</p>
        <section className="tool-includes" aria-labelledby="tool-includes-heading"><h2 id="tool-includes-heading" className="section-heading">What’s inside.</h2><div>{product.includes.map((item, i) => <article key={item.title}><span>{String(i+1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
        <section className="tool-how" aria-labelledby="tool-how-heading"><h2 id="tool-how-heading" className="section-heading">Make it yours.</h2><ol>{product.steps.map((step, i) => <li key={step.title}><span>{String(i+1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol></section>
        <section className="tool-sample" aria-labelledby="tool-sample-heading"><h2 id="tool-sample-heading" className="section-heading">A look inside.</h2><dl>{product.preview.map(item => <div key={item.heading}><dt>{item.heading}</dt><dd>{item.body}</dd></div>)}</dl><a className="hero-primary" href={product.download.href} download>{product.download.label}</a></section>
        <section className="tool-related" aria-labelledby="tool-related-heading"><div><h2 id="tool-related-heading" className="section-heading">Useful together.</h2><Link href="/tools-and-templates" className="hero-secondary">All tools & templates</Link></div><ul>{related.map(item => <li key={item.slug}><Link href={`/tools-and-templates/${item.slug}`}><ToolArtwork {...item} /><h3>{item.name}</h3><span>{item.format}</span></Link></li>)}</ul></section>
        {linkedStories.length > 0 && <section className="tool-story-links" aria-labelledby="tool-story-links-heading"><h2 id="tool-story-links-heading" className="section-heading">Put it to work.</h2><ul>{linkedStories.map(story => <li key={story.slug}><Link href={`/stories/${story.slug}`}>{story.title}</Link></li>)}</ul></section>}
      </div>
    </main>
    <Footer />
  </div>;
}
