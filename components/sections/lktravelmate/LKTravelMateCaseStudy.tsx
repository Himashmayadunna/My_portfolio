"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Smartphone,
  Map,
  Compass,
  MessageSquare,
  Sparkles,
  CalendarDays,
  Target,
  Users,
  Search,
  UserCircle,
  Shield,
  Layers,
  Database,
  Cpu,
  Globe,
  Settings,
  Route,
  Navigation,
  Clock,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Zap,
  Activity,
  Server
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";

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

// Helper animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function LKTravelMateCaseStudy() {
  return (
    <div className="min-h-screen bg-[#050508] text-neutral-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden pb-32">
      {/* Background Ambience */}
      <div className="fixed top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-emerald-600/5 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/60 backdrop-blur-xl py-4 px-6 select-none transition-all duration-300">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
              LK TravelMate Case Study
            </span>
          </div>
        </div>
      </header>

      {/* 01 — Hero Section */}
      <section className="px-6 pt-24 pb-16 relative">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              <Sparkles className="w-3 h-3 inline-block mr-1" /> AI-powered mobile travel assistant
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6">
              LK TravelMate
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight text-neutral-200 mb-6">
              AI-powered travel companion for exploring Sri Lanka.
            </h2>
            <p className="text-xl md:text-2xl text-emerald-300/80 font-medium max-w-3xl mx-auto leading-relaxed italic mb-10">
              "Plan smarter. Explore deeper. Experience Sri Lanka your way."
            </p>
            
            {/* Metadata Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                <UserCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-neutral-300">Role: Software Engineer</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-neutral-300">Platform: Flutter Mobile App</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-neutral-300">Flutter · Firebase · Gemini AI · Google Maps</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-3.5 text-sm font-bold tracking-wider text-white hover:from-emerald-500 hover:to-blue-500 shadow-lg transition-all">
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-sm font-bold tracking-wider text-white hover:bg-white/10 transition-all">
                <Github className="w-4 h-4" />
                View GitHub
              </a>
            </div>

            {/* Visual Elements */}
            <div className="mt-16 relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(16,185,129,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050508] z-10" />
              {/* Using a solid gradient as a placeholder for the actual UI images */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-[#050508] to-blue-900/40 opacity-80" />
              {/* Abstract Map overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              
              {/* Mockup placeholders */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 md:w-1/2 h-[85%] bg-[#0A0A0F] border-t border-l border-r border-white/10 rounded-t-[40px] z-20 shadow-2xl flex flex-col items-center p-4">
                <div className="w-16 h-1.5 bg-white/20 rounded-full mt-2 mb-6" />
                <div className="w-full h-full border border-white/5 rounded-3xl bg-[#111116] overflow-hidden relative">
                   <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                     <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">LK</div>
                     <div className="w-8 h-8 rounded-full bg-white/5" />
                   </div>
                   <div className="absolute top-20 left-4 right-4 space-y-3">
                     <div className="h-24 w-full rounded-2xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20" />
                     <div className="h-32 w-full rounded-2xl bg-white/5" />
                     <div className="h-32 w-full rounded-2xl bg-white/5" />
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-5xl px-6 space-y-32">
        
        {/* 02 — Project Overview */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-emerald-500 text-sm font-mono opacity-60">02.</span>
            Project Overview
          </h2>
          <GlassCard className="p-8 md:p-10 border-white/5 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="prose prose-invert prose-lg text-neutral-300 max-w-none relative z-10">
              <p className="text-xl text-white/90 font-medium">
                LK TravelMate is an AI-powered mobile travel assistant created to make travelling in Sri Lanka easier, more personalized and more accessible.
              </p>
              <p className="mt-6 text-neutral-400">
                The application combines AI-powered recommendations, destination discovery, maps, navigation, translation and saved places into a single mobile experience. By leveraging the Gemini API and Google Maps, LK TravelMate focuses on solving common problems faced by travellers when planning trips, ensuring every user gets a personalized adventure rather than a generic itinerary.
              </p>
            </div>
          </GlassCard>
        </motion.section>

        {/* 03 — The Problem */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-rose-500 text-sm font-mono opacity-60">03.</span>
            The Problem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Layers, text: "Travel information is scattered across different platforms." },
              { icon: Target, text: "Travellers may struggle to choose destinations based on their budget." },
              { icon: Clock, text: "Planning an itinerary manually can be time-consuming." },
              { icon: MessageSquare, text: "Tourists may face language barriers when communicating locally." },
              { icon: Map, text: "Finding suitable routes requires switching between multiple applications." },
              { icon: Users, text: "Generic travel recommendations do not match user's interests or time." }
            ].map((problem, i) => (
              <GlassCard key={i} className="p-6 border-white/5 flex flex-col gap-4 group hover:border-rose-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-6 h-6" />
                </div>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  {problem.text}
                </p>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* 04 — The Solution */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-emerald-500 text-sm font-mono opacity-60">04.</span>
            The Solution
          </h2>
          <GlassCard className="p-8 md:p-10 border-white/5 bg-gradient-to-br from-emerald-900/10 to-transparent">
            <p className="text-lg text-neutral-300 mb-10 max-w-3xl">
              LK TravelMate addresses these problems by centralizing the travel experience. The application attempts to create a more personalized travel experience rather than providing generic destination lists.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-white/5 via-emerald-500/50 to-white/5 -translate-y-1/2 z-0" />
              
              {[
                { label: "User preferences" },
                { label: "AI analysis" },
                { label: "Personalized recs." },
                { label: "Travel itinerary" },
                { label: "Map navigation" },
                { label: "Language assistance" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center z-10">
                  <div className="w-4 h-4 rounded-full bg-[#050508] border-2 border-emerald-500 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                  <span className="text-xs md:text-sm font-medium text-neutral-400 text-center max-w-[100px]">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* 05 — Target Users */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-blue-500 text-sm font-mono opacity-60">05.</span>
            Target Users
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "International Tourists", desc: "Benefits from language translation, safe navigation, and localized recommendations they wouldn't find otherwise." },
              { title: "Local Travellers", desc: "Discovers hidden gems, weekend getaways, and efficiently plans trips within their familiar environment." },
              { title: "Backpackers", desc: "Leverages personalized AI recommendations to find adventure-heavy, off-the-beaten-path destinations." },
              { title: "Budget Travellers", desc: "Inputs strict budget constraints to receive tailored itineraries that maximize experiences without overspending." }
            ].map((persona, i) => (
              <GlassCard key={i} className="p-6 border-white/5 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <UserCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{persona.title}</h3>
                </div>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {persona.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* 06 — Core Features */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-purple-500 text-sm font-mono opacity-60">06.</span>
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "AI Travel Assistant", desc: "Provide budget, interests and days to receive personalized travel suggestions." },
              { icon: Target, title: "Personalized Recs.", desc: "Recommend destinations and activities based on user preferences." },
              { icon: CalendarDays, title: "Smart Travel Planning", desc: "Generate a suggested travel roadmap based on available days and interests." },
              { icon: Compass, title: "Explore Sri Lanka", desc: "Allow users to discover destinations and attractions across the island." },
              { icon: Map, title: "Google Maps Integration", desc: "Provide map-based destination discovery and turn-by-turn navigation." },
              { icon: MessageSquare, title: "Local Translator", desc: "Help travellers communicate and understand Sinhala/local language content." },
              { icon: CheckCircle2, title: "Save Places", desc: "Allow users to save interesting destinations for later exploration." },
              { icon: Shield, title: "Authentication", desc: "Provide secure user registration and login functionality." },
              { icon: UserCircle, title: "User Profile", desc: "Allow users to manage their account and saved travel information." },
              { icon: Sparkles, title: "AI Chat Assistant", desc: "Provide conversational assistance for complex travel-related questions." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-purple-500/20 transition-colors">
                <div className="mt-1 w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-400">
                  <feature.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1.5">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 07 — User Journey */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-amber-500 text-sm font-mono opacity-60">07.</span>
            User Journey
          </h2>
          
          <div className="space-y-12">
            <GlassCard className="p-8 border-white/5">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Route className="w-5 h-5 text-amber-500" />
                Main Discovery Flow
              </h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 font-mono text-xs md:text-sm text-neutral-300">
                {["Welcome", "Sign Up / In", "Home", "Travel Preferences", "AI Recs.", "Select Destination", "View Details", "Open Map", "Navigate", "Save Place"].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2 md:gap-4 mb-2 md:mb-0">
                    <span className="px-3 py-1.5 bg-white/5 rounded-md border border-white/10 whitespace-nowrap">{step}</span>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-amber-500/50" />}
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8 border-white/5">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                Translator Flow
              </h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 font-mono text-xs md:text-sm text-neutral-300">
                {["Translator Screen", "Enter/Speak phrase", "AI Translation", "Display Result"].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2 md:gap-4 mb-2 md:mb-0">
                    <span className="px-3 py-1.5 bg-white/5 rounded-md border border-white/10 whitespace-nowrap">{step}</span>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-emerald-500/50" />}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.section>

        {/* 08 — UI/UX Design */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-pink-500 text-sm font-mono opacity-60">08.</span>
            UI/UX Design
          </h2>
          <div className="prose prose-invert max-w-3xl mb-10 text-neutral-400">
            <p>
              The application interface prioritizes mobile-first design, clear information hierarchy, and visual destination discovery to minimize user friction. The design language is modern, clean, and intuitive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Welcome Screen", desc: "Sets an inviting tone with vibrant Sri Lankan imagery." },
              { title: "Sign In & Sign Up", desc: "Frictionless authentication using clean input fields." },
              { title: "Home Dashboard", desc: "Central hub providing easy access to all main features." },
              { title: "AI Recommendation", desc: "Interactive form to capture user preferences efficiently." },
              { title: "Explore Screen", desc: "Visually rich grid of destinations categorized by themes." },
              { title: "Destination Details", desc: "Comprehensive view of a place, highlighting key information." },
              { title: "Map Screen", desc: "Full-screen interactive map for spatial discovery." },
              { title: "Translator", desc: "Simple interface focused purely on input and translation output." },
              { title: "Saved Places & Profile", desc: "Clean lists and straightforward account management options." }
            ].map((screen, i) => (
              <GlassCard key={i} className="p-6 border-white/5 flex flex-col justify-between group">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">{screen.title}</h3>
                  <p className="text-neutral-400 text-sm">{screen.desc}</p>
                </div>
                {/* Placeholder for screen mockup */}
                <div className="mt-6 w-full h-32 rounded-lg bg-gradient-to-b from-white/5 to-transparent border border-white/5 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white/10" />
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* 09 — AI Recommendation Experience */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-emerald-500 text-sm font-mono opacity-60">09.</span>
            AI Recommendation Experience
          </h2>
          
          <GlassCard className="p-8 md:p-10 border-emerald-500/20 bg-emerald-950/10 relative overflow-hidden">
            <Sparkles className="absolute -top-10 -right-10 w-48 h-48 text-emerald-500/5 rotate-12" />
            
            <p className="text-neutral-300 mb-10 max-w-3xl relative z-10">
              The core value proposition of LK TravelMate is its ability to use AI to make recommendations more relevant to individual users. 
              <span className="block mt-2 text-sm text-neutral-500 italic">Note: The AI generates tailored suggestions, though it does not guarantee optimal real-time routes or live prices.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-4">
                  <UserCircle className="w-5 h-5" /> User Input
                </div>
                <div className="bg-[#050508]/50 p-4 rounded-xl border border-white/5 font-mono text-sm text-neutral-300 space-y-2">
                  <div>Budget: <span className="text-white">$500</span></div>
                  <div>Duration: <span className="text-white">5 days</span></div>
                  <div>Interests:
                    <ul className="list-disc list-inside ml-2 mt-1 text-white/80">
                      <li>Beaches</li>
                      <li>Hiking</li>
                      <li>Culture</li>
                      <li>Adventure</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex flex-col justify-center relative">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-4">
                  <Cpu className="w-5 h-5" /> AI Processing
                </div>
                <div className="space-y-2">
                  {["Analyze preferences", "Identify suitable destinations", "Prioritize destinations", "Generate itinerary", "Suggest activities"].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-neutral-400">
                      <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-400 font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" /> Output
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-transparent p-5 rounded-xl border border-blue-500/20 h-full flex items-center justify-center text-center">
                  <span className="font-bold text-white text-lg">
                    Personalized Sri Lankan travel plan.
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* 10 — Technical Architecture */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-blue-500 text-sm font-mono opacity-60">10.</span>
            Technical Architecture
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Diagram */}
            <GlassCard className="p-8 border-white/5 flex flex-col items-center justify-center gap-4 bg-[#0A0A0F]">
              <div className="w-full max-w-sm bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center font-bold text-blue-400">
                Flutter Mobile Application
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-600 rotate-90" />
              <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-4 text-center font-semibold text-neutral-300">
                Application / API Layer
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-600 rotate-90" />
              <div className="w-full max-w-sm grid grid-cols-2 gap-4">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center text-sm font-semibold text-emerald-400 flex flex-col items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Gemini API
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center text-sm font-semibold text-amber-400 flex flex-col items-center justify-center gap-2">
                  <Map className="w-5 h-5" />
                  Google Maps API
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-600 rotate-90" />
              <div className="w-full max-w-sm bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-center font-bold text-orange-400 flex items-center justify-center gap-2">
                <Database className="w-5 h-5" />
                Firebase (Auth & Data)
              </div>
            </GlassCard>

            {/* Explanations */}
            <div className="space-y-6">
              {[
                { title: "Flutter", text: "Used to build the cross-platform mobile application, ensuring a native-like experience on both iOS and Android." },
                { title: "Firebase", text: "Used for robust authentication and real-time application data management." },
                { title: "Gemini API", text: "Used for AI-powered travel recommendations, itinerary generation, and conversational assistance." },
                { title: "Google Maps API", text: "Used for maps, precise locations, and navigation-related functionality within the app." },
                { title: "REST APIs", text: "Used for communication between the mobile client and external application components." }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-white/10 pl-5 hover:border-blue-500 transition-colors">
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 11 — Development Process */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-indigo-500 text-sm font-mono opacity-60">11.</span>
            Development Process
          </h2>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-8 py-4">
            {[
              { num: "01", title: "Research", desc: "Understanding the travel domain and competitor analysis." },
              { num: "02", title: "Requirements", desc: "Defining features, scope, and API constraints." },
              { num: "03", title: "UI/UX Design", desc: "Wireframing and designing high-fidelity mobile screens." },
              { num: "04", title: "Flutter Development", desc: "Building the core UI and navigation structures." },
              { num: "05", title: "Firebase Integration", desc: "Setting up authentication and Firestore database schema." },
              { num: "06", title: "AI Integration", desc: "Connecting and prompting the Gemini API for recommendations." },
              { num: "07", title: "Google Maps Integration", desc: "Implementing maps and location-based discovery." },
              { num: "08", title: "Translation Integration", desc: "Adding local language support features." },
              { num: "09", title: "Testing", desc: "Debugging on physical devices and optimizing performance." },
              { num: "10", title: "Deployment", desc: "Finalizing the builds for distribution." }
            ].map((step, i) => (
              <div key={i} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-3.5 md:-left-3.5 top-1.5 w-7 h-7 rounded-full bg-[#050508] border-2 border-white/20 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                  <span className="text-[10px] font-bold text-neutral-400 group-hover:text-indigo-400">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{step.title}</h3>
                <p className="text-neutral-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 12 — Challenges & Solutions */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-rose-500 text-sm font-mono opacity-60">12.</span>
            Challenges & Solutions
          </h2>
          
          <div className="space-y-6">
            {[
              { title: "Personalized AI Recommendations", problem: "Generic AI responses may not always match a user's exact travel requirements.", solution: "Structured the user input around budget, duration, interests, and activities to create strict prompting rules before sending information to the AI service." },
              { title: "Maps Integration", problem: "Displaying destinations and supporting location-based travel required robust integration with mapping services.", solution: "Integrated Google Maps functionality directly into the Flutter app to provide native destination visualization and navigation features." },
              { title: "Language Barrier", problem: "International tourists may have difficulty communicating with locals.", solution: "Added a translation experience explicitly focused on local-language support and common travel phrases." },
              { title: "Mobile UX", problem: "Travel applications contain a lot of information that can easily overwhelm users on small screens.", solution: "Organized the application around a simple, linear journey: discover → plan → explore → navigate." },
              { title: "API Integration", problem: "The application depends heavily on multiple external services (Firebase, Gemini, Maps).", solution: "Separated API-related functionality into dedicated repositories/services and handled loading states, errors, and asynchronous responses carefully to ensure a smooth UI." }
            ].map((challenge, i) => (
              <GlassCard key={i} className="p-6 border-white/5 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500/50 to-orange-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-white mb-4 pl-4">Challenge 0{i+1} — {challenge.title}</h3>
                <div className="grid md:grid-cols-2 gap-4 pl-4">
                  <div className="bg-rose-500/5 rounded-lg p-4 border border-rose-500/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-2">Problem</span>
                    <p className="text-neutral-300 text-sm">{challenge.problem}</p>
                  </div>
                  <div className="bg-emerald-500/5 rounded-lg p-4 border border-emerald-500/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">Solution</span>
                    <p className="text-neutral-300 text-sm">{challenge.solution}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* 13 — Key Technical Decisions & 14 — What I Learned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <h2 className="text-2xl font-bold text-white mb-6">13. Key Technical Decisions</h2>
            <div className="space-y-6">
              {[
                { tech: "Flutter", reason: "Chosen for efficient cross-platform mobile development and a consistent UI rendering engine." },
                { tech: "Firebase", reason: "Chosen to simplify authentication, real-time database management, and rapid prototyping without maintaining a complex backend." },
                { tech: "Gemini API", reason: "Chosen to provide powerful AI conversational logic and structured recommendation capabilities with low latency." },
                { tech: "Google Maps", reason: "Chosen for industry-standard location visualization, routing, and deep integration with mobile platforms." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">{item.tech}</h3>
                  <p className="text-neutral-400 text-sm">{item.reason}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <h2 className="text-2xl font-bold text-white mb-6">14. What I Learned</h2>
            <GlassCard className="p-8 border-white/5 h-full flex flex-col">
              <ul className="space-y-4 text-neutral-300 text-sm md:text-base">
                {[
                  "Building a complete, production-ready mobile application with Flutter.",
                  "Integrating complex third-party APIs (Maps, Gemini).",
                  "Working closely with AI APIs and structuring prompts for reliable data extraction.",
                  "Designing AI-powered user experiences that don't feel intrusive.",
                  "Handling asynchronous API operations and network errors gracefully.",
                  "Integrating maps and location services natively.",
                  "Designing modern, mobile-first interfaces with high usability.",
                  "Managing authentication and user data securely via Firebase.",
                  "Debugging complex Flutter configuration, dependencies, and build issues.",
                  "Thinking about software architecture, state management, and scalability."
                ].map((learning, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{learning}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.section>
        </div>

        {/* 15 — Future Improvements */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-purple-500 text-sm font-mono opacity-60">15.</span>
            Future Improvements
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Real-time weather integration",
              "Hotel and accommodation recommendations",
              "Transport and ticket information",
              "Offline travel guides",
              "Voice-based AI travel assistant",
              "More advanced Sinhala language support",
              "Real-time location-aware recommendations",
              "Trip sharing",
              "Collaborative trip planning",
              "AI-powered budget tracking",
              "Personalized notifications",
              "Better itinerary optimization"
            ].map((improvement, i) => (
              <Badge key={i} className="bg-white/5 text-neutral-300 border-white/10 px-4 py-2 hover:bg-white/10 hover:text-white transition-colors">
                {improvement}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500 uppercase tracking-wider font-semibold">
            * These are planned enhancements, not currently implemented features.
          </p>
        </motion.section>

        {/* 16 — Project Outcome & 17 — Technologies */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GlassCard className="lg:col-span-2 p-10 border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 to-[#050508]">
              <h2 className="text-2xl font-bold text-white mb-6">16. Project Outcome</h2>
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-8 leading-tight">
                LK TravelMate combines <span className="text-emerald-400">AI</span> + <span className="text-blue-400">Travel Discovery</span> + <span className="text-purple-400">Maps</span> + <span className="text-amber-400">Navigation</span> + <span className="text-pink-400">Translation</span> + <span className="text-rose-400">Personalization</span> into one mobile travel experience.
              </div>
              <p className="text-neutral-400 mb-6">
                The project demonstrates practical, hands-on engineering experience in solving real-world problems.
              </p>
              <div className="flex flex-wrap gap-2 text-sm font-semibold">
                {["Mobile development", "API integration", "AI integration", "Firebase", "Maps", "UI/UX", "Software architecture", "Problem solving"].map((skill, i) => (
                  <span key={i} className="text-white/80 bg-white/5 rounded-md px-3 py-1">{skill}</span>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8 border-white/5 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-white mb-6">17. Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "Firebase", "Gemini API", "Google Maps API", "REST APIs", "Git", "GitHub"].map((tech, i) => (
                  <Badge key={i} className="bg-white/[0.03] text-neutral-300 border-white/10 px-3 py-1.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.section>

        {/* 18 — Final CTA */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
            Want to explore the project?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold tracking-wider text-white hover:bg-white/10 transition-all">
              <Github className="w-4 h-4" />
              View GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-4 text-sm font-bold tracking-wider text-white hover:from-emerald-500 hover:to-blue-500 shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all">
              <ExternalLink className="w-4 h-4" />
              View Demo
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-8 py-4 text-sm font-bold tracking-wider hover:bg-neutral-200 transition-all">
              Contact Me
            </a>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
