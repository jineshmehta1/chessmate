"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Zap } from "lucide-react";

export default function PostDetailClient({ post }: { post: any }) {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-yellow-400">
      {/* --- HEADER --- */}
      <header className="relative w-full pt-28 md:pt-36 pb-10 border-b-4 border-black bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black uppercase mb-6 md:mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> Back to Journal
          </Link>
          
          {/* Meta Info: Category & Date */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-yellow-400 border-2 border-black text-[9px] md:text-[10px] font-black uppercase rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              {post.category}
            </span>
            <span className="text-[10px] md:text-xs font-black uppercase opacity-40 italic">{post.date}</span>
          </div>

          {/* Responsive Heading: 2xl on mobile, 5xl+ on desktop */}
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-black text-black uppercase italic leading-[1.1] md:leading-[0.9] mb-8 tracking-tighter">
            {post.title}
          </h1>

          {/* Author & Read Time */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 border-t-2 border-black/5">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-black rounded-full bg-gray-100 flex items-center justify-center shadow-[2px_2px_0px_0px_black]">
                  <User className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs md:text-sm font-black uppercase tracking-tight">{post.author}</span>
             </div>
             <div className="hidden sm:block h-6 w-[2px] bg-black/10" />
             <div className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase text-gray-500">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" /> 8 Min Read
             </div>
          </div>
        </div>
      </header>

      {/* --- CONTENT --- */}
      <main className="container mx-auto px-6 max-w-4xl py-12 md:py-16">
        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-video border-[3px] md:border-4 border-black rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-12 md:mb-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        {/* Article Body */}
        <article className="prose prose-sm md:prose-base lg:prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-strong:text-black prose-a:text-yellow-600">
          <p className="text-lg md:text-2xl font-bold leading-relaxed mb-10 border-l-8 border-yellow-400 pl-6 italic bg-gray-50 py-4 rounded-r-2xl">
            {post.desc}
          </p>
          
          <div className="text-gray-800 font-medium space-y-6">
             <p>
               Welcome to the Starchess insight series. Mastering the board requires a blend of tactical calculation and positional intuition. 
               In this guide, we dive deep into the specific strategies that separate club players from tournament winners.
             </p>

             <h2 className="text-xl md:text-3xl">The Fundamentals of {post.category}</h2>
             <p>
               Success in chess isn't just about memorizing lines; it's about understanding the underlying pawn structures and piece coordination. 
               Whether you are handling the Sicilian Defense or mastering a King and Pawn endgame, the logic remains consistent.
             </p>

             {/* Pro Tip Callout Box */}
             <div className="bg-black text-white p-6 md:p-10 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(253,224,71,1)] my-12 relative overflow-hidden group">
                <Zap className="text-yellow-400 mb-4 w-8 h-8 md:w-10 md:h-10 animate-pulse" fill="currentColor" />
                <h4 className="text-lg md:text-xl font-black uppercase italic mb-2">Star's Pro Tip</h4>
                <p className="text-gray-300 text-sm md:text-base italic leading-relaxed">
                  "Don't just look for the best move—look for your opponent's best response. Chess is a conversation, and you must listen to what the other side is trying to say."
                </p>
                <div className="absolute top-[-20%] right-[-5%] opacity-10 rotate-12 transition-transform group-hover:scale-110">
                   <Zap className="w-32 h-32 md:w-48 md:h-48" />
                </div>
             </div>

             <p>
               As you continue your journey at Star Chess Academy, remember that every loss is a lesson and every win is a milestone. 
               Consistent analysis of your own games is the fastest way to improve your rating.
             </p>
          </div>
        </article>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-xl md:text-2xl font-black uppercase italic text-center md:text-left">
              Elevate Your <span className="text-yellow-500">Game.</span>
            </h3>
            <Link 
              href="/blog" 
              className="w-full md:w-auto text-center bg-black text-white px-8 py-4 border-4 border-black rounded-xl font-black uppercase text-xs shadow-[5px_5px_0px_0px_rgba(253,224,71,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            >
              More Articles
            </Link>
        </div>
      </main>
    </div>
  );
}