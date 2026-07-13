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
  Car,
  Plus,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Briefcase,
  Layers,
  Award,
  ChevronRight,
  Smartphone,
  Calendar,
  Sparkles
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
    title: "Flutter Application UI",
    tech: "Flutter, Dart, Provider / BLoC State Patterns",
    description: "Multiplatform compilation for iOS and Android. Reusable component layouts utilizing strict pixel layouts and native widgets.",
    details: [
      "Custom responsive theme files maintaining accessibility guidelines",
      "Provider state boundaries updating listing items instantly",
      "Native calendar picker packages handling booking date matrices",
      "Smooth micro-interactions rendering asset loading sequences"
    ]
  },
  {
    id: "api",
    title: "Firebase Auth & REST Bridges",
    tech: "Firebase Auth SDK, Google Services",
    description: "Middleware authenticating device users, managing session storage, and securing API paths with bearer validations.",
    details: [
      "Phone and Email secure verification patterns",
      "Automatic login recovery using cached device credentials",
      "JWT parsing bridging Flutter clients to custom API routes",
      "Dynamic device push notifications configured with FCM"
    ]
  },
  {
    id: "database",
    title: "Cloud Firestore Store",
    tech: "Firebase Firestore Database",
    description: "Flexible document store tracking booking items, users metadata, and vehicle reservation schedules.",
    details: [
      "Real-time snapshot streams updating vehicle availability indicators",
      "Security rules limiting write operations to authenticated owners",
      "Compound collection queries fetching host vehicles matching dates",
      "Automated cloud functions cleaning expired reservations"
    ]
  }
];

interface Vehicle {
  id: string;
  name: string;
  pricePerDay: number;
  type: string;
  fuel: string;
}

