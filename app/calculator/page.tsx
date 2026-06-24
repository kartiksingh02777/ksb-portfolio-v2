"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CalculatorPage() {
  const [total, setTotal] = useState(0);
  const [displayedTotal, setDisplayedTotal] = useState(0);
  const [selectedWeb, setSelectedWeb] = useState(0);
  const [selectedGraphic, setSelectedGraphic] = useState<number[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<number[]>([]);
  const [selectedMarketing, setSelectedMarketing] = useState<number[]>([]);

  // Smooth price animation
  useEffect(() => {
    if (displayedTotal === total) return;
    
    const increment = total > displayedTotal ? 1 : -1;
    const diff = Math.abs(total - displayedTotal);
    const step = Math.max(1, Math.floor(diff / 20));

    const timer = setTimeout(() => {
      setDisplayedTotal(prev => {
        const next = prev + (increment * step);
        if ((increment > 0 && next >= total) || (increment < 0 && next <= total)) {
          return total;
        }
        return next;
      });
    }, 15);

    return () => clearTimeout(timer);
  }, [total, displayedTotal]);

  useEffect(() => {
    let newTotal = selectedWeb;
    newTotal += selectedGraphic.reduce((a, b) => a + b, 0);
    newTotal += selectedVideo.reduce((a, b) => a + b, 0);
    newTotal += selectedMarketing.reduce((a, b) => a + b, 0);
    setTotal(newTotal);
  }, [selectedWeb, selectedGraphic, selectedVideo, selectedMarketing]);

  const toggleCheckbox = (value: number, state: number[], setter: React.Dispatch<React.SetStateAction<number[]>>) => {
    if (state.includes(value)) {
      setter(state.filter(v => v !== value));
    } else {
      setter([...state, value]);
    }
  };

  const getSelectedServicesText = () => {
    let services = [];
    if (selectedWeb === 299) services.push("Landing Page");
    if (selectedWeb === 599) services.push("Corporate Website");
    if (selectedWeb === 899) services.push("E-Commerce Store");

    if (selectedGraphic.includes(149)) services.push("Logo & Branding Kit");
    if (selectedGraphic.includes(49)) services.push("Event Poster / Flyer");
    if (selectedGraphic.includes(199)) services.push("Social Media Kit");

    if (selectedVideo.includes(49)) services.push("Reel / TikTok Edit");
    if (selectedVideo.includes(149)) services.push("YouTube Video Edit");

    if (selectedMarketing.includes(399)) services.push("Social Media Management");
    if (selectedMarketing.includes(249)) services.push("SEO Setup");

    return services;
  };

  const submitProject = () => {
    if (total === 0) {
      alert("Please select at least one service to start your project!");
      return;
    }
    const services = getSelectedServicesText();
    const message = `Hi KSB Studio! I'm interested in starting a project. My estimated budget is $${total} for the following services: \n- ${services.join('\n- ')}`;
    const whatsappLink = `https://wa.me/917000105029?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <main className="min-h-screen w-full bg-[#000501] text-gray-200 pt-[100px] pb-[100px] flex flex-col items-center">
      <div className="max-w-[800px] w-full px-5 flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4">
          <div className="inline-block px-4 py-1 border border-green-500 rounded-full text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] text-xs font-bold tracking-widest uppercase mx-auto">
            Estimate Your Project
          </div>
          <h1 className="text-5xl font-extrabold text-white">KSB Digital Studio</h1>
          <p className="text-gray-400 text-lg">Select the services you need and instantly get a premium project estimate.</p>
        </div>

        <div className="flex flex-col gap-10">
          {/* Web Development Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white border-b border-[#10B98130] pb-2">ðŸŒ Web Development</h2>
            <div className="flex flex-col gap-3">
              {[
                { val: 299, title: "Landing Page", desc: "High-converting single page" },
                { val: 599, title: "Corporate Website", desc: "Multi-page professional site" },
                { val: 899, title: "E-Commerce Store", desc: "Full online store setup" }
              ].map(opt => (
                <label key={opt.val} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${selectedWeb === opt.val ? 'border-green-500 bg-[rgba(16,185,129,0.1)]' : 'border-gray-800 bg-[rgba(0,0,0,0.3)] hover:border-gray-600'}`}>
                  <div className="flex items-center gap-4">
                    <input type="radio" name="web" value={opt.val} checked={selectedWeb === opt.val} onChange={() => setSelectedWeb(opt.val)} className="w-5 h-5 accent-green-500" />
                    <div className="flex flex-col">
                      <span className="font-bold text-white">{opt.title}</span>
                      <span className="text-sm text-gray-400">{opt.desc}</span>
                    </div>
                  </div>
                  <span className="text-[#c084fc] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] font-bold">+${opt.val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Graphic Design Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white border-b border-[#10B98130] pb-2">ðŸŽ¨ Graphic Design</h2>
            <div className="flex flex-col gap-3">
              {[
                { val: 149, title: "Logo & Branding Kit", desc: "Premium logo, fonts, & colors" },
                { val: 49, title: "Event Poster / Flyer", desc: "High-end promotional design" },
                { val: 199, title: "Social Media Kit", desc: "10 Custom Posts & Stories" }
              ].map(opt => (
                <label key={opt.val} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${selectedGraphic.includes(opt.val) ? 'border-green-500 bg-[rgba(16,185,129,0.1)]' : 'border-gray-800 bg-[rgba(0,0,0,0.3)] hover:border-gray-600'}`}>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" checked={selectedGraphic.includes(opt.val)} onChange={() => toggleCheckbox(opt.val, selectedGraphic, setSelectedGraphic)} className="w-5 h-5 accent-green-500" />
                    <div className="flex flex-col">
                      <span className="font-bold text-white">{opt.title}</span>
                      <span className="text-sm text-gray-400">{opt.desc}</span>
                    </div>
                  </div>
                  <span className="text-[#c084fc] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] font-bold">+${opt.val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Video Editing Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white border-b border-[#10B98130] pb-2">ðŸŽ¬ Video Editing</h2>
            <div className="flex flex-col gap-3">
              {[
                { val: 49, title: "Reel / TikTok Edit", desc: "Fast-paced, trendy edits (per video)" },
                { val: 149, title: "YouTube Video Edit", desc: "Up to 10 mins professional editing" }
              ].map(opt => (
                <label key={opt.val} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${selectedVideo.includes(opt.val) ? 'border-green-500 bg-[rgba(16,185,129,0.1)]' : 'border-gray-800 bg-[rgba(0,0,0,0.3)] hover:border-gray-600'}`}>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" checked={selectedVideo.includes(opt.val)} onChange={() => toggleCheckbox(opt.val, selectedVideo, setSelectedVideo)} className="w-5 h-5 accent-green-500" />
                    <div className="flex flex-col">
                      <span className="font-bold text-white">{opt.title}</span>
                      <span className="text-sm text-gray-400">{opt.desc}</span>
                    </div>
                  </div>
                  <span className="text-[#c084fc] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] font-bold">+${opt.val}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Marketing Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white border-b border-[#10B98130] pb-2">ðŸš€ Digital Marketing</h2>
            <div className="flex flex-col gap-3">
              {[
                { val: 399, title: "Social Media Management", desc: "Monthly handling of 2 platforms" },
                { val: 249, title: "SEO Setup", desc: "On-page optimization & analytics" }
              ].map(opt => (
                <label key={opt.val} className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${selectedMarketing.includes(opt.val) ? 'border-green-500 bg-[rgba(16,185,129,0.1)]' : 'border-gray-800 bg-[rgba(0,0,0,0.3)] hover:border-gray-600'}`}>
                  <div className="flex items-center gap-4">
                    <input type="checkbox" checked={selectedMarketing.includes(opt.val)} onChange={() => toggleCheckbox(opt.val, selectedMarketing, setSelectedMarketing)} className="w-5 h-5 accent-green-500" />
                    <div className="flex flex-col">
                      <span className="font-bold text-white">{opt.title}</span>
                      <span className="text-sm text-gray-400">{opt.desc}</span>
                    </div>
                  </div>
                  <span className="text-[#c084fc] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] font-bold">+${opt.val}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Footer for Total */}
        <div className="fixed bottom-0 left-0 w-full bg-[rgba(0,5,1,0.9)] backdrop-blur-md border-t border-[#10B98140] p-5 flex items-center justify-between md:px-20 z-50">
          <div className="flex flex-col">
            <p className="text-gray-400 uppercase tracking-widest text-sm">Estimated Total</p>
            <h2 className="text-4xl font-bold text-white">${displayedTotal}</h2>
          </div>
          <button 
            onClick={submitProject}
            className="button-primary px-8 py-4 rounded-full font-bold text-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Start Your Project â†—
          </button>
        </div>
      </div>
    </main>
  );
}
