"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Zap, 
  ArrowRight,
  MessageSquare,
  Globe,
  Clock,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    classType: "",
    country: "",
    timezone: "",
    preferredTime: "",
    email: "",
    phone: "",
    waNumber: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Enrollment Inquiry - Chess Mate Academy*%0A` +
      `-------------------------------------------%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Age:* ${formData.studentAge}%0A` +
      `*Class Type:* ${formData.classType}%0A` +
      `*Country:* ${formData.country}%0A` +
      `*Timezone:* ${formData.timezone}%0A` +
      `*Preferred Time:* ${formData.preferredTime}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*WhatsApp:* ${formData.waNumber}%0A` +
      `*Background:* ${formData.comment}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/917990775581?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden selection:bg-[#EAB308]">
      
      {/* Background Architectural Decal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[25rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
        CONNECT
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- MAIN CONTACT ARCHITECTURE --- */}
        <div className="flex flex-col lg:flex-row border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          
          {/* LEFT SIDE: INFO PANEL */}
          <div className="w-full lg:w-[35%] bg-black p-8 md:p-14 text-white flex flex-col justify-between relative">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="fill-[#EAB308] text-[#EAB308] w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EAB308]">Inquiry Center</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-[1000] uppercase leading-[0.9] mb-12 tracking-tighter">
                SAY <br /> <span className="text-[#EAB308]">HELLO.</span>
              </h3>
              
              <div className="space-y-10">
                <ContactInfoItem icon={<Phone />} label="Direct Lines" value="+91 79907 75581" subValue="+91 87330 84949" />
                <ContactInfoItem icon={<Mail />} label="Support Email" value="hello@chessmate.in" />
                <ContactInfoItem icon={<Globe />} label="Academy Reach" value="Global Online Classes" />
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-[#EAB308]">
                 <MessageSquare className="w-5 h-5" />
                 <span className="text-xs font-black uppercase tracking-widest italic">Instant Support Active</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ENROLLMENT FORM */}
          <div className="w-full lg:w-[65%] p-8 md:p-14 bg-white">
            <div className="mb-10">
               <h3 className="text-2xl md:text-4xl font-[1000] text-black uppercase tracking-tighter leading-none mb-3">Begin Your Journey</h3>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Enter details to schedule your free demo session</p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Student Info */}
                <div className="md:col-span-2">
                  <NeubrutalistInput name="studentName" value={formData.studentName} onChange={handleChange} placeholder="STUDENT FULL NAME *" required />
                </div>
                
                <NeubrutalistInput name="studentAge" type="number" value={formData.studentAge} onChange={handleChange} placeholder="STUDENT AGE *" required />
                
                <div className="relative group">
                  <select 
                    name="classType"
                    required
                    value={formData.classType}
                    onChange={handleChange}
                    className="w-full p-5 border-2 border-black font-black text-[11px] uppercase tracking-widest outline-none bg-gray-50 focus:bg-[#EAB308] focus:text-black transition-all appearance-none cursor-pointer rounded-none"
                  >
                    <option value="" disabled>SELECT CLASS TYPE *</option>
                    <option value="Individual Classes">Individual (1-on-1)</option>
                    <option value="Group Classes">Group Sessions</option>
                    <option value="Open to Both">Open to Both</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>

                {/* Geography & Time */}
                <NeubrutalistInput name="country" value={formData.country} onChange={handleChange} placeholder="COUNTRY *" required />
                <NeubrutalistInput name="timezone" value={formData.timezone} onChange={handleChange} placeholder="TIME ZONE (e.g., GMT+5:30) *" required />
                
                <div className="md:col-span-2">
                   <NeubrutalistInput name="preferredTime" value={formData.preferredTime} onChange={handleChange} placeholder="PREFERRED DEMO DAY & TIME (e.g., Sat 4 PM) *" required />
                </div>

                {/* Contact Info */}
                <NeubrutalistInput name="email" type="email" value={formData.email} onChange={handleChange} placeholder="EMAIL ADDRESS *" required />
                <NeubrutalistInput name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="PHONE NUMBER *" required />
                
                <div className="md:col-span-2">
                  <NeubrutalistInput name="waNumber" type="tel" value={formData.waNumber} onChange={handleChange} placeholder="PHONE NUMBER *" required />
                </div>

                <div className="md:col-span-2">
                  <textarea 
                    name="comment" 
                    value={formData.comment} 
                    onChange={handleChange} 
                    className="w-full p-5 border-2 border-black font-bold text-sm bg-gray-50 focus:bg-[#EAB308] focus:text-black outline-none transition-all placeholder:text-gray-400 min-h-[120px] rounded-none uppercase tracking-widest" 
                    placeholder="TELL US ABOUT THE STUDENT'S CHESS BACKGROUND..." 
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-black text-[#EAB308] border-2 border-black font-[1000] uppercase py-6 flex items-center justify-center gap-4 transition-all shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] hover:bg-[#EAB308] hover:text-black hover:shadow-none active:translate-x-1 active:translate-y-1 mt-4"
              >
                REQUEST DEMO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </button>
            </form>
          </div>
        </div>

        {/* --- BOTTOM SUPPORT TAG --- */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t-2 border-black/5 pt-10">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 text-center md:text-left">
              FIDE Certified Global Instruction
            </p>
            <div className="flex items-center gap-4">
               <span className="text-xs font-black uppercase text-black tracking-widest">+91 79907 75581</span>
               <div className="w-2 h-2 rounded-full bg-[#EAB308]"></div>
               <span className="text-xs font-black uppercase text-black tracking-widest">+91 87330 84949</span>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- HELPERS ---

const ContactInfoItem = ({ icon, label, value, subValue }: { icon: any, label: string, value: string, subValue?: string }) => (
  <div className="flex items-start gap-6 group">
    <div className="w-12 h-12 bg-[#EAB308] border-2 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
      {React.cloneElement(icon, { className: "w-5 h-5", strokeWidth: 3 })}
    </div>
    <div className="leading-tight">
      <span className="block text-[9px] font-black text-[#EAB308] uppercase tracking-[0.3em] mb-1.5">{label}</span>
      <p className="text-sm md:text-base font-[1000] uppercase tracking-tight">{value}</p>
      {subValue && <p className="text-sm md:text-base font-[1000] uppercase tracking-tight mt-1">{subValue}</p>}
    </div>
  </div>
);

const NeubrutalistInput = (props: any) => (
  <input 
    {...props}
    className="w-full p-5 border-2 border-black font-bold text-[11px] bg-gray-50 focus:bg-[#EAB308] focus:text-black outline-none transition-all placeholder:text-gray-400 rounded-none uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
  />
);

export default ContactSection;