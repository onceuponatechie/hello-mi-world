import Link from "next/link";
import { products } from "@/content/products";

const included = [
  "Eight directions of work to compare.",
  "Small reflection games after each chapter.",
  "A directory of work to look into.",
];

export function FeaturedProduct() {
  const ebook = products.find(product => product.slug === "what-should-i-get-good-at");
  if (!ebook?.download) throw new Error("The featured ebook must have a direct download.");

  return <section id="featured-product" className="featured-product-section" aria-labelledby="featured-product-title">
    <div className="featured-product dark-surface">
      <figure className="featured-product-visual">
        <span className="featured-product-label">A little help with what’s next</span>
        <div className="featured-product-book">
          <img src={ebook.cover.src} alt={`${ebook.name} ebook cover by Essy Udeme`} width={ebook.cover.width} height={ebook.cover.height} loading="lazy" />
        </div>
        <figcaption>A short read. Room for your own answers.</figcaption>
      </figure>
      <div className="featured-product-details">
        <span className="featured-product-format">From my desk · Free ebook</span>
        <h2 id="featured-product-title" className="section-heading">{ebook.name}</h2>
        <p className="featured-product-summary">Questions and small exercises for choosing what to get good at.</p>
        <h3>What’s included</h3>
        <ul>{included.map(item => <li key={item}><span aria-hidden="true">+</span>{item}</li>)}</ul>
        <a href={ebook.download.href} download className="hero-primary">Download the ebook</a>
        <div className="featured-product-footnote"><span>EPUB · No email needed</span><Link href={`/tools-and-templates/${ebook.slug}`}>Look inside</Link></div>
      </div>
    </div>
  </section>;
}
