"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhyNotBuildCard } from "@/components/WhyNotBuildCard";

const resources = [
  { id: "tools-and-templates", title: "Tools & Templates", body: "The files and checklists I actually use. Yours to put to work.", image: "/assets/essy-notes.jpg", action: "Browse the kits" },
  { id: "research-vault", title: "Research Vault", body: "Research and teardowns worth keeping, with the thinking behind them.", image: "/assets/product-lab-icon-new.png", action: "Open the Vault" },
];

export function ResourceSection() {
  return (
    <section id="resources" className="resource-section">
      <div className="resource-layout">
        <Reveal className="resource-laboratory" dir="up"><WhyNotBuildCard /></Reveal>
        <div className="resource-copy">
          <Reveal dir="up">
            <h2 className="text-[clamp(30px,3.4vw,46px)] leading-[1.12] tracking-tight">A few things for you.</h2>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-muted-ink">Things I’ve made, things I’ve learned, and things you can borrow.</p>
          </Reveal>
          <div className="resource-list">
            {resources.map((resource, i) => (
              <Reveal key={resource.id} dir="up" delay={i * 0.08}>
                <a id={resource.id} href={`#${resource.id}`} className="resource-row group">
                  <div className="resource-thumbnail"><img src={resource.image} alt="" loading="lazy" width={1024} height={1024} /></div>
                  <div className="min-w-0 flex-1">
                    <h3>{resource.title}</h3>
                    <p>{resource.body}</p>
                    <span className="resource-link-label">{resource.action}</span>
                  </div>
                  <ArrowUpRight className="resource-arrow" size={19} />
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal dir="up" delay={0.1}>
            <article id="manifesto" className="manifesto-note">
              <div>
                <h3>4 years of experience.<br />Still asking why.</h3>
                <p>I take the work seriously. Myself, a little less. I ask questions, test ideas, and keep making things people can actually use.</p>
              </div>
              <svg viewBox="0 0 90 100" aria-hidden="true" fill="none"><path d="M45 10v22m0 36v22M8 50h23m27 0h24M19 24l17 17m17 18 17 17M19 77l17-17m18-18 17-17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><circle cx="45" cy="50" r="16" stroke="currentColor" strokeWidth="2" /></svg>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
