"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Optional: Sync with other animation engines or logic if needed.
    // e.g., GSAP scrollTrigger hookup could go here.
    
    // Cleanup/destroy logic is handled automatically by ReactLenis,
    // but we can access the lenis instance via reference if we need to.
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      // Prevent scrolling conflicts, custom speed logic, or scroll-to anchor adjustments
      console.log("Lenis instantiated successfully:", lenis);
    }
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.2,
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: true, // Smooth touch scrolling
        touchMultiplier: 1.5,
        wheelMultiplier: 1.0,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
