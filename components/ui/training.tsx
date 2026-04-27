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
      step: "Phase 01",
      title: "Strong Foundations",
      color: "bg-[#EAB308]",
      items: ["Piece Movement Mastery", "Basic Tactical Patterns", "Simple Endgame Logic", "Opening Fundamentals"]
    },
    {
      step: "Phase 02",
      title: "Strategic Depth",
      color: "bg-white",
      items: ["Positional Understanding", "Advanced Calculation", "Pawn Structures", "Middlegame Planning"]
    },
    {
      step: "Phase 03",
      title: "Elite Performance",
      color: "bg-black",
      textColor: "text-white",
      items: ["Opening Repertoire", "Endgame Precision", "Tournament Simulation", "Psychological Prep"]
    }
  ];

  const values = [
    { name: "Discipline", icon: <Clock className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "Integrity", icon: <Shield className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "Passion", icon: <Flame className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "Excellence", icon: <Gem className="w-4 h-4 md:w-5 md:h-5" /> },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden selection:bg-[#EAB308] border-t-[10px] border-black">
      
      {/* Background Architectural Decal */}
      <div className="absolute bottom-0 left-0 text-[10rem] md:text-[20rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
        GROWTH
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24 text-left">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-[#EAB308] w-6 h-6" />
            <span className="text-[10px] md:text-xs font-[1000] uppercase tracking-[0.4em] text-black italic">The Mastery Blueprint</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-[0.9] uppercase tracking-tighter">
            STRATEGIC {" "}
            <span className="text-white [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(234,179,8,1)]">TRAINING PATH.</span>
          </h2>
        </div>

        {/* --- PHASES GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-24 md:mb-32">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative border-4 border-black p-8 md:p-10 ${phase.color} ${phase.textColor || 'text-black'} shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full`}
            >
              {/* Step Badge */}
              <div className={`absolute -top-5 left-6 border-2 border-black px-4 py-1 font-[1000] uppercase text-[10px] md:text-xs shadow-lg ${phase.step === "Phase 03" ? "bg-[#EAB308] text-black" : "bg-black text-white"}`}>
                {phase.step}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-[1000] uppercase italic mb-8 mt-4 leading-none tracking-tighter">
                {phase.title}
              </h3>

              <ul className="space-y-4 flex-grow">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <ChevronRight className={`shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5 ${phase.textColor === 'text-white' ? 'text-[#EAB308]' : 'text-black'}`} strokeWidth={4} />
                    <span className="font-black text-[10px] md:text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Connecting Arrow (Desktop Only) */}
              {idx < 2 && (
                <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <ArrowRight className="w-6 h-6 text-black" />
                    </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* --- VALUES & COMMITMENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* CORE VALUES */}
          <div className="lg:col-span-5">
             <div className="flex items-center gap-3 mb-10">
                <Zap className="fill-[#EAB308] text-[#EAB308] w-6 h-6" />
                <h3 className="text-2xl md:text-4xl font-[1000] uppercase tracking-tighter text-black">CORE VALUES</h3>
             </div>
             
             <div className="flex flex-wrap gap-3">
                {values.map((v, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border-2 border-black px-5 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#EAB308] transition-all cursor-default">
                    <span className="text-black">{v.icon}</span>
                    <span className="font-black uppercase text-[11px] md:text-xs tracking-widest">{v.name}</span>
                  </div>
                ))}
             </div>
             
             <p className="mt-12 font-bold text-gray-500 text-sm md:text-base leading-relaxed border-l-4 border-[#EAB308] pl-6 max-w-md italic">
               "We nurture students to respect the game, their opponents, and the process of continuous self-improvement."
             </p>
          </div>

          {/* COMMITMENT BOX (HIGH CONTRAST) */}
          <div className="lg:col-span-7">
            <div className="relative bg-black text-white p-8 md:p-14 border-4 border-black shadow-[15px_15px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Shield className="w-32 h-32" />
                </div>
                
                <h3 className="text-3xl md:text-5xl font-[1000] uppercase text-[#EAB308] tracking-tighter leading-none mb-10">
                  OUR <br /> COMMITMENT
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    {[
                      "Measurable Elo growth",
                      "Transparent parent tracking",
                      "FIDE standard curriculum",
                      "Professional Match Mindset",
                      "Lifelong strategic skills"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                         <div className="w-6 h-6 bg-[#EAB308] flex items-center justify-center shrink-0 border border-white/20">
                            <CheckCircle className="w-4 h-4 text-black" strokeWidth={4} />
                         </div>
                         <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">{text}</span>
                      </div>
                    ))}
                </div>

                {/* Trust Indicator */}
                <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full bg-[#EAB308] border-2 border-black flex items-center justify-center font-black text-[10px] text-black italic">CM</div>
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center font-black text-[10px] text-black">✓</div>
                    </div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
                      Accredited Training Excellence
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