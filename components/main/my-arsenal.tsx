import React from "react";

export const MyArsenal = () => {
  return (
    <section className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20] max-w-[1000px] mx-auto gap-10">
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] drop-shadow-[0_2px_4px_rgba(168,85,247,0.4)] tracking-wider">
          MY ARSENAL
        </h2>
        <p className="text-gray-400 text-lg max-w-[600px]">
          Advanced tools & disciplines I use to craft digital experiences.
        </p>
      </div>

      <div className="w-full flex flex-col gap-8 mt-10">
        
        {/* Progress Bar 1 */}
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between items-center text-white text-lg tracking-wide font-semibold">
            <span>Photoshop & Illustrator</span>
            <span className="text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)]">95%</span>
          </div>
          <div className="w-full h-3 bg-[rgba(3,20,10,0.5)] rounded-full border border-[rgba(16,185,129,0.2)] overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] drop-shadow-[0_2px_4px_rgba(168,85,247,0.4)] rounded-full w-[95%]"></div>
          </div>
        </div>

        {/* Progress Bar 2 */}
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between items-center text-white text-lg tracking-wide font-semibold">
            <span>Figma & Web Design</span>
            <span className="text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)]">88%</span>
          </div>
          <div className="w-full h-3 bg-[rgba(3,20,10,0.5)] rounded-full border border-[rgba(16,185,129,0.2)] overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] drop-shadow-[0_2px_4px_rgba(168,85,247,0.4)] rounded-full w-[88%]"></div>
          </div>
        </div>

        {/* Progress Bar 3 */}
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between items-center text-white text-lg tracking-wide font-semibold">
            <span>After Effects & Premiere Pro</span>
            <span className="text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)]">80%</span>
          </div>
          <div className="w-full h-3 bg-[rgba(3,20,10,0.5)] rounded-full border border-[rgba(16,185,129,0.2)] overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] drop-shadow-[0_2px_4px_rgba(168,85,247,0.4)] rounded-full w-[80%]"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
