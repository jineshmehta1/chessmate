"use client";

import React from "react";
import { 
  Zap, 
  ChevronRight,
  Star,
  Clock,
  Users,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

const COURSES = [
  {
    title: "Beginner Group",
    price: "$160",
    image: "/beg.webp", // Replace with your actual path
    lectures: "8 Lectures a Month",
    features: ["How to Play Chess?", "How does Pieces Move?", "How to Checkmate?", "Complete Fundamentals"],
    rating: "4.9",
    tag: "Fundamentals"
  },
  {
    title: "Intermediate Group",
    price: "$160",
    image: "/inter.jpeg", // Replace with your actual path
    lectures: "8 Lectures a Month",
    features: ["Tactics in Chess", "Strategy Mastery", "Chess Calculation", "Openings in Chess"],
    rating: "4.9",
    tag: "Tactician"
  },
  {
    title: "Advanced Group",
    price: "$160",
    image: "/adv.jpeg", // Replace with your actual path
    lectures: "8 Lectures a Month",
    features: ["Opening Repertoire", "Middle Game Mastery", "In-depth Endgame", "Tournament Prep"],
    rating: "4.9",
    tag: "Expert"
  },
  {
    title: "1-1 Individual",
    price: "$160",
    image: "/ind.avif", // Replace with your actual path
    lectures: "8 Lectures a Month",
    features: ["Mental Training", "Tournament Prep", "Personal Gaming", "Personal Attention"],
    rating: "5.0",
    tag: "Individual"
  }
];

export default function CourseSection() {
  return (
    <section className="py-20 bg-white border-t-8 border-black">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="fill-[#EAB308] text-[#EAB308]" size={18} />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black">Professional Training</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-[1000] text-black uppercase tracking-tighter mb-4">
            Our <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:2px_black]">Courses</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-bold text-sm md:text-base leading-relaxed">
            Feel free to choose any suitable chess course for your child or get a FREE demo class to know the best course suitable for your child.
          </p>
        </div>

        {/* --- COURSE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(234,179,8,1)] transition-all"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-black overflow-hidden border-b-4 border-black">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#EAB308] text-black px-3 py-1 font-black text-[10px] uppercase border-2 border-black">
                  {course.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-[1000] uppercase tracking-tighter leading-none text-black">
                    {course.title}
                  </h3>
                  <div className="bg-black text-[#EAB308] px-2 py-1 font-black text-xs">
                    {course.price}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6 text-gray-400">
                  <Clock size={14} className="text-[#EAB308]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{course.lectures}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 flex-grow">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#EAB308] mt-0.5 shrink-0" />
                      <span className="text-[11px] font-bold text-gray-600 uppercase leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Rating & CTA */}
                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between border-t-2 border-gray-100 pt-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-[#EAB308] text-[#EAB308]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-black">RATED {course.rating} / 5</span>
                  </div>

                  <button className="w-full bg-black text-white py-4 font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-[#EAB308] hover:text-black flex items-center justify-center gap-2">
                    Book Demo
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}