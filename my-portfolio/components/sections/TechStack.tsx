// ============================================================
// components/sections/TechStack.tsx
// Categorized tech stack with grid cards
// ============================================================
"use client";

import { TECH_STACK } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function TechStack() {
  return (
    <section id="tech" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Tech Stack"
          subtitle="Tools and technologies I work with"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {TECH_STACK.map((category, catIdx) => (
            <GlassCard key={category.title} delay={catIdx * 0.1}>
              <h3 className="mb-4 text-lg font-semibold text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
                  >
                    <span className="text-base">{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
