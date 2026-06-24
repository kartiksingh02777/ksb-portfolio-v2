import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "BRAND IDENTITY",
    desc: "Logos, typography, color palettes, and comprehensive brand guidelines that tell your unique story.",
  },
  {
    id: "02",
    title: "UI/UX DESIGN",
    desc: "Intuitive user interfaces and immersive spatial web experiences optimized for modern browsers.",
  },
  {
    id: "03",
    title: "MOTION GRAPHICS",
    desc: "Dynamic animations, kinetic typography, and fluid video edits that capture attention instantly.",
  },
  {
    id: "04",
    title: "3D & WEBGL",
    desc: "Interactive 3D environments, tactile brutalism, and real-time shader rendering for the web.",
  },
  {
    id: "05",
    title: "SOCIAL MEDIA",
    desc: "Scroll-stopping post designs, creative ad campaigns, and full grid management strategies.",
  },
  {
    id: "06",
    title: "PRINT DESIGN",
    desc: "High-end luxury flyers, corporate summit posters, and elegant physical marketing materials.",
  },
];

export const WhatWeDo = () => {
  return (
    <section
      id="skills" // Matching the navbar link
      className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20] max-w-[1200px] mx-auto gap-10"
    >
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] drop-shadow-[0_2px_4px_rgba(168,85,247,0.4)] tracking-wider">
          WHAT WE DO
        </h2>
        <p className="text-gray-400 text-lg max-w-[600px]">
          Comprehensive creative solutions designed to scale your brand in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col gap-4 p-8 rounded-xl bg-[rgba(3,20,10,0.5)] border border-[rgba(16,185,129,0.38)] hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
          >
            <h3 className="text-xl font-bold text-white group-hover:text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] transition-colors">
              <span className="text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] mr-2">{service.id}.</span>
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
