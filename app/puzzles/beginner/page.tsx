"use client";

import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import dynamic from "next/dynamic";
import PuzzlePageLayout from "../PuzzlePageLayout";

const Chessboard = dynamic(
  () => import("react-chessboard").then((mod) => mod.Chessboard),
  { ssr: false }
);

// ─── DOUBLE ATTACK PUZZLES ───────────────────────────────────────────────────
const doubleAttackPuzzles = [
  {
    id: 1,
    fen: "8/8/k5n1/8/8/8/8/3R3K w - - 0 1",
    moves: ["Rd6+", "Kb7", "Rxg6"],
    instruction: "White to play & find a double attack. Giving check & attacking unprotected piece.",
    playerColor: "w",
  },
  {
    id: 2,
    fen: "7k/b4b2/8/8/8/8/6PP/2R4K w - - 0 1",
    moves: ["Rc7", "Bd4", "Rxf7"],
    instruction: "White to play & find a double attack.",
    playerColor: "w",
  },
  {
    id: 3,
    fen: "4kb2/N6R/8/1b6/8/8/5P2/1K6 b - - 0 1",
    moves: ["Bd3+", "Kc1", "Bxh7"],
    instruction: "Black to play & find a double attack. Try to attack bigger pieces first. Bc5 is wrong.",
    playerColor: "b",
  },
  {
    id: 4,
    fen: "2k3r1/8/p7/8/8/1n3BP1/6K1/4R3 w - - 0 1",
    moves: ["Bd5", "Rf8", "Bxb3"],
    instruction: "White to play & find a double attack. Don't do double attack from a danger square.",
    playerColor: "w",
  },
  {
    id: 5,
    fen: "8/1n2k3/4P3/8/n5b1/8/Pb3PPP/3R1RK1 w - - 0 1",
    moves: ["Rd7+", "Kxe6", "Rxb7"],
    instruction: "White to play & find a double attack. You can do double attack from a supported square.",
    playerColor: "w",
  },
  {
    id: 6,
    fen: "6k1/4q3/8/8/8/2R4P/P5P1/7K b - - 0 1",
    moves: ["Qe1+", "Kh2", "Qxc3"],
    instruction: "Black to play & find a double attack.",
    playerColor: "b",
  },
  {
    id: 7,
    fen: "1r4k1/5p1p/5np1/8/8/7P/6PK/3Q4 w - - 0 1",
    moves: ["Qd6", "Re8", "Qxf6"],
    instruction: "White to play & find a double attack.",
    playerColor: "w",
  },
  {
    id: 8,
    fen: "5rk1/6p1/8/8/5n2/4p3/8/3RKR2 b - - 0 1",
    moves: ["e2", "Kf2", "exd1=Q"],
    instruction: "Black to play & find a double attack.",
    playerColor: "b",
  },
  {
    id: 9,
    fen: "6k1/p5pp/8/1b1n1p2/8/1P4P1/1RP1P2P/7K w - - 0 1",
    moves: ["c4", "Bc6", "cxd5"],
    instruction: "White to play & find a double attack.",
    playerColor: "w",
  },
  {
    id: 10,
    fen: "r5k1/3p1pp1/1pp4p/p7/3nPN2/3P2B1/PnPK2PP/7R w - - 0 1",
    moves: ["Kc3", "Ne6", "Kxb2"],
    instruction: "White to play & find a double attack.",
    playerColor: "w",
  },
  {
    id: 11,
    fen: "r3k2r/p3bpp1/1pp1p1bp/8/8/P3B1P1/1P3PBP/R4RK1 w - - 0 1",
    moves: ["Bxc6+", "Kf8", "Bxa8"],
    instruction: "White to play & find a double attack.",
    playerColor: "w",
  },
  {
    id: 12,
    fen: "r4bk1/2pp1pp1/1p5p/8/n7/3B3P/PP2QPP1/6K1 w - - 0 1",
    moves: ["Qe4", "Rd8", "Qh7#"],
    instruction: "White to play & find a double attack. Attacking unprotected piece and checkmate square. Double Attack is also called a Fork.",
    playerColor: "w",
  },
];

// ─── LICHESS MATE-IN-1 PUZZLES ───────────────────────────────────────────────
// Format: moves[0] = opponent's move (auto-played), moves[1] = player's solution
const mateIn1Puzzles = [
  { id: 1,   fen: "2kr1b1r/p1p2pp1/2pqb3/7p/3N2n1/2NPB3/PPP2PPP/R2Q1RK1 w - - 2 13",   moves: ["d4e6","d6h2"],   playerColor: "b" },
  { id: 2,   fen: "6Qk/p1p3pp/4N3/1p6/2q1r1n1/2B5/PP4PP/3R1R1K b - - 0 28",             moves: ["h8g8","f1f8"],   playerColor: "w" },
  { id: 3,   fen: "r6r/1pNk1ppp/2np4/b3p3/4P1b1/N1Q5/P4PPP/R3KB1R w KQ - 3 18",         moves: ["c7a8","a5c3"],   playerColor: "b" },
  { id: 4,   fen: "r4rk1/pp3ppp/3b4/2p1pPB1/7N/2PP3n/PP4PP/R2Q1RqK w - - 5 18",         moves: ["f1g1","h3f2"],   playerColor: "b" },
  { id: 5,   fen: "r3k2r/pb1p1ppp/1b4q1/1Q2P3/8/2NP1Pn1/PP4PP/R1B2R1K w kq - 1 17",    moves: ["h2g3","g6h5"],   playerColor: "b" },
  { id: 6,   fen: "r5k1/pp4pp/4p1q1/4p3/3n4/P5P1/1PP2Q1P/2KR1R2 w - - 4 24",           moves: ["f2e3","g6c2"],   playerColor: "b" },
  { id: 7,   fen: "1qr2rk1/1p1p1ppp/pB2p1n1/7n/2P1P3/1Q2NP1P/PP2B1Pb/3R1RK1 w - - 1 20", moves: ["g1f2","b8g3"], playerColor: "b" },
  { id: 8,   fen: "7k/p4R1p/3p3r/2pN1n2/2PbBBb1/3P2P1/P3r3/5R1K w - - 1 28",           moves: ["f4h6","f5g3"],   playerColor: "b" },
  { id: 9,   fen: "4r1k1/1p2R1p1/p2p2Pp/P1pP4/5q2/1R3p2/1P1Q3P/5B1K b - - 0 34",       moves: ["f4d2","e7e8"],   playerColor: "w" },
  { id: 10,  fen: "8/6k1/2R4p/5p1P/5P1K/6P1/8/r7 w - - 2 58",                           moves: ["c6b6","a1h1"],   playerColor: "b" },
  { id: 11,  fen: "2r2rk1/5ppp/bq2p3/p1ppP1N1/Pb1P2P1/1P2P2P/2QN4/2R1K2R b K - 1 18",  moves: ["c5d4","c2h7"],   playerColor: "w" },
  { id: 12,  fen: "r4rk1/1pp2ppp/p2p4/2bPp3/2P1Pn1q/P1N2B2/1P3P2/R1BQK1R1 w Q - 1 15", moves: ["c1f4","h4f2"],   playerColor: "b" },
  { id: 13,  fen: "3r1Q1k/pp4pp/2p5/6q1/5R2/2P5/P1P2PPP/3rR1K1 b - - 8 27",            moves: ["d8f8","f4f8"],   playerColor: "w" },
  { id: 14,  fen: "3r4/R7/2p5/p1P2p2/1p4k1/nP6/P2KNP2/8 w - - 3 41",                   moves: ["d2e3","a3c2"],   playerColor: "b" },
  { id: 15,  fen: "r6k/1b3pp1/p1q1pn1p/2p5/P1B5/1PN4Q/2P1RP1P/R4Kr1 w - - 2 26",       moves: ["f1g1","c6h1"],   playerColor: "b" },
  { id: 16,  fen: "r2r2k1/2q1bpp1/3p1n1p/1ppN4/1P1BP3/P5Q1/4RPPP/R5K1 b - - 1 20",     moves: ["f6d5","g3g7"],   playerColor: "w" },
  { id: 17,  fen: "r4rk1/1bp2ppp/p1q1pn2/2P5/8/3B1N2/P1P1QPPP/R4RK1 w - - 0 16",       moves: ["f3e5","c6g2"],   playerColor: "b" },
  { id: 18,  fen: "2q3k1/4br1p/6RQ/1p1n2p1/7P/1P4P1/1B2PP2/6K1 b - - 0 27",            moves: ["h7g6","h6h8"],   playerColor: "w" },
  { id: 19,  fen: "5kr1/ppR3p1/3R3p/8/1r1n4/8/1P3PPP/2K5 b - - 4 31",                   moves: ["d4b5","d6d8"],   playerColor: "w" },
  { id: 20,  fen: "r3kb1r/ppqn1ppp/4pn2/1Q2Nb2/3P4/8/PP2PPPP/RNB1KB1R w KQkq - 4 9",   moves: ["e5d7","c7c1"],   playerColor: "b" },
  { id: 21,  fen: "r1b1kb1Q/ppp4p/6pB/3P4/2pn4/8/PPP1qPPP/RN1K3R w q - 2 13",          moves: ["d1c1","e2c2"],   playerColor: "b" },
  { id: 22,  fen: "7r/ppp2kp1/2nb1pp1/3p3r/3P2q1/2PQB2P/PP3PP1/R3R1K1 w - - 0 18",     moves: ["h3g4","h5h1"],   playerColor: "b" },
  { id: 23,  fen: "2kr1br1/ppBb1ppp/8/3P2Q1/3n2n1/5N2/PP3qPP/RN2R2K b - - 0 16",       moves: ["d4f3","g5d8"],   playerColor: "w" },
  { id: 24,  fen: "3r1n2/1bp1bkpp/p1q2n2/1p6/3P4/P1N3B1/1PP2PPP/R2QR1K1 w - - 5 18",   moves: ["d1e2","c6g2"],   playerColor: "b" },
  { id: 25,  fen: "rn2q1k1/pp3ppp/2pb4/3p1B2/2Pn4/1Q3N2/PP3PPP/R1B4K w - - 0 15",      moves: ["f3d4","e8e1"],   playerColor: "b" },
  { id: 26,  fen: "2rq1rk1/1b3p1p/p3p3/1p1pB1p1/2nP2N1/1RP1PP2/P1Q3PP/3R2K1 b - - 1 22", moves: ["f7f5","g4h6"], playerColor: "w" },
  { id: 27,  fen: "2kr3r/pp1n2pp/2QB1bp1/5q2/2B5/8/PPP2PPP/3R1RK1 b - - 0 17",         moves: ["b7c6","c4a6"],   playerColor: "w" },
  { id: 28,  fen: "8/1P3ppp/8/8/8/2pk3P/3p2P1/3K4 w - - 0 52",                           moves: ["b7b8q","c3c2"],  playerColor: "b" },
  { id: 29,  fen: "r4rk1/2q2ppp/3pp3/4Pb1N/pp6/1B4Q1/PPP3PP/1K1RR3 b - - 0 21",        moves: ["a4b3","g3g7"],   playerColor: "w" },
  { id: 30,  fen: "8/6pp/4N1k1/5p2/5P2/5rPb/4R2P/6K1 w - - 0 35",                       moves: ["e6g5","f3f1"],   playerColor: "b" },
  { id: 31,  fen: "6k1/2p2ppp/pnp5/B7/2P3PP/1P1bPPR1/r6r/3R2K1 b - - 1 29",            moves: ["d3e2","d1d8"],   playerColor: "w" },
  { id: 32,  fen: "r3k2r/ppp2p1p/2n1pp2/7q/2PN2b1/2BP1Pb1/PP2B1P1/R2Q1RK1 w kq - 1 16", moves: ["f3g4","h5h2"],  playerColor: "b" },
  { id: 33,  fen: "Q5k1/p1p3p1/5rP1/8/3P4/7P/q3r3/B4RK1 b - - 1 34",                   moves: ["f6f8","a8f8"],   playerColor: "w" },
  { id: 34,  fen: "rn2kb1r/pp2pppp/2p2n2/4q3/8/2N4Q/PPPPBPPP/R1B1K2R b KQkq - 2 8",    moves: ["g7g6","h3c8"],   playerColor: "w" },
  { id: 35,  fen: "rn2k2r/pp2bp1p/2p1pNp1/6B1/5P2/7P/PPP4P/2K1RR2 b - - 3 17",         moves: ["e8f8","g5h6"],   playerColor: "w" },
  { id: 36,  fen: "6k1/pb2r1pN/1n4Bp/3p4/1P2pR2/P7/3R1PPP/2r3K1 w - - 2 30",           moves: ["d2d1","c1d1"],   playerColor: "b" },
  { id: 37,  fen: "rqnr2k1/5ppp/p2p4/4Q3/8/1P5P/PBP2PP1/R2R2K1 b - - 2 23",            moves: ["d6e5","d1d8"],   playerColor: "w" },
  { id: 38,  fen: "2kr2r1/ppb2ppp/3qbn2/2Np2B1/P7/2P2Q1P/1PB2PP1/R4RK1 w - - 5 18",    moves: ["c5e6","d6h2"],   playerColor: "b" },
  { id: 39,  fen: "2r3k1/7p/6q1/p1Np4/Qp2pr2/P4P2/1PR2P1K/5R2 w - - 0 36",             moves: ["f1g1","f4h4"],   playerColor: "b" },
  { id: 40,  fen: "rn2kb1r/pp2pppp/2p2n2/8/3q2b1/1Q6/PPP2PPP/RNB1KBNR w KQkq - 0 7",   moves: ["b3b7","d4d1"],   playerColor: "b" },
  { id: 41,  fen: "2rq1rk1/1p3p1p/p1pn2p1/P2p4/1P1PnP2/3NP3/5PBP/R1Q3RK w - - 2 22",  moves: ["d3c5","e4f2"],   playerColor: "b" },
  { id: 42,  fen: "rn2k2Q/5p2/2p1p1r1/1q4p1/8/8/4NPPP/3R1K1R b q - 5 23",              moves: ["e8e7","h8d8"],   playerColor: "w" },
  { id: 43,  fen: "2r3kR/Q7/5q2/1brpN3/5Pp1/4P1P1/6K1/1B6 b - - 2 43",                 moves: ["f6h8","a7f7"],   playerColor: "w" },
  { id: 44,  fen: "r4rk1/pbp3pp/1p1pp3/6B1/2PPp2q/3nP2P/PP3P2/R2QKBR1 w Q - 8 16",    moves: ["f1d3","h4f2"],   playerColor: "b" },
  { id: 45,  fen: "4r3/3R1pkp/6p1/1P6/1b6/5B2/1P1p1PPP/3R2K1 w - - 0 36",              moves: ["d1d2","e8e1"],   playerColor: "b" },
  { id: 46,  fen: "8/6kp/4b1q1/1p6/1PpPp2Q/2P1P3/r2N2P1/5RK1 w - - 7 34",              moves: ["d2e4","g6g2"],   playerColor: "b" },
  { id: 47,  fen: "r1bqkb1r/pp1pnppp/2n1p3/1N6/5B2/8/PPP1PPPP/R2QKBNR b KQkq - 4 6",  moves: ["e6e5","b5d6"],   playerColor: "w" },
  { id: 48,  fen: "8/5k2/1P4R1/6PK/1r6/8/8/8 w - - 1 58",                               moves: ["h5h6","b4h4"],   playerColor: "b" },
  { id: 49,  fen: "rnb2rk1/pp3p1p/3p2Pb/4p1q1/3pQ3/8/PPP1PPP1/RN2KBNR w KQ - 1 12",   moves: ["g1f3","g5c1"],   playerColor: "b" },
  { id: 50,  fen: "3r4/1p4p1/2pBkbBp/p1P5/3rp3/P7/1PK2P2/4R3 b - - 1 31",              moves: ["e6d5","g6f7"],   playerColor: "w" },
  { id: 51,  fen: "3rk2r/p1p2pp1/1p6/2pQ1b2/2Pn1P2/8/PP1P1KBq/R1B1R3 b - - 3 25",     moves: ["e8f8","d5d8"],   playerColor: "w" },
  { id: 52,  fen: "r5nr/ppp3p1/3bBk1p/4nP2/3p4/8/PPPN1P1P/R1B1K2R b KQ - 1 15",        moves: ["g8e7","d2e4"],   playerColor: "w" },
  { id: 53,  fen: "2k4r/pp3pp1/4pn2/2np2p1/8/1B1P1Pq1/PPPN1R2/R2Q3K w - - 6 20",      moves: ["f2h2","g3h2"],   playerColor: "b" },
  { id: 54,  fen: "r1bq1rk1/5ppp/p2p1b2/1p1Pn3/1P2Q3/P1NB3P/1B3PP1/R4RK1 b - - 2 17", moves: ["c8b7","e4h7"],   playerColor: "w" },
  { id: 55,  fen: "b4b1r/3k1ppp/p2p4/1p2p3/3nq3/N1P1B3/PP3PPP/R2Q1RK1 w - - 1 16",    moves: ["c3d4","e4g2"],   playerColor: "b" },
  { id: 56,  fen: "r3kb1r/p4pp1/b1p4p/n3p3/4N3/2Nq1Q2/PP1P1PPP/R1B2RK1 w kq - 0 14",  moves: ["f3f5","d3f1"],   playerColor: "b" },
  { id: 57,  fen: "r1bk3r/ppp1np1p/3p2pP/1N2P1q1/2BP1n2/8/PPP3P1/R1BQ2KR w - - 1 14", moves: ["e5d6","g5g2"],   playerColor: "b" },
  { id: 58,  fen: "1r2R1k1/2Q4p/pp6/2p2n2/P2P1P1q/2P4P/2PB2b1/4R1K1 b - - 0 29",      moves: ["b8e8","e1e8"],   playerColor: "w" },
  { id: 59,  fen: "3r1k1r/5p1p/b2q1p2/P2Np3/Bp2P3/2b2P2/3Q2PP/1R2K2R w K - 4 24",     moves: ["d5c3","d6d2"],   playerColor: "b" },
  { id: 60,  fen: "8/8/1R3pkp/1pP5/1P3PKP/r7/8/8 w - - 2 48",                           moves: ["b6b5","f6f5"],   playerColor: "b" },
  { id: 61,  fen: "r4rk1/pb3ppp/1p2p3/3q4/3N4/2PQ3P/PP3PP1/R4RK1 w - - 1 18",          moves: ["d3c2","d5g2"],   playerColor: "b" },
  { id: 62,  fen: "rn3q1r/4pk1p/2pp1np1/p5Q1/1p1PPNP1/5P2/PPP5/R4KNR b - - 0 17",     moves: ["h7h6","g5g6"],   playerColor: "w" },
  { id: 63,  fen: "2kr4/1pp5/p1b2R1n/2PpP3/3B2p1/2P1Q1Hp/PPq4P/5RK1 w - - 3 27",      moves: ["f6h6","c2g2"],   playerColor: "b" },
  { id: 64,  fen: "r6r/1q2bpk1/7p/p1p1pPpn/Pp2P1nP/1P1B1N2/2P3P1/2BRR1QK w - - 7 30", moves: ["c1b2","h5g3"],   playerColor: "b" },
  { id: 65,  fen: "2r3k1/5p1p/4pP2/3p3P/8/5P2/p1b3P1/2R3K1 b - - 0 30",               moves: ["c2b1","c1c8"],   playerColor: "w" },
  { id: 66,  fen: "2k2bn1/ppp2Nrp/2b1p3/3q2BQ/8/8/PP3PPP/RN3RK1 w - - 5 18",           moves: ["b1c3","d5g2"],   playerColor: "b" },
  { id: 67,  fen: "rnbk3r/pppp1Bpp/8/5p2/4p3/2PP4/P1P2PPP/R1B1K2R b KQ - 0 13",        moves: ["h8f8","c1g5"],   playerColor: "w" },
  { id: 68,  fen: "r2q1rk1/ppp2ppp/2n5/3p2N1/3P4/1B5P/P1Q1bPP1/R1B2RK1 b - - 2 16",   moves: ["e2f1","c2h7"],   playerColor: "w" },
  { id: 69,  fen: "Q4n1k/p2b2pp/3b4/2p5/4pq2/2Pn3P/PP1NBPP1/R1B2RK1 w - - 1 23",      moves: ["d2e4","f4h2"],   playerColor: "b" },
  { id: 70,  fen: "1r3rk1/2p1Nppb/p2nq3/1p2p1Pp/4Qn1P/2P1N3/PPB2P1K/3R2R1 b - - 5 28", moves: ["e6e7","e4h7"],  playerColor: "w" },
  { id: 71,  fen: "3k2r1/pR5R/3r4/4p1q1/7Q/3Pn1PP/PP5K/8 b - - 0 27",                  moves: ["g5h4","b7b8"],   playerColor: "w" },
  { id: 72,  fen: "2k5/1pp2pp1/p3p1p1/3pP2r/Q7/2P1N1P1/PP3nP1/2KR3r b - - 6 20",      moves: ["f2d1","a4e8"],   playerColor: "w" },
  { id: 73,  fen: "r1b2rk1/ppb5/2p4p/2Ppqpp1/1P6/2N1P3/P3BPPP/2RQ1RK1 w - - 0 16",    moves: ["e2d3","e5h2"],   playerColor: "b" },
  { id: 74,  fen: "r1b1k1nr/1pp2p2/p7/1B1q3p/6p1/4PP2/PPPQ1P2/2KR3R b kq - 1 17",     moves: ["d5b5","d2d8"],   playerColor: "w" },
  { id: 75,  fen: "r3r3/1kpRnqpp/p4p2/Qp2P2P/1N6/4Pb2/PPP3P1/2K2R2 b - - 0 22",       moves: ["e7c6","a5c7"],   playerColor: "w" },
  { id: 76,  fen: "7k/6p1/8/4p3/Pp1b4/1P3b1q/3Q2P1/5RK1 w - - 0 45",                   moves: ["d2d4","h3g2"],   playerColor: "b" },
  { id: 77,  fen: "4r2k/p6p/1p3R2/2p5/2P5/1P4R1/r5PP/2K5 w - - 0 32",                  moves: ["f6f7","e8e1"],   playerColor: "b" },
  { id: 78,  fen: "r1bqkb1r/pp2pppp/2p2n2/2PnN3/2BP1B2/8/PP3PPP/RN1QR1K1 b kq - 2 12", moves: ["d5f4","c4f7"],  playerColor: "w" },
  { id: 79,  fen: "6r1/7p/2pk1p2/P2p4/P2KbP2/4P3/4NR1P/8 w - - 1 35",                  moves: ["e2c3","c6c5"],   playerColor: "b" },
  { id: 80,  fen: "6k1/5ppp/5Bq1/8/p3R3/P6P/2r2QB1/R5K1 b - - 0 29",                   moves: ["c2f2","e4e8"],   playerColor: "w" },
  { id: 81,  fen: "5rk1/p4ppp/4p3/1Q6/1P1BN1b1/8/Pq3PPP/R1r1KB1R w KQ - 2 18",        moves: ["a1c1","b2c1"],   playerColor: "b" },
  { id: 82,  fen: "q5kr/p4p2/3Bb1p1/4p2p/5n2/2P5/P1Q2PPP/3R1RK1 w - - 4 21",           moves: ["d6e5","a8g2"],   playerColor: "b" },
  { id: 83,  fen: "5r1k/5r2/2b2RQp/1p1p2p1/1q4P1/8/8/1B3R1K b - - 0 36",               moves: ["f7f6","g6h7"],   playerColor: "w" },
  { id: 84,  fen: "r4rk1/4p1bp/3p2p1/q1pP1P2/4QP2/4B3/1p5P/1BKR3R w - - 0 22",        moves: ["c1c2","a5c3"],   playerColor: "b" },
  { id: 85,  fen: "1rbr1k2/p4ppp/2B5/2pR1NP1/2P5/P7/7P/4R1K1 b - - 0 27",              moves: ["d8d5","e1e8"],   playerColor: "w" },
  { id: 86,  fen: "4Q3/6pk/p3p2p/5p2/1p1P2P1/4q2P/2B1n2B/7K w - - 0 35",               moves: ["g4f5","e3f3"],   playerColor: "b" },
  { id: 87,  fen: "3r1rk1/3b1pp1/7p/8/N2Qp1n1/1P6/PB1q1PP1/R5K1 b - - 1 25",           moves: ["d7a4","d4g7"],   playerColor: "w" },
  { id: 88,  fen: "4R3/1k2R3/3K2p1/1P6/1P6/2rp3r/8/8 b - - 3 45",                      moves: ["b7b6","e8b8"],   playerColor: "w" },
  { id: 89,  fen: "3r2k1/pQ3ppp/4R1n1/2q5/2P5/2B3P1/P4PBP/6K1 b - - 0 24",             moves: ["f7e6","b7g7"],   playerColor: "w" },
  { id: 90,  fen: "5rk1/ppq3pR/4p1r1/3p4/8/2P4Q/PP3RPP/6K1 b - - 0 22",                moves: ["c7c5","h7h8"],   playerColor: "w" },
  { id: 91,  fen: "6Qk/6pp/p2B4/2pP4/P1q5/6P1/2P1p2P/5RK1 b - - 0 26",                 moves: ["h8g8","f1f8"],   playerColor: "w" },
  { id: 92,  fen: "r1b2k1r/pp4p1/2pq2p1/3p4/3p4/1N6/PPP2PPP/R2Q1RK1 w - - 0 17",      moves: ["d1d4","d6h2"],   playerColor: "b" },
  { id: 93,  fen: "5r1k/1pq3p1/2p2P1p/3pPQ2/1p1P4/7P/1rB4K/5R2 b - - 1 35",           moves: ["f8f6","f5h7"],   playerColor: "w" },
  { id: 94,  fen: "1rb4r/pp1nb1pp/5nk1/3Np3/2q1P3/2N2Q2/PPP2PPP/R1B1K2R b KQ - 4 12", moves: ["f6d5","f3f5"],   playerColor: "w" },
  { id: 95,  fen: "rnb1k1nr/1ppp1ppp/8/p1bPp3/4P2q/2PB4/PP3PPP/RNBQK1NR w KQkq - 3 6", moves: ["g1f3","h4f2"],  playerColor: "b" },
  { id: 96,  fen: "2r4k/5p2/4pNp1/6Pp/q6P/7r/2PQ4/1RKN4 w - - 2 37",                   moves: ["d2b4","c8c2"],   playerColor: "b" },
  { id: 97,  fen: "2r3k1/5ppp/2P5/8/5P2/P5Pn/6BP/R3R1qK w - - 6 32",                   moves: ["e1g1","h3f2"],   playerColor: "b" },
  { id: 98,  fen: "r4knb/1bpp4/p1n1pq2/1p4NQ/3PP3/2N5/PPP2PP1/2KR1B2 b - - 3 15",      moves: ["f6h6","h5f7"],   playerColor: "w" },
  { id: 99,  fen: "r3r2k/p2n1p1R/5n2/qp3Q2/3P4/B3Pp2/P4P1P/1B5K b - - 0 23",          moves: ["h8g8","f5g5"],   playerColor: "w" },
  { id: 100, fen: "1R6/3k1Q2/p2b1p2/2r1p3/3n4/P6P/5PP1/4qBK1 b - - 1 40",              moves: ["d7c6","f7b7"],   playerColor: "w" },
  { id: 101, fen: "2k2b1r/pp3ppp/1n6/BN2p1P1/2Q1Nn1P/8/PP3P2/2KR4 b - - 0 24",        moves: ["b6c4","d1d8"],   playerColor: "w" },
  { id: 102, fen: "R5k1/3r2pp/3N4/1nP5/6P1/1P3P2/P2K2n1/8 b - - 1 30",                 moves: ["d7d8","a8d8"],   playerColor: "w" },
  { id: 103, fen: "rn2qrk1/ppp2N1p/3pPpB1/3n4/6b1/8/P1QN1PPP/R4RK1 b - - 0 18",       moves: ["h7g6","c2g6"],   playerColor: "w" },
  { id: 104, fen: "r6r/2pk1ppp/p1np4/1pbBpN1q/4P1b1/5N2/PPPP1PRK/R1BQ4 w - - 12 18",  moves: ["h2g3","h5h3"],   playerColor: "b" },
  { id: 105, fen: "5r2/5p1k/4nP2/4N1p1/8/6P1/6K1/R7 b - - 1 78",                       moves: ["h7h6","a1h1"],   playerColor: "w" },
  { id: 106, fen: "6rk/7p/R2N3P/1r6/1P5K/P7/8/8 b - - 4 50",                            moves: ["b5d5","d6f7"],   playerColor: "w" },
  { id: 107, fen: "8/5K1p/1p4pk/8/3brp2/5R2/8/8 b - - 5 50",                            moves: ["g6g5","f3h3"],   playerColor: "w" },
  { id: 108, fen: "r2qkbnr/pp5p/8/4Nb2/3p4/1QN5/PP2PPPP/R3KB1R b KQkq - 1 12",         moves: ["d4c3","b3f7"],   playerColor: "w" },
  { id: 109, fen: "3kRr2/3n1B1p/2pP4/p1n5/Ppp5/8/1P3PPP/4R1K1 b - - 8 32",             moves: ["f8e8","e1e8"],   playerColor: "w" },
  { id: 110, fen: "r4rk1/p1p1R1pp/2p2p2/5P2/6Q1/1P5P/q5PK/8 b - - 1 30",              moves: ["a2b3","g4g7"],   playerColor: "w" },
  { id: 111, fen: "5r1k/2p3Rp/3p4/p2Pn3/1p2B3/1P6/PKP2r1P/6R1 b - - 1 28",            moves: ["f2e2","g7h7"],   playerColor: "w" },
  { id: 112, fen: "rn1qk2r/pb3ppp/5n2/2b5/7N/2N1p1P1/PP1PPP1P/R1BQKB1R w KQkq - 0 9", moves: ["h4g2","e3f2"],  playerColor: "b" },
  { id: 113, fen: "4r3/pp2rkp1/2p5/P2p2pP/R4bP1/2NQ4/1PP2P2/3Kq2R w - - 3 25",        moves: ["h1e1","e7e1"],   playerColor: "b" },
  { id: 114, fen: "2k3r1/pp5p/4p3/2p2p2/2P5/P4P1q/1PQ1RR1b/7K w - - 0 32",            moves: ["f2h2","h3f1"],   playerColor: "b" },
  { id: 115, fen: "r1bk4/pppp3p/2n5/2b1prN1/8/1B6/PPPP2PP/RNB2RK1 w - - 1 14",        moves: ["g1h1","f5f1"],   playerColor: "b" },
  { id: 116, fen: "5k1r/p3Rpbp/3N2p1/4nbB1/2P5/3rP3/q4PPP/3Q1RK1 b - - 2 16",         moves: ["f7f6","e7e8"],   playerColor: "w" },
  { id: 117, fen: "3r1b1r/2pn4/1p1p3p/2kP2qn/Q3Pp2/4Bp2/1P4PP/4R1K1 b - - 3 26",      moves: ["f4e3","e1c1"],   playerColor: "w" },
  { id: 118, fen: "6k1/8/p3P1p1/8/8/2P3PP/1r5r/R3RK2 w - - 0 46",                      moves: ["e6e7","h2h1"],   playerColor: "b" },
  { id: 119, fen: "8/4k2p/Q1p1p3/p2pP1r1/q7/P6P/1P3PK1/2R2R2 w - - 1 28",             moves: ["g2f3","a4e4"],   playerColor: "b" },
  { id: 120, fen: "2kr2nr/pp2nppp/2pp4/2b2PP1/4NPq1/3B1R2/PPP4P/R2QB2K w - - 5 18",    moves: ["h2h3","g4g1"],   playerColor: "b" },
  { id: 121, fen: "r4rk1/pbp1n1pp/1p1p4/3Pp1N1/2B4P/2PQ4/PP3qP1/R2K3R b - - 1 17",    moves: ["f2g2","d3h7"],   playerColor: "w" },
  { id: 122, fen: "r4rk1/ppp2pn1/2np4/q2N4/3PP3/5P2/PPP5/1K1R1B1R b - - 2 18",         moves: ["c6b4","d5f6"],   playerColor: "w" },
  { id: 123, fen: "6k1/6b1/p1r1p2p/1pN4r/3P3q/2P2Q2/P4PP1/1R2R1K1 w - - 2 31",        moves: ["f3c6","h4h1"],   playerColor: "b" },
  { id: 124, fen: "8/1R5R/4kpp1/4p3/4P2K/5P1P/r7/6r1 b - - 10 40",                     moves: ["a2h2","b7b6"],   playerColor: "w" },
  { id: 125, fen: "7k/pp5p/4r1pP/5pP1/3Q1n2/P1P5/KP6/5q2 b - - 1 35",                  moves: ["h8g8","d4g7"],   playerColor: "w" },
  { id: 126, fen: "r4rk1/pb2ppb1/1q6/6PQ/8/2NP1N2/PPnK1PP1/R6R b - - 1 16",            moves: ["c2a1","h5h7"],   playerColor: "w" },
  { id: 127, fen: "8/8/8/8/8/4K3/1k3Q2/1q6 b - - 5 53",                                 moves: ["b2c1","f2d2"],   playerColor: "w" },
  { id: 128, fen: "r4b1r/pppqpkpp/6B1/7Q/2PP4/2N1P2P/PP4P1/R5K1 b - - 0 15",           moves: ["f7g8","g6f7"],   playerColor: "w" },
  { id: 129, fen: "2r2k1Q/p4pp1/1p2p1n1/4P1B1/q7/2r4R/P4PP1/4R1K1 b - - 3 28",        moves: ["g6h8","h3h8"],   playerColor: "w" },
  { id: 130, fen: "2r2rQk/6pp/p6N/1p1p4/2pq4/P6P/1P3PP1/4R1K1 b - - 9 36",             moves: ["f8g8","h6f7"],   playerColor: "w" },
  { id: 131, fen: "3q1r1k/1b3ppp/p3p3/7N/1p1bp3/4B1Q1/PPr2PPP/R3R1K1 b - - 1 23",     moves: ["d4e3","g3g7"],   playerColor: "w" },
  { id: 132, fen: "8/8/n1R4p/P5p1/r4p1k/7P/5PK1/8 b - - 5 50",                         moves: ["a4a5","c6h6"],   playerColor: "w" },
  { id: 133, fen: "rnb2rk1/5ppp/p2q4/1p1P4/2p3n1/2N2N2/PP2BPPP/R2Q1RK1 w - - 0 14",   moves: ["f3d4","d6h2"],   playerColor: "b" },
  { id: 134, fen: "6k1/5pp1/4p2p/1p1bPP2/1P1P1KP1/1r6/3B1R1P/8 w - - 0 37",           moves: ["f5f6","g7g5"],   playerColor: "b" },
  { id: 135, fen: "5r1k/pp4pp/5r2/4Q3/3P4/4NpN1/Pq5P/2R2R1K w - - 0 29",              moves: ["e3d5","b2g2"],   playerColor: "b" },
  { id: 136, fen: "r5k1/4p2p/p5p1/1p1b2Q1/2p5/P4qN1/1P3P2/R2R2Kr w - - 2 28",         moves: ["g3h1","f3h1"],   playerColor: "b" },
  { id: 137, fen: "3r1rk1/p3R22p/bp1P2p1/2P5/7Q/P2q1P1P/6P1/2R3K1 b - - 5 34",        moves: ["b6c5","h4h7"],   playerColor: "w" },
  { id: 138, fen: "5r1k/Q6p/1pb3p1/4q3/4p3/1BP2p1P/PP4P1/5RK1 b - - 0 30",            moves: ["f3g2","f1f8"],   playerColor: "w" },
  { id: 139, fen: "2kr4/1p4pp/p1p1b3/Q3Bq2/8/4PB2/1PP2PPP/1K6 b - - 2 24",            moves: ["g7g5","a5c7"],   playerColor: "w" },
  { id: 140, fen: "3N3k/pQ5p/4p1p1/3q4/8/2b1P1P1/P3RPKP/4n3 w - - 1 28",              moves: ["g2h3","d5h5"],   playerColor: "b" },
  { id: 141, fen: "4r1k1/6pp/1R3p2/P7/1P1p4/2b3BP/5PP1/5K2 w - - 2 31",               moves: ["g3f4","e8e1"],   playerColor: "b" },
  { id: 142, fen: "2r5/p4p1k/1p1pq3/2p2p2/7R/2Q4P/1P3PP1/6K1 b - - 1 34",             moves: ["h7g8","c3h8"],   playerColor: "w" },
  { id: 143, fen: "r1br1N1k/ppp2BbQ/2n2n1p/q7/3P4/2N5/PPP2PPP/R1B2RK1 b - - 6 15",   moves: ["f6h7","f8g6"],   playerColor: "w" },
  { id: 144, fen: "rn4k1/pp1q1r2/2pp2B1/3P4/2PB2b1/8/P2K1PP1/7R b - - 1 21",          moves: ["c6d5","h1h8"],   playerColor: "w" },
  { id: 145, fen: "8/pp3Q1p/1n2B1pk/8/6Pq/7P/PPP2P2/2K5 w - - 10 31",                 moves: ["f2f4","h4e1"],   playerColor: "b" },
  { id: 146, fen: "3r2k1/5pp1/2p3np/2b5/1p2P1b1/1BN3B1/1PP3PP/4KR2 w - - 0 21",      moves: ["c3a4","d8d1"],   playerColor: "b" },
  { id: 147, fen: "1Q6/5p1k/4b1pp/4RB2/3p2KP/6P1/P3q3/5r2 w - - 2 45",               moves: ["e5e2","e6f5"],   playerColor: "b" },
  { id: 148, fen: "5k2/p1p4p/1pPpBp2/2qP3b/8/2PQ4/P6P/7K w - - 0 33",                 moves: ["d3h7","h5f3"],   playerColor: "b" },
  { id: 149, fen: "r1bqkn1r/ppb1n1pp/2p1pB2/4N3/3PN3/3B4/PPPQ1PPP/R3K2R b KQkq - 0 12", moves: ["g7f6","e4f6"], playerColor: "w" },
  { id: 150, fen: "r2k1r2/pp1nRR2/2pP1N1p/8/3P3p/8/PPP3P1/6K1 b - - 0 24",            moves: ["f8f7","e7e8"],   playerColor: "w" },
];

