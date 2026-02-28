"use client";

import React, { useState } from "react";
import { X, CheckCircle, Loader2, Zap, Star, Send } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";
import { motion, AnimatePresence } from "framer-motion";

export default function BookDemoModal() {
  const { isOpen, closeDemoModal } = useDemoModal();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    experience: "beginner",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `*New Demo Booking - Star Chess Academy*%0A` +
      `-------------------------------------------%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Age:* ${formData.age}%0A` +
      `*Level:* ${formData.experience}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/918056082286?text=${whatsappMessage}`;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwPBxWXpnQ4ywqrdfmKvfFi7g5Uu6hjmaTFVDE5EiMI0YEyqjRNTCxionf65Q5Zqlg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
      });

      setSubmitStatus("success");
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        closeDemoModal();
        setSubmitStatus(null);
        setFormData({ studentName: "", parentName: "", email: "", phone: "", age: "", experience: "beginner" });
      }, 2000);
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 selection:bg-black selection:text-yellow-400">
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        className="bg-white border-4 border-black rounded-[2.5rem] w-full max-w-lg relative shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] flex flex-col max-h-[95vh] overflow-hidden"
      >
        
        {/* Header */}
        <div className="p-8 border-b-4 border-black bg-yellow-400 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
                <Zap size={16} fill="black" />
                <span className="text-[10px] font-black uppercase tracking-widest">Free Entry</span>
            </div>
            <h3 className="text-3xl font-black text-black uppercase italic leading-none">Book Your Demo</h3>
          </div>
          <button 
            onClick={closeDemoModal} 
            className="w-12 h-12 border-4 border-black bg-white rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-8 overflow-y-auto no-scrollbar bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Student & Parent Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <NeubrutalistInput 
                placeholder="STUDENT NAME *" 
                required 
                value={formData.studentName}
                onChange={(e: any) => setFormData({...formData, studentName: e.target.value})}
              />
              <NeubrutalistInput 
                placeholder="PARENT NAME *" 
                required 
                value={formData.parentName}
                onChange={(e: any) => setFormData({...formData, parentName: e.target.value})}
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            
            {/* Age & Level */}
            <div className="grid grid-cols-2 gap-5">
               <NeubrutalistInput 
                type="number" 
                placeholder="AGE *" 
                required
                value={formData.age}
                onChange={(e: any) => setFormData({...formData, age: e.target.value})}
              />
              <select 
                className="w-full px-5 py-4 border-4 border-black rounded-2xl font-black text-xs uppercase tracking-widest outline-none bg-white focus:bg-yellow-400 transition-all appearance-none cursor-pointer"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {submitStatus === "success" && (
              <motion.div initial={{ x: -10 }} animate={{ x: 0 }} className="p-4 bg-black text-yellow-400 border-4 border-black rounded-2xl flex items-center gap-3 font-black uppercase text-[10px] italic">
                <CheckCircle size={18} /> Redirecting to WhatsApp...
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white border-4 border-black font-black uppercase italic py-5 rounded-2xl transition-all shadow-[8px_8px_0px_0px_rgba(253,224,71,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 flex items-center justify-center gap-3 active:scale-95"
            >
              {isSubmitting ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <Send size={20} />
                  Confirm & WhatsApp
                </>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2 pt-2">
                <Star size={12} fill="black" />
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-tighter">
                  Master the game with Star Chess Academy
                </p>
                <Star size={12} fill="black" />
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

// Helper Sub-component for inputs
const NeubrutalistInput = (props: any) => (
  <input 
    {...props}
    className="w-full px-5 py-4 border-4 border-black rounded-2xl font-black text-xs uppercase tracking-widest outline-none bg-gray-50 focus:bg-yellow-400 transition-all placeholder:text-gray-400"
  />
);