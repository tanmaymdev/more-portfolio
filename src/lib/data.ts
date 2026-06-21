export const meta = {
  name: "Tanmay Mathur",
  role: "Senior Software Engineer",
  location: "Houston, TX",
  locationFull: "United States",
  email: "tanmay.mathur97@gmail.com",
  linkedin: "https://linkedin.com/in/tanmaymathur97",
  github: "https://github.com/tanmaymdev",
  resumeUrl: "/Tanmay_Mathur_Resume.pdf",
  tagline: "I remove friction at scale.",
  subTagline:
    "Senior Software Engineer with 5+ years building high-impact React and TypeScript products. Open to remote. Every engagement I take on, the numbers move.",
};

export const heroMetric = {
  value: "65",
  unit: "%",
  label: "LCP / TTI improvement",
  context: "on high-traffic, customer-facing production pages at BILL",
};

export const impacts = [
  {
    value: 272,
    prefix: "$",
    suffix: "M+",
    label: "Annual subscription revenue",
    description: "supported through frictionless payment onboarding",
  },
  {
    value: 65,
    suffix: "%",
    label: "LCP / TTI improvement",
    description: "via Webpack optimization, code-splitting & lazy-loading on high-traffic pages",
  },
  {
    value: 70,
    suffix: "%",
    label: "Monitoring coverage expanded",
    description: "integrating Datadog & FullStory across frontend channels",
  },
  {
    value: 40,
    suffix: "%",
    label: "User engagement increase",
    description: "leading 6 engineers to ship a multi-client analytics platform at 100× scale",
  },
];

export const projects = [
  {
    id: "bill-reporting",
    name: "Multi-Client Analytics Platform",
    company: "BILL",
    url: "",
    github: "",
    previewImage: "", // internal/confidential — rendered as an illustration, not a screenshot
    previewUrl: "Internal · Confidential",
    stack: ["React", "TypeScript", "TanStack Table", "Highcharts", "Webpack"],
    problem:
      "Accounting firms managing ~100 clients on BILL had zero cross-client visibility. They couldn't see TPV, bills processed, or staff approval patterns across their entire book of business. Only one client at a time. A standard reporting project at 1:1 scale. This was 100×.",
    solution:
      "A multi-client analytics dashboard giving accounting firms a unified view across all clients simultaneously. Built with TanStack Table for virtualized rendering of ~10k rows without degradation, and Highcharts after a structured library evaluation across functionality, performance, and enterprise support. An AI insights layer surfaced patterns firms couldn't see in raw data.",
    highlights: [
      "Led a team of 6 frontend engineers to deliver a market-differentiating feature on schedule",
      "Solved 10k-row rendering at scale using TanStack Table virtualization. No pagination, no lag",
      "Ran a structured charting library evaluation; selected Highcharts for enterprise support, customizability, and large-dataset export capabilities",
      "Surfaced cross-client data: TPV amounts, bills processed, staff approval rates, operational bottlenecks",
      "AI-powered insights layer identified patterns and improvement areas across firm operations",
      "+40% user engagement uplift post-launch; adopted as a flagship feature for accounting firm clients",
      "Set org-wide standards for TanStack Table and Highcharts, becoming the reference implementation for all data-heavy features at BILL",
    ],
    accentColor: "#1A3A5C",
  },
  {
    id: "vidhikosh",
    name: "Vidhikosh",
    url: "https://vidhikosh.app",
    github: "https://github.com/tanmaymdev/vidhikosh",
    previewImage: "", // rendered as a custom multi-section reel (see CUSTOM_PREVIEWS)
    previewUrl: "vidhikosh.app",
    stack: ["React", "Next.js", "Gemini API", "Claude Code"],
    problem:
      "People save recipes from Instagram, TikTok, and YouTube, then never find them again. The save button is a black hole.",
    solution:
      "A recipe extraction engine: paste any URL, get a clean distraction-free recipe with AI-assisted nutrition data. Zero noise. Just cook.",
    highlights: [
      "End-to-end LLM API integration with streaming response rendering",
      "Structured output parsing from unstructured video/social content",
      "AI-assisted nutrition calculations from ingredient lists",
      "Live in production",
    ],
    accentColor: "#7C6A3B",
  },
  {
    id: "invitewaale",
    name: "Invitewaale",
    url: "https://invitewaale.com",
    github: "https://github.com/tanmaymdev/invitewaale",
    previewImage: "", // rendered as a custom multi-section reel (see CUSTOM_PREVIEWS)
    previewUrl: "invitewaale.com",
    stack: ["React", "TypeScript", "Next.js", "MCP Server"],
    problem:
      "Event management software is built around forms, buttons, and menus. It assumes you want to click your way through organizing an event.",
    solution:
      "An AI-first SaaS where you manage invites, RSVPs, and guests by talking to your assistant. Published a native MCP server so Claude can control it without touching the UI.",
    highlights: [
      "Native MCP server enabling AI assistants to create invites and manage RSVPs",
      "Custom onboarding flows and real-time RSVP collection",
      "Polished shared component system",
      "AI-first product design: conversation replaces navigation",
    ],
    accentColor: "#2A5F4F",
  },
];

