import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/TouchBand";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/config/site";

export const metadata: Metadata = {title: "Say hi — Essy Udeme", description: "Talk to Essy about research, product work, a collaboration, or coffee in Lagos.", alternates: {canonical: "/contact"}};

export default function ContactPage() {
  return <div id="top" tabIndex={-1} className="site-base contact-page focus:outline-none">
    <div className="inner-nav"><Nav /></div>
    <main className="contact-layout">
      <header className="contact-intro"><p className="inner-eyebrow">A good place to say hello</p><h1>Got something<br />on your mind?</h1><p>A project, a question, or an idea you haven’t quite figured out. Tell me where you’re starting.</p><a className="contact-email" href={site.email}>hi@essyudeme.com</a><span className="contact-email-note">Prefer a plain email? That works too.</span>
      </header>
      <ContactForm />
      <aside className="contact-coffee"><img src="/assets/essy-udeme-portrait.png" alt="Essy Udeme" width={830} height={1000} loading="eager" /><div><span>Also, away from the screen</span><h2>In Lagos?<br />Let’s get coffee.</h2><p>Email me. We can pick a place and a day.</p><a href={`${site.email}?subject=Coffee%20in%20Lagos`} className="hero-secondary">Coffee sounds good</a></div></aside>
      <div className="contact-context"><p>Want a little context first?</p><Link href="/builds">See what I build</Link><Link href="/research-vault">Read the research</Link></div>
    </main>
    <Footer />
  </div>;
}
