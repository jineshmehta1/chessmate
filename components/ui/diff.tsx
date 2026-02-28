"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  BarChart4, 
  UserCheck, 
  Trophy, 
  HeartPulse,
  CheckCircle2,
  ArrowUpRight,
  Zap,
  Target
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  desc: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
  shadow: string;
  textColor?: string;
}

const DifferenceSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: "01",
      title: "Structured Level System",
      desc: "We divide students into clear, goal-oriented stages with measurable progress tracking.",
      items: ["Beginner", "Intermediate", "Advanced", "Tournament Prep"],
      icon: <Layers className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />,
      color: "bg-white",
      shadow: "shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] md:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)]"
    },
    {
      id: "02",
      title: "Performance Training",
      desc: "A rigorous data-driven approach to ensure continuous growth and accountability.",
      items: ["Monthly Puzzle Targets", "Rapid Game Practice", "Game Analysis Sessions", "Computer Practice"],
      icon: <BarChart4 className="w-6 h-6 md:w-8 md:h-8 text-emerald-500" />,
      color: "bg-white",
      shadow: "shadow-[6px_6px_0px_0px_rgba(16,185,129,1)] md:shadow-[8px_8px_0px_0px_rgba(16,185,129,1)]"
    },
    {
      id: "03",
      title: "Individual Attention",
      desc: "Even in groups, we focus on the unique DNA of every student's playing style.",
      items: ["Personal Feedback", "Strength Analysis", "Rating Strategies"],
      icon: <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
      color: "bg-white",
      shadow: "shadow-[6px_6px_0px_0px_rgba(168,85,247,1)] md:shadow-[8px_8px_0px_0px_rgba(168,85,247,1)]"
    },
    {
      id: "04",
      title: "Tournament Prep",
      desc: "We build the psychological and tactical armor needed for high-stakes competition.",
      items: ["Tournament Mindset", "Time Management", "Opening Prep", "Post-Game Analysis"],
      icon: <Trophy className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
      color: "bg-white",
      shadow: "shadow-[6px_6px_0px_0px_rgba(249,115,22,1)] md:shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]"
    },
    {
      id: "05",
      title: "Holistic Development",
      desc: "Chess is our medium to build champions in life, not just on the board.",
      items: ["Confidence & Discipline", "Sportsmanship", "Emotional Control", "Academic Excellence"],
      icon: <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-red-500" />,
      color: "bg-black",
      textColor: "text-white",
      shadow: "shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden font-sans border-t-8 border-black">
      
      {/* Background Decals - Responsive Size */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none -z-10">
        <Target className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADING --- */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
            <Zap className="fill-yellow-400 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-black">The Star Edge</span>
          </div>
          
          <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-[0.8] uppercase italic tracking-tighter">
            WHAT MAKES {" "}
            <span className="text-white block md:inline [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">US TOTALLY</span> <br className="hidden md:block" />
            <span className="relative inline-block bg-yellow-400 text-black px-4 md:px-6 py-2 mt-4 rotate-0 md:-rotate-1 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              DIFFERENT?
            </span>
          </h2>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, x: -5 }}
              className={`relative border-4 border-black p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] ${f.color} ${f.shadow} transition-all duration-300 flex flex-col h-full`}
            >
              {/* Number Sticker */}
              <div className="absolute -top-4 -left-4 md:-top-5 md:-left-5 bg-black text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl border-4 border-black font-black text-lg md:text-xl rotate-[-10deg] shadow-[4px_4px_0px_0px_rgba(253,224,71,1)]">
                {f.id}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="p-2 md:p-3 bg-gray-100 rounded-2xl border-2 border-black">
                  {f.icon}
                </div>
                <ArrowUpRight className={`w-5 h-5 ${f.textColor || "text-black/20"}`} />
              </div>

              <h3 className={`text-xl md:text-2xl font-black uppercase italic leading-none mb-4 ${f.textColor || "text-black"}`}>
                {f.title}
              </h3>
              
              <p className={`text-xs md:text-sm font-bold mb-6 leading-relaxed ${f.textColor ? "text-gray-400" : "text-gray-600"}`}>
                {f.desc}
              </p>

              {/* Sub-Items List */}
              <div className="mt-auto space-y-2">
                {f.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" />
                    <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-tight ${f.textColor || "text-black"}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <div className="lg:col-span-1 border-4 border-dashed border-black/20 rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-yellow-50 transition-colors">
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black text-yellow-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 md:w-8 md:h-8" />
             </div>
             <h4 className="text-lg md:text-xl font-black uppercase italic">Ready to start?</h4>
             <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Join the elite rank</p>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-16 md:mt-20 border-t-4 border-black pt-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
            <p className="text-xl md:text-2xl font-black italic uppercase text-black max-w-md leading-tight md:leading-none text-center md:text-left">
              "We don't just teach moves; we build <span className="bg-yellow-400 px-1">grandmaster mindsets</span>."
            </p>
            <div className="flex -space-x-3 md:-space-x-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-black bg-gray-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="student" />
                 </div>
               ))}
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-black bg-yellow-400 flex items-center justify-center font-black text-[10px] md:text-xs">
                 500+
               </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DifferenceSection;