export default function CarRentCaseStudy() {
  const [selectedArchLayer, setSelectedArchLayer] = useState("frontend");
  
  // Stats Counters
  const screenCount = useCountUp(12);
  const usersCount = useCountUp(80);
  const databaseWrites = useCountUp(99);
  const syncSpeed = useCountUp(150); // 150ms

  // Simulator State
  const [selectedCar, setSelectedCar] = useState<string>("1");
  const [bookingDays, setBookingDays] = useState<number>(3);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [bookingCode, setBookingCode] = useState<string>("");

  const vehicles: Vehicle[] = [
    { id: "1", name: "Tesla Model S Plaid", pricePerDay: 120, type: "Electric", fuel: "100% Charge" },
    { id: "2", name: "Porsche 911 GT3", pricePerDay: 220, type: "Sports", fuel: "Petrol" },
    { id: "3", name: "BMW iX M60", pricePerDay: 150, type: "SUV Electric", fuel: "90% Charge" },
  ];

  const currentCarObj = vehicles.find((v) => v.id === selectedCar) || vehicles[0];
  const subtotal = currentCarObj.pricePerDay * bookingDays;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  const handleBookCar = () => {
    const code = "RES-" + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(code);
    setBookingSuccess(true);
  };

  const handleResetBooking = () => {
    setBookingSuccess(false);
    setBookingCode("");
    setBookingDays(3);
  };

  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedArchLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="min-h-screen bg-[#05050B] text-white overflow-x-hidden selection:bg-purple-500/30">
      {/* Mesh background glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
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
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
              Car Renting Case Study
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
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-semibold text-emerald-300 select-none">
              <Car className="h-3.5 w-3.5 text-emerald-400" />
              Flutter Mobile Application
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Car Renting <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                Reservation App
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-neutral-400 leading-relaxed">
              A premium mobile booking application engineered with Flutter and Dart, supporting real-time database lookups, secure verification steps, and automated reservation management.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Application Screens", value: `${screenCount}+`, detail: "Designed in Flutter" },
              { label: "Firebase Accounts", value: `${usersCount}+`, detail: "Secure credentials store" },
              { label: "Database Consistency", value: `${databaseWrites}%`, detail: "Cloud security checks" },
              { label: "Database State Sync", value: `<${syncSpeed}ms`, detail: "Real-time query listeners" }
            ].map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={stat.label}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <span className="block text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
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
            className="relative mx-auto rounded-[24px] border border-white/10 bg-neutral-950/60 p-3 backdrop-blur-xl shadow-[0_20px_50px_rgba(16,185,129,0.15)] group max-w-2xl"
          >
            <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-700 pointer-events-none" />
            
            <div className="relative rounded-[16px] overflow-hidden border border-white/5 bg-[#080810]">
              <div className="flex items-center gap-1.5 bg-[#0D0D18] px-4 py-3 border-b border-white/5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-neutral-500 ml-4">carrent-flutter-mobile.png</span>
              </div>
              <img
                src="/carrent.png"
                alt="Car Renting Flutter Mobile UI Preview"
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
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                <Briefcase className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Project Overview</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                The Car Renting mobile application enables users to select premium vehicles, calculate multi-day rental reservations, and manage their reservations within an all-in-one Flutter mobile workspace.
              </p>
            </GlassCard>

            {/* Problem */}
            <GlassCard hoverEffect={false} className="p-6 border-red-500/10">
              <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Problem Statement</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Ensuring smooth operations when multiple clients attempt to reserve the same vehicle on overlapping schedules. Without solid locking boundaries, mobile databases easily accept duplicate transactions.
              </p>
            </GlassCard>

            {/* Solution */}
            <GlassCard hoverEffect={false} className="p-6 border-emerald-500/10">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Solution Engineered</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Structured Firestore rules verifying listing availability conditions before writes. Configured real-time query listeners updating mobile state values dynamically, informing other users of bookings instantly.
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
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
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
                    iconColor = "text-emerald-400";
                    if (layer.id === "frontend") {
                      gradientBorder = "border-emerald-500/40";
                      leftBorder = "border-l-4 border-l-emerald-500";
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
                          {layer.id === "frontend" && <Smartphone className="h-5 w-5" />}
                          {layer.id === "api" && <Cpu className="h-5 w-5" />}
                          {layer.id === "database" && <Database className="h-5 w-5" />}
                        </div>
                        <div>
                          <span className="block font-bold text-white text-sm tracking-wide group-hover:text-emerald-300 transition-colors">
                            {layer.title}
                          </span>
                          <span className="text-xs text-neutral-400 font-mono">
                            {layer.tech}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-neutral-500 transition-transform group-hover:text-white ${isActive ? "translate-x-1 text-emerald-400" : ""}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Code & Details display (Right 5 Cols) */}
            <div className="lg:col-span-5">
              <GlassCard hoverEffect={false} className="p-6 border-emerald-500/10 bg-neutral-950/80 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-indigo-500" />
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-emerald-400" />
                  Details Panel
                </h3>
                
                <p className="mt-4 text-xs text-neutral-300 leading-relaxed font-mono">
                  {selectedLayer.description}
                </p>

                <div className="mt-6 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Key Features Demonstrated
                  </h4>
                  <ul className="space-y-2">
                    {selectedLayer.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
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

      {/* Booking Mobile Simulator */}
      <section className="px-6 py-20 border-t border-white/5 relative">
        <div className="mx-auto max-w-4xl relative">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white">Mobile Booking Emulator</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Select a vehicle and adjust reservation days to test the mobile app calculations.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Mobile Bezels wrapper */}
            <div className="relative w-80 rounded-[36px] border-4 border-neutral-800 bg-[#090910] p-4 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Speaker camera mock */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-800 rounded-full z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-900 mr-2" />
                <div className="w-10 h-1 bg-neutral-950 rounded-full" />
              </div>

              {/* Inside Mobile View */}
              <div className="relative pt-6 min-h-[440px] flex flex-col justify-between font-sans select-none">
                <AnimatePresence mode="wait">
                  {!bookingSuccess ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4 flex-1 flex flex-col justify-between"
                    >
                      <div>
                        {/* Header title */}
                        <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                          <span className="text-[11px] font-bold text-white uppercase tracking-wider">Reserve Drive</span>
                          <span className="text-[9px] text-neutral-500 font-mono">NoSQL Sync</span>
                        </div>

                        {/* Car Selector */}
                        <div className="space-y-2">
                          <label className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">Select Vehicle</label>
                          <div className="space-y-1.5">
                            {vehicles.map((v) => (
                              <button
                                key={v.id}
                                onClick={() => setSelectedCar(v.id)}
                                className={`w-full text-left p-2.5 rounded-lg border text-xs transition-colors flex justify-between items-center ${
                                  selectedCar === v.id
                                    ? "bg-emerald-950/20 border-emerald-500 text-white"
                                    : "bg-white/[0.01] border-white/5 text-neutral-400 hover:text-white"
                                }`}
                              >
                                <div>
                                  <span className="block font-semibold">{v.name}</span>
                                  <span className="text-[8px] text-neutral-500">{v.type} • {v.fuel}</span>
                                </div>
                                <span className="font-mono font-bold">${v.pricePerDay}/d</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Days Counter */}
                        <div className="mt-4 flex items-center justify-between bg-white/[0.01] border border-white/5 p-2 rounded-xl">
                          <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">Rental Days</span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setBookingDays((d) => Math.max(d - 1, 1))}
                              className="h-6 w-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold hover:bg-white/10"
                            >
                              -
                            </button>
                            <span className="font-mono font-bold text-xs text-white w-4 text-center">{bookingDays}</span>
                            <button
                              onClick={() => setBookingDays((d) => Math.min(d + 1, 14))}
                              className="h-6 w-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold hover:bg-white/10"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Pricing list and button */}
                      <div className="mt-4 border-t border-white/5 pt-3 space-y-2">
                        <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                          <span>Subtotal ({bookingDays} days):</span>
                          <span>${subtotal}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                          <span>Insurance & Fees:</span>
                          <span>${tax}</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold text-white font-mono border-t border-white/5 pt-2">
                          <span>Estimated Total:</span>
                          <span className="text-emerald-400">${total}</span>
                        </div>

                        <button
                          onClick={handleBookCar}
                          className="w-full mt-2 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 font-bold text-xs uppercase tracking-wider text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
                        >
                          <Sparkles className="h-3.5 w-3.5" />
                          Reserve Drive
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-4 flex-1 flex flex-col justify-between text-center pt-8"
                    >
                      <div className="flex flex-col items-center">
                        <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 animate-bounce">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <h4 className="text-sm font-bold text-white">Booking Confirmed!</h4>
                        <p className="text-[10px] text-neutral-400 mt-1.5 max-w-[200px] mx-auto leading-relaxed">
                          Your reservation has been synchronized to the Firestore document store.
                        </p>

                        <div className="mt-6 p-3 bg-[#05050C] border border-white/5 rounded-xl w-full">
                          <span className="block text-[8px] text-neutral-500 uppercase tracking-wider font-mono">Reservation Code</span>
                          <span className="text-sm font-extrabold text-white font-mono tracking-widest">{bookingCode}</span>
                        </div>

                        <div className="mt-4 text-[9px] text-neutral-500 font-mono text-left w-full space-y-1 bg-white/[0.01] p-3 rounded-lg border border-white/5">
                          <div>• Vehicle: <span className="text-white font-semibold">{currentCarObj.name}</span></div>
                          <div>• Rent Days: <span className="text-white font-semibold">{bookingDays} days</span></div>
                          <div>• Net Cost: <span className="text-emerald-400 font-bold">${total}</span></div>
                        </div>
                      </div>

                      <button
                        onClick={handleResetBooking}
                        className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 font-bold text-xs uppercase tracking-wider text-white transition-colors cursor-pointer"
                      >
                        Reset Booking
                      </button>
                    </motion.div>
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
            <div className="mx-auto mt-4 h-1 w-16 bg-emerald-500" />
          </div>

          <div className="space-y-6">
            <GlassCard hoverEffect={false} className="p-6 relative border-emerald-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-400" />
                Scheduler Overlapping Resolution
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> Standard date counters allow two bookings to occupy the same slots. Firestore's async nature can lead to race conditions where overlapping listings are written simultaneously.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Executed reservation inserts under strict Firebase security rule gates. The database validates transaction documents against a sub-collection of reserved dates, rejecting writes if overlap metrics are identified.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="p-6 relative border-emerald-500/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="h-5 w-5 text-emerald-400" />
                Cross-Platform Compilation Optimization
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                <strong>Problem:</strong> Complex widgets caused frame drops on older Android displays, violating smooth scroll experiences.
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                <strong>Solution:</strong> Refactored widget trees to avoid nested layout builders. Leveraged const widget declarations, allowing Flutter to skip redundant redraw steps. Standardized state caches, resulting in smooth 60fps renders on target devices.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
