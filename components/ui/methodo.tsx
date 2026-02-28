"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Target, 
  Zap, 
  ShieldCheck, 
  MousePointer2, 
  Trophy, 
  History, 
  Layout, 
  MonitorPlay,
  Star
} from "lucide-react";

export default function CourseExtras() {
  const methodology = [
    {
      step: "01",
      title: "First Principle Thinking",
      desc: "We skip rote memorization. Students learn the 'Why' behind every move to build a rock-solid foundation.",
      icon: <Brain size={32} />,
      color: "bg-white",
    },
    {
      step: "02",
      title: "Tactical Pattern Recognition",
      desc: "Intensive drills to spot checkmate patterns and exchange sacrifices in milliseconds.",
      icon: <Target size={32} />,
      color: "bg-yellow-400",
    },
    {
      step: "03",
      title: "Psychological Warfare",
      desc: "Advanced tournament mindset training to handle pressure and exploit opponent weaknesses.",
      icon: <Zap size={32} />,
      color: "bg-black",
      textColor: "text-white",
    }
  ];

  const tools = [
    { title: "24/7 Practice Zone", icon: <MonitorPlay />, desc: "Access to our private arena for practice games anytime." },
    { title: "Smart Puzzle Engine", icon: <History />, desc: "Personalized puzzles that adapt to your specific rating gaps." },
    { title: "Monthly Leaderboard", icon: <Trophy />, desc: "Compete for rankings and win exclusive academy merch." },
    { title: "Interactive Analysis", icon: <Layout />, desc: "Post-game reviews with IM-level engine insights." },
  ];

  return (
    <div className="bg-white font-sans selection:bg-yellow-400">
      
      {/* --- SECTION 1: COACHING METHODOLOGY --- */}
      <section className="relative py-24 overflow-hidden border-t-4 border-black">
        {/* Background Doodles */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-[5%] w-16 h-16 rounded-full bg-yellow-400 border-4 border-black z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-10 right-[10%] w-32 h-32 rounded-full border-4 border-dashed border-black/10 z-0" />
        <div className="absolute top-1/2 left-[-20px] w-20 h-20 rounded-full bg-black/5 z-0" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-24 right-[15%] text-yellow-500 opacity-20 z-0"><Zap size={80} /></motion.div>
        <div className="absolute bottom-20 left-[20%] w-40 h-40 rounded-full bg-yellow-400/5 z-0" />
        
        {/* Ghost Decal */}
        <div className="absolute top-10 right-10 text-[12rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic">
          METHOD
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase italic leading-none mb-6">
              Our <span className="bg-yellow-400 px-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Coaching</span> DNA.
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs max-w-lg mx-auto">
              How we turn casual players into rated tournament champions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((m, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`relative p-10 border-4 border-black rounded-[2.5rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${m.color} ${m.textColor || 'text-black'} transition-all hover:shadow-none`}
              >
                <div className="absolute top-6 right-8 text-5xl font-black opacity-10 italic">{m.step}</div>
                <div className={`w-16 h-16 rounded-2xl border-2 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] ${idx === 2 ? 'bg-yellow-400 text-black' : 'bg-black text-white'}`}>
                  {m.icon}
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-4 leading-none">{m.title}</h3>
                <p className="text-sm font-bold opacity-70 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE LEARNING ECOSYSTEM (PLATFORM TOOLS) --- */}
      <section className="relative py-24 bg-black overflow-hidden">
        {/* Background Decal */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[15rem] font-black text-white/5 leading-none select-none -z-0 tracking-tighter uppercase italic">
          TOOLS
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Interactive List */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">The Digital Advantage</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic leading-none mb-10">
                More than <br />
                <span className="text-yellow-400">Just Classes.</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {tools.map((tool, idx) => (
                  <div key={idx} className="p-6 border-2 border-white/20 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group cursor-default">
                    <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </div>
                    <h4 className="text-white font-black uppercase italic mb-2 tracking-tight">{tool.title}</h4>
                    <p className="text-gray-500 text-xs font-bold leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mockup/Visual Image */}
            <div className="relative">
              <div className="relative z-10 border-4 border-white rounded-[3rem] overflow-hidden shadow-[20px_20px_0px_0px_rgba(253,224,71,1)] bg-gray-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1586165368502-1badb97a6461?q=80&w=1000&auto=format&fit=crop" 
                  alt="Platform Preview" 
                  className="w-full h-auto grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Floating UI Elements */}
                <div className="absolute top-10 left-10 p-4 bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] animate-bounce-slow">
                  <p className="text-[8px] font-black uppercase text-gray-400">Current Solving Streak</p>
                  <p className="text-xl font-black italic text-black">42 Days 🔥</p>
                </div>
              </div>

              {/* Decorative Circle Tag */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-400 border-4 border-black rounded-full flex flex-col items-center justify-center rotate-12 shadow-xl">
                 <MousePointer2 size={32} className="text-black" />
                 <p className="text-[10px] font-black uppercase mt-1">Free Demo</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FINAL COMPACT CTA --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-yellow-400 border-4 border-black rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black uppercase italic leading-none mb-2">Ready to move?</h3>
              <p className="text-black/70 font-bold uppercase text-xs tracking-widest">Enrollment ends in 48 hours for the next batch.</p>
            </div>
            <button className="px-10 py-5 bg-black text-white font-black uppercase italic tracking-widest rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              Claim Your Seat
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}