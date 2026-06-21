import Image from "next/image";
import { Lock } from "lucide-react";

import type { StaticImageData } from "next/image";

// The five invite sections, in page order — they compose the real invite page.
import invite1 from "../../public/projects/invitewaale/invite-image1.png";
import invite2 from "../../public/projects/invitewaale/invite-image2.png";
import invite3 from "../../public/projects/invitewaale/invite-image3.png";
import invite4 from "../../public/projects/invitewaale/invite-image4.png";
import invite5 from "../../public/projects/invitewaale/invite-image5.png";

// Vidhikosh — a tour through the real app: paste a link → AI extracts →
// clean recipe → nutrition → saved in your library.
import vidhiShare from "../../public/projects/vidhikosh/share-recipe.png";
import vidhiGenerating from "../../public/projects/vidhikosh/ai-generating.png";
import vidhiRecipe from "../../public/projects/vidhikosh/recipe-steps.png";
import vidhiNutrition from "../../public/projects/vidhikosh/nutrition.png";
import vidhiDashboard from "../../public/projects/vidhikosh/dashboard.png";

// A consistent browser-chrome frame around every project preview — real
// screenshots for live apps, the illustrated mockup for internal work.
export function ProjectFrame({
  url,
  internal = false,
  children,
}: {
  url: string;
  internal?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#E0DDD8] bg-[#0F1929]">
      {/* Chrome bar */}
      <div className="flex items-center gap-3 px-3.5 h-[34px] bg-[#EFEFEC] border-b border-[#E0DDD8]">
        <div className="flex items-center gap-1.5 flex-shrink-0" aria-hidden>
          <span className="w-2.5 h-2.5 rounded-full bg-[#E0DDD8]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E0DDD8]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E0DDD8]" />
        </div>
        <div className="flex-1 flex justify-center min-w-0">
          <span className="inline-flex items-center gap-1.5 max-w-full truncate bg-[#F8F7F4] border border-[#E0DDD8] rounded-full px-3 py-0.5 font-mono text-[11px] text-[#6B6966] tracking-[0.02em]">
            {internal && (
              <Lock size={10} className="flex-shrink-0 text-[#B8860B]" />
            )}
            <span className="truncate">{url}</span>
          </span>
        </div>
        {/* spacer to keep the URL pill optically centered against the dots */}
        <div className="w-[46px] flex-shrink-0" aria-hidden />
      </div>

      {/* Content area — fixed 5:3 so there's no layout shift before load */}
      <div className="relative w-full" style={{ aspectRatio: "5 / 3" }}>
        {children}
      </div>
    </div>
  );
}

// A live, auto-scrolling tour through a real product's screens. Stacks the
// images and slowly pans through them, pausing on hover. The set is duplicated
// so the CSS animation loops seamlessly (see .scroll-reel in globals.css).
type ReelSection = { src: StaticImageData; alt: string };

function ScrollingReel({
  sections,
  label,
  bg,
  durationSec = 26,
}: {
  sections: ReelSection[];
  label: string;
  bg: string;
  durationSec?: number;
}) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: bg }}
      role="img"
      aria-label={label}
    >
      <div
        className="scroll-reel absolute inset-x-0 top-0 flex flex-col"
        style={{ animationDuration: `${durationSec}s` }}
      >
        {[...sections, ...sections].map((s, i) => (
          <Image
            key={i}
            src={s.src}
            alt={i < sections.length ? s.alt : ""}
            aria-hidden={i >= sections.length}
            sizes="(max-width: 768px) 100vw, 1100px"
            className="w-full h-auto block"
          />
        ))}
      </div>
    </div>
  );
}

// Invitewaale — the real invite page: invited → date → venue → note → RSVP.
const INVITE_SECTIONS: ReelSection[] = [
  { src: invite1, alt: "Invitewaale invite — 'You're invited' hero" },
  { src: invite2, alt: "Invitewaale invite — date" },
  { src: invite3, alt: "Invitewaale invite — venue" },
  { src: invite4, alt: "Invitewaale invite — host's note" },
  { src: invite5, alt: "Invitewaale invite — RSVP" },
];

export function InvitewaaleReel() {
  return (
    <ScrollingReel
      sections={INVITE_SECTIONS}
      bg="#FDFBF7"
      durationSec={24}
      label="The Invitewaale invite page — hero, date, venue, host note, and RSVP sections"
    />
  );
}

// Vidhikosh — a tour of the app: paste a link → AI extracts → clean recipe →
// nutrition → saved in your library.
const VIDHIKOSH_SECTIONS: ReelSection[] = [
  { src: vidhiShare, alt: "Vidhikosh — paste any recipe URL to add to your vault" },
  { src: vidhiGenerating, alt: "Vidhikosh — AI analyzing ingredients and techniques" },
  { src: vidhiRecipe, alt: "Vidhikosh — clean extracted recipe with ingredients" },
  { src: vidhiNutrition, alt: "Vidhikosh — AI-calculated nutrition per serving" },
  { src: vidhiDashboard, alt: "Vidhikosh — your saved recipe library" },
];

