"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Trophy, 
  Star, 
  Users, 
  Zap,
  Layout,
  ChevronRight
} from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-white flex items-center pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] hidden sm:block" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '70px 70px' 
        }}
      ></div>

      {/* High-Contrast Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-400/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gray-200/50 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* --- LEFT CONTENT (TEXT) --- */}
          <div className={`lg:col-span-7 space-y-6 md:space-y-8 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Professional Alert Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black text-white rounded-none text-[9px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase border-l-4 border-yellow-500">
              <Zap size={12} className="fill-yellow-500 text-yellow-500 animate-pulse" />
              Enrollment Open • 2026 Season
            </div>

            {/* Main Brand Headline */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[0.9] font-[1000] text-black tracking-tighter uppercase">
                Elevate Your {" "}
                <span className="text-yellow-500">Game.</span>
              </h1>
              
              <p className="text-black font-black tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm uppercase">
                Chessmate Academy • Professional Training
              </p>
            </div>

            <p className="text-gray-600 text-base md:text-xl max-w-xl font-bold leading-relaxed border-l-4 md:border-l-8 border-black pl-4 md:pl-6">
              World-class chess coaching for aspiring players. From fundamentals to 
              Grandmaster strategies, master the art of the board.
            </p>

            {/* Premium Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 py-2 md:py-4">
               {[
                 { icon: Trophy, title: "FIDE Rated", sub: "Expert Coaches" },
                 { icon: Users, title: "1:6 Ratio", sub: "Small Batches" },
                 { icon: Layout, title: "LMS Portal", sub: "Study Material" },
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-1 group">
                   <div className="flex items-center gap-3 text-black font-[900] text-xs uppercase tracking-widest">
                      <item.icon size={18} className="text-yellow-500 shrink-0" />
                      {item.title}
                   </div>
                   <p className="text-gray-400 text-[9px] md:text-[10px] uppercase font-bold tracking-wider sm:ml-7 leading-none sm:mt-1">{item.sub}</p>
                 </div>
               ))}
            </div>

            {/* --- CTA BUTTONS --- */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <button
                onClick={openDemoModal}
                className="group relative px-8 py-4 md:px-10 md:py-5 bg-black text-yellow-500 font-black text-xs md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-300 hover:bg-yellow-500 hover:text-black shadow-[6px_6px_0px_0px_rgba(234,179,8,0.2)] md:shadow-[10px_10px_0px_0px_rgba(234,179,8,0.2)] text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  Book Free Demo
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>

              <Link
                href="/courses"
                className="flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 border-[3px] md:border-[4px] border-black font-black text-black text-xs md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300 text-center"
              >
                View Courses
                <ChevronRight className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              </Link>
            </div>

            
          </div>

          {/* --- RIGHT SECTION (IMAGE ARCHITECTURE) --- */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} mt-8 lg:mt-0`}>
            <div className="relative max-w-[450px] mx-auto lg:max-w-none">
              
              {/* Responsive Sharp, Brutalist Image Frame */}
              <div className="relative z-20 border-[10px] md:border-[15px] lg:border-[20px] border-black rounded-none shadow-[15px_15px_0px_0px_rgba(234,179,8,1)] md:shadow-[25px_25px_0px_0px_rgba(234,179,8,1)] lg:shadow-[30px_30px_0px_0px_rgba(234,179,8,1)]">
                <div className="relative h-[350px] sm:h-[450px] lg:h-[450px] xl:h-[450px] w-full bg-black overflow-hidden">
                  <img 
                    src="/hero.jpg" 
                    alt="Chessmate Student Champion"
                    className="object-cover w-full h-full transition-all duration-1000"
                  />
                  
                  {/* Result Badge */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-yellow-500 text-black px-3 py-1.5 md:px-4 md:py-2 font-black uppercase text-[8px] md:text-[10px] tracking-widest shadow-xl">
                    Top Performance
                  </div>
                </div>
              </div>

              {/* Decorative Background Shapes - Hidden on smallest mobile for cleaner look */}
              <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-24 h-24 md:w-48 md:h-48 border-[8px] md:border-[15px] border-yellow-500/10 -z-10 rotate-12"></div>
              <div className="absolute bottom-10 -left-6 md:-left-10 w-12 h-12 md:w-24 md:h-24 bg-black -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}