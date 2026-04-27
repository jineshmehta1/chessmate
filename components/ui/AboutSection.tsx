"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Trophy, 
  Target,
  ShieldCheck,
  Users,
  Compass,
  ArrowUpRight
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const coreValues = [
    { 
      icon: <ShieldCheck className="w-5 h-5" />, 
      title: "FIDE Certified", 
      desc: "National Level Coaches" 
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      title: "Structured Groups", 
      desc: "Collaborative Learning" 
    },
    { 
      icon: <Target className="w-5 h-5" />, 
      title: "1-on-1 Coaching", 
      desc: "Personalized Roadmap" 
    },
    { 
      icon: <Compass className="w-5 h-5" />, 
      title: "Life Skills", 
      desc: "Discipline & Logic" 
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden selection:bg-[#EAB308]">
      
      {/* Background Architectural Decal */}
      <div className="absolute top-1/4 -right-10 md:-right-20 text-[8rem] md:text-[22rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic pointer-events-none">
        STRATEGY
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* --- LEFT COLUMN: IMAGE COMPOSITION --- */}
          <div className="w-full lg:w-[45%] mb-12 lg:mb-0">
            <div className="relative w-full aspect-[4/5] max-w-[420px] md:max-w-[500px] mx-auto">
              
              {/* Primary Image Frame */}
              <motion.div 
                whileHover={{ rotate: -1 }}
                className="absolute top-0 left-0 w-[85%] h-[65%] z-10 border-4 border-black overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <img 
                  src="/training.png" 
                  alt="Chess Mate Training"
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Highlight Overlap Frame */}
              <motion.div 
                whileHover={{ rotate: 1, x: 5 }}
                className="absolute top-1/4 right-0 w-[60%] h-[50%] z-20 border-4 border-black p-2 bg-white shadow-[10px_10px_0px_0px_rgba(234,179,8,1)]"
              >
                <img 
                  src="/coaching.png" 
                  alt="Chess Coaching"
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* EXPERIENCE BADGE - 12+ YEARS */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 left-10 md:-left-6 z-40 bg-black text-[#EAB308] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] flex flex-col items-center"
              >
                <span className="text-4xl md:text-5xl font-[1000] leading-none uppercase">12+</span>
                <span className="text-[10px] font-black uppercase tracking-widest mt-2 whitespace-nowrap">Years Experienced</span>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TEXT CONTENT --- */}
          <div className="w-full lg:w-[55%] text-left">
            
            {/* Header Area */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="fill-[#EAB308] text-[#EAB308] w-5 h-5" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black">A Legacy of Quality</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-[0.9] uppercase tracking-tighter">
                BEACON OF {" "}
                <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">EXCELLENCE</span>
              </h2>
            </div>

            {/* Core About Copy */}
            <div className="space-y-6 text-gray-500 font-bold text-sm md:text-base leading-relaxed mb-12 max-w-xl">
              <p className="text-black font-[1000] uppercase tracking-tight text-lg md:text-xl border-l-4 border-[#EAB308] pl-6">
                Chess Mate is a beacon of quality education, offering structured group courses and personalized sessions led by FIDE Certified coaches.
              </p>
              <p>
                Founded with a passion for cultivating young minds, Chess Mate began its journey with a vision of promoting strategic thinking and skill development. We take pride in shaping individuals’ chess proficiency while honing essential life skills.
              </p>
            </div>

            {/* Values Grid - Compact & Professional */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {coreValues.map((v, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group">
                  <div className="bg-[#EAB308] p-2 border-2 border-black shrink-0 transition-transform group-hover:rotate-12">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-[1000] uppercase tracking-wider text-black leading-none mb-1">{v.title}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action Badge */}
            <div className="p-8 border-4 border-black bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-[0.03] p-4 pointer-events-none">
                    <Trophy className="w-24 h-24" />
                </div>
                <div className="relative z-10 text-center md:text-left">
                    <p className="text-[10px] font-black uppercase text-[#EAB308] tracking-[0.3em] mb-2">Ready to start?</p>
                    <h3 className="text-xl font-[1000] uppercase tracking-tighter text-black">Begin your journey with FIDE National Coaches.</h3>
                </div>
                <a href="/contact" className="bg-black text-white p-4 border-2 border-black hover:bg-[#EAB308] hover:text-black transition-colors shrink-0">
                    <ArrowUpRight className="w-6 h-6" />
                </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;