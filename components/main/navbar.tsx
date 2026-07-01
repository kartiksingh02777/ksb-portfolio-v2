'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#0E612A]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="/"
          className="flex items-center"
        >
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300 text-xl tracking-widest">KSB</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-auto max-w-[900px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(16,185,129,0.38)] bg-[rgba(3,20,10,0.37)] mr-[15px] px-[40px] py-[10px] rounded-full text-gray-200 gap-8">
            {NAV_LINKS.map((link) => {
              const isHash = link.link.includes("#");
              return isHash ? (
                <a
                  key={link.title}
                  href={link.link}
                  className="cursor-pointer hover:text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] transition text-sm font-semibold tracking-wide"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.title}
                  href={link.link}
                  className="cursor-pointer hover:text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] transition text-sm font-semibold tracking-wide"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Icon (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          <Link
            href="https://wa.me/917000105029"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-8 w-8 hover:scale-110 transition-transform" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          â˜°
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#000501] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => {
              const isHash = link.link.includes("#");
              return isHash ? (
                <a
                  key={link.title}
                  href={link.link}
                  className="cursor-pointer hover:text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] transition text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.title}
                  href={link.link}
                  className="cursor-pointer hover:text-[#a855f7] drop-shadow-[0_2px_2px_rgba(168,85,247,0.5)] transition text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
