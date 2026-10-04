import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { AboutSection } from "@/components/AboutSection";
import { PromiseSection } from "@/components/PromiseSection";
import { TouchBand, Footer } from "@/components/TouchBand";
import { Preloader } from "@/components/Preloader";

export default function Home() {
  return (
    <div className="min-h-screen bg-backdrop">
      <Preloader />
      <main className="relative mx-auto w-full max-w-[1440px] overflow-x-clip bg-backdrop">
        <div className="relative overflow-hidden">
          <img src="/assets/hero-cover.webp" alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-backdrop" />
          <div className="relative"><Nav /><Hero /></div>
        </div>
        <BentoGrid />
        <AboutSection />
        <PromiseSection />
        <TouchBand />
        <Footer />
      </main>
    </div>
  );
}
