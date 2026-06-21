"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { playgroundProjects, ideaSeeds } from "@/lib/playground";
import type { PlaygroundProject, IdeaSeed } from "@/lib/playground";

/* ─── Category label map ─────────────────────────────────── */
const CATEGORY_LABELS: Record<string, string> = {
  utility: "Utility",
  game: "Game",
  fun: "Fun",
  nostalgia: "Nostalgia",
  experiment: "Experiment",
  tool: "Tool",
};

/* ─── Artifact card ──────────────────────────────────────── */
function ArtifactCard({ project, index }: { project: PlaygroundProject; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col border border-dashed border-[#E0DDD8] rounded-2xl
                 p-7 md:p-8 bg-[#F8F7F4]
                 transition-all duration-500
                 hover:border-[#B8860B]
                 hover:shadow-[0_12px_48px_rgba(184,134,11,0.07)]"
    >
      {/* ── Top row: catalog № · category stamp · live dot ── */}
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.14em] uppercase select-none">
          №{String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-2.5">
          {/* Category stamp */}
          <span
            className="font-mono text-[10px] tracking-[0.08em] uppercase
                       border border-dashed border-[#D0CCC7] text-[#A8A6A2]
                       px-2.5 py-0.5 rounded-full
                       group-hover:border-[#C4A84A] group-hover:text-[#B8860B]
                       transition-colors duration-300"
          >
            {CATEGORY_LABELS[project.category] ?? project.category}
          </span>

          {/* Pulsing live dot */}
          {project.status === "live" && (
            <span className="relative flex h-2 w-2 flex-shrink-0" aria-label="Live">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          )}
        </div>
      </div>

      {/* ── Year ─────────────────────────────────────────────── */}
      <p className="font-mono text-[10px] text-[#C0BDB9] tracking-[0.1em] mb-2">
        {project.year}
      </p>

      {/* ── Title ────────────────────────────────────────────── */}
      <h3
        className="font-serif text-[#111110] group-hover:text-[#B8860B]
                   transition-colors duration-300 mb-3 flex-shrink-0"
        style={{
          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
        }}
      >
        {project.title}
      </h3>

      {/* ── Tagline ──────────────────────────────────────────── */}
      <p className="font-sans text-[#6B6966] text-sm leading-relaxed mb-6 flex-1">
        {project.tagline}
      </p>

      {/* ── Tech stack ───────────────────────────────────────── */}
      <div className="flex flex-wrap gap-1.5 mb-7">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] text-[#6B6966] tracking-[0.06em] uppercase
                       bg-[#EFEFEC] px-2.5 py-0.5 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ── Hidden annotation — fades in on hover ────────────── */}
      {/*   Always in DOM (no layout shift), revealed by color    */}
      <div
        className="border-t border-dashed border-[#ECEAE5] pt-5 mb-6
                   group-hover:border-[#D4C18A] transition-colors duration-500"
      >
        <p
          className="font-sans text-[11px] leading-relaxed italic
                     text-[#D0CCC8] group-hover:text-[#8A8480]
                     transition-colors duration-500"
        >
          <span className="not-italic font-mono text-[10px]">✎</span>
          {"  "}
          {project.inspiration}
        </p>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex items-center gap-1.5
                   font-mono text-[11px] tracking-[0.1em] uppercase
                   text-[#6B6966] hover:text-[#B8860B]
                   transition-colors duration-200"
        aria-label={`Open ${project.title} — opens in new tab`}
      >
        <span>Open project</span>
        <ArrowUpRight
          size={11}
          className="transition-transform duration-200
                     group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        />
      </a>
    </motion.article>
  );
}

/* ─── Idea seed card ─────────────────────────────────────── */
function IdeaCard({ idea, index }: { idea: IdeaSeed; index: number }) {
  const statusStyle =
    idea.status === "sketching"
      ? "border-[#C4A84A] text-[#B8860B]"
      : idea.status === "prototyping"
      ? "border-[#81C784] text-[#4CAF50]"
      : "border-[#D0CCC7] text-[#A8A6A2]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.06 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group p-5 border border-dashed border-[#D8D4CE] rounded-xl
                 bg-[#FAFAF7]
                 hover:border-[#C4B88A] hover:bg-[#F8F5EA]
                 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3
          className="font-serif text-[#111110] text-base leading-snug"
          style={{ letterSpacing: "-0.02em" }}
        >
          {idea.title}
        </h3>
        <span
          className={`flex-shrink-0 font-mono text-[9px] tracking-[0.08em] uppercase
                      px-2 py-0.5 rounded-full border ${statusStyle}`}
        >
          {idea.status}
        </span>
      </div>
      <p className="font-sans text-[#8A8480] text-xs leading-relaxed">{idea.spark}</p>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function PlaygroundPage() {
  const count = playgroundProjects.length;

  return (
    <main className="min-h-screen bg-[#F8F7F4]">

      {/* ═══ HERO ════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-24 md:pb-20 md:px-10"
        aria-label="Playground hero"
      >
        {/* Dot-grid paper texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #C8C4BC 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            opacity: 0.22,
          }}
        />

        <div className="max-w-[1200px] mx-auto relative">

          {/* Breadcrumb row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between mb-8 md:mb-10"
          >
            <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.14em] uppercase">
              Playground
            </span>
            <Link
              href="/"
              className="flex items-center gap-1.5 font-mono text-[11px] text-[#6B6966]
                         hover:text-[#B8860B] transition-colors duration-200
                         tracking-[0.06em] uppercase"
            >
              <ArrowLeft size={11} />
              Portfolio
            </Link>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[#111110]"
            style={{
              fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              maxWidth: "14ch",
            }}
          >
            Built for fun.
            <br />
            <span className="italic text-[#B8860B]">Shipped for real.</span>
          </motion.h1>

          {/* Subtitle + artifact counter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-14"
          >
            <p className="font-sans text-[#6B6966] text-base leading-relaxed max-w-[42ch]">
              Not every project needs a pitch deck. These exist because the idea was
              too interesting — or too fun — to leave unbuilt.
            </p>

            <div className="flex items-center gap-2.5 flex-shrink-0">
              <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase">
                {count} artifact{count !== 1 ? "s" : ""}
              </span>
              <span className="w-px h-3 bg-[#E0DDD8]" aria-hidden />
              <span className="font-mono text-[11px] text-[#A8A6A2] tracking-[0.1em] uppercase">
                and counting
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══ ARTIFACTS ═══════════════════════════════════════ */}
      <section
        className="px-6 md:px-10 pb-20 md:pb-28"
        aria-label="Playground projects"
      >
        <div className="max-w-[1200px] mx-auto">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 mb-10"
          >
            <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase">
              The collection
            </span>
            <div className="flex-1 h-px bg-[#E0DDD8]" aria-hidden />
          </motion.div>

          {/* 2-col artifact grid — odd last card naturally sits left */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {playgroundProjects.map((project, i) => (
              <ArtifactCard key={project.slug} project={project} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ═══ IDEAS INCUBATING ════════════════════════════════ */}
      <section
        className="px-6 md:px-10 pb-24 md:pb-32"
        aria-label="Ideas in progress"
      >
        <div className="max-w-[1200px] mx-auto border-t border-[#E0DDD8] pt-14 md:pt-20">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-12"
          >
            <p className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase mb-4">
              On the bench
            </p>
            <h2
              className="font-serif text-[#111110]"
              style={{
                fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
              }}
            >
              Current ideas floating{" "}
              <br className="hidden sm:block" />
              <span className="italic text-[#B8860B]">around my head.</span>
            </h2>
            <p className="font-sans text-[#6B6966] text-sm leading-relaxed mt-4 max-w-[46ch]">
              These haven't been built yet — but they live in notes, sketches, and
              late-night conversations. Some will ship. Some won't. That's the
              nature of curiosity.
            </p>
          </motion.div>

          {/* Idea seed grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {ideaSeeds.map((idea, i) => (
              <IdeaCard key={idea.title} idea={idea} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ═══ FOOTER NAV ══════════════════════════════════════ */}
      <div className="px-6 md:px-10 pb-16">
        <div className="max-w-[1200px] mx-auto border-t border-[#E0DDD8] pt-8
                        flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-[11px] text-[#6B6966]
                       hover:text-[#B8860B] transition-colors duration-200
                       tracking-[0.06em] uppercase"
          >
            <ArrowLeft size={11} />
            Back to portfolio
          </Link>
          <span className="font-mono text-[11px] text-[#C0BDB9] tracking-[0.06em] uppercase">
            Tanmay Mathur
          </span>
        </div>
      </div>

    </main>
  );
}
