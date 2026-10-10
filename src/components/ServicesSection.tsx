"use client";

import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: ["Research &", "Insight"],
    description: "Understand the people, market, and problem before deciding what to make.",
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
    description: "Give the work a clear story, so people can understand it and act.",
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
    description: "Make an idea usable, with a prototype or digital experience people can test.",
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
        <h2>Research-led product work</h2>
        <p>I turn messy questions into clear research, stories people understand, and digital experiences you can test.</p>
      </Reveal>
      <div className="services-grid">
        {services.map(({ title, description, offerings }, index) => (
          <Reveal key={title.join(" ")} dir="up" delay={index * 0.08}>
            <article className="service-card">
              <div className="service-copy">
                <h3>{title.map((line, i) => <span key={line}>{i > 0 && " "}{line}</span>)}</h3>
                <p>{description}</p>
              </div>
              <ul>{offerings.map(offering => <li key={offering}>{offering}</li>)}</ul>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal dir="up" className="services-principle">
        <p>Research discovers what matters. Product thinking decides what to do about it. Storytelling makes the decision understandable. Building gives people something to use.</p>
      </Reveal>
    </section>
  );
}
