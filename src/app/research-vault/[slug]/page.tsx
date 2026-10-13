import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { ResearchVisual } from "@/components/ResearchVisual";
import { getStudy, studies, internetUse, internetChange, type Study } from "@/content/research";

export const dynamicParams=false;
export function generateStaticParams(){return studies.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const study=getStudy(slug);return study?{title:`${study.title} — Research Vault — Essy Udeme`,description:study.summary,alternates:{canonical:`/research-vault/${slug}`}}:{};}
function Opening({text,study}:{text:string;study:Study}){return <p>{text.split(/(\[[A-Z]\d+\])/).map((part,i)=>{const source=study.sources.find(s=>`[${s.id}]`===part);return source?<a key={i} href={source.url} className="research-inline-cite" target="_blank" rel="noreferrer" aria-label={`Source ${source.id}: ${source.title}`}>{part}</a>:<Fragment key={i}>{part}</Fragment>;})}</p>;}

export default async function StudyPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const study=getStudy(slug);if(!study)notFound();
  const next=studies[(studies.findIndex(item=>item.slug===slug)+1)%studies.length];
  return <div id="top" tabIndex={-1} className="site-base research-page focus:outline-none"><div className="inner-nav"><Nav /></div><main>
    <header className="research-header"><Link href="/research-vault" className="research-back">All research</Link><div className="research-meta"><span>{study.topic} / {study.subject}</span><span>Source-based study · 13 Oct 2026</span></div><h1>{study.title}</h1><p>{study.summary}</p><dl><div><dt>The question</dt><dd>{study.question}</dd></div><div><dt>Evidence</dt><dd>{study.sources.length} primary sources<br />Methods & limits included</dd></div></dl></header>
    <div className="research-layout"><aside className="research-toc"><span>In this study</span><nav aria-label="Study contents">{[["reading","The starting point"],["evidence","What the sources say"],["diagram","A closer look"],["decisions","My reading"],["method","Method & limits"],["sources","Source library"]].map(([id,label])=><a href={`#${id}`} key={id}>{label}</a>)}</nav></aside>
      <article className="research-article">
        <section id="reading" className="research-opening" aria-label="The starting point">{study.opening.map(text=><Opening key={text} text={text} study={study} />)}</section>
        <section id="evidence" className="research-evidence"><h2 className="section-heading">What the sources say.</h2><div>{study.observations.map((observation,i)=><article key={observation.title}><span className="research-observation-number">{String(i+1).padStart(2,"0")}</span><h3>{observation.title}</h3><p>{observation.text}</p><div className="research-cites">{observation.sources.map(id=>{const source=study.sources.find(s=>s.id===id)!;return <a key={id} href={source.url} target="_blank" rel="noreferrer">[{id}] {source.publisher}</a>;})}</div></article>)}</div></section>
        <section id="diagram" className="research-diagram"><h2 className="section-heading">A closer look.</h2><ResearchVisual kind={study.visual} />{study.visual==="internet" ? <>
          <div className="research-stat-pair"><div><strong>+{internetChange.toFixed(2)}</strong><span>percentage points / 2018–2024</span></div><div><strong>07</strong><span>annual observations in the extract</span></div></div>
          <details className="research-data-table"><summary>See the chart’s data</summary><table><caption>Nigeria / Individuals using the internet (% of population)</caption><thead><tr><th scope="col">Year</th><th scope="col">Percent</th><th scope="col">Annual change (pp)</th></tr></thead><tbody>{internetUse.points.map((point,i)=><tr key={point.year}><th scope="row">{point.year}</th><td>{point.value.toFixed(2)}%</td><td>{i?`+${(point.value-internetUse.points[i-1].value).toFixed(2)}`:"—"}</td></tr>)}</tbody></table></details>
          <div className="research-downloads"><a href="/research/nigeria-internet-use.csv" download>Download CSV</a><a href="/research/nigeria-internet-use.json" download>Source snapshot</a><a href="/research/analyse-internet-use.py" download>Analysis script</a></div><p className="research-caption">Source data: World Bank WDI / ITU, CC BY 4.0. Displayed figures are rounded; the downloadable extract preserves the source precision.</p>
        </>:<p className="research-caption">Original diagram for this study. The example describes a proposed model or design reading; it is not a product screenshot or a measured result.</p>}</section>
        <section id="decisions" className="research-reading"><div className="research-section-label">Interpretation / What I would check next</div><h2 className="section-heading">My reading.</h2>{study.reading.map(item=><div key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</section>
        <section id="method" className="research-method"><h2 className="section-heading">Method & limits.</h2><div className="research-method-grid"><div><h3>How this was prepared</h3><ol>{study.method.map((text,i)=><li key={text}><span>{String(i+1).padStart(2,"0")}</span><p>{text}</p></li>)}</ol></div><div className="research-limits"><h3>What it does not establish</h3><ul>{study.limits.map(text=><li key={text}>{text}</li>)}</ul></div></div></section>
        <section id="sources" className="research-sources"><h2 className="section-heading">Source library.</h2><p>Primary sources checked on 13 October 2026. Follow a claim back to the original material.</p><ol>{study.sources.map(source=><li key={source.id}><span>[{source.id}]</span><div><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a><p>{source.publisher}</p></div><span className="research-source-mark" aria-hidden="true">↗</span></li>)}</ol></section>
        <aside className="research-next-question"><span>The question I’m keeping</span><p>{study.nextQuestion}</p><Link href="/contact" className="hero-secondary">Talk about this</Link></aside>
        <nav className="research-next" aria-label="More research"><Link href="/research-vault">Back to the Vault</Link><Link href={`/research-vault/${next.slug}`}><span>Read next</span><strong>{next.title}</strong></Link></nav>
      </article>
    </div>
  </main><Footer /></div>;
}
