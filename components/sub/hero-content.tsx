"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects to match old site
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-20 mt-64 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center overflow-hidden">
        
        <motion.div
          variants={slideInFromTop}
          className="flex flex-col gap-2 mt-20 font-bold text-white w-full h-auto"
        >
          {/* Massive KSB in Vibrant Purple */}
          <span 
            className="text-[200px] leading-[0.8] text-[#a855f7] font-extrabold tracking-tight mb-5"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.8), 8px 8px 15px rgba(168,85,247,0.4)" }}
          >
            KSB
          </span>

          <div className="flex flex-col items-center drop-shadow-lg">
            {/* DIGITAL slides left, White */}
            <motion.h1 
              style={{ x: xLeft }} 
              className="text-[120px] leading-none uppercase tracking-widest text-white"
            >
              DIGITAL
            </motion.h1>

            {/* STUDIO slides right, Vibrant Purple */}
            <motion.h1 
              className="text-[120px] leading-none uppercase tracking-widest text-[#a855f7]"
              style={{ x: xRight }}
            >
              STUDIO
            </motion.h1>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-2xl text-gray-400 mt-10 mx-auto max-w-[600px] text-center"
        >
          I build Spatial Ecosystems. <br /> Not just websites.
        </motion.p>
      </div>
    </motion.div>
  );
};
