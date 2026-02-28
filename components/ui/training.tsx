"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Flame, 
  Gem, 
  Users, 
  Clock,
  ArrowRight,
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';

const TrainingApproach: React.FC = () => {
  const phases = [
    {
      step: "Phase 1",
      title: "Strong Foundations",
      color: "bg-yellow-400",
      items: ["Piece movement mastery", "Basic tactics", "Simple endgames", "Checkmate patterns"]
    },
    {
      step: "Phase 2",
      title: "Strategic Development",
      color: "bg-white",
      items: ["Positional understanding", "Opening principles", "Pawn structures", "Middlegame Planning"]
    },
    {
      step: "Phase 3",
      title: "Competitive Readiness",
      color: "bg-black",
      textColor: "text-white",
      items: ["Advanced tactics", "Opening repertoire", "Endgame precision", "Tournament simulation"]
    }
  ];

  const values = [
    { name: "Discipline", icon: <Clock className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "Consistency", icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "Integrity", icon: <Shield className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "Passion", icon: <Flame className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "Excellence", icon: <Gem className="w-4 h-4 md:w-5 md:h-5" /> },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden font-sans border-t-8 border-black selection:bg-yellow-400">
      
      {/* Background Decal - Responsive sizing */}
      <div className="absolute bottom-5 left-5 md:bottom-0 md:left-0 text-[6rem] md:text-[15rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic opacity-60 md:opacity-100">
        GROWTH
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADING (2xl Mobile / 5xl Desktop) --- */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
            <Target className="text-black w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-black italic">The Path to Mastery</span>
          </div>
          
          <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-[0.85] uppercase italic tracking-tighter">
            OUR TRAINING {" "}
            <span className="text-white block md:inline [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">STRATEGIC</span> <br className="hidden md:block" />
            <span className="relative inline-block bg-black text-white px-4 md:px-6 py-2 mt-4 rotate-0 md:rotate-1 border-4 border-black shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[10px_10px_0px_0px_rgba(253,224,71,1)]">
              APPROACH
            </span>
          </h2>
        </div>

        {/* --- PHASES GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 mb-20 md:mb-24">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`relative border-[3px] md:border-4 border-black p-8 rounded-[2.5rem] md:rounded-[3rem] ${phase.color} ${phase.textColor || 'text-black'} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
            >
              {/* Floating Step Badge */}
              <div className={`absolute -top-4 md:-top-6 left-8 md:left-10 border-[3px] md:border-4 border-black px-4 py-1 rounded-full font-black uppercase italic text-[11px] md:text-sm ${phase.step === "Phase 3" ? "bg-yellow-400 text-black" : "bg-black text-white"}`}>
                {phase.step}
              </div>
              
              <h3 className="text-xl md:text-2xl font-black uppercase italic mb-6 md:mb-8 mt-4 leading-none tracking-tight">
                {phase.title}
              </h3>

              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                    <span className="font-black text-[11px] md:text-sm uppercase tracking-tight opacity-90">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Connecting Arrow for Desktop */}
              {idx < 2 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white border-4 border-black p-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <ArrowRight className="w-6 h-6 text-black" />
                    </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* --- VALUES & COMMITMENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* CORE VALUES */}
          <div className="lg:col-span-5 text-center md:text-left">
             <h3 className="text-2xl md:text-3xl font-black uppercase italic mb-8 flex items-center justify-center md:justify-start gap-4 tracking-tighter">
               <Zap className="fill-yellow-400 w-6 h-6 md:w-8 md:h-8" /> Core Values
             </h3>
             <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                {values.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-50 border-[3px] md:border-4 border-black px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-colors cursor-default group">
                    <span className="text-black transition-transform group-hover:scale-110">{v.icon}</span>
                    <span className="font-black uppercase italic text-[11px] md:text-sm">{v.name}</span>
                  </div>
                ))}
             </div>
             <p className="mt-8 font-bold text-gray-500 text-sm md:text-base leading-relaxed italic border-l-4 border-yellow-400 pl-4 text-left">
               "We encourage students to respect opponents, follow fair play rules, and develop strong character along with chess strength."
             </p>
          </div>

          {/* COMMITMENT CARD */}
          <div className="lg:col-span-7">
            <div className="relative bg-black text-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-4 border-black shadow-[10px_10px_0px_0px_rgba(253,224,71,1)] md:shadow-[15px_15px_0px_0px_rgba(253,224,71,1)] overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Shield className="w-24 h-24 md:w-32 md:h-32" />
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black uppercase italic mb-8 text-yellow-400 tracking-tighter leading-none">
                  Our Commitment
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-6">
                    {[
                      "Continuous student improvement",
                      "Transparent communication",
                      "Regular performance tracking",
                      "Motivating environment",
                      "Building long-term careers"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_white]">
                            <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" strokeWidth={3} />
                         </div>
                         <span className="text-[10px] md:text-xs font-black uppercase tracking-wide">{text}</span>
                      </div>
                    ))}
                </div>

                {/* Trust Indicator */}
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex -space-x-2">
                        <Users className="w-5 h-5 text-yellow-400" />
                        <Users className="w-5 h-5 text-yellow-500" />
                    </div>
                    <p className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-center sm:text-left">
                      Trusted by parents & students worldwide
                    </p>
                </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrainingApproach;