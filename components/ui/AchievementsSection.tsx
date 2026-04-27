"use client";

import React, { useRef, useState, useEffect } from 'react';
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
    name: "Elite Junior Champion",
    prize: "1st Place",
    category: "Under 10 Category",
    tournament: "State Scholastic Open Championship",
    coach: "Grandmaster A.",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071",
    color: "bg-[#EAB308]"
  },
  {
    name: "National Under-12 Finalist",
    prize: "2nd Place",
    category: "U12 National",
    tournament: "All India Invitational Trophy",
    coach: "Senior Coach B.",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1916",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    name: "Strategic Masters Winner",
    prize: "1st Place",
    category: "FIDE Rated Section",
    tournament: "Continental Masters Cup",
    coach: "Master Trainer C.",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2070",
    color: "bg-white"
  },
  {
    name: "Regional Category Finalist",
    prize: "3rd Place",
    category: "U14 Boys Section",
    tournament: "District Open Chess Festival",
    coach: "Senior Coach D.",
    date: "Nov 2025",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070",
    color: "bg-[#EAB308]"
  },
  {
    name: "International Invit. Winner",
    prize: "1st Place",
    category: "Global Category",
    tournament: "World Youth Speed Chess League",
    coach: "Grandmaster E.",
    date: "Oct 2025",
    image: "https://images.unsplash.com/photo-1523341081608-173627341d25?q=80&w=2070",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    name: "Rising Star Trophy",
    prize: "Top 5",
    category: "Intermediate",
    tournament: "City Chess Arena Championship",
    coach: "Lead Coach F.",
    date: "Sep 2025",
    image: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?q=80&w=1957",
    color: "bg-white"
  }
];

const AchievementsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      setCanScrollLeft(scrollContainerRef.current.scrollLeft > 20);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth > 768 ? 400 : clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden font-sans border-t-8 border-black">
      
      {/* Ghost Decal */}
      <div className="absolute top-0 right-5 md:right-10 text-[6rem] md:text-[12rem] font-[1000] text-gray-100 leading-none select-none -z-10 tracking-tighter uppercase italic opacity-60">
        VICTORY
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-black p-2">
                <Trophy className="w-4 h-4 text-[#EAB308]" />
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black italic">Recent Triumphs</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-tight uppercase tracking-tighter">
              Hall of {" "}
              <span className="text-white [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(234,179,8,1)]">Champions.</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 md:w-16 md:h-16 border-2 border-black flex items-center justify-center transition-all ${!canScrollLeft ? 'opacity-20 cursor-not-allowed' : 'hover:bg-[#EAB308]'}`}
            >
              <ChevronLeft className="w-6 h-6 stroke-[3px]" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 md:w-16 md:h-16 bg-black text-[#EAB308] border-2 border-black flex items-center justify-center hover:bg-[#EAB308] hover:text-black transition-all"
            >
              <ChevronRight className="w-6 h-6 stroke-[3px]" />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL --- */}
        <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-10 no-scrollbar scroll-smooth"
        >
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="snap-center shrink-0 w-[80vw] sm:w-[320px] md:w-[360px]"
            >
              <div className={`
                relative h-full ${item.color} border-[4px] border-black p-5 transition-all duration-300
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 group
                ${item.textColor || 'text-black'}
              `}>
                
                {/* Image Composition */}
                <div className="relative aspect-[4/5] w-full border-[3px] border-black overflow-hidden bg-gray-100 mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Rank Sticker */}
                  <div className="absolute top-4 left-4 bg-black text-[#EAB308] border-2 border-black px-4 py-2 rotate-[-5deg] shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] z-20">
                    <p className="text-[14px] md:text-[18px] font-black uppercase italic leading-none">{item.prize}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-2 opacity-60">
                    <Star size={12} className="fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-[1000] uppercase italic leading-none mb-6 min-h-[48px]">
                    {item.name}
                  </h3>
                  
                  <div className={`space-y-4 p-4 border-2 border-black/10 bg-black/5`}>
                    <div className="flex items-start gap-3">
                      <Target className="w-4 h-4 shrink-0 mt-0.5 text-current opacity-40" />
                      <p className="text-[11px] md:text-[12px] font-bold uppercase leading-tight tracking-tight">{item.tournament}</p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-black/10 pt-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 opacity-40" />
                        <p className="text-[9px] font-black uppercase tracking-tighter">Coach: {item.coach}</p>
                      </div>
                      <p className="text-[9px] font-black uppercase opacity-40">{item.date}</p>
                    </div>
                  </div>
                </div>

                <Zap className="absolute bottom-4 right-4 w-6 h-6 opacity-5 group-hover:opacity-20 transition-opacity" />
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