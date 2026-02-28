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
    name: "Under 8 Girls Champion",
    prize: "1st Place",
    category: "Under 8 Girls",
    tournament: "3rd C-Cube State Level Chess Tournament",
    coach: "Hariharan",
    date: "15/02/2026",
    image: "/1.jpeg",
    color: "bg-yellow-400"
  },
  {
    name: "Under 12 Girls Runner-up",
    prize: "2nd Place",
    category: "Under 12 Girls",
    tournament: "3rd C-Cube State Level Chess Tournament",
    coach: "Raghav",
    date: "15/02/2026",
    image: "/2.jpeg",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    name: "Ritwik",
    prize: "2nd Place",
    category: "Under 1400 Rating",
    tournament: "Unity Open Chess Tournament",
    coach: "Raghav",
    date: "14/12/2025",
    image: "/ritvik.jpeg",
    color: "bg-white"
  },
  {
    name: "Under 9 Boys Finalist",
    prize: "4th Place",
    category: "U9 Boys Category",
    tournament: "Chengalpattu District Level Tournament",
    coach: "Veeramani",
    date: "15/02/2026",
    image: "/4.jpeg",
    color: "bg-yellow-400"
  },
  {
    name: "Sriharsh",
    prize: "2nd Place",
    category: "US Chess Category",
    tournament: "US Chess Tournament",
    coach: "Raghav",
    date: "24/01/2026",
    image: "/5.jpeg",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    name: "Sai Nitisha",
    prize: "1st Place",
    category: "FIDE Rating (3500/- Cash)",
    tournament: "Hyderabad FIDE Rating Tournament",
    coach: "Raghav",
    date: "17/01/2026",
    image: "/6.jpeg",
    color: "bg-white"
  }
];

export default function AchievementGallery() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden font-sans border-t-8 border-black">
      
      {/* Background Ghost Decal - Responsive sizing */}
      <div className="absolute top-40 right-[-5%] text-[6rem] md:text-[15rem] font-black text-gray-100/50 leading-none select-none -z-10 tracking-tighter uppercase italic opacity-40 md:opacity-100">
        VICTORY
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- PERFECTED HEADING --- */}
        <div className="mb-16 md:mb-32 text-center">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Trophy className="text-yellow-500 w-6 h-6 md:w-8 md:h-8" />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-black italic">Recent Triumphs</span>
          </div>
          
          {/* Main Header: 2xl on mobile, 5xl on desktop */}
          <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-[0.8] uppercase italic tracking-tighter">
            THE HALL OF <br />
            <span className="text-white block md:inline-block [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">CHAMPIONS</span> <br className="hidden md:block" />
            <span className="relative inline-block bg-black text-white px-4 md:px-8 py-2 mt-4 rotate-0 md:-rotate-1 border-4 border-black shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[10px_10px_0px_0px_rgba(253,224,71,1)]">
              SEASON 2026
            </span>
          </h2>
        </div>

        {/* --- ALTERNATING LIST --- */}
        <div className="space-y-24 md:space-y-40">
          {ACHIEVEMENTS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 md:gap-12 lg:gap-24`}
              >
                
                {/* IMAGE COMPOSITION */}
                <div className="w-full lg:w-1/2 relative px-2">
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative group"
                  >
                    {/* Main Frame */}
                    <div className="relative z-10 border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] bg-gray-100 transition-all duration-500 group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Prize Sticker */}
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-yellow-400 border-[3px] md:border-4 border-black px-4 py-1.5 md:px-6 md:py-2 rounded-xl rotate-[-5deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                         <span className="font-black italic uppercase text-base md:text-xl">{item.prize}</span>
                      </div>
                    </div>

                    {/* Background Decorative Box */}
                    <div className={`absolute inset-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[2.5rem] -z-10 ${isEven ? 'bg-yellow-400' : 'bg-black'}`}></div>
                  </motion.div>
                </div>

                {/* TEXT CONTENT */}
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="text-yellow-500 fill-yellow-400 w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">{item.category}</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-black uppercase italic leading-none mb-6 md:mb-8 tracking-tighter">
                      {item.name}
                    </h3>

                    <div className={`p-6 md:p-8 border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[2.5rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${item.color} ${item.textColor || 'text-black'}`}>
                      <div className="space-y-6">
                        <div className="flex items-start gap-3 md:gap-4">
                          <Zap className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-1" />
                          <div>
                            <p className="text-[9px] md:text-[10px] font-black uppercase opacity-50 tracking-widest mb-1">Tournament Title</p>
                            <p className="text-lg md:text-xl font-black uppercase italic leading-tight">{item.tournament}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-black/10">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-black/5 rounded-lg border border-black/10">
                                <User className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                            <div>
                              <p className="text-[9px] font-black uppercase opacity-50">Coach</p>
                              <p className="font-black text-xs md:text-sm uppercase">{item.coach}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-black/5 rounded-lg border border-black/10">
                                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                            <div>
                              <p className="text-[9px] font-black uppercase opacity-50">Event Date</p>
                              <p className="font-black text-xs md:text-sm uppercase">{item.date}</p>
                            </div>
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

        {/* --- FINAL CALL TO ACTION --- */}
        <div className="mt-24 md:mt-40 text-center">
             <h4 className="text-xl md:text-2xl font-black uppercase italic mb-8">Ready to write your own success story?</h4>
            <Link
  href="/contact"   // change to your actual route
  className="relative inline-block group active:scale-95 transition-transform"
>
  <div className="absolute inset-0 bg-yellow-400 rounded-2xl translate-x-1.5 translate-y-1.5 border-[3px] md:border-4 border-black group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>

  <div className="relative inline-flex items-center gap-3 md:gap-4 bg-black text-white px-8 md:px-12 py-4 md:py-5 border-[3px] md:border-4 border-black rounded-2xl font-black uppercase italic text-lg md:text-xl whitespace-nowrap">
    Enroll Now
    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
  </div>
</Link>
        </div>

      </div>
    </section>
  );
}