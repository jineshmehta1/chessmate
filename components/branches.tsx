"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowUpRight } from "lucide-react";

const BranchesSection: React.FC = () => {
  const branches = [
    "Thazambur",
    "Perumbakkam",
    "Navalur",
    "Siruseri",
    "Egattur",
    "Padur",
    "Kelambakkam",
  ];

  return (
    <section className="py-24 bg-white selection:bg-black selection:text-yellow-400">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[3px] w-8 bg-black"></div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-black">Find Us Near You</span>
            <div className="h-[3px] w-8 bg-black"></div>
          </div>
          
          <h2 className="text-3xl md:text-6xl lg:text-5xl font-black text-black leading-none uppercase italic tracking-tighter">
            Our Offline <br />
            <span className="text-white [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[6px_6px_0px_rgba(253,224,71,1)]">
              Branches.
            </span>
          </h2>
        </div>

        {/* --- BRANCHES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: -4, y: -4 }}
              className="group relative bg-white border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(253,224,71,1)] transition-all cursor-pointer"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400 border-l-[3px] border-b-[3px] border-black flex items-center justify-center group-hover:bg-black transition-colors">
                <ArrowUpRight className="w-5 h-5 text-black group-hover:text-yellow-400 transition-colors" />
              </div>

              {/* Icon Sticker */}
              <div className="w-14 h-14 rounded-full bg-white border-[3px] border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-yellow-400 transition-colors">
                <MapPin className="w-6 h-6 text-black" fill="currentColor" fillOpacity={0.1} />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-black uppercase italic text-black tracking-tight mb-2">
                {branch}
              </h3>
              
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">
                Chennai Region
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase underline decoration-2 underline-offset-4 hover:text-yellow-600 transition-colors">
                <Navigation className="w-3 h-3" />
                Get Directions
              </div>
            </motion.div>
          ))}

          {/* Special "Coming Soon" or CTA Card */}
          <div className="bg-black border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(253,224,71,1)] flex flex-col justify-center">
             <h3 className="text-2xl font-black uppercase italic text-yellow-400 leading-tight">
               Want a branch in your area?
             </h3>
             <button className="mt-6 bg-yellow-400 text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors border-2 border-yellow-400">
               Request Location
             </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none overflow-hidden h-64 w-64">
         <MapPin className="w-full h-full text-black translate-x-1/3 translate-y-1/3" />
      </div>
    </section>
  );
};

export default BranchesSection;