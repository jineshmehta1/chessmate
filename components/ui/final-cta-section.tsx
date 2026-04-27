"use client";

import React from 'react';
import { ChevronRight, Star, Trophy, Users, Clock, Zap, ArrowRight } from 'lucide-react';
import { useDemoModal } from "@/context/DemoContext";

export default function FinalCTASection() {
  const { openDemoModal } = useDemoModal();

  const benefits = [
    {
      icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
      text: "Free Trial",
      subtext: "1-on-1 Assessment",
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      text: "FIDE Trainers",
      subtext: "Expert Coaching",
    },
    {
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
      text: "Flexible",
      subtext: "Global Schedules",
    },
    {
      icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" />,
      text: "Champions",
      subtext: "Proven Success",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white border-t-[12px] border-black overflow-hidden selection:bg-[#EAB308]">
      
      {/* --- BACKGROUND DECAL --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[22rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
        WIN
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black text-[#EAB308] border-2 border-black px-4 py-2 mb-10 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)]">
            <Zap className="w-4 h-4 fill-[#EAB308]" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Limited Slots for 2026</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-[1000] text-black mb-8 leading-[0.9] uppercase tracking-tighter">
            READY TO BECOME A <br />
            <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">CHAMPION?</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-500 font-bold mb-16 max-w-2xl mx-auto leading-tight">
            Join 2,000+ students who have transformed their cognitive skills with Chess Mate Academy. 
            Your path to mastery starts with a single move.
          </p>

          {/* Benefits Grid - Compact & Brutalist */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              >
                <div className="text-[#EAB308] mb-4 flex justify-center">
                  <div className="p-3 bg-black rounded-none">
                    {benefit.icon}
                  </div>
                </div>
                <p className="text-black font-black text-sm md:text-base uppercase tracking-tight mb-1">{benefit.text}</p>
                <p className="text-gray-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest">{benefit.subtext}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={openDemoModal}
              className="w-full sm:w-auto bg-black text-[#EAB308] font-[1000] py-6 px-12 border-4 border-black text-sm md:text-base uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[10px_10px_0px_0px_rgba(234,179,8,1)] hover:bg-[#EAB308] hover:text-black hover:shadow-none transition-all duration-300"
            >
              <span>Book Free Demo Class</span>
              <ChevronRight className="w-5 h-5 stroke-[4px]" />
            </button>
            
            <a 
              href="https://wa.me/917990775581"
              className="w-full sm:w-auto bg-white text-black font-[1000] py-6 px-12 border-4 border-black text-sm md:text-base uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gray-50 transition-all duration-300"
            >
              <span>Talk to Advisor</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust Signals Bar */}
          <div className="mt-24 pt-10 border-t-2 border-black/5">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40 grayscale">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Google 4.9/5</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">FIDE Certified</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Lichess Partner</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">LMS Integrated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#EAB308] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-black rounded-full animate-pulse"></div>
    </section>
  );
}