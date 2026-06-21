"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { meta } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 md:px-10 bg-[#F8F7F4]"
      aria-label="Contact"
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
            Get in touch
          </span>
          <div className="flex-1 h-px bg-[#E0DDD8]" aria-hidden />
        </motion.div>

        {/* Big CTA */}
        <div className="max-w-[700px]">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[#111110] mb-8"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
          >
            Currently open to
            <br />
            <span className="italic text-[#B8860B]">Senior Frontend</span>
            <br />
            opportunities.
          </motion.h2>

          {/* Availability signal — what a recruiter needs to know immediately */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Remote-first",
              "Senior / Staff IC",
              "React + TypeScript",
              "Available now",
            ].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#B8860B] border border-[#B8860B]/30 bg-[#B8860B]/5 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[#6B6966] text-base leading-relaxed mb-10 max-w-[44ch]"
          >
            5+ years building high-impact React and TypeScript products at FinTech scale.
            I'm looking for product-focused teams where engineering quality drives
            measurable business outcomes.
          </motion.p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a
              href={`mailto:${meta.email}`}
              className="group inline-flex items-center gap-3 font-sans font-medium text-[#111110] text-lg border-b-2 border-[#B8860B] pb-1 hover:text-[#B8860B] transition-colors duration-200"
            >
              <span>{meta.email}</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
            <a
              href={meta.resumeUrl}
              download
              className="inline-flex items-center gap-2 font-sans text-sm text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200 border border-[#E0DDD8] hover:border-[#B8860B] px-4 py-2 rounded-full"
              aria-label="Download resume PDF"
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-[1200px] mx-auto mt-16 md:mt-24 pt-10 border-t border-[#E0DDD8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        role="contentinfo"
      >
        <span className="font-serif text-[#111110] text-lg tracking-[-0.02em]">
          Tanmay Mathur
        </span>

        <div className="flex items-center gap-6">
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] uppercase tracking-[0.08em] text-[#6B6966] hover:text-[#111110] transition-colors duration-200 flex items-center gap-1"
          >
            LinkedIn <ArrowUpRight size={11} />
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] uppercase tracking-[0.08em] text-[#6B6966] hover:text-[#111110] transition-colors duration-200 flex items-center gap-1"
          >
            GitHub <ArrowUpRight size={11} />
          </a>
        </div>

        <span className="font-sans text-[12px] text-[#6B6966]">
          © {new Date().getFullYear()} · Houston, TX
        </span>
      </motion.footer>
    </section>
  );
}
