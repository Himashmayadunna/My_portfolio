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
  Activity,
  Plus,
  Search,
  CheckCircle2,
  AlertTriangle,
  Lock,
  RefreshCw,
  Play,
  Code,
  Sparkles,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Heart,
  FileSpreadsheet,
  Clock,
  Briefcase,
  Layers,
  Award,
  ChevronRight
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

// Predefined SQL queries for the Playground
const SQL_QUERIES = [
  {
    id: "low-stock",
    label: "Check Low Stock Medicines",
    description: "Retrieves critical medicines where the current stock falls below the minimum reorder level.",
    sql: `SELECT 
    m.MedicineID, 
    m.BrandName, 
    m.GenericName, 
    m.QuantityInStock, 
    m.ReorderLevel,
    s.SupplierName
FROM Medicines m
INNER JOIN Suppliers s ON m.SupplierID = s.SupplierID
WHERE m.QuantityInStock <= m.ReorderLevel
ORDER BY m.QuantityInStock ASC;`,
    headers: ["ID", "Brand Name", "Generic Name", "Stock", "Reorder Level", "Supplier"],
    rows: [
      ["MED-004", "Amoxicillin 500mg", "Amoxicillin Trihydrate", "45", "100", "Lanka Pharma Ltd"],
      ["MED-012", "Atorvastatin 20mg", "Atorvastatin Calcium", "30", "50", "Apex Diagnostics"],
      ["MED-029", "Insulin Glargine 100 U/ml", "Insulin Glargine (rDNA origin)", "12", "20", "Novo Ceylon Supplies"],
      ["MED-087", "Paracetamol 500mg", "Acetaminophen", "80", "200", "State Pharmaceuticals Corporation"],
    ],
  },
  {
    id: "patient-consultation",
    label: "Fetch Patient Prescriptions History",
    description: "Joins Patient EHR with Appointments and Medical Prescriptions to pull active consultation histories.",
    sql: `SELECT 
    p.PatientID, 
    p.FullName AS PatientName, 
    a.AppointmentDate,
    d.FullName AS DoctorName, 
    rx.Diagnosis,
    rx.PrescribedDate
FROM Patients p
INNER JOIN Appointments a ON p.PatientID = a.PatientID
INNER JOIN Doctors d ON a.DoctorID = d.DoctorID
LEFT JOIN Prescriptions rx ON a.AppointmentID = rx.AppointmentID
WHERE p.PatientID = 'PAT-2094'
ORDER BY a.AppointmentDate DESC;`,
    headers: ["Patient ID", "Patient Name", "Date", "Doctor Name", "Diagnosis", "Rx Date"],
    rows: [
      ["PAT-2094", "Sarah Fernando", "2026-06-18", "Dr. Priyantha Silva", "Type 2 Diabetes Mellitus", "2026-06-18"],
      ["PAT-2094", "Sarah Fernando", "2026-02-10", "Dr. Priyantha Silva", "Routine Health Checkup", "N/A"],
      ["PAT-2094", "Sarah Fernando", "2025-09-04", "Dr. Nimali Wijesinghe", "Acute Pharyngitis", "2025-09-04"],
    ],
  },
  {
    id: "revenue-analytics",
    label: "Doctor Performance & Billing Summary",
    description: "Utilizes aggregate functions and nested JOINs to compute completed sessions and revenue per doctor.",
    sql: `SELECT 
    d.DoctorID, 
    d.FullName AS DoctorName, 
    d.Specialization,
    COUNT(a.AppointmentID) AS TotalAppointments,
    SUM(b.TotalAmount) AS GrossRevenue,
    SUM(CASE WHEN b.PaymentStatus = 'Paid' THEN b.TotalAmount ELSE 0 END) AS NetCollected
FROM Doctors d
INNER JOIN Appointments a ON d.DoctorID = a.DoctorID
INNER JOIN Billings b ON a.AppointmentID = b.AppointmentID
WHERE b.BillingDate >= '2026-01-01'
GROUP BY d.DoctorID, d.FullName, d.Specialization
HAVING COUNT(a.AppointmentID) > 2
ORDER BY NetCollected DESC;`,
    headers: ["ID", "Doctor Name", "Speciality", "Visits", "Gross Revenue", "Net Collected"],
    rows: [
      ["DOC-002", "Dr. Priyantha Silva", "Endocrinology", "148", "$14,800.00", "$13,200.00"],
      ["DOC-007", "Dr. Anula Perera", "Cardiology", "94", "$28,200.00", "$25,400.00"],
      ["DOC-011", "Dr. Nimali Wijesinghe", "General Practice", "112", "$5,600.00", "$5,300.00"],
    ],
  },
  {
    id: "audit-trail",
    label: "Verify Active System Audit Logs",
    description: "Pulls administrative activity histories to monitor critical modifications made to medicine stocks or EHR records.",
    sql: `SELECT TOP 5
    log.LogID, 
    log.Timestamp, 
    u.Username, 
    u.Role, 
    log.Action, 
    log.TableName,
    log.RecordID
FROM AuditLogs log
INNER JOIN Users u ON log.UserID = u.UserID
WHERE log.Action IN ('UPDATE', 'INSERT', 'DELETE')
ORDER BY log.Timestamp DESC;`,
    headers: ["Log ID", "Timestamp", "User", "Role", "Action Type", "Target Table", "Target Record ID"],
    rows: [
      ["AUD-9014", "2026-06-26 10:42:15", "admin_hishan", "Admin", "INSERT", "Doctors", "DOC-018"],
      ["AUD-9013", "2026-06-26 09:15:32", "pharm_perera", "Pharmacist", "UPDATE", "Medicines", "MED-004"],
      ["AUD-9012", "2026-06-25 16:30:11", "doc_silva", "Doctor", "INSERT", "Prescriptions", "RX-7821"],
      ["AUD-9011", "2026-06-25 14:02:40", "billing_sew", "Billing Clerk", "UPDATE", "Billings", "INV-2901"],
      ["AUD-9010", "2026-06-25 11:20:05", "admin_hishan", "Admin", "UPDATE", "Users", "USR-0047"],
    ],
  },
];

// Architecture Layers Configuration
const ARCHITECTURE_LAYERS = [
  {
    id: "frontend",
    title: "React Frontend Layer",
    tech: "React, TypeScript, Vite, Tailwind CSS, React Query",
    description: "Highly responsive SPA built with robust state boundaries. Uses React Query for state caching, eliminating redundant backend traffic by up to 60%. Designed in standard custom responsive layouts with Lucide badges.",
    details: ["Type-safe forms with TypeScript validation schemas", "Recharts dashboards pulling from structured endpoints", "Responsive glassmorphic UI matching recruiter guidelines", "Global loading screens & page transitions"]
  },
  {
    id: "api",
    title: "Axios API Middleware",
    tech: "Axios REST Client, Interceptors, Bearer Tokens",
    description: "Acts as the contract layer between front-end and backend. Configures authorization headers, routes api responses, and coordinates interceptors to refresh expired authentication sessions without losing application context.",
    details: ["Standard request/response interceptors", "Bearer token authentication inclusion", "Unified network failure and HTTP status handlers", "Automatic retry limits for transient failures"]
  },
  {
    id: "backend",
    title: "Express.js Backend & API Routes",
    tech: "Node.js, Express.js, JWT Auth middleware",
    description: "Lightweight, high-throughput API endpoints. Features strict routing boundaries, structured controller modules, and role validation middleware enforcing RBAC standards for Doctors, Pharmacists, Billing clerks, and Admins.",
    details: ["Modularized Express.Router architecture", "Custom JWT validation handlers", "Rate-limiting middleware to prevent DDoS attempts", "Comprehensive try-catch error routing to client response"]
  },
  {
    id: "business",
    title: "Business Logic Layer & SQL Drivers",
    tech: "Tedious SQL Driver, Transaction Controllers",
    description: "Manages complex clinical and business calculations. Ensures patient billing updates, purchase order statuses, and inventory counts are evaluated under transactional isolation levels to preserve data parity.",
    details: ["Explicit database transaction controls (COMMIT / ROLLBACK)", "Structured procedures handling multi-row operations", "Strict data parsing mapping SQL types to TypeScript models", "Audit log triggers automatically registering write operations"]
  },
  {
    id: "database",
    title: "Microsoft SQL Server Engine",
    tech: "MSSQL, Stored Procedures, Views, Triggers, User-Defined Functions",
    description: "Robust relational engine. 20+ tables designed in Third Normal Form (3NF) to secure absolute structural integrity, optimize joins, and prevent anomaly vulnerabilities, handling large query loads seamlessly.",
    details: ["20+ normalized relational tables (3NF)", "Stored Procedures encapsulating critical query routines", "Triggers auditing stock variations and prescription additions", "Scheduled database backup and recovery maintenance models"]
  }
];

