"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Trophy, 
  Users, 
  Zap,
  Globe,
  BrainCircuit,
  Compass
} from 'lucide-react';

const MissionVision: React.FC = () => {
  const missionFeatures = [
    "Personalized Coaching",
    "Innovative Resources",
    "Accessible Education",
    "Essential Life Skills"
  ];

  const visionGoals = [
    "Global Community",
    "Strategic Thinkers",
    "Creative Potential",
    "Lifelong Learning"
  ];

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden selection:bg-[#EAB308] border-t-[10px] border-black">
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        {/* --- DECORATIVE BACKGROUND --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[20rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
          GOALS
        </div>

        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="fill-[#EAB308] text-[#EAB308]" size={20} />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black">Foundation & Purpose</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-[0.9] uppercase tracking-tighter">
              VISION & {" "}
              <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">MISSION.</span>
            </h2>
          </div>
          
          <div className="bg-black text-[#EAB308] p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] lg:max-w-xs">
            <p className="font-black italic text-xs uppercase tracking-widest leading-relaxed">
              "Mastering the board is the first step toward mastering life's challenges."
            </p>
          </div>
        </div>

        {/* --- DUAL CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
          
          {/* --- VISION CARD (YELLOW) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
            
            <div className="relative bg-[#EAB308] border-4 border-black p-8 md:p-12 h-full flex flex-col">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 bg-black flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <Eye className="w-7 h-7 text-[#EAB308]" strokeWidth={3} />
                </div>
                <h3 className="text-3xl md:text-4xl font-[1000] uppercase tracking-tighter text-black leading-none">Our Vision</h3>
              </div>

              <p className="text-lg md:text-xl font-bold text-black mb-10 leading-tight">
                To cultivate a <span className="bg-white px-2 border-2 border-black inline-block transform -rotate-1">global community</span> of skilled, strategic thinkers through the game of chess.
              </p>

              <p className="text-sm font-medium text-black/70 mb-10 leading-relaxed">
                We aim to empower students of all ages to reach their full potential by fostering critical thinking, creativity, and a lifelong passion for learning.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                {visionGoals.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 border-b-2 border-black/10 pb-2">
                    <Globe className="w-4 h-4 text-black opacity-40" />
                    <span className="font-black text-black uppercase text-[10px] tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- MISSION CARD (BLACK) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#EAB308] translate-x-2 translate-y-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
            
            <div className="relative bg-black border-4 border-black p-8 md:p-12 h-full text-white flex flex-col">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 bg-[#EAB308] flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
                  <Target className="w-7 h-7 text-black" strokeWidth={3} />
                </div>
                <h3 className="text-3xl md:text-4xl font-[1000] uppercase tracking-tighter text-[#EAB308] leading-none">Our Mission</h3>
              </div>

              <p className="text-lg md:text-xl font-bold text-white mb-10 leading-tight">
                To provide <span className="text-[#EAB308] underline decoration-white decoration-4 underline-offset-8">exceptional education</span> that is accessible, engaging, and enriching for every student.
              </p>

              <p className="text-sm font-medium text-gray-400 mb-10 leading-relaxed">
                We strive to deliver personalized coaching and innovative resources that enable every student to master chess while developing essential life skills.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {missionFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3">
                    <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- FOOTER TRUST SIGNALS --- */}
        <div className="mt-20 pt-10 border-t border-black/5 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-30">
           <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.4em] text-black">
              <BrainCircuit className="w-5 h-5"/> Cognitive Growth
           </div>
           <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.4em] text-black">
              <Users className="w-5 h-5"/> Global Network
           </div>
           <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.4em] text-black">
              <Compass className="w-5 h-5"/> Life Direction
           </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;