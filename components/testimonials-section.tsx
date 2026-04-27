"use client";

import React from "react";
import { 
  Quote, 
  Star, 
  User, 
  Sparkles,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Isha Patel",
    role: "Parent of Student",
    text: "Our daughter's creativity and time management skills have flourished since she started at Chess Mate. The video-recorded lectures are a fantastic feature, allowing her to learn at her own pace. The experience has been overwhelmingly positive.",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    name: "Aarav Sharma",
    role: "Parent of Student",
    text: "Chess Mate has been a game-changer for our son. The coaches are exceptional, and the weekly masterclasses have really boosted his confidence. We love the flexibility of video-recorded lectures to review lessons anytime.",
    color: "bg-[#EAB308]",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    name: "Ananya Rao",
    role: "Parent of Student",
    text: "Since joining Chess Mate, our daughter's focus and problem-solving abilities have improved dramatically. The regular tournaments keep her engaged, and the one-on-one coaching has been particularly impactful in her progress.",
    color: "bg-black",
    textColor: "text-white",
    shadow: "shadow-[10px_10px_0px_0px_rgba(234,179,8,1)]"
  }
];

export default function TestimonialSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white border-t-[10px] border-black overflow-hidden selection:bg-[#EAB308]">
      
      {/* --- DECORATIVE BACKGROUND TEXT --- */}
      <div className="absolute top-20 right-[-2%] text-[8rem] md:text-[15rem] font-[1000] text-gray-100 leading-none select-none -z-0 tracking-tighter uppercase italic pointer-events-none">
        VOICE
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-20 text-left">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="fill-[#EAB308] text-[#EAB308] w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-black">
              Success Stories
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-[1000] text-black leading-tight uppercase tracking-tighter">
            TRUSTED BY <br />
            <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">CHESS FAMILIES</span>
          </h2>
          
          <div className="inline-block bg-black text-[#EAB308] px-5 py-2 mt-6 font-black text-[10px] md:text-xs uppercase tracking-widest border-2 border-black">
            Real Results • Real Growth
          </div>
        </div>

        {/* --- TESTIMONIAL GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative p-8 md:p-10 border-[3px] md:border-4 border-black ${item.color} ${item.textColor || 'text-black'} ${item.shadow} flex flex-col h-full transition-all duration-300`}
            >
              {/* Floating Sparkle Badge */}
              <div className="absolute -top-4 -right-4 bg-white border-2 md:border-4 border-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                 <Sparkles className="text-[#EAB308] w-4 h-4 md:w-6 md:h-6" />
              </div>

              {/* Quote & Stars Area */}
              <div className="mb-6 flex justify-between items-center">
                <Quote 
                    className={`w-8 h-8 md:w-10 md:h-10 ${idx === 2 ? "text-[#EAB308]/20" : "text-black/10"}`}
                    fill="currentColor" 
                />
                <div className="flex gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-[#EAB308] text-[#EAB308] w-3 h-3 md:w-4 md:h-4" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-base md:text-lg font-[1000] italic leading-tight mb-10 flex-grow tracking-tight">
                "{item.text}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t-2 border-black/10 flex items-center gap-3 md:gap-4">
                <div className={`w-10 h-10 md:w-12 md:h-12 ${idx === 2 ? 'bg-[#EAB308]' : 'bg-black'} border-2 border-black flex items-center justify-center shrink-0`}>
                   <User className={`w-5 h-5 md:w-6 md:h-6 ${idx === 2 ? 'text-black' : 'text-white'}`} />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-black uppercase leading-none tracking-tighter">
                    {item.name}
                  </h4>
                  <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest mt-1 opacity-60`}>
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM RATING TAG --- */}
        <div className="mt-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 bg-gray-50 border-2 border-dashed border-black/20 px-6 py-3 rounded-none">
                <span className="font-black uppercase text-[9px] md:text-[11px] tracking-[0.2em] text-black">
                    Excellent 4.9/5 Rating based on Google Reviews
                </span>
            </div>
        </div>
      </div>
    </section>
  );
}