// ============================================================
// components/sections/Projects.tsx
// Featured projects with glassmorphism cards
// ============================================================
"use client";

import { PROJECTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built and learned from"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <GlassCard key={project.title} delay={i * 0.1} className="flex flex-col">
              {/* Title */}
              <h3 className="mb-2 text-xl font-bold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-4 grid grid-cols-2 gap-2">
                  {project.screenshots.slice(0, 4).map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.title} screenshot`}
                      className="h-20 w-full rounded-md border border-white/10 object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}

              {/* Tech stack badges */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {/* Challenges */}
              <div className="mb-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Key Challenges
                </p>
                <ul className="space-y-1">
                  {project.challenges.map((c, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-neutral-400"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              {(project.github || project.demo) && (
                <div className="flex gap-4 border-t border-white/10 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 transition-colors hover:text-blue-300"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
