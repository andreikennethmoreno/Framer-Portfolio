"use client";

import { useEffect, useRef } from "react";
import SubTitle from "../components/SubTitle";
import Image from "next/image";
import heroImg from "../../public/img/portfolio/pond.gif";
import insta from "../../public/img/portfolio/instagram.svg";

export default function Contact() {
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;

    const handleScroll = () => {
      if (!heroImageRef.current) return;

      const scrollY = window.scrollY;
      const heroImageElement = heroImageRef.current;
      const heroOffsetTop = heroImageElement.offsetTop;
      
      // Calculate the parallax offset
      const offset = (scrollY - heroOffsetTop) * 0.2; // Adjust speed here
      heroImageElement.style.transform = `translateY(${offset}px)`;
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
      <div className="p-20">
        <SubTitle title={"LET'S TALK"} className="text-center" />
      </div>

      {/* Hero Section with Parallax Effect */}
      <div
        ref={heroImageRef}
        className="relative bottom-0 w-full h-80 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImg.src})`,
          imageRendering: "pixelated",
        }}
      >
        {/* Instagram Icons */}
        <div className="absolute left-0 w-full mt-10 flex justify-center items-center space-x-4">
          {[...Array(3)].map((_, index) => (
            <Image
              key={index}
              src={insta}
              alt="Instagram Image"
              height={50}
              width={50}
              objectFit="cover"
              priority
            />
          ))}
        </div>
      </div>
    </>
  );
}
