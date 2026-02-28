"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Brain, 
  Target, 
  Star, 
  Quote, 
  Zap, 
  Award,
  ShieldCheck,
  MousePointer2,
  LayoutDashboard,
  Settings
} from "lucide-react";

export default function TeamSection() {
  const highlights = [
    { label: "Experience", text: "12+ Years of professional chess coaching", icon: <Star className="w-5 h-5 md:w-6 md:h-6" /> },
    { label: "Event Lead", text: "Organized multiple online & offline tournaments", icon: <LayoutDashboard className="w-5 h-5 md:w-6 md:h-6" /> },
    { label: "Mentorship", text: "Guided students to state-level success", icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" /> },
    { label: "Specialist", text: "Expert in tactical training & practical play", icon: <Target className="w-5 h-5 md:w-6 md:h-6" /> },
    { label: "Framework", text: "Focused on disciplined and structured improvement", icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" /> },
    { label: "Modern Tools", text: "Using AI & latest tech for deep game analysis", icon: <Zap className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  const approach = [
    { title: "Practical Play", icon: <MousePointer2 className="w-4 h-4 md:w-5 md:h-5"/> },
    { title: "Positional Mastery", icon: <Brain className="w-4 h-4 md:w-5 md:h-5"/> },
    { title: "Modern Tools", icon: <Settings className="w-4 h-4 md:w-5 md:h-5"/> },
    { title: "Personal Mentorship", icon: <Award className="w-4 h-4 md:w-5 md:h-5"/> }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white font-sans overflow-hidden selection:bg-yellow-400 border-t-8 border-black">
      
      {/* Ghost Background Text - Responsive sizing */}
      <div className="absolute top-20 left-[-5%] text-[6rem] md:text-[20rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic opacity-50 md:opacity-100">
        MASTER
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT COLUMN: PROFILE --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative w-full aspect-[3/4] max-w-[400px] md:max-w-[450px] mx-auto">
              
              {/* Main Image Frame */}
              <div className="absolute inset-0 border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] bg-gray-200 group">
                <Image 
                  src="/raghav.jpeg" 
                  alt="Raghava M" 
                  fill
                  className="object-cover group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                {/* Image Overlay Label */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="bg-yellow-400 text-black px-3 md:px-4 py-1 border-2 border-black font-black uppercase italic text-[10px] md:text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        The Founder
                    </span>
                </div>
              </div>

              {/* Floating "12+ Yrs" Sticker */}
              <motion.div 
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-black text-white border-[3px] md:border-4 border-yellow-400 p-4 md:p-6 rounded-full shadow-xl z-20 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32"
              >
                <p className="text-xl md:text-3xl font-black leading-none italic">12+</p>
                <p className="text-[7px] md:text-[9px] font-black uppercase text-center mt-1 tracking-widest text-yellow-400">Years<br/>Expertise</p>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <div className="lg:col-span-7 pt-4 text-center lg:text-left">
            
            {/* HEADING - Responsive logic 2xl to 5xl */}
            <div className="mb-10 md:mb-12">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
                <div className="h-1 w-8 md:w-10 bg-yellow-400"></div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-black italic">The Architect of Excellence</span>
              </div>
              
              <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-[0.85] uppercase italic tracking-tighter">
                MEET THE <br />
                <span className="text-white block md:inline-block [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">MASTERMIND</span> <br className="hidden md:block" />
                <span className="relative inline-block bg-black text-white px-4 md:px-6 py-2 mt-4 rotate-0 md:-rotate-1 border-4 border-black shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[10px_10px_0px_0px_rgba(253,224,71,1)]">
                  RAGHAVA M.
                </span>
              </h2>
            </div>

            {/* Core Intro Text */}
            <div className="space-y-6 text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-10 md:mb-12 text-left">
                <p className="border-l-8 border-black pl-6 py-2 bg-gray-50 rounded-r-2xl">
                    A passionate chess mentor dedicated to developing young talents. With 12+ years of playing and coaching experience, Raghava has guided students across all levels to competitive success.
                </p>
            </div>

            {/* Strategy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-12">
                {approach.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 border-[3px] md:border-4 border-black rounded-2xl bg-white hover:bg-yellow-400 transition-all group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                        <div className="p-2 bg-black text-white rounded-lg group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                            {item.icon}
                        </div>
                        <span className="text-[10px] md:text-[11px] font-black uppercase leading-tight tracking-tight text-left">{item.title}</span>
                    </div>
                ))}
            </div>

            {/* Philosophy Block */}
            <div className="relative p-8 md:p-10 bg-gray-50 border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden text-left">
                <div className="absolute -top-4 -right-4 pointer-events-none">
                    <Quote className="w-16 h-16 md:w-20 md:h-20 text-black/5 -rotate-12" />
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-yellow-600 mb-4">Teaching Philosophy</h4>
                <p className="text-lg md:text-2xl font-black italic text-black leading-tight">
                    "Consistent effort and the right mindset transform beginners into confident champions."
                </p>
            </div>

          </div>
        </div>

        {/* --- BOTTOM SECTION: HIGHLIGHTS --- */}
        <div className="mt-16 md:mt-24">
            <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-12">
                <h3 className="text-xl md:text-3xl font-black uppercase italic whitespace-nowrap">Career Highlights</h3>
                <div className="h-1 w-full bg-black/5"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((item, i) => (
                    <div key={i} className="p-6 border-[3px] md:border-4 border-black rounded-3xl bg-white hover:bg-black hover:text-white transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] md:shadow-[6px_6px_0px_0px_rgba(253,224,71,1)]">
                        <div className="mb-4 text-yellow-500 group-hover:text-yellow-400 transition-colors">
                            {item.icon}
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-50">{item.label}</p>
                        <p className="text-base md:text-lg font-bold leading-tight uppercase italic">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}