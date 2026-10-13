import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { stories, getStory, readingMinutes, storyDate, storyBlocks } from "@/content/stories";
import { getProduct } from "@/content/products";

export const dynamicParams = false;
export function generateStaticParams() { return stories.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{slug: string}> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return { title: `${story.title} — Why Not Build — Essy Udeme`, description: story.subtitle, alternates: { canonical: `/stories/${slug}` }, openGraph: { title: story.title, description: story.subtitle, type: "article", publishedTime: `${story.date}T00:00:00Z`, authors: ["Essy Udeme"], section: story.category, images: [{url:story.cover, width:story.coverWidth, height:story.coverHeight, alt:story.coverAlt}] } };
}

export default async function StoryPage({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();
  const resource = getProduct(story.resourceSlug);
  if (!resource?.download) throw new Error(`Story ${slug} needs a ready downloadable resource.`);
  const related = stories.filter(item => item.slug !== slug).slice(0, 2);
  return <div id="top" tabIndex={-1} className="site-base story-page focus:outline-none">
    <div className="inner-nav"><Nav /></div>
    <main>
      <nav className="story-breadcrumb" aria-label="Breadcrumb"><Link href="/stories">Stories</Link><span aria-hidden="true">/</span><span>Why Not Build</span></nav>
      <article>
        <header className="story-header"><Link href="/stories" className="story-category">{story.category}</Link><h1>{story.title}</h1><p>{story.subtitle}</p><div className="story-byline"><span>Essy Udeme</span><time dateTime={story.date}>{storyDate(story.date)}</time><span>{readingMinutes(story.body)} min read</span></div></header>
        <figure className="story-cover"><img src={story.cover} alt={story.coverAlt} width={story.coverWidth} height={story.coverHeight} loading="eager" /></figure>
        <div className="story-reading"><span className="story-publication">Why Not Build / Stories by Essy</span><div className="story-body">{storyBlocks(story).map(block => block.heading ? <h2 key={block.id} id={block.id}>{block.text}</h2> : <p key={block.id}>{block.text}</p>)}</div><span className="story-endmark" aria-label="End of story">wnb.</span></div>
        <section className="story-resource" aria-labelledby="story-resource-heading"><div className="story-resource-preview"><img src={resource.cover.src} alt={`${resource.name} cover`} width={resource.cover.width} height={resource.cover.height} loading="lazy" /></div><div><p className="story-resource-label">Take something useful / Free resource</p><h2 id="story-resource-heading">{resource.name}</h2><p>{story.resourceReason}</p><div className="story-resource-actions"><a href={resource.download.href} className="hero-primary" download>{resource.download.label}</a><Link href={`/tools-and-templates/${resource.slug}`} className="story-resource-details">See what’s inside</Link></div><span>{resource.download.format} · No email required</span><Link className="story-resource-library" href="/tools-and-templates">Also in Tools & Templates</Link></div></section>
      </article>
      <section className="story-related" aria-labelledby="story-related-heading"><div><h2 id="story-related-heading" className="section-heading">Keep reading.</h2><Link href="/stories" className="hero-secondary">All stories</Link></div><div className="story-related-grid">{related.map(item => <article key={item.slug}><Link href={`/stories/${item.slug}`}><img src={item.cover} alt={item.coverAlt} width={item.coverWidth} height={item.coverHeight} loading="lazy" /><span>{item.category}</span><h3>{item.title}</h3><p>{readingMinutes(item.body)} min read</p></Link></article>)}</div></section>
    </main>
    <Footer />
  </div>;
}
