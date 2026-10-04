"use client";

import { ArrowUpRight, Layers } from "lucide-react";
import { motion } from "framer-motion";
const reading = "/assets/essy-reading.jpg";
const phone = "/assets/essy-phone.jpg";
const slide = "/assets/essy-slide.jpg";
const notes = "/assets/essy-notes.jpg";
const productLabIcon = "/assets/product-lab-icon-new.png";
import { WhyNotBuildCard } from "@/components/WhyNotBuildCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/* Shared card anatomy ------------------------------------------------ */

function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${className}`}
    >
      {children}
    </span>
  );
}

function CornerArrow({ tone = "light" }: { tone?: "light" | "dark" | "glass" }) {
  const tones = {
    light: "bg-ink/[0.05] text-ink group-hover:bg-ink group-hover:text-white",
    dark: "bg-white/10 text-white group-hover:bg-butter group-hover:text-ink",
    glass: "bg-white/90 text-ink backdrop-blur group-hover:bg-ink group-hover:text-white",
  };
  return (
    <span
      aria-hidden
      className={`absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full transition-colors duration-300 ${tones[tone]}`}
    >
      <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </span>
  );
}

const cardBase =
  "premium-card group relative flex flex-col overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-1";

/* Section ------------------------------------------------------------ */

export function BentoGrid() {
  return (
    <section id="resources" className="px-4 pb-14 pt-0 sm:px-8 sm:pb-20">
      <motion.div
        variants={gridStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-[360px] gap-4 md:max-w-6xl md:grid-cols-2 md:grid-rows-[235px_235px_auto] lg:grid-cols-12 lg:grid-rows-[235px_235px]"
      >
        {/* ---------- Why Not Build? — dark anchor, tall left ---------- */}
        <motion.div variants={cardReveal} className="order-1 flex md:row-span-2 lg:col-span-4">
          <div className="flex w-full items-center justify-center py-2 lg:py-0">
            <WhyNotBuildCard />
          </div>
        </motion.div>

        {/* ---------- Tools & Templates ---------- */}
        <motion.div variants={cardReveal} className="order-2 flex lg:col-span-5">
          <article id="tools-and-templates" className={`${cardBase} w-full scroll-mt-24 bg-stone p-7 ring-1 ring-black/5`}>
            <div className="flex flex-1 items-center gap-4">
              {/* copy + the site's own pill button */}
              <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">
                <div>
                  <Kicker className="text-muted-ink">Free kits & files</Kicker>
                  <h3 className="mt-3 text-[24px] font-medium leading-tight tracking-[-0.8px] text-ink lg:text-[26px]">
                    Tools & Templates
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted-ink">
                    The systems, files, and checklists I actually use — packaged up and
                    free to take.
                  </p>
                </div>

                <a href="#tools-and-templates" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  Browse the kits
                </a>
              </div>

              {/* fanned cards — sized in % of their column so they scale with the
                  card instead of colliding with the copy on narrow widths */}
              <div className="flex w-[40%] max-w-[200px] shrink-0 items-center">
                <div className="relative aspect-[196/145] w-full">
                  {[
                    { src: phone, left: "0%", top: "4.8%", rotate: -9 },
                    { src: slide, left: "26.5%", top: "0%", rotate: -1 },
                    { src: notes, left: "53%", top: "6.2%", rotate: 8 },
                  ].map((c, i) => (
                    <motion.img
                      key={i}
                      src={c.src}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      initial={{ x: `${(1 - i) * 53}%`, rotate: 0, opacity: 0 }}
                      whileInView={{ x: "0%", rotate: c.rotate, opacity: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ delay: 0.35 + i * 0.12, duration: 0.7, ease: EASE }}
                      style={{ left: c.left, top: c.top, zIndex: 3 - i }}
                      className="absolute h-[94%] w-[47%] rounded-[14px] object-cover shadow-[0_16px_34px_-18px_rgba(0,0,0,0.45)] ring-1 ring-black/[0.06]"
                    />
                  ))}

                  {/* minimalist circular badge sitting over the fan */}
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 250, damping: 18 }}
                    className="absolute bottom-[8%] left-[36%] z-10 grid aspect-square w-[24%] place-items-center rounded-full bg-paper shadow-[0_10px_24px_-10px_rgba(0,0,0,0.4)] ring-1 ring-black/[0.06]"
                  >
                    <span className="grid aspect-square w-[58%] place-items-center rounded-full bg-sage-soft text-ink">
                      <Layers size={12} />
                    </span>
                  </motion.span>
                </div>
              </div>
            </div>
          </article>
        </motion.div>

        {/* ---------- portrait → about ---------- */}
        <motion.div variants={cardReveal} className="order-5 flex md:min-h-[235px] lg:order-3 lg:col-span-3">
          <a href="#about" className={`${cardBase} w-full ring-1 ring-black/5`}>
            <CornerArrow tone="glass" />
            <img
              src={reading}
              alt="Essy reading a book on a sunlit sofa"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-6 pb-5 pt-14">
              <Kicker className="text-white/60">The human behind it</Kicker>
              <div className="mt-1 text-[17px] font-medium tracking-tight text-white">
                Meet Essy
              </div>
            </div>
            {/* keeps the card at a sensible height when the grid rows collapse on mobile */}
            <div className="h-64 lg:h-full" />
          </a>
        </motion.div>

        {/* ---------- courses — the serif accent card ---------- */}
        <motion.div variants={cardReveal} className="order-4 flex md:min-h-[235px] lg:col-span-3">
          <article id="classroom" className={`${cardBase} w-full scroll-mt-24 justify-between bg-sage-soft p-7`}>
            <div>
              <Kicker className="text-ink/45">Courses & certifications</Kicker>
              <h3 className="mt-3 font-serif text-[34px] italic leading-none tracking-tight text-ink">
                the classroom
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/70 lg:max-w-[26ch]">
                Courses I&apos;m building, the ones I&apos;ve curated, and the certifications
                earned along the way.
              </p>
            </div>
            <a href="#classroom" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  Enter the classroom
                </a>
          </article>
        </motion.div>

        {/* ---------- Research Vault ---------- */}
        <motion.div variants={cardReveal} className="order-3 flex lg:order-5 lg:col-span-5">
          <article id="research-vault" className={`${cardBase} min-h-[235px] w-full scroll-mt-24 bg-stone p-7 ring-1 ring-black/5 lg:min-h-0`}>
            <div className="relative z-10 max-w-[62%]">
              <Kicker className="text-ink/45">Teardowns & case studies</Kicker>
              <h3 className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.8px] text-ink">
                Research Vault
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink/60">
                Research, teardowns, and evidence worth keeping — across products, markets, and culture.
              </p>
            </div>
            {/* spacer keeps a minimum gap while pushing the button to the bottom */}
            <div className="min-h-6 flex-1" />
            <a href="#research-vault" className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  Open the Vault
                </a>
            <img
              src={productLabIcon}
              alt=""
              aria-hidden
              loading="lazy"
              width={1024}
              height={1024}
              className="pointer-events-none absolute bottom-0 right-0 h-[92%] w-auto max-w-[46%] select-none object-contain object-right-bottom drop-shadow-[0_24px_44px_rgba(17,17,17,0.18)] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:rotate-2"
            />
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}
