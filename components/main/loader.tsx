"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; 
      });
    }, 30);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling
      document.body.style.overflow = "auto";
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000501] overflow-hidden"
        >
          {/* Glowing KSB Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-7xl md:text-[150px] font-extrabold text-[#a855f7] tracking-widest drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          >
            KSB
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white tracking-[15px] uppercase text-sm mt-4 font-light opacity-70 ml-[15px]"
          >
            Digital Studio
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-[300px] h-[2px] bg-[rgba(255,255,255,0.1)] mt-16 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>

          {/* Percentage text */}
          <div className="mt-6 text-green-500 font-mono text-sm tracking-widest drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
