"use client";

import { EDUCATION_LIST } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Education"
          subtitle="My academic pathways"
        />

        <div className="mt-12 space-y-8">
          {EDUCATION_LIST.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect={true} className="relative p-8 overflow-visible">
                {/* Visual Glow Node */}
                <div className="absolute -top-5 left-8 sm:-left-5 h-12 w-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#6366F1] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 select-none">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div className="pt-6 sm:pt-0 sm:ml-8 mt-2 space-y-4">
                  {/* Title & Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-neutral-400 font-semibold mt-1">
                        {edu.university}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                      <span className="flex items-center gap-1.5 border border-white/5 bg-white/[0.02] px-2.5 py-1 rounded-md">
                        <Calendar className="h-3.5 w-3.5 text-blue-400" />
                        {edu.year}
                      </span>
                    </div>
                  </div>

                  {/* Details paragraph */}
                  {edu.details && (
                    <p className="text-sm text-neutral-400 leading-relaxed pt-2 border-t border-white/5">
                      {edu.details}
                    </p>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
