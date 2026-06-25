"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  { 
    id: 1, 
    slug: "amul-milk",
    src: "/assets/case_study_1_amul.jpg", 
    title: "Amul Milk Creative Ad",
    role: "3D Animation & Branding",
    timeTaken: "2 Weeks",
    techStack: "Blender, Premiere Pro, Photoshop",
    description: "Conceptualized and animated a stunning 3D product showcase for Amul Milk, focusing on dynamic fluid simulation and vibrant lighting."
  },
  { 
    id: 2, 
    slug: "luxury-cafe",
    src: "/assets/case_study_2_cafe.jpg", 
    title: "Luxury Cafe UI Concept",
    role: "UI/UX Design & Frontend",
    timeTaken: "3 Weeks",
    techStack: "Figma, React, Tailwind CSS",
    description: "Designed a premium, high-end web experience for a luxury cafe, featuring smooth scroll animations and an interactive 3D menu."
  },
  { 
    id: 3, 
    slug: "wedding-invites",
    src: "/assets/case_study_3_wedding.jpg", 
    title: "Digital Wedding Invites",
    role: "Graphic Design & Motion",
    timeTaken: "1 Week",
    techStack: "After Effects, Illustrator",
    description: "Created personalized, highly engaging digital wedding invitations with elegant typography and subtle motion graphics."
  },
  { 
    id: 4, 
    slug: "watch-product",
    src: "/assets/case_study_4_product.jpg", 
    title: "Watch 3D Showcase",
    role: "3D Modeling & WebGL",
    timeTaken: "4 Weeks",
    techStack: "Three.js, React Three Fiber, Blender",
    description: "Built an interactive 3D watch configurator where users can change materials and lighting in real-time right in their browser."
  },
  { 
    id: 5, 
    slug: "music-branding",
    src: "/assets/case_study_5_music.jpg", 
    title: "Music Festival Branding",
    role: "Brand Identity & Web Design",
    timeTaken: "2 Weeks",
    techStack: "Figma, Next.js, Framer Motion",
    description: "Developed a bold, energetic visual identity and a fast-performing ticketing website for an upcoming electronic music festival."
  },
];

export const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Using -75% since the cards are much wider now, we need more scroll distance
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative h-[500vh] w-full z-[20]"
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

          {/* Slide 2-6: Project Detail Cards */}
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative w-[900px] h-[500px] rounded-2xl overflow-hidden border border-[rgba(168,85,247,0.3)] bg-[#030014] flex flex-row shadow-[0_0_30px_rgba(168,85,247,0.15)] flex-shrink-0"
            >
              {/* Left Side: Image */}
              <div className="w-[55%] relative h-full bg-black">
                <Image
                  src={study.src}
                  alt={study.title}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Right Side: Details */}
              <div className="w-[45%] h-full flex flex-col justify-between p-8 bg-gradient-to-br from-[#030014] to-[#0a0026]">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{study.title}</h3>
                  <h4 className="text-lg text-purple-400 mb-6 font-medium tracking-wide">{study.role}</h4>
                  
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {study.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest w-24">Timeline</span>
                      <span className="text-sm text-gray-200">{study.timeTaken}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest w-24">Tech Stack</span>
                      <span className="text-sm text-gray-200">{study.techStack}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href={`/projects/${study.slug}`}>
                    <button className="px-6 py-3 rounded-full bg-transparent border border-purple-500 text-purple-300 font-medium hover:bg-purple-500/20 hover:text-white transition-colors duration-300">
                      View Full Case Study
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
