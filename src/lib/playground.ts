export type PlaygroundProject = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  thumbnail: string;
  category: "utility" | "game" | "fun" | "nostalgia" | "experiment" | "tool";
  year: string;
  status: "live" | "archived" | "wip";
  techStack: string[];
  inspiration: string;
  builtBecause: string;
};

export type IdeaSeed = {
  title: string;
  spark: string;
  status: "percolating" | "sketching" | "prototyping";
};

export const playgroundProjects: PlaygroundProject[] = [
  {
    slug: "arrival-day",
    title: "Arrival Day",
    tagline: "What did India look like the exact moment you arrived?",
    description:
      "Travel back in Time to revisite your arrival",
    liveUrl: "https://arrivalday.app/",
    thumbnail: "",
    category: "utility",
    year: "2026",
    status: "live",
    techStack: ["React", "TypeScript", "vercel"],
    inspiration:
      "What was the price of 10gm gold , what was the Parle-G index , travel back in Time to revisite your arrival '",
    builtBecause:
      "A genuinely useful question that nobody had built a clean, opinionated answer for.",
  },
  {
    slug: "wheel-of-names",
    title: "Wheel of Names",
    tagline: "The fastest way to settle debates, pick winners, and let fate decide.",
    description:
      "A spinning wheel that picks a name at random. Endlessly useful for who presents first, who pays, or who gets the last slice of pizza. Sometimes the best UX is just a little theater.",
    liveUrl: "https://wheel-of-names.surge.sh/",
    thumbnail: "",
    category: "fun",
    year: "2025",
    status: "live",
    techStack: ["React", "Canvas API", "Surge"],
    inspiration:
      "A group of friends arguing for ten minutes about who goes first. The wheel settled it in three seconds.",
    builtBecause: "Because arguing is boring. Spinning a wheel is not.",
  },
  {
    slug: "sticker-shocker",
    title: "Sticker Shocker",
    tagline: "Pick a country. Guess the price. Get humbled.",
    description:
      "A GeoGuessr-style price guessing game — pick a country, then estimate what everyday groceries and electronics actually cost there. Part trivia, part economics lesson, entirely humbling. Turns out a dozen eggs in Switzerland will wreck your confidence.",
    liveUrl: "https://sticker-shocker.surge.sh/",
    thumbnail: "",
    category: "game",
    year: "2026",
    status: "live",
    techStack: ["React", "TypeScript", "Surge"],
    inspiration:
      "Curiosity about how wildly prices diverge across countries — and a hunch that most people's mental model of 'how much things cost' is hilariously miscalibrated.",
    builtBecause:
      "Because purchasing power differences are fascinating and nobody learns about them until they move countries and get sticker shock at the grocery store.",
  },
  {
    slug: "chidiya-udd",
    title: "Chidiya Udd",
    tagline: "A nostalgic childhood game, recreated for the web.",
    description:
      "Chidiya Udd is a classic South Asian party game: the caller shouts the name of something — and you flap your arms only if it can fly. React wrong and you're out. Built for the web so anyone with a link can join the nostalgia trip.",
    liveUrl: "http://chidiya-udd-game.surge.sh/",
    thumbnail: "",
    category: "nostalgia",
    year: "2025",
    status: "live",
    techStack: ["JavaScript", "HTML Canvas", "CSS", "Surge"],
    inspiration:
      "Wanted to share the game with friends who had never played it. Easier to send a URL than explain the rules.",
    builtBecause:
      "Pure nostalgia. Because recreating something from childhood is always worth the afternoon it takes.",
  },
];

export const ideaSeeds: IdeaSeed[] = [
  {
    title: "AI Travel Planner",
    spark:
      "An itinerary builder that understands trip context — not just city names and dates, but vibe, pace, and who you're traveling with.",
    status: "sketching",
  },
  {
    title: "Party Game Toolkit",
    spark:
      "A collection of quick-start digital party games. No accounts, no downloads, no friction. Just a URL and a crowd.",
    status: "percolating",
  },
  {
    title: "Tiny Productivity Tools",
    spark:
      "Focused micro-utilities. One job each. No dashboards, no settings pages. Just solve the problem and get out of the way.",
    status: "percolating",
  },
  {
    title: "Browser Experiments",
    spark:
      "Exploring the outer edges of what's possible with CSS, WebGL, and the lesser-known Web APIs. Mostly for the fun of it.",
    status: "percolating",
  },
];
