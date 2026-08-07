"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Smartphone,
  Database,
  Layout,
  Car,
  Users,
  Briefcase,
  Layers,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Search,
  Globe,
  Settings,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  Server
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";

// Helper animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function CarRentCaseStudy() {
  return (
    <div className="min-h-screen bg-[#050508] text-neutral-300 font-sans selection:bg-rose-500/30 overflow-x-hidden pb-32">
      {/* Background Ambience */}
      <div className="fixed top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-rose-600/5 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-orange-600/5 blur-[150px] pointer-events-none" />

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
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 font-mono">
              RentX Case Study
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16 relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Badge className="mb-6 bg-rose-500/10 text-rose-400 border-rose-500/20">Flutter Mobile Application</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6">
              RentX. <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-300 to-amber-400">
                Vehicle Marketplace.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              A scalable, cross-platform mobile application developed using Flutter that connects vehicle owners with customers looking to rent vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-4xl px-6 space-y-24">
        
        {/* 1. Project Overview & 2. Problem Statement */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Globe className="h-7 w-7 text-rose-400" />
            1. Project Overview
          </h2>
          <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed">
            <p>
              RentX is a comprehensive cross-platform mobile application developed using Flutter. It is designed from the ground up to operate as a centralized marketplace that seamlessly connects vehicle owners (sellers) with customers (buyers) searching for short-term or long-term vehicle rentals. 
            </p>
            <p>
              Rather than functioning as a standard listing board, the platform actively manages the entire rental lifecycle. Sellers can dynamically list their vehicles, manage availability calendars, and track their rental income. Conversely, buyers are empowered to search through extensive catalogs, compare real-time pricing and availability, and execute secure bookings for specific rental periods. 
            </p>
            <p>
              The underlying architecture was meticulously engineered with scalability, a clean separation of concerns, and a modern, frictionless user experience in mind. It leverages robust cloud infrastructure to ensure high availability and responsiveness across both iOS and Android platforms simultaneously.
            </p>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <GlassCard className="border-red-500/20 bg-red-500/5 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="h-7 w-7 text-red-400" />
              2. Problem Statement
            </h2>
            <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed">
              <p>
                In many regions, local vehicle rental businesses and independent vehicle owners still heavily rely on archaic, manual booking methods. The primary avenues for organizing rentals typically involve direct phone calls, disorganized messaging applications, or relying on fragmented social media groups.
              </p>
              <p>
                From the consumer perspective, customers consistently struggle to transparently compare vehicles, verify real-time availability, understand opaque pricing structures, and confidently agree to rental conditions. The lack of a centralized system means buyers spend an excessive amount of time negotiating and verifying details manually.
              </p>
              <p>
                Simultaneously, vehicle owners lack a dedicated, centralized platform to manage their rental operations efficiently. Tracking overlapping schedules, handling customer communications, and verifying identities often become logistical nightmares. RentX was architected explicitly to solve these multifaceted challenges by digitizing and modernizing the entire rental workflow into a single, unified digital marketplace.
              </p>
            </div>
          </GlassCard>
        </motion.section>

        {/* 3. Objectives & 4. My Role */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-400" />
              3. Objectives
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The primary objective was to transcend the concept of a simple catalog app and build a fully functional, real-world booking ecosystem. 
            </p>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">▹</span> Develop complex dual-user workflows (buyers vs. sellers).</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">▹</span> Implement rigorous authentication and role-based access.</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">▹</span> Design scalable booking validation systems.</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">▹</span> Create distinct dashboard experiences.</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 border-rose-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-rose-400" />
              4. My Role
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              As the sole developer and architect for this project, I owned the end-to-end product lifecycle.
            </p>
            <div className="flex flex-wrap gap-2">
              {["UI/UX Design", "Flutter Mobile Development", "Application Architecture", "Firebase Authentication", "Firestore DB Design", "Firebase Storage", "State Management", "Responsive UI"].map(skill => (
                <Badge key={skill} className="bg-white/5 border-white/10">{skill}</Badge>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* 5. Research & Planning & 6. Design Process */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl font-bold text-white mb-6">5. Research and Planning</h2>
          <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed">
            <p>
              The foundation of RentX required extensive research into existing transportation and accommodation marketplaces. I analyzed user behaviors across platforms like Turo and Airbnb to understand the cognitive load placed on users during high-friction activities like booking dates and processing verifications.
            </p>
            <p>
              Planning involved meticulously mapping out the entity relationship diagrams for the NoSQL database. Understanding that a NoSQL structure like Firestore requires data duplication for efficient reads, I charted out the read/write paths for fetching vehicle catalogs versus querying a user's specific booking history. I established target users: Vehicle Owners, Customers, Small Rental Businesses, Tourists, and Local Travelers, ensuring the application workflows catered to both B2B and B2C interactions.
            </p>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl font-bold text-white mb-6">6. Design Process</h2>
          <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed">
            <p>
              The UI/UX design phase heavily utilized Material Design 3 guidelines to guarantee a native feel across Android devices while maintaining a premium, bespoke aesthetic suitable for iOS. I opted for a highly legible, typography-driven dark theme to reduce eye strain, which is particularly beneficial for users browsing multiple vehicle listings late at night or outdoors.
            </p>
            <p>
              Component reusability was a core tenet of the design phase. I designed standardized vehicle cards, status badges, and interactive date-pickers in Figma before touching the codebase. By establishing a robust design token system (colors, typography, spacing), translating the visual designs into Flutter widget classes was accelerated and guaranteed visual consistency across the entire marketplace.
            </p>
          </div>
        </motion.section>

        {/* 7. System Architecture & 8. Technology Stack */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8">7. System Architecture</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Layout className="h-8 w-8 text-rose-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Presentation Layer</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Contains reusable widgets, screens, and view models. Built entirely in Flutter, it reacts to state changes and handles user interactions.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Activity className="h-8 w-8 text-orange-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Domain & State</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Utilizes reactive state management to bind business logic with the UI. Models are strictly typed using Dart data classes.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Server className="h-8 w-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Data & Service Layer</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Abstracts Firebase interactions into dedicated repositories. Handles JSON serialization, asynchronous network calls, and caching.
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed">
              <p>
                The project organization adheres strictly to a clean architecture philosophy. The folder structure segregates the UI components from the business logic. By isolating the service layer, the application remains agnostic to the underlying backend infrastructure, allowing for easier unit testing and future migrations. Flutter was selected for its unparalleled ability to compile to high-performance native machine code for both iOS and Android from a single codebase, significantly reducing development overhead while maintaining fluid 60FPS animations.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl font-bold text-white mb-6">8. Technology Stack</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Flutter & Dart", icon: Smartphone },
              { name: "Firebase Auth", icon: ShieldCheck },
              { name: "Cloud Firestore", icon: Database },
              { name: "Firebase Storage", icon: Layers },
              { name: "Google Maps API", icon: MapPin },
              { name: "Material Design 3", icon: Layout },
              { name: "Git & GitHub", icon: Cpu }
            ].map((tech, i) => (
              <GlassCard key={i} className="p-4 flex items-center gap-3 pr-6 hover:bg-white/[0.05] transition-colors">
                <tech.icon className="h-5 w-5 text-rose-400" />
                <span className="font-bold text-sm text-white">{tech.name}</span>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* 9. Database Design */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl font-bold text-white mb-6">9. Database Design</h2>
          <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed mb-8">
            <p>
              Designing a scalable NoSQL database required careful consideration of read-heavy operations. The Cloud Firestore database is organized into distinct, highly optimized collections:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "users", desc: "Stores profiles, authentication identifiers, and role flags (buyer/seller)." },
              { title: "vehicles", desc: "Contains comprehensive vehicle metadata, pricing, image URLs, and seller references." },
              { title: "bookings", desc: "The transactional core; tracks rental periods, statuses (pending, active, completed), and relates users to vehicles." },
              { title: "favorites", desc: "A sub-collection or linked structure allowing buyers to curate personal shortlists." },
              { title: "reviews", desc: "Aggregates feedback post-rental, calculating average ratings for sellers and vehicles." },
              { title: "notifications", desc: "Powers the real-time alert system for booking state changes." }
            ].map((col, i) => (
              <div key={i} className="border-l-2 border-rose-500/40 pl-4 py-1">
                <h4 className="font-bold text-rose-300 text-sm font-mono mb-1">{col.title}</h4>
                <p className="text-sm text-neutral-400">{col.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 10. Application Workflow & 11. Features */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl font-bold text-white mb-6">10. Application Workflow</h2>
          <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed">
            <p>
              From the moment the user taps the application icon, they are greeted by a branded Splash Screen that asynchronously checks their authentication state. If unauthenticated, the user proceeds through the Firebase Authentication gateway (supporting email/password and social logins). Upon first login, users encounter the crucial Role Selection screen, determining whether the app configures itself for a Buyer Journey or a Seller Journey.
            </p>
            <p>
              <strong>The Buyer Journey:</strong> Buyers land on a visually rich discovery feed showcasing recommended vehicles. They utilize advanced filters (price, vehicle type, location) to narrow their Vehicle Discovery. Tapping a listing opens the detailed view, where they initiate the Booking Flow. They select dates via an interactive calendar, the system validates availability, and they proceed to Booking Confirmation.
            </p>
            <p>
              <strong>The Seller Journey:</strong> Sellers bypass the discovery feed and land directly on their Seller Dashboard. Here, they monitor active rentals, view pending booking requests, and manage their fleet. The Vehicle Listing workflow allows them to upload images directly to Firebase Storage, set pricing rules, and publish their vehicles in real-time to the marketplace. Both roles have access to Profile Management to update personal details and preferences.
            </p>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <GlassCard className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8">11. Comprehensive Feature Set</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Role-Based Navigation (Buyer vs Seller)",
                "Real-Time Firestore Sync",
                "Advanced Vehicle Search & Filters",
                "Dynamic Booking Calendars",
                "Seller Fleet Management",
                "Firebase Storage Image Uploads",
                "Cross-Platform Responsive Design",
                "Interactive Dark Theme UI",
                "Automated Push Notifications",
                "Historical Booking Tracking"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <Zap className="h-4 w-4 text-rose-400 shrink-0" />
                  <span className="text-sm font-medium text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* 12. Challenges & 13. Solutions */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl font-bold text-white mb-6">12. Engineering Challenges</h2>
          <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed">
            <p>
              Building a robust marketplace introduces severe technical complexities. The foremost challenge was designing a scalable Firestore database. In relational databases, verifying booking overlaps is a simple SQL query; in NoSQL, it requires careful document modeling to prevent race conditions during booking creation. 
            </p>
            <p>
              Managing the application state across divergent buyer and seller experiences was another hurdle. Mixing state logic with UI code would rapidly degrade performance and maintainability. Furthermore, uploading and caching high-resolution vehicle imagery smoothly across various mobile network speeds demanded a highly optimized Firebase Storage integration.
            </p>
          </div>
        </motion.section>

        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl font-bold text-white mb-6">13. Technical Solutions</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-500/10 to-transparent border-l-4 border-rose-500">
              <h3 className="text-lg font-bold text-white mb-2">Concurrency & Booking Logic</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                To solve booking collisions, I implemented Firestore Transactions. When a user finalizes a booking, a transaction locks the vehicle document, reads the currently booked dates, verifies no overlaps exist, and only then commits the new booking. This guarantees data integrity even if two users attempt to book the same vehicle simultaneously.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-white mb-2">State Management Architecture</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                I adopted a strict separation of concerns utilizing Provider/Riverpod (or Bloc). By abstracting all business logic into dedicated ViewModel classes, the UI only rebuilds when specifically notified. This approach allowed me to completely decouple the buyer logic from the seller logic, keeping the application fast and avoiding memory leaks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500">
              <h3 className="text-lg font-bold text-white mb-2">Image Optimization Pipeline</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                To ensure responsive layouts regardless of image payloads, I integrated Flutter image compression libraries prior to Firebase Storage uploads. Client-side, I utilized cached network image widgets to store fetched images locally on the device, drastically reducing repetitive network calls and minimizing Firestore bandwidth consumption.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 14. Lessons Learned */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <GlassCard className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-yellow-400" />
              14. Key Learning Outcomes
            </h2>
            <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed">
              <p>
                Developing RentX fundamentally shifted my perspective on software architecture. I gained profound expertise in structuring complex NoSQL databases and recognized the critical importance of data denormalization. I mastered Firebase Authentication and real-time data streams, learning how to listen to Firestore snapshot changes to deliver a truly reactive user interface.
              </p>
              <p>
                From a frontend perspective, my command over the Flutter framework matured significantly. I learned the nuances of component reusability, constructing dynamic widget trees that adapt flawlessly to varying screen dimensions. Managing a dual-sided marketplace taught me invaluable lessons in project organization and scope management.
              </p>
            </div>
          </GlassCard>
        </motion.section>

        {/* 15. Future Enhancements */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <h2 className="text-3xl font-bold text-white mb-6">15. Future Enhancements</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Online Payment Gateways",
              "AI Vehicle Recommendations",
              "AI Price Prediction",
              "Live Peer-to-Peer Chat",
              "KYC Vehicle & Driver Verification",
              "Google Maps Navigation Routing",
              "Loyalty & Referral Programs",
              "Offline Mode Support",
              "Analytics & Admin Dashboard"
            ].map(item => (
              <Badge key={item} className="px-4 py-2 text-sm bg-white/5 border-white/10 hover:border-rose-500/40">
                {item}
              </Badge>
            ))}
          </div>
        </motion.section>

        {/* 16. Final Reflection */}
        <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="p-10 md:p-14 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500" />
            <h2 className="text-3xl font-bold text-white mb-6">16. Final Reflection</h2>
            <div className="prose prose-invert prose-lg text-neutral-300 max-w-none leading-relaxed">
              <p>
                RentX stands as a testament to the power of modern cross-platform development. What began as an objective to streamline vehicle rentals evolved into a sophisticated, highly scalable marketplace ecosystem. The final outcome is a performant, visually striking mobile application that genuinely solves real-world logistical friction for both consumers and business operators.
              </p>
              <p>
                This project rigorously strengthened my software engineering foundations. It pushed me beyond crafting beautiful UIs, forcing me to architect secure data layers, manage asynchronous cloud integrations, and enforce robust state management architectures. RentX clearly demonstrates my capability to conceptualize, engineer, and deliver complex, production-ready applications from end to end.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
