// ============================================================
// constants.ts — Central data store for the portfolio
// Update these values to personalize your portfolio.
// ============================================================

export const SITE = {
  name: "Himash Mayadunna",
  title: "Undergraduate Software Engineer | NSBM Green University",
  description:
    "A passionate undergraduate software engineer at NSBM Green University, crafting performant, accessible web & mobile experiences with modern technologies.",
  url: "https://yourportfolio.dev",
} as const;

// ── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Challenges", href: "#challenges" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Hero ─────────────────────────────────────────────────────
export const HERO = {
  greeting: "Hi, I'm",
  name: "Himash Mayadunna",
  title: "Undergraduate Software Engineer | NSBM Green University",
  intro:
    "I'm an undergraduate software engineer at NSBM Green University. I build clean, performant web & mobile applications with a focus on user experience and scalable architecture. Currently seeking internship opportunities to grow as an engineer.",
  cta: {
    projects: "#projects",
    github: "https://github.com/yourusername",
    resume: "/resume.pdf",
    contact: "#contact",
  },
} as const;

// ── About ────────────────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    "I'm Himash Mayadunna, an undergraduate software engineer at NSBM Green University who loves turning complex problems into elegant, user-friendly solutions. With hands-on experience across the stack — from React and Next.js on the frontend, to Node.js and databases on the backend — I build applications that are fast, accessible, and maintainable.",
    "Beyond the web, I work with Flutter for cross-platform mobile development and have strong foundations in Java and C#. I'm passionate about clean code, continuous learning, and contributing to open-source projects.",
  ],
  highlights: [
    "React & Next.js",
    "Node.js & Express",
    "Flutter",
    "Java",
    "C#",
    "TypeScript",
  ],
} as const;

// ── Tech Stack ───────────────────────────────────────────────
export interface TechItem {
  name: string;
  icon: string; // emoji or short label
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const TECH_STACK: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML / CSS", icon: "🌐" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "⚙️" },
      { name: "REST APIs", icon: "🔗" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", icon: "📱" },
      { name: "Dart", icon: "🎯" },
      { name: "React Native", icon: "⚛️" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Java", icon: "☕" },
      { name: "C#", icon: "🟣" },
      { name: "Dart", icon: "🎯" },
      { name: "Python", icon: "🐍" },
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  challenges: string[];
  github?: string;
  demo?: string;
  screenshots?: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Auction Management System",
    description:
      "A real-world auction management platform built with C# backend services and a Next.js frontend. It supports auction listings, bid workflows, status tracking, and role-based management dashboards.",
    techStack: ["C#", "ASP.NET", "Next.js", "TypeScript", "Tailwind CSS"],
    challenges: [
      "Designed auction lifecycle logic to safely handle bid timing and winner selection",
      "Connected frontend and backend modules with clear API contracts and validation",
    ],
    screenshots: [
      "/AMS/Screenshot 2025-10-22 172133.png",
      "/AMS/Screenshot 2025-10-22 172822.png",
      "/AMS/Screenshot 2025-10-22 173004.png",
      "/AMS/Screenshot 2025-10-22 175051.png",
    ],
  },
  {
    title: "BordLanka",
    description:
      "A property marketplace platform where owners can list places for rent or sale, and buyers can discover and purchase properties through a streamlined web experience.",
    techStack: ["Next.js", "Node.js", "MongoDB", "JavaScript"],
    challenges: [
      "Built role-based flows for sellers and buyers with different permissions",
      "Designed efficient property search and filtering for rent and sale listings",
    ],
  },
  {
    title: "Daily-scope",
    description:
      "A BBC-inspired modern news platform with category-based reporting, headline-first layouts, and fast server-rendered pages using Next.js for both frontend and backend.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    challenges: [
      "Structured dynamic news categories and reusable article layouts for consistent UX",
      "Built backend routes in Next.js to handle content delivery and page performance",
    ],
  },
  {
    title: "Car Renting System",
    description:
      "A mobile car rental application that allows users to browse available vehicles, view rental details, and book cars with a smooth end-to-end Flutter experience.",
    techStack: ["Flutter", "Dart", "Firebase"],
    challenges: [
      "Built a clean booking flow with date-based availability handling",
      "Designed responsive mobile screens for listing, details, and reservation steps",
    ],
  },
];

// ── Engineering Challenges ───────────────────────────────────
export interface Challenge {
  title: string;
  problem: string;
  solution: string;
  impact: string;
}

export const CHALLENGES: Challenge[] = [
  {
    title: "Fixed Hydration Mismatch in Next.js",
    problem:
      "Components using browser APIs (localStorage, window) caused React hydration errors, breaking SSR output.",
    solution:
      "Wrapped client-dependent logic in useEffect hooks and created a custom useIsMounted hook to gate client-only rendering.",
    impact:
      "Eliminated all hydration warnings and improved Lighthouse performance score by 15 points.",
  },
  {
    title: "Resolved CORS Issues in Production",
    problem:
      "API requests from the frontend were blocked by the browser in production despite working locally.",
    solution:
      "Configured Express CORS middleware with a dynamic origin whitelist and ensured preflight OPTIONS requests were handled correctly.",
    impact:
      "Enabled seamless cross-origin communication without compromising security.",
  },
  {
    title: "Optimized Slow API Response Times",
    problem:
      "A dashboard endpoint took 3+ seconds due to unindexed queries and N+1 SELECT issues.",
    solution:
      "Added composite database indexes, batched related queries with JOINs, and implemented Redis caching for frequently accessed data.",
    impact:
      "Reduced API response time from 3.2s to 180ms — a 94% improvement.",
  },
];

// ── Contact ──────────────────────────────────────────────────
export const CONTACT = {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername",
} as const;
