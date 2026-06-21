"use client";

import { motion } from "framer-motion";

const items = [
  "React", "TypeScript", "Next.js", "Framer Motion", "Webpack",
  "Datadog", "FullStory", "Claude API", "Gemini API", "MCP Server",
  "Redux", "Node.js", "A/B Testing", "VGS", "Performance Engineering",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y py-4"
      style={{ borderColor: "#E0DDD8", backgroundColor: "#F8F7F4" }}
      aria-hidden
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 flex-shrink-0">
            <span
              className="font-mono text-[11px] text-[#6B6966] tracking-[0.12em] uppercase"
            >
              {item}
            </span>
            <span
              className="inline-block w-1 h-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#B8860B" }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
