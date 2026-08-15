// ============================================================
// constants.ts — Central data store for the portfolio
// Update these values to personalize your portfolio.
// ============================================================

export const SITE = {
  name: "Himash Mayadunna",
  title: "Undergraduate Software Engineer | NSBM Green University",
  description:
    "A passionate undergraduate software engineer at NSBM Green University, crafting performant, accessible web & mobile experiences with modern technologies.",
  url: "https://himash.dev",
} as const;

// ── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Hero ─────────────────────────────────────────────────────
export const HERO = {
  greeting: "Hi, I'm",
  name: "Himash Mayadunna",
  title: "Full Stack Developer",
  subtitles: [
    "Full Stack Developer",
    "Undergraduate Software Engineer",
    "Flutter Mobile Developer",
    "Open Source Contributor"
  ],
  intro:
    "I'm an undergraduate software engineer at NSBM Green University. I build clean, performant web & mobile applications with a focus on user experience, interactive design, and scalable architecture. Currently seeking internship opportunities to solve complex engineering challenges.",
  cta: {
    projects: "#projects",
    github: "https://github.com/Himashmayadunna",
    resume: "/resume.pdf",
    contact: "#contact",
  },
} as const;

// ── About ────────────────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    "I'm Himash Mayadunna, a software engineer who loves turning complex problems into elegant, user-friendly solutions. With hands-on experience across the stack — from building dynamic frontends using React and Next.js, to engineering robust services on the backend — I build applications that are fast, accessible, and maintainable.",
    "Beyond the web, I specialize in Flutter for cross-platform mobile development and maintain a strong foundation in Java and C#. I'm passionate about clean architecture, developer tooling, and writing code that is clean, secure, and highly optimized.",
  ],
  careerObjective: "Seeking a challenging Software Engineering Internship to contribute technical skills in React, Next.js, Node.js, and Mobile development while learning from industry professionals to build production-grade, impact-driven software.",
  highlights: [
    "Next.js & React",
    "Node.js & Express",
    "Flutter & Dart",
    "Java & C#",
    "TypeScript & REST APIs",
    "MongoDB & PostgreSQL",
  ],
} as const;

// ── Tech Stack / Skills (Moved to section-specific component to support direct SVG references and dynamic glow states)


// ── Statistics ───────────────────────────────────────────────
export const STATISTICS = [
  { value: 120, label: "Projects Completed", suffix: "+" },
  { value: 40, label: "Happy Clients", suffix: "+" },
  { value: 5000, label: "GitHub Contributions", suffix: "+" },
] as const;

// ── Projects ─────────────────────────────────────────────────
// ── Projects ─────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  challenges: string[];
  github?: string;
  demo?: string;
  screenshots?: string[];
  category: "web" | "mobile" | "backend";
  image: string; // visual mock placeholder info
  isFlagship?: boolean;
  subtitle?: string;
  mockUrl?: string;
  caseStudyUrl?: string;
  stats?: { label: string; value: string; color: string }[];
}

