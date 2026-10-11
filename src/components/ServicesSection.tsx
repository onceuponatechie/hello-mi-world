"use client";

import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: ["Research &", "Insight"],
    description: <>Understand <span>the people and the problem</span> before deciding what to make.</>,
    icon: <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path fillRule="evenodd" d="M10 2a8 8 0 1 0 4.91 14.31l5.67 5.67 1.42-1.42-5.67-5.67A8 8 0 0 0 10 2Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" clipRule="evenodd" /></svg>,
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
    description: <>Give the work <span>a clear story</span>, so people can understand it and act.</>,
    icon: <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M3 2h13a2 2 0 0 1 2 2v1H6a3 3 0 0 0-3 3v10H2V4a2 2 0 0 1 1-2Z" /><path fillRule="evenodd" d="M7 7h13a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm2 4v2h9v-2H9Zm0 5v2h6v-2H9Z" clipRule="evenodd" /></svg>,
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
    description: <>Make an idea <span>ready to try</span>, with a prototype or digital experience people can test.</>,
    icon: <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M5 2.5a.7.7 0 0 0-1 .63v17.74a.7.7 0 0 0 1.2.49l4.12-4.2 2.63 5.58 3.05-1.44-2.67-5.66h6.72a.7.7 0 0 0 .4-1.27L5 2.5Z" /></svg>,
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
        {services.map(({ title, description, offerings, icon }, index) => (
          <Reveal key={title.join(" ")} dir="up" delay={index * 0.08} className="service-placement">
            <article className="service-card">
              <div className="service-copy">
                <div className="service-title">
                  <span className="service-icon" aria-hidden="true">{icon}</span>
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
