"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  ArrowRight,
  MessageSquare,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    kidName: "",
    email: "",
    phone: "",
    waNumber: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Enrollment Inquiry - Chess Mate Academy*%0A` +
      `-------------------------------------------%0A` +
      `*Parent Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Kid Name:* ${formData.kidName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*WhatsApp:* ${formData.waNumber}%0A` +
      `*Comment:* ${formData.comment}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/917990775581?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden selection:bg-[#EAB308]">
      
      {/* Background Architectural Decal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[25rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
        CHAT
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- MAIN CONTACT ARCHITECTURE --- */}
        <div className="flex flex-col lg:flex-row border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
          
          {/* LEFT SIDE: COMMAND CENTER (INFO) */}
          <div className="w-full lg:w-[40%] bg-black p-8 md:p-14 text-white flex flex-col justify-between relative">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="fill-[#EAB308] text-[#EAB308] w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EAB308]">Direct Channels</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-[1000] uppercase leading-[0.9] mb-12 tracking-tighter">
                LET'S <br /> <span className="text-[#EAB308]">CONNECT.</span>
              </h3>
              
              <div className="space-y-10">
                <ContactInfoItem icon={<Phone />} label="Direct Line" value="+91 79907 75581" />
                <ContactInfoItem icon={<Mail />} label="Email Support" value="contact@thechessmate.org" />
                <ContactInfoItem icon={<Globe />} label="Academy Reach" value="Global Digital Hubs" />
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4">Official Inquiry Center</p>
              <div className="flex items-center gap-2 text-[#EAB308]">
                 <MessageSquare className="w-4 h-4" />
                 <span className="text-xs font-bold uppercase tracking-widest italic">Fastest Response via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ENROLLMENT PORTAL (FORM) */}
          <div className="w-full lg:w-[60%] p-8 md:p-14 bg-white">
            <div className="mb-10">
               <h3 className="text-2xl md:text-4xl font-[1000] text-black uppercase tracking-tighter leading-none mb-3">Enrollment Portal</h3>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Required fields are marked with *</p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <NeubrutalistInput name="firstName" value={formData.firstName} onChange={handleChange} placeholder="PARENT FIRST NAME *" required />
                <NeubrutalistInput name="lastName" value={formData.lastName} onChange={handleChange} placeholder="PARENT LAST NAME *" required />
                <div className="md:col-span-2">
                  <NeubrutalistInput name="kidName" value={formData.kidName} onChange={handleChange} placeholder="STUDENT FULL NAME *" required />
                </div>
                <NeubrutalistInput name="email" type="email" value={formData.email} onChange={handleChange} placeholder="EMAIL ADDRESS *" required />
                <NeubrutalistInput name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="PHONE NUMBER *" required />
                <div className="md:col-span-2">
                  <NeubrutalistInput name="waNumber" type="tel" value={formData.waNumber} onChange={handleChange} placeholder="WHATSAPP NUMBER *" required />
                </div>
                <div className="md:col-span-2">
                  <textarea 
                    name="comment" 
                    value={formData.comment} 
                    onChange={handleChange} 
                    className="w-full p-5 border-2 border-black font-bold text-sm bg-gray-50 focus:bg-[#EAB308] focus:text-black outline-none transition-all placeholder:text-gray-400 min-h-[120px] rounded-none" 
                    placeholder="TELL US ABOUT THE STUDENT'S CHESS BACKGROUND..." 
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-black text-[#EAB308] border-2 border-black font-[1000] uppercase py-5 px-10 flex items-center justify-center gap-4 transition-all shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] hover:bg-[#EAB308] hover:text-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:scale-95"
              >
                SECURE ENROLLMENT VIA WHATSAPP
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </button>
            </form>
          </div>
        </div>

        {/* --- MAP INTEGRATION --- */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-4 mb-10">
             <div className="h-[2px] flex-grow bg-black opacity-10"></div>
             <div className="bg-black text-white px-8 py-3 border-2 border-black font-[1000] uppercase text-xs tracking-[0.3em]">
               Global Presence
             </div>
             <div className="h-[2px] flex-grow bg-black opacity-10"></div>
          </div>
          
          <div className="w-full h-[400px] md:h-[550px] border-4 border-black shadow-[20px_20px_0px_0px_rgba(234,179,8,1)] bg-gray-200">
            <iframe
              title="Academy Hub"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1710000000000"
              className="w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- HELPER COMPONENTS ---

const ContactInfoItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-start gap-6 group">
    <div className="w-12 h-12 bg-[#EAB308] border-2 border-black flex items-center justify-center text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] shrink-0">
      {React.cloneElement(icon, { className: "w-5 h-5", strokeWidth: 3 })}
    </div>
    <div className="leading-tight">
      <span className="block text-[9px] font-black text-[#EAB308] uppercase tracking-[0.3em] mb-1">{label}</span>
      <p className="text-base md:text-lg font-[1000] uppercase tracking-tight">{value}</p>
    </div>
  </div>
);

const NeubrutalistInput = (props: any) => (
  <input 
    {...props}
    className="w-full p-5 border-2 border-black font-bold text-sm bg-gray-50 focus:bg-[#EAB308] focus:text-black outline-none transition-all placeholder:text-gray-400 rounded-none uppercase tracking-widest"
  />
);

export default ContactSection;