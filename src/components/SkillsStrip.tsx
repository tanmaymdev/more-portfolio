"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "GraphQL",
  "Micro Frontends",
  "Monorepo",
  "AWS",
  "Framer Motion",
  "Webpack",
  "Jest",
  "Playwright",
  "React Testing Library",
  "Datadog",
  "Node.js",
  "Figma",
  "Claude API",
  "Accessibility (WCAG 2.1)",
];

export default function SkillsStrip() {
  return (
    <div
      className="border-y border-[#E0DDD8] bg-[#F8F7F4] px-6 md:px-10 py-4"
      aria-label="Core technologies"
    >
      <div className="max-w-[1200px] mx-auto flex items-center gap-3 flex-wrap">
        <span className="font-mono text-[10px] text-[#B8860B] tracking-[0.1em] uppercase flex-shrink-0 mr-2">
          Stack
        </span>
        {SKILLS.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[12px] text-[#6B6966]"
          >
            {skill}
            {i < SKILLS.length - 1 && (
              <span className="ml-3 text-[#E0DDD8]" aria-hidden>·</span>
            )}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
