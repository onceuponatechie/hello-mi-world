import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";

export const metadata: Metadata = {
  title: "About — Essy Udeme",
  description: "Meet Essy Udeme: researcher, builder and writer, with a background in marketing, design and product management.",
  alternates: { canonical: "/about" },
};

const notes = [
  { title: "Changing my mind.", text: "The most interesting finding is often the one that makes an earlier assumption harder to defend." },
  { title: "Writing to think.", text: "Putting a question into words helps me see what makes sense and what still needs work." },
  { title: "Something we can try.", text: "A prototype gives people something to react to. Their reactions can change the question, as well as what gets made." },
];

const around = [
  { name: "The Builds", detail: "The decisions behind the things being made.", href: "/builds", number: "01" },
  { name: "Why Not Build", detail: "Short stories about what technology lets us do.", href: "/stories", number: "02" },
  { name: "Research Vault", detail: "Questions followed through, with sources to check.", href: "/research-vault", number: "03" },
  { name: "Tools & Templates", detail: "Useful files to try in your own work.", href: "/tools-and-templates", number: "04" },
];

export default function AboutPage() {
  return <div id="top" tabIndex={-1} className="site-base about-page focus:outline-none">
    <div className="inner-nav"><Nav /></div>
    <main>
      <header className="about-hero">
        <div className="about-intro">
          <p className="inner-eyebrow">Researcher · Builder · Storyteller</p>
          <h1>Hi, I’m Essy.<span>Still asking why.</span></h1>
          <div className="about-intro-copy">
            <p>My work has taken me through marketing, design and product management. Research is the part that keeps me asking another question.</p>
            <p>This site is a place to share the research, writing and things that come out of those questions. There’s always more to figure out.</p>
          </div>
          <Link href="/contact" className="hero-primary">Say hello</Link>
        </div>
        <figure className="about-portrait">
          <img src="/assets/essy-udeme-portrait.png" alt="Essy Udeme" width={830} height={1000} loading="eager" />
          <figcaption><span>Essy Udeme</span><span>The person behind the questions.</span></figcaption>
        </figure>
      </header>

      <section className="about-notes" aria-labelledby="about-notes-title">
        <div><p className="inner-eyebrow">A few things about the work</p><h2 id="about-notes-title" className="section-heading">The part I keep<br />coming back to.</h2><p>Learning something new is good. Finding something that changes what gets made is even better.</p></div>
        <ol>{notes.map((note, index) => <li key={note.title}><span aria-hidden="true">0{index + 1}</span><div><h3>{note.title}</h3><p>{note.text}</p></div></li>)}</ol>
      </section>

      <section className="about-around" aria-labelledby="about-around-title">
        <h2 id="about-around-title" className="section-heading">Take a look around.</h2>
        <div className="about-around-grid">{around.map(item => <Link href={item.href} key={item.name}><span aria-hidden="true">{item.number}</span><h3>{item.name}</h3><p>{item.detail}</p><span className="about-around-action">Take a look</span></Link>)}</div>
      </section>
    </main>
    <Footer />
  </div>;
}
