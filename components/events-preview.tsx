"use client";

import React from "react";
import { 
  Trophy, 
  Gamepad2, 
  Puzzle, 
  Zap, 
  FileText, 
  BarChart3, 
  ChevronRight,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
const COURSES = [
  {
    level: "Phase 01",
    title: "Beginner Course",
    description: "Understanding game rules, basic ideas and the ability to play confidently.",
    outcomes: ["32 Live classes", "12+ Online Tournaments", "300+ Puzzles", "24/7 Platform Access", "Assignments"],
    color: "bg-white",
    shadow: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    tag: "Fundamentals"
  },
  {
    level: "Phase 02",
    title: "Advanced Beginner",
    description: "Improving checkmate skills, tactical awareness, and mindset for tournaments.",
    outcomes: ["48 Live classes", "12 Online Tournaments", "600+ Puzzles", "24/7 Platform Access", "Assignments"],
    color: "bg-yellow-400",
    shadow: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    tag: "Tactician"
  },
  {
    level: "Phase 03",
    title: "Intermediate",
    description: "Calculation, attacking ideas, visualization, and strategic planning.",
    outcomes: ["64 Live classes", "12 Online Tournaments", "900+ Puzzles", "24/7 Platform Access", "Assignments", "Monthly Leaderboard"],
    color: "bg-black",
    textColor: "text-white",
    shadow: "shadow-[6px_6px_0px_0px_rgba(253,224,71,1)]",
    tag: "Strategist"
  },
  {
    level: "Phase 04",
    title: "Advanced Intermediate",
    description: "Mastery of strategy, positional play, visualization, and endgame execution.",
    outcomes: ["96 Live classes", "12 Online Tournaments", "900+ Puzzles", "24/7 Platform Access", "Assignments", "Monthly Leaderboard"],
    color: "bg-white",
    shadow: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    tag: "Expert"
  }
];

export default function CourseCurriculum() {
  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-10 left-10 text-[10rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic">
        CHESS
      </div>
      
      {/* 5 Background Circles */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-20 left-[5%] w-12 h-12 rounded-full bg-yellow-400 border-2 border-black z-0" />
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-20 right-[5%] w-32 h-32 rounded-full border-2 border-dashed border-black/10 z-0" />
      <div className="absolute top-1/2 right-[-20px] w-20 h-20 rounded-full bg-black/5 z-0" />
      <motion.div animate={{ x: [0, 30, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-1/4 right-[20%] w-4 h-4 rounded-full bg-black z-0" />
      <div className="absolute bottom-10 left-[15%] w-40 h-40 rounded-full bg-yellow-400/10 z-0" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[2px] w-8 bg-yellow-400"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Mastery Path</span>
            <div className="h-[2px] w-8 bg-yellow-400"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black leading-none uppercase italic">
            Your <span className="bg-yellow-400 px-2 border-2 border-black">Roadmap</span> to Glory.
          </h2>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {COURSES.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`relative p-6 border-[3px] border-black rounded-[2rem] flex flex-col transition-all ${course.color} ${course.textColor || 'text-black'} ${course.shadow}`}
            >
              {/* Badge */}
              <div className={`self-start px-2 py-0.5 mb-4 rounded-md border-2 border-black text-[9px] font-black uppercase tracking-tighter
                ${idx === 2 ? 'bg-yellow-400 text-black' : 'bg-black text-white'}`}>
                {course.tag}
              </div>

              {/* Title Area */}
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase opacity-60 mb-1">{course.level}</p>
                <h3 className="text-xl font-black leading-tight uppercase italic">{course.title}</h3>
              </div>

              {/* Description */}
              <p className="text-xs font-bold leading-relaxed mb-6 opacity-80">
                {course.description}
              </p>

              {/* Outcome List */}
              <div className="space-y-3 mb-8 flex-grow">
                <p className="text-[10px] font-black uppercase border-b border-black/10 pb-1 mb-2">Outcome</p>
                {course.outcomes.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Zap size={12} className={idx === 1 || idx === 2 ? "text-black" : "text-yellow-500"} fill="currentColor" />
                    <span className="text-[11px] font-bold tracking-tight uppercase">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
  href="/courses" // change if needed
  className={`w-full py-3 rounded-xl border-2 border-black font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all text-center
    ${
      idx === 2
        ? "bg-yellow-400 text-black hover:bg-white shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
        : "bg-black text-white hover:bg-yellow-400 hover:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
    }`}
>
  Join Course
  <ChevronRight size={14} />
</Link>
              {/* Decorative Corner Star */}
              <Star size={14} className="absolute top-6 right-6 opacity-10 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM QUICK STATS --- */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 border-t-2 border-gray-100 pt-10">
           <div className="text-center">
             <p className="text-2xl font-black italic uppercase">12+</p>
             <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Monthly Tourneys</p>
           </div>
           <div className="text-center">
             <p className="text-2xl font-black italic uppercase">240+</p>
             <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Live Hours</p>
           </div>
           <div className="text-center">
             <p className="text-2xl font-black italic uppercase">900+</p>
             <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Puzzles Library</p>
           </div>
        </div>
      </div>
    </section>
  );
}