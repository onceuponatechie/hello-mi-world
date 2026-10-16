"use client";

import { Reveal } from "@/components/Reveal";
import { site } from "@/config/site";
import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function returnToTop(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.history.replaceState(window.history.state, "", "#top");
  document.getElementById("top")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
}

const tools = [
  { name: "Figma", key: "figma", image: "figma.svg", href: "https://www.figma.com/" },
  { name: "Notion", key: "notion", image: "notion.png", href: "https://www.notion.com/" },
  { name: "Codex", key: "codex", image: "codex.png", href: "https://openai.com/codex/" },
  { name: "VS Code", key: "vscode", image: "vscode.svg", href: "https://code.visualstudio.com/" },
];

export function TouchBand() {
  return (
    <section id="newsletter" className="newsletter-section" aria-labelledby="newsletter-heading">
      <Reveal dir="up" className="newsletter-surround">
        <div className="newsletter-letter">
          <div className="newsletter-intro">
            <span className="newsletter-label">Why Not Build · The newsletter</span>
            <h2 id="newsletter-heading" className="section-heading"><span>Build with a little</span>{" "}<span>less guesswork.</span></h2>
            <p>Get product breakdowns and practical notes to help you decide what to build next and where to start.</p>
            <div className="newsletter-toolkit">
              <ul aria-label="Tools I work with" className="newsletter-tools">
                {tools.map(tool => <li key={tool.name}><a className={`newsletter-tool newsletter-tool-${tool.key}`} href={tool.href} aria-label={tool.name} target="_blank" rel="noreferrer"><img src={`/assets/tools/${tool.image}`} alt="" width={36} height={36} loading="lazy" /></a></li>)}
              </ul>
              <span>Tools I work with</span>
            </div>
          </div>
        </div>
          <form
            action={site.newsletter}
            method="get"
            className="newsletter-form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email
            </label>
            <div className="newsletter-form-row"><input
              id="newsletter-email"
              name="email"
              autoComplete="email"
              required
              type="email"
              placeholder="Your email"
            />
            <button type="submit">Subscribe <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m4 10 16-6-6 16-3-7-7-3Zm7 3 9-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div>
            <p>Finish on Substack. Unsubscribe anytime.</p>
          </form>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const pathname = usePathname();
  const sectionLink = (hash: string) => pathname === "/" ? hash : `/${hash}`;
  return (
    <footer id="contact" className="footer-section dark-surface">
      <div className="footer-panel">
        <img className="footer-backdrop" src="/assets/hero-cover.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="footer-content">
          <div className="footer-top">
            <Link href="/" onClick={pathname === "/" ? returnToTop : undefined} className="footer-brand" aria-label="Essy — Home">Essy</Link>
            <a href="#top" onClick={returnToTop} className="footer-to-top">
              <span>Back to top</span>
              <span className="footer-up" aria-hidden="true"><svg viewBox="0 0 155 100" fill="none" focusable="false"><path d="M6 21c49-26 85-7 80 25S33 74 57 45s67-19 86 37m-20-9 21 11 1-25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </a>
          </div>
          <div className="footer-invitation">
            <Reveal dir="up">
              <h2 className="section-heading">Let&apos;s give your idea<br /><span>a first version.</span></h2>
              <Link href={pathname === site.contact ? "#contact-form" : site.contact} className="footer-contact">Tell me about it</Link>
            </Reveal>
          </div>
          <div className="footer-bottom">
            <div className="footer-organized">
              <div className="footer-links" aria-label="Social and contact links">
                <a href={site.email} className="footer-social" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 6 8 7 8-7" /></svg></a>
                <a href="#" className="footer-social" aria-label="X (Twitter)"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-5-7.6L5 22H2l8.3-9.5L2 2h6.5l4.7 7.1L18.9 2Zm-1.1 18h1.7L7.4 4H5.6l12.2 16Z" /></svg></a>
                <a href="#" className="footer-social" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 9h4v12H3V9Zm7 0h4v1.6c.7-1.1 1.8-1.9 3.5-1.9 3.3 0 4.5 2 4.5 5V21h-4v-6.5c0-1.6-.3-2.7-1.8-2.7-1.7 0-2.2 1.2-2.2 2.7V21h-4V9Z" /></svg></a>
                <a href="#" className="footer-social" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
              </div>
              <nav aria-label="Footer navigation" className="footer-nav">
                {[
                  { label: "Resources", href: sectionLink("#resources") },
                  { label: "Stories", href: site.stories },
                  { label: "Builds", href: "/builds" },
                  { label: "About", href: "/about" },
                ].map(link => <Link key={link.label} href={link.href}>{link.label}</Link>)}
              </nav>
            </div>
            <div className="footer-meta"><span>© 2026 Essy Udeme</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
