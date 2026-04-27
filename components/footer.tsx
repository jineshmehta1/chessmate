"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  ArrowUp,
  MessageCircle,
  Trophy,
  MapPin,
  Star,
  Target,
  Zap,
  Shield,
  Sword,
  Crown,
  ChevronRight,
  Heart,
  Youtube,
  Twitter
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const QUICK_LINKS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Achievements", href: "/achievements" },
    { name: "Puzzles", href: "/puzzles" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="relative bg-[#000000] text-white pt-20 md:pt-32 pb-12 overflow-hidden selection:bg-[#EAB308] selection:text-black border-t-[12px] border-black">
      
      {/* --- BACKGROUND ARCHITECTURAL DECAL --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-[1000] text-white/[0.03] leading-none select-none -z-0 tracking-tighter uppercase italic pointer-events-none">
        MATE
      </div>

      {/* Floating Chess Decals */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-10 right-[5%] opacity-10 text-[#EAB308] pointer-events-none">
        <Target className="w-24 h-24 md:w-40 md:h-40" />
      </motion.div>
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/3 left-[2%] opacity-10 text-white pointer-events-none">
        <Crown className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-[#EAB308] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                {/* Knight Icon Representation */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 22C8 22 3 20 3 14C3 12 4.5 10.5 5.5 9C4 8 4 6 5 4C6 2.5 8 2 10 3C12 4 13 6 13 8C13 10 12 11.5 11 12.5C13 14 16 15 19 15C20 15 21 16 21 17C21 19 19 21 15 22H8Z" fill="black"/>
                </svg>
              </div>
              <div className="leading-none">
                <h3 className="text-xl md:text-2xl font-[1000] uppercase tracking-tighter">Chess<span className="text-[#EAB308]">Mate</span></h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">Elite Academy</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm font-bold leading-relaxed max-w-xs">
              World-class chess coaching for aspiring grandmasters. Master the art of the move with FIDE certified trainers.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white flex items-center justify-center text-black border-2 border-black hover:bg-[#EAB308] transition-all">
                  <Icon className="w-5 h-5" fill="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <Star className="text-[#EAB308] w-5 h-5 fill-[#EAB308]" /> Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="group flex items-center gap-2 text-gray-500 hover:text-[#EAB308] font-black uppercase text-[11px] tracking-[0.2em] transition-all">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ACADEMY SUPPORT */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <Shield className="text-[#EAB308] w-5 h-5" /> Support
            </h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-white/10 flex items-center justify-center group-hover:bg-[#EAB308] group-hover:text-black transition-all">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase text-gray-500">Call Us</p>
                    <span className="text-xs md:text-sm font-black tracking-widest">+91 79907 75581</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-white/10 flex items-center justify-center group-hover:bg-[#EAB308] group-hover:text-black transition-all">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase text-gray-500">Email Us</p>
                    <span className="text-xs md:text-sm font-black tracking-widest uppercase">contact@thechessmate.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* HEADQUARTERS CARD */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <MapPin className="text-[#EAB308] w-5 h-5" /> Branches
            </h4>
            <div className="p-6 bg-white/5 border-2 border-[#EAB308] shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]">
              <p className="text-xs font-bold leading-relaxed text-gray-300 uppercase tracking-widest">
                Operating across <br/>
                Digital Platforms <br/>
                & Premium Local Hubs
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#EAB308] font-black text-[10px] uppercase tracking-[0.2em]">
                <Sword className="w-4 h-4" /> Grandmaster Arena
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT AREA */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Chess Mate Academy. All rights reserved.
            </p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
              Elite Standard Training <span className="mx-2 text-[#EAB308]">|</span> FIDE Focussed
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-8">
                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-700">
              Designed with <Heart className="inline text-red-600 fill-red-600 w-3 h-3 mx-1" /> for Champions
            </p>
          </div>
        </div>
      </div>

      {/* --- FLOATING ACTION UI (BRUTALIST STYLE) --- */}
      <a
         href="https://wa.me/917990775581"
         target="_blank"
         className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95 group"
      >
         <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" fill="currentColor" />
      </a>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-[#EAB308] text-black border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none active:scale-95 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
      >
        <ArrowUp className="w-6 h-6 md:w-7 md:h-7" strokeWidth={4} />
      </button>

    </footer>
  );
}