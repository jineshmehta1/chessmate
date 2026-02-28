"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Minus,
  HelpCircle,
  Star,
  Zap,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Star Chess Academy?",
    answer: "Star Chess Academy is a professional training institute focused on developing strategic thinking, competitive skills, and tournament performance. We guide students systematically from Beginner to Advanced levels.",
  },
  {
    question: "Who can join the Academy?",
    answer: "We train kids (5+ years), absolute beginners, intermediate players, and advanced tournament-rated players. Anyone with a passion for the game is welcome!",
  },
  {
    question: "Do you offer online classes?",
    answer: "Yes! We provide live interactive online classes, online camps, and hybrid training programs to suit your convenience from anywhere in the world.",
  },
  {
    question: "How are the classes structured?",
    answer: "Our training covers Tactical Training, Opening Preparation, Middlegame Strategy, Endgame Mastery, Puzzle Solving, and Game Analysis. We focus on the 'thinking process' rather than just memorization.",
  },
  {
    question: "What is the class duration and schedule?",
    answer: "Sessions typically last 45 to 60 minutes. Most students have 2–3 classes per week. We also offer weekend special workshops and custom schedules for professionals.",
  },
  {
    question: "Do you provide personal 1-on-1 coaching?",
    answer: "Yes, we offer 1-on-1 private coaching, small group sessions, and elite performance training for those looking for rapid improvement.",
  },
  {
    question: "How do you track student progress?",
    answer: "We monitor rating improvement, tactical accuracy, and tournament results. Parents receive regular updates based on monthly assessments and game analysis performance.",
  },
  {
    question: "Do students participate in tournaments?",
    answer: "Absolutely. We guide students for District, State, National, and FIDE rated tournaments, and conduct our own inter-academy events to build competitive confidence.",
  },
  {
    question: "What makes Star Chess different?",
    answer: "Our structured 'Beginner to Master' pathway, focus on the psychological side of the game, personalized feedback, and consistent tournament exposure set us apart.",
  },
  {
    question: "What are the fees?",
    answer: "Fees vary based on group vs. private training and the level of coaching required. Contact us via Phone or WhatsApp for a customized plan that fits your goals.",
  },
  {
    question: "How can I enroll?",
    answer: "You can fill out our registration form on the website, book a free trial class, or contact us directly via WhatsApp to get started immediately.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a trial session to assess the student's current level, explain our methodology, and recommend the right program for their journey.",
  },
];

export default function PremiumFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 md:py-24 bg-white font-sans overflow-hidden selection:bg-yellow-400">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-[5%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 border-4 border-black z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
      
      {/* Ghost Decal - Responsive Font */}
      <div className="absolute top-1/2 left-5 md:left-10 -translate-y-1/2 text-[6rem] md:text-[15rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic opacity-60">
        HELP
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-black"></div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-black">Support Center</span>
            </div>
            
            <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-none uppercase italic mb-10">
              Frequently Asked <br />
              <span className="text-white block md:inline [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">QUESTIONS.</span>
            </h2>

            <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2 no-scrollbar">
              {faqData.map((item, index) => (
                <div 
                  key={index}
                  className={`border-4 border-black rounded-2xl overflow-hidden transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 ${openIndex === index ? 'bg-yellow-400' : 'bg-white'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                  >
                    <span className="text-black font-black uppercase italic text-xs md:text-lg pr-4 tracking-tight leading-tight">
                      {item.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center transition-all bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${openIndex === index ? 'bg-black text-white' : ''}`}>
                      {openIndex === index ? <Minus className="w-4 h-4 md:w-5 md:h-5" strokeWidth={4} /> : <Plus className="w-4 h-4 md:w-5 md:h-5" strokeWidth={4} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 md:px-6 pb-6">
                          <div className="h-[2px] w-full bg-black/10 mb-4" />
                          <p className="text-black font-bold text-xs md:text-base leading-relaxed opacity-90">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 flex items-center gap-4 p-6 border-4 border-dashed border-black/20 rounded-3xl bg-gray-50/50">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                   <MessageSquare className="text-yellow-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-black uppercase tracking-tight">Still have questions?</p>
                  <button className="text-yellow-600 font-black uppercase text-[10px] md:text-xs flex items-center gap-2 hover:gap-3 transition-all">
                     Chat with a coach <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: IMAGE --- */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-32">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-[-15px] md:inset-[-20px] border-4 border-dashed border-black/10 rounded-[3rem] animate-[spin_30s_linear_infinity]" />
              
              {/* Image Container */}
              <div className="relative border-4 border-black rounded-[3rem] overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] bg-white transition-all duration-500">
                <img 
                  src="/faq.png" 
                  alt="Starchess Training"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 grayscale-[20%] hover:grayscale-0"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-yellow-400 border-2 border-black px-4 py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-5deg]">
                  <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>


              </div>

              {/* Decorative Star */}
              <div className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-10 w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-lg -rotate-12">
                <Star className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" fill="currentColor" />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}