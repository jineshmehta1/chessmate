"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { 
  ArrowLeft, 
  ArrowRight, 
  Trophy, 
  Star, 
  Medal, 
  ChevronUp, 
  Sparkles,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const winners = [
  {
    id: 1,
    name: "ANMAY",
    title: "Tournament Winner",
    country: "India",
    flagUrl: "https://flagcdn.com/w80/in.png",
    image: "https://images.unsplash.com/photo-1599849926834-8c835252c002?q=80&w=800&auto=format&fit=crop",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 2,
    name: "HARI",
    title: "Regional Champion",
    country: "Oman",
    flagUrl: "https://flagcdn.com/w80/om.png",
    image: "https://images.unsplash.com/photo-1629249767353-8d6b67776d6c?q=80&w=800&auto=format&fit=crop",
    shadow: "shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]" // Yellow Shadow
  },
  {
    id: 3,
    name: "VIKAS",
    title: "Elite Performer",
    country: "USA",
    flagUrl: "https://flagcdn.com/w80/us.png",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&auto=format&fit=crop",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 4,
    name: "VIHAAN",
    title: "Junior Master",
    country: "USA",
    flagUrl: "https://flagcdn.com/w80/us.png",
    image: "https://images.unsplash.com/photo-1589825478473-b3d9d30e3863?q=80&w=800&auto=format&fit=crop",
    shadow: "shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]"
  },
  {
    id: 5,
    name: "AARAV",
    title: "Grandmaster Track",
    country: "UK",
    flagUrl: "https://flagcdn.com/w80/gb.png",
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
];

export default function WinnersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400; 
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="relative py-24 bg-white font-sans overflow-hidden selection:bg-yellow-400">
      
      {/* --- 5 PREMIUM BACKGROUND CIRCLES/ICONS --- */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-20 left-[5%] w-16 h-16 rounded-full bg-yellow-400 border-2 border-black z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-20 right-[5%] w-32 h-32 rounded-full border-2 border-dashed border-black/10 z-0" />
      <div className="absolute top-1/2 left-[-30px] w-24 h-24 rounded-full bg-black opacity-5 z-0" />
      <motion.div animate={{ x: [0, 40, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-[30%] text-yellow-500 opacity-20 z-0">
        <Sparkles size={100} />
      </motion.div>
      <div className="absolute bottom-10 left-[20%] w-40 h-40 rounded-full bg-yellow-400/10 z-0" />

      {/* Ghost Background Decal */}
      <div className="absolute top-0 left-10 text-[18rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic">
        WIN
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Medal size={20} className="text-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Hall of Fame</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-black leading-[0.85] uppercase italic">
              Our Chess <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-500">Champions.</span>
            </h2>
          </div>
          
          {/* Neubrutalist Nav Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-14 h-14 bg-white border-4 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              <ArrowLeft className="w-6 h-6 stroke-[3px]" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-14 h-14 bg-white border-4 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              <ArrowRight className="w-6 h-6 stroke-[3px]" />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL --- */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-12 px-4 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {winners.map((winner) => (
            <motion.div 
              key={winner.id} 
              whileHover={{ y: -5 }}
              className="relative flex-shrink-0 w-[300px] md:w-[380px] snap-center"
            >
              {/* Flag Badge (Blocky Sticker) */}
              <div className="absolute top-6 right-6 z-20 w-12 h-8 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
                <img 
                  src={winner.flagUrl} 
                  alt={winner.country}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Card Container */}
              <div className={`bg-white border-4 border-black p-4 rounded-[2.5rem] transition-all duration-300 ${winner.shadow} hover:shadow-none hover:translate-x-1 hover:translate-y-1`}>
                
                {/* Image Holder */}
                <div className="relative h-[320px] w-full rounded-[1.8rem] overflow-hidden mb-6 border-2 border-black bg-gray-100 group">
                  <Image
                    src={winner.image}
                    alt={winner.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                  {/* Floating Trophy Badge on Image */}
                  <div className="absolute bottom-4 left-4 bg-yellow-400 border-2 border-black p-2 rounded-xl">
                    <Trophy size={24} className="text-black" />
                  </div>
                </div>

                {/* Info */}
                <div className="px-2 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap size={14} className="text-yellow-500 fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Champion Profile</span>
                  </div>
                  <h3 className="text-3xl font-black text-black uppercase italic leading-none mb-1">
                    {winner.name}
                  </h3>
                  <p className="text-sm font-black uppercase text-yellow-600 tracking-tighter">
                    {winner.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- SCROLL TO TOP --- */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-black text-white rounded-2xl border-4 border-yellow-400 flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
      >
        <ChevronUp className="w-6 h-6" strokeWidth={3} />
      </button>

    </section>
  );
}