"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Layers, BookOpen } from 'lucide-react';

const CurriculumBanner: React.FC = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[100vh] flex items-center bg-[#050505] overflow-hidden pt-0">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      {/* 1. Faded Chessboard Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0" 
        style={{ 
          backgroundImage: `linear-gradient(45deg, #EAB308 25%, transparent 25%, transparent 75%, #EAB308 75%, #EAB308), 
                            linear-gradient(45deg, #EAB308 25%, transparent 25%, transparent 75%, #EAB308 75%, #EAB308)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px'
        }}
      />

      {/* 2. Abstract Gold Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#EAB308]/10 to-transparent pointer-events-none" />

      {/* --- MAIN LAYOUT --- */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
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
                  Structured Roadmap
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter mb-8 uppercase">
                The <span className="font-serif italic font-light text-[#EAB308] normal-case">Blueprint</span> {" "}
                Of Play.
              </h1>

              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg">
                Our curriculum is engineered into four specialized phases, 
                designed to transition students from foundational logic to 
                Grandmaster-level strategic depth.
              </p>

              {/* Refined Breadcrumbs */}
              <nav className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                <a href="/" className="text-gray-500 hover:text-[#EAB308] transition-colors">Home</a>
                <ChevronRight className="w-3.5 h-3.5 text-[#EAB308]" />
                <span className="text-white">Curriculum</span>
              </nav>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: Geometric Composition */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] md:aspect-square max-w-md mx-auto lg:ml-auto"
            >
              {/* Frame Decoration */}
              <div className="absolute inset-0 border border-[#EAB308]/30 p-4">
                <div className="relative w-full h-full overflow-hidden bg-[#111]">
                  <img 
                    src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2000" 
                    alt="Chess Curriculum Analysis"
                    className="w-full h-full object-cover brightness-100 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  />
                  
                  {/* Glassmorphism Path Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-xl border border-white/10 p-6">
                     <div className="flex justify-between items-center text-center">
                        <div>
                          <p className="text-[#EAB308] text-2xl font-bold">04</p>
                          <p className="text-white text-[9px] uppercase font-black tracking-widest mt-1">Learning Phases</p>
                        </div>
                        <div className="h-10 w-[1px] bg-white/20"></div>
                        <div>
                          <p className="text-[#EAB308] text-2xl font-bold">500+</p>
                          <p className="text-white text-[9px] uppercase font-black tracking-widest mt-1">Tactical Puzzles</p>
                        </div>
                        <div className="h-10 w-[1px] bg-white/20"></div>
                        <div>
                          <p className="text-[#EAB308] text-2xl font-bold">FIDE</p>
                          <p className="text-white text-[9px] uppercase font-black tracking-widest mt-1">Rated Level</p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Lines */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-[#EAB308] opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[#EAB308] opacity-50"></div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM SECTION DIVIDER (Minimalist) --- */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 border-t border-white/10 py-6 hidden md:block">
        <div className="container mx-auto px-12">
          <div className="flex justify-between items-center text-white/30">
            <div className="flex items-center gap-3 group cursor-default">
              <Layers className="w-4 h-4 text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Phase-Based Methodology</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <BookOpen className="w-4 h-4 text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Digital Study Resources</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <Award className="w-4 h-4 text-[#EAB308]" />
              <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">FIDE Standard Assessment</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CurriculumBanner;