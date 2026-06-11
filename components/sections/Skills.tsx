"use client";

import { SKILLS_CATEGORIES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="My Skills"
          subtitle="A Bento Grid view of my technical competencies and tools"
        />

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
          {SKILLS_CATEGORIES.map((category, catIdx) => (
            <GlassCard
              key={category.title}
              delay={catIdx * 0.08}
              className={category.gridSpan}
            >
              {/* Category Header */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {category.description}
                </p>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-4 mt-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-neutral-300">{skill.name}</span>
                      <span className="font-semibold text-neutral-400">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
