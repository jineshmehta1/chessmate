"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  BarChart4, 
  UserCheck, 
  Trophy, 
  Brain,
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
      title: "Grandmaster Curriculum",
      desc: "Our methodology is built on the training secrets of world-class Grandmasters, tailored for every skill level.",
      items: ["FIDE Rated Standards", "Strategic Leveling", "Mastery Roadmaps", "Tournament Readiness"],
      icon: <Layers className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    },
    {
      id: "02",
      title: "Data-Driven Analytics",
      desc: "We use advanced performance tracking and game analysis to identify and fix tactical weaknesses instantly.",
      items: ["LMS Progress Reports", "Game Accuracy Tracking", "Personalized Tactics", "AI-Powered Analysis"],
      icon: <BarChart4 className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
    },
    {
      id: "03",
      title: "Individual Mentorship",
      desc: "Even in group settings, each student receives personalized feedback based on their unique playing DNA.",
      items: ["Strength Profiling", "Custom Repertoire", "1-on-1 Feedback", "Rating Strategy"],
      icon: <UserCheck className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    },
    {
      id: "04",
      title: "Competitive Psychology",
      desc: "We train the mind to handle high-stakes pressure, building the resilience needed for tournament success.",
      items: ["Mindset Coaching", "Time Management", "Focus Exercises", "Anxiety Management"],
      icon: <Brain className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
    },
    {
      id: "05",
      title: "Elite Ecosystem",
      desc: "Students gain access to an exclusive global community and regular high-level competitive arenas.",
      items: ["Weekend Arena", "Grandmaster Masterclasses", "Regional Rankings", "Global Networking"],
      icon: <Trophy className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-black",
      textColor: "text-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden selection:bg-[#EAB308] border-t-[10px] border-black">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none -z-0">
        <Target className="w-[200px] h-[200px] md:w-[450px] md:h-[450px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24 text-left">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="fill-[#EAB308] text-[#EAB308] w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-black italic">The Chess Mate Edge</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-[0.9] uppercase tracking-tighter">
            WHY WE ARE <br />
            <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">TOTALLY DIFFERENT</span>
          </h2>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, x: -5 }}
              className={`relative border-4 border-black p-8 md:p-10 ${f.color} ${f.shadow} transition-all duration-300 flex flex-col h-full`}
            >
              {/* Number Badge */}
              <div className="absolute -top-5 -left-5 bg-black text-[#EAB308] w-12 h-12 flex items-center justify-center border-2 border-black font-black text-xl rotate-[-12deg] shadow-[4px_4px_0px_0px_rgba(234,179,8,1)]">
                {f.id}
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className={`p-3 rounded-none border-2 border-black ${f.textColor === 'text-white' ? 'bg-white text-black' : 'bg-[#EAB308] text-black'}`}>
                  {f.icon}
                </div>
                <ArrowUpRight className={`w-6 h-6 ${f.textColor || "text-black/10"}`} />
              </div>

              <h3 className={`text-2xl md:text-3xl font-[1000] uppercase italic leading-none mb-4 tracking-tighter ${f.textColor || "text-black"}`}>
                {f.title}
              </h3>
              
              <p className={`text-xs md:text-sm font-bold mb-8 leading-relaxed ${f.textColor ? "text-gray-400" : "text-gray-500"}`}>
                {f.desc}
              </p>

              {/* List */}
              <div className="mt-auto space-y-3">
                {f.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0" />
                    <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-widest ${f.textColor || "text-black"}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* JOIN CARD */}
          <div className="lg:col-span-1 border-4 border-dashed border-black/20 p-10 flex flex-col items-center justify-center text-center group transition-all hover:border-[#EAB308]">
             <div className="w-16 h-16 bg-black text-[#EAB308] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
             </div>
             <h4 className="text-xl md:text-2xl font-[1000] uppercase italic text-black">Ready to Begin?</h4>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Join the Elite Ranks</p>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-24 md:mt-32 pt-12 border-t-4 border-black flex flex-col lg:flex-row items-center justify-between gap-12">
            <h3 className="text-3xl md:text-4xl font-[1000] italic uppercase text-black max-w-xl leading-[1.1] text-center lg:text-left">
              "We don't just teach moves; we build <span className="bg-[#EAB308] px-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Grandmaster mindsets.</span>"
            </h3>
            
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex -space-x-4">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-12 h-12 md:w-14 md:h-14 border-4 border-black bg-gray-100 overflow-hidden shadow-md">
                      <img src={`https://i.pravatar.cc/150?u=${i + 40}`} alt="student" className="grayscale hover:grayscale-0 transition-all duration-500" />
                   </div>
                 ))}
              </div>
              <p className="text-[10px] font-black text-black uppercase tracking-[0.3em]">
                Joined by 2,000+ Rising Champions
              </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DifferenceSection;