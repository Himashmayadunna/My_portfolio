"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO, CONTACT } from "@/lib/constants";
import Button, { Magnetic } from "@/components/ui/Button";
import { Mail } from "lucide-react";

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

const codeSnippets = {
  "App.tsx": `import React, { useState } from 'react';

export default function Developer() {
  const [skills] = useState([
    "Next.js", "React", "Node.js", 
    "TypeScript", "Flutter", "C#"
  ]);

  return (
    <main className="portfolio">
      <Hero 
        name="Himash Mayadunna"
        passion="Interactive Web Apps" 
        stack={skills}
      />
    </main>
  );
}`,
  "api.ts": `export async function fetchBio() {
  return {
    name: "Himash Mayadunna",
    location: "Colombo, Sri Lanka",
    education: "NSBM Green University",
    gpa: "3.85 / 4.00",
    status: "Seeking Internship"
  };
}`,
  "terminal.log": `> npm run dev
ready - started server on 0.0.0.0:3000
event - compiled client and server successfully in 765 ms
✓ Ready to build impact-driven solutions.
_`
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeSnippets>("App.tsx");
  const [subtitleText, setSubtitleText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Subtitle typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = HERO.subtitles[subtitleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && subtitleText === currentWord) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && subtitleText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setSubtitleIndex((prev) => (prev + 1) % HERO.subtitles.length);
      }, 300);
    } else {
      timer = setTimeout(() => {
        setSubtitleText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [subtitleText, isDeleting, subtitleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-12 grid-bg"
    >
      {/* Drifting gradient blobs behind hero content */}
      <div className="absolute inset-0 -z-10 overflow-hidden select-none pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[100px] neon-glow-primary"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px] neon-glow-secondary"
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Side: Text and Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-300 uppercase select-none"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
            {HERO.greeting}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-2"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl leading-none">
              {HERO.name}
            </h1>
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#7C3AED] via-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent sm:text-3xl md:text-4xl h-10 select-none">
              {subtitleText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-7 bg-blue-500 ml-1 translate-y-1"
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg"
          >
            {HERO.intro}
          </motion.p>

          {/* Call to Actions & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex flex-wrap gap-4">
              <Button href={HERO.cta.projects} variant="primary">
                View Projects
              </Button>
              <Button
                href={HERO.cta.resume}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-8">
              <Magnetic>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 transition-colors hover:text-white"
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
                  className="text-neutral-400 transition-colors hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-neutral-400 transition-colors hover:text-purple-400"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Code Editor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 relative group"
        >
          {/* Neon Border Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#3B82F6] opacity-30 blur-lg transition duration-1000 group-hover:opacity-50" />
          
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#05050B]/85 shadow-2xl backdrop-blur-xl">
            {/* Header / Mac OS Controls */}
            <div className="flex items-center justify-between border-b border-white/5 bg-black/40 px-4 py-3">
              <div className="flex items-center gap-2 select-none">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[10px] uppercase tracking-widest font-mono text-neutral-500 font-semibold select-none">
                VS Code - Himash
              </div>
              <div className="w-12" />
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/5 bg-black/20 font-mono text-xs">
              {(Object.keys(codeSnippets) as Array<keyof typeof codeSnippets>).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`border-r border-white/5 px-4 py-2 text-neutral-400 transition-colors select-none ${
                      isActive ? "bg-black/40 text-[#A855F7] font-semibold border-b border-b-[#A855F7]" : "hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Code Content */}
            <div className="p-4 font-mono text-xs text-neutral-300 leading-relaxed overflow-x-auto min-h-[250px] relative select-none">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-pre text-left"
                >
                  <code>{codeSnippets[activeTab]}</code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#about" aria-label="Scroll to about section">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          >
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Scroll Down</span>
            <div className="h-6 w-4 rounded-full border border-neutral-500 p-1 flex justify-center">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-neutral-200"
              />
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
