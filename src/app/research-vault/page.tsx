import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { ResearchFeed } from "@/components/ResearchFeed";
import { studies } from "@/content/research";

export const metadata: Metadata={title:"Research Vault — Essy Udeme",description:"Four source-based studies on products, systems and Nigeria’s internet-use data. Read the evidence, methods and limits.",alternates:{canonical:"/research-vault"}};

export default function ResearchVaultPage(){
  const cards=studies.map(({slug,title,summary,topic,subject,visual,sources})=>({slug,title,summary,topic,subject,visual,sourceCount:sources.length}));
  return <div id="top" tabIndex={-1} className="site-base vault-page focus:outline-none"><div className="inner-nav"><Nav /></div><main>
    <header className="vault-intro"><p className="inner-eyebrow">The Research Vault</p><h1>Less guessing.<br />More to go on.</h1><p>Questions worth checking. Sources worth keeping.<br />Research you can follow, question, and use.</p><div className="vault-index-label"><span>04 / Studies</span><span>Open sources</span><span>Methods included</span></div></header>
    <ResearchFeed entries={cards} />
  </main><Footer /></div>;
}
