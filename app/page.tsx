// ============================================================
// app/page.tsx — Main portfolio page
// Assembles all sections into a single-page layout
// ============================================================

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Visual & Interactivity Overlays */}
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <AnimatedBackground />

      {/* Main Single Page Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Statistics />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
