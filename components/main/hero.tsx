import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 hue-rotate-[210deg] [-webkit-mask-image:radial-gradient(50%_50%_at_50%_50%,#000_20%,transparent_80%)] [mask-image:radial-gradient(50%_50%_at_50%_50%,#000_20%,transparent_80%)]"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
