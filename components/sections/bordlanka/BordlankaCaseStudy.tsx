"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Database,
  Cpu,
  Layout,
  ArrowRight,
  Lock,
  Smartphone,
  Globe,
  Settings,
  Home,
  Search,
  CheckCircle2,
  AlertTriangle,
  Briefcase,
  Layers,
  ChevronRight
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";

// Count-up animation helper hook
function useCountUp(endValue: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return count;
}

const TIMELINE = [
  { step: "1", title: "Research & Wireframing", desc: "Analyzing competitors, creating user personas, and drafting low-fidelity wireframes in Figma." },
  { step: "2", title: "UI Design", desc: "Crafting a dark luxury aesthetic with glassmorphism components and a comprehensive design system." },
  { step: "3", title: "Frontend Development", desc: "Building responsive React components with Next.js, Framer Motion, and Tailwind CSS." },
  { step: "4", title: "Backend API", desc: "Developing RESTful APIs with Express.js and securing endpoints with JWT." },
  { step: "5", title: "Database & Auth", desc: "Designing PostgreSQL schemas on Supabase and integrating Supabase Auth." },
  { step: "6", title: "Testing & Deployment", desc: "End-to-end testing, optimizing performance, and deploying on Vercel." }
];

export default function BordlankaCaseStudy() {
  
  // Stats Counters
  const pagesCount = useCountUp(25);
  const apiCount = useCountUp(18);
  const tableCount = useCountUp(8);
  const locCount = useCountUp(12500);

  return (
    <div className="min-h-screen bg-[#030305] text-white overflow-x-hidden selection:bg-blue-500/30">
      {/* Background gradients */}
      <div className="fixed top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030305]/60 backdrop-blur-xl py-4 px-6 select-none transition-all duration-300">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
              BoardLanka Case Study
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-24 pb-20 relative">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">Property Rental Marketplace</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6">
              BoardLanka. <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Next-Gen Rentals.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              A modern full-stack property rental platform built for students, working professionals, and families to discover rooms, annexes, and houses across Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview & My Role */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                BoardLanka connects property owners with renters through a secure, responsive, and user-friendly marketplace. The platform eliminates the friction of traditional rental hunting by providing verified listings, advanced filtering, and a seamless discovery experience tailored for the Sri Lankan market.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Resend"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 bg-white/5 text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <GlassCard className="h-full">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-blue-400" /> My Role: Full Stack Developer
                </h3>
                <ul className="space-y-4 mt-6">
                  {[
                    "UI/UX Design & Wireframing",
                    "Frontend Development (React/Next.js)",
                    "Backend API Architecture (Node/Express)",
                    "Database Design (PostgreSQL)",
                    "Authentication & Security Setup",
                    "Responsive Web Design Implementation"
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 py-24 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          <GlassCard className="border-red-500/20">
            <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
              <AlertTriangle className="h-6 w-6 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <ul className="space-y-4 text-neutral-400">
              <li className="flex gap-3"><span className="text-red-400 mt-1">•</span> Students struggle to find verified boarding places near universities.</li>
              <li className="flex gap-3"><span className="text-red-400 mt-1">•</span> Working professionals waste time sifting through unorganized, unreliable Facebook groups.</li>
              <li className="flex gap-3"><span className="text-red-400 mt-1">•</span> Property owners lack a centralized, professional way to advertise their rentals.</li>
              <li className="flex gap-3"><span className="text-red-400 mt-1">•</span> No modern, dedicated platform exists specifically for the Sri Lankan rental market.</li>
            </ul>
          </GlassCard>

          <GlassCard className="border-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Lock className="h-40 w-40 text-blue-400" />
            </div>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                <CheckCircle2 className="h-6 w-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex gap-3"><span className="text-blue-400 mt-1">•</span> Verified property listings with high-quality images and clear pricing.</li>
                <li className="flex gap-3"><span className="text-blue-400 mt-1">•</span> Advanced search & powerful filtering to find exact matches quickly.</li>
                <li className="flex gap-3"><span className="text-blue-400 mt-1">•</span> Secure authentication and dedicated dashboards for property owners.</li>
                <li className="flex gap-3"><span className="text-blue-400 mt-1">•</span> A modern, responsive interface accessible on any device.</li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* System Architecture */}
      <section className="px-6 py-24 border-t border-white/5 relative">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
          <p className="text-neutral-400 mb-16 max-w-2xl mx-auto">A robust, scalable tech stack designed for high performance and seamless user experience.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10">
            {/* Animated Architecture Nodes */}
            {[
              { icon: Globe, name: "Next.js Frontend", color: "blue" },
              { icon: Cpu, name: "Express Backend", color: "indigo" },
              { icon: Database, name: "Supabase PostgreSQL", color: "emerald" },
            ].map((node, i, arr) => (
              <div key={i} className="flex flex-col md:flex-row items-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm w-48 relative group"
                >
                  <div className={`h-16 w-16 rounded-full bg-${node.color}-500/20 flex items-center justify-center mb-4 border border-${node.color}-500/30 group-hover:scale-110 transition-transform`}>
                    <node.icon className={`h-8 w-8 text-${node.color}-400`} />
                  </div>
                  <span className="font-bold text-sm">{node.name}</span>
                </motion.div>
                
                {i < arr.length - 1 && (
                  <div className="hidden md:flex flex-col items-center justify-center mx-4">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500/50 to-indigo-500/50" />
                    <ArrowRight className="h-4 w-4 text-neutral-500 -mt-2.5 ml-8" />
                  </div>
                )}
                {i < arr.length - 1 && (
                  <div className="md:hidden flex flex-col items-center justify-center my-4">
                    <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500/50 to-indigo-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Goals Grid */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Secure Login", icon: Lock },
              { title: "Advanced Search", icon: Search },
              { title: "Property Filters", icon: Layers },
              { title: "Owner Dashboard", icon: Layout },
              { title: "Favorites List", icon: Home },
              { title: "Responsive UI", icon: Smartphone },
              { title: "Email Alerts", icon: Globe },
              { title: "Fast Discovery", icon: ChevronRight }
            ].map((feature, i) => (
              <GlassCard key={i} className="p-6 text-center hover:bg-white/[0.04] transition-colors cursor-default">
                <feature.icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h4 className="font-bold text-sm">{feature.title}</h4>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="px-6 py-24 bg-white/[0.01] border-t border-white/5 overflow-hidden">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-16 text-center">Development Process</h2>
          
          <div className="relative border-l-2 border-blue-500/20 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/20 -translate-x-1/2" />
            
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-41px] md:left-1/2 md:-translate-x-1/2 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10 border-4 border-[#030305]">
                    {item.step}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <GlassCard className="p-6 hover:border-blue-500/30">
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Results */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Challenges Overcome</h2>
            <div className="space-y-6">
              {[
                { title: "Scalable Database Design", desc: "Structuring PostgreSQL schemas to handle complex relational queries between users, properties, and favorites without performance bottlenecks." },
                { title: "Frontend-Backend Integration", desc: "Ensuring seamless state management and data fetching between the Next.js client and the Express REST API." },
                { title: "Responsive Layouts", desc: "Creating a premium glassmorphism aesthetic that degrades gracefully on mobile devices without sacrificing UX." }
              ].map((c, i) => (
                <div key={i} className="border-l-2 border-red-500/40 pl-6 pb-2">
                  <h4 className="font-bold text-white mb-2">{c.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Results & Takeaways</h2>
            <div className="space-y-6">
              <GlassCard className="p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/20">
                <h4 className="font-bold text-emerald-400 mb-2">Platform Successfully Launched</h4>
                <p className="text-sm text-neutral-300">Delivered a highly responsive, secure, and modern web application with a scalable architecture ready for real-world user adoption.</p>
              </GlassCard>
              
              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="p-5 text-center">
                  <Database className="h-6 w-6 text-blue-400 mx-auto mb-3" />
                  <p className="text-xs font-bold">PostgreSQL Mastered</p>
                </GlassCard>
                <GlassCard className="p-5 text-center">
                  <Lock className="h-6 w-6 text-blue-400 mx-auto mb-3" />
                  <p className="text-xs font-bold">Auth Implemented</p>
                </GlassCard>
                <GlassCard className="p-5 text-center">
                  <Cpu className="h-6 w-6 text-blue-400 mx-auto mb-3" />
                  <p className="text-xs font-bold">REST APIs Built</p>
                </GlassCard>
                <GlassCard className="p-5 text-center">
                  <Settings className="h-6 w-6 text-blue-400 mx-auto mb-3" />
                  <p className="text-xs font-bold">Clean Architecture</p>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="px-6 py-20 border-y border-white/5 bg-[#05050A]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="text-center">
                <span className="block text-4xl md:text-6xl font-extrabold text-blue-400 font-mono mb-2">{pagesCount}</span>
                <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Pages Designed</span>
             </div>
             <div className="text-center">
                <span className="block text-4xl md:text-6xl font-extrabold text-indigo-400 font-mono mb-2">{apiCount}</span>
                <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider">API Endpoints</span>
             </div>
             <div className="text-center">
                <span className="block text-4xl md:text-6xl font-extrabold text-purple-400 font-mono mb-2">{tableCount}</span>
                <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Database Tables</span>
             </div>
             <div className="text-center">
                <span className="block text-4xl md:text-6xl font-extrabold text-cyan-400 font-mono mb-2">{locCount}+</span>
                <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Lines of Code</span>
             </div>
          </div>
        </div>
      </section>

      {/* Future Improvements & Conclusion */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Looking Ahead</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
             {["Google Maps Integration", "Booking System", "Real-time Chat", "Push Notifications", "AI Property Recommendations", "Admin Dashboard"].map((item, i) => (
               <Badge key={i} className="px-4 py-2 text-sm bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                 {item}
               </Badge>
             ))}
          </div>

          <GlassCard className="p-10 md:p-16 border-blue-500/20 bg-gradient-to-b from-blue-900/10 to-transparent">
            <h2 className="text-3xl font-bold mb-6 text-white">Conclusion</h2>
            <p className="text-lg text-neutral-300 leading-relaxed mx-auto max-w-2xl">
              BoardLanka successfully demonstrates my ability to build scalable full-stack applications using modern technologies. From designing intuitive interfaces to engineering robust backend systems and PostgreSQL databases, this project represents my commitment to best software engineering practices and delivering real-world value.
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
