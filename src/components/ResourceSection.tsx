"use client";

import { Reveal } from "@/components/Reveal";
import { WhyNotBuildCard } from "@/components/WhyNotBuildCard";

const resources = [
  { id: "tools-and-templates", title: "Tools & Templates", action: "Browse the kits", accent: "tools" },
  { id: "research-vault", title: "Research Vault", action: "Open the Vault", accent: "research" },
];

function ResourceAccent({ kind }: { kind: string }) {
  return (
    <svg className="resource-accent" viewBox="0 0 110 82" aria-hidden="true" fill="none">
      {kind === "tools" ? <>
        <path d="M22 24 69 15l14 49-47 10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M34 12h47v52H34Z" fill="#e1e6db" stroke="currentColor" strokeWidth="1.5" />
        <path d="M43 26h27M43 34h20M43 48h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m62 49 4 4 10-12" stroke="#779a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="29" cy="13" r="3" fill="#a8cf8e" />
      </> : <>
        <ellipse cx="55" cy="40" rx="38" ry="17" stroke="currentColor" strokeWidth="1.5" transform="rotate(-30 55 40)" />
        <ellipse cx="55" cy="40" rx="38" ry="17" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 55 40)" />
        <circle cx="55" cy="40" r="22" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="55" cy="40" r="5" fill="#a8cf8e" />
        <circle cx="84" cy="23" r="3" fill="currentColor" />
      </>}
    </svg>
  );
}

export function ResourceSection() {
  return (
    <section id="resources" className="resource-section">
      <Reveal dir="up" className="resource-heading">
        <h2>A few things you might need.</h2>
      </Reveal>
      <div className="resource-layout">
        <Reveal className="resource-laboratory" dir="up"><WhyNotBuildCard /></Reveal>
        {resources.map((resource, i) => (
          <Reveal key={resource.id} className="resource-square" dir="up" delay={i * 0.08}>
            <a id={resource.id} href={`#${resource.id}`} className="resource-row group">
              <ResourceAccent kind={resource.accent} />
              <h3>{resource.title}</h3>
              <span className="resource-action">{resource.action}</span>
            </a>
          </Reveal>
        ))}
        <Reveal className="resource-manifesto" dir="up" delay={0.1}>
          <article id="manifesto" className="manifesto-note">
            <h3>4 years of experience.<br /><span>Still asking why.</span></h3>
            <p>I take the work seriously. Myself, a little less. I ask questions, test ideas, and keep making things people can actually use.</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
