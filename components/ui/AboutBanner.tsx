"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Globe, Users } from 'lucide-react';
import Link from 'next/link';

const AboutBanner: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen md:min-h-screen flex items-center bg-[#050505] overflow-hidden pt-0 md:pt-0">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      {/* 1. Large Faded Chessboard Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0" 
        style={{ 
          backgroundImage: `linear-gradient(45deg, #EAB308 25%, transparent 25%, transparent 75%, #EAB308 75%, #EAB308), 
                            linear-gradient(45deg, #EAB308 25%, transparent 25%, transparent 75%, #EAB308 75%, #EAB308)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px'
        }}
      />

      {/* 2. Abstract Gold Light Leak */}
      <div className="absolute top-0 right-0 w-full md:w-[50%] h-full bg-gradient-to-b md:bg-gradient-to-l from-[#EAB308]/10 to-transparent pointer-events-none" />

      {/* --- MAIN LAYOUT --- */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT: Typography Focus */}
          <div className="max-w-2xl text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="h-[1px] w-8 md:w-12 bg-[#EAB308]"></span>
                <span className="text-[#EAB308] text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">
                  Established Excellence
                </span>
              </div>

              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] md:leading-tight tracking-tighter mb-6 md:mb-8 uppercase">
                The <span className="font-serif italic font-light text-[#EAB308] normal-case">Mastery</span> {" "}
                Begins Here.
              </h1>

              <p className="text-gray-400 text-base md:text-xl font-medium leading-relaxed mb-8 md:mb-10 max-w-lg">
                At Chess Mate, we don't just teach the game; we cultivate the 
                strategic foresight and mental resilience of future grandmasters.
              </p>

              {/* Refined Breadcrumbs */}
              <nav className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                <Link href="/" className="text-gray-500 hover:text-[#EAB308] transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#EAB308]" />
                <span className="text-white">Our Legacy</span>
              </nav>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Geometric Image Composition */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] max-w-[450px] mx-auto lg:ml-auto"
            >
              {/* Main Image with a Sleek Gold Frame */}
              <div className="absolute inset-0 border border-[#EAB308]/30 p-2 md:p-4">
                <div className="relative w-full h-full overflow-hidden bg-[#111]">
                  <img 
                    src="/ches.avif" 
                    alt="Chess Mastery"
                    className="w-full h-full object-cover brightness-100 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  />
                  
                  
                </div>
              </div>

              {/* Floating Architectural Accents - Scaled for Mobile */}
              <div className="absolute -top-4 -right-4 md:-top-10 md:-right-10 w-16 h-16 md:w-32 md:h-32 border-t-2 border-r-2 border-[#EAB308] opacity-40"></div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-10 md:-left-10 w-16 h-16 md:w-32 md:h-32 border-b-2 border-l-2 border-[#EAB308] opacity-40"></div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM SECTION HIGHLIGHTS --- */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 border-t border-white/10 py-6 hidden md:block">
        <div className="container mx-auto px-12">
          <div className="flex justify-between items-center text-white/40">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">FIDE Certified Training</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Expert Grandmaster Faculty</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Global Competition Access</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutBanner;