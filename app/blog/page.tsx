"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronRight, 
  User, 
  ArrowRight, 
  Search, 
  Newspaper,
  Star
} from "lucide-react";

// --- UPDATED DATA WITH SLUGS ---
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "how-to-improve-chess-rating",
    category: "Training",
    title: "How to Improve Chess Rating",
    desc: "A step-by-step roadmap to breaking through your ELO plateau and climbing the competitive ranks.",
    date: "Feb 24, 2024",
    author: "Raghava M.",
    image: "/1.webp",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]"
  },
  {
    id: 2,
    slug: "best-openings-for-beginners",
    category: "Openings",
    title: "Best Openings for Beginners",
    desc: "Stop memorizing theory. Learn the top 3 opening systems that prioritize development and safety.",
    date: "Feb 22, 2024",
    author: "Admin",
    image: "/2.webp",
    color: "bg-yellow-400",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 3,
    slug: "how-to-prepare-for-tournaments",
    category: "Prep",
    title: "How to Prepare for Tournaments",
    desc: "A complete guide on physical stamina, mental prep, and analyzing your opponents before a big event.",
    date: "Feb 20, 2024",
    author: "Raghava M.",
    image: "/3.avif",
    color: "bg-black",
    textColor: "text-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]"
  },
  {
    id: 4,
    slug: "common-chess-mistakes",
    category: "Analysis",
    title: "Common Chess Mistakes",
    desc: "Identify the recurring blunders that cost most amateur players their games and how to fix them.",
    date: "Feb 18, 2024",
    author: "Admin",
    image: "/4.webp",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 5,
    slug: "the-sicilian-defense-masterclass",
    category: "Strategy",
    title: "The Sicilian Defense: A Modern Masterclass",
    desc: "Why the Sicilian remains the most popular response to 1.e4 and how you can master its complexities.",
    date: "Feb 12, 2024",
    author: "Raghava M.",
    image: "/5.avif",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 6,
    slug: "why-chess-secret-to-focus-kids",
    category: "Cognitive",
    title: "Why Chess is the Secret to Focus in Kids",
    desc: "Scientific insights into how the 64 squares help children build extreme concentration and patience.",
    date: "Feb 10, 2024",
    author: "Admin",
    image: "/6.jpg",
    color: "bg-yellow-400",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 7,
    slug: "tournament-nerves-psychology",
    category: "Mindset",
    title: "Tournament Nerves: Staying Calm Under Pressure",
    desc: "Elite psychological techniques to handle high-stakes games and avoid 'Chess Blindness'.",
    date: "Feb 08, 2024",
    author: "Raghava M.",
    image: "/7.webp",
    color: "bg-black",
    textColor: "text-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]"
  },
  {
    id: 8,
    slug: "endgame-precision-guide",
    category: "Tactical",
    title: "Endgame Precision: Converting the Advantage",
    desc: "Don't let a winning position slip. Learn the essential pawn endings every master must know.",
    date: "Feb 05, 2024",
    author: "Admin",
    image: "/8.webp",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 9,
    slug: "online-vs-offline-chess",
    category: "Training",
    title: "Online vs Offline: The Digital Evolution",
    desc: "How engine analysis and global platforms are creating the youngest Grandmasters in history.",
    date: "Feb 01, 2024",
    author: "Raghava M.",
    image: "/9.jpg",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]"
  },
  {
    id: 10,
    slug: "chess-and-math-connection",
    category: "Education",
    title: "Chess and Math: The Invisible Connection",
    desc: "Exploring the geometry of the board and how spatial reasoning helps with advanced mathematics.",
    date: "Jan 28, 2024",
    author: "Admin",
    image: "/10.jpg",
    color: "bg-yellow-400",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  {
    id: 11,
    slug: "history-of-chess-evolution",
    category: "Culture",
    title: "The History of Chess: From Chaturanga to AI",
    desc: "A journey through 1,500 years of evolution that led to the modern game we love today.",
    date: "Jan 25, 2024",
    author: "Admin",
    image: "/11.jpg",
    color: "bg-black",
    textColor: "text-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(253,224,71,1)]"
  },
  {
    id: 12,
    slug: "prepare-first-fide-tournament",
    category: "Prep",
    title: "How to Prepare for Your First FIDE Tournament",
    desc: "A complete checklist for parents and students entering the world of rated competitive chess.",
    date: "Jan 20, 2024",
    author: "Raghava M.",
    image: "/12.avif",
    color: "bg-white",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  }
];

