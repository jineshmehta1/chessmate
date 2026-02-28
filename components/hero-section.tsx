"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Trophy, 
  Star, 
  Users, 
  Clock,
  ShieldCheck,
  Crown,
  ChevronRight,
  Zap
} from "lucide-react";
// Import the global hook
import { useDemoModal } from "@/context/DemoContext";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-white flex items-center pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden font-sans">
      
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      {/* Subtle Chess Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }}
      ></div>

      {/* Modern Gradient Orbs (Softened) */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-gray-100/60 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white shadow-xl shadow-yellow-500/10 text-xs md:text-sm font-bold tracking-widest uppercase">
              <Zap size={14} className="text-yellow-400 fill-yellow-400" />
              Enrollment Open for 2024
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3rem] leading-[0.95] font-black text-black tracking-tight">
             Build Champions. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 relative">
                 Think Like a Grandmaster.
                <div className="absolute -top-6 -right-8 opacity-20 hidden lg:block">
                    <Crown size={60} className="text-black rotate-12" />
                </div>
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              At <span className="text-black font-bold">Star Chess Academy</span> we provide Structured, professional chess training for beginners to tournament players.
Online & Offline Coaching | Personalized Growth | Proven Results

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 border-l-2 border-yellow-400 pl-6">
               {[
                 { icon: Trophy, text: "FIDE Rated Trainers", sub: "Expert Guidance" },
                 { icon: Users, text: "1:6 Coach Ratio", sub: "Personal Attention" },
               ].map((item, idx) => (
                 <div key={idx} className="group">
                   <div className="flex items-center gap-3 text-black font-bold text-base">
                      <item.icon size={20} className="text-yellow-500" />
                      {item.text}
                   </div>
                   <p className="text-gray-400 text-xs mt-1 ml-8">{item.sub}</p>
                 </div>
               ))}
            </div>

            {/* --- CTA BUTTONS --- */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

  {/* Book Free Demo */}
  <Link
    href="/bookdemo"
    className="group relative px-10 py-5 bg-black text-white rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-yellow-400 hover:text-black transition-all duration-500 overflow-hidden text-center"
  >
    <span className="relative z-10 flex items-center justify-center gap-3">
      Book Free Demo
      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
    </span>
  </Link>

  {/* Explore Courses */}
  <Link
    href="/courses"
    className="flex items-center justify-center gap-2 px-8 py-5 rounded-full font-bold text-black border-2 border-black/5 hover:bg-gray-50 transition-all text-sm uppercase tracking-widest text-center"
  >
    Explore Courses
    <ChevronRight size={18} />
  </Link>

</div>

            {/* Trust Pilot Style */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                      <img src={`https://i.pravatar.cc/150?u=starchess${i}`} alt="Student" />
                   </div>
                 ))}
               </div>
               <div>
                 <div className="flex text-yellow-500 mb-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-xs font-bold text-black tracking-tighter uppercase">
                   Trusted by 2,000+ Champions
                 </p>
               </div>
            </div>
          </div>

          {/* --- RIGHT IMAGE SECTION --- */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative z-20 bg-black p-1 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group">
                <div className="relative h-[450px] md:h-[600px] w-full rounded-[2.3rem] overflow-hidden bg-gray-100">
                  <img 
                    src="9.jpeg" 
                    alt="Star Chess Academy Student"
                    className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating Achievement Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl flex items-center gap-4 border border-white/20 shadow-2xl">
                   <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-yellow-500/20">
                      <Trophy className="text-black" size={28} />
                   </div>
                   <div>
                      <p className="text-[10px] text-yellow-600 font-black uppercase tracking-widest">Global Rank</p>
                      <p className="text-lg font-black text-black">Top 1% Academy</p>
                   </div>
                   <div className="ml-auto">
                      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      </div>
                   </div>
                </div>
              </div>

              {/* Decorative Geometric Background Shapes */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 border-[12px] border-black/5 rounded-[3rem] -z-10 rotate-12"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}