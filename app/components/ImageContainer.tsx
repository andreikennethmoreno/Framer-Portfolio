import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type ImageContainerProps = {
  image: string; // URL of the image (can be a string, path, or imported)
  height?: number; // Height of the image
  width?: number; // Width of the image
  alt: string; // Alt text for the image
  layout: "intrinsic" | "responsive" | "fixed" | "fill"; // Layout type for Next.js Image
  className: string;
};

export default function ImageContainer({
  image,
  height,
  width,
  alt,
  layout,
  className,
}: ImageContainerProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
      initial={{ y: 0 }}
      animate={{ y: scrollY * 0.2 - 200 }} // Adjust parallax speed by changing multiplier
    >
      <Image
        src={image}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        className={className}
        priority
      />
    </motion.div>
  );
}
