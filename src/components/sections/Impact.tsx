"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { impacts } from "@/lib/data";

function MetricItem({
  item,
  index,
  isActive,
}: {
  item: (typeof impacts)[0];
  index: number;
  isActive: boolean;
}) {
  const count = useCountUp(item.value, 1600 + index * 100, isActive);
  const displayValue = `${item.prefix ?? ""}${count}${item.suffix ?? ""}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4 py-8 md:py-10 border-b border-[#E0DDD8] last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-8 first:md:pl-0 last:md:pr-0"
    >
      {/* Index tag */}
      <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase">
        0{index + 1}
      </span>

      {/* The number */}
      <div
        className="font-serif text-[#111110] leading-none tracking-[-0.03em]"
        style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        aria-label={displayValue}
      >
        {displayValue}
      </div>

      {/* Label */}
      <div>
        <p className="font-sans font-medium text-[#111110] text-sm leading-snug mb-1">
          {item.label}
        </p>
        <p className="font-sans text-[#6B6966] text-sm leading-relaxed max-w-[28ch]">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  const { ref, inView } = useInView(0.25);

  return (
    <section
      id="impact"
      className="py-24 md:py-36 px-6 md:px-10 bg-[#F8F7F4]"
      aria-label="Impact"
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
            By the numbers
          </span>
          <div className="flex-1 h-px bg-[#E0DDD8]" aria-hidden />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[#111110] mb-16"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
        >
          Every project I ship
          <br />
          <span className="italic text-[#B8860B]">moves a number.</span>
        </motion.h2>

        {/* Metrics grid */}
        <div ref={ref} className="md:grid md:grid-cols-4 divide-x-0 md:divide-x border-t border-[#E0DDD8] md:border-t-0">
          {impacts.map((item, i) => (
            <MetricItem key={item.label} item={item} index={i} isActive={inView} />
          ))}
        </div>

        {/* Context footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 font-sans text-[#6B6966] text-sm"
        >
          Measured in production at{" "}
          <span className="text-[#111110] font-medium">BILL</span> and{" "}
          <span className="text-[#111110] font-medium">Standard Chartered</span>.
          Not projections. Not estimates.
        </motion.p>
      </div>
    </section>
  );
}
