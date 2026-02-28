"use client";

import React, { useRef, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Star, 
  Zap, 
  Target,
  User,
  CalendarDays
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Achievement {
  name: string;
  prize: string;
  category: string;
  tournament: string;
  coach: string;
  date: string;
  image: string;
  color: string;
  textColor?: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    name: "Under 8 Girls Champion",
    prize: "1st Place",
    category: "U8 Girls",
    tournament: "3rd C-Cube State Level Chess Tournament",
    coach: "Hariharan",
    date: "15/02/2026",
    image: "/1.jpeg",
    color: "bg-yellow-400"
  },
  {
    name: "Under 12 Girls Runner-up",
    prize: "2nd Place",
    category: "U12 Girls",
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
    category: "U1400 Rating",
    tournament: "Unity Open Chess Tournament",
    coach: "Raghav",
    date: "14/12/2025",
    image: "/ritvik.jpeg",
    color: "bg-white"
  },
  {
    name: "Under 9 Boys Finalist",
    prize: "4th Place",
    category: "U9 Boys",
    tournament: "Chengalpattu District Level Tournament",
    coach: "Veeramani",
    date: "15/02/2026",
    image: "/4.jpeg",
    color: "bg-yellow-400"
  },
  {
    name: "Sriharsh",
    prize: "2nd Place",
    category: "US Chess",
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
    category: "FIDE Rating",
    tournament: "Hyderabad FIDE Rating Tournament",
    coach: "Raghav",
    date: "17/01/2026",
    image: "/6.jpeg",
    color: "bg-white"
  }
];

const AchievementsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      setCanScrollLeft(scrollContainerRef.current.scrollLeft > 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth > 768 ? 420 : clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden font-sans selection:bg-yellow-400">
      
      {/* Background Decor */}
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-[5%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 border-[3px] md:border-4 border-black z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute bottom-10 right-[5%] w-24 h-24 md:w-40 md:h-40 rounded-full border-2 md:border-4 border-dashed border-black/5 z-0" />

      {/* Ghost Decal - Responsive Font */}
      <div className="absolute top-0 right-5 md:right-10 text-[6rem] md:text-[15rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic opacity-60">
        FAME
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="bg-black p-2 rounded-lg">
                <Trophy className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black italic">Student Achievements</span>
            </div>
            {/* Heading: 2xl on mobile, 5xl on desktop */}
            <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-none uppercase italic tracking-tighter">
              Our Rising <br />
              <span className="text-white block md:inline [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">Champions.</span>
            </h2>
          </div>
          
          <div className="flex justify-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className={`w-12 h-12 md:w-14 md:h-14 bg-white border-[3px] md:border-4 border-black flex items-center justify-center transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 ${!canScrollLeft ? 'opacity-30 grayscale' : 'hover:bg-yellow-400'}`}
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 stroke-[3px]" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 md:w-14 md:h-14 bg-white border-[3px] md:border-4 border-black flex items-center justify-center hover:bg-yellow-400 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 stroke-[3px]" />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL --- */}
        <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-12 px-1 no-scrollbar scroll-smooth"
        >
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-[380px]"
            >
              <div className={`
                relative h-full ${item.color} border-[3px] md:border-[4px] border-black p-5 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-300
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-none hover:translate-x-1 hover:translate-y-1 group
                ${item.textColor || 'text-black'}
              `}>
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[3px] border-black bg-gray-100 mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Prize Sticker */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black border-[2px] md:border-[3px] border-black px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-6 group-hover:rotate-3 group-hover:scale-110 transition-all">
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-tighter text-center opacity-70">RANK</p>
                    <p className="text-lg md:text-2xl font-black italic leading-none">{item.prize}</p>
                  </div>

                  {/* Category Label */}
                  <div className="absolute bottom-4 left-4 bg-white border-2 border-black px-3 py-1 md:py-1.5 rounded-xl flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-black" />
                    <span className="text-[9px] md:text-[10px] font-black uppercase text-black tracking-tight">{item.category}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-1 text-left">
                  <h3 className="text-xl md:text-3xl font-black uppercase italic leading-none mb-6 min-h-[50px] md:min-h-[64px]">
                    {item.name}
                  </h3>
                  
                  <div className={`space-y-4 p-4 md:p-5 rounded-2xl md:rounded-3xl border-2 border-dashed ${item.textColor === 'text-white' ? 'border-white/20 bg-white/5' : 'border-black/10 bg-black/5'}`}>
                    <div className="flex items-start gap-3">
                      <Target className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5 text-yellow-500" />
                      <p className="text-[11px] md:text-[13px] font-bold leading-tight uppercase tracking-tight">{item.tournament}</p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-current/10 pt-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-60" />
                        <p className="text-[9px] md:text-[11px] font-black uppercase tracking-tighter">Coach: {item.coach}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-60" />
                        <p className="text-[9px] md:text-[11px] font-black uppercase opacity-60">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Zap Corner */}
                <Zap className="absolute bottom-6 right-6 w-5 h-5 md:w-6 md:h-6 opacity-5 group-hover:opacity-20 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default AchievementsSection;