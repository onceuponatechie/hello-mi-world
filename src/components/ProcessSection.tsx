import { Reveal } from "@/components/Reveal";
import { SectionDoodle } from "@/components/SectionDoodle";

const steps = [
  { title: "Research", description: "I look into the problem, the people, and what’s already out there." },
  { title: "Strategy", description: "I decide what to make, who it’s for, and what to leave out." },
  { title: "Create", description: "I make a prototype, a story, or a site we can try." },
  { title: "Test & repeat", description: "I test with people and change what isn’t working." },
];

const artworks = [
  <g key="research" strokeLinecap="round" strokeLinejoin="round">
    <path d="m53 50 87-7 13 101-88 11Z" fill="#ffffff80" stroke="#20251D" strokeWidth="2" />
    <path d="m117 45 3 21 21-4" fill="none" stroke="#20251D" strokeWidth="2" />
    <path d="M86 83c-1-16 26-20 27-4 1 12-16 10-15 25m1 12v1" fill="none" stroke="#20251D" strokeWidth="3" />
    <path d="m38 62-9-4m13-10-4-9m117 83 10 4" fill="none" stroke="#75568D" strokeWidth="2" />
  </g>,
  <g key="strategy" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M43 135c40 8 65-11 44-36S39 67 62 51s75 5 86 35" stroke="#20251D" strokeWidth="2.5" />
    <circle cx="43" cy="135" r="6" fill="#ffffffa0" stroke="#20251D" strokeWidth="2" />
    <path d="m145 77 3 10-10-4" stroke="#20251D" strokeWidth="2" />
    <path d="m145 107 4 12 12-5-7 12 12 4-12 4 6 11-12-6-4 12-4-12-11 5 6-11-12-4 12-4-6-11 12 6Z" fill="#ffffff90" stroke="#20251D" strokeWidth="1.5" />
  </g>,
  <g key="create" strokeLinecap="round" strokeLinejoin="round">
    <path d="m53 48 84 3-5 104-82-6Z" fill="#ffffff80" stroke="#20251D" strokeWidth="2" />
    <path d="m70 72 30 2m-31 9 22 1M67 130c6-18 14-21 17-6s15 5 20-11" fill="none" stroke="#20251D" strokeWidth="2" />
    <path d="m111 107 33-55 12 8-34 55-12 7Z" fill="#f5c1ab" stroke="#20251D" strokeWidth="2" />
    <path d="m111 107 11 8m22-63 4-7c2-3 14 5 12 8l-4 7" fill="none" stroke="#20251D" strokeWidth="2" />
  </g>,
  <g key="repeat" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M40 75c30-31 85-23 82 11s-48 54-53 27 33-51 66-16c12 13 19 30 17 46m-11-12 11 13 7-17" stroke="#20251D" strokeWidth="2.5" />
    <path d="m60 45 2 8 8 2-8 2-2 9-2-9-8-2 8-2Z" fill="#ffffff" stroke="#20251D" strokeWidth="1.5" />
    <path d="m142 59 7-7m-1 20 10-1" stroke="#668198" strokeWidth="2" />
  </g>,
];

export function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <Reveal dir="up" className="process-intro">
        <h2><span>Here’s how</span><span>I work.</span></h2>
        <p>I research, make a plan, build, and test with people.</p>
        <SectionDoodle variant="loop" className="section-doodle process-doodle" />
      </Reveal>
      <ol className="process-track" tabIndex={0} aria-label="Four process steps. Scroll horizontally to read each step.">
        {steps.map(({ title, description }, index) => (
          <li key={title} className="process-step">
            <div className="process-art" aria-hidden="true">
              <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
              <svg viewBox="0 0 200 200" focusable="false">{artworks[index]}</svg>
            </div>
            <div className="process-step-copy">
              <h3>{title}</h3>
              <p className="process-description">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
