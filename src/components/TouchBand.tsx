"use client";

import { Reveal } from "@/components/Reveal";
import { site } from "@/config/site";
import type { MouseEvent } from "react";

function returnToTop(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.history.replaceState(window.history.state, "", "#top");
  document.getElementById("top")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
}

const tools = [
  { name: "Figma", image: "figma.svg", href: "https://www.figma.com/" },
  { name: "Notion", image: "notion.png", href: "https://www.notion.com/" },
  { name: "Codex", image: "codex.png", href: "https://openai.com/codex/" },
  { name: "VS Code", image: "vscode.svg", href: "https://code.visualstudio.com/" },
];

export function TouchBand() {
  return (
    <section id="newsletter" className="newsletter-section">
      <Reveal dir="up" className="newsletter-surround dark-surface">
        <div className="newsletter-letter">
          <div className="newsletter-intro">
            <h2 className="section-heading"><span>Build with a little</span>{" "}<span>less guesswork.</span></h2>
            <p>Get product breakdowns and practical notes to help you decide what to build next.</p>
            <div className="newsletter-toolkit">
              <ul aria-label="Tools I work with" className="newsletter-tools">
                {tools.map(tool => <li key={tool.name}><a href={tool.href} aria-label={tool.name} target="_blank" rel="noreferrer"><img src={`/assets/tools/${tool.image}`} alt="" width={30} height={30} loading="lazy" /></a></li>)}
              </ul>
              <span>Tools I work with</span>
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
    <footer id="contact" className="footer-section dark-surface">
      <div className="footer-panel">
        <img className="footer-backdrop" src="/assets/hero-cover.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="footer-content">
          <div className="footer-top">
            <a href="#top" onClick={returnToTop} className="footer-brand">Essy</a>
            <a href="#top" onClick={returnToTop} className="footer-to-top">
              <span>Back to top</span>
              <span className="footer-up" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="m12 3-8 8 1.7 1.7 5.1-5.1V21h2.4V7.6l5.1 5.1L20 11l-8-8Z" /></svg></span>
            </a>
          </div>
          <div className="footer-invitation">
            <Reveal dir="up">
              <h2 className="section-heading">Let&apos;s build something<br /><span>people remember.</span></h2>
              <p>Tell me what you’re working on. I’d love to hear about it.</p>
              <a href={site.contact} className="footer-contact">Book a coffee</a>
            </Reveal>
          </div>
          <div className="footer-bottom">
            <nav aria-label="Footer navigation" className="footer-nav">
              {[
                { label: "Home", href: "#top" },
                { label: "Why Not Build?", href: site.stories },
                { label: "Resources", href: "#resources" },
                { label: "Projects", href: "#projects" },
                { label: "Services", href: "#services" },
              ].map(link => <a key={link.label} href={link.href} onClick={link.href === "#top" ? returnToTop : undefined}>{link.label}</a>)}
            </nav>
            <div className="footer-meta">
              <span>© 2026 Essy Udeme</span>
              <div className="footer-links">
                <a href={site.contact} className="footer-social" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 6 8 7 8-7" /></svg></a>
                <a href="#" className="footer-social" aria-label="X (Twitter)"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-5-7.6L5 22H2l8.3-9.5L2 2h6.5l4.7 7.1L18.9 2Zm-1.1 18h1.7L7.4 4H5.6l12.2 16Z" /></svg></a>
                <a href="#" className="footer-social" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 9h4v12H3V9Zm7 0h4v1.6c.7-1.1 1.8-1.9 3.5-1.9 3.3 0 4.5 2 4.5 5V21h-4v-6.5c0-1.6-.3-2.7-1.8-2.7-1.7 0-2.2 1.2-2.2 2.7V21h-4V9Z" /></svg></a>
                <a href="#" className="footer-social" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
              </div>
              <div className="footer-legal"><a href="#">Privacy</a><a href="#">Colophon</a><span>Lagos → Everywhere</span></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
