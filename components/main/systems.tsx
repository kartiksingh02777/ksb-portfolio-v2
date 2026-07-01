"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Cpu, Terminal, ArrowRight } from "lucide-react";

const developerProjects = [
  {
    id: 1,
    slug: "ksb-dashboard",
    src: "/assets/ksb_dashboard.png",
    title: "KSB Agency Command Center",
    category: "Fullstack Tool",
    icon: <Cpu className="text-purple-400" size={20} />,
    description: "A secure, local standalone dashboard with CRM tracking, automated leads kanban, and daily task management featuring offline LocalStorage persistence.",
    tech: ["Next.js 14", "Tailwind CSS", "LocalStorage"],
  },
  {
    id: 2,
    slug: "nishi-services",
    src: "/assets/nishi_services.png",
    title: "Nishi Services 3D Platform",
    category: "3D Interactive Frontend",
    icon: <Code2 className="text-blue-400" size={20} />,
    description: "An ultra-premium, dark-mode 3D web prototype built for a ₹150Cr+ Real Estate portfolio featuring interactive Three.js particle networks and GSAP animations.",
    tech: ["Three.js", "GSAP", "Next.js", "Vanta"],
  },
  {
    id: 3,
    slug: "wp-automation",
    src: "/assets/wp_automation.png",
    title: "WordPress Automation Engine",
    category: "Backend scripting",
    icon: <Terminal className="text-green-400" size={20} />,
    description: "A headless background posting agent that reads local data assets and automates formatted posts and schedulers directly via WordPress API endpoints.",
    tech: ["Python", "REST API", "Automation"],
  },
];

export const Systems = () => {
  return (
    <section id="systems" className="relative w-full py-20 px-6 md:px-20 z-[20] bg-black/40 backdrop-blur-md border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            SYSTEMS &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 drop-shadow-[0_2px_10px_rgba(168,85,247,0.3)]">
              AUTOMATION ENGINES
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Proprietary developer tools, automated content systems, and custom backend engines created by KSB Digital Studio.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {developerProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-2xl border border-white/10 bg-[#030014]/80 p-5 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/50 mb-5 border border-white/5">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1 flex items-center space-x-2 text-[10px] uppercase font-bold tracking-wider text-gray-300">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer / Actions */}
              <div className="mt-8 pt-5 border-t border-white/5 space-y-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] bg-white/5 text-gray-400 border border-white/5 px-2 py-0.5 rounded-md font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <Link href={`/projects/${project.slug}`} className="block">
                  <button className="w-full py-2.5 rounded-lg border border-purple-500/30 hover:border-purple-500 text-purple-300 hover:text-white text-xs font-semibold tracking-wide transition-all flex items-center justify-center space-x-1.5 group-hover:bg-purple-500/5">
                    <span>Inspect System</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
