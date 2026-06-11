"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { ExternalLink } from "lucide-react";

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
            {filteredProjects.map((project) => (
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
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
