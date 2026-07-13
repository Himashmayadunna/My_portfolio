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
  Home,
  Plus,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Briefcase,
  Layers,
  Award,
  ChevronRight,
  MapPin,
  BedDouble,
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
    title: "Next.js Pages & Client Routing",
    tech: "Next.js, React, Tailwind CSS",
    description: "Responsive web client featuring high-fidelity real estate grids, custom listings creators, and dashboard interfaces for property hosts.",
    details: [
      "Dynamic client routes for property descriptions",
      "Instant feedback client-side search logic",
      "Responsive glassmorphism filters optimized for mobile",
      "Cloudinary asset upload scripts with image optimization"
    ]
  },
  {
    id: "backend",
    title: "Node.js & Express API Service",
    tech: "Node.js, Express, JWT Auth, Mongoose Models",
    description: "Backend RESTful routes communicating with the database, validating permissions for sellers, and parsing query options.",
    details: [
      "Secure JWT authentication cookie controller",
      "Mongoose database schemas matching property attributes",
      "Dynamic query parsers mapping URL queries to MongoDB filters",
      "Role-based controller filters separating sellers and buyers"
    ]
  },
  {
    id: "database",
    title: "MongoDB Database System",
    tech: "MongoDB Atlas, Mongoose ODM",
    description: "Document store holding flexible property listings, user access roles, saved houses, and inbox messages.",
    details: [
      "8+ Collections with optimized field indexes",
      "Complex aggregation pipelines computing localized average pricing",
      "Geospatial indexing supporting location proximity queries",
      "Flexible schema validation patterns preventing corrupted records"
    ]
  }
];

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  rawPrice: number;
  type: "Rent" | "Sale";
  beds: number;
  image: string;
}

