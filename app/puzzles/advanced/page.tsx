"use client";

import PuzzlePageLayout from "../PuzzlePageLayout";
import { ShieldAlert, Zap, Trophy } from "lucide-react";

export default function AdvancedPuzzles() {
  return (
    <PuzzlePageLayout level="Advanced" correctPassword="MASTER2026">
      
      {/* TOP LEVEL WARNING FOR ADVANCED */}
      <div className="bg-black text-[#EAB308] p-4 border-l-[10px] border-[#EAB308] mb-12 flex items-center gap-4">
         <ShieldAlert className="w-6 h-6 animate-pulse" />
         <p className="text-[10px] md:text-xs font-[1000] uppercase tracking-[0.2em]">
           Warning: Deep calculation required. Prophylaxis and precise move order is mandatory.
         </p>
      </div>

      {/* PUZZLE 01 */}
      <div className="border-4 border-black p-6 md:p-8 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] bg-white mb-12">
        <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#EAB308] text-black px-3 py-1 font-black text-xs uppercase italic border-2 border-black">Master Tier</div>
            <h3 className="text-xl md:text-3xl font-[1000] uppercase tracking-tighter text-black leading-none">Endgame Prophylaxis</h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Interactive Board */}
            <div className="aspect-square w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
                <iframe 
                  src="https://lichess.org/export/embed/puzzle/61123?theme=auto&bg=auto" 
                  width="100%" 
                  height="100%" 
                  className="w-full h-full"
                />
            </div>

            <div className="space-y-6">
                <div className="bg-gray-50 p-6 border-2 border-black">
                    <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-[#EAB308]" fill="currentColor" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-black">Instructions</span>
                    </div>
                    <p className="text-sm font-bold leading-relaxed text-gray-600 uppercase">
                        Black is threatening to promote. White to move and find the only sequence to maintain a draw through prophylactic king movement.
                    </p>
                </div>

                <div className="p-5 border-2 border-dashed border-black bg-white">
                    <p className="text-[9px] font-black uppercase text-gray-400 mb-2">Technical PGN</p>
                    <code className="text-[11px] font-mono break-all text-black leading-tight block">
                        [FEN "8/8/8/8/k7/1p6/1P6/1K6 w - - 0 1"]
                    </code>
                </div>

                <button className="w-full py-4 bg-black text-white font-[1000] uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#EAB308] hover:text-black transition-all">
                    Show Solution <Trophy size={14} />
                </button>
            </div>
        </div>
      </div>

    </PuzzlePageLayout>
  );
}