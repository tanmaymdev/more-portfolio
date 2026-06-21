"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase mb-3">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <motion.span
            key={item}
            custom={i}
            variants={pillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-sans text-sm text-[#111110] bg-[#EFEFEC] px-3 py-1.5 rounded-full border border-[#E0DDD8]"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-10 bg-[#F8F7F4]"
      aria-label="About"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex items-center gap-6"
        >
          <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase">
            About
          </span>
          <div className="flex-1 h-px bg-[#E0DDD8]" aria-hidden />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20">
          {/* Left — narrative */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[#111110]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              CS from Rice.
              <br />
              <span className="italic text-[#B8860B]">Built to scale.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[#6B6966] text-base leading-relaxed"
            >
              I hold a Master of Computer Science from Rice University (GPA 3.9) — one of
              the top-ranked CS programs in the US. Before that, I was building full-stack
              financial systems at Standard Chartered, integrating enterprise trading
              infrastructure across global markets.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[#6B6966] text-base leading-relaxed"
            >
              That foundation is why I build differently. I don't just ship features — I
              think about system design, data pipelines, and the invisible architecture that
              lets a product scale. At BILL, that meant owning performance engineering,
              driving GraphQL adoption with Apollo Client caching strategies, and setting
              org-wide standards for data-heavy table and charting tooling adopted across
              the entire frontend org.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[#6B6966] text-base leading-relaxed"
            >
              I've also served as Scrum Master for my frontend team while doing deep
              performance engineering work simultaneously. The ability to lead people and
              optimize systems at the same time isn't common. I think of it as the whole job.
            </motion.p>
          </div>

          {/* Right — the contradictions that make him memorable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-0"
          >
            <p className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase mb-6">
              What makes me different
            </p>

            {[
              {
                label: "Computer science depth",
                text: "Rice CS gave me the rigor to reason about systems, not just implement them. I think in algorithms, complexity, and correctness — then translate that into fast, resilient product code.",
              },
              {
                label: "Friction-first thinking",
                text: "Before I write a line of code, I ask: where is the friction? Every project I've shipped has been about removing a step someone was stuck on.",
              },
              {
                label: "AI at both ends",
                text: "I use AI to write faster (Claude Code), and I build products that AI can operate (MCP server). Most engineers are on one side of this line.",
              },
              {
                label: "Visible + invisible craft",
                text: "My best work is invisible. The 65% perf gain nobody noticed because the page just felt fast. The $272M funnel that just... worked.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-5 border-b border-[#E0DDD8] last:border-b-0"
              >
                <p className="font-sans font-medium text-[#111110] text-sm mb-1.5">{item.label}</p>
                <p className="font-sans text-[#6B6966] text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <div className="pt-12 border-t border-[#E0DDD8]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase mb-10"
          >
            Skills &amp; Tools
          </motion.p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <SkillGroup label="Core Stack" items={skills.core} />
            <SkillGroup label="Engineering" items={skills.engineering} />
            <SkillGroup label="Testing" items={skills.testing} />
            <SkillGroup label="AI & LLM" items={skills.ai} />
            <SkillGroup label="Observability" items={skills.observability} />
            <SkillGroup label="Also fluent in" items={skills.also} />
          </div>

          {/* Accessibility callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-start gap-4 p-5 rounded-xl border border-[#E0DDD8] bg-[#FAFAF7]"
          >
            <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase mt-0.5 flex-shrink-0">
              a11y
            </span>
            <p className="font-sans text-[#6B6966] text-sm leading-relaxed">
              I build to{" "}
              <span className="text-[#111110] font-medium">WCAG 2.1 AA</span> — semantic HTML,
              keyboard navigation, focus management, and ARIA where native semantics fall short.
              Accessibility isn't a checklist item; it's part of the definition of done.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
