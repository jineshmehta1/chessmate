"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Trophy, 
  Swords, 
  Zap,
  Star
} from "lucide-react";

const TrainingCampsBanner: React.FC = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 selection:bg-yellow-400 selection:text-black">
      
      {/* --- PREMIUM BACKGROUND DOODLES --- */}
      {/* 1. Pulsing Yellow Circle */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[5%] w-12 h-12 md:w-20 md:h-20 rounded-full bg-yellow-400 border-[3px] md:border-4 border-black z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" 
      />
      
      {/* 2. Rotating Dashed Ring */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-[10%] w-20 h-20 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-dashed border-black/10 z-0" 
      />

      {/* 3. Swords Icon Doodle (Combat/Training theme) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-24 left-[10%] text-yellow-500 opacity-20 z-0"
      >
        <Swords className="w-12 h-12 md:w-20 md:h-20" strokeWidth={1} />
      </motion.div>

      {/* 4. Floating Trophy Sticker */}
      <motion.div 
        animate={{ rotate: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-32 right-[10%] w-10 h-10 md:w-14 md:h-14 bg-white border-2 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
      >
        <Trophy className="w-5 h-5 md:w-6 md:h-6 text-black" fill="#facc15" />
      </motion.div>

      {/* Ghost Background Decal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[15rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic">
        CAMPS
      </div>

      {/* --- MAIN CONTENT (CENTERED) --- */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Label Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-[2px] w-6 md:w-8 bg-yellow-400"></div>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-black italic">Intensive Mastery</span>
          <div className="h-[2px] w-6 md:w-8 bg-yellow-400"></div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-black leading-none uppercase italic mb-10 tracking-tight">
          Training <span className="text-white [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">Camps.</span>
        </h1>
        
        {/* Neubrutalist Sticker Breadcrumbs */}
        <nav className="inline-flex items-center gap-2 md:gap-3 bg-black text-white px-5 py-2.5 md:px-8 md:py-4 rounded-2xl border-[3px] md:border-4 border-black shadow-[5px_5px_0px_0px_rgba(253,224,71,1)] md:shadow-[8px_8px_0px_0px_rgba(253,224,71,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
          <a href="/" className="text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:text-yellow-400 transition-colors">
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" strokeWidth={4} />
          <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-yellow-400">
            Training Camps
          </span>
        </nav>
      </div>

      {/* --- Premium Scalloped Bottom Border --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
          className="relative block w-full h-8 md:h-14" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 Q150,120 300,0 T600,0 T900,0 T1200,0 V120 H0 Z" 
            fill="#000000" 
          />
        </svg>
      </div>

      {/* --- Zap Sticker (Bottom Left) --- */}
      <motion.div 
        animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-6 md:bottom-16 md:left-32 z-20 bg-white border-2 border-black p-2 md:p-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <Zap className="w-6 h-6 md:w-8 md:h-8 text-black fill-yellow-400" />
      </motion.div>

    </div>
  );
};

export default TrainingCampsBanner;