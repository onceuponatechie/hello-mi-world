import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { builds } from "@/content/builds";

export const metadata: Metadata = {
  title: "The Builds — Essy Udeme",
  description: "Five concept studies connecting research, product decisions and making. Read the problem, evidence, decisions, proposed output and learning behind each Build.",
  alternates: { canonical: "/builds" },
};

export default function BuildsPage() {
  return <div id="top" tabIndex={-1} className="site-base builds-page focus:outline-none">
    <div className="inner-nav"><Nav /></div>
    <main>
      <header className="builds-page-intro">
        <p className="builds-page-note">5 builds · concept studies</p>
        <h1>The Builds<span>Systems, in the making.</span></h1>
        <p>A closer look at the questions, decisions and work behind the things I make.</p>
        <div className="builds-method" aria-label="What each Build covers"><span>Problem</span><span>Evidence</span><span>Decisions</span><span>Making</span><span>Result</span><span>Learning</span></div>
      </header>
      <div className="builds-collection">
        {builds.map((build, index) => <article key={build.slug} className={`build-index-card ${index === 0 ? "build-index-featured" : ""}`}>
          <Link href={`/builds/${build.slug}`} className="build-index-image" aria-label={`Read ${build.name}`}>
            <img src={build.image} alt={`${build.name} concept cover`} width={1024} height={1024} loading={index === 0 ? "eager" : "lazy"} />
            <span className="build-index-number">{String(index + 1).padStart(2, "0")}</span>
          </Link>
          <div className="build-index-copy">
            <p className="build-index-format">{build.format}</p><h2><Link href={`/builds/${build.slug}`}>{build.name}</Link></h2>
            <p>{build.summary}</p><ul className="build-tags" aria-label="What this Build combines">{build.disciplines.map(item => <li key={item}>{item}</li>)}</ul>
            <Link href={`/builds/${build.slug}`} className="hero-secondary">See the build</Link>
          </div>
        </article>)}
      </div>
      <p className="builds-content-note">Self-initiated concepts. The pages describe proposed systems and what needs testing.</p>
    </main>
    <Footer />
  </div>;
}
