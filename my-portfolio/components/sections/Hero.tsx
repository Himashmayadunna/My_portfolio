// ============================================================
// components/sections/Hero.tsx
// Full-viewport hero with animated text reveal
// ============================================================
"use client";

import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import Button from "@/components/ui/Button";

// Stagger children animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={item}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400"
        >
          {HERO.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="mb-4 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
        >
          {HERO.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="mb-6 text-lg font-medium text-neutral-400 sm:text-xl"
        >
          {HERO.title}
        </motion.p>

        {/* Intro */}
        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-neutral-500"
        >
          {HERO.intro}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={HERO.cta.projects} variant="primary">
            View Projects
          </Button>
          <Button
            href={HERO.cta.github}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            href={HERO.cta.resume}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
          <Button href={HERO.cta.contact} variant="outline">
            Contact
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-500">Scroll</span>
          <div className="h-6 w-4 rounded-full border border-neutral-600 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-neutral-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
