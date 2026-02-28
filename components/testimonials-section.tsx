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
    parent: "Gunjan Talsania",
    child: "Parent of 10-yr old daughter",
    text: "My 10 years old daughter learnt a lot with star chess. They are very flexible with timing and genuinely care for a student. They spend extra time for extra games. Raghava sir is very good.",
    color: "bg-white",
    shadow: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    parent: "Anuradha Vijayanand",
    child: "Parent of Twin Kids",
    text: "I joined my twin kids casually for a summer camp... starchess academy groomed my kids so well within a year! They train the kids for chess tournaments also. Raghav takes care of every small thing. No doubt, an excellent academy.",
    color: "bg-yellow-400",
    shadow: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    parent: "Priyaa Kumaran",
    child: "Parent of Tournament Student",
    text: "Raghav sir's coaching and monitoring progress through puzzles and frequent online tournaments has made my daughter develop skills both technically and emotionally. I recommend him for a career in chess.",
    color: "bg-black",
    textColor: "text-white",
    shadow: "shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[10px_10px_0px_0px_rgba(253,224,71,1)]"
  }
];

export default function TestimonialSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white font-sans overflow-hidden selection:bg-yellow-400 selection:text-black border-t-8 border-black">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 6, repeat: Infinity }} 
        className="absolute top-10 left-[5%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 border-4 border-black z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
      />
      
      <div className="absolute top-1/2 right-[-20px] md:right-[-50px] text-[5rem] md:text-[18rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic opacity-60">
        VOICE
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADING --- */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            {/* FIXED: Using className for responsive size */}
            <Zap className="fill-yellow-400 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-black italic">The Parent's Perspective</span>
          </div>
          
          <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-[0.8] uppercase italic tracking-tighter">
            WHAT THEY {" "}
            <span className="text-white block md:inline [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">SAID ABOUT</span> <br className="hidden md:block" />
            <span className="relative inline-block bg-black text-white px-4 md:px-6 py-2 mt-4 rotate-0 md:rotate-[-1deg] border-4 border-black shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[10px_10px_0px_0px_rgba(253,224,71,1)]">
              OUR ACADEMY
            </span>
          </h2>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, rotate: idx % 2 === 0 ? -1 : 1 }}
              className={`relative p-6 md:p-8 border-4 border-black rounded-[2rem] md:rounded-[2.5rem] ${item.color} ${item.textColor || 'text-black'} ${item.shadow} transition-all duration-300 group flex flex-col h-full`}
            >
              {/* FIXED: Using className for responsive size */}
              <div className="absolute -top-4 -right-2 md:-top-5 md:-right-5 bg-white border-4 border-black w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <Sparkles className="text-yellow-500 w-5 h-5 md:w-6 md:h-6" />
              </div>

              <div className="mb-6 md:mb-8 flex justify-between items-start">
                {/* FIXED: Using className for responsive size */}
                <Quote 
                    className={`w-9 h-9 md:w-12 md:h-12 ${idx === 2 ? "text-yellow-400/20" : "text-black/10"}`}
                    fill="currentColor" 
                />
                <div className="flex gap-1 bg-black/5 p-1.5 md:p-2 rounded-xl">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400 w-3 h-3 md:w-3.5 md:h-3.5" />
                  ))}
                </div>
              </div>

              <p className="text-base md:text-lg font-black italic leading-tight mb-8 md:mb-10 flex-grow">
                "{item.text}"
              </p>

              <div className="pt-6 md:pt-8 border-t-4 border-black/10 flex items-center gap-3 md:gap-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${idx === 2 ? 'bg-yellow-400' : 'bg-black'} border-4 border-black rounded-2xl flex items-center justify-center shrink-0 rotate-3`}>
                   {/* FIXED: Using className for responsive size */}
                   <User className={`w-6 h-6 md:w-7 md:h-7 ${idx === 2 ? 'text-black' : 'text-white'}`} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-black uppercase leading-none tracking-tighter">
                    {item.parent}
                  </h4>
                  <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest mt-1 ${idx === 2 ? 'text-gray-400' : 'text-gray-500'}`}>
                    {item.child}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER --- */}
        <div className="mt-16 md:mt-20 text-center">
            <div className="inline-flex items-center gap-3 md:gap-4 bg-gray-50 border-4 border-black px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-black uppercase italic text-[10px] md:text-sm tracking-widest leading-none">
                    4.9/5 Rating based on 100+ Google Reviews
                </span>
            </div>
        </div>
      </div>
    </section>
  );
}