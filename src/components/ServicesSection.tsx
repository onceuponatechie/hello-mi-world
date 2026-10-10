"use client";

import { Reveal } from "@/components/Reveal";
import { ScanSearch, PanelsTopLeft, MousePointer2 } from "lucide-react";

const services = [
  {
    title: ["Research &", "Insight"],
    description: <>Understand the <span>people</span>, market, and problem before deciding what to make.</>,
    icon: ScanSearch,
    offerings: [
      "Market & competitor research",
      "Product & user research",
      "Company & industry research",
      "Desk, opportunity & trend research",
      "Synthesis, reports & briefs",
    ],
  },
  {
    title: ["Decks &", "Narratives"],
    description: <>Give the work a clear <span>story</span>, so people can understand it and act.</>,
    icon: PanelsTopLeft,
    offerings: [
      "Pitch & strategy decks",
      "Research presentations",
      "Brand & product narratives",
      "Visual reports & information design",
      "Story & message structure",
    ],
  },
  {
    title: ["Prototypes &", "Digital Experiences"],
    description: <>Make an idea <span>usable</span>, with a prototype or digital experience people can test.</>,
    icon: MousePointer2,
    offerings: [
      "High-fidelity mobile prototypes",
      "Product concepts",
      "Landing pages & websites",
      "Dashboards & lightweight tools",
      "Interactive research outputs",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <span id="about" className="service-anchor" aria-hidden="true" />
      <Reveal dir="up" className="services-intro">
        <h2>How Can I Help You?</h2>
      </Reveal>
      <div className="services-grid">
        {services.map(({ title, description, offerings, icon: Icon }, index) => (
          <Reveal key={title.join(" ")} dir="up" delay={index * 0.08}>
            <article className="service-card dark-surface">
              <div className="service-copy">
                <div className="service-title">
                  <span className="service-icon" aria-hidden="true"><Icon size={21} strokeWidth={1.5} /></span>
                  <h3>{title.map((line, i) => <span key={line}>{i > 0 && " "}{line}</span>)}</h3>
                </div>
                <p>{description}</p>
              </div>
              <ul>{offerings.map(offering => <li key={offering}>{offering}</li>)}</ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
