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
  Gavel,
  Plus,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Briefcase,
  Layers,
  Award,
  ChevronRight,
  TrendingUp,
  DollarSign
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
    title: "Next.js Frontend Layer",
    tech: "Next.js, React, TypeScript, Tailwind CSS",
    description: "Highly performant web dashboard utilizing Server Components for listing retrieval and dynamic Client Components for real-time bids.",
    details: [
      "Optimized static listings with dynamic hydrations",
      "Seamless integration with live WebSockets",
      "Responsive administrator & bidder interfaces",
      "Tailwind-designed charts representing item interest analytics"
    ]
  },
  {
    id: "backend",
    title: "ASP.NET Core Web API",
    tech: "C#, ASP.NET Core, SignalR, Entity Framework Core",
    description: "High-throughput API gateway handling critical business logic, bidding sequences, and real-time state synchronization via WebSockets (SignalR).",
    details: [
      "Real-time SignalR bid synchronization hub",
      "Repository pattern with EF Core database abstractions",
      "Comprehensive request validators and validation filters",
      "Granular role authorization checking (Admin vs Customer)"
    ]
  },
  {
    id: "database",
    title: "SQL Server Engine",
    tech: "Microsoft SQL Server, T-SQL",
    description: "Relational database maintaining absolute integrity for records including bidders, listings, items, active bids, and transaction histories.",
    details: [
      "10+ normalized transactional tables",
      "Strict constraints preventing bid race conditions",
      "Optimized query plans for fetching high-volume listings",
      "Automated cleanup routines for closed auctions"
    ]
  }
];

interface BidRecord {
  id: string;
  bidder: string;
  amount: number;
  time: string;
}

