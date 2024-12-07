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
    let frameId: number;

    const handleScroll = () => {
      if (!heroRef.current || !titleRef.current || !imageRef.current) return;

      const heroElement = heroRef.current;
      const imageElement = imageRef.current;
      const titleElement = titleRef.current;

      const scrollY = window.scrollY;
      const heroTop = heroElement.offsetTop;
      const heroBottom = heroTop + heroElement.offsetHeight;

      // Calculate the threshold where the title color changes (1/4 height of the image)
      const imageHeight = imageElement.offsetHeight;
      const colorChangeThreshold = heroTop + imageHeight / 3;

      // Apply Parallax Effect
      const offset = (scrollY - heroTop) * 0.2;
      imageElement.style.transform = `translateY(${offset}px)`;

      // Change title color dynamically based on the threshold
      const isWithinThreshold = scrollY >= colorChangeThreshold && scrollY <= heroBottom;

      titleElement.style.color = isWithinThreshold ? "#FFFFFF" : "#031728";
    };

    const scrollHandler = () => {
      handleScroll();
      frameId = requestAnimationFrame(scrollHandler);
    };

    frameId = requestAnimationFrame(scrollHandler);

    return () => cancelAnimationFrame(frameId);
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
            transition: "transform 0.1s ease-out",
          }}
        ></div>
      </div>
    </>
  );
}
