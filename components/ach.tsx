"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Trophy, 
  User, 
  Calendar, 
  Zap,
  ChevronRight,
  Star
} from 'lucide-react';

const ACHIEVEMENTS = [
  {
    name: "Junior State Champion",
    prize: "1st Place",
    category: "Under 10 Category",
    tournament: "State Junior Chess Championship 2026",
    coach: "Master Coach A.",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop",
    color: "bg-[#EAB308]"
  },
  {
    name: "Elite Masters Runner-up",
    prize: "2nd Place",
    category: "FIDE Rated Section",
    tournament: "National Elite Invitational",
    coach: "Grandmaster B.",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1916&auto=format&fit=crop",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    name: "Scholastic Gold Medalist",
    prize: "Gold Medal",
    category: "Inter-School Finals",
    tournament: "City Scholastic Chess League",
    coach: "Senior Trainer C.",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2070&auto=format&fit=crop",
    color: "bg-white"
  },
  {
    name: "District Category Winner",
    prize: "1st Place",
    category: "Under 14 Boys",
    tournament: "District Level Open Masters",
    coach: "Master Coach D.",
    date: "Nov 2025",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop",
    color: "#EAB308"
  }
];

export default function AchievementGallery() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans border-t-[10px] border-black relative">
      
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-[-5%] text-[8rem] md:text-[15rem] font-[1000] text-gray-100/60 leading-none select-none -z-0 tracking-tighter uppercase italic pointer-events-none">
        VICTORY
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-20 md:mb-32 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Trophy className="text-[#EAB308]" size={28} />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-black italic">Hall of Fame</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-[1000] text-black leading-tight uppercase tracking-tighter">
            Our <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">Champions</span>
          </h2>
          
          <div className="inline-block bg-black text-[#EAB308] px-6 py-2 mt-6 font-black text-xs md:text-sm uppercase tracking-widest border-2 border-black">
            Success Stories Season 2025-26
          </div>
        </div>

        {/* --- ACHIEVEMENTS LIST --- */}
        <div className="space-y-32 md:space-y-48">
          {ACHIEVEMENTS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                
                {/* IMAGE FRAME */}
                <div className="w-full lg:w-1/2 relative">
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative group"
                  >
                    {/* Main Image Box */}
                    <div className="relative z-10 border-[4px] border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] aspect-[4/3] overflow-hidden bg-gray-50 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      />
                      
                      {/* Floating Rank Badge */}
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#EAB308] border-[3px] border-black px-4 py-2 rotate-[-4deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                         <span className="font-[1000] uppercase text-sm md:text-lg text-black">{item.prize}</span>
                      </div>
                    </div>

                    {/* Decorative Background Offset */}
                    <div className={`absolute inset-0 translate-x-6 translate-y-6 border-[4px] border-black -z-10 ${isEven ? 'bg-[#EAB308]' : 'bg-black'}`}></div>
                  </motion.div>
                </div>

                {/* CONTENT BLOCK */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="text-[#EAB308] fill-[#EAB308]" size={16} />
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">{item.category}</span>
                    </div>

                    <h3 className="text-4xl md:text-6xl font-[1000] text-black uppercase leading-[0.9] tracking-tighter">
                      {item.name}
                    </h3>

                    <div className={`p-8 border-[4px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${item.color === 'bg-[#EAB308]' ? 'bg-[#EAB308]' : (item.color || 'bg-white')} ${item.textColor || 'text-black'}`}>
                      <div className="space-y-8">
                        <div className="flex items-start gap-4">
                          <Zap className="shrink-0 mt-1" size={24} />
                          <div>
                            <p className="text-[9px] font-black uppercase opacity-40 tracking-widest mb-1">Tournament Title</p>
                            <p className="text-xl md:text-2xl font-[1000] uppercase leading-tight tracking-tight">{item.tournament}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/10">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <User size={14} className="opacity-40" />
                              <p className="text-[9px] font-black uppercase opacity-40">Academy Coach</p>
                            </div>
                            <p className="font-black text-xs md:text-sm uppercase tracking-wider">{item.coach}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar size={14} className="opacity-40" />
                              <p className="text-[9px] font-black uppercase opacity-40">Event Date</p>
                            </div>
                            <p className="font-black text-xs md:text-sm uppercase tracking-wider">{item.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

        {/* --- BOTTOM CALL TO ACTION --- */}
        <div className="mt-32 md:mt-48 text-center bg-gray-50 border-4 border-dashed border-black p-12 relative">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4">
               <Trophy size={48} className="text-[#EAB308]" />
             </div>
             
             <h4 className="text-2xl md:text-4xl font-[1000] uppercase tracking-tighter mb-8 text-black">
               Start Your Journey Toward <br /> The Grandmaster Level.
             </h4>

             <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-black text-[#EAB308] px-10 py-5 font-black uppercase text-sm tracking-[0.2em] transition-all hover:bg-[#EAB308] hover:text-black border-2 border-black"
              >
                Join the Academy
                <ChevronRight size={20} />
             </Link>
        </div>

      </div>
    </section>
  );
}