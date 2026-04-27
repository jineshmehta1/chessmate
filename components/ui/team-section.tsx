"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Target, 
  Star, 
  Zap, 
  Award,
  Youtube,
  Globe,
  Medal,
  ChevronRight
} from "lucide-react";

const TEAM = [
  {
    name: "Devam Makwana",
    role: "Founder and Coach",
    image: "/devam.webp", // Replace with actual path
    experience: "12+ Years",
    highlights: [
      "Represented India at the World Junior 2024",
      "Represented India at Commonwealth Games 2018",
      "3-Time State Champion",
      "Awarded Best Player of the Year (GCA)",
      "Gold Medalist - Gujarat State Championship",
      "Secured 2nd in International Chess Tournament 2018",
      "Top 10 Ranked Player in Gujarat (Last 5 Years)",
      "Winner of Multiple Open Gujarat Tournaments"
    ],
    primaryBadge: <Globe className="w-5 h-5 text-black" />
  },
  {
    name: "Ujjwal Bansal",
    role: "Founder and Coach",
    image: "/ujjwal.webp", // Replace with actual path
    experience: "10+ Years",
    highlights: [
      "Champion - 2023 U19 Junior State Chess",
      "Owner of 'Oneshot Chess' (7,000+ Subscribers)",
      "2nd Rank - 2024 U19 State Tournament",
      "2nd Rank - 2022 U16 State Championship",
      "4th Rank - 2020 State Senior Team Championship",
      "Proven Track Record in Junior State Levels"
    ],
    primaryBadge: <Youtube className="w-5 h-5 text-black" />
  }
];

export default function TeamSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white font-sans overflow-hidden selection:bg-[#EAB308] border-t-[10px] border-black">
      
      {/* Background Architectural Decal */}
      <div className="absolute top-20 left-[-5%] text-[10rem] md:text-[25rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic pointer-events-none">
        MASTERS
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 md:mb-32">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="fill-[#EAB308] text-[#EAB308] w-6 h-6" />
            <span className="text-[10px] md:text-xs font-[1000] uppercase tracking-[0.4em] text-black italic">The Leadership</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-tight uppercase tracking-tighter">
            MEET OUR <br />
            <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">FOUNDERS & COACHES</span>
          </h2>
        </div>

        {/* --- FOUNDERS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          {TEAM.map((founder, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              {/* IMAGE COLUMN */}
              <div className="w-full md:w-[45%] shrink-0">
                <div className="relative aspect-[3/4] w-full">
                  <div className="absolute inset-0 border-4 border-black shadow-[12px_12px_0px_0px_rgba(234,179,8,1)] overflow-hidden bg-gray-100 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Founder Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-[#EAB308] border-2 border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        {founder.primaryBadge}
                      </div>
                    </div>
                  </div>

                  {/* Exp Sticker */}
                  <div className="absolute -bottom-4 -right-4 bg-black text-[#EAB308] border-2 border-black px-4 py-2 font-[1000] uppercase text-[10px] tracking-widest shadow-lg z-20">
                    {founder.experience} EXP
                  </div>
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="flex flex-col h-full pt-2">
                <div className="mb-6">
                  <h3 className="text-3xl font-[1000] uppercase tracking-tighter text-black leading-none mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-[#EAB308] font-black uppercase text-[11px] tracking-[0.2em] bg-black inline-block px-3 py-1">
                    {founder.role}
                  </p>
                </div>

                <div className="space-y-4 flex-grow">
                   <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                      <Medal className="w-3 h-3" /> Career Milestones
                   </p>
                   <ul className="space-y-3">
                      {founder.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <ChevronRight className="w-4 h-4 text-[#EAB308] mt-0.5 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span className="text-[11px] font-bold uppercase tracking-tight text-gray-600 group-hover/item:text-black transition-colors leading-tight">
                            {item}
                          </span>
                        </li>
                      ))}
                   </ul>
                </div>

                {/* Founder Action CTA */}
                <div className="mt-8 pt-6 border-t-2 border-dashed border-black/10">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black hover:text-[#EAB308] transition-colors">
                    View Full Bio <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PHILOSOPHY BAR --- */}
        <div className="mt-24 md:mt-32 p-8 md:p-12 bg-black border-4 border-black relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-[15px_15px_0px_0px_rgba(234,179,8,1)]">
           <div className="absolute top-0 right-0 opacity-[0.05] p-4 pointer-events-none">
              <Trophy size={160} />
           </div>
           
           <div className="relative z-10 text-center md:text-left flex-grow">
              <h4 className="text-[#EAB308] font-black uppercase text-xs tracking-[0.4em] mb-4 italic">Our Shared Philosophy</h4>
              <p className="text-xl md:text-3xl font-[1000] text-white uppercase tracking-tighter leading-tight max-w-3xl">
                "We don't just teach the game; we engineer the mindset required to dominate at the highest levels of competitive chess."
              </p>
           </div>
           
           <div className="shrink-0 relative z-10">
              <div className="w-20 h-20 bg-[#EAB308] flex items-center justify-center border-2 border-black rotate-3">
                <Target size={40} className="text-black" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17"/>
    </svg>
  );
}