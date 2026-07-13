"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { ExternalLink, Database, Cpu, Layout, ArrowRight, ShieldCheck, FileText, ImageIcon } from "lucide-react";
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

type CategoryFilter = "all" | "web" | "mobile" | "backend";

export default function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const filterButtons: { label: string; value: CategoryFilter }[] = [
    { label: "All", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Backend", value: "backend" },
  ];

  return (
    <section id="projects" className="px-6 py-24 relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="A display of web, mobile and backend software I have designed and engineered"
        />

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 select-none">
          {filterButtons.map((btn) => {
            const isActive = filter === btn.value;
            return (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-white border border-white/5 bg-white/[0.01]"
                }`}
              >
                <span className="relative z-10">{btn.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        {/* Responsive Stack of Flagship Cards */}
        <motion.div
          layout
          className="mt-12 grid gap-12 grid-cols-1"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              if (project.isFlagship) {
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    key={project.title}
                    className="flex flex-col group relative"
                  >
                    {/* Animated Border Glow Behind Card */}
                    <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500 opacity-20 blur-md group-hover:opacity-60 transition duration-700 pointer-events-none" />
                    
                    <div className="relative flex-1 p-6 md:p-8 rounded-[24px] border border-white/10 bg-gradient-to-br from-neutral-950 via-[#050B10]/95 to-[#051410]/90 backdrop-blur-xl hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-500">
                      
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        
                        {/* Project Details Panel */}
                        <div className={`lg:col-span-6 flex flex-col justify-between h-full space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                          <div>
                            {/* Badging */}
                            <div className="flex items-center gap-2 select-none">
                              <span className="rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-[0_2px_10px_rgba(59,130,246,0.3)]">
                                Flagship Project
                              </span>
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                                {project.subtitle || "Full Stack App"}
                              </span>
                            </div>
 
                            {/* Project Title */}
                            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white leading-tight">
                              {project.title}
                            </h3>
 
                            {/* Description */}
                            <p className="mt-3 text-xs md:text-sm text-neutral-300 leading-relaxed max-w-xl">
                              {project.description}
                            </p>
 
                            {/* Tech Badges */}
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {project.techStack.map((tech) => (
                                <Badge key={tech}>{tech}</Badge>
                              ))}
                            </div>
                          </div>
 
                          {/* Compact Stats Row */}
                          {project.stats && project.stats.length > 0 && (
                            <div className="flex items-center gap-4 py-2 border-y border-white/5 select-none text-[11px] text-neutral-400 font-mono">
                              {project.stats.map((stat, sIdx) => (
                                <div key={sIdx} className="flex items-center gap-1.5">
                                  <span className={`h-1.5 w-1.5 rounded-full ${stat.color || "bg-blue-500"}`} />
                                  <span><strong className="text-white">{stat.value}</strong> {stat.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
 
                          {/* Button Actions */}
                          <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Link
                              href={project.caseStudyUrl || "#"}
                              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:from-blue-500 hover:to-emerald-500 shadow-[0_10px_20px_rgba(59,130,246,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.35)] transition-all duration-300"
                            >
                              <FileText className="h-4 w-4" />
                              Read Case Study
                              <ArrowRight className="h-4 w-4" />
                            </Link>
 
                            <div className="flex items-center gap-2">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-xs font-semibold text-neutral-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                                >
                                  <Github className="h-3.5 w-3.5" />
                                  GitHub
                                </a>
                              )}
                              <Link
                                href={`${project.caseStudyUrl || ""}/#gallery`}
                                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-xs font-semibold text-neutral-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                              >
                                <ImageIcon className="h-3.5 w-3.5 text-blue-400" />
                                Screenshots
                              </Link>
                            </div>
                          </div>
                        </div>
 
                        {/* Widescreen Interactive Image Mockup Column */}
                        <div className={`lg:col-span-6 flex flex-col justify-center relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                          {/* Browser Window frame with subtle hover transition */}
                          <Link href={project.caseStudyUrl || "#"} className="block select-none">
                            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#090910] shadow-[0_20px_40px_rgba(0,0,0,0.5)] group/mockup">
                              {/* Ambient hover glow */}
                              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-indigo-500/5 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-500 pointer-events-none" />
 
                              {/* Browser mock window header */}
                              <div className="flex items-center justify-between bg-[#0D0D18] px-3.5 py-2 border-b border-white/5 relative z-20">
                                <div className="flex items-center gap-1.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-rose-500/60" />
                                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500/60" />
                                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                                </div>
                                <div className="h-3.5 w-36 bg-white/5 rounded-[3px] flex items-center justify-center border border-white/5">
                                  <span className="text-[7px] text-neutral-500 font-mono">{project.mockUrl || "localhost:3000"}</span>
                                </div>
                                <div className="w-8" />
                              </div>
 
                              {/* Viewport Screenshot */}
                              <div className="relative h-44 sm:h-52 md:h-64 w-full overflow-hidden bg-neutral-900">
                                <img
                                  src={project.image}
                                  alt={`${project.title} Dashboard Widescreen Preview`}
                                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/mockup:scale-[1.02]"
                                />
                                {/* Case Study hover overlay button */}
                                <div className="absolute inset-0 bg-black/25 group-hover/mockup:bg-mockup hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/75 px-3 py-2 rounded-lg border border-white/10 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                                    <FileText className="h-3 w-3" />
                                    Case Study
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
 
                      </div>
 
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  key={project.title}
                  className="flex flex-col group relative"
                >
                  {/* Glowing background spotlight effect on hover */}
                  <div className="absolute -inset-px rounded-[20px] bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 pointer-events-none" />

                  <GlassCard 
                    hoverEffect={false} 
                    className="flex-1 flex flex-col p-5 rounded-[20px] border border-white/5 bg-[#090910]/90 backdrop-blur-xl group-hover:border-white/15 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Viewport/Mockup Image Container */}
                    <div className="relative h-44 w-full rounded-xl overflow-hidden border border-white/10 bg-[#06060c] flex items-center justify-center select-none group/viewport">
                      {/* Browser top-bar mock */}
                      <div className="absolute top-0 left-0 right-0 h-6 bg-[#0c0c14] border-b border-white/5 flex items-center px-3 gap-1.5 z-20">
                        <div className="h-1.5 w-1.5 rounded-full bg-rose-500/60" />
                        <div className="h-1.5 w-1.5 rounded-full bg-amber-500/60" />
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
                        <div className="h-3 w-24 bg-white/5 rounded-[3px] ml-2 flex items-center justify-center border border-white/5">
                          <span className="text-[7px] text-neutral-500 font-mono scale-90">localhost:3000</span>
                        </div>
                      </div>

                      {/* Content representation */}
                      <div className="absolute inset-0 pt-6 flex items-center justify-center">
                        {project.image.startsWith("linear-gradient") ? (
                          <div className="absolute inset-0 transition-transform duration-500 group-hover/viewport:scale-105" style={{ background: project.image }} />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/viewport:scale-105"
                          />
                        )}
                        {/* Wavy overlay grid lines for tech look */}
                        <div className="absolute inset-0 bg-grid-bg opacity-[0.15] mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      </div>

                      {/* Floating Category Tag */}
                      <span className="absolute bottom-3 right-3 z-20 rounded bg-white/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-neutral-300 border border-white/10 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mt-5">
                      <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    {/* Key Challenges Section */}
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                      <h4 className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                        Key Engineering Solutions
                      </h4>
                      <div className="space-y-1.5">
                        {project.challenges.map((c, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.01] border border-white/5 text-[11px] text-neutral-400 hover:text-white transition-all duration-300"
                          >
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-500 flex-shrink-0" />
                            <span className="leading-normal">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer links */}
                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/5 select-none">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer group/link"
                        >
                          <Github className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#3B82F6] hover:text-[#6366F1] transition-colors font-semibold cursor-pointer group/link"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
