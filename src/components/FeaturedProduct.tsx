import Link from "next/link";
import { products } from "@/content/products";
import { DoodleStar } from "@/components/DoodleStar";

const included = [
  "Eight directions of work to compare.",
  "Small reflection games after each chapter.",
  "A directory of work to look into.",
];

export function FeaturedProduct() {
  const ebook = products.find(product => product.slug === "what-should-i-get-good-at");
  if (!ebook?.download) throw new Error("The featured ebook must have a direct download.");

  return <section id="featured-product" className="featured-product-section" aria-labelledby="featured-product-heading">
    <h2 id="featured-product-heading" className="section-heading featured-product-heading"><span>A little help</span><span>with what’s next.</span></h2>
    <div className="featured-product">
      <figure className="featured-product-visual">
        <DoodleStar className="featured-product-star" />
        <div className="featured-product-book">
          <img src={ebook.cover.src} alt={`${ebook.name} ebook cover by Essy Udeme`} width={ebook.cover.width} height={ebook.cover.height} loading="lazy" />
        </div>
        <figcaption>A short read. Room for your own answers.</figcaption>
      </figure>
      <div className="featured-product-details dark-surface">
        <span className="featured-product-format">From my desk · Free ebook</span>
        <h3 id="featured-product-title" className="featured-product-name">{ebook.name}</h3>
        <p className="featured-product-summary">Questions and small exercises for choosing what to get good at.</p>
        <div className="featured-product-included"><h4>What’s included</h4><ul>{included.map(item => <li key={item}><span aria-hidden="true">+</span>{item}</li>)}</ul></div>
        <a href={ebook.download.href} download className="hero-primary">Download the ebook</a>
        <div className="featured-product-footnote"><span>EPUB · No email needed</span><Link href={`/tools-and-templates/${ebook.slug}`}>Look inside</Link></div>
      </div>
    </div>
  </section>;
}
