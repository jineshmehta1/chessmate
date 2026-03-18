"use client";

import React from 'react';
import { 
  Trophy, 
  Swords, 
  Puzzle, 
  ClipboardCheck, 
  Users, 
  Target, 
  Star, 
  Zap 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      title: 'Weekend Tournaments',
      description: 'Competitive online tournaments every weekend to test your skills.',
      icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />, 
      color: "bg-white",
    },
    {
      title: 'Training Camps',
      description: 'Intensive masterclasses designed to break plateaus quickly.',
      icon: <Swords className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />,
      color: "bg-yellow-400",
    },
    {
      title: 'Puzzle Contests',
      description: 'Daily tactics challenges to sharpen calculation and vision.',
      icon: <Puzzle className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />,
      color: "bg-white",
    },
    {
      title: 'Student Reports',
      description: 'Monthly data to track progress and accountability.',
      icon: <ClipboardCheck className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />,
      color: "bg-yellow-400",
    },
    {
      title: 'Hybrid Sessions',
      description: 'Interactive online classes and focused offline sessions.',
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />,
      color: "bg-white",
    },
    {
      title: 'Tournament Prep',
      description: 'Expert opening prep and pro-level mindset coaching.',
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />,
      color: "bg-yellow-400",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden bg-white selection:bg-black selection:text-yellow-400 border-t-8 border-black">
      
      {/* Background Element */}
      <div className="absolute -bottom-10 -left-10 w-48 md:w-72 h-48 md:h-72 rounded-full bg-yellow-400/10 border border-yellow-400/30 z-0" />

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* --- HEADING --- */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Zap className="fill-yellow-400" size={14} />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black italic">The Star Advantage</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black leading-none uppercase italic tracking-tighter mb-4">
            WHY CHOOSE <span className="text-white sm:inline-block [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[3px_3px_0px_rgba(253,224,71,1)]">STAR CHESS</span>
          </h2>

          <p className="max-w-lg mx-auto text-gray-600 font-bold text-sm md:text-base leading-tight">
            "Turning passion into performance through strategic thinking."
          </p>
        </div>

        {/* --- COMPACT GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-center">
          
          {/* Left Column */}
          <div className="space-y-4 md:space-y-5 order-2 lg:order-1">
            <BenefitCard benefit={benefits[0]} />
            <BenefitCard benefit={benefits[1]} />
            <BenefitCard benefit={benefits[2]} />
          </div>

          {/* Center Piece */}
          <div className="flex justify-center order-1 lg:order-2 py-2 md:py-4 scale-75 sm:scale-90 lg:scale-100">
            <div className="relative group">
              <div className="absolute inset-[-12px] border-2 border-dashed border-black/10 rounded-full animate-[spin_30s_linear_infinity]" />
              <div className="relative bg-yellow-400 border-[3px] border-black rounded-full p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src="/lion.png" 
                  alt="Chess Lion"
                  className="w-32 h-32 md:w-48 md:h-48 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-5 order-3">
            <BenefitCard benefit={benefits[3]} />
            <BenefitCard benefit={benefits[4]} />
            <BenefitCard benefit={benefits[5]} />
          </div>

        </div>

        {/* Bottom Tagline */}
        <div className="mt-10 text-center">
            <span className="inline-block bg-gray-100 text-black px-4 py-2 rounded-full font-black text-[8px] md:text-[10px] uppercase tracking-widest border-2 border-black">
                Professional training for all age groups
            </span>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: any }) {
  return (
    <motion.div
      whileHover={{ y: -3, x: 3 }}
      className={`
        relative p-4 md:p-5 rounded-xl md:rounded-2xl border-[3px] border-black bg-white
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all
        hover:shadow-none hover:translate-x-1 hover:translate-y-1
        cursor-default group flex items-start gap-4
      `}
    >
      {/* Compact Icon */}
      <div className={`
        shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border-[3px] border-black flex items-center justify-center 
        transition-transform group-hover:rotate-6
        ${benefit.color} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
      `}>
        {benefit.icon}
      </div>

      <div className="flex flex-col">
        <h3 className="text-base md:text-lg font-black uppercase italic mb-0.5 text-black leading-tight tracking-tight">
          {benefit.name || benefit.title}
        </h3>
        <p className="text-[10px] md:text-xs font-bold text-gray-500 leading-tight">
          {benefit.description}
        </p>
      </div>

      {/* Small Decorative Star */}
      <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
        <Star size={12} fill="black" />
      </div>
    </motion.div>
  );
}