"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  { id: 1, src: "/assets/case_study_1_amul.jpg", alt: "Amul Milk Case Study" },
  { id: 2, src: "/assets/case_study_2_cafe.jpg", alt: "Cafe Branding Case Study" },
  { id: 3, src: "/assets/case_study_3_wedding.jpg", alt: "Wedding Invite Case Study" },
  { id: 4, src: "/assets/case_study_4_product.jpg", alt: "Watch Product Case Study" },
  { id: 5, src: "/assets/case_study_5_music.jpg", alt: "Music Branding Case Study" },
];

export const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Using -60% so it scrolls slower. Container is taller to give more scroll time.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative h-[400vh] w-full z-[20]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-20 items-center w-max">
          
          {/* Slide 1: Intro Title */}
          <div className="flex-shrink-0 w-[500px] text-left pr-10 flex flex-col justify-center">
            <h2 className="text-6xl font-bold text-white tracking-widest leading-tight drop-shadow-lg">
              SELECTED<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] drop-shadow-[0_2px_4px_rgba(168,85,247,0.4)]">
                CASE STUDIES
              </span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg max-w-[400px]">
              Scroll down to explore the visual identity, art direction, and design thinking projects of KSB Digital Studio.
            </p>
          </div>

          {/* Slide 2-6: Project Images */}
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative w-[700px] aspect-video rounded-xl overflow-hidden border border-[rgba(16,185,129,0.38)] group flex-shrink-0 transition-all duration-500 hover:-translate-y-4 hover:rotate-1 hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] perspective-1000 bg-black/40"
            >
              <Image
                src={study.src}
                alt={study.alt}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-2"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
