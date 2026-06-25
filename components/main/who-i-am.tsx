import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const WhoIAm = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col md:flex-row items-center justify-center px-20 mt-40 w-full z-[20] max-w-[1200px] mx-auto gap-20"
    >
      {/* Left: Bio */}
      <div className="flex-1 flex flex-col gap-5 justify-center text-start">
        <div className="py-[8px] px-[15px] border border-[#10B981] rounded-full w-fit opacity-[0.9]">
          <h1 className="text-[13px] text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] tracking-widest font-bold">WHO I AM</h1>
        </div>

        <div className="flex flex-col gap-2 text-6xl font-bold text-white tracking-wide drop-shadow-md">
          <span style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>Kartik Singh</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] drop-shadow-[0_2px_4px_rgba(168,85,247,0.4)] pb-4">
            Baghel
          </span>
        </div>

        <p className="text-lg text-gray-400 my-2 max-w-[600px] leading-relaxed">
          Founder &amp; Creative Director of <strong className="text-white">KSB Digital Studio</strong> - a one-man powerhouse based in India. I design premium digital identities that don&apos;t just look good - they <em className="text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] not-italic font-semibold">convert</em>.
        </p>

        <p className="text-lg text-gray-400 my-2 max-w-[600px] leading-relaxed">
          From high-end brand systems and luxury print design to immersive WebGL web experiences, every pixel I craft is intentional, strategic, and built to leave a mark.
        </p>

        <a
          href="https://wa.me/917000105029"
          target="_blank"
          rel="noreferrer noopener"
          className="py-3 px-6 mt-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px] font-semibold tracking-wider hover:bg-green-600 transition"
        >
          Let&apos;s Work Together &rarr;
        </a>
      </div>

      {/* Right: Stats & Tools */}
      <div className="flex-1 w-full flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold text-white">
              50<span className="text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)]">+</span>
            </span>
            <span className="text-gray-400 uppercase tracking-widest text-sm">Projects Delivered</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold text-white">
              3<span className="text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)]">+</span>
            </span>
            <span className="text-gray-400 uppercase tracking-widest text-sm">Years Experience</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold text-white">
              30<span className="text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)]">+</span>
            </span>
            <span className="text-gray-400 uppercase tracking-widest text-sm">Happy Clients</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold text-white">6</span>
            <span className="text-gray-400 uppercase tracking-widest text-sm">Core Disciplines</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {[
            "Figma",
            "Photoshop",
            "Illustrator",
            "After Effects",
            "Premiere Pro",
            "Three.js",
            "GSAP",
            "Blender",
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-md bg-[rgba(3,20,10,0.5)] border border-[rgba(16,185,129,0.38)] text-gray-200 text-sm tracking-wider"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
