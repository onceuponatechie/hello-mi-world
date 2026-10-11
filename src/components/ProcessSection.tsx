import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Research",
    question: "What do we know?",
    description: "Understand the problem, the people affected, their needs, the market, existing solutions, and the opportunities.",
  },
  {
    title: "Strategy",
    question: "What should we do, and why?",
    description: "Decide what to pursue, who to serve, how to position your solution, what to prioritise, and what success looks like.",
  },
  {
    title: "Create",
    question: "How do we bring it to life?",
    description: "Design, write, build, produce, or launch something based on those decisions.",
  },
  {
    title: "Test & repeat",
    question: "What did we learn?",
    description: "Try it with people. Use their reactions to refine the work, revisit the questions, or change the plan.",
  },
];

const artworks = [
  <g key="research">
    <circle cx="100" cy="100" r="58" fill="#ffffff05" />
    <circle cx="91" cy="87" r="35" fill="#FFFFFF" />
    <circle cx="91" cy="87" r="23" fill="#181918" />
    <path d="m117 114 30 30" stroke="#f1f2ed" strokeWidth="14" strokeLinecap="round" />
    <path d="M48 43H38v10m114-10h10v10M38 143v10h10m114-10v10h-10" fill="none" stroke="#ffffff40" strokeWidth="1.5" strokeLinecap="round" />
  </g>,
  <g key="strategy">
    <rect x="42" y="49" width="96" height="114" rx="16" fill="#ffffff15" transform="rotate(-9 90 106)" />
    <rect x="64" y="38" width="96" height="124" rx="16" fill="#FFFFFF" transform="rotate(6 112 100)" />
    <path d="M88 116V90h38V69" fill="none" stroke="#181918" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="88" cy="120" r="9" fill="#181918" />
    <circle cx="126" cy="67" r="9" fill="#181918" />
  </g>,
  <g key="create">
    <rect x="35" y="51" width="132" height="108" rx="16" fill="#ffffff18" transform="rotate(7 101 105)" />
    <rect x="31" y="41" width="132" height="108" rx="16" fill="#FFFFFF" />
    <path d="M31 66h132" stroke="#181918" opacity=".25" />
    <circle cx="46" cy="54" r="3" fill="#181918" /><circle cx="56" cy="54" r="3" fill="#181918" opacity=".6" />
    <rect x="47" y="83" width="44" height="48" rx="7" fill="#181918" />
    <path d="M103 90h42m-42 12h30" stroke="#181918" strokeWidth="4" strokeLinecap="round" />
    <rect x="103" y="116" width="34" height="13" rx="6.5" fill="#181918" />
  </g>,
  <g key="repeat">
    <circle cx="100" cy="100" r="59" fill="#ffffff05" />
    <path d="M61 83a42 42 0 0 1 75-13m3 47a42 42 0 0 1-75 13" fill="none" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
    <path d="m119 75 27 3-4-27-23 24ZM80 125l-27-3 4 27 23-24Z" fill="#f1f2ed" />
    <circle cx="100" cy="100" r="17" fill="#FFFFFF" />
    <path d="m93 100 5 5 9-10" fill="none" stroke="#181918" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </g>,
];

export function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <Reveal dir="up" className="process-intro">
        <h2 className="section-heading"><span>How I get</span>{" "}<span>things made.</span></h2>
        <p>The plan can change. Sometimes I need to make something to decide what to do next.</p>
      </Reveal>
      <ol className="process-track" tabIndex={0} aria-label="Four process steps. Scroll horizontally to read each step.">
        {steps.map(({ title, question, description }, index) => (
          <li key={title} className="process-step">
            <div className="process-art" aria-hidden="true">
              <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
              <svg viewBox="0 0 200 200" focusable="false">
                <defs>
                  <filter id={`process-depth-${index}`} x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#20251D" floodOpacity=".08" /></filter>
                </defs>
                <g filter={`url(#process-depth-${index})`}>{artworks[index]}</g>
              </svg>
            </div>
            <div className="process-step-copy">
              <h3>{title}</h3>
              <p className="process-question">{question}</p>
              <p className="process-description">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
