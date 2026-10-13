"use client";

import { useState } from "react";
import internetUse from "../../public/research/nigeria-internet-use.json";
import type { Study } from "@/content/research";

export function ResearchVisual({kind, compact = false}: {kind: Study["visual"]; compact?: boolean}) {
  const [mode, setMode] = useState<"Light" | "Dark">("Light");
  const points = internetUse.points;
  const graphPoints = points.map((point, i) => `${54+i*74},${220-point.value*1.8}`).join(" ");
  if (kind === "internet") return <div className={`research-visual visual-internet ${compact ? "visual-compact" : ""}`}>
    <div className="visual-label"><span>Nigeria / Internet use</span><span>2018–2024</span></div>
    <div className="visual-stat"><strong>{points.at(-1)!.value.toFixed(2)}<span>%</span></strong><p>of the population<br />in the 2024 observation</p></div>
    <svg viewBox="0 0 550 270" role="img" aria-label="Nigeria internet use rose from 27.74 percent in 2018 to 41.21 percent in 2024. The vertical scale runs from zero to one hundred percent.">
      {[0,25,50,75,100].map(tick => <g key={tick}><line x1="54" x2="500" y1={220-tick*1.8} y2={220-tick*1.8} stroke="currentColor" opacity=".12" /><text x="12" y={224-tick*1.8}>{tick}</text></g>)}
      <polygon points={`54,220 ${graphPoints} 498,220`} fill="#ffffff70" />
      <polyline points={graphPoints} fill="none" stroke="#245965" strokeWidth="3" strokeLinejoin="round" />
      {points.map((point,i) => <g key={point.year}><circle cx={54+i*74} cy={220-point.value*1.8} r="4" fill="#245965" /><text x={54+i*74} y="247" textAnchor="middle">{point.year}</text></g>)}
    </svg><p className="visual-foot">World Bank / ITU · Percent of population · Source snapshot, 13 Oct 2026</p>
  </div>;
  if (kind === "notion") return <div className={`research-visual visual-notion ${compact ? "visual-compact" : ""}`}>
    <div className="visual-label"><span>The record stays connected</span><span>Proposed model</span></div>
    <div className="record-map"><div className="record-main"><span>Original record</span><strong>Source + date</strong><p>What was actually said or observed</p></div><span className="map-connector" aria-hidden="true" /><div className="record-views"><div><span>01</span><strong>The question</strong></div><div><span>02</span><strong>The finding</strong></div><div><span>03</span><strong>The decision</strong></div></div></div>
    <p className="visual-foot">Illustrative research structure · A relation keeps the route visible</p>
  </div>;
  if (kind === "figma") return <div className={`research-visual visual-figma ${compact ? "visual-compact" : ""}`}>
    <div className="visual-label"><span>One role / Two modes</span><span>Illustrative settings</span></div>
    {!compact && <div className="mode-switch" role="group" aria-label="Example color mode">{(["Light","Dark"] as const).map(item => <button type="button" key={item} aria-pressed={mode===item} onClick={()=>setMode(item)}>{item}</button>)}</div>}
    <div className={`mode-specimen ${mode === "Dark" ? "specimen-dark" : ""}`}><span>A small product decision</span><strong>Same task.<br />Another context.</strong><span className="specimen-action">Start here</span></div>
    <dl className="mode-tokens"><div><dt>Page</dt><dd>{mode === "Light" ? "#FEFEFE" : "#20251D"}</dd></div><div><dt>Text</dt><dd>{mode === "Light" ? "#20251D" : "#FEFEFE"}</dd></div><div><dt>Action</dt><dd>#A8CF8E</dd></div></dl>
    <p className="visual-foot">Original demonstration · These are site colors, not Figma defaults</p>
  </div>;
  return <div className={`research-visual visual-paystack ${compact ? "visual-compact" : ""}`}>
    <div className="visual-label"><span>After checkout</span><span>Proposed response map</span></div>
    <div className="payment-map"><div className="payment-return"><span>01 / Customer returns</span><strong>Check the transaction.</strong></div><span className="map-connector" aria-hidden="true" /><div className="payment-outcomes"><div><i className="state-dot state-wait" /><strong>Waiting</strong><span>Checking the record</span></div><div><i className="state-dot state-paid" /><strong>Confirmed</strong><span>Continue to delivery</span></div><div><i className="state-dot state-retry" /><strong>Incomplete</strong><span>Explain and recover</span></div></div></div>
    <p className="visual-foot">Simplified design map · Based on documented states, not transaction data</p>
  </div>;
}
