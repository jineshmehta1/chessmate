"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  UserCheck, 
  BarChart3, 
  Users2, 
  Zap, 
  Trophy,
  CheckCircle2,
  ArrowUpRight,
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
      title: "Fully Gamified Platform",
      desc: "Chessmate runs on its own custom-built platform where learning feels like a game, not a class. Every action creates instant visual feedback.",
      items: ["5M+ Interactive Puzzles", "Real-Time Visual Rewards", "Leaderboards Tracking", "Anti-Lecture Approach"],
      icon: <Gamepad2 className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    },
    {
      id: "02",
      title: "Mentorship at Scale",
      desc: "Even in groups, every student is analyzed based on their unique playing style. We don’t teach one method—we train your method.",
      items: ["Personalized Feedback", "Strength & Weakness Mapping", "Customized Progress Plans", "Position-Based Guidance"],
      icon: <UserCheck className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
    },
    {
      id: "03",
      title: "Data-Driven Progress",
      desc: "Every student's performance is analyzed. Parents receive clear monthly reports ensuring transparency and consistent growth.",
      items: ["Monthly Report Cards", "Performance Breakdown", "Training Activity Insights", "Clear Elo Tracking"],
      icon: <BarChart3 className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    },
    {
      id: "04",
      title: "Competitive Ecosystem",
      desc: "Students become part of an active chess community where they play, compete, and grow together through regular internal matchups.",
      items: ["Regular Internal Arenas", "Practice Matchups", "Peer Learning Environment", "Early Match Exposure"],
      icon: <Users2 className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
    },
    {
      id: "05",
      title: "Real Game Focus",
      desc: "We bridge the gap between theory and practice. Every lesson connects directly to practical play and decision-making on the board.",
      items: ["Live Game Analysis", "Mistake Breakdown", "Thinking Frameworks", "Result-Oriented Training"],
      icon: <Zap className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    },
    {
      id: "06",
      title: "Built by Active Players",
      desc: "Designed by high-level players who understand what it takes to compete. No outdated theory—only battle-tested methods.",
      items: ["Tournament Insights", "Modern Training Tech", "Practical Repertoires", "Winning Mindset"],
      icon: <Trophy className="w-6 h-6 md:w-7 md:h-7" />,
      color: "bg-black",
      textColor: "text-white",
      shadow: "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden selection:bg-[#EAB308] border-t-[10px] border-black">
      
      {/* Background Decal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[25rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
        DIFFERENT
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24 text-left">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="fill-[#EAB308] text-[#EAB308] w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs font-[1000] uppercase tracking-[0.4em] text-black italic">The Chess Mate Edge</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-[0.9] uppercase tracking-tighter">
            WHY ARE WE {" "}
            <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">TOTALLY DIFFERENT?</span>
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
              {/* ID Badge */}
              <div className="absolute -top-5 -left-5 bg-black text-[#EAB308] w-12 h-12 flex items-center justify-center border-2 border-black font-black text-xl rotate-[-12deg] shadow-[4px_4px_0px_0px_rgba(234,179,8,1)]">
                {f.id}
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className={`p-3 border-2 border-black ${f.textColor === 'text-white' ? 'bg-white text-black' : 'bg-[#EAB308] text-black'}`}>
                  {f.icon}
                </div>
                <ArrowUpRight className={`w-6 h-6 ${f.textColor || "text-black/10"}`} />
              </div>

              <h3 className={`text-2xl md:text-2xl font-[1000] uppercase italic leading-none mb-4 tracking-tighter ${f.textColor || "text-black"}`}>
                {f.title}
              </h3>
              
              <p className={`text-xs md:text-sm font-bold mb-8 leading-relaxed ${f.textColor ? "text-gray-400" : "text-gray-500"}`}>
                {f.desc}
              </p>

              {/* Sub-Items List */}
              <div className="mt-auto space-y-3">
                {f.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0" />
                    <span className={`text-[10px] md:text-[10px] font-black uppercase tracking-widest ${f.textColor || "text-black"}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM QUOTE SECTION --- */}
        <div className="mt-24 md:mt-32 pt-12 border-t-4 border-black flex flex-col lg:flex-row items-center justify-between gap-12">
            <h3 className="text-3xl md:text-4xl font-[1000] italic uppercase text-black max-w-xl leading-[1.1] text-center lg:text-left">
              "Training the <span className="bg-[#EAB308] px-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Grandmasters</span> of tomorrow through data and passion."
            </h3>
            
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex -space-x-4">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-12 h-12 md:w-14 md:h-14 border-4 border-black bg-gray-100 overflow-hidden shadow-md">
                      <img src={`https://i.pravatar.cc/150?u=${i + 45}`} alt="student" className="grayscale hover:grayscale-0 transition-all duration-500" />
                   </div>
                 ))}
              </div>
              <p className="text-[10px] font-black text-black uppercase tracking-[0.3em]">
                Join our Champion Students Worldwide
              </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DifferenceSection;