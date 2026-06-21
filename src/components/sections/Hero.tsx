"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { meta } from "@/lib/data";

// Each phrase is a direct callback to a real career theme
const CYCLING_PHRASES = [
  { text: "moves numbers.", note: "65% perf · $272M revenue" },
  { text: "reduces friction.", note: "payment funnels · recipe discovery" },
  { text: "thinks for itself.", note: "Claude API · MCP server · AI-native" },
  { text: "scales.", note: "high-traffic pages · $272M revenue · production systems" },
];

const CYCLE_INTERVAL = 2600;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Delay first cycle until entry animations settle
  useEffect(() => {
    const startTimer = setTimeout(() => setHasStarted(true), 1400);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % CYCLING_PHRASES.length);
    }, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, [hasStarted]);

  const currentPhrase = CYCLING_PHRASES[phraseIndex];

  return (
    <section
      ref={ref}
      className="relative min-h-dvh flex flex-col justify-between pt-16 pb-12 px-6 md:px-10 overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle grain texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px",
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-[1200px] mx-auto w-full flex-1 flex flex-col justify-center py-8"
      >
        {/* Name — the anchor recruiters need first */}
        <motion.div {...fadeUp(0.1)} className="mb-3">
          <h1
            className="font-serif text-[#111110]"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
          >
            {meta.name}
          </h1>
        </motion.div>

        {/* Role + location */}
        <motion.div {...fadeUp(0.2)} className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-10 md:mb-12">
          <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase">
            {meta.role}
          </span>
          <span className="w-px h-3 bg-[#E0DDD8]" aria-hidden />
          <span className="font-mono text-[11px] text-[#6B6966] tracking-[0.1em] uppercase">
            {meta.locationFull}
          </span>
        </motion.div>

        {/* Preamble */}
        <motion.p
          {...fadeUp(0.3)}
          className="font-sans text-[#6B6966] text-base md:text-lg mb-4 md:mb-5"
          style={{ letterSpacing: "-0.01em" }}
        >
          Senior engineer who ships software that
        </motion.p>

        {/* The cycling phrase — the centerpiece */}
        <div
          className="relative"
          style={{ minHeight: "clamp(7rem, 10vw, 9.5rem)" }}
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[#B8860B] italic absolute inset-0"
              style={{
                fontSize: "clamp(3.2rem, 9vw, 8rem)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
              }}
            >
              {currentPhrase.text}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Phrase annotation */}
        <div className="mt-6 md:mt-8 h-5 relative" aria-hidden>
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase absolute"
            >
              {currentPhrase.note}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Sub-tagline + dot indicators */}
        <div className="mt-14 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.p {...fadeUp(0.45)} className="font-sans text-[#6B6966] text-sm leading-relaxed max-w-[42ch]">
            {meta.subTagline}
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            className="flex items-center gap-2"
            aria-hidden
          >
            {CYCLING_PHRASES.map((_, i) => (
              <button
                key={i}
                onClick={() => setPhraseIndex(i)}
                aria-hidden
                tabIndex={-1}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === phraseIndex ? "20px" : "5px",
                  height: "5px",
                  backgroundColor: i === phraseIndex ? "#B8860B" : "#E0DDD8",
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        {...fadeUp(0.7)}
        className="max-w-[1200px] mx-auto w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-6">
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] uppercase tracking-[0.08em] text-[#6B6966] hover:text-[#111110] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] uppercase tracking-[0.08em] text-[#6B6966] hover:text-[#111110] transition-colors duration-200"
          >
            GitHub
          </a>
        </div>

        <motion.a
          href="#impact"
          aria-label="Scroll to impact section"
          className="flex items-center gap-2 text-[12px] uppercase tracking-[0.08em] text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200 group"
          whileHover={{ y: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <span>Scroll</span>
          <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform duration-200" />
        </motion.a>
      </motion.div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E0DDD8]" aria-hidden />
    </section>
  );
}
