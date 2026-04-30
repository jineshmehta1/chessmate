"use client";

import React, { useState } from "react";
import { X, CheckCircle, Loader2, Zap, Star, Send } from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
    chessPlatform: "",
    chessUsername: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_DEMO_TEMPLATE_ID!,
        {
          studentName: formData.studentName,
          studentAge: formData.age,
          classType: formData.classType,
          country: formData.country,
          timezone: formData.timezone,
          preferredTime: formData.preferredTime,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          chessPlatform: formData.chessPlatform,
          chessUsername: formData.chessUsername,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");

      setFormData({
        studentName: "",
        age: "",
        classType: "",
        country: "",
        timezone: "",
        preferredTime: "",
        email: "",
        phone: "",
        experience: "beginner",
        chessPlatform: "",
        chessUsername: "",
      });

      setTimeout(() => {
        closeDemoModal();
        setSubmitStatus(null);
      }, 1500);

    } catch (error) {
      console.error(error);
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
        
        {/* HEADER */}
        <div className="p-6 md:p-8 border-b-4 border-black bg-[#EAB308] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 fill-black text-black" />
              <span className="text-[10px] font-[1000] uppercase tracking-widest text-black">
                Free Assessment Session
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-[1000] text-black uppercase">
              BOOK A DEMO
            </h3>
          </div>

          <button
            onClick={closeDemoModal}
            className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-[#EAB308]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* FORM */}
        <div className="p-6 md:p-8 overflow-y-auto bg-white">
          <form onSubmit={handleSubmit} className="space-y-5">

            <NeubrutalistInput
              placeholder="STUDENT FULL NAME *"
              required
              value={formData.studentName}
              onChange={(e: any) => setFormData({ ...formData, studentName: e.target.value })}
            />

            <div className="grid grid-cols-2 gap-4">
              <NeubrutalistInput
                type="number"
                placeholder="AGE *"
                required
                value={formData.age}
                onChange={(e: any) => setFormData({ ...formData, age: e.target.value })}
              />

              <select
                required
                value={formData.classType}
                onChange={(e) => setFormData({ ...formData, classType: e.target.value })}
                className="w-full px-5 py-4 border-2 border-black font-black text-[11px] uppercase bg-gray-50"
              >
                <option value="">CLASS TYPE *</option>
                <option value="Individual">1:1</option>
                <option value="Group">Group</option>
                <option value="Both">Both</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <NeubrutalistInput
                placeholder="COUNTRY *"
                required
                value={formData.country}
                onChange={(e: any) => setFormData({ ...formData, country: e.target.value })}
              />
              <NeubrutalistInput
                placeholder="TIMEZONE *"
                required
                value={formData.timezone}
                onChange={(e: any) => setFormData({ ...formData, timezone: e.target.value })}
              />
            </div>

            <NeubrutalistInput
              placeholder="PREFERRED DATE AND TIME *"
              required
              value={formData.preferredTime}
              onChange={(e: any) => setFormData({ ...formData, preferredTime: e.target.value })}
            />

            <div className="grid grid-cols-2 gap-4">
              <NeubrutalistInput
                type="email"
                placeholder="EMAIL *"
                required
                value={formData.email}
                onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
              />
              <NeubrutalistInput
                type="tel"
                placeholder="PHONE *"
                required
                value={formData.phone}
                onChange={(e: any) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* NEW CHESS FIELD */}
            <div className="grid grid-cols-2 gap-4">
              <select
                value={formData.chessPlatform}
                onChange={(e) =>
                  setFormData({ ...formData, chessPlatform: e.target.value })
                }
                className="w-full px-5 py-4 border-2 border-black font-black text-[11px] uppercase bg-gray-50"
              >
                <option value="">PLATFORM</option>
                <option value="Chess.com">Chess.com</option>
                <option value="Lichess">Lichess</option>
              </select>

              <NeubrutalistInput
                placeholder="USERNAME"
                value={formData.chessUsername}
                onChange={(e: any) =>
                  setFormData({ ...formData, chessUsername: e.target.value })
                }
              />
            </div>

            {/* SUCCESS / ERROR */}
            {submitStatus === "success" && (
              <motion.div className="p-4 bg-black text-[#EAB308] text-xs font-black flex gap-2">
                <CheckCircle className="w-4 h-4" />
                DEMO REQUEST SENT SUCCESSFULLY
              </motion.div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500 text-white text-xs font-black">
                FAILED TO SEND. TRY AGAIN.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-[#EAB308] py-5 font-[1000] flex justify-center gap-3"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  CONFIRM BOOKING
                </>
              )}
            </button>

            <div className="flex justify-center gap-2 opacity-50">
              <Star className="w-3 h-3 fill-black" />
              <p className="text-[9px] font-black">ELITE DIGITAL COACHING</p>
              <Star className="w-3 h-3 fill-black" />
            </div>

          </form>
        </div>
      </motion.div>
    </div>
  );
}

const NeubrutalistInput = (props: any) => (
  <input
    {...props}
    className="w-full px-5 py-4 border-2 border-black font-black text-[11px] uppercase bg-gray-50"
  />
);