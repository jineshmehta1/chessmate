"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Trophy, Medal, Star, Target } from 'lucide-react';
import Link from 'next/link';

const AchievementsBanner: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[100vh] flex items-center bg-[#050505] overflow-hidden pt-0 lg:pt-0">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0" 
        style={{ 
          backgroundImage: `linear-gradient(45deg, #EAB308 25%, transparent 25%, transparent 75%, #EAB308 75%, #EAB308), 
                            linear-gradient(45deg, #EAB308 25%, transparent 25%, transparent 75%, #EAB308 75%, #EAB308)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px'
        }}
      />

      {/* 2. Brand Gold Ambient Glow */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-gradient-to-b lg:bg-gradient-to-l from-[#EAB308]/10 to-transparent pointer-events-none" />
      
      {/* 3. "VICTORY" Ghost Decal - Scaled for mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[15rem] lg:text-[25rem] font-[1000] text-white/[0.02] leading-none select-none -z-0 tracking-tighter uppercase italic pointer-events-none">
        WIN
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT: Narrative Typography */}
          <div className="max-w-2xl order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4 lg:mb-6">
                <span className="h-[1px] w-8 lg:w-12 bg-[#EAB308]"></span>
                <span className="text-[#EAB308] text-[9px] lg:text-[11px] font-black uppercase tracking-[0.3em] lg:tracking-[0.5em]">
                  The Hall of Fame
                </span>
              </div>

              {/* Desktop sizes (lg:text-8xl) preserved exactly */}
              <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tighter mb-6 lg:mb-8 uppercase">
                The <span className="font-serif italic font-light text-[#EAB308] normal-case">Legacy</span> {" "}
                Of Success.
              </h1>

              <p className="text-gray-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-8 lg:mb-10 max-w-lg">
                Celebrating a decade of strategic dominance. From local prodigies 
                to National Champions, our results speak louder than words.
              </p>

              {/* Refined Navigation Paths */}
              <nav className="flex items-center gap-3 lg:gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                <Link href="/" className="text-gray-500 hover:text-[#EAB308] transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#EAB308]" />
                <span className="text-white tracking-[0.2em]">Achievements</span>
              </nav>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Geometric Image Composition */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-[450px] mx-auto lg:ml-auto"
            >
              {/* Gold Frame Architecture */}
              <div className="absolute inset-0 border border-[#EAB308]/20 p-2 lg:p-4">
                <div className="relative w-full h-full overflow-hidden bg-[#0a0a0a]">
                  <img 
                    src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2000" 
                    alt="Chess Trophy Success"
                    className="w-full h-full object-cover brightness-100 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  />
                  
                  {/* Glassmorphism Achievement Card - Responsive Padding */}
                  <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-black/60 backdrop-blur-xl border border-white/10 p-4 lg:p-6">
                     <div className="flex justify-between items-center text-center">
                        <div>
                          <p className="text-[#EAB308] text-xl lg:text-2xl font-bold">100+</p>
                          <p className="text-white text-[8px] lg:text-[9px] uppercase font-black tracking-widest mt-1">Podiums</p>
                        </div>
                        <div className="h-8 lg:h-10 w-[1px] bg-white/20 mx-1"></div>
                        <div>
                          <p className="text-[#EAB308] text-xl lg:text-2xl font-bold">50+</p>
                          <p className="text-white text-[8px] lg:text-[9px] uppercase font-black tracking-widest mt-1">FIDE Rated</p>
                        </div>
                        <div className="h-8 lg:h-10 w-[1px] bg-white/20 mx-1"></div>
                        <div>
                          <p className="text-[#EAB308] text-xl lg:text-2xl font-bold">12+</p>
                          <p className="text-white text-[8px] lg:text-[9px] uppercase font-black tracking-widest mt-1">Years Pro</p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Ornamental Lines - Scaled for mobile */}
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-16 lg:w-24 h-16 lg:h-24 border-t-2 border-r-2 border-[#EAB308] opacity-40"></div>
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-16 lg:w-24 h-16 lg:h-24 border-b-2 border-l-2 border-[#EAB308] opacity-40"></div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM SECTION HIGHLIGHTS --- */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 border-t border-white/10 py-6 hidden lg:block">
        <div className="container mx-auto px-12">
          <div className="flex justify-between items-center text-white/30">
            <div className="flex items-center gap-3 group cursor-default">
              <Trophy className="w-4 h-4 text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">National Level Champions</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <Medal className="w-4 h-4 text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">International Certifications</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <Target className="w-4 h-4 text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Proven Tournament Growth</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AchievementsBanner;