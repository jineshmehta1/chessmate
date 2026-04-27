import PuzzlePageLayout from "../PuzzlePageLayout";

export default function BeginnerPuzzles() {
  return (
    <PuzzlePageLayout level="Beginner" correctPassword="CHESSMATE2026">
      
      {/* PUZZLE 1 */}
      <div className="border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] bg-white">
        <h3 className="text-2xl font-[1000] uppercase mb-6 italic">Puzzle #01: Back Rank Mate</h3>
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* 
               Here you will add your PGN Viewer. 
               I recommend using 'react-chessboard' + 'chess.js' 
               or an iframe embed from Lichess/Chess.com for the PGN.
            */}
            <div className="aspect-square bg-gray-100 border-2 border-black flex items-center justify-center">
                <p className="text-[10px] font-black uppercase text-gray-400">[ Your Chessboard with PGN here ]</p>
            </div>

            <div className="space-y-6">
                <div className="bg-gray-50 p-6 border-2 border-dashed border-black">
                    <p className="text-[10px] font-black uppercase text-[#EAB308] mb-2">Instructions</p>
                    <p className="text-sm font-bold leading-relaxed text-gray-600">
                        White to move and deliver mate in 2. Analyze the back rank weakness.
                    </p>
                </div>
                <div className="p-4 bg-black text-white">
                    <p className="text-[9px] font-black uppercase tracking-widest opacity-50">PGN Data</p>
                    <code className="text-[10px] break-all font-mono">
                        [FEN "6k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1"]
                    </code>
                </div>
            </div>
        </div>
      </div>

    </PuzzlePageLayout>
  );
}