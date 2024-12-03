"use client";

import { useEffect, useRef } from "react";
import Title from "./Title";

type HeroLayoutProps = {
  heroTitle: string;
  heroSrcImg: string;
};

export default function HeroLayout({ heroTitle, heroSrcImg }: HeroLayoutProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number; // Declare a variable to store the frame ID

    const handleScroll = () => {
      if (!heroRef.current || !titleRef.current || !imageRef.current) return;

      const heroElement = heroRef.current;
      const imageElement = imageRef.current;
      const titleElement = titleRef.current;

      const scrollY = window.scrollY;
      const heroTop = heroElement.offsetTop;
      const heroBottom = heroTop + heroElement.offsetHeight;

      // Apply Parallax Effect: Update translateY for the background image
      const offset = (scrollY - heroTop) * 0.2; // Adjust parallax speed here
      imageElement.style.transform = `translateY(${offset}px)`;

      // Change title color dynamically
      const isInsideImage = scrollY >= heroTop && scrollY <= heroBottom;

      titleElement.style.color = isInsideImage ? "#FFFFFF" : "#031728"; // White within the image, original color otherwise
    };

    // Smooth scrolling effect with requestAnimationFrame
    const scrollHandler = () => {
      handleScroll();
      frameId = requestAnimationFrame(scrollHandler); // Save the frame ID to cancel it later
    };

    frameId = requestAnimationFrame(scrollHandler); // Initialize the scroll handler loop

    // Cleanup on component unmount
    return () => cancelAnimationFrame(frameId); // Pass the correct frame ID to cancel
  }, []);

  return (
    <>
      {/* Hero Header */}
      <div
        ref={titleRef}
        className="text-center sticky top-12 z-20"
        style={{ height: "50px" }}
      >
        <Title title={heroTitle} />
      </div>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="hero bg-base-100 min-h-screen relative overflow-hidden"
      >
        {/* Hero Image with Parallax Effect */}
        <div
          ref={imageRef}
          className="absolute bottom-0 w-full h-[80vh] lg:h-[65vh] sm:h-[80vh] md:h-[70vh] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroSrcImg})`,
            imageRendering: "pixelated",
            transition: "transform 0.1s ease-out", // Optional: for smoother parallax
          }}
        ></div>
      </div>
    </>
  );
}
