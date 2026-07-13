"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Database,
  Cpu,
  Layout,
  ArrowRight,
  ShieldCheck,
  FileText,
  ImageIcon,
  Newspaper,
  Plus,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Briefcase,
  Layers,
  Award,
  ChevronRight,
  Grid,
  List,
  Sparkles,
  Zap
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";

// Count-up animation helper hook
function useCountUp(endValue: number, duration: number = 1000) {
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

const ARCHITECTURE_LAYERS = [
  {
    id: "frontend",
    title: "Next.js Core & App Router",
    tech: "Next.js, Tailwind CSS, TypeScript",
    description: "Responsive layouts leveraging Next.js dynamic routing, and custom fonts. Optimized with sharp visual containment boundaries.",
    details: [
      "Incremental Static Regeneration (ISR) with revalidation parameters",
      "Dynamic layouts with tailwind responsive classes",
      "Zero cumulative layout shifts (CLS) on dynamic image loadings",
      "SEO semantic structures optimizing Google crawler sweeps"
    ]
  },
  {
    id: "api",
    title: "Next.js Route Handlers",
    tech: "Next.js Serverless Edge Functions",
    description: "Backend endpoints executed at Edge locations, pulling news streams from CMS targets and serving content within sub-50ms thresholds.",
    details: [
      "Edge-based routing decreasing initial payload latencies",
      "Unified JSON schema parser matching article payloads",
      "Auto-refresh webhooks reacting to CMS publish schedules",
      "CORS security configurations safeguarding dynamic API requests"
    ]
  },
  {
    id: "cache",
    title: "Vercel Edge Cache & ISR Engine",
    tech: "Vercel CDN, Stale-While-Revalidate Headers",
    description: "Caching rules governing payload storage, validating static HTML versions for users while refreshing pages in background cycles.",
    details: [
      "Stale-while-revalidate headers caching pages at Vercel POPS",
      "Revalidation limits automatically triggered by author adjustments",
      "Resource assets optimized via Next.js dynamic compression",
      "99.5% Cache Hit Ratio recorded across globally distributed traffic"
    ]
  }
];

interface Article {
  id: string;
  title: string;
  category: "Technology" | "Business" | "Science";
  snippet: string;
  time: string;
  readTime: string;
  image: string;
}

export default function DailyscopeCaseStudy() {
  const [selectedArchLayer, setSelectedArchLayer] = useState("frontend");
  
  // Stats Counters
  const lighthouseScore = useCountUp(98);
  const cacheHitRatio = useCountUp(99);
  const revalTime = useCountUp(60); // 60s reval
  const loadTime = useCountUp(14); // 14ms

  // Simulator State
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Technology" | "Business" | "Science">("All");
  const [selectedLayout, setSelectedLayout] = useState<"Grid" | "List" | "Highlight">("Grid");
  const [simulatorLatency, setSimulatorLatency] = useState(8);
  const [simulatorMode, setSimulatorMode] = useState("SSG Pre-rendered");

  const [articles] = useState<Article[]>([
    { id: "1", title: "Autonomous AI Models See 30% Speed Increase at the Edge", category: "Technology", snippet: "New hardware accelerators enable complex language models to execute directly on consumer mobile devices with reduced power consumption.", time: "2 hours ago", readTime: "4 min read", image: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)" },
    { id: "2", title: "Global Technology Index Hits New Milestone Amid Chip Sales Boost", category: "Business", snippet: "Rising demand for semiconductor wafers drives indexes up. Analysts project a strong compound growth rate over the coming fiscal semesters.", time: "4 hours ago", readTime: "3 min read", image: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)" },
    { id: "3", title: "James Webb Telescope Discovers Atmospheric Gases on Rocky Exoplanet", category: "Science", snippet: "Astronomers verify trace elements of water vapor and carbon compounds, marking a breakthrough in cosmic biosignature investigations.", time: "1 day ago", readTime: "6 min read", image: "linear-gradient(135deg, #10B981 0%, #3B82F6 100%)" },
    { id: "4", title: "Next-Generation Solid State Batteries Enter Production Scale", category: "Technology", snippet: "Electric car manufacturers receive initial test modules promising double the current energy density thresholds and rapid recharge cycles.", time: "1 day ago", readTime: "5 min read", image: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)" },
  ]);

  // Adjust mock latency metrics when inputs change
  useEffect(() => {
    if (selectedCategory !== "All") {
      setSimulatorLatency(38);
      setSimulatorMode("Serverless Edge Call");
    } else {
      setSimulatorLatency(14);
      setSimulatorMode("ISR Cache Hit");
    }
  }, [selectedCategory]);

  const filteredArticles = articles.filter(
    (a) => selectedCategory === "All" || a.category === selectedCategory
  );

  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedArchLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="min-h-screen bg-[#05050B] text-white overflow-x-hidden selection:bg-purple-500/30">
      {/* Mesh background glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#05050B]/60 backdrop-blur-xl py-4 px-6 select-none transition-all duration-300">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#EC4899] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
              Daily-scope Case Study
            </span>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="px-6 pt-16 pb-20 relative">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/5 px-4 py-1.5 text-xs font-semibold text-pink-300 select-none">
              <Newspaper className="h-3.5 w-3.5 text-pink-400" />
              News & Media Portal
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Daily-scope – Dynamic <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400">
                News Dashboard
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-neutral-400 leading-relaxed">
              A high-performance news aggregation platform built using Next.js core architectures, featuring fast edge API handlers, and incremental page cache revalidation.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Lighthouse Performance", value: `${lighthouseScore}/100`, detail: "Optimized Core Web Vitals" },
              { label: "CDN Cache Hit", value: `${cacheHitRatio}%`, detail: "Vercel Edge distributions" },
              { label: "ISR Rebuild Limit", value: `${revalTime}s`, detail: "Background revalidation" },
              { label: "First Content Paint", value: `${loadTime}ms`, detail: "Sub-second static delivery" }
            ].map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={stat.label}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md relative overflow-hidden group hover:border-pink-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="block text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-pink-400 transition-colors">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {stat.label}
                </span>
                <span className="mt-2 block text-[10px] text-neutral-500 font-mono">
                  {stat.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Interface Gallery Showcase */}
      <section id="gallery" className="px-6 py-8 relative select-none">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto rounded-[24px] border border-white/10 bg-neutral-950/60 p-3 backdrop-blur-xl shadow-[0_20px_50px_rgba(236,72,153,0.15)] group"
          >
            <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-700 pointer-events-none" />
            
            <div className="relative rounded-[16px] overflow-hidden border border-white/5 bg-[#080810]">
              <div className="flex items-center gap-1.5 bg-[#0D0D18] px-4 py-3 border-b border-white/5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-neutral-500 ml-4">dailyscope-portal-preview.png</span>
              </div>
              <img
                src="/dailyscope.png"
                alt="Daily-scope News Dashboard Preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview / Challenges / Solution Grid */}
      <section className="px-6 py-12 border-t border-white/5 bg-white/[0.005]">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Overview */}
            <GlassCard hoverEffect={false} className="p-6">
              <div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/20 mb-4">
                <Briefcase className="h-5 w-5 text-pink-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Project Overview</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Daily-scope provides headline news delivery. It processes multiple external source articles, filters them into logical channels, and streams text templates to client displays with high efficiency.
              </p>
            </GlassCard>

            {/* Problem */}
            <GlassCard hoverEffect={false} className="p-6 border-red-500/10">
              <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Problem Statement</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Traditional dynamic news platforms trigger expensive database calls for every visitor, causing servers to freeze during breaking news traffic spikes. Setting simple static sites prevents instant editing updates.
              </p>
            </GlassCard>

            {/* Solution */}
            <GlassCard hoverEffect={false} className="p-6 border-emerald-500/10">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Solution Engineered</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Implemented Next.js Incremental Static Regeneration (ISR). The news articles are pre-rendered as fast, static HTML. In the background, the server re-evaluates indices every 60 seconds, updating the cache without delaying active users.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Interactive System Architecture Section */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">System Architecture & Orchestration</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Selector (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-base font-bold text-neutral-300 uppercase tracking-wider mb-2">
                Click a Layer to Trace Data Flow
              </h3>
              
              <div className="flex flex-col gap-3 select-none">
                {ARCHITECTURE_LAYERS.map((layer) => {
                  const isActive = selectedArchLayer === layer.id;
                  let gradientBorder = "border-white/5 hover:border-white/20";
                  let bgGlow = "bg-white/[0.01]";
                  let iconColor = "text-neutral-500";
                  let leftBorder = "border-l-4 border-l-transparent";

                  if (isActive) {
                    bgGlow = "bg-white/[0.03]";
                    iconColor = "text-pink-400";
                    if (layer.id === "frontend") {
                      gradientBorder = "border-pink-500/40";
                      leftBorder = "border-l-4 border-l-pink-500";
                    } else if (layer.id === "cache") {
                      gradientBorder = "border-purple-500/40";
                      leftBorder = "border-l-4 border-l-purple-500";
                    } else {
                      gradientBorder = "border-indigo-500/40";
                      leftBorder = "border-l-4 border-l-indigo-500";
                    }
                  }

                  return (
                    <button
                      key={layer.id}
                      onClick={() => setSelectedArchLayer(layer.id)}
                      className={`w-full text-left p-4 rounded-xl border ${gradientBorder} ${bgGlow} ${leftBorder} transition-all duration-300 flex items-center justify-between group`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors ${iconColor}`}>
                          {layer.id === "frontend" && <Layout className="h-5 w-5" />}
                          {layer.id === "api" && <Cpu className="h-5 w-5" />}
                          {layer.id === "cache" && <Database className="h-5 w-5" />}
                        </div>
                        <div>
                          <span className="block font-bold text-white text-sm tracking-wide group-hover:text-pink-300 transition-colors">
                            {layer.title}
                          </span>
                          <span className="text-xs text-neutral-400 font-mono">
                            {layer.tech}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-neutral-500 transition-transform group-hover:text-white ${isActive ? "translate-x-1 text-pink-400" : ""}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Code & Details display (Right 5 Cols) */}
            <div className="lg:col-span-5">
              <GlassCard hoverEffect={false} className="p-6 border-pink-500/10 bg-neutral-950/80 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-500 to-indigo-500" />
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-pink-400" />
                  Details Panel
                </h3>
                
                <p className="mt-4 text-xs text-neutral-300 leading-relaxed font-mono">
                  {selectedLayer.description}
                </p>

                <div className="mt-6 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-pink-400">
                    Key Features Demonstrated
                  </h4>
                  <ul className="space-y-2">
                    {selectedLayer.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic News Simulator */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl relative">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white">Dynamic News Simulator</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Toggle layout configurations and categories to simulate client hydrations and caching metrics on Vercel networks.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-[#07070F] shadow-2xl space-y-6">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 select-none">
              {/* Category buttons */}
              <div className="flex gap-2">
                {["All", "Technology", "Business", "Science"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as any)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                      selectedCategory === cat
                        ? "bg-pink-600 text-white"
                        : "text-neutral-400 hover:text-white bg-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Layout selectors */}
              <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-lg border border-white/5">
                {[
                  { value: "Grid", icon: Grid },
                  { value: "List", icon: List },
                ].map((lay) => (
                  <button
                    key={lay.value}
                    onClick={() => setSelectedLayout(lay.value as any)}
                    className={`p-1.5 rounded-md transition-colors ${
                      selectedLayout === lay.value ? "bg-pink-600 text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <lay.icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Cache State Header */}
            <div className="flex items-center justify-between text-xs text-neutral-400 select-none">
              <span className="flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                Next.js Render Mode: <strong className="text-white">{simulatorMode}</strong>
              </span>
              <span className="font-mono text-neutral-500">
                Delivery latency: <strong className="text-emerald-400 font-bold">{simulatorLatency}ms</strong>
              </span>
            </div>

            {/* Articles container */}
            <div className={selectedLayout === "Grid" ? "grid sm:grid-cols-2 gap-4" : "space-y-4"}>
              <AnimatePresence mode="popLayout">
                {filteredArticles.map((art) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    key={art.id}
                    className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-pink-500/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-pink-400">
                        <span>{art.category}</span>
                        <span className="text-neutral-500 font-mono font-normal">{art.time}</span>
                      </div>
                      <h4 className="font-bold text-white text-sm mt-1.5 leading-snug">{art.title}</h4>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{art.snippet}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4 text-[9px] text-neutral-500 font-mono select-none">
                      <span>{art.readTime}</span>
                      <span className="text-neutral-400 hover:text-white flex items-center gap-0.5 cursor-pointer">
                        Read full article <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenges */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-white">Engineering Solutions</h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-pink-500" />
          </div>

          <div className="space-y-6">
            <GlassCard hoverEffect={false} className="p-6 relative border-pink-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-pink-400" />
                Incremental Static Revalidation
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> Standard static builds (SSG) required a full project deployment build cycle whenever journalists published new updates. Using SSR instead led to high database latency and TTFB delays.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Configured incremental static regeneration on category paths. When articles update, Vercel routes visitors to cached static versions while calling internal API revalidations asynchronously to update local files. This secures fast load times under 15ms.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-6 relative border-pink-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-pink-400" />
                Cumulative Layout Shift (CLS) Optimization
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> Visual shift penalties occurred when third-party content layouts hydrated lazily on mobile displays.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Integrated strict wrapper containers with absolute placeholder ratios matching image dimensions. Applied transition skeletons using framer-motion, eliminating layout shifting issues and boosting our Lighthouse SEO rating.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
