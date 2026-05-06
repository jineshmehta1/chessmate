"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Zap, Share2, Bookmark, CheckCircle2 } from "lucide-react";

export default function PostDetailClient({ post }: { post: any }) {
  // Safe extraction of the content object
  const content = post?.content || {};

  // Helper to split title for the cinematic "last word stroke" effect
  const titleWords = post?.title?.split(" ") || [];
  const lastWord = titleWords.pop();
  const mainTitle = titleWords.join(" ");

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#EAB308]">
      {/* --- HEADER / META SECTION --- */}
      <header className="relative w-full pt-32 md:pt-40 pb-12 border-b-[10px] border-black bg-white overflow-hidden">
        {/* Background Decal */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[10rem] md:text-[20rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
          {post?.category?.split(" ")[0] || "READ"}
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          {/* Action Bar */}
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest hover:text-[#EAB308] transition-colors group text-black"
            >
              <ArrowLeft
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                strokeWidth={3}
              />
              Back to Insights
            </Link>
          </div>

          {/* Category Sticker */}
          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1.5 bg-[#EAB308] border-2 border-black text-[10px] font-[1000] uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              {post?.category || "Article"}
            </span>
            <div className="h-[2px] w-8 bg-black opacity-10"></div>
            <span className="text-[10px] md:text-xs font-bold uppercase text-gray-400 tracking-widest">
              {post?.date}
            </span>
          </div>

          {/* Main Title: Brutalist Hybrid Styling */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[1000] text-black uppercase leading-[0.95] mb-10 tracking-tighter">
            {mainTitle}{" "}
            <span className="text-white [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(234,179,8,1)]">
              {lastWord}
            </span>
          </h1>

          {/* Author Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 border-t-2 border-black/5 text-black">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-black bg-[#EAB308] flex items-center justify-center shadow-[3px_3px_0px_0px_black]">
                <User className="w-5 h-5 text-black" />
              </div>
              <div className="leading-none text-black">
                <p className="text-[9px] font-black uppercase text-gray-400 mb-1">Written By</p>
                <p className="text-xs md:text-sm font-[1000] uppercase tracking-tight">
                  {post?.author || "ChessMate Academy"}
                </p>
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
        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-video border-4 border-black mb-16 md:mb-24 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-gray-100"
        >
          <img
            src={post?.image}
            alt={post?.title}
            className="w-full h-full object-cover transition-all duration-1000"
          />
        </motion.div>

        {/* Article Body */}
        <article
          className="prose prose-neutral max-w-none 
          prose-headings:font-[1000] prose-headings:uppercase prose-headings:tracking-tighter
          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg
          prose-strong:text-black prose-strong:font-black
          prose-blockquote:border-l-[#EAB308] prose-blockquote:bg-gray-50 prose-blockquote:py-2"
        >
          <p className="text-xl md:text-3xl font-[1000] leading-tight mb-12 border-l-[12px] border-[#EAB308] pl-8 italic text-black uppercase tracking-tight">
            {post?.desc}
          </p>

          <div className="space-y-12 font-medium">
            {/* Dynamic Intro */}
            {content.intro && <p className="text-lg md:text-xl text-black font-bold">{content.intro}</p>}

            {/* Dynamic Sections (Neurodiverse/Notation posts) */}
            {Array.isArray(content.sections) &&
              content.sections.map((section: any, idx: number) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl md:text-4xl text-black border-b-4 border-black inline-block pb-1">
                    {section.heading}
                  </h2>
                  {section.body && <p>{section.body}</p>}
                  {Array.isArray(section.points) && (
                    <div className="grid gap-6 mt-6">
                      {section.points.map((pt: any, pIdx: number) => (
                        <div key={pIdx} className="bg-gray-50 p-6 border-l-4 border-black">
                          <h4 className="font-black uppercase text-black mb-2">{pt.title}</h4>
                          <p className="text-sm md:text-base">{pt.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            {/* Dynamic Benefits (10 Benefits post) */}
            {Array.isArray(content.benefits) && (
              <div className="space-y-8">
                {content.benefits.map((benefit: any) => (
                  <div key={benefit.number} className="flex gap-6 group">
                    <span className="text-4xl md:text-6xl font-[1000] text-gray-200 group-hover:text-[#EAB308] transition-colors leading-none">
                      {benefit.number.toString().padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-black uppercase text-black mb-2">
                        {benefit.title}
                      </h3>
                      <p>{benefit.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Dynamic Steps (Improve Rating) */}
            {Array.isArray(content.steps) &&
              content.steps.map((item: any, idx: number) => (
                <div key={idx} className="p-8 border-4 border-black shadow-[8px_8px_0px_0px_black] bg-white text-black">
                  <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase mb-4 tracking-widest">
                    Step {item.step}
                  </span>
                  <h3 className="text-2xl font-[1000] uppercase text-black mb-4">
                    {item.title}
                  </h3>
                  <p>{item.body}</p>
                </div>
              ))}

            {/* Dynamic Phases (Tournament Prep / Methodology) */}
            {Array.isArray(content.phases) &&
              content.phases.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="p-8 border-4 border-black shadow-[8px_8px_0px_0px_black] bg-white text-black"
                >
                  <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase mb-4 tracking-widest">
                    {item.step ? `Step ${item.step}` : item.phase}
                  </span>
                  <h3 className="text-2xl font-[1000] uppercase text-black mb-4">
                    {item.title || item.name}
                  </h3>
                  <p>{item.body}</p>
                  {Array.isArray(item.points) && (
                    <ul className="mt-4 space-y-3">
                      {item.points.map((p: string, pIdx: number) => (
                        <li key={pIdx} className="flex gap-3 items-start text-sm">
                          <CheckCircle2 className="w-5 h-5 text-[#EAB308] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            {/* Elite Insight Callout */}
            <div className="bg-black text-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(234,179,8,1)] my-16 relative overflow-hidden group">
              <Zap className="text-[#EAB308] mb-6 w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
              <h4 className="text-xl md:text-2xl font-[1000] uppercase italic mb-4 tracking-tighter">
                FIDE Master Insight
              </h4>
              <p className="text-gray-300 text-base md:text-lg font-medium italic leading-relaxed max-w-2xl">
                {content.conclusion?.slice(0, 150) || content.verdict?.slice(0, 150)}...
              </p>
              <div className="absolute top-[-10%] right-[-5%] opacity-5 rotate-12 transition-transform group-hover:scale-110">
                <Zap className="w-40 h-40 md:w-64 md:h-64" />
              </div>
            </div>

            {/* Dynamic Conclusion */}
            {(content.conclusion || content.verdict) && (
              <div className="bg-[#EAB308]/10 p-8 border-2 border-dashed border-[#EAB308] rounded-xl">
                <h3 className="text-black font-black uppercase mb-4 tracking-widest flex items-center gap-2 text-black">
                  The Bottom Line
                </h3>
                <p className="text-black font-bold italic">
                  {content.conclusion || content.verdict}
                </p>
              </div>
            )}
          </div>
        </article>

        {/* BOTTOM NAVIGATION / CTA */}
        <div className="mt-20 pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#EAB308] animate-pulse"></div>
            <h3 className="text-xl md:text-3xl font-[1000] uppercase tracking-tighter text-black">
              Elevate Your <span className="text-[#EAB308]">Strategy.</span>
            </h3>
          </div>

          <Link
            href="/blog"
            className="w-full md:w-auto bg-black text-[#EAB308] px-10 py-5 border-2 border-black font-[1000] uppercase text-xs tracking-[0.2em] shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] hover:bg-[#EAB308] hover:text-black hover:shadow-none transition-all text-center"
          >
            All Articles
          </Link>
        </div>
      </main>
    </div>
  );
}