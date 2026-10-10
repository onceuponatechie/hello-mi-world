"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { site } from "@/config/site";

const resourceLinks = [
  { label: "Tools & Templates", href: "#tools-and-templates" },
  { label: "Research Vault", href: "#research-vault" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header id="top" className="relative z-40 px-5 pt-6 min-[600px]:px-6 md:px-10 min-[600px]:pt-8">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="heading text-[20px] tracking-tight text-ink"
        >
          Essy
        </Link>

        <nav aria-label="Main navigation" className="hero-navigation hidden items-center gap-4 md:gap-8 min-[600px]:flex">
          <a
            href={site.stories}
            className="text-[13px] font-normal text-ink transition-colors hover:text-ink"
          >
            Stories
          </a>

          <div className="group relative flex items-center">
            <a href="#resources" className="inline-flex items-center gap-1 text-[13px] font-normal text-ink transition-colors hover:text-ink">
              Resources <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
            </a>
            <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-[18px] border border-ink/10 bg-paper p-2 shadow-[0_20px_50px_-24px_rgba(17,17,17,0.35)]">
                {resourceLinks.map((item) => (
                  <a key={item.label} href={item.href} className="block rounded-[12px] px-3 py-2.5 text-[12px] font-normal text-ink transition-colors hover:bg-stone hover:text-ink">{item.label}</a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#projects"
            className="text-[13px] font-normal text-ink transition-colors hover:text-ink"
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-[13px] font-normal text-ink transition-colors hover:text-ink"
          >
            Services
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-full bg-ink px-6 py-2.5 text-[12px] font-normal text-white transition-opacity hover:opacity-90"
          >
            Say hi
          </a>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-card min-[600px]:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </Button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mt-4 grid gap-1 rounded-3xl border border-ink/10 bg-card p-3 min-[600px]:hidden">
          <a
            href={site.stories}
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-2.5 text-[13px] font-normal text-ink hover:bg-black/5"
          >
            Stories
          </a>

          <a
            href="#resources"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-2.5 text-[13px] font-normal text-ink hover:bg-black/5"
          >
            Resources
          </a>

          <div className="ml-3 grid border-l border-ink/10 pl-3">
            {resourceLinks.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-[12px] text-ink hover:bg-black/5 hover:text-ink">{item.label}</a>
            ))}
          </div>

          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-2.5 text-[13px] font-normal text-ink hover:bg-black/5"
          >
            Projects
          </a>
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-2.5 text-[13px] font-normal text-ink hover:bg-black/5"
          >
            Services
          </a>
        </nav>
      )}
    </header>
  );
}
