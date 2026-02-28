"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Trophy,
  Zap
} from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  span?: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/star1.jpeg", alt: "Chess Tournament 2024", category: "tournaments", title: "Championship", description: "Students competing in the annual championship finals.", span: "col-span-2 row-span-2" },
  { id: 2, src: "/star2.jpeg", alt: "Beginner Chess Class", category: "events", title: "Young Minds", description: "Beginners learning their first moves.", span: "col-span-1 row-span-1" },
  { id: 3, src: "/star4.jpeg", alt: "Fide Arbiter", category: "certificate", title: "Young Champions", description: "Official certification ceremony.", span: "col-span-1 row-span-2" },
  { id: 4, src: "/star3.jpeg", alt: "Chess Workshop", category: "events", title: "Strategy Winners", description: "Deep dive into grandmaster tactics.", span: "col-span-1 row-span-1" },
  { id: 5, src: "/1.jpeg", alt: "Award Ceremony", category: "certificate", title: "Award Ceremony", description: "Awarding the champions.", span: "col-span-2 row-span-1" },
  { id: 6, src: "/2.jpeg", alt: "Tournament Hall", category: "tournaments", title: "Winning Finals", description: "The intense atmosphere of the tournaments.", span: "col-span-1 row-span-1" },
  { id: 8, src: "/4.jpeg", alt: "Trophy", category: "tournaments", title: "Victory", description: "Taking home the gold.", span: "col-span-1 row-span-1" },
  { id: 9, src: "/5.jpeg", alt: "Trophy", category: "tournaments", title: "Champion Minds", description: "Making great moves.", span: "col-span-1 row-span-1" },
  { id: 10, src: "/6.jpeg", alt: "Trophy", category: "tournaments", title: "Mentorship results", description: "Winning at every level.", span: "col-span-1 row-span-1" },
  { id: 11, src: "/7.jpeg", alt: "Trophy", category: "tournaments", title: "Future masters", description: "Masters in the making.", span: "col-span-1 row-span-1" },
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);
  
  const navigateImage = (direction: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length 
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden selection:bg-yellow-400 font-sans border-t-8 border-black">
      
      {/* Background Decor - Responsive */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -right-20 w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-dashed border-black/5 z-0" />
      
      {/* Ghost Decal - Responsive Font Size */}
      <div className="absolute top-1/2 left-5 md:left-10 -translate-y-1/2 text-[6rem] md:text-[15rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic opacity-60 md:opacity-100">
        SNAP
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* --- HEADER (2xl Mobile / 5xl Desktop) --- */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-20 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="bg-black p-2 rounded-lg">
                <Trophy className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black italic">Academy Visuals</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-black text-black leading-tight md:leading-none uppercase italic tracking-tighter">
              The Star <br />
              <span className="text-white block md:inline [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(253,224,71,1)]">STORYBOARD.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3 bg-gray-50 border-4 border-black px-6 py-3 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
             <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
             <p className="text-[10px] font-black uppercase tracking-widest">Click to Expand History</p>
          </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[120px] md:auto-rows-[250px]">
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`group relative border-[3px] md:border-4 border-black rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 ${image.span || 'col-span-1 row-span-1'}`}
              onClick={() => openLightbox(image)}
            >
              {/* Main Image */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-white border-[3px] md:border-4 border-black rounded-xl md:rounded-2xl flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Maximize2 className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-[110] active:scale-90">
              <X className="w-10 h-10 md:w-14 md:h-14" strokeWidth={3} />
            </button>

            {/* Navigation Buttons (Hidden on mobile for swipe-feel, active on desktop) */}
            <button onClick={(e) => navigateImage('prev', e)} className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 p-4 transition-all hidden lg:block">
              <ChevronLeft className="w-12 h-12 md:w-20 md:h-20" strokeWidth={3} />
            </button>
            <button onClick={(e) => navigateImage('next', e)} className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 p-4 transition-all hidden lg:block">
              <ChevronRight className="w-12 h-12 md:w-20 md:h-20" strokeWidth={3} />
            </button>

            {/* Lightbox Content */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-[80vh] object-contain border-[6px] md:border-8 border-white shadow-[10px_10px_0px_0px_rgba(253,224,71,1)] md:shadow-[20px_20px_0px_0px_rgba(253,224,71,1)]" 
              />
              
              {/* Image Info in Lightbox */}
              <div className="mt-8 text-center bg-white border-4 border-black px-6 py-3 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                 <p className="text-[10px] font-black uppercase text-yellow-600 tracking-widest">{selectedImage.category}</p>
                 <h4 className="text-xl md:text-2xl font-black uppercase italic text-black">{selectedImage.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GallerySection;