import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { ToolsFeed } from "@/components/ToolsFeed";
import { products, readyProducts } from "@/content/products";

export const metadata: Metadata = {
  title: "Tools & Templates — Essy Udeme",
  description: `Useful templates, ebooks, guides and small tools for research, planning and making. ${readyProducts.length} free downloads in a ${products.length}-product collection.`,
  alternates: { canonical: "/tools-and-templates" },
};

export default function ToolsPage() {
  const cards = products.map(({ slug, name, format, category, status, cover, color, download }) => ({ slug, name, format, category, status, cover, color, ...(download ? {download} : {}) }));
  return <div id="top" tabIndex={-1} className="site-base tools-page focus:outline-none">
    <div className="inner-nav"><Nav /></div>
    <main>
      <header className="tools-page-intro"><h1>Tools &<br />Templates.</h1><p>Notes and tools for asking better questions and trying things out. Take what helps with the work in front of you.</p><span>{products.length} products · {readyProducts.length} free downloads</span></header>
      <ToolsFeed products={cards} />
    </main>
    <Footer />
  </div>;
}
