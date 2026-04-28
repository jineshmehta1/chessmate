"use client";

import React from "react";
import { 
  Zap, 
  ChevronRight,
  CheckCircle2,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { useDemoModal } from "@/context/DemoContext";

const COURSES = [
  {
    title: "Beginner",
    image: "/beg.webp", 
    tag: "Phase 01",
    features: [
      "How to Play Chess?",
      "How does Pieces Move?",
      "How to Checkmate?",
      "Basic Fundamentals & Rules",
      "Game Thinking & Decision Making"
    ]
  },
  {
    title: "Intermediate",
    image: "/inter.jpeg",
    tag: "Phase 02",
    features: [
      "Tactics in Chess",
      "Basic Chess Endgames",
      "Chess Calculation",
      "Basic Openings in Chess",
      "Game Analysis & Correction"
    ]
  },
  {
    title: "Advance",
    image: "/adv.jpeg",
    tag: "Phase 03",
    features: [
      "Opening Repertoire Development",
      "Strategic & Positional Mastery",
      "Advanced Endgames & Conversion",
      "Tournament Prep & Practical Skills",
      "Advance Calculation Practice"
    ]
  },
  {
    title: "Master",
    image: "/ind.avif",
    tag: "Elite Tier",
    features: [
      "Engine & Database Support",
      "Dynamic Imbalance Handling",
      "Performance Optimization",
      "Mental Training",
      "High-Level Decision Making"
    ]
  }
];

export default function CourseSection() {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="py-20 bg-white border-t-[10px] border-black selection:bg-[#EAB308]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Layers className="text-[#EAB308] w-6 h-6" />
            <span className="text-[10px] md:text-xs font-[1000] uppercase tracking-[0.4em] text-black">Structured Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-[1000] text-black uppercase tracking-tighter mb-6">
            CHOOSE YOUR <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">LEVEL</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-bold text-sm md:text-base leading-relaxed uppercase tracking-wide">
            Feel free to choose any suitable chess course for your child or get a <span className="text-black underline decoration-[#EAB308] decoration-4">FREE demo class</span> to know the best fit.
          </p>
        </div>

        {/* --- COURSE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-black overflow-hidden border-b-4 border-black">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute top-4 left-4 bg-[#EAB308] text-black px-3 py-1 font-[1000] text-[10px] uppercase border-2 border-black">
                  {course.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-[1000] uppercase tracking-tighter leading-none text-black mb-8 group-hover:text-[#EAB308] transition-colors">
                  {course.title}
                </h3>

                {/* Features List */}
                <div className="space-y-4 mb-10 flex-grow">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#EAB308] w-4 h-4 mt-0.5 shrink-0" strokeWidth={3} />
                      <span className="text-[11px] font-black text-gray-600 uppercase leading-tight tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <button 
                    onClick={openDemoModal}
                    className="w-full bg-black text-[#EAB308] py-5 border-2 border-black font-[1000] uppercase text-[11px] tracking-[0.2em] transition-all hover:bg-[#EAB308] hover:text-black shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] hover:shadow-none flex items-center justify-center gap-3 active:scale-95"
                  >
                    Enroll Now
                    <ChevronRight className="w-4 h-4 stroke-[4px]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Tag */}
        <div className="mt-20 text-center opacity-30">
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-black">
                Elite Standard Professional Training
            </p>
        </div>
      </div>
    </section>
  );
}