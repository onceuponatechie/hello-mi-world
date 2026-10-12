import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { ToolsFeed } from "@/components/ToolsFeed";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Tools & Templates — Essy Udeme",
  description: "Useful templates, guides and small tools for research, planning and making. Five free downloads in an eleven-product collection.",
  alternates: { canonical: "/tools-and-templates" },
};

export default function ToolsPage() {
  const cards = products.map(({ slug, name, format, category, status, cover, color, download }) => ({ slug, name, format, category, status, cover, color, ...(download ? {download} : {}) }));
  return <div id="top" tabIndex={-1} className="site-base tools-page focus:outline-none">
    <div className="inner-nav"><Nav /></div>
    <main>
      <header className="tools-page-intro"><h1>Tools &<br />Templates.</h1><p>Useful starting points for research, planning and making. Pick one and make it yours.</p><span>11 products · 5 free downloads</span></header>
      <ToolsFeed products={cards} />
    </main>
    <Footer />
  </div>;
}
