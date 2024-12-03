"use client";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import ContentLayout from "../components/ContentLayout";
import TechStack from "./TechStack";
import Contact from "./Contact";
import ProjectList from "./projects/page";
import Lenis from "@studio-freight/lenis";

export default function App() {
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
    <>
      <NavBar />
      <Hero />
      <ContentLayout content={
        <>
          <About />
          <ProjectList />
          <TechStack />
          <Contact />
        </>
      } />
    </>
  );
}
