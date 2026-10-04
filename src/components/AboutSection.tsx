"use client";

import { Reveal, TypeWords } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="bg-backdrop px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl lg:max-w-[1180px]">
        <Reveal dir="down" className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-muted-ink">
          What I Do
        </Reveal>
        <Reveal dir="up" delay={0.08}>
          <div className="px-2 py-3 sm:px-14 sm:py-6">
            <p className="mx-auto max-w-[24ch] text-center text-[clamp(18px,2.4vw,28px)] leading-[1.45] tracking-tight text-ink/70 sm:max-w-none">
              <TypeWords
                delay={0.25}
                step={0.035}
                text="I follow curiosity down rabbit holes — into products, people, and the technology shaping both. Then I turn what I find into experiments, tools, and stories you can actually use."
              />{" "}
              <span className="font-serif italic text-ink/70">Research, build, tell</span>{" "}
              <TypeWords
                delay={1.35}
                step={0.035}
                text="— that loop is how I make sense of the world, and how I'm building my way into the answer."
              />
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
