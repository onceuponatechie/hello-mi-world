"use client";

import { Search, PencilRuler, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  { title: "Find the question.", body: "I listen, read, and ask a few more questions. The aim is to understand what people actually need.", icon: Search, tint: "bg-butter-soft", rotation: "-rotate-6" },
  { title: "Make it useful.", body: "I turn the research into a product, a tool, or an experiment. Then I test it with the people it’s for.", icon: PencilRuler, tint: "bg-sage-soft", rotation: "rotate-6" },
  { title: "Tell the story.", body: "I write down what I learned and share the work. Useful ideas deserve good explanations.", icon: MessageCircle, tint: "bg-lavender-soft", rotation: "-rotate-3" },
];

export function AboutSection() {
  return (
    <section id="about" className="process-section">
      <Reveal dir="up" className="process-intro">
        <h2>What I do with<br />a good question.</h2>
        <p>Research, build, tell. Here’s what that looks like when I get to work.</p>
      </Reveal>
      <div className="process-steps">
        <svg className="process-trail" viewBox="0 0 1000 120" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M40 63c158-120 256 92 418 0S751-4 960 56" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 9" /></svg>
        {steps.map(({ title, body, icon: Icon, tint, rotation }, index) => (
          <Reveal key={title} dir="up" delay={index * 0.12} className="process-step">
            <div className="process-step-top">
              <div className={`process-icon ${tint} ${rotation}`}><Icon size={30} strokeWidth={1.4} /></div>
              <span className="process-number">0{index + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
