"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileScreen = window.innerWidth <= 1024;
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(isMobileScreen || isTouchDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.1,
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.5,
        wheelMultiplier: 1.0,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
