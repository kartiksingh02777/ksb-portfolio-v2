import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { WhoIAm } from "@/components/main/who-i-am";
import { WhatWeDo } from "@/components/main/what-we-do";
import { MyArsenal } from "@/components/main/my-arsenal";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <WhoIAm />
        <Skills />
        <Encryption />
        <WhatWeDo />
        <Projects />
        <MyArsenal />
      </div>
    </main>
  );
}
