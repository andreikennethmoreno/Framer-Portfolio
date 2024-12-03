"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SubTitle from "../components/SubTitle";

interface ImageSectionProps {
  title: string;
  images: { src: string; alt: string; height: number; width: number }[];
  isOdd: boolean;
  projectId?: number;
}

export default function ProjectImgContainer({
  title,
  images,
  isOdd,
  projectId,
}: ImageSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(entry.intersectionRatio > 0);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`my-[20rem] transition-opacity duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className={`max-w-max ${isOdd ? "" : "ml-auto"}`}>
        <SubTitle
          title={title}
          className={`mb-[-1.4rem] ${isOdd ? "text-end" : "text-start"}`}
        />

        <div
          className={`flex ${
            isOdd ? "flex-row" : "flex-row-reverse"
          } justify-start space-x-1 ${isOdd ? "" : "space-x-reverse"}`}
        >
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                height={image.height}
                width={image.width}
                layout="intrinsic"
                className={`object-cover ${index === 1 ? "aspect-square" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
