"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Target, 
  Trophy, 
  Brain,
  Timer,
  LayoutDashboard,
  Gamepad2,
  BookOpen
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const benefits = [
    { icon: <Target className="w-4 h-4 md:w-5 md:h-5" />, text: "Strategic Thinking" },
    { icon: <Brain className="w-4 h-4 md:w-5 md:h-5" />, text: "Memory & Focus" },
    { icon: <Timer className="w-4 h-4 md:w-5 md:h-5" />, text: "Discipline" },
    { icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />, text: "Decision Making" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden font-sans selection:bg-yellow-400">
      
      {/* Background Decals - Responsive size */}
      <div className="absolute top-1/4 -left-10 md:-left-20 text-[6rem] md:text-[20rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic opacity-50 md:opacity-100">
        CHESS
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: IMAGE COMPOSITION --- */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-24 mb-10 lg:mb-0">
            <div className="relative w-full aspect-[4/5] max-w-[400px] md:max-w-[500px] mx-auto">
              
              {/* Image 1: Main Large */}
              <motion.div 
                whileHover={{ rotate: -1 }}
                className="absolute top-0 left-0 w-[80%] h-[60%] z-10 border-[3px] md:border-4 border-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <img 
                  src="/star1.jpeg" 
                  alt="Coaching session"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Image 2: Middle Overlap */}
              <motion.div 
                whileHover={{ rotate: 1, x: 5 }}
                className="absolute top-1/4 right-0 w-[60%] h-[45%] z-20 border-[3px] md:border-4 border-black rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 bg-white shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[10px_10px_0px_0px_rgba(253,224,71,1)]"
              >
                <img 
                  src="/star2.jpeg" 
                  alt="Chess game"
                  className="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem]"
                />
              </motion.div>

              {/* Image 3: Bottom Left */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="absolute bottom-10 left-4 w-[50%] h-[35%] z-30 border-[3px] md:border-4 border-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <img 
                  src="/star3.jpeg" 
                  alt="Tournament preparation"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Trophy Badge */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-4 z-40 bg-yellow-400 border-[3px] md:border-4 border-black p-3 md:p-4 rounded-xl md:rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TEXT CONTENT --- */}
          <div className="w-full lg:w-[55%] pt-4 text-center lg:text-left">
            
            {/* Header Area */}
            <div className="mb-10">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Star className="fill-yellow-400 text-black w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-black italic">Established Excellence</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-[0.85] uppercase italic tracking-tighter">
                ABOUT STAR {" "}
                <span className="text-white block md:inline-block [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">CHESS</span> <br className="hidden md:block" />
                <span className="relative inline-block bg-black text-white px-4 md:px-6 py-2 mt-4 rotate-0 md:-rotate-1 border-4 border-black shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]">
                  ACADEMY
                </span>
              </h2>
            </div>

            {/* Intro Paragraphs */}
            <div className="space-y-6 text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-10 text-left">
              <p className="border-l-8 border-yellow-400 pl-6 py-2 bg-gray-50 rounded-r-2xl">
                A modern, results-driven coaching institution dedicated to shaping intelligent, competitive players from beginner to advanced tournament levels.
              </p>
              <p className="px-2">
                We believe chess is more than just a game—it’s a powerful tool that builds life skills like <span className="text-black underline decoration-yellow-400 decoration-4 underline-offset-4">strategic thinking</span> and <span className="text-black underline decoration-yellow-400 decoration-4 underline-offset-4">discipline</span>.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-4 border-[3px] border-black rounded-2xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  <div className="bg-yellow-400 p-2 border-2 border-black rounded-lg shrink-0">
                    {b.icon}
                  </div>
                  <span className="text-[11px] md:text-xs font-black uppercase tracking-tight text-black">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Systematic Training Methodology */}
            <div className="p-6 md:p-10 border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-10 relative overflow-hidden text-left">
              <div className="absolute -top-6 -right-6 opacity-5 rotate-12 pointer-events-none">
                <LayoutDashboard className="w-32 h-32 md:w-40 md:h-40" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-black uppercase italic mb-8 flex items-center gap-3">
                <span className="bg-black text-white px-3 py-1 rounded-lg not-italic text-sm md:text-base">01</span>
                Systematic Training
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {[
                  { title: "Concept Learning", icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5" /> },
                  { title: "Tactical Puzzles", icon: <Gamepad2 className="w-4 h-4 md:w-5 md:h-5" /> },
                  { title: "Game Analysis", icon: <Zap className="w-4 h-4 md:w-5 md:h-5" /> },
                  { title: "Mastery & Prep", icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 shrink-0 bg-white border-2 border-black rounded-xl flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-black text-xs md:text-sm uppercase text-gray-500 group-hover:text-black transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider / Founder Bio Tag */}
            <div className="flex items-center gap-4 md:gap-6">
               <div className="h-[2px] flex-grow bg-black/10"></div>
               <p className="text-[10px] md:text-xs font-black italic uppercase text-black/40 tracking-widest whitespace-nowrap">
                 Led by Raghava M. • 15+ Yrs Exp
               </p>
               <div className="h-[2px] flex-grow bg-black/10"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;