export function VidhikoshReel() {
  return (
    <ScrollingReel
      sections={VIDHIKOSH_SECTIONS}
      bg="#F4F5F1"
      durationSec={32}
      label="The Vidhikosh app — paste a link, AI extracts a clean recipe with nutrition, saved to your library"
    />
  );
}

// Illustrated mockup for the internal BILL platform (no shareable screenshot).
// High-fidelity: real labels and anonymized figures so it reads as a product.
export function BillPreview() {
  const tiles = [
    { label: "TPV", value: "$2.4M" },
    { label: "Bills", value: "18.2k" },
    { label: "Clients", value: "104" },
    { label: "Approval", value: "96%" },
  ];
  const clients = [
    { name: "Northwind Books", w: 88 },
    { name: "Acme Accounting", w: 72 },
    { name: "Lumen & Co.", w: 64 },
    { name: "Briggs Ledger", w: 54 },
    { name: "Harbor CPA", w: 46 },
    { name: "VERTEX Tax", w: 38 },
  ];

  return (
    <svg
      viewBox="0 0 400 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="absolute inset-0 w-full h-full"
    >
      <rect width="400" height="240" fill="#0F1929" />

      {/* Top metric tiles with real labels + values */}
      {tiles.map((t, i) => (
        <g key={t.label}>
          <rect
            x={16 + i * 94}
            y={16}
            width={82}
            height={46}
            rx={6}
            fill="#1A2A3E"
          />
          <text
            x={24 + i * 94}
            y={32}
            fontFamily="monospace"
            fontSize="7"
            letterSpacing="0.5"
            fill="#7FA5C9"
          >
            {t.label.toUpperCase()}
          </text>
          <text
            x={24 + i * 94}
            y={50}
            fontFamily="monospace"
            fontSize="15"
            fontWeight="600"
            fill="#F8F7F4"
          >
            {t.value}
          </text>
        </g>
      ))}

      {/* Area chart with title */}
      <rect x={16} y={76} width={230} height={102} rx={6} fill="#1A2A3E" />
      <text
        x={26}
        y={92}
        fontFamily="monospace"
        fontSize="7.5"
        letterSpacing="0.4"
        fill="#7FA5C9"
      >
        TPV · LAST 12 WEEKS
      </text>
      <polygon
        points="28,160 55,140 82,147 109,122 136,130 163,107 190,114 217,92 232,97 232,170 28,170"
        fill="#B8860B"
        opacity={0.14}
      />
      <polyline
        points="28,160 55,140 82,147 109,122 136,130 163,107 190,114 217,92 232,97"
        stroke="#B8860B"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right panel — ranked client list (the 100× scale story) */}
      <rect x={256} y={76} width={128} height={102} rx={6} fill="#1A2A3E" />
      <text
        x={266}
        y={92}
        fontFamily="monospace"
        fontSize="7.5"
        letterSpacing="0.4"
        fill="#7FA5C9"
      >
        CLIENTS BY TPV
      </text>
      {clients.map((c, i) => (
        <g key={c.name}>
          <text
            x={266}
            y={106 + i * 11.5}
            fontFamily="monospace"
            fontSize="6.5"
            fill="#C7D6E6"
            opacity={0.85}
          >
            {c.name}
          </text>
          <rect
            x={266}
            y={109 + i * 11.5}
            width={108}
            height={2.5}
            rx={1.25}
            fill="#24384F"
          />
          <rect
            x={266}
            y={109 + i * 11.5}
            width={c.w}
            height={2.5}
            rx={1.25}
            fill="#B8860B"
            opacity={0.85 - i * 0.08}
          />
        </g>
      ))}

      {/* Bottom data table with real column headers + the 10k-row signal */}
      <rect x={16} y={188} width={368} height={40} rx={6} fill="#1A2A3E" />
      {[
        { label: "Client", x: 24 },
        { label: "TPV", x: 150 },
        { label: "Bills", x: 226 },
        { label: "Top Approver", x: 296 },
      ].map((col) => (
        <text
          key={col.label}
          x={col.x}
          y={201}
          fontFamily="monospace"
          fontSize="6.5"
          letterSpacing="0.4"
          fill="#7FA5C9"
        >
          {col.label.toUpperCase()}
        </text>
      ))}
      {[0, 1, 2].map((row) =>
        [24, 150, 226, 296].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={col}
            y={207 + row * 7}
            width={col === 296 ? 60 : 44}
            height={2.5}
            rx={1.25}
            fill="#F8F7F4"
            opacity={0.16}
          />
        )),
      )}
    </svg>
  );
}
