"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Check, ChevronDown, Clock, Copy, MapPin, Printer, Users } from "lucide-react";
import { trips } from "@/lib/trips";
import type { Trip } from "@/lib/trips";

const tripCount = trips.length;

function formatTripText(trip: Trip): string {
  const lines: string[] = [
    trip.name,
    [trip.location, trip.period, trip.duration].filter(Boolean).join(" · "),
    "",
  ];
  for (const day of trip.days) {
    lines.push(`${day.label} · ${day.title}`);
    for (const h of day.highlights) {
      lines.push(`  • ${h}`);
    }
    lines.push("");
  }
  return lines.join("\n").trim();
}

function printTrip(trip: Trip) {
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${trip.name}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: Georgia, "Times New Roman", serif;
      max-width: 680px;
      margin: 48px auto;
      padding: 0 24px;
      color: #111110;
      line-height: 1.6;
    }
    h1 { font-size: 2rem; letter-spacing: -0.03em; margin-bottom: 6px; }
    .meta {
      font-family: "Courier New", monospace;
      font-size: 0.75rem;
      color: #6B6966;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 36px;
    }
    .day { margin-bottom: 28px; }
    .day-label {
      font-family: "Courier New", monospace;
      font-size: 0.7rem;
      color: #B8860B;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .day-title {
      font-size: 1.05rem;
      font-weight: bold;
      margin: 4px 0 10px;
    }
    ul { padding-left: 18px; }
    li { font-size: 0.9rem; color: #444; margin-bottom: 5px; }
    hr { border: none; border-top: 1px solid #E0DDD8; margin: 32px 0; }
    @media print {
      body { margin: 24px; }
      @page { margin: 1.5cm; }
    }
  </style>
</head>
<body>
  <h1>${trip.name}</h1>
  <p class="meta">${[trip.location, trip.period, trip.duration].filter(Boolean).join(" · ")}</p>
  ${trip.days.map((day, i) => `
    ${i > 0 ? "<hr />" : ""}
    <div class="day">
      <div class="day-label">${day.label}</div>
      <div class="day-title">${day.title}</div>
      <ul>${day.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
    </div>
  `).join("")}
</body>
</html>`);
  w.document.close();
  w.print();
}

function ExportActions({ trip }: { trip: Trip }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.stopPropagation();
    await navigator.clipboard.writeText(formatTripText(trip));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handlePrint(e: React.MouseEvent) {
    e.stopPropagation();
    printTrip(trip);
  }

  return (
    <div className="flex items-center gap-3 mt-4">
      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] uppercase text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200"
        aria-label="Copy itinerary as text"
      >
        {copied ? (
          <>
            <Check size={11} className="text-[#B8860B]" />
            <span className="text-[#B8860B]">Copied</span>
          </>
        ) : (
          <>
            <Copy size={11} />
            <span>Copy</span>
          </>
        )}
      </button>
      <span className="w-px h-3 bg-[#E0DDD8]" aria-hidden />
      <button
        onClick={handlePrint}
        className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] uppercase text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200"
        aria-label="Print or save as PDF"
      >
        <Printer size={11} />
        <span>PDF</span>
      </button>
    </div>
  );
}

function TripCase({ trip, index }: { trip: Trip; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[#E0DDD8]"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left pt-8 md:pt-10 group cursor-pointer"
        aria-expanded={expanded}
        aria-controls={`trip-body-${trip.id}`}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            {/* Index + type badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase">
                0{index + 1}
              </span>
              <span
                className={`font-mono text-[10px] tracking-[0.06em] uppercase px-2 py-0.5 rounded-full border ${
                  trip.type === "national-park"
                    ? "border-[#B8860B] text-[#B8860B]"
                    : "border-[#E0DDD8] text-[#6B6966]"
                }`}
              >
                {trip.type === "national-park" ? "National Park" : "City"}
              </span>
            </div>

            {/* Trip name */}
            <h2
              className="font-serif text-[#111110] group-hover:text-[#B8860B] transition-colors duration-300"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {trip.name}
            </h2>

            {/* Teaser */}
            <p className="font-sans text-[#6B6966] text-base mt-3 max-w-[52ch] leading-relaxed">
              {trip.teaser}
            </p>
          </div>

          {/* Meta + chevron */}
          <div className="flex flex-col items-end gap-3 flex-shrink-0 mt-1">
            <div className="flex flex-col items-end gap-1.5">
              {trip.location && (
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#6B6966]">
                  <MapPin size={10} aria-hidden />
                  {trip.location}
                </span>
              )}
              {trip.period && (
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#6B6966]">
                  <Calendar size={10} aria-hidden />
                  {trip.period}
                </span>
              )}
              {trip.duration && (
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#6B6966]">
                  <Clock size={10} aria-hidden />
                  {trip.duration}
                </span>
              )}
              {trip.companions && (
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#6B6966]">
                  <Users size={10} aria-hidden />
                  {trip.companions}
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
      </button>

      {/* Export actions — outside the button to avoid nested <button> */}
      {trip.days.length > 0 && (
        <div className="pb-4">
          <ExportActions trip={trip} />
        </div>
      )}

      {/* Expandable itinerary */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`trip-body-${trip.id}`}
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 pb-10">
              {trip.days.length === 0 ? (
                <p className="font-mono text-[11px] text-[#A8A6A2] tracking-[0.1em] uppercase">
                  Itinerary coming soon
                </p>
              ) : (
                <div className="space-y-8">
                  {trip.days.map((day, i) => (
                    <div key={i} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8">
                      <div className="md:pt-0.5">
                        <p className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase">
                          {day.label}
                        </p>
                        <p className="font-sans font-medium text-[#111110] text-base mt-1 leading-snug">
                          {day.title}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {day.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span
                              className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-[#B8860B]"
                              aria-hidden
                            />
                            <span className="font-sans text-[#6B6966] text-sm leading-relaxed">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function ExpeditionsPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-24 md:pb-20 md:px-10"
        aria-label="Expeditions hero"
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
              Expeditions
            </span>
            <Link
              href="/"
              className="flex items-center gap-1.5 font-mono text-[11px] text-[#6B6966] hover:text-[#B8860B] transition-colors duration-200 tracking-[0.06em] uppercase"
            >
              <ArrowLeft size={11} />
              Portfolio
            </Link>
          </motion.div>

          {/* Headline */}
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
            Life between
            <br />
            <span className="italic text-[#B8860B]">the sprints.</span>
          </motion.h1>

          {/* Subtitle + trip counter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-14"
          >
            <p className="font-sans text-[#6B6966] text-base leading-relaxed max-w-[42ch]">
              When I'm not shipping features, I'm out somewhere worth
              visiting. Itineraries included.
            </p>

            <div className="flex items-center gap-2.5 flex-shrink-0">
              <span className="font-mono text-[11px] text-[#B8860B] tracking-[0.1em] uppercase">
                {tripCount} expedition{tripCount !== 1 ? "s" : ""}
              </span>
              <span className="w-px h-3 bg-[#E0DDD8]" aria-hidden />
              <span className="font-mono text-[11px] text-[#A8A6A2] tracking-[0.1em] uppercase">
                and counting
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expedition list */}
      <section className="px-6 md:px-10 pb-32" aria-label="Expedition itineraries">
        <div className="max-w-[1200px] mx-auto">
          <div className="border-t border-[#E0DDD8]">
            {trips.map((trip, i) => (
              <TripCase key={trip.id} trip={trip} index={i} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
