// ============================================================
// components/sections/About.tsx
// About section with highlighted skills
// ============================================================
"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="About Me"
          subtitle="A bit about who I am and what I do"
        />

        {/* Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 text-center"
        >
          {ABOUT.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-400"
            >
              {p}
            </p>
          ))}
        </motion.div>

        {/* Skill highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {ABOUT.highlights.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 transition-colors hover:border-blue-400/50 hover:bg-blue-500/20"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
