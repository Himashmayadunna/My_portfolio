// ============================================================
// app/page.tsx — Main portfolio page
// Assembles all sections into a single-page layout
// ============================================================

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Challenges from "@/components/sections/Challenges";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed overlays */}
      <ScrollProgress />
      <Navbar />
      <AnimatedBackground />

      {/* Page content */}
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Challenges />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
