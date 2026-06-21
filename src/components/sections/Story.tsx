"use client";

import { motion } from "framer-motion";
import { roles, education } from "@/lib/data";

export default function Story() {
  return (
    <section
      id="story"
      className="py-24 md:py-36 px-6 md:px-10"
      style={{ backgroundColor: "#111110" }}
      aria-label="Career Story"
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
            Career
          </span>
          <div className="flex-1 h-px bg-[#2A2A28]" aria-hidden />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif mb-16"
          style={{
            color: "#F8F7F4",
            fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}
        >
          From trading floors
          <br />
          <span className="italic text-[#B8860B]">to FinTech products.</span>
        </motion.h2>

        {/* Context paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[#A09D9A] text-base leading-relaxed max-w-[52ch] mb-16"
        >
          I started in enterprise banking systems at Standard Chartered — integrating
          RBI trading infrastructure with Groovy and Java. Then Rice University. Then BILL,
          where I've been shipping product that touches $272M in annual recurring revenue.
          Every jump made me a better engineer.
        </motion.p>

        {/* Timeline */}
        <div className="border-t border-[#2A2A28]">
          {roles.map((role, i) => (
            <div
              key={`${role.company}-${role.period}`}
              style={{ color: "#F8F7F4" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-[#2A2A28] last:border-b-0"
              >
                {/* Left */}
                <div className="flex flex-row md:flex-col gap-3 md:gap-1.5 flex-shrink-0">
                  <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.08em] uppercase">
                    {role.period}
                  </span>
                  <span className="font-sans text-[12px] text-[#6B6966] md:mt-1">
                    {role.location}
                  </span>
                </div>

                {/* Right */}
                <div>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-5">
                    <h3
                      className="font-serif"
                      style={{
                        color: "#F8F7F4",
                        fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                      }}
                    >
                      {role.role}
                    </h3>
                    <span className="font-sans text-[#6B6966] text-sm">
                      at {role.company}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {role.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <span
                          className="mt-[9px] flex-shrink-0 w-1 h-1 rounded-full bg-[#B8860B]"
                          aria-hidden
                        />
                        <span className="font-sans text-[#A09D9A] text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Education strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-12 border-t border-[#2A2A28] grid md:grid-cols-2 gap-6"
        >
          {education.map((edu) => (
            <div key={edu.degree} className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.08em] uppercase">
                {edu.year}
              </span>
              <p className="font-serif" style={{ color: "#F8F7F4", fontSize: "1.1rem", letterSpacing: "-0.015em" }}>
                {edu.degree}
              </p>
              <p className="font-sans text-[#6B6966] text-sm">
                {edu.school} · GPA {edu.gpa}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
