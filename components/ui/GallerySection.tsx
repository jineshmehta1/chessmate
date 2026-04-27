"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Trophy,
  Zap,
  Camera
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
  { id: 1, src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071", alt: "National Championship", category: "Tournaments", title: "Championship Finals", description: "Elite level competition at the annual state championships.", span: "col-span-2 row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1916", alt: "Training Session", category: "Academy", title: "Strategic Drills", description: "Young prodigies analyzing middlegame positions.", span: "col-span-1 row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070", alt: "Masterclass", category: "Events", title: "Grandmaster Seminar", description: "Exclusive masterclass session with visiting experts.", span: "col-span-1 row-span-2" },
  { id: 4, src: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2070", alt: "Mental Focus", category: "Academy", title: "Absolute Focus", description: "Developing mental resilience through timed practice.", span: "col-span-1 row-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=2050", alt: "Trophy Ceremony", category: "Achievements", title: "Winning Moment", description: "Celebrating podium finishes and student progress.", span: "col-span-2 row-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1523341081608-173627341d25?q=80&w=2070", alt: "Classic Chess", category: "Tournaments", title: "Rapid Arena", description: "Intensity during the weekend rapid tournaments.", span: "col-span-1 row-span-1" },
  { id: 7, src: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?q=80&w=1957", alt: "Academy Hall", category: "Events", title: "Training Center", description: "Our high-tech training environment for students.", span: "col-span-1 row-span-1" },
  { id: 8, src: "https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?q=80&w=1974", alt: "Team Spirit", category: "Academy", title: "Team Analysis", description: "Collaborative learning during group strategy sessions.", span: "col-span-1 row-span-1" },
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
    <section className="py-20 md:py-32 bg-white relative overflow-hidden selection:bg-[#EAB308] border-t-[10px] border-black">
      
      {/* Background Architectural Decal */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[10rem] md:text-[25rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
        PHOTO
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-black p-2 border-2 border-black">
                <Camera className="w-5 h-5 text-[#EAB308]" />
              </div>
              <span className="text-[10px] md:text-xs font-[1000] uppercase tracking-[0.4em] text-black italic">Academy Archive</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-[1000] text-black leading-[0.9] uppercase tracking-tighter">
              VISUAL {" "}
              <span className="text-white [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2px_black] drop-shadow-[4px_4px_0px_rgba(234,179,8,1)]">MOMENTS.</span>
            </h2>
          </div>
          
          <div className="inline-flex items-center gap-4 bg-black text-[#EAB308] px-8 py-4 border-2 border-black shadow-[10px_10px_0px_0px_rgba(243,244,246,1)]">
             <Zap className="w-5 h-5 fill-[#EAB308]" />
             <p className="text-[10px] font-[1000] uppercase tracking-widest">Mastery in Focus</p>
          </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[280px]">
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative border-4 border-black overflow-hidden cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300 ${image.span || 'col-span-1 row-span-1'}`}
              onClick={() => openLightbox(image)}
            >
              {/* Image with Grayscale Filter */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[#EAB308] text-[9px] font-black uppercase tracking-widest mb-1">{image.category}</p>
                    <h4 className="text-white text-lg font-[1000] uppercase leading-tight">{image.title}</h4>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#EAB308] border-2 border-black flex items-center justify-center text-black shadow-xl">
                  <Maximize2 className="w-5 h-5" strokeWidth={3} />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-md p-6 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button className="absolute top-8 right-8 text-white hover:text-[#EAB308] transition-colors z-[110] p-2 border-2 border-white/20 rounded-full">
              <X className="w-8 h-8" strokeWidth={3} />
            </button>

            {/* Nav Controls */}
            <button onClick={(e) => navigateImage('prev', e)} className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-[#EAB308] transition-all p-4 hidden md:block">
              <ChevronLeft className="w-16 h-16" strokeWidth={4} />
            </button>
            <button onClick={(e) => navigateImage('next', e)} className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-[#EAB308] transition-all p-4 hidden md:block">
              <ChevronRight className="w-16 h-16" strokeWidth={4} />
            </button>

            {/* Lightbox Content */}
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative border-8 border-white shadow-[20px_20px_0px_0px_rgba(234,179,8,1)] overflow-hidden">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="max-w-full max-h-[75vh] object-contain" 
                />
              </div>
              
              {/* Meta Info */}
              <div className="mt-10 text-center max-w-xl">
                 <span className="bg-[#EAB308] text-black px-4 py-1 font-[1000] text-[10px] uppercase tracking-widest">{selectedImage.category}</span>
                 <h4 className="text-2xl md:text-4xl font-[1000] uppercase italic text-white mt-4 tracking-tight">{selectedImage.title}</h4>
                 <p className="text-gray-400 text-sm md:text-base mt-2 font-medium leading-relaxed">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GallerySection;