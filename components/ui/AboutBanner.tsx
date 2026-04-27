"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Globe, Users } from 'lucide-react';

const AboutBanner: React.FC = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[100vh] flex items-center bg-[#050505] overflow-hidden pt-0">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      {/* 1. Large Faded Chessboard Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0" 
        style={{ 
          backgroundImage: `linear-gradient(45deg, #EAB308 25%, transparent 25%, transparent 75%, #EAB308 75%, #EAB308), 
                            linear-gradient(45deg, #EAB308 25%, transparent 25%, transparent 75%, #EAB308 75%, #EAB308)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px'
        }}
      />

      {/* 2. Abstract Gold Light Leak */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#EAB308]/10 to-transparent pointer-events-none" />

      {/* --- MAIN LAYOUT --- */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT: Typography Focus */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-[#EAB308]"></span>
                <span className="text-[#EAB308] text-[11px] font-black uppercase tracking-[0.5em]">
                  Established Excellence
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tighter mb-8 uppercase">
                The <span className="font-serif italic font-light text-[#EAB308] normal-case">Mastery</span> {" "}
                Begins Here.
              </h1>

              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg">
                At Chess Mate, we don't just teach the game; we cultivate the 
                strategic foresight and mental resilience of future grandmasters.
              </p>

              {/* Refined Breadcrumbs */}
              <nav className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                <a href="/" className="text-gray-500 hover:text-[#EAB308] transition-colors">Home</a>
                <ChevronRight size={14} className="text-[#EAB308]" />
                <span className="text-white">Our Legacy</span>
              </nav>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Geometric Image Composition */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] md:aspect-square max-w-md mx-auto lg:ml-auto"
            >
              {/* Main Image with a Sleek Gold Frame */}
              <div className="absolute inset-0 border border-[#EAB308]/30 p-4">
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src="/ches.avif" 
                    alt="Chess Mastery"
                    className="w-full h-full object-cover brightness-100 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  />
                  {/* Glassmorphism Stat Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl border border-white/10 p-6">
                     <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[#EAB308] text-2xl font-bold">1200+</p>
                          <p className="text-white text-[9px] uppercase font-black tracking-widest mt-1">Students Rated</p>
                        </div>
                        <div className="h-10 w-[1px] bg-white/20"></div>
                        <div>
                          <p className="text-[#EAB308] text-2xl font-bold">15+</p>
                          <p className="text-white text-[9px] uppercase font-black tracking-widest mt-1">Global Branches</p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Accents */}
              <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-[#EAB308] opacity-40"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-[#EAB308] opacity-40"></div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM SECTION HIGHLIGHTS (Minimalist) --- */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 border-t border-white/10 py-6 hidden md:block">
        <div className="container mx-auto px-12">
          <div className="flex justify-between items-center text-white/40">
            <div className="flex items-center gap-3">
              <Award size={18} className="text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">FIDE Certified Training</span>
            </div>
            <div className="flex items-center gap-3">
              <Users size={18} className="text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Expert Grandmaster Faculty</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={18} className="text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Global Competition Access</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutBanner;