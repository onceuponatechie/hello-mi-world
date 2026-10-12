import { Reveal } from "@/components/Reveal";
import { ServiceMark } from "@/components/ServiceMark";

const steps = [
  {
    title: "Research", mark: "research" as const,
    question: "What do we know?",
    description: "Understand the problem, the people affected, their needs, the market, existing solutions, and the opportunities.",
  },
  {
    title: "Strategy", mark: "strategy" as const,
    question: "What should we do, and why?",
    description: "Decide what to pursue, who to serve, how to position your solution, what to prioritise, and what success looks like.",
  },
  {
    title: "Create", mark: "prototype" as const,
    question: "How do we bring it to life?",
    description: "Design, write, build, produce, or launch something based on those decisions.",
  },
  {
    title: "Test & repeat", mark: "repeat" as const,
    question: "What did we learn?",
    description: "Try it with people. Use their reactions to refine the work, revisit the questions, or change the plan.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <Reveal dir="up" className="process-intro">
        <h2 className="section-heading"><span>How I get</span>{" "}<span>things made.</span></h2>
        <p>The plan can change. Sometimes I need to make something to decide what to do next.</p>
      </Reveal>
      <ol className="process-track" tabIndex={0} aria-label="My four-step process. Scroll horizontally to read all four steps on smaller screens.">
        {steps.map(({ title, question, description, mark }) => (
          <li key={title} className="process-step">
            <div className="process-art" aria-hidden="true">
              <ServiceMark kind={mark} />
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
