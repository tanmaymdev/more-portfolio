"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Lock } from "lucide-react";
import { projects } from "@/lib/data";
import { ProjectFrame, BillPreview, InvitewaaleReel, VidhikoshReel } from "@/components/ProjectPreview";

// Projects with a bespoke preview (illustration or multi-image reel) instead of a
// single screenshot. Anything not listed here falls back to `previewImage`.
const CUSTOM_PREVIEWS: Record<string, React.ReactNode> = {
  "bill-reporting": <BillPreview />,
  vidhikosh: <VidhikoshReel />,
  invitewaale: <InvitewaaleReel />,
};

function ProjectCase({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const isEnterprise = !!project.company;
  const customPreview = CUSTOM_PREVIEWS[project.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[#E0DDD8]"
    >
      {/* Always-visible header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left pt-8 md:pt-10 group cursor-pointer"
        aria-expanded={expanded}
        aria-controls={`project-body-${project.id}`}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            {/* Index + badges + stack */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase">
                0{index + 1}
              </span>
              {isEnterprise && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#F8F7F4] bg-[#111110] tracking-[0.06em] uppercase px-2.5 py-1 rounded-full">
                  <Lock size={9} />
                  {project.company} · Enterprise
                </span>
              )}
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] text-[#6B6966] tracking-[0.06em] uppercase border border-[#E0DDD8] px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project name */}
            <h3
              className="font-serif text-[#111110] group-hover:text-[#B8860B] transition-colors duration-300"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {project.name}
            </h3>

            {/* Problem — always visible */}
            <p className="font-sans text-[#6B6966] text-base mt-3 max-w-[52ch] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Links + expand toggle */}
          <div className="flex flex-col items-end gap-3 flex-shrink-0 mt-1">
            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.08em] text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200"
                  aria-label={`View ${project.name} source on GitHub`}
                >
                  <span>Code</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.08em] text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200"
                  aria-label={`Visit ${project.name}`}
                >
                  <span>Live</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
              {isEnterprise && !project.url && (
                <span className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.08em] text-[#6B6966]">
                  <Lock size={11} />
                  <span>Internal</span>
                </span>
              )}
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#6B6966]"
              aria-hidden
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>
        </div>

        {/* Preview — always visible, framed in browser chrome */}
        <div className="mt-6">
          <ProjectFrame
            url={project.previewUrl}
            internal={isEnterprise && !project.previewImage}
          >
            {customPreview ? (
              customPreview
            ) : project.previewImage ? (
              <>
                {/* sits behind the screenshot — shows during load / if asset missing */}
                <div className="absolute inset-0 grid place-items-center bg-[#EFEFEC]">
                  <span className="font-mono text-[11px] text-[#A8A6A2] tracking-[0.1em] uppercase">
                    {project.previewUrl}
                  </span>
                </div>
                <Image
                  src={project.previewImage}
                  alt={`${project.name} — product screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1100px"
                  loading="lazy"
                  className="object-cover object-top"
                />
              </>
            ) : null}
          </ProjectFrame>
        </div>
      </button>

      {/* Expandable case study body */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`project-body-${project.id}`}
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 pb-10 grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Solution */}
              <div>
                <p className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase mb-3">
                  The Solution
                </p>
                <p className="font-sans text-[#111110] text-base leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <p className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase mb-3">
                  {isEnterprise ? "Engineering Decisions" : "What I Built"}
                </p>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-[#B8860B]" aria-hidden />
                      <span className="font-sans text-[#6B6966] text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 md:py-36 px-6 md:px-10 bg-[#F8F7F4]"
      aria-label="Projects"
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
            Selected work
          </span>
          <div className="flex-1 h-px bg-[#E0DDD8]" aria-hidden />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[#111110] mb-14"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
        >
          Problems I've solved
          <br />
          <span className="italic text-[#B8860B]">from the ground up.</span>
        </motion.h2>

        {/* Projects */}
        <div className="border-t border-[#E0DDD8]">
          {projects.map((project, i) => (
            <ProjectCase key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* AI fluency callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-8 bg-[#EFEFEC] rounded-2xl"
        >
          <p className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase mb-4">
            AI Fluency
          </p>
          <p
            className="font-serif text-[#111110] text-xl md:text-2xl leading-snug mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            I don't just use AI tools —{" "}
            <span className="italic">I build surfaces for AI to use.</span>
          </p>
          <p className="font-sans text-[#6B6966] text-base leading-relaxed max-w-[52ch]">
            Claude Code and GitHub Copilot accelerate my development. The Invitewaale MCP server I
            published lets Claude create invites and manage RSVPs without touching a single button.
            That's a new kind of frontend engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
