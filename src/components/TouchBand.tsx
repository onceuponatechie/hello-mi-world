"use client";

import { Reveal, TypeWords } from "@/components/Reveal";
import { site } from "@/config/site";

export function TouchBand() {
  return (
    <section id="newsletter" className="scroll-mt-10 px-4 py-10 sm:px-8 sm:py-16">
      <Reveal dir="up" className="mx-auto max-w-5xl overflow-hidden dark-surface rounded-[28px] bg-ink p-6 text-white sm:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <Reveal dir="left" delay={0.12} className="min-w-0">
            <h2 className=" text-[clamp(28px,3.4vw,44px)] font-normal leading-tight tracking-tight">
              Good things, straight
              <br />
              <span className="">to your inbox</span>
            </h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-muted-dark">
              One idea, one artifact, every Tuesday. No filler, no funnels.
              Unsubscribe with one gentle click.
            </p>
            <div className="mt-6 flex items-center gap-1">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-butter">{s}</span>
              ))}
              <span className="ml-2 text-[11px] text-muted-dark">Loved by 3,400+ readers</span>
            </div>
          </Reveal>
          <Reveal dir="right" delay={0.2}>
          <form
            action={site.newsletter}
            method="get"
            className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
          >
            <label htmlFor="newsletter-email" className="text-[10px] font-normal text-muted-dark">
              Your email
            </label>
            <input
              id="newsletter-email"
              name="email"
              autoComplete="email"
              required
              type="email"
              placeholder="you@somewhere.good"
              className="mt-2 w-full rounded-full bg-white/10 px-4 py-3 text-[13px] text-white placeholder:text-muted-dark focus:outline-none focus:ring-2 focus:ring-butter"
            />
            <button className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-full bg-[#c9e5b8] px-4 py-3 text-[13px] font-normal text-ink transition hover:opacity-90">
              Send it my way
            </button>
            <p className="mt-3 text-center text-[10px] text-muted-dark">
              Finish subscribing on Substack. Just Tuesdays.
            </p>
          </form>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="dark-surface relative overflow-hidden bg-ink px-4 pb-10 pt-14 text-paper sm:px-8 sm:pt-20">
      <div className="relative mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[24px] border border-paper/10 bg-ink p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-12">
          <div className="relative">
            <Reveal dir="down">
              <h3 className="mx-auto max-w-[20ch] text-[clamp(22px,2.4vw,30px)] font-normal leading-tight tracking-tight">
                Let&apos;s build something people <span className="">remember</span>.
              </h3>
            </Reveal>
            <p className="mx-auto mt-3 max-w-[38ch] text-[13px] leading-relaxed text-muted-dark">
              <TypeWords
                delay={0.2}
                step={0.035}
                text="Research, product, or a story that needs telling — the door is open."
              />
            </p>

            <Reveal dir="down" delay={0.35}>
              <a
                href={site.contact}
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-[13px] font-normal text-ink transition-all hover:bg-ink hover:text-white hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)]"
              >
                Book a coffee
              </a>
            </Reveal>

            <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12.5px] font-normal text-muted-dark">
              {[
                { label: "Home", href: "/" },
                { label: "Why Not Build?", href: site.stories },
                { label: "Resources", href: "#resources" },
                { label: "Projects", href: "#projects" },
                { label: "About", href: "#about" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="transition-colors hover:text-paper">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-muted-dark">
              {["Twitter / X", "LinkedIn", "Instagram"].map((l) => (
                <a key={l} href="#" className="transition-colors hover:text-paper">
                  {l}
                </a>
              ))}
              <a href="mailto:hi@essyudeme.com" className="transition-colors hover:text-paper">
                hi@essyudeme.com
              </a>
            </div>

            <div className="mt-9 border-t border-paper/10 pt-5 text-[11px] text-muted-dark">
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <a href="#" className="transition-colors hover:text-paper">Privacy</a>
                <span className="h-1 w-1 rounded-full bg-paper/20" />
                <a href="#" className="transition-colors hover:text-paper">Colophon</a>
                <span className="h-1 w-1 rounded-full bg-paper/20" />
                <span>Lagos → Everywhere</span>
              </div>
              <div className="mt-3">© 2026 Essy Udeme — made with care.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
