import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SubTitle from "../components/SubTitle";

export default function TechStack() {
  const [scrollPos, setScrollPos] = useState(0);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY); // Track the scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
  }, []);

  return (
    <>  
      <div className="p-20">
        <SubTitle title={"TECH"} className="text-start" />

        <motion.div
          className="my-40 font-bold text-4xl whitespace-nowrap"
          style={{
            willChange: "transform",
          }}
          animate={{
            x: -scrollPos * 0.2, // Adjust scroll speed here
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        >
          / art by 1041uuu.jp / art by 1041uuu.jp / art by 1041uuu.jp / art by 1041uuu.jp / art by 1041uuu.jp / art by 1041uuu.jp / art by 1041uuu.jp /


        </motion.div>

      </div>
    </>
  );
}
