"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/config/site";

const topics = ["A project", "A collaboration", "Coffee in Lagos", "Something else"];

export function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [draft, setDraft] = useState<{href: string; text: string} | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {setError("Please add your name, email and a little context."); return;}
    const text = `Hi Essy,\n\n${message}\n\n${name}\nReply to: ${email}`;
    setDraft({href: `${site.email}?subject=${encodeURIComponent(`${topic} / ${name}`)}&body=${encodeURIComponent(text)}`, text});
    setCopied(false);
    setError("");
  }
  async function copy() {
    if (!draft) return;
    try { await navigator.clipboard.writeText(draft.text); setCopied(true); }
    catch { setCopied(false); setError("Copy is unavailable here. Select the prepared message below, or open your email app."); }
  }
  return <div className="contact-compose" id="contact-form">
    <div className="contact-compose-top"><span>Start a conversation</span><span>01 / Hello</span></div>
    <h2>What are you thinking?</h2>
    <form onSubmit={prepare} onChange={() => {setDraft(null); setCopied(false); setError("");}}>
      <fieldset><legend>I’m here about</legend><div className="contact-topics">{topics.map(item => <button key={item} type="button" aria-pressed={item === topic} onClick={() => {setTopic(item); setDraft(null); setCopied(false);}}>{item}</button>)}</div></fieldset>
      <div className="contact-fields"><label>Your name<input name="name" autoComplete="name" required maxLength={120} placeholder="What should I call you?" /></label><label>Your email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Where can I reply?" /></label></div>
      <label>A little context<textarea name="message" required maxLength={4000} rows={5} placeholder="What are you working on, and what would you like help with?" /></label>
      <div className="contact-compose-bottom"><button type="submit" className="hero-primary">Prepare my email</button><p>This prepares a draft.<br />You send it from your email app.</p></div>
    </form>
    {error && <p className="contact-error" role="alert">{error}</p>}
    {draft && <section className="contact-draft" aria-labelledby="contact-draft-heading" aria-live="polite"><h3 id="contact-draft-heading">Your draft is ready.</h3><p>Open it in your email app, or copy the message and send it to hi@essyudeme.com.</p><pre aria-label="Prepared message">{draft.text}</pre><div><a href={draft.href} className="hero-primary">Open email app</a><button type="button" className="hero-secondary" onClick={copy}>{copied ? "Message copied" : "Copy message"}</button></div><p className="contact-copy-status" role="status">{copied ? "Copied. Paste it into a new email." : ""}</p></section>}
  </div>;
}