export const PROJECTS: Project[] = [
  {
    title: "MediLex – Healthcare System",
    description:
      "An enterprise-level Healthcare & Inventory Management System (ERP) designed to digitalize clinical operations, patient care, medical records, and supply chains using a robust relational SQL database.",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Microsoft SQL Server",
      "Tailwind CSS",
      "React Query",
      "Axios"
    ],
    category: "web",
    image: "/Healthcare.png",
    challenges: [
      "Architected a complex 3NF database schema with 20+ tables, triggers, and transactions",
      "Developed high-performance RESTful APIs in Express.js integrated with Microsoft SQL Server",
      "Implemented secure JWT authentication and granular role-based access control (RBAC)",
    ],
    github: "https://github.com/Himashmayadunna/Healthcare-And-Inventory-Management-System",
    demo: "/projects/medilex",
    isFlagship: true,
    subtitle: "Full Stack ERP",
    mockUrl: "medilex-healthcare.com",
    caseStudyUrl: "/projects/medilex",
    stats: [
      { label: "DB Tables", value: "20+", color: "bg-blue-500" },
      { label: "REST APIs", value: "50+", color: "bg-emerald-500" },
      { label: "SQL Schema", value: "3NF", color: "bg-purple-500" }
    ]
  },
  {
    title: "Auction Management System",
    description:
      "A real-world auction management platform built with C# backend services and a Next.js frontend. It supports auction listings, live bidding, status tracking, and role-based management dashboards.",
    techStack: ["C#", "ASP.NET", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    image: "/AMS/Screenshot 2025-10-22 175051.png",
    challenges: [
      "Designed auction lifecycle logic to safely handle bid timing and winner selection",
      "Connected frontend and backend modules with clear API contracts and validation",
    ],
    github: "https://github.com/Himashmayadunna/auction-system",
    demo: "/projects/auction-system",
    isFlagship: true,
    subtitle: "C# & Next.js Auction",
    mockUrl: "auction-management.dev",
    caseStudyUrl: "/projects/auction-system",
    stats: [
      { label: "DB Tables", value: "10+", color: "bg-blue-500" },
      { label: "C# APIs", value: "15+", color: "bg-emerald-500" },
      { label: "Live Bids", value: "Real-time", color: "bg-purple-500" }
    ],
    screenshots: [
      "/AMS/Screenshot 2025-10-22 175051.png",
      "/AMS/Screenshot 2025-10-22 172822.png",
      "/AMS/Screenshot 2025-10-22 172133.png",
      "/AMS/Screenshot 2025-10-22 173004.png"
    ]
  },
  {
    title: "BordLanka",
    description:
      "A property marketplace platform where owners can list places for rent or sale, and buyers can discover and purchase properties through a streamlined web experience.",
    techStack: ["Next.js", "Node.js", "MongoDB", "JavaScript"],
    category: "web",
    image: "/bordlanka.png",
    challenges: [
      "Built role-based flows for sellers and buyers with different permissions",
      "Designed efficient property search and filtering for rent and sale listings",
    ],
    github: "https://github.com/Himashmayadunna/BoardLanka",
    demo: "/projects/bordlanka",
    isFlagship: true,
    subtitle: "Real Estate Marketplace",
    mockUrl: "bordlanka.lk",
    caseStudyUrl: "/projects/bordlanka",
    stats: [
      { label: "Collections", value: "8+", color: "bg-blue-500" },
      { label: "Database", value: "MongoDB", color: "bg-emerald-500" },
      { label: "Auth Flow", value: "JWT Role", color: "bg-purple-500" }
    ]
  },
  {
    title: "Daily-scope",
    description:
      "A news platform with category-based reporting, headline-first layouts, and fast server-rendered pages using Next.js for both frontend and backend API endpoints.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    image: "/dailyscope.png",
    challenges: [
      "Structured dynamic news categories and reusable article layouts for consistent UX",
      "Built backend routes in Next.js to handle content delivery and page performance",
    ],
    github: "https://github.com/Himashmayadunna/Daily-Scope",
    demo: "/projects/daily-scope",
    isFlagship: true,
    subtitle: "News & Media Portal",
    mockUrl: "daily-scope.news",
    caseStudyUrl: "/projects/daily-scope",
    stats: [
      { label: "Page Speed", value: "98/100", color: "bg-blue-500" },
      { label: "Edge Routes", value: "Vercel", color: "bg-emerald-500" },
      { label: "Render", value: "ISR Cache", color: "bg-purple-500" }
    ]
  },
  {
    title: "Car Renting System",
    description:
      "A mobile car rental application that allows users to browse available vehicles, view rental details, and book cars with a smooth end-to-end Flutter experience.",
    techStack: ["Flutter", "Dart", "Firebase"],
    category: "mobile",
    image: "/carrent.png",
    challenges: [
      "Built a clean booking flow with date-based availability handling",
      "Designed responsive mobile screens for listing, details, and reservation steps",
    ],
    github: "https://github.com/Himashmayadunna/Car_Renting_System",
    demo: "/projects/car-rent-app",
    isFlagship: true,
    subtitle: "Flutter Mobile App",
    mockUrl: "carrent-app.local",
    caseStudyUrl: "/projects/car-rent-app",
    stats: [
      { label: "App Screens", value: "12+", color: "bg-blue-500" },
      { label: "Auth Provider", value: "Firebase", color: "bg-emerald-500" },
      { label: "Database", value: "Firestore", color: "bg-purple-500" }
    ]
  },
  {
    title: "LK TravelMate",
    description:
      "An AI-powered mobile travel assistant designed specifically for exploring Sri Lanka with personalized AI recommendations and integrated map navigation.",
    techStack: ["Flutter", "Dart", "Firebase", "Gemini API", "Google Maps"],
    category: "mobile",
    image: "/lktravelmate.png",
    challenges: [
      "Structured user inputs into strict prompt rules to generate personalized AI travel itineraries.",
      "Organized a complex UI into a simple journey: discover → plan → explore → navigate.",
    ],
    github: "https://github.com/Himashmayadunna/LK_Travelmate_new",
    demo: "/projects/lktravelmate",
    isFlagship: true,
    subtitle: "AI Travel Assistant",
    mockUrl: "lktravelmate.app",
    caseStudyUrl: "/projects/lktravelmate",
    stats: [
      { label: "AI Engine", value: "Gemini", color: "bg-emerald-500" },
      { label: "Auth & DB", value: "Firebase", color: "bg-blue-500" },
      { label: "Platform", value: "Flutter", color: "bg-purple-500" }
    ]
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

export interface JourneyItem {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  github?: string;
  caseStudyUrl?: string;
  demo?: string;
  category: "web" | "mobile";
}

export const JOURNEY_TRACKS = {
  web: [
    {
      id: "daily-scope",
      step: "01",
      title: "Daily-scope",
      subtitle: "News & Media Portal",
      description: "Dynamic news reporting platform built with Next.js featuring categorized feeds and server-rendered speed.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Himashmayadunna/Daily-Scope",
      caseStudyUrl: "/projects/daily-scope",
      category: "web" as const,
    },
    {
      id: "auction-management",
      step: "02",
      title: "Auction Management System",
      subtitle: "C# & Next.js Auction Platform",
      description: "Real-world auction lifecycle application with C# ASP.NET backend services, live bidding logic, and role management.",
      techStack: ["C#", "ASP.NET", "Next.js", "TypeScript"],
      github: "https://github.com/Himashmayadunna/auction-system",
      caseStudyUrl: "/projects/auction-system",
      category: "web" as const,
    },
    {
      id: "board-lanka",
      step: "03",
      title: "Board Lanka",
      subtitle: "Real Estate Marketplace",
      description: "Property marketplace platform connecting buyers and sellers with role-based listings and MongoDB storage.",
      techStack: ["Next.js", "Node.js", "MongoDB", "JavaScript"],
      github: "https://github.com/Himashmayadunna/BoardLanka",
      caseStudyUrl: "/projects/bordlanka",
      category: "web" as const,
    },
    {
      id: "medilex",
      step: "04",
      title: "MediLex",
      subtitle: "Healthcare & Inventory ERP",
      description: "Full-scale enterprise healthcare & clinical inventory platform with 3NF relational SQL database and JWT RBAC.",
      techStack: ["React.js", "Express.js", "Node.js", "MS SQL Server", "TypeScript"],
      github: "https://github.com/Himashmayadunna/Healthcare-And-Inventory-Management-System",
      caseStudyUrl: "/projects/medilex",
      category: "web" as const,
    },
  ],
  mobile: [
    {
      id: "travel-mate",
      step: "01",
      title: "LK TravelMate",
      subtitle: "AI Travel Assistant",
      description: "AI-powered travel companion for Sri Lanka combining Gemini AI recommendations, Google Maps navigation, and local translation.",
      techStack: ["Flutter", "Dart", "Firebase", "Gemini AI", "Google Maps"],
      github: "https://github.com/Himashmayadunna/LK_Travelmate_new",
      caseStudyUrl: "/projects/lktravelmate",
      category: "mobile" as const,
    },
    {
      id: "car-renting",
      step: "02",
      title: "Car Renting System",
      subtitle: "Vehicle Rental Marketplace",
      description: "Cross-platform mobile vehicle rental application with catalog discovery, date reservation, and Firebase backend.",
      techStack: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/Himashmayadunna/Car_Renting_System",
      caseStudyUrl: "/projects/car-rent-app",
      category: "mobile" as const,
    },
  ],
};

export const DEVELOPMENT_JOURNEY: JourneyItem[] = [
  ...JOURNEY_TRACKS.web,
  ...JOURNEY_TRACKS.mobile,
];

// ── Education ────────────────────────────────────────────────
export interface Education {
  degree: string;
  university: string;
  year: string;
  details?: string;
}

export const EDUCATION_LIST: Education[] = [
  {
    degree: "BSc (Hons) in Software Engineering",
    university: "NSBM Green University",
    year: "2023 – Present",
    details: "Currently pursuing a Bachelor of Science (Honours) in Software Engineering, focusing on software development, web technologies, databases, system design, and modern programming practices."
  }
];

// ── Contact ──────────────────────────────────────────────────
export const CONTACT = {
  email: "himashheshan193@gmail.com",
  phone: "+94754119616",
  location: "577/1A, Henihaththa Biyagama",
  linkedin: "https://www.linkedin.com/in/himash-mayadunna-28429529b",
  github: "https://github.com/Himashmayadunna",
} as const;
