import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: {
    default: "Kartik Singh Baghel | KSB Digital Studio",
    template: "%s | KSB Digital Studio",
  },
  description: "I build Spatial Ecosystems, not just websites. Full Stack Developer and 3D Web Designer.",
  keywords: [
    "KSB Digital Studio",
    "Kartik Singh Baghel",
    "3D Web Developer",
    "UI/UX Designer",
    "Web Design",
    "Graphic Design",
    "Spatial Ecosystems",
    "Next.js",
    "React",
    "Three.js"
  ],
  authors: {
    name: "Kartik Singh Baghel",
    url: "https://www.linkedin.com/in/kartiksinghbaghel",
  },
  creator: "Kartik Singh Baghel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartik-baghel.netlify.app",
    title: "Kartik Singh Baghel | KSB Digital Studio",
    description: "I build Spatial Ecosystems, not just websites. Full Stack Developer and 3D Web Designer.",
    siteName: "KSB Digital Studio",
    images: [
      {
        url: "https://kartik-baghel.netlify.app/assets/case_study_1_amul.jpg", // Fallback image for sharing
        width: 1200,
        height: 630,
        alt: "KSB Digital Studio Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Singh Baghel | KSB Digital Studio",
    description: "I build Spatial Ecosystems, not just websites. Full Stack Developer and 3D Web Designer.",
    images: ["https://kartik-baghel.netlify.app/assets/case_study_1_amul.jpg"],
    creator: "@kartiksinghbaghel", // Update if there's a specific twitter handle
  },
} as const;
