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
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AchievementsSection() {
  const achievements = [
    {
      year: '2024',
      title: 'National Champions',
      description: '5 students won national-level tournaments',
      icon: <Trophy className="w-8 h-8 md:w-10 md:h-10" />,
      count: '05',
      color: 'bg-yellow-400',
      shadow: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Featured in Chess.com Top Academies',
      icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
      count: '02',
      color: 'bg-white',
      shadow: 'shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]'
    },
    {
      year: '2022',
      title: 'FIDE Ratings',
      description: '50+ students achieved FIDE ratings',
      icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
      count: '50+',
      color: 'bg-black',
      textColor: 'text-white',
      shadow: 'shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]'
    },
    {
      year: '2021',
      title: 'Tournament Wins',
      description: '100+ victories across categories',
      icon: <Medal className="w-8 h-8 md:w-10 md:h-10" />,
      count: '100+',
      color: 'bg-white',
      shadow: 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
    },
  ];

  const recognitions = [
    { title: 'Best Online Academy 2023', issuer: 'Chess Federation of India', icon: <Star className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: 'Excellence in Training', issuer: 'International Chess Council', icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" /> },
    { title: 'Innovative Methods', issuer: 'Global Education Awards', icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" /> },
  ];

  const stats = [
    { value: "100+", label: "Champions", icon: Trophy },
    { value: "20+", label: "Expert Coaches", icon: Users },
    { value: "21+", label: "Tourneys Won", icon: Target },
    { value: "20+", label: "Years Exp", icon: Award },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white font-sans overflow-hidden selection:bg-yellow-400 border-t-8 border-black">
      
      {/* --- BACKGROUND DOODLES --- */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 left-[5%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 border-[3px] md:border-4 border-black z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute bottom-10 right-[5%] w-24 h-24 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-dashed border-black/10 z-0" />
      
      {/* Ghost Background Decal - Responsive Font Size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[15rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic text-center opacity-60 md:opacity-100">
        ELITE
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-black italic">Our Legacy</span>
          </div>
          {/* Responsive Heading: 2xl on mobile, 5xl on desktop */}
          <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-none uppercase italic tracking-tighter">
            Awards & <br />
            <span className="bg-black text-white px-4 py-1 border-4 border-black shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] md:shadow-[10px_10px_0px_0px_rgba(253,224,71,1)] inline-block mt-2">
              Achievements
            </span>
          </h2>
          <p className="mt-8 text-gray-500 font-bold uppercase tracking-widest text-[10px] md:text-xs max-w-xl mx-auto leading-relaxed">
            A testament to our commitment to excellence in chess education and student growth.
          </p>
        </div>

        {/* --- MAIN ACHIEVEMENTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className={`relative p-8 border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[2.5rem] transition-all duration-300 ${item.color} ${item.textColor || 'text-black'} ${item.shadow} hover:shadow-none hover:translate-x-1 hover:translate-y-1`}
            >
              {/* Year Stamp */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 border-2 border-white rounded-lg text-[10px] md:text-xs font-black uppercase tracking-widest rotate-2 shadow-[3px_3px_0px_0px_rgba(253,224,71,1)]">
                {item.year}
              </div>

              {/* Icon Container */}
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 border-black flex items-center justify-center mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] ${index === 2 ? 'bg-yellow-400 text-black' : 'bg-white text-black'}`}>
                {item.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-black uppercase italic leading-none mb-3">
                {item.title}
              </h3>
              <p className="text-[11px] md:text-xs font-bold opacity-70 mb-6 uppercase tracking-tight leading-snug">
                {item.description}
              </p>
              
              <div className="text-3xl md:text-4xl font-black italic border-t-2 border-black/10 pt-4">
                {item.count}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- RECOGNITIONS SECTION --- */}
        <div className="border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-16 md:mb-24">
          <h3 className="text-xl md:text-3xl font-black uppercase italic text-black mb-10 md:mb-12 text-center flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <Medal className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" /> 
            <span>Certifications & Recognitions</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <div 
                key={index}
                className="group p-5 md:p-6 border-2 border-black rounded-2xl hover:bg-yellow-400 transition-colors cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-black rounded-xl bg-black text-yellow-400 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] shrink-0">
                    {recognition.icon}
                  </div>
                  <div>
                    <h4 className="font-black uppercase italic text-xs md:text-sm text-black mb-1 leading-tight">{recognition.title}</h4>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black/60 transition-colors">{recognition.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-6 pt-10 border-t-4 border-black/5">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <div className="text-yellow-500 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7" strokeWidth={3} />
                </div>
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-black italic tracking-tighter">
                  {stat.value}
                </span>
              </div>
              <p className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}