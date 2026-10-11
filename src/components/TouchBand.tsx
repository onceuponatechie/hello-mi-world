"use client";

import { Reveal, TypeWords } from "@/components/Reveal";
import { site } from "@/config/site";

export function TouchBand() {
  return (
    <section id="newsletter" className="newsletter-section">
      <Reveal dir="up" className="newsletter-surround">
        <div className="newsletter-letter">
          <div className="newsletter-intro">
            <div className="newsletter-stamp" aria-hidden="true">
              <svg viewBox="0 0 120 90" fill="none" focusable="false">
                <path d="m9 39 88-26-32 63-19-25L9 39Z" fill="#EDE2F2" />
                <path d="m46 51 51-38-32 63-19-25Z" fill="#C3A5DD" />
                <path d="m46 51 51-38-42 47-9-9Z" fill="#F7F1FA" />
                <path d="m55 60 10 16-12-5 2-11Z" fill="#AF8DC8" />
              </svg>
            </div>
            <h2 className="section-heading"><span>Subscribe to</span>{" "}<span>Why Not Build.</span></h2>
            <p>I write about the questions behind products, and the people making them. Get new essays in your inbox.</p>
          </div>
          <form
            action={site.newsletter}
            method="get"
            className="newsletter-form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email
            </label>
            <input
              id="newsletter-email"
              name="email"
              autoComplete="email"
              required
              type="email"
              placeholder="Your email"
            />
            <button type="submit">Subscribe</button>
            <p>Finish on Substack. Unsubscribe anytime.</p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="dark-surface relative overflow-hidden px-4 pb-10 pt-4 text-paper sm:px-8 sm:pt-6">
      <div className="relative mx-auto max-w-5xl">
        <div className="footer-panel relative overflow-hidden rounded-[24px] bg-ink p-8 text-center sm:p-12">
          <div className="relative">
            <Reveal dir="down">
              <h3 className="section-heading mx-auto max-w-[20ch]">
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
                { label: "Services", href: "#services" },
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