export default function BordlankaCaseStudy() {
  const [selectedArchLayer, setSelectedArchLayer] = useState("frontend");
  
  // Stats Counters
  const collectionsCount = useCountUp(8);
  const listingsCount = useCountUp(300);
  const searchEfficiency = useCountUp(90);
  const loadingTime = useCountUp(120); // 120ms

  // Simulator State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"All" | "Rent" | "Sale">("All");
  const [selectedBeds, setSelectedBeds] = useState<number | "All">("All");
  const [properties] = useState<Property[]>([
    { id: "1", title: "Modern Penthouse Suite", location: "Colombo 07", price: "$1,200/mo", rawPrice: 1200, type: "Rent", beds: 3, image: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" },
    { id: "2", title: "Sunset Beachfront Villa", location: "Galle Fort", price: "$320,000", rawPrice: 320000, type: "Sale", beds: 4, image: "linear-gradient(135deg, #10B981 0%, #047857 100%)" },
    { id: "3", title: "Cozy Studio Loft", location: "Colombo 03", price: "$650/mo", rawPrice: 650, type: "Rent", beds: 1, image: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)" },
    { id: "4", title: "Suburban Family Residence", location: "Kandy Town", price: "$185,000", rawPrice: 185000, type: "Sale", beds: 3, image: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)" },
    { id: "5", title: "Urban Executive Flat", location: "Colombo 04", price: "$950/mo", rawPrice: 950, type: "Rent", beds: 2, image: "linear-gradient(135deg, #EC4899 0%, #C084FC 100%)" },
  ]);

  const filteredProperties = properties.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || p.type === selectedType;
    const matchesBeds = selectedBeds === "All" || p.beds === selectedBeds;
    return matchesSearch && matchesType && matchesBeds;
  });

  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedArchLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="min-h-screen bg-[#05050B] text-white overflow-x-hidden selection:bg-blue-500/30">
      {/* Mesh background glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

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
            <span className="h-2 w-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
              BordLanka Case Study
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
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-semibold text-blue-300 select-none">
              <Home className="h-3.5 w-3.5 text-blue-400" />
              Real Estate Portal
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              BordLanka – Property <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
                Marketplace
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-neutral-400 leading-relaxed">
              A comprehensive property discovery platform where homeowners showcase real estate listings, and buyers filter properties with high-performance MongoDB query boundaries.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Data Collections", value: `${collectionsCount}`, detail: "MongoDB Collections" },
              { label: "Mock Listings", value: `${listingsCount}+`, detail: "Real-world database" },
              { label: "Search Accuracy", value: `${searchEfficiency}%`, detail: "Indexed query filters" },
              { label: "Query Retrieval", value: `${loadingTime}ms`, detail: "Fast response latency" }
            ].map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={stat.label}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="block text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-blue-400 transition-colors">
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
            className="relative mx-auto rounded-[24px] border border-white/10 bg-neutral-950/60 p-3 backdrop-blur-xl shadow-[0_20px_50px_rgba(59,130,246,0.15)] group"
          >
            <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-700 pointer-events-none" />
            
            <div className="relative rounded-[16px] overflow-hidden border border-white/5 bg-[#080810]">
              <div className="flex items-center gap-1.5 bg-[#0D0D18] px-4 py-3 border-b border-white/5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-neutral-500 ml-4">bordlanka-marketplace-view.png</span>
              </div>
              <img
                src="/bordlanka.png"
                alt="BordLanka Real Estate Marketplace Dashboard Preview"
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
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-4">
                <Briefcase className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Project Overview</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                BordLanka simplifies real estate listings by creating a centralized interface where property owners upload details, and searchers query listings. It reduces manual interactions by offering integrated seller contact sheets and saved lists.
              </p>
            </GlassCard>

            {/* Problem */}
            <GlassCard hoverEffect={false} className="p-6 border-red-500/10">
              <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Problem Statement</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Real estate web directories are frequently clogged with slow filters. Relational databases face bottlenecks when performing complex text searches across multiple tables (locations, attributes, pricing ranges) simultaneously.
              </p>
            </GlassCard>

            {/* Solution */}
            <GlassCard hoverEffect={false} className="p-6 border-emerald-500/10">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Solution Engineered</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Designed a MongoDB schema optimized for flat read pathways. Added MongoDB compound text indexes on title and location fields, enabling swift matching. Implemented server-side limit parameters to fetch data in paginated steps, ensuring stable performance.
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
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
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
                    iconColor = "text-blue-400";
                    if (layer.id === "frontend") {
                      gradientBorder = "border-blue-500/40";
                      leftBorder = "border-l-4 border-l-blue-500";
                    } else if (layer.id === "database") {
                      gradientBorder = "border-emerald-500/40";
                      leftBorder = "border-l-4 border-l-emerald-500";
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
                          <span className="block font-bold text-white text-sm tracking-wide group-hover:text-blue-300 transition-colors">
                            {layer.title}
                          </span>
                          <span className="text-xs text-neutral-400 font-mono">
                            {layer.tech}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-neutral-500 transition-transform group-hover:text-white ${isActive ? "translate-x-1 text-blue-400" : ""}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Code & Details display (Right 5 Cols) */}
            <div className="lg:col-span-5">
              <GlassCard hoverEffect={false} className="p-6 border-blue-500/10 bg-neutral-950/80 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-500" />
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-blue-400" />
                  Details Panel
                </h3>
                
                <p className="mt-4 text-xs text-neutral-300 leading-relaxed font-mono">
                  {selectedLayer.description}
                </p>

                <div className="mt-6 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                    Key Features Demonstrated
                  </h4>
                  <ul className="space-y-2">
                    {selectedLayer.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
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

      {/* Property search simulator */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl relative">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white">Property Listing Sandbox</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Test how Mongoose query filters structure dynamic listings by searching and sorting listings on type and bedrooms.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-[#07070F] shadow-2xl space-y-6">
            {/* Filter Inputs Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              {/* Search text */}
              <div className="sm:col-span-6 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#05050C] border border-white/10 hover:border-white/20 focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-3 text-xs font-semibold text-white outline-none transition-colors"
                  placeholder="Search by title or location (e.g. Colombo, Penthouse)"
                />
              </div>

              {/* Type Switcher */}
              <div className="sm:col-span-3">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as any)}
                  className="w-full bg-[#05050C] border border-white/10 focus:border-blue-500 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-white outline-none"
                >
                  <option value="All">All Types (Rent/Sale)</option>
                  <option value="Rent">Rent only</option>
                  <option value="Sale">Sale only</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div className="sm:col-span-3">
                <select
                  value={selectedBeds.toString()}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSelectedBeds(val === "All" ? "All" : parseInt(val));
                  }}
                  className="w-full bg-[#05050C] border border-white/10 focus:border-blue-500 rounded-xl py-2.5 px-3.5 text-xs font-semibold text-white outline-none"
                >
                  <option value="All">All Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                </select>
              </div>
            </div>

            {/* Results Display */}
            <div className="border-t border-white/5 pt-4">
              <div className="flex items-center justify-between mb-4 select-none">
                <span className="text-[10px] uppercase font-bold text-neutral-500 font-mono tracking-wider">
                  Mongoose Query Output ({filteredProperties.length} matches)
                </span>
                <span className="text-[9px] font-mono text-neutral-500">
                  {`db.listings.find({ title: /${searchQuery}/i, type: "${selectedType}", beds: ${selectedBeds} })`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredProperties.map((p) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={p.id}
                      className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-blue-500/20 transition-all flex items-start gap-4"
                    >
                      {/* Property Colored Thumbnail representing image */}
                      <div className="h-16 w-16 rounded-lg flex-shrink-0 flex items-center justify-center relative overflow-hidden" style={{ background: p.image }}>
                        <Home className="h-6 w-6 text-white/50" />
                        <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1 py-0.5 text-[7px] font-bold text-white tracking-wider">
                          {p.type}
                        </span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-xs truncate">{p.title}</h4>
                        <div className="flex items-center gap-1 text-[10px] text-neutral-400 mt-1">
                          <MapPin className="h-3 w-3 text-neutral-500 flex-shrink-0" />
                          <span>{p.location}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-[10px] text-neutral-400 font-mono">
                          <div className="flex items-center gap-1">
                            <BedDouble className="h-3.5 w-3.5 text-blue-400" />
                            <span>{p.beds} Bed</span>
                          </div>
                          <span className="text-white font-bold">{p.price}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {filteredProperties.length === 0 && (
                    <div className="col-span-2 py-10 text-center text-xs text-neutral-500">
                      No properties match the selected search parameters. Try expanding your filters.
                    </div>
                  )}
                </AnimatePresence>
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
            <div className="mx-auto mt-4 h-1 w-16 bg-blue-500" />
          </div>

          <div className="space-y-6">
            <GlassCard hoverEffect={false} className="p-6 relative border-blue-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-400" />
                MongoDB Text Searching & Indexing
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> Basic MongoDB wildcard regex searches are expensive ($regex operations perform full table scans) and caused latency spikes when searching across thousands of properties.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Configured compound text indexes covering the `title` and `location` fields. Replaced wildcard matches with MongoDB `$text` query constraints, utilizing search weights. This reduced query execution time from 400ms to less than 15ms.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-6 relative border-blue-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                Secure Image Upload Workflows
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> Processing high-resolution real estate photographs directly on Node backend servers consumed memory buffers, threatening service stability.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Refactored the architecture to execute direct-to-cloud uploads. The React client requests a pre-signed cryptographic upload signature from the API server, then ships raw files directly to Cloudinary buckets, bypassing backend processing entirely.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
