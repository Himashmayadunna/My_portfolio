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
  Server,
  Plus,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Briefcase,
  Layers,
  Award,
  ChevronRight,
  Activity,
  Terminal,
  RefreshCw
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
    id: "gateway",
    title: "Express.js API Gateway Layer",
    tech: "Node.js, Express, HTTP-Proxy-Middleware",
    description: "Serves as the entry boundary routing incoming HTTP requests to target downstream microservices dynamically.",
    details: [
      "Dynamic path proxies mapping routes to service configurations",
      "Centralized CORS handles routing client security preflights",
      "Unified JSON error controllers formatting backend stack traces",
      "SSL termination and certificate validation configurations"
    ]
  },
  {
    id: "security",
    title: "Rate Limiting & Auth Service",
    tech: "Redis, JWT Middleware, Token Bucket algorithms",
    description: "Handles consumer authorizations, decrypts JWT tokens, and limits request rates via high-speed memory capacities.",
    details: [
      "Token-Bucket rate-limiting preventing API DDoS incidents",
      "JWT authorization headers decryption and verification checks",
      "Fast client identity mappings stored in memory profiles",
      "Origin IP whitelists and blocklists filters gates"
    ]
  },
  {
    id: "database",
    title: "Data Cache & Database Engine",
    tech: "Redis Cache Store, PostgreSQL Database",
    description: "Saves high-frequency lookup data to RAM to bypass disk operations and maintains system credentials in persistent tables.",
    details: [
      "Redis memory caches achieving sub-15ms lookup speeds",
      "Stale key evictions (TTL) automatically syncing database changes",
      "PostgreSQL tables storing client application profiles",
      "Connection pooling structures optimizing driver throughput"
    ]
  }
];

interface LogEntry {
  id: string;
  method: string;
  path: string;
  status: number;
  latency: number;
  type: "HIT" | "MISS" | "LIMIT";
  time: string;
}

