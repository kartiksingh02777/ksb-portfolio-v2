import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// We duplicate the data here for simplicity, in a real app this would be fetched from a CMS or a separate data file
const caseStudies = [
  { 
    slug: "amul-milk",
    src: "/assets/case_study_1_amul.jpg", 
    title: "Amul Milk Creative Ad",
    role: "3D Animation & Branding",
    timeTaken: "2 Weeks",
    techStack: "Blender, Premiere Pro, Photoshop",
    description: "Conceptualized and animated a stunning 3D product showcase for Amul Milk, focusing on dynamic fluid simulation and vibrant lighting.",
    challenge: "The client wanted a refreshing take on their traditional milk packaging that appealed to a younger audience without losing brand identity.",
    solution: "We utilized 3D fluid simulations in Blender to create a hyper-realistic milk splash effect around the classic Amul carton. Combined with a modern, neon-infused lighting setup, it created a vibrant and energetic visual."
  },
  { 
    slug: "luxury-cafe",
    src: "/assets/case_study_2_cafe.jpg", 
    title: "Luxury Cafe UI Concept",
    role: "UI/UX Design & Frontend",
    timeTaken: "3 Weeks",
    techStack: "Figma, React, Tailwind CSS",
    description: "Designed a premium, high-end web experience for a luxury cafe, featuring smooth scroll animations and an interactive 3D menu.",
    challenge: "Creating a digital experience that mirrors the physical luxury and ambience of a high-end cafe, ensuring users feel the premium quality through the screen.",
    solution: "Implemented a dark-themed, minimalist UI with gold accents. Used Framer Motion for buttery smooth page transitions and integrated a WebGL canvas to show 3D renders of their signature dishes."
  },
  { 
    slug: "wedding-invites",
    src: "/assets/case_study_3_wedding.jpg", 
    title: "Digital Wedding Invites",
    role: "Graphic Design & Motion",
    timeTaken: "1 Week",
    techStack: "After Effects, Illustrator",
    description: "Created personalized, highly engaging digital wedding invitations with elegant typography and subtle motion graphics.",
    challenge: "Traditional paper invites are being replaced by digital ones, but they often lack the emotional weight and elegance of physical cards.",
    solution: "Designed elegant SVG typography and animated the elements using After Effects to create a 'revealing' motion that mimics opening a physical envelope, adding a touch of class to the digital medium."
  },
  { 
    slug: "watch-product",
    src: "/assets/case_study_4_product.jpg", 
    title: "Watch 3D Showcase",
    role: "3D Modeling & WebGL",
    timeTaken: "4 Weeks",
    techStack: "Three.js, React Three Fiber, Blender",
    description: "Built an interactive 3D watch configurator where users can change materials and lighting in real-time right in their browser.",
    challenge: "Allowing users to customize a luxury watch online without relying on pre-rendered images, ensuring high performance across devices.",
    solution: "Optimized a high-poly watch model in Blender and exported it to a GLTF format. Used React Three Fiber to render it in the browser, allowing users to swap band materials and dial colors seamlessly."
  },
  { 
    slug: "music-branding",
    src: "/assets/case_study_5_music.jpg", 
    title: "Music Festival Branding",
    role: "Brand Identity & Web Design",
    timeTaken: "2 Weeks",
    techStack: "Figma, Next.js, Framer Motion",
    description: "Developed a bold, energetic visual identity and a fast-performing ticketing website for an upcoming electronic music festival.",
    challenge: "The festival needed a brand that stood out in a crowded market, and a ticketing site capable of handling sudden traffic spikes.",
    solution: "Created a neon-heavy, cyberpunk-inspired visual identity. Built the website using Next.js for blazing fast static rendering, ensuring users could buy tickets without the site crashing during peak hours."
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find(s => s.slug === resolvedParams.slug);
  if (!study) return { title: "Not Found" };
  return {
    title: study.title,
    description: study.description,
  };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find(s => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#000501] text-white pt-32 pb-20 px-6 md:px-20 z-10 relative">
      <Link href="/#projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-12">
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Portfolio
      </Link>

      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            {study.title}
          </h1>
          <div className="flex flex-wrap gap-8 text-gray-400">
            <div>
              <span className="block text-sm uppercase tracking-widest text-purple-500 mb-1">Role</span>
              <span className="text-lg">{study.role}</span>
            </div>
            <div>
              <span className="block text-sm uppercase tracking-widest text-purple-500 mb-1">Timeline</span>
              <span className="text-lg">{study.timeTaken}</span>
            </div>
            <div>
              <span className="block text-sm uppercase tracking-widest text-purple-500 mb-1">Tech Stack</span>
              <span className="text-lg">{study.techStack}</span>
            </div>
          </div>
        </header>

        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-20 shadow-[0_0_50px_rgba(168,85,247,0.2)] border border-[rgba(168,85,247,0.3)]">
          <Image
            src={study.src}
            alt={study.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-300">The Challenge</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {study.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-emerald-300">The Solution</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>
        
        <div className="mt-32 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to build something similar?</h2>
          <Link href="mailto:kartiksinghbaghel@gmail.com">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Start a Project
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