export default function AuctionCaseStudy() {
  const [selectedArchLayer, setSelectedArchLayer] = useState("frontend");
  
  // Stats Counters
  const dbTablesCount = useCountUp(10);
  const apiEndpointsCount = useCountUp(15);
  const userCount = useCountUp(150);
  const latencyReduction = useCountUp(80);

  // Simulator State
  const [currentBid, setCurrentBid] = useState(450);
  const [bidAmountInput, setBidAmountInput] = useState("460");
  const [bids, setBids] = useState<BidRecord[]>([
    { id: "1", bidder: "David_R", amount: 450, time: "18:05:12" },
    { id: "2", bidder: "Sophia_M", amount: 430, time: "18:04:45" },
    { id: "3", bidder: "Alex_Tech", amount: 410, time: "18:02:11" },
  ]);
  const [timeLeft, setTimeLeft] = useState(42);
  const [bidError, setBidError] = useState("");
  const [bidSuccess, setBidSuccess] = useState(false);

  // Simulating countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 60; // reset to 60 for demonstration
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePlaceBid = (e: React.FormEvent) => {
    e.preventDefault();
    setBidError("");
    setBidSuccess(false);

    const bidVal = parseFloat(bidAmountInput);
    if (isNaN(bidVal)) {
      setBidError("Please enter a valid bid amount.");
      return;
    }

    if (bidVal <= currentBid) {
      setBidError(`Bid must be greater than the current high bid of $${currentBid}.`);
      return;
    }

    // Success
    const newBid: BidRecord = {
      id: Date.now().toString(),
      bidder: "You (Recruiter)",
      amount: bidVal,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    };

    setBids([newBid, ...bids]);
    setCurrentBid(bidVal);
    setBidAmountInput((bidVal + 10).toString());
    setBidSuccess(true);
    setTimeLeft((prev) => Math.min(prev + 15, 60)); // extend timer by 15s to simulate real bid extending
  };

  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedArchLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="min-h-screen bg-[#05050B] text-white overflow-x-hidden selection:bg-purple-500/30">
      {/* Mesh background glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />

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
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
              Auction System Case Study
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
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1.5 text-xs font-semibold text-purple-300 select-none">
              <Gavel className="h-3.5 w-3.5 text-purple-400" />
              Real-time Web Showcase
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Auction Management <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
                System
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-neutral-400 leading-relaxed">
              A comprehensive bidding platform built with Next.js and ASP.NET Core services, securing real-time bid synchronization, lifecycle status updates, and a responsive administration pipeline.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Database Tables", value: `${dbTablesCount}+`, detail: "Structured SQL Schema" },
              { label: "C# API Routes", value: `${apiEndpointsCount}+`, detail: "ASP.NET Core Controllers" },
              { label: "Concurrent Bidders", value: `${userCount}+`, detail: "Real-time updates" },
              { label: "State Sync Delay", value: `-${latencyReduction}%`, detail: "SignalR vs polling" }
            ].map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={stat.label}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md relative overflow-hidden group hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="block text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-purple-400 transition-colors">
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
      <section id="gallery" className="px-6 py-8 relative">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">System Screenshots</h2>
            <div className="mx-auto mt-2 h-0.5 w-10 bg-purple-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { path: "/AMS/Screenshot 2025-10-22 175051.png", desc: "User Bidding Interface" },
              { path: "/AMS/Screenshot 2025-10-22 172822.png", desc: "Admin Management Portal" },
              { path: "/AMS/Screenshot 2025-10-22 172133.png", desc: "Bidding Dashboard" },
              { path: "/AMS/Screenshot 2025-10-22 173004.png", desc: "Transaction Checkout" },
            ].map((img, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-[#090912] shadow-lg group"
              >
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={img.path}
                    alt={img.desc}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 bg-[#0D0D18]/90 border-t border-white/5">
                  <p className="text-[10px] text-neutral-400 font-mono text-center tracking-wide">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview / Challenges / Solution Grid */}
      <section className="px-6 py-12 border-t border-white/5 bg-white/[0.005]">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Overview */}
            <GlassCard hoverEffect={false} className="p-6">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-4">
                <Briefcase className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Project Overview</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                The Auction Management System connects eager buyers and sellers with an automated, live-bidding experience. Users can inspect detailed items, place real-time bids, track active countdowns, and verify successful acquisitions via automated status notifications.
              </p>
            </GlassCard>

            {/* Problem */}
            <GlassCard hoverEffect={false} className="p-6 border-red-500/10">
              <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Problem Statement</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Traditional auction sites fail when bids are delayed by HTTP polling lag, leading to lost transactions. Preventing concurrent race conditions—where two buyers submit bids at the same millisecond—demands heavy transactional boundaries that normally choke server throughput.
              </p>
            </GlassCard>

            {/* Solution */}
            <GlassCard hoverEffect={false} className="p-6 border-emerald-500/10">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Solution Engineered</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                A server using ASP.NET Core SignalR establishes WebSocket pipelines that broadcast incoming bids immediately. Entity Framework isolation levels and T-SQL database locking mechanisms ensure every bid is registered chronologically, maintaining absolute consistency under massive traffic.
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
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
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
                    iconColor = "text-purple-400";
                    if (layer.id === "frontend") {
                      gradientBorder = "border-purple-500/40";
                      leftBorder = "border-l-4 border-l-purple-500";
                    } else if (layer.id === "database") {
                      gradientBorder = "border-blue-500/40";
                      leftBorder = "border-l-4 border-l-blue-500";
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
                          {layer.id === "backend" && <Cpu className="h-5 w-5" />}
                          {layer.id === "database" && <Database className="h-5 w-5" />}
                        </div>
                        <div>
                          <span className="block font-bold text-white text-sm tracking-wide group-hover:text-purple-300 transition-colors">
                            {layer.title}
                          </span>
                          <span className="text-xs text-neutral-400 font-mono">
                            {layer.tech}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-neutral-500 transition-transform group-hover:text-white ${isActive ? "translate-x-1 text-purple-400" : ""}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Code & Details display (Right 5 Cols) */}
            <div className="lg:col-span-5">
              <GlassCard hoverEffect={false} className="p-6 border-purple-500/10 bg-neutral-950/80 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-indigo-500" />
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-purple-400" />
                  Details Panel
                </h3>
                
                <p className="mt-4 text-xs text-neutral-300 leading-relaxed font-mono">
                  {selectedLayer.description}
                </p>

                <div className="mt-6 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
                    Key Features Demonstrated
                  </h4>
                  <ul className="space-y-2">
                    {selectedLayer.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
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

      {/* Interactive live bidding simulator */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl relative">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white">Live Bidding Simulator</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Simulate high-throughput bidding transactions. Bid validation occurs on the server, enforcing higher values and updating WebSocket subscribers.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            {/* Bidder Card Preview (Left 7 Cols) */}
            <div className="md:col-span-7 flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl relative">
              <div className="absolute top-0 right-0 p-3 flex items-center gap-1.5 font-mono text-[10px] text-neutral-500 select-none">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SignalR Channel Active
              </div>

              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-purple-400">Featured Auction Item</span>
                <h3 className="mt-1 text-xl font-bold text-white">Vanguard Drone Model 3 (Autonomous)</h3>
                
                {/* Visual Representation of countdown */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                    <span className="block text-[10px] text-neutral-500 uppercase tracking-wider font-mono">Current Bid</span>
                    <span className="text-2xl font-extrabold text-white font-mono tracking-tight">${currentBid}</span>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="block text-[10px] text-neutral-500 uppercase tracking-wider font-mono">Time Remaining</span>
                      <span className={`text-2xl font-extrabold font-mono tracking-tight ${timeLeft <= 10 ? "text-rose-500 animate-pulse" : "text-white"}`}>
                        {timeLeft}s
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form to Bid */}
                <form onSubmit={handlePlaceBid} className="mt-6 space-y-3">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm font-semibold font-mono">$</span>
                      <input
                        type="number"
                        value={bidAmountInput}
                        onChange={(e) => setBidAmountInput(e.target.value)}
                        className="w-full bg-[#05050C] border border-white/10 hover:border-white/20 focus:border-purple-500 rounded-xl py-3 pl-7 pr-3 text-sm font-bold text-white font-mono outline-none transition-colors"
                        placeholder="Enter bid"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-5 rounded-xl bg-purple-600 hover:bg-purple-500 font-semibold text-xs uppercase tracking-wider text-white transition-all flex items-center gap-1.5 shadow-[0_4px_12px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_18px_rgba(124,58,237,0.5)] cursor-pointer"
                    >
                      <Gavel className="h-4 w-4" />
                      Bid
                    </button>
                  </div>
                  
                  {/* Validation Feedback */}
                  <AnimatePresence mode="popLayout">
                    {bidError && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 font-medium"
                      >
                        <AlertTriangle className="h-4 w-4" />
                        {bidError}
                      </motion.div>
                    )}
                    {bidSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Bid recorded! SignalR hub broadcasted update.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>

            {/* WebSocket log feeds (Right 5 Cols) */}
            <div className="md:col-span-5 flex flex-col p-5 rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl relative">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 border-b border-white/5 pb-3 mb-3 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-purple-400" />
                Live Bidding Feed (SignalR Broadcasts)
              </h4>

              <div className="flex-1 space-y-2.5 overflow-y-auto max-h-60 pr-1">
                {bids.map((b) => (
                  <div
                    key={b.id}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all duration-300 ${
                      b.bidder.startsWith("You")
                        ? "bg-purple-950/20 border-purple-500/30 text-purple-200"
                        : "bg-white/[0.01] border-white/5 text-neutral-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{b.bidder}</span>
                      <span className="text-[9px] text-neutral-500 font-mono">{b.time}</span>
                    </div>
                    <span className="font-mono font-bold">${b.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenges */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-white">Engineering Solutions</h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-purple-500" />
          </div>

          <div className="space-y-6">
            <GlassCard hoverEffect={false} className="p-6 relative border-purple-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                Race Conditions & Bid Sequencing
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> When hundreds of bidders try to lock high bids on closing seconds, network delays can list bids out of sequence or record multiple winners.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Implemented SQL Server transaction blocks with serializable isolation levels. The backend runs stored procedures validating that an incoming bid exceeds the record before accepting the insert. Bids are committed dynamically, preventing double-allocations.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-6 relative border-purple-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-purple-400" />
                Bid Lifecycle Automation
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> Transitions of status (Active, Ended, Completed) were initially handled by server triggers, clogging database threads.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Built a hosted background service (Worker Service) in ASP.NET Core that polls active auctions every second, resolves expired listings, calls invoice generating services, and sends push events to clients via SignalR automatically.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
