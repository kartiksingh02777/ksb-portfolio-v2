import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-150px] left-0 w-full h-full object-cover -z-20 hue-rotate-[210deg] mix-blend-screen [-webkit-mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_60%)] [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_60%)]"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
