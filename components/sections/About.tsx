"use client";

import { ABOUT } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Code, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="About Me"
          subtitle="My journey, career goals, and what drives me"
        />

        <GlassCard hoverEffect={false} className="mt-8 overflow-visible">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">

            {/* Left Side: Avatar/Illustration */}
            <div className="md:col-span-5 flex flex-col items-center justify-center relative py-6">

              {/* Rotating outer rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-[#7C3AED]/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute h-[270px] w-[270px] rounded-full border border-dotted border-[#3B82F6]/40"
              />

              {/* Central stylized avatar */}
              <div className="relative z-10 flex h-60 w-60 items-center justify-center rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#3B82F6] p-1 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_45px_rgba(124,58,237,0.55)] transition-shadow duration-500">
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#05050B] overflow-hidden">
                  <Image
                    src="/me.jpeg"
                    alt="Himash Mayadunna"
                    fill
                    sizes="240px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating micro features/icons */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/5 backdrop-blur-md text-[#7C3AED]"
              >
                <Code className="h-4 w-4" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/5 backdrop-blur-md text-[#3B82F6]"
              >
                <Globe className="h-4 w-4" />
              </motion.div>
            </div>

            {/* Right Side: Narrative */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Himash Mayadunna
                </h3>
                <p className="text-xs uppercase tracking-widest font-mono text-neutral-500 font-bold">
                  Undergraduate Software Engineer
                </p>
              </div>

              {/* Career Objective Callout */}
              <div className="relative rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-4 text-sm leading-relaxed text-[#A855F7] italic">
                <span className="absolute -top-3 left-4 bg-[#05050B] px-2 text-[10px] font-bold uppercase tracking-wider text-purple-400 select-none">
                  Career Objective
                </span>
                &ldquo;{ABOUT.careerObjective}&rdquo;
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-4 text-sm leading-relaxed text-neutral-400">
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Tech highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Key Skills &amp; Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {ABOUT.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:border-[#7C3AED]/20 hover:bg-[#7C3AED]/5"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
}
