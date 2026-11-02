import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Page not found — Essy Udeme",
  robots: { index: false, follow: true },
};

const destinations = [
  { number: "01", title: "The Builds", description: "See what’s being made, and why.", href: "/builds" },
  { number: "02", title: "Why Not Build", description: "A few stories worth your time.", href: "/stories" },
  { number: "03", title: "Tools & Templates", description: "Find something useful to try.", href: "/tools-and-templates" },
];

export default function NotFound() {
  return (
    <div id="top" tabIndex={-1} className="site-base missing-page focus:outline-none">
      <div className="inner-nav"><Nav /></div>
      <main className="missing-main">
        <div className="missing-art" aria-hidden="true">
          <span>4</span><span className="missing-zero"><span /></span><span>4</span>
          <span className="missing-art-note">Nothing at this address.</span>
        </div>
        <div className="missing-copy">
          <p className="missing-label">404 · Page not found</p>
          <h1>This page<br />isn’t here.</h1>
          <p>The link may have changed, or the address may be mistyped. Let’s get you somewhere useful.</p>
          <Link href="/" className="hero-primary">Back to home <span aria-hidden="true">↗</span></Link>
        </div>
        <section className="missing-destinations" aria-labelledby="missing-destinations-title">
          <h2 id="missing-destinations-title">Or try one of these</h2>
          <div className="missing-links">
            {destinations.map(item => (
              <Link href={item.href} key={item.href}>
                <span className="missing-link-number">{item.number}</span>
                <span><span className="missing-link-title">{item.title}</span><span className="missing-link-description">{item.description}</span></span>
                <span className="missing-link-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <div className="missing-footnote"><span>Essy Udeme</span><span>Products, people, and the stories worth building.</span></div>
    </div>
  );
}
