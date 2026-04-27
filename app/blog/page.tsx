"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  User, 
  ArrowRight, 
  Search, 
  Calendar,
  Zap,
  Star,
  Newspaper
} from "lucide-react";
import BlogBanner from "@/components/ui/blogBanner";

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "how-to-improve-chess-rating",
    category: "Training",
    title: "Mastering the Rating Climb",
    desc: "A step-by-step roadmap to breaking through your ELO plateau and climbing the competitive ranks.",
    date: "Feb 24, 2026",
    author: "Grandmaster A.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
  },
  {
    id: 2,
    slug: "best-openings-for-beginners",
    category: "Openings",
    title: "Top Openings for 2026",
    desc: "Stop memorizing theory. Learn the top systems that prioritize development, safety, and center control.",
    date: "Feb 22, 2026",
    author: "Master Coach B.",
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1916",
    color: "bg-[#EAB308]",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 3,
    slug: "how-to-prepare-for-tournaments",
    category: "Prep",
    title: "Tournament Readiness Guide",
    desc: "A complete guide on physical stamina, mental prep, and analyzing your opponents before a big event.",
    date: "Feb 20, 2026",
    author: "Senior Trainer C.",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070",
    color: "bg-black",
    textColor: "text-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
  },
  {
    id: 4,
    slug: "common-chess-mistakes",
    category: "Analysis",
    title: "Eliminating Common Blunders",
    desc: "Identify the recurring blunders that cost most amateur players their games and how to fix them.",
    date: "Feb 18, 2026",
    author: "Analysis Team",
    image: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2070",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 5,
    slug: "the-sicilian-defense-masterclass",
    category: "Strategy",
    title: "The Sicilian Defense Guide",
    desc: "Why the Sicilian remains the most popular response to 1.e4 and how you can master its complexities.",
    date: "Feb 12, 2026",
    author: "Opening Specialist",
    image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=2050",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(234,179,8,1)]"
  },
  {
    id: 6,
    slug: "why-chess-secret-to-focus-kids",
    category: "Cognitive",
    title: "The Science of Chess Focus",
    desc: "Scientific insights into how the 64 squares help children build extreme concentration and patience.",
    date: "Feb 10, 2026",
    author: "Psychology Team",
    image: "https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?q=80&w=1974",
    color: "bg-[#EAB308]",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  }
];

export default function BlogPage() {
  const categories = ["All", "Training", "Openings", "Strategy", "Mindset", "Analysis"];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#EAB308]">
      
     <BlogBanner/>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20 md:py-32 container mx-auto px-6 max-w-7xl">
        
        {/* Search & Categories Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20 border-b-4 border-black pb-12">
             <div className="flex items-center gap-3 bg-gray-50 border-2 border-black px-6 py-4 w-full lg:w-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Search className="w-5 h-5 text-black" />
                <input type="text" placeholder="SEARCH TOPICS..." className="bg-transparent text-xs font-black uppercase focus:outline-none w-full lg:w-64 tracking-widest" />
             </div>

             <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button key={cat} className="px-5 py-2 border-2 border-black text-[10px] font-black uppercase tracking-widest hover:bg-[#EAB308] transition-all">
                    {cat}
                  </button>
                ))}
             </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -10 }}
              className={`relative border-4 border-black p-6 md:p-8 transition-all group ${post.color} ${post.textColor || 'text-black'} ${post.shadow} flex flex-col h-full`}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                <div className="relative aspect-[16/10] w-full border-2 border-black overflow-hidden mb-8 bg-gray-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute top-4 left-4 bg-black text-[#EAB308] text-[9px] font-black uppercase tracking-widest px-3 py-1 border border-[#EAB308]/30">
                    {post.date}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-[#EAB308] fill-[#EAB308]" />
                  <span className="text-[10px] font-[1000] uppercase tracking-widest opacity-60 italic">{post.category}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-[1000] uppercase italic leading-[0.95] mb-6 group-hover:text-[#EAB308] transition-colors tracking-tighter">
                  {post.title}
                </h3>
              
                <p className="text-xs md:text-sm font-bold leading-relaxed mb-10 opacity-70 flex-grow">
                  {post.desc}
                </p>

                <div className="pt-6 border-t-2 border-current/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-none border-2 border-current bg-current/5 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[10px] font-[1000] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Read Article <ArrowRight className="w-4 h-4 text-[#EAB308]" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* PAGINATION / LOAD MORE */}
        <div className="mt-24 flex justify-center">
            <button className="bg-black text-[#EAB308] px-12 py-5 font-[1000] uppercase text-xs tracking-[0.3em] border-4 border-black hover:bg-[#EAB308] hover:text-black transition-all shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                Load More Articles
            </button>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-gray-50 py-20 border-t-4 border-black">
        <div className="container mx-auto px-6 text-center">
           <Newspaper className="w-12 h-12 mx-auto mb-6 text-[#EAB308]" />
           <h4 className="text-3xl md:text-4xl font-[1000] uppercase tracking-tighter mb-4">Stay Ahead of the Game</h4>
           <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-10">Subscribe to get monthly grandmaster analysis delivered to your inbox.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
              <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-white border-4 border-black px-6 py-4 text-xs font-black uppercase focus:outline-none flex-grow shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" />
              <button className="bg-black text-[#EAB308] px-8 py-4 font-[1000] uppercase text-xs tracking-widest hover:bg-[#EAB308] hover:text-black transition-all">Subscribe</button>
           </div>
        </div>
      </section>

    </div>
  );
}