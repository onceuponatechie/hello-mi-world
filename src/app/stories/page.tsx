import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { StoriesFeed } from "@/components/StoriesFeed";
import { stories, storyCard, storyCategories } from "@/content/stories";

export const metadata: Metadata = { title: "Stories — Why Not Build — Essy Udeme", description: "Short stories about what technology lets ordinary people create, learn, earn, own, understand and become. Read a story, then try something with its free resource.", alternates: { canonical: "/stories" } };

export default function StoriesPage() {
  return <div id="top" tabIndex={-1} className="site-base stories-page focus:outline-none">
    <div className="inner-nav"><Nav /></div>
    <main><header className="stories-intro"><p>Stories / Why Not Build</p><h1>There’s more<br /><span>you can make.</span></h1><p>Technology keeps changing what we can create, learn, earn, own, understand and become. These are the stories I’m paying attention to.</p><span>Six categories. A useful next step with every story.</span></header><StoriesFeed entries={stories.map(storyCard)} categories={storyCategories} /></main>
    <Footer />
  </div>;
}
