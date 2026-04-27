"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Zap, Share2, Bookmark } from "lucide-react";

export default function PostDetailClient({ post }: { post: any }) {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#EAB308]">
      {/* --- HEADER / META SECTION --- */}
      <header className="relative w-full pt-32 md:pt-40 pb-12 border-b-[10px] border-black bg-white overflow-hidden">
        {/* Background Decal */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[10rem] md:text-[20rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
          READ
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          {/* Action Bar */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest hover:text-[#EAB308] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={3} /> 
              Back to Insights
            </Link>
            <div className="flex gap-4">
              <button className="hover:text-[#EAB308] transition-colors"><Share2 className="w-4 h-4" /></button>
              <button className="hover:text-[#EAB308] transition-colors"><Bookmark className="w-4 h-4" /></button>
            </div>
          </div>
          
          {/* Category Sticker */}
          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1.5 bg-[#EAB308] border-2 border-black text-[10px] font-[1000] uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {post.category}
            </span>
            <div className="h-[2px] w-8 bg-black opacity-10"></div>
            <span className="text-[10px] md:text-xs font-bold uppercase text-gray-400 tracking-widest">{post.date}</span>
          </div>

          {/* Main Title: Cinematic Serif/Sans Hybrid */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[1000] text-black uppercase leading-[0.95] mb-10 tracking-tighter">
            {post.title.split(' ').slice(0, -1).join(' ')} {" "}
            <span className="text-white [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(234,179,8,1)]">
              {post.title.split(' ').pop()}
            </span>
          </h1>

          {/* Author Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 border-t-2 border-black/5">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-black bg-[#EAB308] flex items-center justify-center shadow-[3px_3px_0px_0px_black]">
                  <User className="w-5 h-5 text-black" />
                </div>
                <div className="leading-none">
                  <p className="text-[9px] font-black uppercase text-gray-400 mb-1">Written By</p>
                  <p className="text-xs md:text-sm font-[1000] uppercase tracking-tight">{post.author}</p>
                </div>
             </div>
             <div className="hidden sm:block h-8 w-[2px] bg-black/10" />
             <div className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase text-gray-500 tracking-widest">
                <Clock className="w-4 h-4 text-[#EAB308]" /> 8 Min Intensive Read
             </div>
          </div>
        </div>
      </header>

      {/* --- ARTICLE CONTENT --- */}
      <main className="container mx-auto px-6 max-w-4xl py-12 md:py-20">
        {/* Featured Image: Brutalist Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-video border-4 border-black mb-16 md:mb-24 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-gray-100"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
          />
        </motion.div>

        {/* Article Body */}
        <article className="prose prose-neutral max-w-none 
          prose-headings:font-[1000] prose-headings:uppercase prose-headings:tracking-tighter
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg
          prose-strong:text-black prose-strong:font-black
          prose-blockquote:border-l-[#EAB308] prose-blockquote:bg-gray-50 prose-blockquote:py-2">
          
          <p className="text-xl md:text-3xl font-[1000] leading-tight mb-12 border-l-[12px] border-[#EAB308] pl-8 italic text-black uppercase tracking-tight">
            {post.desc}
          </p>
          
          <div className="space-y-8 font-medium">
             <p>
               Welcome to the <strong>Chess Mate Academy</strong> masterclass series. Elite performance on the 64 squares is rarely about pure talent; it is the result of a highly structured analytical framework. 
               In this guide, we dissect the strategic layers required to transition from a club-level player to a rated tournament competitor.
             </p>

             <h2 className="text-2xl md:text-4xl text-black">Technical Depth in {post.category}</h2>
             <p>
               Whether you are navigating high-theory openings or grinding out a technical endgame, the fundamental principles of coordination and pawn structure remain constant. 
               Success is found in the "silence" between moves—the deep calculation and prophylactic thinking that anticipates your opponent's intentions before they materialize.
             </p>

             {/* Elite Insight Callout */}
             <div className="bg-black text-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(234,179,8,1)] my-16 relative overflow-hidden group">
                <Zap className="text-[#EAB308] mb-6 w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
                <h4 className="text-xl md:text-2xl font-[1000] uppercase italic mb-4 tracking-tighter">Grandmaster Insight</h4>
                <p className="text-gray-300 text-base md:text-lg font-medium italic leading-relaxed max-w-2xl">
                  "The hallmark of a master is not finding the winning move, but preventing the opponent's counterplay. True mastery is the art of restriction."
                </p>
                <div className="absolute top-[-10%] right-[-5%] opacity-5 rotate-12 transition-transform group-hover:scale-110">
                   <Zap className="w-40 h-40 md:w-64 md:h-64" />
                </div>
             </div>

             <p>
               Consistent progress requires objective game analysis. At <strong>Chess Mate Academy</strong>, we emphasize the "why" behind every blunder. 
               By treating every loss as a data point, we engineer a faster route to ELO growth and tactical precision.
             </p>
          </div>
        </article>

        {/* BOTTOM NAVIGATION / CTA */}
        <div className="mt-20 pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 bg-[#EAB308] animate-pulse"></div>
               <h3 className="text-xl md:text-3xl font-[1000] uppercase tracking-tighter text-black">
                 Elevate Your <span className="text-[#EAB308]">Mindset.</span>
               </h3>
            </div>
            
            <Link 
              href="/blog" 
              className="w-full md:w-auto bg-black text-[#EAB308] px-10 py-5 border-2 border-black font-[1000] uppercase text-xs tracking-[0.2em] shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] hover:bg-[#EAB308] hover:text-black hover:shadow-none transition-all"
            >
              All Articles
            </Link>
        </div>
      </main>
    </div>
  );
}