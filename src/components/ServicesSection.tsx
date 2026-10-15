"use client";

import { Reveal } from "@/components/Reveal";
import { ServiceMark } from "@/components/ServiceMark";

const services = [
  {
    title: ["Research &", "Insight"],
    description: <>Understand <span>the people and the problem</span> before deciding what to make.</>,
    icon: <ServiceMark kind="research" />,
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
    icon: <ServiceMark kind="narrative" />,
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
    icon: <ServiceMark kind="prototype" />,
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
      <Reveal dir="up" className="services-intro">
        <h2 className="section-heading"><span>How Can I</span>{" "}<span>Help You?</span></h2>
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
