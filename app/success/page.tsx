"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function HelixIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20 4C14 4 10 10 10 16C10 22 14 24 20 24C26 24 30 26 30 32C30 36 26 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 4C26 4 30 10 30 16C30 22 26 24 20 24C14 24 10 26 10 32C10 36 14 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="20" cy="4" r="2" fill="#D4A853" /><circle cx="20" cy="24" r="2" fill="#D4A853" /><circle cx="20" cy="38" r="2" fill="#D4A853" />
    </svg>
  );
}

export default function SuccessPage() {
  const [plan, setPlan] = useState<string | null>(null);
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPlan(params.get("plan"));
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCounted(i);
      if (i >= 12) clearInterval(interval);
    }, 80);
    localStorage.setItem("kindna_premium", "true");
    localStorage.setItem("kindna_plan", params.get("plan") === "monthly" ? "monthly" : "one_time");
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1117] flex flex-col items-center justify-center px-5 text-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full bg-[#4ADE80]/10 border-2 border-[#4ADE80]/30 flex items-center justify-center text-4xl animate-bounce">🎉</div>
        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#4ADE80] flex items-center justify-center">
          <span className="text-[#0D1117] font-bold text-sm">✓</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <HelixIcon size={24} />
        <span className="text-xl font-extrabold bg-gradient-to-r from-[#D4A853] to-[#E8C97A] bg-clip-text text-transparent">KinDNA</span>
      </div>
      <h1 className="text-3xl font-bold text-white mb-2 mt-4">
        {plan === "monthly" ? "Unlimited Access Unlocked!" : "Full Report Unlocked!"}
      </h1>
      <p className="text-[#6B7B8D] mb-8 max-w-sm leading-relaxed">
        {plan === "monthly" ? "You now have unlimited scans with all 12 features." : "All 12 features are now available for your scan."}
      </p>
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-8 w-full max-w-sm">
        <p className="text-xs text-[#D4A853] font-semibold tracking-widest uppercase mb-3">Features Unlocked</p>
        <p className="text-6xl font-extrabold text-[#4ADE80] mb-1">{counted}</p>
        <p className="text-sm text-[#6B7B8D]">of 12 features</p>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {["🧑","👁️","👃","😁","🧠","🗿","👂","💇","🎨","🤲","🦶","🧍"].map((icon, i) => (
            <div key={i} className={`py-2 rounded-lg text-center text-lg transition-all duration-300 ${i < counted ? "bg-[#4ADE80]/10 border border-[#4ADE80]/20" : "bg-white/[0.02] border border-white/[0.04] opacity-30"}`}>
              {icon}
            </div>
          ))}
        </div>
      </div>
      <Link href="/scan" className="w-full max-w-sm py-4 rounded-2xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-[15px] text-center block">
        🧬 Start Full Analysis
      </Link>
      <p className="text-xs text-[#4A5568] mt-4">
        {plan === "monthly" ? "Cancel anytime from your email receipt" : "Valid for this browser session"}
      </p>
    </div>
  );
}