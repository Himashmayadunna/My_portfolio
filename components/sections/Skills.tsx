"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

// ── Technology Badge Data Definitions ──────────────────────────
interface TechItem {
  name: string;
  color: string; // Brand Hex color for hover glows and borders
  iconName: string; // Matches SVG renderer switcher
}

interface TechCategory {
  title: string;
  emoji: string;
  description: string;
  gridSpan: string; // Tailwind grid span columns
  skills: TechItem[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend",
    emoji: "🎨",
    description: "Building responsive, modern, and interactive user interfaces.",
    gridSpan: "col-span-1 md:col-span-2",
    skills: [
      { name: "React", color: "#61DAFB", iconName: "react" },
      { name: "Next.js", color: "#FFFFFF", iconName: "nextjs" },
      { name: "HTML5", color: "#E34F26", iconName: "html5" },
      { name: "CSS3", color: "#1572B6", iconName: "css3" },
      { name: "Tailwind CSS", color: "#06B6D4", iconName: "tailwindcss" },
      { name: "Bootstrap", color: "#7952B3", iconName: "bootstrap" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙",
    description: "Designing reliable, scalable, and optimized server side APIs.",
    gridSpan: "col-span-1",
    skills: [
      { name: "Node.js", color: "#339933", iconName: "nodejs" },
      { name: "Express.js", color: "#FFFFFF", iconName: "express" },
    ],
  },
  {
    title: "Database",
    emoji: "🗄",
    description: "Structuring secure relational and high-performance NoSQL systems.",
    gridSpan: "col-span-1",
    skills: [
      { name: "Supabase", color: "#3ECF8E", iconName: "supabase" },
      { name: "MongoDB", color: "#47A248", iconName: "mongodb" },
      { name: "PostgreSQL", color: "#4169E1", iconName: "postgresql" },
      { name: "MySQL", color: "#4479A1", iconName: "mysql" },
    ],
  },
  {
    title: "Programming",
    emoji: "💻",
    description: "Writing type-safe, object-oriented, and highly readable code.",
    gridSpan: "col-span-1",
    skills: [
      { name: "JavaScript", color: "#F7DF1E", iconName: "javascript" },
      { name: "TypeScript", color: "#3178C6", iconName: "typescript" },
      { name: "Java", color: "#ED8B00", iconName: "java" },
    ],
  },
  {
    title: "Mobile",
    emoji: "📱",
    description: "Crafting beautiful cross-platform native mobile applications.",
    gridSpan: "col-span-1",
    skills: [
      { name: "Flutter", color: "#02569B", iconName: "flutter" },
      { name: "Dart", color: "#0175C2", iconName: "dart" },
    ],
  },
  {
    title: "Tools",
    emoji: "🛠",
    description: "Leveraging version control, developer tools, and design systems.",
    gridSpan: "col-span-1 md:col-span-3",
    skills: [
      { name: "Git", color: "#F05032", iconName: "git" },
      { name: "GitHub", color: "#FFFFFF", iconName: "github" },
      { name: "VS Code", color: "#007ACC", iconName: "vscode" },
      { name: "Postman", color: "#FF6C37", iconName: "postman" },
      { name: "Figma", color: "#F24E1E", iconName: "figma" },
    ],
  },
];

// ── Custom SVG Icon Switcher ───────────────────────────────────
function TechIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "react":
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 180 180" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M149.508 157.52L82.203 71.0667V135H68V45H82.203L135.292 113.326V45H149.508V157.52Z" fill="white" />
        </svg>
      );
    case "html5":
      return (
        <svg className={className} viewBox="0 0 512 512">
          <path fill="#E34F26" d="M71 459.77L37.19 0h437.62l-34 459.77L256 512L71 459.77z" />
          <path fill="#EF652A" d="M256 472.08l151.03-41.88L434.98 92.51H256v379.57z" />
          <path fill="#ECECEC" d="M256 264.44H181.34l-5.12-57.28H256V149.89H120.35l12.49 140.28H256v-25.73zM256 354.89l-.16.04l-64.62-17.41l-4.08-45.64H130.13l8.73 97.62L256 422.02v-67.13z" />
          <path fill="#FFF" d="M256 264.44v25.73h70.68l-6.9 76.73L256 384.07v67.13l117.14-32.52l14.75-165.37l1.15-12.83l2.24-33.32l.93-10.37l4.18-46.9H256v57.27h77.64l-6.96 57.28H256z" />
        </svg>
      );
    case "css3":
      return (
        <svg className={className} viewBox="0 0 512 512">
          <path fill="#1572B6" d="M71.19 459.77L37.19 0H474.81L440.81 459.77L256 512L71.19 459.77Z" />
          <path fill="#33A9DC" d="M256 472.08L407.03 430.2L434.98 92.51H256V472.08Z" />
          <path fill="#ECECEC" d="M256 264.44H181.34L176.22 207.16H256V149.89H120.35L132.84 290.17H256V264.44ZM256 354.89L255.84 354.93L191.22 337.52L187.14 291.88H130.13L138.86 389.5L256 422.02V354.89Z" />
          <path fill="#FFF" d="M256 264.44V290.17H326.68L319.78 366.9L256 384.07V451.2L373.14 418.68L387.89 253.31L389.04 240.48L391.28 207.16L392.21 196.79L396.39 149.89H256V207.16H333.64L326.68 264.44H256Z" />
        </svg>
      );
    case "tailwindcss":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 6C9.6 6 8.2 7.2 7.8 9.6c.9-1.2 1.95-1.5 3.15-.9.684.342 1.173.586 1.736.868.92.46 2.015 1.008 3.514 1.008 2.4 0 3.8-1.2 4.2-3.6-.9 1.2-1.95 1.5-3.15.9-.684-.342-1.173-.586-1.736-.868C14.595 6.548 13.5 6 12 6zm-4.2 8.4C5.4 14.4 4 15.6 3.6 18c.9-1.2 1.95-1.5 3.15-.9.684.342 1.173.586 1.736.868.92.46 2.015 1.008 3.514 1.008 2.4 0 3.8-1.2 4.2-3.6-.9 1.2-1.95 1.5-3.15.9-.684-.342-1.173-.586-1.736-.868C10.195 14.948 9.1 14.4 7.8 14.4z" fill="#06B6D4" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg className={className} viewBox="0 0 16 16" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4ZM11.876 7.859C12.443 7.426 12.822 6.732 12.822 5.925C12.822 4.417 11.538 3.5 9.778 3.5H4V12.5H10.155C11.83 12.5 13.003 11.558 13.003 10.024C13.003 9.066 12.5 8.288 11.876 7.859ZM8.956 5.314C9.539 5.314 9.943 5.626 9.943 6.136C9.943 6.646 9.539 6.967 8.956 6.967H6.012V5.314H8.956ZM9.215 8.784C9.845 8.784 10.286 9.105 10.286 9.648C10.286 10.19 9.845 10.52 9.215 10.52H6.012V8.784H9.215Z" fill="#7952B3" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 0c-1.393 0-2.787.354-4.043 1.063l-5.908 3.41c-2.512 1.45-4.049 4.113-4.049 7.017v6.822c0 2.904 1.537 5.567 4.049 7.017l5.908 3.41C9.213 23.646 10.607 24 12 24c1.393 0 2.787-.354 4.043-1.063l5.908-3.41c2.512-1.45 4.049-4.113 4.049-7.017V11.49c0-2.904-1.537-5.567-4.049-7.017l-5.908-3.41C14.787.354 13.393 0 12 0zm-1 4.797c.414 0 .828.106 1.2.32l5.143 2.97c.754.435 1.215 1.234 1.215 2.105v5.938c0 .87-.461 1.67-1.215 2.105L12.2 21.21c-.372.214-.786.32-1.2.32-.414 0-.828-.106-1.2-.32L4.657 18.24c-.754-.435-1.215-1.234-1.215-2.105V10.2c0-.87.461-1.67 1.215-2.105L9.8 5.117c.372-.214.786-.32 1.2-.32z" fill="#339933" />
        </svg>
      );
    case "express":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <text x="50%" y="65%" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">EX</text>
          <rect x="2" y="2" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
        </svg>
      );
    case "supabase":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M21.3619 12.1804L13.7853 22.8277C13.2505 23.5794 12.0834 23.2384 12.0287 22.3168L11.5307 13.916H4.25008C3.12517 13.916 2.51862 12.5936 3.25301 11.7408L10.8296 1.09349C11.3644 0.341814 12.5315 0.682784 12.5862 1.6044L13.0842 10.0052H20.3648C21.4897 10.0052 22.0963 11.3276 21.3619 12.1804Z" fill="#3ECF8E" />
        </svg>
      );
    case "mongodb":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M17.193 11.236c-.496-.388-1.58-.95-2.73-1.424-.038-.016-.07-.03-.1-.044V4.996c0-1.85-.758-3.385-1.963-4.325a.555.555 0 00-.73 0c-1.205.94-1.963 2.474-1.963 4.325v4.773c-.033.014-.065.027-.1.043-1.15.474-2.235 1.036-2.73 1.424-.954.747-1.492 1.777-1.492 2.857 0 2.203.957 4.148 2.656 5.378l-.348 2.222a.556.556 0 00.547.642h1.61c.426.65.943 1.173 1.542 1.547v.12a.556.556 0 00.556.555h1.222a.556.556 0 00.556-.555v-.12c.6-.374 1.116-.897 1.542-1.547h1.61a.556.556 0 00.547-.642l-.348-2.222c1.7-1.23 2.656-3.175 2.656-5.378 0-1.08-.538-2.11-1.492-2.857zm-4.793 8.358v-4.664a.278.278 0 00-.556 0v4.664a4.133 4.133 0 01-1.597-.938.278.278 0 00-.472.2c0 .487.112.96.326 1.385a4.7 4.7 0 011.743-.647zm.278-8.232v4.664a.278.278 0 00.556 0V11.36a4.12 4.12 0 011.598.939.278.278 0 00.472-.201c0-.487-.113-.96-.327-1.385a4.72 4.72 0 01-1.743.649z" fill="#47A248" />
        </svg>
      );
    case "postgresql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12.54 1.13c-.93-.16-1.89-.16-2.82 0-3.3.56-6.02 2.76-7.3 5.76C1.14 9.89.84 13.06 1.6 16.1c.78 3.07 2.68 5.68 5.3 7.23a12.016 12.016 0 0 0 10.2 0c2.62-1.55 4.52-4.16 5.3-7.23.76-3.04.46-6.21-.82-9.21-1.28-3-4-5.2-7.3-5.76zm-1.82 2.62c.67.01 1.33.01 2 .02v.01c2.19.16 4.19 1.15 5.56 2.74.88 1.03 1.48 2.27 1.74 3.6.14.7.19 1.42.16 2.14-.07 1.64-.67 3.2-1.72 4.42-1.07 1.25-2.58 2.08-4.22 2.33-.86.13-1.74.13-2.6 0-1.64-.25-3.15-1.08-4.22-2.33A6.74 6.74 0 0 1 7.69 10.3c.26-1.33.86-2.57 1.74-3.6 1.37-1.59 3.37-2.58 5.56-2.74l.11-.01h-.38z" fill="#336791" />
        </svg>
      );
    case "mysql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12.22 2.1c-.88-.41-1.89-.5-2.83-.24-1.89.51-3.3 2.1-3.56 4.02-.15 1.13.15 2.27.84 3.16.2.25.43.48.69.69.11.09.24.16.38.21.36.13.75-.01.95-.32.25-.39.19-.92-.15-1.24A2.783 2.783 0 0 1 7.6 6.3c.18-1.04.99-1.87 2.01-2.07.5-.1 1.02-.05 1.49.16.48.21.87.58 1.11 1.04.14.27.39.46.69.51.3.05.61-.07.78-.32.32-.47.19-1.11-.29-1.42-.39-.25-.86-.42-1.34-.5-1.12-.18-2.27.15-3.13.88a5.534 5.534 0 0 0-2.01 3.56c-.25 1.76.24 3.56 1.34 4.95.32.41.69.77 1.11 1.07.17.12.38.2.6.21.46.03.88-.22 1.07-.63.2-.42.1-.92-.24-1.24-.7-.64-1.1-1.57-1.1-2.54 0-1.24.67-2.39 1.74-3 1.07-.61 2.39-.61 3.46 0z" fill="#00758F" />
        </svg>
      );
    case "javascript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#F7DF1E" rx="2" />
          <path d="M12 18.5c0 1-.3 1.6-1.1 1.6-.7 0-1.1-.4-1.1-1v-4h-2.2v4.1c0 2.2 1.3 3.3 3.3 3.3 2 0 3.3-1.1 3.3-3.3v-4.1H12v3.4zm7.3 1c-.3.6-.9 1.1-1.9 1.1-1.2 0-1.8-.6-1.8-1.6h-2.2c0 2.1 1.4 3.4 4 3.4 2.2 0 3.9-1.2 3.9-3.2 0-3.3-3-3.8-3-4.9 0-.5.4-.8.9-.8.6 0 .9.3 1.1.8h2.1c-.2-1.8-1.5-2.8-3.2-2.8-2.2 0-3.8 1.2-3.8 3.2 0 3.3 3 3.8 3 4.9z" fill="black" />
        </svg>
      );
    case "typescript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#3178C6" rx="2" />
          <path d="M11.66 18.5c0 1.9-1.33 3.03-3.4 3.03-1.9 0-3.13-1-3.23-2.62h2.2c.07.66.53 1.05 1.05 1.05.57 0 .99-.33.99-.95v-8.2h2.4v8.29zm7.98-3.5c-.32 1.83-1.8 2.95-3.8 2.95-2.4 0-3.95-1.46-3.95-4.22 0-2.8 1.6-4.22 3.98-4.22 2.05 0 3.4 1.15 3.76 3.03h-2.29c-.21-.86-.75-1.34-1.47-1.34-.9 0-1.53.75-1.53 2.53 0 1.77.63 2.53 1.53 2.53.76 0 1.3-.47 1.48-1.28h2.29z" fill="white" />
        </svg>
      );
    case "java":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M2 19.5c0 .28.22.5.5.5h16c.28 0 .5-.22.5-.5v-1h-17v1zm14.5-9.5c0-.83-.67-1.5-1.5-1.5h-10c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h10c.83 0 1.5-.67 1.5-1.5v-6zm3-1h-2v4h2c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5zM9 1.5C9.55 1.5 10 2 10 2.5v2c0 .5-.45.9-1 .9s-1-.4-1-.9v-2c0-.5.45-1 1-1zm3.5 0c.55 0 1 .5 1 1v2c0 .5-.45.9-1 .9s-1-.4-1-.9v-2c0-.5.45-1 1-1z" fill="#E76F51" />
        </svg>
      );
    case "flutter":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M14.314 0L2.3 12l3.6 3.6L17.9 3.6 14.314 0zm0 9.227L8.34 15.2l3.6 3.6 8.34-8.34h-5.966zm0 8.345L11.93 20l2.3 2.39 8.34-8.34h-8.34v-.003z" fill="#02569B" />
        </svg>
      );
    case "dart":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4.1 11.23L12 3.32l7.9 7.91-2.42 2.41H8.38l-4.28-4.41zm8-10.42a1.88 1.88 0 00-1.33.55L1.11 11.08a1.88 1.88 0 000 2.66l9.56 9.56a1.88 1.88 0 002.66 0l9.56-9.56a1.88 1.88 0 000-2.66L13.43 1.36a1.88 1.88 0 00-1.33-.55z" fill="#0175C2" />
        </svg>
      );
    case "git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.3-.1c-.7 0-1.4.3-1.8.7L6.6 3.2 9.3 5.9c.5-.2 1.1-.3 1.7-.1.7.2 1.2.7 1.4 1.4.3.9.1 1.9-.6 2.5v4.5c.7-.3 1.4-.2 2 .2.6.4.9 1.1.9 1.8 0 .8-.5 1.5-1.2 1.8-.7.3-1.6.1-2.1-.5-.5-.5-.7-1.3-.4-2v-4.4c-.6-.3-1-.9-1.2-1.6-.2-.7 0-1.4.4-2L7.6 4.3 1.1 10.9c-.9.9-.9 2.5 0 3.4l10.2 10.2c.5.5 1.1.7 1.8.7.7 0 1.4-.3 1.8-.7l10.2-10.2c.9-.9.9-2.5 0-3.4z" fill="#F05032" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" fill="white" />
        </svg>
      );
    case "vscode":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.7.28l-8.46 7.42-4.9-3.77A1.5 1.5 0 001 5.3v13.4a1.5 1.5 0 001.15 1.16l4.9-3.77 8.46 7.42a1.5 1.5 0 001.7.28l4.94-2.37A1.5 1.5 0 0023 20V4a1.5 1.5 0 00-.85-1.413zM6.5 15.55l-3.3 2.53v-12.16l3.3 2.53v7.1zM17.3 18.57l-4.4-3.85V9.28l4.4-3.85v13.14z" fill="#007ACC" />
        </svg>
      );
    case "postman":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12.016 0A12 12 0 000 11.984a12 12 0 0012.016 12 12 12 0 0012-12A12 12 0 0012.016 0zm5.952 14.542l-2.923-2.923 2.923-2.923c.338-.338.338-.888 0-1.226s-.888-.338-1.226 0l-2.923 2.923-2.923-2.923c-.338-.338-.888-.338-1.226 0s-.338.888 0 1.226l2.923 2.923-2.923 2.923c-.338.338-.338.888 0 1.226s.888.338 1.226 0l2.923-2.923 2.923 2.923c.17.17.392.254.613.254s.443-.084.613-.254c.338-.338.338-.888 0-1.226zM12.016 9.497c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#FF6C37" />
        </svg>
      );
    case "figma":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M8 24a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4z" fill="#0ACF83" />
          <path d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#A259FF" />
          <path d="M4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E" />
          <path d="M12 0h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-4V0z" fill="#FF7262" />
          <path d="M12 8h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-4V8z" fill="#1ABC9C" />
        </svg>
      );
    default:
      return null;
  }
}

