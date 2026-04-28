"use client";

import React, { useState } from "react";
import { X, CheckCircle, Loader2, Zap, Star, Send, Globe, Clock, User } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";
import { motion, AnimatePresence } from "framer-motion";

export default function BookDemoModal() {
  const { isOpen, closeDemoModal } = useDemoModal();
  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    classType: "",
    country: "",
    timezone: "",
    preferredTime: "",
    email: "",
    phone: "",
    experience: "beginner",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `*New Demo Booking - Chess Mate Academy*%0A` +
      `-------------------------------------------%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Age:* ${formData.age}%0A` +
      `*Class Type:* ${formData.classType}%0A` +
      `*Country:* ${formData.country}%0A` +
      `*Timezone:* ${formData.timezone}%0A` +
      `*Preferred Time:* ${formData.preferredTime}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/917990775581?text=${whatsappMessage}`;

    try {
      // Background logging to Google Sheets
      await fetch("https://script.google.com/macros/s/AKfycbwPBxWXpnQ4ywqrdfmKvfFi7g5Uu6hjmaTFVDE5EiMI0YEyqjRNTCxionf65Q5Zqlg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
      });

      setSubmitStatus("success");
      
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        closeDemoModal();
        setSubmitStatus(null);
        setFormData({ 
            studentName: "", age: "", classType: "", country: "", 
            timezone: "", preferredTime: "", email: "", phone: "", experience: "beginner" 
        });
      }, 1000);
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 selection:bg-[#EAB308] selection:text-black">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        className="bg-white border-4 border-black w-full max-w-xl relative shadow-[20px_20px_0px_0px_rgba(234,179,8,1)] flex flex-col max-h-[90vh] overflow-hidden"
      >
        
        {/* MODAL HEADER */}
        <div className="p-6 md:p-8 border-b-4 border-black bg-[#EAB308] flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 fill-black text-black" />
                <span className="text-[10px] font-[1000] uppercase tracking-widest text-black">Free Assessment Session</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-[1000] text-black uppercase leading-none tracking-tighter">BOOK A DEMO</h3>
          </div>
          <button 
            onClick={closeDemoModal} 
            className="w-10 h-10 md:w-12 md:h-12 border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-[#EAB308] transition-all"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
          </button>
        </div>

        {/* FORM BODY */}
        <div className="p-6 md:p-8 overflow-y-auto no-scrollbar bg-white">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Student Name */}
            <div className="w-full">
              <NeubrutalistInput 
                placeholder="STUDENT FULL NAME *" 
                required 
                value={formData.studentName}
                onChange={(e: any) => setFormData({...formData, studentName: e.target.value})}
              />
            </div>

            {/* Age & Class Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <NeubrutalistInput 
                type="number" 
                placeholder="STUDENT AGE *" 
                required
                value={formData.age}
                onChange={(e: any) => setFormData({...formData, age: e.target.value})}
              />
              <div className="relative group">
                <select 
                  required
                  className="w-full px-5 py-4 border-2 border-black font-black text-[11px] uppercase tracking-widest outline-none bg-gray-50 focus:bg-[#EAB308] transition-all appearance-none cursor-pointer rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  value={formData.classType}
                  onChange={(e) => setFormData({...formData, classType: e.target.value})}
                >
                  <option value="" disabled>INTERESTED IN... *</option>
                  <option value="Individual">Individual Classes (1:1)</option>
                  <option value="Group">Group Classes</option>
                  <option value="Both">Open to Both</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <User className="w-3 h-3 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Country & Timezone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NeubrutalistInput 
                placeholder="COUNTRY *" 
                required 
                value={formData.country}
                onChange={(e: any) => setFormData({...formData, country: e.target.value})}
              />
              <NeubrutalistInput 
                placeholder="TIME ZONE (e.g. GMT+5:30) *" 
                required 
                value={formData.timezone}
                onChange={(e: any) => setFormData({...formData, timezone: e.target.value})}
              />
            </div>

            {/* Preferred Time */}
            <div className="w-full">
              <NeubrutalistInput 
                placeholder="PREFERRED DEMO DAY & TIME (e.g. Saturday 4 PM) *" 
                required 
                value={formData.preferredTime}
                onChange={(e: any) => setFormData({...formData, preferredTime: e.target.value})}
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NeubrutalistInput 
                type="email"
                placeholder="EMAIL ADDRESS *" 
                required 
                value={formData.email}
                onChange={(e: any) => setFormData({...formData, email: e.target.value})}
              />
              <NeubrutalistInput 
                type="tel"
                placeholder="PHONE NUMBER *" 
                required 
                value={formData.phone}
                onChange={(e: any) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            

            {submitStatus === "success" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-black text-[#EAB308] border-2 border-black font-black uppercase text-[10px] flex items-center gap-3">
                    <CheckCircle className="w-4 h-4" /> Redirecting to Official WhatsApp...
                </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-[#EAB308] border-2 border-black font-[1000] uppercase py-5 flex items-center justify-center gap-4 transition-all shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] hover:bg-[#EAB308] hover:text-black hover:shadow-none active:translate-x-1 active:translate-y-1 disabled:opacity-50"
            >
              {isSubmitting ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  CONFIRM BOOKING
                </>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-black/5 opacity-50">
                <Star className="w-3 h-3 fill-black" />
                <p className="text-[9px] font-black uppercase tracking-[0.2em]">
                  Elite Digital Coaching Standard
                </p>
                <Star className="w-3 h-3 fill-black" />
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

const NeubrutalistInput = ({ ...props }: any) => (
  <input 
    {...props}
    className="w-full px-5 py-4 border-2 border-black font-black text-[11px] uppercase tracking-widest outline-none bg-gray-50 focus:bg-[#EAB308] focus:text-black transition-all placeholder:text-gray-400 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
  />
);