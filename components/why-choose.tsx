"use client";

import React from 'react';
import { 
  Trophy, 
  Puzzle, 
  Users, 
  Target, 
  Zap,
  ChevronRight,
  ShieldCheck,
  Star,
  Layers,
  Gamepad2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      title: 'Certified FIDE Coaches',
      description: 'Learn from world-class trainers with official FIDE certifications.',
      icon: <ShieldCheck className="w-5 h-5" />, 
      color: "bg-[#EAB308]",
    },
    {
      title: 'Interactive Learning',
      description: 'Engaging live sessions designed to keep students focused and motivated.',
      icon: <Zap className="w-5 h-5" />,
      color: "bg-white",
    },
    {
      title: 'Flexible Options',
      description: 'Choose between focused 1:1 sessions or collaborative group coaching.',
      icon: <Users className="w-5 h-5" />,
      color: "bg-[#EAB308]",
    },
    {
      title: 'Gamified Ecosystem',
      description: 'Access 5M+ interactive puzzles and climb the global leaderboards.',
      icon: <Gamepad2 className="w-5 h-5" />,
      color: "bg-white",
    },
    {
      title: 'Structured Path',
      description: 'Phase-based curriculum with detailed student progress tracking.',
      icon: <Layers className="w-5 h-5" />,
      color: "#EAB308",
    },
    {
      title: 'Tournament Prep',
      description: 'Expert preparation for competitive play and tournament exposure.',
      icon: <Trophy className="w-5 h-5" />,
      color: "bg-white",
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 md:py-20 px-6 bg-white border-t-4 border-black relative overflow-hidden">
      
      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* --- COMPACT CENTERED HEADING --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="fill-[#EAB308] text-[#EAB308] w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">
              Elite Training Standards
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-tight uppercase tracking-tighter mb-4">
            Why <span className="text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:1.5px_black]">Chessmate</span> Academy?
          </h2>

          <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
            Professional Excellence in every move
          </p>
        </div>

        {/* --- SYMMETRICAL COMPACT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          
          {/* Left Column (Benefits 1-3) */}
          <div className="space-y-4 md:space-y-5 order-2 lg:order-1">
            {benefits.slice(0, 3).map((benefit, idx) => (
              <BenefitCard key={idx} benefit={benefit} />
            ))}
          </div>

          {/* Center Visual */}
          <div className="flex justify-center order-1 lg:order-2 py-6 lg:py-0">
            <div className="relative group">
              {/* Spinning Decorative Border */}
              <div className="absolute inset-[-15px] border border-dashed border-black/20 rounded-full animate-[spin_40s_linear_infinity]" />
              
              {/* Image Container - Square Brutalist Style */}
              <div className="relative bg-white border-4 border-black w-32 h-32 md:w-56 md:h-56 shadow-[10px_10px_0px_0px_rgba(234,179,8,1)] overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/adult1.webp" 
                  alt="Chessmate Academy Centerpiece"
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
                />
                
                <div className="absolute bottom-0 right-0 bg-black text-[#EAB308] px-3 py-1 font-black text-[9px] uppercase tracking-widest border-t-2 border-l-2 border-black">
                  Elite
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Benefits 4-6) */}
          <div className="space-y-4 md:space-y-5 order-3">
            {benefits.slice(3, 6).map((benefit, idx) => (
              <BenefitCard key={idx} benefit={benefit} />
            ))}
          </div>

        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-16 pt-8 border-t-2 border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 opacity-80">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#EAB308] w-6 h-6" />
              <p className="text-[10px] font-black text-black uppercase tracking-widest">
                FIDE Certified Training
              </p>
            </div>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.4em]">
                Built by competitive players
            </p>
            <div className="flex items-center gap-1">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-[#EAB308] text-[#EAB308]" />)}
            </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit }: { benefit: any }) {
  return (
    <motion.div
      whileHover={{ translateX: 2, translateY: 2 }}
      className={`
        relative p-4 md:p-5 border-2 border-black bg-white
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all
        hover:shadow-none cursor-default group flex items-start gap-4
      `}
    >
      {/* Icon Box */}
      <div className={`
        shrink-0 w-10 h-10 border-2 border-black flex items-center justify-center 
        transition-transform group-hover:rotate-6
        ${benefit.color === "bg-[#EAB308]" ? "bg-[#EAB308]" : "bg-white"}
      `}>
        <div className="text-black">
          {benefit.icon}
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-sm font-[1000] uppercase tracking-tight text-black mb-1 leading-none group-hover:text-[#EAB308] transition-colors">
          {benefit.title}
        </h3>
        <p className="text-[10px] font-bold text-gray-500 leading-tight">
          {benefit.description}
        </p>
      </div>

      <ChevronRight className="w-4 h-4 absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 text-[#EAB308] transition-opacity" />
    </motion.div>
  );
}