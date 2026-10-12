import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { BuildArtifact } from "@/components/BuildArtifact";
import { builds, getBuild } from "@/content/builds";
import type { CSSProperties } from "react";

export const dynamicParams = false;
export function generateStaticParams() { return builds.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const build = getBuild(slug);
  if (!build) return {};
  return { title: `${build.name} — The Builds — Essy Udeme`, description: build.summary, alternates: { canonical: `/builds/${slug}` }, openGraph: { title: build.name, description: build.summary, images: [{ url: build.image, alt: `${build.name} concept cover` }] } };
}

export default async function BuildPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const build = getBuild(slug);
  if (!build) notFound();
  const index = builds.findIndex(item => item.slug === slug);
  const next = builds[(index + 1) % builds.length];
  return <div id="top" tabIndex={-1} className="site-base build-detail-page focus:outline-none" style={{ "--build-tint": build.color } as CSSProperties}>
    <div className="inner-nav"><Nav /></div>
    <main>
      <header className="build-detail-intro">
        <nav aria-label="Breadcrumb"><Link href="/builds">The Builds</Link><span aria-hidden="true">/</span><span>{build.name}</span></nav>
        <p className="build-status">Concept study · {String(index + 1).padStart(2, "0")}</p>
        <h1>{build.name}</h1><p className="build-detail-summary">{build.summary}</p>
        <ul className="build-tags" aria-label="What this Build combines">{build.disciplines.map(item => <li key={item}>{item}</li>)}</ul>
      </header>
      <figure className="build-detail-cover"><img src={build.image} alt={`${build.name} concept cover`} width={1024} height={1024} fetchPriority="high" /><figcaption>Concept cover / {build.name}</figcaption></figure>
      <div className="build-brief"><div><span>The question</span><p>{build.question}</p></div><div><span>The proposed output</span><p>{build.output}</p></div><div><span>The status</span><p>Self-initiated concept.<br />Research and testing still to do.</p></div></div>
      <div className="build-story">
        <nav className="build-contents" aria-label="Build sections"><span>Inside this build</span>{build.stages.map((stage, i) => <a key={stage.id} href={`#${stage.id}`}><span>{String(i + 1).padStart(2, "0")}</span>{stage.label}</a>)}</nav>
        <div className="build-story-body">
          {build.stages.map((stage, i) => <section id={stage.id} key={stage.id} className="build-chapter" aria-labelledby={`${stage.id}-heading`}>
            <p className="build-chapter-label"><span>{String(i + 1).padStart(2, "0")}</span>{stage.label}</p>
            <h2 id={`${stage.id}-heading`}>{stage.title}</h2>
            {stage.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {stage.points && <ul>{stage.points.map(point => <li key={point}>{point}</li>)}</ul>}
            {stage.id === "making" && <figure className="build-specimen"><BuildArtifact slug={slug} /><figcaption>Proposed screen direction. Sample content for this concept study.</figcaption></figure>}
          </section>)}
        </div>
      </div>
      <div className="build-next"><div><p>Another system in the making</p><h2><Link href={`/builds/${next.slug}`}>{next.name}</Link></h2><Link href={`/builds/${next.slug}`} className="hero-primary">Next build</Link><Link href="/builds" className="build-back">All builds</Link></div><Link href={`/builds/${next.slug}`} aria-label={`Read ${next.name}`}><img src={next.image} alt="" width={1024} height={1024} loading="lazy" /></Link></div>
    </main>
    <Footer />
  </div>;
}
