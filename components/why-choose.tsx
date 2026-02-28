"use client";

import React from 'react';
import { Target, TrendingUp, Search, Trophy, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      title: 'Structured Levels',
      description: 'Clear pathways from Beginner to Tournament Prep with measurable progress.',
      icon: <Target className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />, 
      color: "bg-white",
    },
    {
      title: 'Growth Tracking',
      description: 'Detailed monthly performance reports to ensure continuous accountability.',
      icon: <TrendingUp className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />,
      color: "bg-yellow-400",
    },
    {
      title: 'Personal Analysis',
      description: 'Deep-dive reviews of your games to identify and fix strategic weaknesses.',
      icon: <Search className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />,
      color: "bg-white",
    },
    {
      title: 'Tournament Prep',
      description: 'Expert guidance on opening repertoires, time management, and mindset.',
      icon: <Trophy className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />,
      color: "bg-yellow-400",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-white font-sans selection:bg-black selection:text-yellow-400 border-t-8 border-black">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -left-10 w-48 md:w-72 h-48 md:h-72 rounded-full bg-yellow-400/10 border border-yellow-400/30 z-0" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[5%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 z-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border border-black hidden sm:block" 
      />

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* --- HEADING --- */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <Zap className="fill-yellow-400" size={18} />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-black italic">The Star Advantage</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-black leading-none uppercase italic tracking-tighter mb-6 md:mb-8 px-2">
            WHY CHOOSE {" "}
            <span className="text-white block sm:inline-block [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">STAR CHESS</span> <br className="hidden sm:block" />
            <span className="relative inline-block bg-black text-white px-4 md:px-6 py-2 mt-4 rotate-0 sm:rotate-[-1deg] border-4 border-black shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[10px_10px_0px_0px_rgba(253,224,71,1)]">
              ACADEMY?
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-gray-600 font-bold text-base md:text-lg leading-tight px-4">
            "We don’t just teach moves — we build strategic thinkers. Our mission is to turn passion into performance."
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Left Column (Benefits 1 & 2) */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <BenefitCard benefit={benefits[0]} />
            <BenefitCard benefit={benefits[1]} />
          </div>

          {/* Center Piece (The Lion) */}
          <div className="flex justify-center order-1 lg:order-2 py-4 md:py-8 scale-90 sm:scale-100">
            <div className="relative group">
              {/* Rotating outer border */}
              <div className="absolute inset-[-15px] md:inset-[-20px] border-2 border-dashed border-black/10 rounded-full animate-[spin_30s_linear_infinity]" />
              
              <div className="relative bg-yellow-400 border-4 border-black rounded-full p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300">
                <img
                  src="/lion.png" 
                  alt="Chess Lion"
                  className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 object-contain grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <motion.div 
                animate={{ rotate: [12, -12, 12] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-black text-white px-3 py-1.5 md:px-4 md:py-2 border-2 border-yellow-400 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-lg"
              >
                PRO PATH
              </motion.div>
            </div>
          </div>

          {/* Right Column (Benefits 3 & 4) */}
          <div className="space-y-6 md:space-y-8 order-3">
            <BenefitCard benefit={benefits[2]} />
            <BenefitCard benefit={benefits[3]} />
          </div>

        </div>

        {/* Bottom Tagline */}
        <div className="mt-12 md:mt-16 text-center px-4">
            <span className="inline-block bg-gray-100 text-black px-4 md:px-6 py-2.5 md:py-3 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-widest border-2 border-black leading-tight">
                Interactive and engaging classes for all ages
            </span>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: any }) {
  return (
    <motion.div
      whileHover={{ y: -5, x: 5 }}
      className={`
        relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-4 border-black bg-white
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all
        hover:shadow-none hover:translate-x-1 hover:translate-y-1
        cursor-default group
      `}
    >
      <div className={`
        w-12 h-12 md:w-14 md:h-14 p-2.5 rounded-xl md:rounded-2xl border-4 border-black flex items-center justify-center mb-4 md:mb-6 
        transition-transform group-hover:rotate-12
        ${benefit.color} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      `}>
        {benefit.icon}
      </div>

      <h3 className="text-xl md:text-2xl font-black uppercase italic mb-2 md:mb-3 text-black leading-none tracking-tighter">
        {benefit.title}
      </h3>
      
      <p className="text-xs md:text-sm font-bold text-gray-500 leading-snug">
        {benefit.description}
      </p>

      {/* Decorative Star Icon */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-5 group-hover:opacity-20 transition-opacity">
        <Star size={18} fill="black" />
      </div>
    </motion.div>
  );
}