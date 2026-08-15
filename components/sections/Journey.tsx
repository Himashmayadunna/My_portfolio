"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JOURNEY_TRACKS, JourneyItem } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import {
  Globe,
  Smartphone,
  ArrowDown,
  ArrowRight,
  FileText,
  Sparkles,
  Layers,
  Code2
} from "lucide-react";
import Link from "next/link";

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

type FilterMode = "all" | "web" | "mobile";

export default function Journey() {
  const [activeTab, setActiveTab] = useState<FilterMode>("all");

  return (
    <section id="journey" className="px-6 py-24 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Development Journey"
          subtitle="A structured roadmap of my engineering evolution across Web Applications and Mobile Systems."
        />

        {/* View mode buttons for mobile / quick filtering */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 select-none">
          {[
            { label: "All Tracks (Side by Side)", value: "all" as const },
            { label: "Web Applications", value: "web" as const, icon: Globe },
            { label: "Mobile Apps", value: "mobile" as const, icon: Smartphone },
          ].map((tab) => {
            const isActive = activeTab === tab.value;
            const Icon = tab.icon;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-neutral-400 hover:text-white border border-white/5 bg-white/[0.02]"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span className="relative z-10">{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeJourneyTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#10B981]"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dual Track Grid Container */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          {/* ── TRACK 1: WEB APPLICATION ────────────────────────── */}
          {(activeTab === "all" || activeTab === "web") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${
                activeTab === "web" ? "lg:col-span-2 max-w-3xl mx-auto w-full" : ""
              }`}
            >
              {/* Column Header */}
              <div className="relative p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-[#060B18]/90 to-[#040810] shadow-[0_10px_30px_rgba(59,130,246,0.15)] mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      Web Application
                    </h3>
                    <p className="text-xs text-blue-300/80 font-mono">
                      Full-Stack & Distributed Web Architecture
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                  {JOURNEY_TRACKS.web.length} Milestones
                </span>
              </div>

              {/* Connected Flow List */}
              <div className="flex flex-col">
                {JOURNEY_TRACKS.web.map((project, idx) => (
                  <div key={project.id} className="flex flex-col">
                    <JourneyCard item={project} trackType="web" />
                    
                    {/* Downward Connector Arrow (as drawn in diagram) */}
                    {idx < JOURNEY_TRACKS.web.length - 1 && (
                      <ConnectorArrow trackColor="blue" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── TRACK 2: MOBILE APP ─────────────────────────────── */}
          {(activeTab === "all" || activeTab === "mobile") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`flex flex-col ${
                activeTab === "mobile" ? "lg:col-span-2 max-w-3xl mx-auto w-full" : ""
              }`}
            >
              {/* Column Header */}
              <div className="relative p-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 via-[#051410]/90 to-[#030A08] shadow-[0_10px_30px_rgba(16,185,129,0.15)] mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      Mobile App.
                    </h3>
                    <p className="text-xs text-emerald-300/80 font-mono">
                      Cross-Platform & Native Mobile Ecosystems
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  {JOURNEY_TRACKS.mobile.length} Milestones
                </span>
              </div>

              {/* Connected Flow List */}
              <div className="flex flex-col">
                {JOURNEY_TRACKS.mobile.map((project, idx) => (
                  <div key={project.id} className="flex flex-col">
                    <JourneyCard item={project} trackType="mobile" />
                    
                    {/* Downward Connector Arrow (as drawn in diagram) */}
                    {idx < JOURNEY_TRACKS.mobile.length - 1 && (
                      <ConnectorArrow trackColor="emerald" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}

// ── Journey Card Component ─────────────────────────────────────
function JourneyCard({
  item,
  trackType,
}: {
  item: JourneyItem;
  trackType: "web" | "mobile";
}) {
  const isWeb = trackType === "web";
  const glowColor = isWeb ? "group-hover:border-blue-500/40" : "group-hover:border-emerald-500/40";
  const badgeGradient = isWeb
    ? "from-blue-500/15 to-indigo-500/15 text-blue-300 border-blue-500/30"
    : "from-emerald-500/15 to-teal-500/15 text-emerald-300 border-emerald-500/30";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className={`p-6 rounded-2xl border border-white/10 bg-[#080811]/90 backdrop-blur-xl transition-all duration-300 shadow-lg ${glowColor}`}>
        
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-4 select-none">
          <div className="flex items-center gap-2.5">
            <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-gradient-to-r border ${badgeGradient}`}>
              {item.step}
            </span>
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              {item.subtitle}
            </span>
          </div>

          {/* Quick Case Study Badge */}
          {item.caseStudyUrl && (
            <Link
              href={item.caseStudyUrl}
              className="text-[11px] font-semibold text-neutral-400 group-hover:text-white flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Case Study</span>
            </Link>
          )}
        </div>

        {/* Project Title */}
        <h4 className="mt-3 text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors">
          {item.title}
        </h4>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {item.description}
        </p>

        {/* Tech Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Footer Links */}
        <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between select-none">
          {item.github ? (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer group/link"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          ) : <div />}

          {item.caseStudyUrl && (
            <Link
              href={item.caseStudyUrl}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                isWeb
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-emerald-400 hover:text-emerald-300"
              }`}
            >
              <span>Explore Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

      </div>
    </motion.div>
  );
}

// ── Connector Arrow Component ──────────────────────────────────
function ConnectorArrow({ trackColor }: { trackColor: "blue" | "emerald" }) {
  const isBlue = trackColor === "blue";
  const lineColor = isBlue ? "from-blue-500/40 via-indigo-500/40 to-blue-500/40" : "from-emerald-500/40 via-teal-500/40 to-emerald-500/40";
  const arrowBg = isBlue ? "bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]" : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]";

  return (
    <div className="my-2.5 flex flex-col items-center select-none">
      {/* Top Connector Line */}
      <div className={`h-4 w-[2px] bg-gradient-to-b ${lineColor}`} />
      
      {/* Downward Pulse Arrow Icon */}
      <div className={`p-1.5 rounded-full border ${arrowBg} my-0.5 transition-transform hover:scale-110`}>
        <ArrowDown className="w-3.5 h-3.5 animate-pulse" />
      </div>

      {/* Bottom Connector Line */}
      <div className={`h-4 w-[2px] bg-gradient-to-b ${lineColor}`} />
    </div>
  );
}
