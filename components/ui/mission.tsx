"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Trophy, 
  Users, 
  Lightbulb,
  ShieldCheck,
  Star
} from 'lucide-react';

const MissionVision: React.FC = () => {
  const missionPoints = [
    "Make chess learning fun and systematic",
    "Clear improvement plans for every student",
    "Identify and nurture young talent",
    "Develop tournament-ready players",
    "Build fundamentals before strategies"
  ];

  const visionPoints = [
    "State-level champions",
    "National-level competitors",
    "Strong rated players",
    "Confident strategic thinkers"
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans border-t-8 border-black selection:bg-yellow-400">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="w-8 md:w-12 h-1 bg-yellow-400"></span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black italic">The Star Blueprint</span>
            </div>
            {/* Heading: 2xl on mobile / 5xl on desktop */}
            <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-none uppercase italic tracking-tighter">
              PURPOSE & <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-white block md:inline [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">POTENTIAL</span>
              </span>
            </h2>
          </div>
          <div className="bg-black text-white p-5 md:p-6 border-4 border-black rotate-0 md:rotate-2 shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]">
            <p className="font-bold italic text-xs md:text-sm max-w-[240px]">
              "We believe every child has potential — with the right guidance, they achieve excellence."
            </p>
          </div>
        </div>

        {/* --- MISSION & VISION GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* --- MISSION CARD --- */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* Offset Shadow Layer */}
            <div className="absolute inset-0 bg-black rounded-[2.5rem] md:rounded-[3rem] translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            
            <div className="relative bg-white border-4 border-black rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-400 border-4 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <Target className="w-7 h-7 md:w-8 md:h-8 text-black" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-none">Our Mission</h3>
                  <p className="text-[10px] font-black text-gray-400 mt-1 uppercase tracking-widest">Global Standards</p>
                </div>
              </div>

              <p className="text-lg md:text-xl font-bold text-black mb-8 leading-tight">
                To deliver <span className="bg-yellow-400 px-1 border-2 border-black inline-block transform -rotate-1">world-class training</span> that is structured, engaging, and result-oriented.
              </p>

              <ul className="space-y-4 flex-grow">
                {missionPoints.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-black shrink-0 w-5 h-5" />
                    <span className="font-black text-gray-700 uppercase text-[11px] md:text-xs tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* --- VISION CARD --- */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* Offset Shadow Layer */}
            <div className="absolute inset-0 bg-yellow-400 rounded-[2.5rem] md:rounded-[3rem] translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            
            <div className="relative bg-black border-4 border-black rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 h-full text-white flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] shrink-0">
                  <Eye className="w-7 h-7 md:w-8 md:h-8 text-black" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-none text-yellow-400">Our Vision</h3>
                  <p className="text-[10px] font-black text-gray-500 mt-1 uppercase tracking-widest">Producing Champions</p>
                </div>
              </div>

              <p className="text-base md:text-lg font-bold text-gray-300 mb-8 leading-snug">
                Producing the next generation of <span className="text-white underline decoration-yellow-400 decoration-4 underline-offset-4">State & National</span> champions and rated players.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
                {visionPoints.map((item, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/20 p-3 rounded-xl flex items-center gap-2 group-hover:bg-white/20 transition-colors">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                   <div className="p-2.5 bg-yellow-400 rounded-full shrink-0">
                      <Lightbulb className="w-5 h-5 text-black" />
                   </div>
                   <p className="text-[10px] md:text-xs font-bold text-gray-400 italic leading-tight">
                     Building intellectually strong individuals for academics and life.
                   </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- BOTTOM DECAL --- */}
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-6 md:gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2 font-black text-lg md:text-2xl tracking-tighter italic"><Trophy className="w-5 h-5 md:w-7 md:h-7"/> CHAMPIONS</div>
           <div className="flex items-center gap-2 font-black text-lg md:text-2xl tracking-tighter italic"><Users className="w-5 h-5 md:w-7 md:h-7"/> COMMUNITY</div>
           <div className="flex items-center gap-2 font-black text-lg md:text-2xl tracking-tighter italic"><ShieldCheck className="w-5 h-5 md:w-7 md:h-7"/> TRUSTED</div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;