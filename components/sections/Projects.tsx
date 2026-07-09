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
        <motion.div
          layout
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              if (project.isFlagship) {
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    key={project.title}
                    className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col group relative"
                  >
                    {/* Animated Border Glow Behind Card */}
                    <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500 opacity-20 blur-md group-hover:opacity-60 transition duration-700 pointer-events-none" />
                    
                    <div className="relative flex-1 flex flex-col md:flex-row p-6 md:p-8 rounded-[24px] border border-white/10 bg-gradient-to-br from-neutral-950 via-[#050B10]/95 to-[#051410]/90 backdrop-blur-xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-300">
                      {/* Left Details Panel */}
                      <div className="flex-1 flex flex-col justify-between pr-0 md:pr-6">
                        <div>
                          {/* Top Badges */}
                          <div className="flex flex-wrap items-center gap-2 select-none">
                            <span className="rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                              Flagship Project
                            </span>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                              Full Stack ERP | Advanced DBMS
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-white tracking-tight bg-clip-text bg-gradient-to-r from-white via-blue-100 to-emerald-100">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed max-w-2xl">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="mt-6 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech}>{tech}</Badge>
                            ))}
                          </div>
                        </div>

                        {/* Features Column */}
                        <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                            <ShieldCheck className="h-4 w-4 text-emerald-400" />
                            Core Capabilities Engineered
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {project.challenges.map((c, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-neutral-400 hover:text-white transition-colors"
                              >
                                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                                <span>{c}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Architecture & Stats Panel */}
                      <div className="mt-6 md:mt-0 w-full md:w-80 flex-shrink-0 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-6">
                        {/* Interactive Stats Block */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                            <Database className="h-4 w-4 text-blue-400" />
                            Project Architecture Statistics
                          </h4>
                          
                          {/* Mini Stats Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all">
                              <span className="block text-xl font-bold text-white font-mono">20+</span>
                              <span className="text-[10px] text-neutral-500 uppercase tracking-wider">DB Tables</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all">
                              <span className="block text-xl font-bold text-white font-mono">50+</span>
                              <span className="text-[10px] text-neutral-500 uppercase tracking-wider">REST APIs</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all">
                              <span className="block text-xl font-bold text-white font-mono">10+</span>
                              <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Core Modules</span>
                            </div>
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all">
                              <span className="block text-xs font-bold text-white uppercase tracking-wider">3NF SQL</span>
                              <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Stored Procs</span>
                            </div>
                          </div>

                          {/* Architecture SVG Visual */}
                          <div className="relative py-4 px-3 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col justify-center items-center gap-2 select-none overflow-hidden group/arch">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 opacity-0 group-hover/arch:opacity-100 transition-opacity" />
                            
                            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 relative z-10 w-full justify-between">
                              <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                <Layout className="h-3 w-3 text-blue-400" />
                                <span>React</span>
                              </div>
                              <span className="text-neutral-500 text-[10px] animate-pulse">➔</span>
                              <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                <Cpu className="h-3 w-3 text-indigo-400" />
                                <span>Express</span>
                              </div>
                              <span className="text-neutral-500 text-[10px] animate-pulse">➔</span>
                              <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                <Database className="h-3 w-3 text-emerald-400" />
                                <span>SQL Server</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Actions / Buttons */}
                        <div className="mt-8 flex flex-col gap-2">
                          <Link
                            href="/projects/medilex"
                            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:from-blue-500 hover:to-emerald-500 shadow-[0_10px_20px_rgba(59,130,246,0.2)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.35)] transition-all duration-300"
                          >
                            <FileText className="h-4 w-4" />
                            Read Case Study
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                          
                          <div className="grid grid-cols-2 gap-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] py-2.5 text-[11px] font-semibold text-neutral-300 hover:bg-white/5 hover:text-white transition-colors"
                              >
                                <Github className="h-3.5 w-3.5" />
                                GitHub
                              </a>
                            )}
                            <Link
                              href="/projects/medilex#gallery"
                              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] py-2.5 text-[11px] font-semibold text-neutral-300 hover:bg-white/5 hover:text-white transition-colors"
                            >
                              <ImageIcon className="h-3.5 w-3.5 text-blue-400" />
                              Screenshots
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                  className="flex flex-col"
                >
                  <GlassCard hoverEffect={true} className="flex-1 flex flex-col p-5">
                    {/* Project Image Mockup Area */}
                    <div
                      style={{ background: project.image }}
                      className="relative h-44 w-full rounded-xl overflow-hidden border border-white/10 flex items-center justify-center"
                    >
                      {/* Visual pattern overlay for mockup premium vibe */}
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                      <span className="relative z-10 font-bold text-white text-lg tracking-wide uppercase px-4 text-center">
                        {project.title}
                      </span>
                    </div>

                    {/* Title & Category Badge */}
                    <div className="mt-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Technology badging */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    {/* Bullet points on key challenges */}
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5">
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                        Key Challenges Solved
                      </h4>
                      <ul className="space-y-1">
                        {project.challenges.map((c, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-1.5 text-xs text-neutral-400 leading-normal"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#3B82F6]" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer links */}
                    <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/5 select-none">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#3B82F6] hover:text-[#6366F1] transition-colors ml-auto font-semibold"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
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