export default function BlogPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-yellow-400">
      
      {/* --- BANNER SECTION --- */}
      <section className="relative w-full overflow-hidden pt-28 md:pt-36 pb-16 md:pb-20 border-b-4 border-black">
        {/* Animated Background Doodles */}
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-[5%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 border-[3px] md:border-4 border-black z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
        <div className="absolute top-1/2 right-[5%] w-6 h-6 md:w-8 md:h-8 rounded-full bg-black z-0 opacity-10" />
        
        {/* Responsive Ghost Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[15rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic">
          BLOG
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-6 md:w-8 bg-yellow-400"></div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-black italic">Academy Journal</span>
            <div className="h-[2px] w-6 md:w-8 bg-yellow-400"></div>
          </div>

          {/* Heading: 2xl on mobile, 5xl on desktop */}
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-black leading-tight uppercase italic mb-10 tracking-tighter">
            Our <span className="text-white block md:inline [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">Insights.</span>
          </h1>
          
          <nav className="inline-flex items-center gap-2 md:gap-3 bg-black text-white px-5 py-2.5 md:px-8 md:py-4 rounded-2xl border-[3px] md:border-4 border-black shadow-[5px_5px_0px_0px_rgba(253,224,71,1)] md:shadow-[8px_8px_0px_0px_rgba(253,224,71,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <Link href="/" className="text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:text-yellow-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" strokeWidth={4} />
            <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-yellow-400">Journal</span>
          </nav>
        </div>
      </section>

      {/* --- BLOG GRID SECTION --- */}
      <section className="py-16 md:py-24 container mx-auto px-6 max-w-7xl">
        
        {/* Optional Search/Filter Bar (Responsive) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
             <div className="flex items-center gap-2 bg-gray-50 border-[3px] border-black px-4 py-2 rounded-xl w-full md:w-auto">
                <Search className="w-4 h-4 text-black" />
                <input type="text" placeholder="Search insights..." className="bg-transparent text-xs font-black uppercase focus:outline-none w-full md:w-48" />
             </div>
             <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-[10px] font-black uppercase tracking-widest">Latest Updates</span>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {BLOG_POSTS.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -8 }}
              className={`relative border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-6 transition-all group ${post.color} ${post.textColor || 'text-black'} ${post.shadow} flex flex-col h-full`}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video w-full border-[2px] md:border-4 border-black rounded-2xl overflow-hidden mb-6 bg-gray-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
                  {/* Date Sticker */}
                  <div className="absolute top-3 left-3 bg-black text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest px-3 py-1 border-2 border-white rounded-md shadow-lg">
                    {post.date}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-60 italic">{post.category}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-black uppercase italic leading-tight mb-4 group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-xs md:text-sm font-bold leading-relaxed mb-8 opacity-70 flex-grow">
                {post.desc}
              </p>

              <div className="flex items-center justify-between pt-6 border-t-2 border-black/5 mt-auto">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg border-2 border-black bg-gray-100 flex items-center justify-center shrink-0">
                    <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase">{post.author}</span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase hover:gap-4 transition-all">
                  Read <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER CALLOUT --- */}
      <section className="py-16 md:py-24 bg-gray-50 border-t-4 border-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <Newspaper className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 text-black" />
            <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-4">Never miss a move.</h2>
            <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">Get tactical puzzles and news in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input type="email" placeholder="YOUR EMAIL" className="flex-1 px-6 py-4 border-[3px] border-black rounded-xl font-black text-xs uppercase focus:bg-yellow-400 outline-none transition-colors" />
                <button className="bg-black text-white px-8 py-4 rounded-xl border-[3px] border-black font-black uppercase text-xs shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                    Subscribe
                </button>
            </div>
        </div>
      </section>

    </div>
  );
}