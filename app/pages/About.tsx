"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContentLayout from "../components/ContentLayout";
import ImageContainer from "../components/ImageContainer";
import SubTitle from "../components/SubTitle";
import aboutPic from "../../public/img/portfolio/aboutPic.jpg";

export default function About() {
  const [words, setWords] = useState<string[]>([]);
  
  useEffect(() => {
    const text = "art by 1041uuu.jp art by 1041uuu.jp art by 1041uuu.jp art by 1041uuu.jp art by 1041uuu.jp art by 1041uuu.jp art by 1041uuu.jp art by 1041uuu.jp art by 1041uuu.jp";
    // Split text into individual words
    setWords(text.split(" "));
  }, []);

  return (
    <>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex lg:flex-row flex-col justify-between items-center w-full">
          
          {/* Title Section */}
          <div className="lg:w-1/2 w-full p-6">
            <div className="relative w-full h-[400px] p-6">
              {/* "ABOUT ME" Text in Upper Left */}
              <SubTitle title={"ABOUT ME"} className="absolute top-0 left-0 font-bold z-10" />

              {/* Image in Bottom Right */}
              <div className="w-[22vw] h-[20vh] absolute top-[13.2vh] right-10 z-0">
                <ImageContainer
                  image={aboutPic.src}
                  alt={"A picture drei ken"}
                  height={400}
                  width={400}
                  layout="intrinsic"
                  className="object-cover"
                  topOffset={200}
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full pt-60 flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            {/* Words animate one by one */}
            <p className="font-bold text-4xl">
                {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    opacity: { delay: index * 0.2, duration: 0.5 },
                    }}
                    className="inline-block mr-4" // Added margin-right to create space
                >
                    {word}{" "}
                </motion.span>
                ))}
            </p>
            </motion.div>

          </div>
          
        </div>
      </div>
    </>
  );
}
