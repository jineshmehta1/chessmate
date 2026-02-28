"use client";
import Link from "next/link";
import React from "react";
import { 
  Zap, 
  ChevronRight,
  Star
} from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-12 md:py-24 bg-white relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Adjusted size for mobile responsiveness */}
      <div className="absolute top-10 left-5 md:left-10 text-[5rem] md:text-[10rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic">
        CHESS
      </div>
      
      {/* Floating Circles - Hidden or resized for mobile to prevent overflow issues */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-20 left-[5%] w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow-400 border-2 border-black z-0" />
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-20 right-[5%] w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-dashed border-black/10 z-0" />
      <div className="absolute top-1/2 right-[-10px] w-14 h-14 md:w-20 md:h-20 rounded-full bg-black/5 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[2px] w-6 md:w-8 bg-yellow-400"></div>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-400 italic">Mastery Path</span>
            <div className="h-[2px] w-6 md:w-8 bg-yellow-400"></div>
          </div>
          {/* Main Heading: 2xl on mobile, 5xl on desktop as requested */}
          <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-none uppercase italic">
            Your <span className="bg-yellow-400 px-2 border-2 border-black inline-block transform -rotate-1">Roadmap</span> to Glory.
          </h2>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {COURSES.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={`relative p-6 md:p-8 border-[3px] border-black rounded-[2rem] flex flex-col transition-all ${course.color} ${course.textColor || 'text-black'} ${course.shadow}`}
            >
              {/* Badge */}
              <div className={`self-start px-3 py-1 mb-4 rounded-md border-2 border-black text-[10px] font-black uppercase tracking-tight
                ${idx === 2 ? 'bg-yellow-400 text-black' : 'bg-black text-white'}`}>
                {course.tag}
              </div>

              {/* Title Area */}
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase opacity-60 mb-1">{course.level}</p>
                <h3 className="text-xl md:text-2xl font-black leading-none uppercase italic">{course.title}</h3>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm font-bold leading-relaxed mb-6 opacity-80">
                {course.description}
              </p>

              {/* Outcome List */}
              <div className="space-y-3 mb-8 flex-grow">
                <p className="text-[10px] font-black uppercase border-b-2 border-black/10 pb-1 mb-3">Outcome</p>
                {course.outcomes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Zap size={14} className={idx === 1 || idx === 2 ? "text-black" : "text-yellow-500"} fill="currentColor" />
                    <span className="text-[11px] md:text-xs font-black tracking-tight uppercase">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
  href="/courses"
  className={`w-full py-4 rounded-xl border-2 border-black font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:translate-y-1 active:shadow-none
  ${
    idx === 2
      ? "bg-yellow-400 text-black hover:bg-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
      : "bg-black text-white hover:bg-yellow-400 hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  }`}
>
  Join Course
  <ChevronRight size={16} />
</Link>

              {/* Decorative Corner Star */}
              <Star size={16} className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM QUICK STATS --- */}
        <div className="mt-16 md:mt-24 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 md:gap-20 border-t-4 border-black/5 pt-12">
           <div className="text-center group">
             <p className="text-3xl md:text-5xl font-black italic uppercase leading-none group-hover:text-yellow-500 transition-colors">12+</p>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Monthly Tourneys</p>
           </div>
           <div className="text-center group">
             <p className="text-3xl md:text-5xl font-black italic uppercase leading-none group-hover:text-yellow-500 transition-colors">240+</p>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Live Hours</p>
           </div>
           <div className="text-center group">
             <p className="text-3xl md:text-5xl font-black italic uppercase leading-none group-hover:text-yellow-500 transition-colors">900+</p>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Puzzles Library</p>
           </div>
        </div>
      </div>
    </section>
  );
}