import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Loader } from "@/components/main/loader";

export const viewport: Viewport = {
  themeColor: "#000501",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kartik Singh Baghel",
              url: "https://kartik-baghel.netlify.app",
              jobTitle: "UI/UX Designer & Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "KSB Digital Studio"
              },
              sameAs: [
                "https://www.linkedin.com/in/kartiksinghbaghel"
              ]
            })
          }}
        />
      </head>
      <body
        className={cn(
          "bg-[#000501] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <Loader />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
