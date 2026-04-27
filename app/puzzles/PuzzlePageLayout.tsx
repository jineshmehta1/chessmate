"use client";

import React, { useState } from "react";
import { Lock, Unlock, Zap, ChevronRight, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PuzzlePageProps {
  level: "Beginner" | "Intermediate" | "Advanced";
  correctPassword: string;
  children: React.ReactNode;
}

export default function PuzzlePageLayout({ level, correctPassword, children }: PuzzlePageProps) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 selection:bg-[#EAB308]">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header Section */}
        <div className="mb-12 border-b-4 border-black pb-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-5 h-5 text-[#EAB308] fill-[#EAB308]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Exclusive Training</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-[1000] text-black uppercase tracking-tighter">
            {level} <span className="text-white [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(234,179,8,1)]">Puzzles.</span>
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-md mx-auto mt-20"
            >
              <div className="bg-black p-8 md:p-12 border-4 border-black shadow-[15px_15px_0px_0px_rgba(234,179,8,1)] text-center">
                <div className="w-16 h-16 bg-[#EAB308] flex items-center justify-center mx-auto mb-8 border-2 border-black rotate-3">
                  <Lock className="w-8 h-8 text-black" strokeWidth={3} />
                </div>
                
                <h2 className="text-2xl font-[1000] text-white uppercase tracking-tighter mb-4">Access Restricted</h2>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Please enter the student access code for the {level} tier.</p>

                <form onSubmit={handleUnlock} className="space-y-4">
                  <input 
                    type="password"
                    placeholder="ENTER CODE"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full bg-white border-2 border-black p-4 font-black text-center uppercase tracking-[0.3em] outline-none transition-all ${error ? 'border-red-500 bg-red-50' : 'focus:bg-[#EAB308]'}`}
                  />
                  <button 
                    type="submit"
                    className="w-full bg-[#EAB308] text-black font-[1000] py-4 border-2 border-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]"
                  >
                    Unlock Puzzles <Unlock className="w-4 h-4" />
                  </button>
                </form>

                {error && (
                  <p className="text-red-500 font-black text-[10px] uppercase mt-4 animate-bounce">Incorrect Access Code</p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 gap-12"
            >
              {/* SUCCESS MESSAGE */}
              <div className="bg-green-50 border-l-8 border-green-500 p-4 flex items-center gap-4 mb-8">
                 <Trophy className="text-green-600 w-6 h-6" />
                 <span className="text-[10px] font-black uppercase text-green-700 tracking-widest">Authentication Successful. Good luck, Commander.</span>
              </div>
              
              {/* This is where the actual puzzles will render */}
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}