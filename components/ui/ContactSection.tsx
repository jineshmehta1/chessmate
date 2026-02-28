"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fatherName: "",
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
    const message = `*New Contact Inquiry - Star Chess Academy*%0A` +
      `-------------------------------------------%0A` +
      `*Parent Name:* ${formData.fatherName} ${formData.lastName}%0A` +
      `*Kid Name:* ${formData.kidName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*WhatsApp:* ${formData.waNumber}%0A` +
      `*Comment:* ${formData.comment}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/918056082286?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden font-sans selection:bg-yellow-400">
      
      {/* --- BACKGROUND DECOR --- */}
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-[5%] w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 border-[3px] md:border-4 border-black z-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute bottom-10 right-[5%] w-24 h-24 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-dashed border-black/10 z-0" />
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-24 right-[10%] text-yellow-500 opacity-20 z-0">
        <Zap className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>

      {/* Ghost Decal - Responsive Font Size */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[15rem] font-black text-gray-50 leading-none select-none -z-10 tracking-tighter uppercase italic">
        MAIL
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- MAIN CONTACT BOX --- */}
        <div className="flex flex-col lg:flex-row border-[3px] md:border-4 border-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] bg-white">
          
          {/* LEFT COLUMN: INFO */}
          <div className="w-full lg:w-[40%] bg-black p-8 md:p-14 text-white flex flex-col justify-between relative">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[2px] w-6 md:w-8 bg-yellow-400"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-yellow-400">Connect Now</span>
              </div>
              
              {/* Heading: 2xl mobile / 5xl desktop */}
              <h3 className="text-2xl md:text-5xl font-black uppercase italic leading-tight mb-8">
                Get In <br /> <span className="text-yellow-400">Touch.</span>
              </h3>
              
              <div className="space-y-8 md:space-y-10">
                <ContactInfoItem icon={<Phone />} label="Phone" value="+91 80560 82286" />
                <ContactInfoItem icon={<Mail />} label="Email" value="info@starchess.in" />
                <ContactInfoItem icon={<MapPin />} label="Location" value="Thazhambur, Chennai, Tamil Nadu" />
              </div>
            </div>

            <div className="mt-12 md:mt-16 p-5 md:p-6 border-2 border-dashed border-white/20 rounded-2xl bg-white/5">
              <p className="text-xs md:text-sm font-bold italic text-gray-400">"Chess is the gymnasium of the mind."</p>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="w-full lg:w-[60%] p-6 md:p-14 bg-white">
            <div className="mb-8 md:mb-10">
               <h3 className="text-xl md:text-3xl font-black text-black uppercase italic leading-none mb-2">Send a Message</h3>
               <p className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">Enrollment & Inquiry Form</p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <NeubrutalistInput name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="First Name *" required />
                <NeubrutalistInput name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name *" required />
                <div className="md:col-span-2">
                  <NeubrutalistInput name="kidName" value={formData.kidName} onChange={handleChange} placeholder="Kid's Full Name *" required />
                </div>
                <NeubrutalistInput name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required />
                <NeubrutalistInput name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" required />
                <div className="md:col-span-2">
                  <NeubrutalistInput name="waNumber" type="tel" value={formData.waNumber} onChange={handleChange} placeholder="WhatsApp Number *" required />
                </div>
                <div className="md:col-span-2">
                  <textarea 
                    name="comment" 
                    value={formData.comment} 
                    onChange={handleChange} 
                    className="w-full p-4 md:p-5 border-[3px] md:border-4 border-black rounded-xl md:rounded-2xl font-bold text-sm bg-gray-50 focus:bg-yellow-400 outline-none transition-all placeholder:text-gray-400 min-h-[100px] md:min-h-[120px]" 
                    placeholder="Tell us about your child's chess level..." 
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto bg-yellow-400 text-black border-[3px] md:border-4 border-black font-black uppercase italic py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:scale-95 mt-4"
              >
                Submit to WhatsApp
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* --- MAP SECTION --- */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block bg-black text-white px-5 py-2 md:px-6 md:py-2.5 border-[3px] md:border-4 border-black rounded-xl font-black uppercase italic mb-8 md:mb-10 shadow-[6px_6px_0px_0px_rgba(253,224,71,1)]">
            Locate The Academy
          </div>
          <div className="w-full h-[300px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[3px] md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-200">
            <iframe
              title="Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.23439054707!2d80.20786015541992!3d12.855663700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52594a737f0001%3A0xc39115f013d80360!2sThazhambur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
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
  <div className="flex items-start gap-4 md:gap-5 group">
    <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-white rounded-xl flex items-center justify-center text-black group-hover:bg-yellow-400 group-hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(253,224,71,1)] shrink-0">
      {React.cloneElement(icon, { 
        className: "w-5 h-5 md:w-6 md:h-6", 
        strokeWidth: 3 
      })}
    </div>
    <div>
      <span className="block text-[9px] md:text-[10px] font-black text-yellow-400 uppercase tracking-widest mb-0.5 md:mb-1">{label}</span>
      <p className="text-base md:text-lg font-black italic tracking-tight leading-tight">{value}</p>
    </div>
  </div>
);

const NeubrutalistInput = (props: any) => (
  <input 
    {...props}
    className="w-full p-4 md:p-5 border-[3px] md:border-4 border-black rounded-xl md:rounded-2xl font-bold text-sm bg-gray-50 focus:bg-yellow-400 outline-none transition-all placeholder:text-gray-400"
  />
);

export default ContactSection;