export const roles = [
  {
    company: "BILL",
    location: "Houston, TX",
    role: "Senior Software Engineer",
    period: "Feb 2023 – Present",
    type: "full",
    bullets: [
      "Integrated 'Add Credit Card' onboarding flow using VGS for PCI-compliant billing, supporting $272M+ annual subscription revenue",
      "Improved page performance 65% via Webpack optimization, code-splitting, and lazy-loading",
      "Integrated Datadog and FullStory, expanding monitoring coverage by 70%",
      "Led a team of 6 frontend engineers to ship a multi-client analytics platform for accounting firms, 100× the data scale of a standard reporting feature, driving +40% user engagement",
      "Served as Scrum Master; partnered with product, design, and backend teams across a 15+ person cross-functional squad",
      "Drove GraphQL adoption and optimized Apollo Client caching policies, reducing redundant query calls by 30% and improving perceived load times",
      "Standardized TanStack Table and Highcharts usage across BILL's frontend engineering org, defining best practices adopted as the de facto approach for all data-heavy features",
    ],
  },
  {
    company: "BILL",
    location: "Houston, TX",
    role: "Software Engineer Intern",
    period: "May – Aug 2022",
    type: "intern",
    bullets: [
      "Built an analytics dashboard for cross-functional squads to visualize user journeys",
      "Integrated Datadog Cloud Monitoring with an AngularJS frontend",
    ],
  },
  {
    company: "Standard Chartered Global Business Services",
    location: "India",
    role: "Developer",
    period: "Jun 2019 – Jun 2021",
    type: "full",
    bullets: [
      "Full Stack Developer in the Technology & Innovation Unit for Financial Markets, part of the Razor Agile Squad, a multi-year global programme to automate and accelerate the trade life cycle across international markets",
      "Engineered a Groovy + ReactJS integration connecting RBI's NDS Call System with Razor to automate Call/Notice Loan/Depo deal processing, unlocking $10M in additional weekly transaction volume for Razor India",
      "Built a Java standalone tool to auto-generate trade cancellation messages during legacy-to-Razor country Rollouts, reducing the risk of incorrect regulatory reporting by 85%",
      "Prototyped an in-house project engagement tracking system using ReactJS and SpringBoot REST APIs, cutting turnaround time for project queries by 40%",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Science",
    school: "Rice University",
    location: "Houston, TX",
    gpa: "3.9 / 4.0",
    year: "Dec 2022",
  },
  {
    degree: "B.Tech, Electrical & Electronics Engineering",
    school: "VIT University",
    location: "India",
    gpa: "9.36 / 10.0",
    year: "May 2019",
  },
];

export const skills = {
  core: ["React", "TypeScript", "Next.js", "GraphQL", "JavaScript ES6+"],
  engineering: ["Apollo Client", "Webpack", "Performance Optimization", "Micro Frontends", "Monorepo", "AWS", "CI/CD"],
  testing: ["Jest", "React Testing Library", "Cypress", "Playwright", "A/B Testing"],
  ai: ["Claude API", "Gemini API", "MCP Server", "Claude Code", "GitHub Copilot"],
  observability: ["Datadog", "FullStory", "Sentry", "VGS"],
  also: ["Redux", "Node.js", "Angular", "SQL", "Figma", "Accessibility (WCAG 2.1)"],
};
