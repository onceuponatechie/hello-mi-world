import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ResourceSection } from "@/components/ResourceSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PromiseSection } from "@/components/PromiseSection";
import { TouchBand, Footer } from "@/components/TouchBand";
import { Preloader } from "@/components/Preloader";
import { builds } from "@/content/builds";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { HomeStories } from "@/components/HomeStories";
import { FaqSection } from "@/components/FaqSection";

// Keep the full study narratives on the server. The animated homepage stack
// receives only the cover and summary fields it renders.
const featuredBuilds = builds.slice(0, 4).map(({ slug, name, format, summary, image, output }) => ({ slug, name, format, summary, image, output }));

export default function Home() {
  return (
    <div id="top" tabIndex={-1} className="site-base min-h-screen focus:outline-none">
      <Preloader />
      <main className="relative w-full overflow-x-clip">
        <div className="site-introduction mx-auto w-full max-w-[1440px]">
          <div className="relative overflow-hidden">
            <img src="/assets/hero-cover.webp" alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
            <div className="hero-background-fade pointer-events-none absolute inset-0" />
            <div className="relative"><Nav /><Hero /></div>
          </div>
          <ResourceSection />
        </div>
        <div className="site-depth">
          <div className="mx-auto w-full max-w-[1440px]">
            <ProcessSection />
            <PromiseSection projects={featuredBuilds} />
            <ServicesSection />
            <FeaturedProduct />
            <HomeStories />
            <TouchBand />
            <FaqSection />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
