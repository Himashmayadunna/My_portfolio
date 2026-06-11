"use client";

import { SITE, CONTACT } from "@/lib/constants";
import { ArrowUp, Mail } from "lucide-react";
import { Magnetic } from "@/components/ui/Button";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#030307] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Left Side: Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-neutral-600">
            Inspired by Vercel &amp; Apple. Engineered with Next.js.
          </p>
        </div>

        {/* Middle: Socials */}
        <div className="flex items-center gap-4">
          <Magnetic>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-neutral-400 transition-colors hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/10 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-neutral-400 transition-colors hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-neutral-400 transition-colors hover:border-[#A855F7]/30 hover:bg-[#A855F7]/10 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Magnetic>
        </div>

        {/* Right Side: Back to top */}
        <div className="flex justify-end">
          <Magnetic>
            <button
              onClick={scrollToTop}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-neutral-400 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 animate-pulse" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