// ── Custom Interactive Bento Card Component ───────────────────
interface BentoCardProps {
  category: TechCategory;
  className?: string;
  delay?: number;
}

function BentoCard({ category, className, delay = 0 }: BentoCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Animation variants for Bento Card entrance slide & stagger trigger
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.06,
        delayChildren: delay + 0.1,
      },
    },
  };

  // Animation variants for technology badges pop in
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 350,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.012] p-7 md:p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02] hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.85)]",
        className
      )}
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              rgba(124, 58, 237, 0.08),
              transparent 85%
            )
          `,
        }}
      />

      {/* Gradient Mask Border */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 gradient-border-mask" />

      {/* Content wrapper */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Category Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl" role="img" aria-label={category.title}>
              {category.emoji}
            </span>
            <h3 className="text-lg font-bold text-white tracking-wide">
              {category.title}
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Tech badges flex grid */}
        <div className="flex flex-wrap gap-2.5 mt-4">
          {category.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={badgeVariants}
              whileHover={{
                y: -4,
                scale: 1.05,
                borderColor: `${skill.color}50`,
                boxShadow: `0 8px 20px -6px ${skill.color}15, 0 0 10px ${skill.color}10`,
                backgroundColor: `${skill.color}05`,
              }}
              transition={{ type: "spring", stiffness: 450, damping: 14 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/5 bg-white/[0.015] backdrop-blur-md cursor-pointer transition-all duration-300 select-none"
            >
              <div className="w-4.5 h-4.5 flex items-center justify-center shrink-0">
                <TechIcon name={skill.iconName} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-medium text-neutral-300 group-hover:text-white transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Tech Stack Component ─────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 relative overflow-hidden">
      {/* Floating neon ambient gradient blobs */}
      <div className="absolute top-1/4 left-1/12 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/12 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDelay: "2.5s", animationDuration: "8s" }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="My Tech Stack"
          subtitle="Technologies and tools I use to build modern web and mobile applications."
        />

        {/* Bento Grid layout */}
        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
          {TECH_CATEGORIES.map((category, catIdx) => (
            <BentoCard
              key={category.title}
              category={category}
              className={category.gridSpan}
              delay={catIdx * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