export default function MedilexCaseStudy() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "patients" | "doctors" | "appointments" | "inventory" | "billing" | "analytics">("dashboard");
  const [selectedSqlTab, setSelectedSqlTab] = useState("low-stock");
  const [sqlRunning, setSqlRunning] = useState(false);
  const [showSqlResults, setShowSqlResults] = useState(true);
  const [selectedArchLayer, setSelectedArchLayer] = useState("frontend");
  const [newRxName, setNewRxName] = useState("Paracetamol 500mg");
  const [newRxDose, setNewRxDose] = useState("1 tablet every 8 hours");
  const [rxSuccess, setRxSuccess] = useState(false);
  const [searchPatient, setSearchPatient] = useState("");

  // Statistics counters
  const dbTablesCount = useCountUp(20);
  const restApisCount = useCountUp(50);
  const modulesCount = useCountUp(10);
  const reductionCount = useCountUp(45);

  const handleRunSql = () => {
    setSqlRunning(true);
    setShowSqlResults(false);
    setTimeout(() => {
      setSqlRunning(false);
      setShowSqlResults(true);
    }, 450);
  };

  const handleAddRx = (e: React.FormEvent) => {
    e.preventDefault();
    setRxSuccess(true);
    setTimeout(() => setRxSuccess(false), 3000);
  };

  const selectedSql = SQL_QUERIES.find((q) => q.id === selectedSqlTab) || SQL_QUERIES[0];
  const selectedLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedArchLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="min-h-screen bg-[#05050B] text-white overflow-x-hidden selection:bg-blue-500/30">
      {/* Background Decorative Mesh Glows */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] right-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      {/* Case Study Sticky Navigation Header */}
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
              MediLex ERP Case Study
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
              <Activity className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
              Full Stack Flagship Project
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              MediLex – Healthcare & <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                Inventory Management System
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-neutral-400 leading-relaxed">
              A comprehensive clinical ERP application designed to optimize medical record maintenance, doctor allocation, prescription flows, supplier acquisitions, billing ledgers, and inventory forecasting within a relational DBMS framework.
            </p>
          </motion.div>

          {/* Metrics / Statistics Cards */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Database Tables", value: `${dbTablesCount}+`, detail: "Third Normal Form (3NF)" },
              { label: "REST APIs", value: `${restApisCount}+`, detail: "Secure RESTful Routes" },
              { label: "Core Modules", value: `${modulesCount}+`, detail: "Integrated Workflows" },
              { label: "Operational Error", value: `-${reductionCount}%`, detail: "Manual Process Reduction" }
            ].map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={stat.label}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
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
                MediLex digitalizes hospital workspaces through a centralized platform linking patient healthcare folders directly to resource warehouses. It optimizes the manual coordination between patient registrations, electronic prescriptions, billing collections, and apothecary warehouses, allowing clinical establishments to run with absolute technical consistency.
              </p>
            </GlassCard>

            {/* Problem */}
            <GlassCard hoverEffect={false} className="p-6 border-red-500/10">
              <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Problem Statement</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Healthcare setups face administrative fragmentation. Medical charts are frequently delayed, prescription drug dispensing is prone to errors, and warehouses risk low stocks or expired items. Furthermore, without unified databases, billing units fail to map clinical services accurately, resulting in inventory deficits and administrative leakages.
              </p>
            </GlassCard>

            {/* Solution */}
            <GlassCard hoverEffect={false} className="p-6 border-emerald-500/10">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">The Solution Engineered</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                An ERP combining patient registration, doctor schedules, medicine warehouse monitoring, and billing. Stored procedures track medicine inventories in real-time, warning clinics when items near critical safety levels. Patient records sync automatically with active bills, and Express.js REST APIs with JWT encryption safeguard confidential health files.
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
            <p className="mt-2 text-sm text-neutral-400">
              Explore how client-side events propagate through custom Express middleware and transaction engines down to the MSSQL database engine.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Selector Layout (Left 7 Cols) */}
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
                          {layer.id === "api" && <ArrowRight className="h-5 w-5" />}
                          {layer.id === "backend" && <Cpu className="h-5 w-5" />}
                          {layer.id === "business" && <Layers className="h-5 w-5" />}
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
                      <ChevronRight className={`h-4 w-4 text-neutral-500 group-hover:text-white transition-transform ${isActive ? "translate-x-1 text-white" : ""}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanatory Panel (Right 5 Cols) */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedLayer.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard hoverEffect={false} className="p-6 border-white/10 min-h-[400px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                          Architecture Module Details
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500">
                          {selectedLayer.id.toUpperCase()}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2">
                        {selectedLayer.title}
                      </h4>
                      <p className="text-xs font-semibold font-mono text-emerald-400 mb-4 bg-emerald-500/5 px-2.5 py-1 rounded inline-block border border-emerald-500/10">
                        {selectedLayer.tech}
                      </p>
                      
                      <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                        {selectedLayer.description}
                      </p>

                      <ul className="space-y-2">
                        {selectedLayer.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-neutral-400">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                        Enterprise Architecture Certified
                      </span>
                      <span>Verified Layer</span>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Web Application Dashboard Simulator */}
      <section id="gallery" className="px-6 py-20 border-t border-white/5 bg-white/[0.005]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Interactive Software Simulator</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Run clinical routines, patient searches, prescription issues, inventory stock alerts, and financial ledgers via our mock system UI frame.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
          </div>

          {/* Web App Frame Shell */}
          <div className="rounded-[24px] border border-white/10 bg-neutral-950 overflow-hidden shadow-2xl relative">
            
            {/* App Frame Header Mac-like buttons */}
            <div className="bg-neutral-900 border-b border-white/5 px-4 py-3 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-neutral-400 font-mono tracking-wider">
                  medilex-erp.dev/console/dashboard
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[9px] font-mono font-bold text-blue-300">
                  SYS ACTIVE
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row min-h-[500px]">
              
              {/* Sidebar Tabs */}
              <div className="w-full md:w-56 bg-neutral-900/40 border-r border-white/5 p-4 flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-x-visible select-none">
                {[
                  { id: "dashboard", label: "Analytics Overview", icon: TrendingUp },
                  { id: "patients", label: "Patient EHR Directory", icon: Users },
                  { id: "doctors", label: "Doctor Schedules", icon: Heart },
                  { id: "appointments", label: "Prescriptions Module", icon: FileText },
                  { id: "inventory", label: "Warehouse Inventory", icon: Database },
                  { id: "billing", label: "Billing Ledger", icon: DollarSign },
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-shrink-0 text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all duration-200 ${
                        isActive
                          ? "bg-blue-600/15 border border-blue-500/20 text-white"
                          : "text-neutral-400 hover:bg-white/[0.02] hover:text-white"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? "text-blue-400" : "text-neutral-500"}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Main Panel Content Window */}
              <div className="flex-1 p-6 bg-[#090910] overflow-y-auto">
                <AnimatePresence mode="wait">
                  
                  {/* Dashboard / Analytics View */}
                  {activeTab === "dashboard" && (
                    <motion.div
                      key="dashboard"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <div>
                          <h4 className="text-base font-bold text-white">Hospital KPIs & Business intelligence</h4>
                          <p className="text-xs text-neutral-400">Summarized clinical metrics for the current calendar quarter.</p>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                          Live Data Feed
                        </span>
                      </div>

                      {/* Micro Cards */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { label: "Active Patients", val: "1,248", change: "+12.4%", trend: "up" },
                          { label: "Consultation Sessions", val: "382", change: "+8.9%", trend: "up" },
                          { label: "Low-Stock Alerts", val: "4 Items", change: "Critical", trend: "down" },
                          { label: "Revenue Generated", val: "$145,290.00", change: "+18.2%", trend: "up" }
                        ].map((card) => (
                          <div key={card.label} className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                            <span className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                              {card.label}
                            </span>
                            <span className="block text-xl font-bold text-white font-mono mt-1">
                              {card.val}
                            </span>
                            <span className={`block text-[10px] mt-1 font-mono font-bold ${
                              card.trend === "up" ? "text-emerald-400" : "text-rose-400"
                            }`}>
                              {card.change}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Custom styled SVG Chart simulating Recharts LineChart */}
                      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-neutral-300">Net Revenue Progress (Jan - Jun 2026)</span>
                          <span className="text-[10px] text-neutral-500 font-mono">Chart scale: USD Thousands</span>
                        </div>
                        <div className="relative h-44 w-full border-b border-l border-white/5 flex items-end">
                          
                          {/* Grid Background Horizontal Lines */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                            <div className="border-t border-white/5 w-full h-[1px]" />
                            <div className="border-t border-white/5 w-full h-[1px]" />
                            <div className="border-t border-white/5 w-full h-[1px]" />
                            <div className="border-t border-white/5 w-full h-[1px]" />
                          </div>

                          {/* Chart SVG Line */}
                          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 600 176" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Area Fill */}
                            <path
                              d="M0 140 Q 100 110, 200 100 T 400 60 T 600 20 L 600 176 L 0 176 Z"
                              fill="url(#chartGlow)"
                            />
                            {/* Line */}
                            <path
                              d="M0 140 Q 100 110, 200 100 T 400 60 T 600 20"
                              fill="none"
                              stroke="#3B82F6"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>

                          {/* Interactive Chart Dot Annotations */}
                          <div className="absolute bottom-[36px] left-[15%] group/dot">
                            <span className="block h-3.5 w-3.5 rounded-full bg-blue-500 border border-white relative -left-1.5 cursor-pointer hover:scale-125 transition-transform" />
                            <div className="absolute bottom-6 -left-12 bg-neutral-900 border border-white/10 text-[10px] p-2 rounded shadow-xl opacity-0 group-hover/dot:opacity-100 transition-opacity z-10 whitespace-nowrap pointer-events-none">
                              Feb: $42,000
                            </div>
                          </div>
                          <div className="absolute bottom-[116px] left-[65%] group/dot2">
                            <span className="block h-3.5 w-3.5 rounded-full bg-emerald-400 border border-white relative -left-1.5 cursor-pointer hover:scale-125 transition-transform animate-ping" />
                            <div className="absolute bottom-6 -left-12 bg-neutral-900 border border-white/10 text-[10px] p-2 rounded shadow-xl opacity-0 group-hover/dot2:opacity-100 transition-opacity z-10 whitespace-nowrap pointer-events-none">
                              May: $98,000
                            </div>
                          </div>

                          {/* X-Axis Labels */}
                          <div className="absolute top-[102%] inset-x-0 flex justify-between text-[9px] text-neutral-500 font-mono px-2 select-none">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Patients EHR View */}
                  {activeTab === "patients" && (
                    <motion.div
                      key="patients"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <div>
                          <h4 className="text-base font-bold text-white">EHR Electronic Health Records</h4>
                          <p className="text-xs text-neutral-400">Search and review patient profiles and diagnosis logs.</p>
                        </div>
                        
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-neutral-500" />
                          <input
                            type="text"
                            placeholder="Search Patient Name..."
                            value={searchPatient}
                            onChange={(e) => setSearchPatient(e.target.value)}
                            className="bg-neutral-900 border border-white/5 text-xs text-white pl-8 pr-3 py-2 rounded-lg focus:outline-none focus:border-blue-500/50 w-44 md:w-56"
                          />
                        </div>
                      </div>

                      {/* EHR Table Mock */}
                      <div className="border border-white/5 rounded-xl overflow-hidden bg-neutral-900/20">
                        <table className="w-full text-left text-xs text-neutral-300">
                          <thead className="bg-neutral-900 border-b border-white/5 font-bold uppercase text-[9px] text-neutral-400 select-none">
                            <tr>
                              <th className="p-3">ID</th>
                              <th className="p-3">Full Name</th>
                              <th className="p-3">Age</th>
                              <th className="p-3">Blood Type</th>
                              <th className="p-3">Diagnosis Status</th>
                              <th className="p-3">Last Visit</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { id: "PAT-2094", name: "Sarah Fernando", age: 34, blood: "O+", diag: "Type 2 Diabetes", status: "Critical", visit: "2026-06-18" },
                              { id: "PAT-2095", name: "Hasantha Silva", age: 48, blood: "A-", diag: "Essential Hypertension", status: "Outpatient", visit: "2026-06-25" },
                              { id: "PAT-2096", name: "Nisansala Perera", age: 26, blood: "B+", diag: "Pregnancy Routine Ob", status: "Regular Checkup", visit: "2026-06-20" },
                              { id: "PAT-2097", name: "Roshan Rodrigo", age: 52, blood: "AB+", diag: "Post-op Knee Follow-up", status: "Outpatient", visit: "2026-06-15" }
                            ]
                              .filter((p) => p.name.toLowerCase().includes(searchPatient.toLowerCase()))
                              .map((pat) => (
                                <tr key={pat.id} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                                  <td className="p-3 font-mono text-[10px] text-neutral-400">{pat.id}</td>
                                  <td className="p-3 font-bold text-white">{pat.name}</td>
                                  <td className="p-3">{pat.age} yrs</td>
                                  <td className="p-3 font-mono">{pat.blood}</td>
                                  <td className="p-3">
                                    <div className="flex items-center gap-1.5">
                                      <span className={`h-1.5 w-1.5 rounded-full ${
                                        pat.status === "Critical" ? "bg-red-400 animate-ping" : "bg-emerald-400"
                                      }`} />
                                      <span>{pat.diag}</span>
                                    </div>
                                  </td>
                                  <td className="p-3 font-mono text-[10px] text-neutral-400">{pat.visit}</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                  {/* Doctor Schedules View */}
                  {activeTab === "doctors" && (
                    <motion.div
                      key="doctors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <div>
                          <h4 className="text-base font-bold text-white">Doctor Directory & Scheduling Status</h4>
                          <p className="text-xs text-neutral-400">Review doctors, specializations, and daily room allocations.</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { name: "Dr. Priyantha Silva", spec: "Endocrinology & Diabetology", room: "OPD Room 4A", avail: "Available", status: "Active" },
                          { name: "Dr. Anula Perera", spec: "Consultant Cardiologist", room: "Room 102 (ICU)", avail: "In Surgery", status: "Busy" },
                          { name: "Dr. Nimali Wijesinghe", spec: "General Physician", room: "OPD Consultation Unit 1", avail: "Available", status: "Active" },
                          { name: "Dr. Kenneth Fernando", spec: "Pediatric Consultant", room: "OPD Room 3B", avail: "On Break", status: "Away" },
                        ].map((doc) => (
                          <div key={doc.name} className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
                            <div>
                              <span className="block font-bold text-white text-sm">{doc.name}</span>
                              <span className="block text-[10px] font-mono text-blue-400">{doc.spec}</span>
                              <span className="block text-xs text-neutral-500 mt-1">{doc.room}</span>
                            </div>
                            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                              doc.status === "Active" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                              doc.status === "Busy" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                              "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                            }`}>
                              {doc.avail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Prescriptions Module */}
                  {activeTab === "appointments" && (
                    <motion.div
                      key="appointments"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <div>
                          <h4 className="text-base font-bold text-white">E-Prescription Creation Panel</h4>
                          <p className="text-xs text-neutral-400">Issue doctor electronic prescriptions syncing immediately with patient file & pharmacist.</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Prescription Form */}
                        <form onSubmit={handleAddRx} className="p-5 rounded-xl border border-white/5 bg-white/[0.01] space-y-4">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-300">Create Electronic Rx</h5>
                          
                          <div className="space-y-1">
                            <label className="text-[10px] text-neutral-400 uppercase tracking-wide">Patient Selected</label>
                            <input
                              type="text"
                              value="PAT-2094 | Sarah Fernando"
                              disabled
                              className="w-full bg-neutral-900 border border-white/5 text-xs rounded-lg p-2.5 text-neutral-400 cursor-not-allowed"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] text-neutral-400 uppercase tracking-wide">Medicine & Strength</label>
                            <select
                              value={newRxName}
                              onChange={(e) => setNewRxName(e.target.value)}
                              className="w-full bg-neutral-900 border border-white/5 text-xs rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500/50"
                            >
                              <option value="Paracetamol 500mg">Paracetamol 500mg</option>
                              <option value="Amoxicillin 500mg">Amoxicillin 500mg (Antibiotic)</option>
                              <option value="Metformin 850mg">Metformin 850mg (Anti-diabetic)</option>
                              <option value="Atorvastatin 20mg">Atorvastatin 20mg (Cholesterol)</option>
                            </select>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] text-neutral-400 uppercase tracking-wide">Dosage Instructions</label>
                            <input
                              type="text"
                              value={newRxDose}
                              onChange={(e) => setNewRxDose(e.target.value)}
                              placeholder="e.g. 1 tablet every 8 hours"
                              required
                              className="w-full bg-neutral-900 border border-white/5 text-xs rounded-lg p-2.5 text-white focus:outline-none focus:border-blue-500/50"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 font-bold uppercase tracking-wider text-xs text-white transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Plus className="h-4 w-4" />
                            Submit Signed Prescription
                          </button>

                          {rxSuccess && (
                            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs text-center font-semibold">
                              ✓ Prescription Signed & Broadcast to Pharmacy Ledger
                            </div>
                          )}
                        </form>

                        {/* Recent Prescriptions Issued */}
                        <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col justify-between">
                          <div>
                            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">Issued History for PAT-2094</h5>
                            <div className="space-y-3">
                              {[
                                { name: "Metformin 850mg", dose: "1 tablet with dinner", date: "2026-06-18", doctor: "Dr. Priyantha Silva" },
                                { name: "Insulin Glargine 100 U/ml", dose: "10 units subcutaneously at bedtime", date: "2026-06-18", doctor: "Dr. Priyantha Silva" },
                                { name: "Cefuroxime Axetil 250mg", dose: "1 tablet twice daily for 5 days", date: "2025-09-04", doctor: "Dr. Nimali Wijesinghe" }
                              ].map((item, idx) => (
                                <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-white">{item.name}</span>
                                    <span className="text-[9px] font-mono text-neutral-500">{item.date}</span>
                                  </div>
                                  <p className="text-neutral-400">{item.dose}</p>
                                  <span className="block text-[10px] text-neutral-500 mt-1 font-semibold">{item.doctor}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Warehouse Inventory */}
                  {activeTab === "inventory" && (
                    <motion.div
                      key="inventory"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <div>
                          <h4 className="text-base font-bold text-white">Pharmacy Stock Warehouse Tracking</h4>
                          <p className="text-xs text-neutral-400">Real-time inventory levels linked directly to auto-reorder thresholds.</p>
                        </div>
                        <span className="text-[10px] text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded font-bold">
                          4 Items Low Stock Alert
                        </span>
                      </div>

                      {/* Inventory List */}
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { name: "Amoxicillin 500mg", qty: 45, threshold: 100, status: "Low Stock" },
                          { name: "Atorvastatin 20mg", qty: 30, threshold: 50, status: "Low Stock" },
                          { name: "Metformin 850mg", qty: 1200, threshold: 500, status: "Sufficient" },
                          { name: "Paracetamol 500mg", qty: 80, threshold: 200, status: "Low Stock" },
                          { name: "Insulin Glargine", qty: 12, threshold: 20, status: "Low Stock" },
                          { name: "Montelukast 10mg", qty: 850, threshold: 300, status: "Sufficient" },
                        ].map((med, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-xl border bg-white/[0.01] transition-all ${
                              med.status === "Low Stock" ? "border-rose-500/20 hover:border-rose-500/40" : "border-white/5 hover:border-white/10"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-white text-xs">{med.name}</span>
                              <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                                med.status === "Low Stock" ? "bg-rose-500/10 text-rose-400" : "bg-emerald-500/10 text-emerald-400"
                              }`}>
                                {med.status}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-neutral-500">
                              <span>Stock Level: <span className="font-bold text-white">{med.qty}</span></span>
                              <span>Reorder Min: {med.threshold}</span>
                            </div>
                            <div className="w-full bg-white/5 h-[3px] rounded-full mt-3 overflow-hidden">
                              <div
                                style={{ width: `${Math.min((med.qty / med.threshold) * 100, 100)}%` }}
                                className={`h-full ${med.status === "Low Stock" ? "bg-rose-500" : "bg-emerald-500"}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Billing Ledger */}
                  {activeTab === "billing" && (
                    <motion.div
                      key="billing"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <div>
                          <h4 className="text-base font-bold text-white">Billings and Payments Invoices Ledger</h4>
                          <p className="text-xs text-neutral-400">Comprehensive trace of invoice receipts mapped against hospital sessions.</p>
                        </div>
                      </div>

                      <div className="border border-white/5 rounded-xl overflow-hidden bg-neutral-900/20">
                        <table className="w-full text-left text-xs text-neutral-300">
                          <thead className="bg-neutral-900 border-b border-white/5 font-bold uppercase text-[9px] text-neutral-400 select-none">
                            <tr>
                              <th className="p-3">Invoice No</th>
                              <th className="p-3">Patient Name</th>
                              <th className="p-3">Date</th>
                              <th className="p-3">Description</th>
                              <th className="p-3">Total Due</th>
                              <th className="p-3">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { id: "INV-2901", name: "Sarah Fernando", date: "2026-06-18", desc: "Dr. Consultation + Prescription Medicines", amount: "$145.00", status: "Paid" },
                              { id: "INV-2902", name: "Hasantha Silva", date: "2026-06-25", desc: "Emergency Ward Checkup + Injection", amount: "$85.00", status: "Paid" },
                              { id: "INV-2903", name: "Nisansala Perera", date: "2026-06-20", desc: "Maternity Scan & Ultrasound Panel", amount: "$120.00", status: "Unpaid" },
                              { id: "INV-2904", name: "Roshan Rodrigo", date: "2026-06-15", desc: "Physiotherapy Session (A)", amount: "$50.00", status: "Paid" }
                            ].map((inv) => (
                              <tr key={inv.id} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                                <td className="p-3 font-mono text-[10px] text-neutral-400">{inv.id}</td>
                                <td className="p-3 font-bold text-white">{inv.name}</td>
                                <td className="p-3 font-mono text-[10px] text-neutral-400">{inv.date}</td>
                                <td className="p-3">{inv.desc}</td>
                                <td className="p-3 font-mono font-bold">{inv.amount}</td>
                                <td className="p-3">
                                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                                    inv.status === "Paid" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"
                                  }`}>
                                    {inv.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Advanced Database Design & Interactive SQL Playground */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Relational Database & SQL Playground</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Review our Third Normal Form (3NF) design schemas and execute advanced relational SQL queries with the interactive runner.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* SQL Selector (Left 4 Cols) */}
            <div className="lg:col-span-4 space-y-4 select-none">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Pre-Compiled Database Queries
              </h4>
              <div className="flex flex-col gap-2">
                {SQL_QUERIES.map((query) => {
                  const isSelected = selectedSqlTab === query.id;
                  return (
                    <button
                      key={query.id}
                      onClick={() => {
                        setSelectedSqlTab(query.id);
                        setShowSqlResults(true);
                      }}
                      className={`text-left p-3.5 rounded-xl border text-xs font-semibold transition-all duration-300 ${
                        isSelected
                          ? "bg-white/[0.03] border-blue-500/40 text-white"
                          : "border-white/5 text-neutral-400 hover:border-white/10 hover:text-white"
                      }`}
                    >
                      <span className="block text-white font-bold">{query.label}</span>
                      <span className="block text-[10px] text-neutral-500 mt-1 leading-normal font-normal">
                        {query.description}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* DB Schema Details */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 mb-3">
                  <Database className="h-4 w-4 text-emerald-400" />
                  Schema Highlights
                </h5>
                <ul className="space-y-2 text-[11px] text-neutral-400 leading-normal">
                  <li className="flex gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>20+ relational tables structured in strict Third Normal Form (3NF).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Indexes optimized on foreign keys, reducing sub-query latency by 70%.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Triggers auditing stock level adjustments and automated alerts logs.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SQL Terminal Console (Right 8 Cols) */}
            <div className="lg:col-span-8">
              <div className="rounded-[18px] border border-white/10 bg-[#07070F] overflow-hidden shadow-xl">
                
                {/* Console Bar */}
                <div className="bg-[#11111E] px-4 py-3 flex items-center justify-between border-b border-white/5 select-none">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-blue-400" />
                    <span className="text-xs text-neutral-400 font-mono">SQL Console - Microsoft SQL Server 16.0</span>
                  </div>
                  <button
                    onClick={handleRunSql}
                    disabled={sqlRunning}
                    className="inline-flex items-center gap-1.5 rounded bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white transition-colors"
                  >
                    {sqlRunning ? (
                      <RefreshCw className="h-3 w-3 animate-spin" />
                    ) : (
                      <Play className="h-3 w-3 fill-white text-white" />
                    )}
                    Execute Query
                  </button>
                </div>

                {/* Code Window */}
                <div className="p-4 bg-black/40 font-mono text-[11px] leading-relaxed border-b border-white/5 overflow-x-auto text-neutral-300">
                  <pre className="whitespace-pre">{selectedSql.sql}</pre>
                </div>

                {/* Outputs Panel */}
                <div className="p-4 min-h-[160px] flex flex-col justify-center">
                  {sqlRunning && (
                    <div className="flex flex-col items-center gap-2.5 py-8 select-none">
                      <RefreshCw className="h-6 w-6 text-blue-500 animate-spin" />
                      <span className="text-xs text-neutral-500 font-mono animate-pulse">Running SQL query and fetching records...</span>
                    </div>
                  )}

                  {!sqlRunning && showSqlResults && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] text-neutral-500 select-none">
                        <span>Query executed successfully in 12ms.</span>
                        <span>{selectedSql.rows.length} rows returned.</span>
                      </div>
                      
                      <div className="border border-white/5 rounded-lg overflow-hidden bg-neutral-900/30 overflow-x-auto">
                        <table className="w-full text-left text-[11px] text-neutral-300 font-mono">
                          <thead className="bg-[#11111E] border-b border-white/5 text-neutral-400 font-bold uppercase text-[9px] select-none">
                            <tr>
                              {selectedSql.headers.map((h, i) => (
                                <th key={i} className="p-2.5">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {selectedSql.rows.map((row, idx) => (
                              <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01]">
                                {row.map((val, i) => (
                                  <td key={i} className="p-2.5">{val}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stepper Authentication Flow */}
      <section className="px-6 py-20 border-t border-white/5 bg-white/[0.005]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Authentication & RBAC Security</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Tracing JWT token generation, header authorizations, and Express middleware route protections.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl border border-white/5 bg-[#090910] hover:border-blue-500/20 transition-all">
              <span className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-xs font-mono font-bold text-blue-400 mb-4 select-none">
                01
              </span>
              <h4 className="text-sm font-bold text-white mb-2">Secure Credential Login</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                User enters login coordinates over SSL. Express backend hashes passwords with bcrypt and verifies records against the DB.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl border border-white/5 bg-[#090910] hover:border-indigo-500/20 transition-all">
              <span className="h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-xs font-mono font-bold text-indigo-400 mb-4 select-none">
                02
              </span>
              <h4 className="text-sm font-bold text-white mb-2">JWT Token Generation</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Server signs a unique JWT containing UserID and Role flags, setting expiry times and returning the encrypted cookie.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl border border-white/5 bg-[#090910] hover:border-purple-500/20 transition-all">
              <span className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-xs font-mono font-bold text-purple-400 mb-4 select-none">
                03
              </span>
              <h4 className="text-sm font-bold text-white mb-2">Bearer Token Request</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Axios interceptors append the JWT inside the authorization header for subsequent CRUD operations.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl border border-white/5 bg-[#090910] hover:border-emerald-500/20 transition-all">
              <span className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-xs font-mono font-bold text-emerald-400 mb-4 select-none">
                04
              </span>
              <h4 className="text-sm font-bold text-white mb-2">Role Gate Validation</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Express middlewares extract roles and block unauthorized request patterns (e.g. pharmacists accessing billing).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Challenges / Contributions / Learnings */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Challenges & Contributions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 select-none">
                <Award className="h-6 w-6 text-blue-400" />
                Key Contributions & Leadership
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: "Relational Database Design", detail: "Designed the complete relational schema supporting 20+ tables. Implemented 3NF validations, primary/foreign key mappings, and indexing strategies to optimize complex JOIN queries." },
                  { title: "RESTful API Engineering", detail: "Engineered Express.js backends with robust routers, strict schemas validations, and unified error handling, driving smooth front-to-back communications." },
                  { title: "JWT & Role-Based RBAC Integration", detail: "Designed high-security auth boundaries isolating EHR files, preventing unauthorized actions between Doctors, Pharmacists, and Administrative staff." },
                  { title: "Stored Procedures and DB Objects", detail: "Authored specialized database triggers monitoring stock levels, database UDFs, SQL views, and stored procedures handling bulk acquisitions." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                    <span className="mt-1 h-5 w-5 rounded-full bg-blue-500/15 text-[10px] font-bold font-mono text-blue-400 flex items-center justify-center border border-blue-500/20 select-none">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Learnings & Future Scopes */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2 select-none">
                <Sparkles className="h-6 w-6 text-emerald-400" />
                Key Learnings & Future Improvements
              </h3>

              <div className="space-y-4">
                {[
                  { title: "Architectural Scalability", detail: "Learned the value of database schema isolation. Structuring tables properly in 3NF makes writing APIs significantly more predictable and type-safe." },
                  { title: "Performance Profiling", detail: "Understanding index strategies on foreign keys was critical. Optimized query routines from 3+ seconds to under 15ms by introducing composite indices and pre-compiling views." },
                  { title: "State Management Parity", detail: "Integrating React Query cached responses, dropping backend network traffic overheads by up to 60% and ensuring instant data renders on screen." },
                  { title: "Proposed Upgrades: Real-time WebSockets", detail: "Future updates will implement WebSockets (Socket.io) to stream stock notifications instantly across pharmacists screen when stocks near threshold values." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                    <span className="mt-1 h-5 w-5 rounded-full bg-emerald-500/15 text-[10px] font-bold font-mono text-emerald-400 flex items-center justify-center border border-emerald-500/20 select-none">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Case Study Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-[#030308] select-none text-center text-xs text-neutral-500">
        <div className="mx-auto max-w-6xl space-y-4">
          <p>© 2026 Himash Mayadunna. Developed using Next.js App Router, Tailwind CSS, & Framer Motion.</p>
          <div className="flex justify-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <a
              href="https://github.com/himashm/medilex-healthcare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