// ─── FOLDER DEFINITIONS ──────────────────────────────────────────────────────
const folders = [
  {
    key: "doubleAttack",
    label: "Double Attack",
    emoji: "⚔️",
    description: "Attack two pieces at once — fork your opponent!",
    count: doubleAttackPuzzles.length,
    color: "bg-yellow-400",
    puzzles: doubleAttackPuzzles,
    lichessFormat: false,
  },
  {
    key: "mateIn1",
    label: "Mate in 1",
    emoji: "♟️",
    description: "Find the one move checkmate. Opponent plays first.",
    count: mateIn1Puzzles.length,
    color: "bg-black text-white",
    puzzles: mateIn1Puzzles,
    lichessFormat: true,
  },
];

// ─── UCI → SAN HELPER ────────────────────────────────────────────────────────
function uciToSan(game: Chess, uci: string): string | null {
  const from = uci.slice(0, 2);
  const to = uci.slice(2, 4);
  const promotion = uci.length === 5 ? uci[4] : undefined;
  try {
    const g = new Chess(game.fen());
    const move = g.move({ from, to, promotion });
    return move ? move.san : null;
  } catch {
    return null;
  }
}

// ─── PUZZLE PLAYER ───────────────────────────────────────────────────────────
function PuzzlePlayer({
  puzzles,
  lichessFormat,
  folderLabel,
  onBack,
}: {
  puzzles: typeof doubleAttackPuzzles;
  lichessFormat: boolean;
  folderLabel: string;
  onBack: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [game, setGame] = useState<Chess | null>(null);
  const [fen, setFen] = useState("");
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [status, setStatus] = useState("");
  const [boardOrientation, setBoardOrientation] = useState<"white" | "black">("white");

  const puzzle = puzzles[currentIndex];

  // Init / reset puzzle
  useEffect(() => {
    const timeout = setTimeout(() => {
      const newGame = new Chess(puzzle.fen);

      if (lichessFormat) {
        // Auto-play opponent's first move
        const opponentUci = puzzle.moves[0];
        const from = opponentUci.slice(0, 2);
        const to = opponentUci.slice(2, 4);
        const promo = opponentUci.length === 5 ? opponentUci[4] : undefined;
        try { newGame.move({ from, to, promotion: promo }); } catch {}
        setGame(newGame);
        setFen(newGame.fen());
        setCurrentMoveIndex(1); // player solves move index 1
        // Board orientation: player's color
        setBoardOrientation(puzzle.playerColor === "w" ? "white" : "black");
      } else {
        setGame(newGame);
        setFen(newGame.fen());
        setCurrentMoveIndex(0);
        setBoardOrientation(puzzle.playerColor === "w" ? "white" : "black");
      }
      setStatus("");
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleMove = (sourceSquare: string, targetSquare: string) => {
    if (!game) return false;

    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
    if (!move) return false;

    const expectedRaw = puzzle.moves[currentMoveIndex];

    // Support both SAN (doubleAttack) and UCI (lichess) formats
    let isCorrect = false;
    if (lichessFormat) {
      const from = expectedRaw.slice(0, 2);
      const to = expectedRaw.slice(2, 4);
      const promo = expectedRaw.length === 5 ? expectedRaw[4] : undefined;
      isCorrect = move.from === from && move.to === to && (!promo || move.promotion === promo);
    } else {
      isCorrect = move.san === expectedRaw;
    }

    if (!isCorrect) {
      setStatus("❌ Wrong move! Try again.");
      return false;
    }

    setStatus("");
    setGame(gameCopy);
    setFen(gameCopy.fen());

    const nextIndex = currentMoveIndex + 1;

    // If there's an opponent response
    if (nextIndex < puzzle.moves.length) {
      const opponentRaw = puzzle.moves[nextIndex];
      setTimeout(() => {
        const updatedGame = new Chess(gameCopy.fen());
        if (lichessFormat) {
          const from = opponentRaw.slice(0, 2);
          const to = opponentRaw.slice(2, 4);
          const promo = opponentRaw.length === 5 ? opponentRaw[4] : undefined;
          try { updatedGame.move({ from, to, promotion: promo }); } catch {}
        } else {
          try { updatedGame.move(opponentRaw); } catch {}
        }
        setGame(updatedGame);
        setFen(updatedGame.fen());
        setCurrentMoveIndex(nextIndex + 1);
        if (nextIndex + 1 >= puzzle.moves.length) setStatus("✅ Puzzle Solved!");
      }, 500);
      setCurrentMoveIndex(nextIndex);
    } else {
      setCurrentMoveIndex(nextIndex);
      setStatus("✅ Puzzle Solved!");
    }

    return true;
  };

  const resetPuzzle = () => {
    const newGame = new Chess(puzzle.fen);
    if (lichessFormat) {
      const opponentUci = puzzle.moves[0];
      const from = opponentUci.slice(0, 2);
      const to = opponentUci.slice(2, 4);
      const promo = opponentUci.length === 5 ? opponentUci[4] : undefined;
      try { newGame.move({ from, to, promotion: promo }); } catch {}
      setCurrentMoveIndex(1);
    } else {
      setCurrentMoveIndex(0);
    }
    setGame(newGame);
    setFen(newGame.fen());
    setStatus("");
  };

  return (
    <div className="border-4 border-black p-8 bg-white shadow-[10px_10px_0px_black]">

      {/* Header row */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="px-3 py-1 border-2 border-black font-bold text-sm bg-gray-100 hover:bg-gray-200"
        >
          ← Folders
        </button>
        <h2 className="text-2xl font-black uppercase">
          {folderLabel} — Puzzle {currentIndex + 1} / {puzzles.length}
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Board */}
        <div className="flex justify-center">
          <div style={{ width: "400px" }}>
            {fen && (
              <Chessboard
                key={currentIndex + "-" + fen}
                position={fen}
                onPieceDrop={handleMove}
                boardWidth={400}
                boardOrientation={boardOrientation}
              />
            )}
          </div>
        </div>

        {/* Side panel */}
        <div className="space-y-6">

          <div className="p-4 border-2 border-dashed border-black">
            <p className="text-xs font-bold uppercase text-yellow-600 mb-2">Instruction</p>
            <p className="text-sm font-bold">{puzzle.instruction}</p>
          </div>

          <div className="p-4 bg-black text-white text-sm font-bold">
            {status || (lichessFormat ? "Opponent has moved — find the checkmate!" : "Make your move")}
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setCurrentIndex((p) => Math.max(p - 1, 0))}
              className="px-4 py-2 bg-gray-200 border-2 border-black font-bold"
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentIndex((p) => Math.min(p + 1, puzzles.length - 1))}
              className="px-4 py-2 bg-yellow-400 border-2 border-black font-bold"
            >
              Next
            </button>
            <button
              onClick={resetPuzzle}
              className="px-4 py-2 bg-white border-2 border-black font-bold"
            >
              Restart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── FOLDER CARD VIEW ────────────────────────────────────────────────────────
function FolderView({ onSelect }: { onSelect: (key: string) => void }) {
  return (
    <div className="border-4 border-black p-8 bg-white shadow-[10px_10px_0px_black]">
      <h2 className="text-2xl font-black uppercase mb-2">Beginner Puzzles</h2>
      <p className="text-sm text-gray-600 mb-8">Choose a puzzle category to begin.</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {folders.map((folder) => (
          <button
            key={folder.key}
            onClick={() => onSelect(folder.key)}
            className={`p-6 border-4 border-black shadow-[6px_6px_0px_black] text-left transition-transform hover:-translate-y-1 active:translate-y-0 ${folder.color}`}
          >
            <div className="text-4xl mb-3">{folder.emoji}</div>
            <div className="text-xl font-black uppercase mb-1">{folder.label}</div>
            <div className="text-sm font-semibold mb-3 opacity-80">{folder.description}</div>
            <div className="inline-block px-3 py-1 bg-white text-black border-2 border-black text-xs font-black">
              {folder.count} Puzzles
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function BeginnerPuzzles() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const folder = folders.find((f) => f.key === activeFolder);

  return (
    <PuzzlePageLayout level="Beginner" correctPassword="CHESSMATE2026">
      {!activeFolder || !folder ? (
        <FolderView onSelect={setActiveFolder} />
      ) : (
        <PuzzlePlayer
          puzzles={folder.puzzles as typeof doubleAttackPuzzles}
          lichessFormat={folder.lichessFormat}
          folderLabel={folder.label}
          onBack={() => setActiveFolder(null)}
        />
      )}
    </PuzzlePageLayout>
  );
}