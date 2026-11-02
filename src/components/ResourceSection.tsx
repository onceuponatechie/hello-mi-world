"use client";

import { Reveal } from "@/components/Reveal";
import { WhyNotBuildCard } from "@/components/WhyNotBuildCard";
import Image from "next/image";
import Link from "next/link";

const resources = [
  { id: "tools-and-templates", title: "Tools & Templates", description: "Systems, files, and checklists I use — ready for your next idea.", action: "Browse the kits", image: "tools-templates.png" },
  { id: "research-vault", title: "Research Vault", description: "Research and teardowns across products, markets, and culture.", action: "Open the Vault", image: "research-vault.png" },
];

export function ResourceSection() {
  return (
    <section id="resources" className="resource-section" aria-labelledby="resources-heading">
      <Reveal dir="up" className="resource-heading">
        <h2 id="resources-heading" className="section-heading"><span>A few things</span>{" "}<span>you might need.</span></h2>
      </Reveal>
      <div className="resource-layout">
        {resources.map((resource, i) => (
          <Reveal key={resource.id} className={`resource-square resource-${resource.id}`} dir={i === 0 ? "up" : "right"} delay={i * 0.08}>
            <Link id={resource.id} href={resource.id === "tools-and-templates" ? "/tools-and-templates" : "/research-vault"} className="resource-row group">
              <div className="resource-copy">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <span className="resource-action">{resource.action}</span>
              </div>
              <Image className="resource-artwork" src={`/assets/${resource.image}`} alt="" aria-hidden="true" width={1024} height={1024} sizes="(max-width: 599px) 60vw, (max-width: 899px) 46vw, 230px" />
            </Link>
          </Reveal>
        ))}
        <Reveal className="resource-laboratory" dir="left"><WhyNotBuildCard /></Reveal>
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
