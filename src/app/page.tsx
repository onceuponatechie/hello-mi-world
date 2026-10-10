import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ResourceSection } from "@/components/ResourceSection";
import { AboutSection } from "@/components/AboutSection";
import { PromiseSection } from "@/components/PromiseSection";
import { TouchBand, Footer } from "@/components/TouchBand";
import { Preloader } from "@/components/Preloader";

export default function Home() {
  return (
    <div className="site-base min-h-screen">
      <Preloader />
      <main className="relative mx-auto w-full max-w-[1440px] overflow-x-clip">
        <div className="relative overflow-hidden">
          <img src="/assets/hero-cover.webp" alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          <div className="hero-background-fade pointer-events-none absolute inset-0" />
          <div className="relative"><Nav /><Hero /></div>
        </div>
        <ResourceSection />
        <AboutSection />
        <PromiseSection />
        <TouchBand />
        <Footer />
      </main>
    </div>
  );
}
