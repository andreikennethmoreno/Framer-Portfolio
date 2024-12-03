"use client";

import NavBar from '../NavBar';
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";




export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smoothness
      touchMultiplier: 2,
      infinite: false,
    });

    // Animation frame loop to run smooth scrolling
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the smooth scroll animation loop
    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => lenis.destroy();
  }, []);
  
  return (
    <div>
      <NavBar />
      <div className="main-content">
        {children} {/* This will render the project content */}
      </div>
    </div>
  );
}