export default function ApiGatewayCaseStudy() {
  const [selectedArchLayer, setSelectedArchLayer] = useState("gateway");
  
  // Stats Counters
  const cacheLatency = useCountUp(75); // 75% faster
  const requestsLimit = useCountUp(10); // 10 req limit
  const rateLimitCount = useCountUp(429); // status 429
  const databaseUptime = useCountUp(99); // 99.9% uptime

  // Simulator State
  const [selectedEndpoint, setSelectedEndpoint] = useState("GET /api/v1/users");
  const [tokenCapacity, setTokenCapacity] = useState(10);
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: "1", method: "GET", path: "/api/v1/users", status: 200, latency: 320, type: "MISS", time: "19:02:15" },
  ]);
  const [isCached, setIsCached] = useState(false);

  // Slow token bucket leak simulation
  useEffect(() => {
    const leak = setInterval(() => {
      setTokenCapacity((prev) => Math.min(prev + 1, 10));
    }, 3000);
    return () => clearInterval(leak);
  }, []);

  const handleSendRequest = () => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    
    // 1. Check Rate Limit
    if (tokenCapacity <= 0) {
      const newLog: LogEntry = {
        id: Date.now().toString(),
        method: selectedEndpoint.split(" ")[0],
        path: selectedEndpoint.split(" ")[1],
        status: 429,
        latency: 2,
        type: "LIMIT",
        time: timeStr,
      };
      setLogs([newLog, ...logs]);
      return;
    }

    // 2. Consume Token
    setTokenCapacity((prev) => Math.max(prev - 1, 0));

    // 3. Evaluate latency and cache
    let latency = 0;
    let type: "HIT" | "MISS" = "MISS";
    
    if (selectedEndpoint === "GET /api/v1/users") {
      if (isCached) {
        latency = 12;
        type = "HIT";
      } else {
        latency = 320;
        type = "MISS";
        setIsCached(true); // subsequent calls get cached
      }
    } else {
      // POST calls never cache
      latency = 280;
      type = "MISS";
    }

    const newLog: LogEntry = {
      id: Date.now().toString(),
      method: selectedEndpoint.split(" ")[0],
      path: selectedEndpoint.split(" ")[1],
      status: selectedEndpoint.startsWith("GET") ? 200 : 201,
      latency,
      type,
      time: timeStr,
    };
    setLogs([newLog, ...logs]);
  };

  const handleClearCache = () => {
    setIsCached(false);
  };

  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedArchLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="min-h-screen bg-[#05050B] text-white overflow-x-hidden selection:bg-purple-500/30">
      {/* Mesh background glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
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
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
              API Gateway Case Study
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
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-semibold text-indigo-300 select-none">
              <Server className="h-3.5 w-3.5 text-indigo-400" />
              Backend Gateway Infrastructure
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Microservices <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-blue-400">
                API Gateway
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-neutral-400 leading-relaxed">
              A high-performance backend API gateway proxying downstream requests, performing high-speed memory caching, and throttling traffic with rate-limiting algorithms.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Redis Caching Boost", value: `-${cacheLatency}%`, detail: "Sub-15ms response latency" },
              { label: "Rate Limiting Window", value: `${requestsLimit}/sec`, detail: "Token Bucket threshold" },
              { label: "DDoS Deflected Logs", value: `${rateLimitCount}`, detail: "Throttled requests recorded" },
              { label: "Overall System Uptime", value: `${databaseUptime}.9%`, detail: "Postgres connection pools" }
            ].map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={stat.label}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="block text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-indigo-400 transition-colors">
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
            className="relative mx-auto rounded-[24px] border border-white/10 bg-neutral-950/60 p-3 backdrop-blur-xl shadow-[0_20px_50px_rgba(99,102,241,0.15)] group"
          >
            <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-700 pointer-events-none" />
            
            <div className="relative rounded-[16px] overflow-hidden border border-white/5 bg-[#080810]">
              <div className="flex items-center gap-1.5 bg-[#0D0D18] px-4 py-3 border-b border-white/5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-neutral-500 ml-4">apigateway-network-monitor.png</span>
              </div>
              <img
                src="/api-gateway.png"
                alt="Microservices API Gateway Analytics Dashboard Preview"
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
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-4">
                <Briefcase className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Project Overview</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                The microservices API Gateway coordinates routing behaviors across independent backend nodes. It handles CORS configs, decrypts authorization keys, checks rate limits, and caches requests to minimize core CPU cycles.
              </p>
            </GlassCard>

            {/* Problem */}
            <GlassCard hoverEffect={false} className="p-6 border-red-500/10">
              <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Problem Statement</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                As applications scale, each microservice must repeat authorization checks and rate-limiting gates. This redundancy increases service latency, duplicates codebase requirements, and leaves downstream services vulnerable.
              </p>
            </GlassCard>

            {/* Solution */}
            <GlassCard hoverEffect={false} className="p-6 border-emerald-500/10">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Solution Engineered</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Created a unified Node.js API Gateway. Configured high-performance Redis cache middlewares reducing repetitive downstream database reads by 75%, and created a token bucket rate-limiter in memory to throttle requests.
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
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
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
                    iconColor = "text-indigo-400";
                    if (layer.id === "gateway") {
                      gradientBorder = "border-indigo-500/40";
                      leftBorder = "border-l-4 border-l-indigo-500";
                    } else if (layer.id === "database") {
                      gradientBorder = "border-emerald-500/40";
                      leftBorder = "border-l-4 border-l-emerald-500";
                    } else {
                      gradientBorder = "border-blue-500/40";
                      leftBorder = "border-l-4 border-l-blue-500";
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
                          {layer.id === "gateway" && <Server className="h-5 w-5" />}
                          {layer.id === "security" && <ShieldCheck className="h-5 w-5" />}
                          {layer.id === "database" && <Database className="h-5 w-5" />}
                        </div>
                        <div>
                          <span className="block font-bold text-white text-sm tracking-wide group-hover:text-indigo-300 transition-colors">
                            {layer.title}
                          </span>
                          <span className="text-xs text-neutral-400 font-mono">
                            {layer.tech}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-neutral-500 transition-transform group-hover:text-white ${isActive ? "translate-x-1 text-indigo-400" : ""}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Code & Details display (Right 5 Cols) */}
            <div className="lg:col-span-5">
              <GlassCard hoverEffect={false} className="p-6 border-indigo-500/10 bg-neutral-950/80 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-indigo-500" />
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-indigo-400" />
                  Details Panel
                </h3>
                
                <p className="mt-4 text-xs text-neutral-300 leading-relaxed font-mono">
                  {selectedLayer.description}
                </p>

                <div className="mt-6 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                    Key Features Demonstrated
                  </h4>
                  <ul className="space-y-2">
                    {selectedLayer.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
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

      {/* Network Traffic Simulator */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl relative">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white">Network Traffic Simulator</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Trigger request methods to observe latency changes between database fetches (cache misses) and RAM queries (cache hits), and see rate-limit throttling in action.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            {/* Controller Panel (Left 5 Cols) */}
            <div className="md:col-span-5 p-6 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-400">Traffic Controller</span>
                <h3 className="mt-1 text-xl font-bold text-white">Send Test Requests</h3>

                <div className="mt-6 space-y-4 select-none">
                  {/* Select Endpoint */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">Select Request Target</label>
                    <div className="space-y-2">
                      {[
                        { label: "GET /api/v1/users", desc: "Cacheable read route" },
                        { label: "POST /api/v1/orders", desc: "Write route (no cache)" },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={() => setSelectedEndpoint(item.label)}
                          className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors flex justify-between items-center ${
                            selectedEndpoint === item.label
                              ? "bg-indigo-950/20 border-indigo-500 text-white"
                              : "bg-white/[0.01] border-white/5 text-neutral-400 hover:text-white"
                          }`}
                        >
                          <div>
                            <span className="font-semibold block">{item.label}</span>
                            <span className="text-[9px] text-neutral-500 font-normal">{item.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Token counter representation */}
                  <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                    <div className="flex justify-between text-[9px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      <span>Rate Limiter capacity</span>
                      <span>{tokenCapacity}/10 tokens</span>
                    </div>
                    {/* Visual bar */}
                    <div className="h-2 w-full bg-[#05050C] rounded-full overflow-hidden border border-white/5 relative">
                      <div
                        className="h-full bg-indigo-500 transition-all duration-300"
                        style={{ width: `${tokenCapacity * 10}%` }}
                      />
                    </div>
                    <span className="block text-[8.5px] text-neutral-500 font-mono mt-1.5">
                      Tokens leak and regenerate by 1 key every 3 seconds.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleSendRequest}
                  className="flex-1 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-bold text-xs uppercase tracking-wider text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(99,102,241,0.3)]"
                >
                  <Activity className="h-4 w-4" />
                  Fire Request
                </button>
                <button
                  onClick={handleClearCache}
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                  title="Flush Redis Cache"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Gateway logs output panel (Right 7 Cols) */}
            <div className="md:col-span-7 flex flex-col p-5 rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl relative">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 border-b border-white/5 pb-3 mb-3 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-indigo-400" />
                Gateway Output (Tail -f logs)
              </h4>

              <div className="flex-1 space-y-2.5 overflow-y-auto max-h-80 font-mono text-[10px] pr-1">
                {logs.map((l) => {
                  let badgeColor = "bg-rose-500/10 text-rose-300 border-rose-500/20";
                  let message = "";
                  
                  if (l.type === "HIT") {
                    badgeColor = "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
                    message = "Cache HIT (served from RAM)";
                  } else if (l.type === "MISS") {
                    badgeColor = "bg-amber-500/10 text-amber-300 border-amber-500/20";
                    message = "Cache MISS (fetched from database)";
                  } else if (l.type === "LIMIT") {
                    badgeColor = "bg-red-500/10 text-red-300 border-red-500/20";
                    message = "Rate Limited (Token Bucket Throttled)";
                  }

                  return (
                    <div
                      key={l.id}
                      className="p-2.5 rounded-lg border border-white/5 bg-[#05050C]/90 text-neutral-300 space-y-1.5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold border ${badgeColor}`}>
                            {l.type}
                          </span>
                          <span className="font-bold text-white">{l.method} {l.path}</span>
                        </div>
                        <span className="text-neutral-500 text-[8.5px]">{l.time}</span>
                      </div>
                      <div className="flex justify-between items-center text-[9px] text-neutral-400 border-t border-white/5 pt-1.5">
                        <span>Status: <strong className={l.status >= 400 ? "text-rose-500" : "text-emerald-400"}>{l.status}</strong></span>
                        <span>Latency: <strong className="text-white">{l.latency}ms</strong></span>
                      </div>
                      <div className="text-[8.5px] text-neutral-500 italic leading-normal">
                        Info: {message}
                      </div>
                    </div>
                  );
                })}
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
            <div className="mx-auto mt-4 h-1 w-16 bg-indigo-500" />
          </div>

          <div className="space-y-6">
            <GlassCard hoverEffect={false} className="p-6 relative border-indigo-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-indigo-400" />
                DoS Deflection via Token-Bucket Throttling
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> Public endpoints (e.g. GET articles or auth checks) can be targets of massive script queries, increasing PostgreSQL connection limits and taking down services.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Engineered a Token Bucket rate-limiter middleware. User IP tokens are stored in high-speed Redis keys, decrementing values on queries. When capacity falls below limits, requests are returned directly with HTTP status 429 in under 2ms, saving core computing power.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-6 relative border-indigo-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Database className="h-5 w-5 text-indigo-400" />
                Redis Cache Evictions & Parity
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> Keeping queries cached forever causes database parity logs—for example, if users update record titles, other guests continue reading stale cached details.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Configured a Stale-While-Revalidate TTL strategy in memory keys. Furthermore, database write endpoints automatically dispatch eviction requests, removing keys in memory whenever a POST, PUT, or DELETE request completes successfully, keeping caches accurate.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
