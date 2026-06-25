"use client";
import React from "react";
import Image from "next/image";

export default function StorePage() {
  const products = [
    {
      id: 1,
      title: "Premium Agency Portfolio Template",
      price: "$19",
      desc: "A fully responsive, dark-mode HTML/CSS portfolio template designed for creative agencies.",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      features: ["✨ Figma File Included", "✨ Fully Responsive"],
      bestseller: true,
      link: "https://kartikbaghel.gumroad.com/"
    },
    {
      id: 2,
      title: "Social Media Master Kit 2026",
      price: "$15",
      desc: "30+ high-converting Instagram/Pinterest templates in PSD and Canva formats.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      features: ["✨ Canva & PSD", "✨ Drag & Drop"],
      bestseller: false,
      link: "https://kartikbaghel.gumroad.com/"
    },
    {
      id: 3,
      title: "Freelance Notion Workspace",
      price: "$9",
      desc: "The ultimate Notion system to track clients, manage invoices, and organize your freelance business.",
      img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=800&auto=format&fit=crop",
      features: ["✨ CRM Tracker", "✨ Invoice Generator"],
      bestseller: false,
      link: "https://kartikbaghel.gumroad.com/"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-[#000501] text-gray-200 pt-[100px] pb-[100px] flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-5 flex flex-col gap-16">
        
        <header className="text-center flex flex-col gap-6 items-center">
          <div className="inline-block px-4 py-1 border border-green-500 rounded-full text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] text-xs font-bold tracking-widest uppercase">
            PREMIUM DIGITAL ASSETS
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Elevate Your Workflow<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d8b4fe] drop-shadow-[0_2px_4px_rgba(168,85,247,0.4)]">
              With Pro Templates
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-[600px]">
            Curated design resources, UI kits, and templates built by KSB Studio to save you hundreds of hours.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <article key={product.id} className="flex flex-col bg-[rgba(3,20,10,0.37)] border border-[#10B98130] rounded-2xl overflow-hidden hover:border-green-500 transition-colors duration-300">
              <div className="relative w-full h-[250px] overflow-hidden">
                <Image 
                  src={product.img} 
                  alt={product.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {product.bestseller && (
                  <div className="absolute top-4 right-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col gap-4 flex-grow">
                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-xl font-bold text-white">{product.title}</h2>
                  <span className="text-2xl font-black text-[#c084fc] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)]">{product.price}</span>
                </div>
                <p className="text-sm text-gray-400">{product.desc}</p>
                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-gray-800">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs font-medium text-gray-300 tracking-wider uppercase">{feature}</span>
                  ))}
                </div>
                <button 
                  disabled
                  className="mt-4 w-full text-center py-3 rounded-lg border border-gray-600 text-gray-400 font-bold cursor-not-allowed bg-[rgba(20,20,20,0.5)]"
                >
                  Coming Soon 🚀
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
