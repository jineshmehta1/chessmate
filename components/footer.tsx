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
  Timer,
  ChevronRight,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-black text-white pt-16 md:pt-24 pb-10 overflow-hidden font-sans selection:bg-yellow-400 selection:text-black border-t-8 border-black">
      
      {/* --- BACKGROUND DOODLES --- */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-10 right-[5%] opacity-10 md:opacity-20 text-yellow-400 pointer-events-none">
        <Target className="w-20 h-20 md:w-32 md:h-32" strokeWidth={1} />
      </motion.div>
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-40 left-[2%] opacity-10 text-white pointer-events-none">
        <Crown className="w-14 h-14 md:w-20 md:h-20" strokeWidth={1} />
      </motion.div>
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-40 right-[15%] opacity-10 text-yellow-400 pointer-events-none">
        <Zap className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
      </motion.div>
      <div className="absolute top-1/2 left-[20%] opacity-5 pointer-events-none">
        <Timer className="w-24 h-24 md:w-40 md:h-40" strokeWidth={1} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          
          {/* BRAND COLUMN */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-400 border-4 border-white rounded-2xl flex items-center justify-center rotate-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                <Trophy className="text-black w-7 h-7 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black uppercase italic leading-none">Star Chess<br/>Academy</h3>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-yellow-400 mt-1">Learn - play - Think smart</p>
              </div>
            </div>

            <p className="text-gray-400 text-xs md:text-sm font-bold leading-relaxed max-w-xs">
              Empowering the next generation of Grandmasters through strategic art and tactical precision.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-white rounded-xl flex items-center justify-center text-black hover:bg-yellow-400 hover:translate-y-[-4px] transition-all shadow-[4px_4px_0px_0px_rgba(253,224,71,1)]">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMN */}
          <div className="lg:pl-8">
            <h4 className="text-base md:text-lg font-black uppercase italic mb-6 md:mb-8 flex items-center gap-2">
              <Star className="text-yellow-400 w-5 h-5" fill="currentColor" /> Useful Links
            </h4>
            <ul className="space-y-4">
              {['Curriculum', 'About Us', 'Contact', 'Achievements'].map((link) => (
                <li key={link}>
                  <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-yellow-400 font-bold uppercase text-[10px] md:text-xs tracking-widest transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ACADEMY CONTACT */}
          <div>
            <h4 className="text-base md:text-lg font-black uppercase italic mb-6 md:mb-8 flex items-center gap-2">
              <Shield className="text-yellow-400 w-5 h-5" /> Academy
            </h4>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-bold">+91-8056082286</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-bold break-all">info@starchess.in</span>
              </div>
            </div>
          </div>

          {/* HEADQUARTERS */}
          <div>
            <h4 className="text-base md:text-lg font-black uppercase italic mb-6 md:mb-8 flex items-center gap-2">
              <MapPin className="text-yellow-400 w-5 h-5" /> Headquarters
            </h4>
            <div className="p-6 bg-[#111] border-[3px] md:border-4 border-yellow-400 rounded-[1.5rem] md:rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)]">
              <p className="text-[11px] md:text-xs font-bold leading-relaxed text-gray-300 uppercase tracking-tight">
                Thazhambur, <br/>Chennai,<br/> Tamil Nadu 603302
              </p>
              <div className="mt-4 flex items-center gap-2 text-yellow-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest">
                <Sword className="w-3.5 h-3.5 md:w-4 md:h-4" /> Battle Ground
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Star Chess Academy. All rights reserved.
            </p>
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-2 text-gray-400">
              Designed with <Heart className="inline text-red-500 fill-red-500 w-2.5 h-2.5" /> by{" "}
              <a href="https://wa.me/917851988964" target="_blank" className="text-white hover:text-yellow-400 underline decoration-yellow-400/30">Jinesh Mehta</a>
            </p>
          </div>
          
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white">Privacy</a>
            <a href="#" className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white">Terms</a>
          </div>
        </div>
      </div>

      {/* FLOATING ACTION BUTTONS */}
      <a
         href="https://wa.me/918056082286"
         target="_blank"
         className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-3.5 md:p-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-90"
      >
         <MessageCircle className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" />
      </a>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3.5 md:p-4 bg-yellow-400 text-black rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:shadow-none active:scale-90 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <ArrowUp className="w-6 h-6 md:w-7 md:h-7" strokeWidth={4} />
      </button>

    </footer>
  );
}