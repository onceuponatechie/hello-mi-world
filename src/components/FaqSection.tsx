import Link from "next/link";

const questions = [
  { question: "What can we work on together?", answer: <>Research, product prototypes, websites, decks and the story behind the work. The <Link href="/#services">services section</Link> gives you a closer look at what that can involve.</> },
  { question: "Do I need a fully formed idea?", answer: <>A question or a problem is a useful place to start. Share what you’re trying to do, what you already know and what still needs figuring out. We can discuss the next step.</> },
  { question: "How do the downloads work?", answer: <>Ready products have a direct download on their <Link href="/tools-and-templates">Tools &amp; Templates</Link> page. No email is needed. Products labelled Planned aren’t available yet.</> },
  { question: "Where should I start with Why Not Build?", answer: <>Try <Link href="/stories/what-do-product-managers-even-do">What Do Product Managers Even Do?</Link> It looks at the decisions behind a product, including when good work needs to stop. Each story also has a resource you can download.</> },
  { question: "How do I get in touch?", answer: <>Use the <Link href="/contact">contact page</Link> to tell me about the work you have in mind. There’s a direct email link there too. In Lagos? Coffee is an option.</> },
];

export function FaqSection() {
  return <section id="faq" className="faq-section" aria-labelledby="faq-heading">
    <h2 id="faq-heading" className="section-heading"><span>You may want</span>{" "}<span>to ask these.</span></h2>
    <div className="faq-list">{questions.map((item, index) => <details key={item.question} name="homepage-questions" className="faq-item">
      <summary><span className="faq-number" aria-hidden="true">0{index + 1}</span><h3>{item.question}</h3><span className="faq-toggle" aria-hidden="true" /></summary>
      <div className="faq-answer"><p>{item.answer}</p></div>
    </details>)}</div>
  </section>;
}
