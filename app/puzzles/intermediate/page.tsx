"use client";

import PuzzlePageLayout from "../PuzzlePageLayout";
import { Zap, Target, Brain } from "lucide-react";

export default function IntermediatePuzzles() {
  return (
    <PuzzlePageLayout level="Intermediate" correctPassword="INT2026">
      
      {/* PUZZLE 01 */}
      <div className="border-4 border-black p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(234,179,8,1)] bg-white mb-12">
        <div className="flex items-center gap-3 mb-6">
            <div className="bg-black text-[#EAB308] px-3 py-1 font-black text-xs uppercase italic">Task #01</div>
            <h3 className="text-xl md:text-3xl font-[1000] uppercase tracking-tighter text-black">The Greek Gift Sacrifice</h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Interactive Board */}
            <div className="aspect-square w-full border-4 border-black bg-gray-100 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <iframe 
                  src="https://lichess.org/export/embed/puzzle/61058?theme=auto&bg=auto" 
                  width="100%" 
                  height="100%" 
                  className="w-full h-full"
                />
            </div>

            <div className="space-y-6">
                <div className="bg-gray-50 p-6 border-2 border-black relative">
                    <div className="absolute -top-3 -left-3 bg-[#EAB308] border-2 border-black p-1">
                        <Target className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-[10px] font-black uppercase text-gray-400 mb-2 tracking-widest">Objective</p>
                    <p className="text-sm font-bold leading-relaxed text-black uppercase">
                        White to move. Calculate the forced mate after Bxh7+. Pay attention to the knight follow-up on g5.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-black text-white border-2 border-black">
                        <p className="text-[9px] font-black uppercase opacity-50 mb-1">Theme</p>
                        <p className="text-xs font-bold text-[#EAB308]">Attacking King</p>
                    </div>
                    <div className="p-4 bg-white border-2 border-black">
                        <p className="text-[9px] font-black uppercase opacity-40 mb-1">Difficulty</p>
                        <p className="text-xs font-bold text-black italic">1600 - 1800 ELO</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </PuzzlePageLayout>
  );
}