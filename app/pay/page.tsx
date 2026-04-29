"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  CreditCard, 
  DollarSign, 
  IndianRupee, 
  Lock,
  Zap,
  ArrowRight,
  Loader2
} from "lucide-react";
import { motion } from "framer-motion";

export default function PaymentPage() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Load Razorpay Script
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    // 1. Validation
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    if (!studentInfo.name || !studentInfo.email) {
      alert("Student Name and Email are required.");
      return;
    }

    setIsProcessing(true);
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load. Check your connection.");
      setIsProcessing(false);
      return;
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    
    if (!keyId) {
      alert("API Configuration missing. Please check your .env.local file.");
      setIsProcessing(false);
      return;
    }

    // 2. Razorpay Configuration
    const options = {
      key: keyId,
      amount: Math.round(parseFloat(amount) * 100), // Securely convert to cents/paise
      currency: currency,
      name: "Chess Mate Academy",
      description: `Chess Training Fees - ${studentInfo.name}`,
      image: "/logo.jpg", 
      handler: function (response: any) {
        setIsProcessing(false);
        alert(`SUCCESS! \nPayment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: studentInfo.name,
        email: studentInfo.email,
        contact: studentInfo.phone,
      },
      theme: {
        color: "#EAB308", // Brand Gold
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const rzp = new (window as any).Razorpay(options);

    // 3. Error Handling - This will tell us why it fails
    rzp.on('payment.failed', function (response: any) {
        setIsProcessing(false);
        alert(`PAYMENT FAILED \nReason: ${response.error.description} \nCode: ${response.error.code}`);
    });

    rzp.open();
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 selection:bg-[#EAB308]">
      
      {/* Background Architectural Decal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-[1000] text-gray-50 leading-none select-none -z-0 tracking-tighter uppercase italic opacity-80 pointer-events-none">
        PAY
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="fill-[#EAB308] text-[#EAB308] w-6 h-6" />
            <span className="text-[10px] md:text-xs font-[1000] uppercase tracking-[0.4em] text-black">
              Official Secure Checkout
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-[1000] text-black uppercase tracking-tighter leading-none mb-6">
            FEES <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] [-webkit-text-stroke:1.5px_black]">PAYMENT.</span>
          </h1>
          <p className="text-gray-400 font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
             Instant Processing • No Data Retention • Secure SSL
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* --- LEFT: INPUTS --- */}
          <div className="lg:col-span-7 space-y-8">
            {/* Student Info */}
            <div className="border-4 border-black p-8 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-[1000] uppercase tracking-tight mb-8 flex items-center gap-3">
                <div className="w-2 h-6 bg-[#EAB308]"></div> 1. Student Details
              </h3>
              <div className="space-y-5">
                <NeubrutalistInput 
                  placeholder="STUDENT FULL NAME *" 
                  required
                  value={studentInfo.name}
                  onChange={(e: any) => setStudentInfo({...studentInfo, name: e.target.value})}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <NeubrutalistInput 
                    placeholder="EMAIL ADDRESS *" 
                    type="email"
                    value={studentInfo.email}
                    onChange={(e: any) => setStudentInfo({...studentInfo, email: e.target.value})}
                  />
                  <NeubrutalistInput 
                    placeholder="PHONE NUMBER *" 
                    type="tel"
                    value={studentInfo.phone}
                    onChange={(e: any) => setStudentInfo({...studentInfo, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Currency & Amount */}
            <div className="border-4 border-black p-8 bg-white shadow-[10px_10px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-[1000] uppercase tracking-tight mb-8 flex items-center gap-3">
                <div className="w-2 h-6 bg-black"></div> 2. Selection
              </h3>

              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => setCurrency("USD")}
                  className={`flex-1 py-4 border-2 border-black font-[1000] text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 ${currency === "USD" ? 'bg-black text-[#EAB308]' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
                >
                  <DollarSign className="w-4 h-4" /> USD (Global)
                </button>
                <button 
                  onClick={() => setCurrency("INR")}
                  className={`flex-1 py-4 border-2 border-black font-[1000] text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 ${currency === "INR" ? 'bg-black text-[#EAB308]' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
                >
                  <IndianRupee className="w-4 h-4" /> INR (India)
                </button>
              </div>

              <div className="relative group">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 font-[1000] text-2xl text-black">
                  {currency === "USD" ? "$" : "₹"}
                </div>
                <input 
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-14 p-6 border-4 border-black font-[1000] text-3xl outline-none bg-gray-50 focus:bg-[#EAB308] transition-all"
                />
              </div>
            </div>
          </div>

          {/* --- RIGHT: FINAL SUMMARY --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-black text-white p-8 md:p-10 border-4 border-black shadow-[15px_15px_0px_0px_rgba(234,179,8,1)]">
              <h3 className="text-xl font-[1000] uppercase text-[#EAB308] tracking-tighter mb-8 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> CHECKOUT SUMMARY
              </h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-500 font-black uppercase text-[9px] tracking-widest">Student</span>
                  <span className="font-bold text-sm uppercase tracking-tight truncate ml-4">{studentInfo.name || "---"}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-500 font-black uppercase text-[9px] tracking-widest">Currency</span>
                  <span className="font-bold text-sm uppercase tracking-tight">{currency}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-[#EAB308] font-[1000] text-lg uppercase tracking-widest">Total Due</span>
                  <span className="text-3xl font-[1000] tracking-tighter">
                    {currency === "USD" ? "$" : "₹"}{amount || "0"}
                  </span>
                </div>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-[#EAB308] text-black font-[1000] py-6 border-2 border-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-95 disabled:opacity-50 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]"
              >
                {isProcessing ? <Loader2 className="animate-spin w-5 h-5" /> : <>AUTHORIZE PAYMENT <ArrowRight className="w-5 h-5" /></>}
              </button>

              <div className="mt-10 flex flex-col items-center gap-4 opacity-30">
                <div className="flex items-center gap-2">
                    <Lock className="w-3 h-3" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">AES-256 Bit Encryption</span>
                </div>
                <div className="flex gap-4 grayscale brightness-200">
                    <CreditCard className="w-6 h-6" />
                    <span className="text-[11px] font-black italic uppercase tracking-tighter">Razorpay Secure</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Support Bar */}
        <div className="mt-20 pt-8 border-t-2 border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
              Official Billing Portal <br /> Chess Mate Academy
           </p>
           <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 text-center md:text-right">
              Secured by Razorpay <br /> Global Finance
           </p>
        </div>
      </div>
    </div>
  );
}

const NeubrutalistInput = ({ ...props }: any) => (
  <input 
    {...props}
    className="w-full p-5 border-2 border-black font-black text-[11px] bg-gray-50 focus:bg-[#EAB308] focus:text-black outline-none transition-all placeholder:text-gray-400 rounded-none uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
  />
);