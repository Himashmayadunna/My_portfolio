// ============================================================
// components/sections/Challenges.tsx
// Engineering challenges / debugging problems solved
// ============================================================
"use client";

import { CHALLENGES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function Challenges() {
  return (
    <section id="challenges" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Engineering Challenges"
          subtitle="Real problems I've debugged and solved"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {CHALLENGES.map((challenge, i) => (
            <GlassCard key={challenge.title} delay={i * 0.12}>
              {/* Title */}
              <h3 className="mb-3 text-lg font-bold text-white">
                {challenge.title}
              </h3>

              {/* Problem */}
              <div className="mb-3">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/80">
                  Problem
                </p>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {challenge.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-3">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-400/80">
                  Solution
                </p>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {challenge.solution}
                </p>
              </div>

              {/* Impact */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-green-400/80">
                  Impact
                </p>
                <p className="text-sm leading-relaxed text-neutral-300">
                  {challenge.impact}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
