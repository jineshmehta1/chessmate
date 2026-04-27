"use client";

import React from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Star, 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AchievementsSection() {
  const achievements = [
    {
      year: '2024',
      title: 'National Champions',
      description: '5 students secured Top 3 ranks in National-level arenas.',
      icon: <Trophy className="w-8 h-8 md:w-10 md:h-10" />,
      count: '05',
      color: 'bg-[#EAB308]',
      shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
    },
    {
      year: '2023',
      title: 'Global Credentials',
      description: 'Accredited by Global Chess Education Standards.',
      icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
      count: '02',
      color: 'bg-white',
      shadow: 'shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]'
    },
    {
      year: '2022',
      title: 'FIDE Rated Growth',
      description: '50+ students achieved official FIDE ratings.',
      icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
      count: '50+',
      color: 'bg-black',
      textColor: 'text-white',
      shadow: 'shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]'
    },
    {
      year: '2021',
      title: 'Arena Dominance',
      description: '100+ Total tournament podium finishes.',
      icon: <Medal className="w-8 h-8 md:w-10 md:h-10" />,
      count: '100+',
      color: 'bg-white',
      shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
    },
  ];

  const recognitions = [
    { title: 'Best Digital Academy', issuer: 'Regional Chess Excellence', icon: <Star className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: 'Excellence in Pedagogy', issuer: 'Intl. Chess Association', icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: 'Certified Training Center', issuer: 'Global Skill Federation', icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" /> },
  ];

  const stats = [
    { value: "2000+", label: "Active Students", icon: Trophy },
    { value: "15+", label: "Master Coaches", icon: Users },
    { value: "500+", label: "Rated Games", icon: Target },
    { value: "12+", label: "Years Experience", icon: Award },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white font-sans overflow-hidden selection:bg-[#EAB308] border-t-[10px] border-black">
      
      {/* --- BACKGROUND DECAL --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[25rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic text-center opacity-80 pointer-events-none">
        ELITE
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-left mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-5 h-5 text-[#EAB308] fill-current" />
            <span className="text-[10px] md:text-xs font-[1000] uppercase tracking-[0.4em] text-black italic">The Academy Legacy</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-[0.9] uppercase tracking-tighter">
            ACADEMY {" "}
            <span className="text-white [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(234,179,8,1)]">MILESTONES.</span>
          </h2>
          
          <p className="mt-10 text-gray-500 font-bold uppercase tracking-widest text-[11px] md:text-sm max-w-xl leading-relaxed">
            A track record of strategic excellence and student development over a decade of chess education.
          </p>
        </div>

        {/* --- ACHIEVEMENTS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 md:mb-32">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative p-8 border-4 border-black transition-all duration-300 ${item.color} ${item.textColor || 'text-black'} ${item.shadow} flex flex-col h-full`}
            >
              {/* Year Sticker */}
              <div className="absolute -top-4 right-6 bg-black text-[#EAB308] px-4 py-1 border-2 border-black font-[1000] text-[10px] md:text-xs uppercase tracking-widest rotate-2">
                {item.year}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 md:w-16 md:h-16 border-2 border-black flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] ${index === 2 ? 'bg-white text-black' : 'bg-black text-[#EAB308]'}`}>
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-[1000] uppercase italic leading-none mb-4">
                {item.title}
              </h3>
              <p className="text-[11px] md:text-xs font-bold opacity-60 mb-8 uppercase tracking-tight leading-snug">
                {item.description}
              </p>
              
              <div className="mt-auto pt-6 border-t-2 border-current/10 flex items-center justify-between">
                <span className="text-3xl md:text-4xl font-[1000] italic">{item.count}</span>
                <ChevronRight className="w-6 h-6 opacity-30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- AUTHORITATIVE CERTIFICATIONS BOX --- */}
        <div className="border-[6px] border-black p-8 md:p-16 bg-white shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden mb-20 md:mb-32">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <ShieldCheck className="w-64 h-64" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-[1000] uppercase tracking-tighter text-black mb-12 flex items-center gap-4">
              <div className="w-12 h-1 bg-[#EAB308]"></div>
              CERTIFICATIONS & RECOGNITIONS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {recognitions.map((rec, index) => (
                <div key={index} className="group border-l-4 border-[#EAB308] pl-6 py-2 transition-all hover:pl-8 hover:border-black">
                  <div className="text-black mb-3">
                    {rec.icon}
                  </div>
                  <h4 className="font-[1000] uppercase italic text-sm md:text-lg text-black mb-1 leading-tight tracking-tight">
                    {rec.title}
                  </h4>
                  <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-[#EAB308] transition-colors">
                    {rec.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}