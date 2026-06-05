"use client";

import Link from "next/link";

function HelixIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20 4C14 4 10 10 10 16C10 22 14 24 20 24C26 24 30 26 30 32C30 36 26 38 20 38" stroke="#C8A96E" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M20 4C26 4 30 10 30 16C30 22 26 24 20 24C14 24 10 26 10 32C10 36 14 38 20 38" stroke="#C8A96E" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>
      <circle cx="20" cy="4" r="2.5" fill="#C8A96E"/>
      <circle cx="20" cy="24" r="2.5" fill="#C8A96E"/>
      <circle cx="20" cy="38" r="2.5" fill="#C8A96E"/>
    </svg>
  );
}

const FEATURES_LIST = [
  { icon: "◉", label: "Face Shape" }, { icon: "◎", label: "Eyes" },
  { icon: "▲", label: "Nose" }, { icon: "◡", label: "Smile & Lips" },
  { icon: "⬜", label: "Forehead" }, { icon: "◇", label: "Chin & Jaw" },
  { icon: "◑", label: "Ears" }, { icon: "≋", label: "Hair" },
  { icon: "◈", label: "Skin Tone" }, { icon: "✦", label: "Hands" },
  { icon: "↓", label: "Feet" }, { icon: "⊕", label: "Body Build" },
];

const FAQS = [
  { q: "How accurate is KinDNA?", a: "KinDNA uses Claude AI vision to analyze facial geometry and proportions with clinical-grade precision. Results are for entertainment and personal insight — not legal or medical evidence." },
  { q: "Are my photos stored anywhere?", a: "Never. Photos are processed in real-time in a single secure session and immediately discarded. Zero retention, zero risk." },
  { q: "Can it determine paternity?", a: "KinDNA scores visual resemblance across shared physical traits. It is not a DNA paternity test and cannot serve as legal proof of parentage." },
  { q: "What makes a good photo?", a: "Clear, well-lit, front-facing photos work best. Natural light, minimal filters, and a neutral background yield the most precise results." },
  { q: "What's free vs. paid?", a: "Face Shape and Eyes are always free. All 12 features — including Nose, Lips, Jaw, Hair, and Body Build — unlock with a one-time $2.99 report or $4.99/month." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080A0E] text-white overflow-x-hidden" style={{fontFamily: "'DM Sans', system-ui, sans-serif"}}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .grain { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"); }
        .text-gold { color: #C8A96E; }
        .text-gold-light { color: #E2C898; }
        .border-gold { border-color: #C8A96E; }
        .bg-gold { background-color: #C8A96E; }
        .photo-frame { position: relative; border-radius: 50%; overflow: hidden; }
        .photo-frame::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(200,169,110,0.15) 0%, transparent 60%); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-ring { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.25s; opacity: 0; }
        .delay-3 { animation-delay: 0.4s; opacity: 0; }
        .delay-4 { animation-delay: 0.55s; opacity: 0; }
        .line-accent { display: inline-block; width: 32px; height: 1px; background: #C8A96E; vertical-align: middle; margin-right: 12px; }
        .feature-num { font-family: 'Cormorant Garamond', serif; font-size: 11px; color: #C8A96E; letter-spacing: 0.15em; }
      `}</style>

      {/* ── NAV ── */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HelixIcon size={26} />
          <span className="font-cormorant text-2xl font-semibold tracking-wider text-gold-light" style={{letterSpacing: '0.08em'}}>KinDNA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[13px] font-light text-white/40 tracking-wide">
          <a href="#how-it-works" className="hover:text-white/80 transition-colors">Process</a>
          <a href="#features" className="hover:text-white/80 transition-colors">Features</a>
          <a href="#faq" className="hover:text-white/80 transition-colors">FAQ</a>
        </div>
        <Link href="/scan" className="px-5 py-2.5 rounded-full border border-[#C8A96E]/40 text-[#C8A96E] text-[13px] font-medium tracking-wide hover:bg-[#C8A96E]/10 transition-all">
          Begin Analysis
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section className="relative max-w-6xl mx-auto px-6 pt-10 pb-24 md:pt-16">

        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06]" style={{background: 'radial-gradient(circle, #C8A96E 0%, transparent 70%)', filter: 'blur(60px)'}} />

        <div className="relative grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            <div className="fade-up delay-1 flex items-center gap-3 mb-8">
              <span className="line-accent" />
              <span className="text-[11px] tracking-[0.25em] text-[#C8A96E] uppercase font-medium">AI Facial Resemblance</span>
            </div>

            <h1 className="fade-up delay-2 font-cormorant text-[52px] md:text-[68px] leading-[0.95] font-light mb-6">
              Does Your<br/>
              <em className="text-gold not-italic">Baby</em> Carry<br/>
              Your Face?
            </h1>

            <p className="fade-up delay-3 text-[15px] text-white/40 leading-relaxed font-light max-w-md mb-10">
              KinDNA uses advanced vision AI to scientifically score facial resemblance across 12 physical traits — giving parents a precise, feature-by-feature look at shared family genetics.
            </p>

            <div className="fade-up delay-4 flex flex-col sm:flex-row gap-3">
              <Link href="/scan" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#C8A96E] text-[#080A0E] font-semibold text-[14px] tracking-wide hover:bg-[#E2C898] transition-colors">
                <HelixIcon size={16} />
                Start Free Analysis
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/10 text-white/50 text-[14px] font-light tracking-wide hover:border-white/20 hover:text-white/70 transition-all">
                See How It Works
              </a>
            </div>

            {/* Trust row */}
            <div className="fade-up delay-4 flex items-center gap-6 mt-8 pt-8 border-t border-white/[0.05]">
              {[["12", "Features"], ["< 60s", "Analysis"], ["0%", "Data stored"]].map(([val, label]) => (
                <div key={label}>
                  <p className="font-cormorant text-2xl text-gold font-light">{val}</p>
                  <p className="text-[11px] text-white/30 tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo comparison card */}
          <div className="fade-up delay-3 relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-3xl opacity-20" style={{background: 'linear-gradient(135deg, #C8A96E22, transparent)', border: '1px solid #C8A96E30'}} />

            <div className="relative bg-[#0D1017] border border-white/[0.06] rounded-3xl p-6 overflow-hidden">
              {/* Grain overlay */}
              <div className="absolute inset-0 grain opacity-50 pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase">Sample Analysis</p>
                <span className="px-2.5 py-1 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[#4ADE80] text-[10px] font-medium">● Live Report</span>
              </div>

              {/* Photos */}
              <div className="flex items-center justify-center gap-6 mb-8">
                {/* Father photo */}
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-2">
                    <div className="absolute inset-0 rounded-2xl" style={{background: 'linear-gradient(135deg, #C8A96E40, transparent)', padding: '2px'}}>
                      <div className="w-full h-full rounded-2xl overflow-hidden bg-[#1A1F2A]">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format"
                          alt="Father"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px">👨</div>';
                          }}
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#C8A96E] flex items-center justify-center">
                      <span className="text-[10px] text-[#080A0E] font-bold">A</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#C8A96E] tracking-widest uppercase font-medium">Father</p>
                </div>

                {/* Center connector */}
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C8A96E]/40 to-transparent" />
                  <HelixIcon size={22} />
                  <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#C8A96E]/40 to-transparent" />
                </div>

                {/* Baby photo */}
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-2">
                    <div className="absolute inset-0 rounded-2xl" style={{background: 'linear-gradient(135deg, #7EB8D440, transparent)', padding: '2px'}}>
                      <div className="w-full h-full rounded-2xl overflow-hidden bg-[#1A1F2A]">
                        <img
                          src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=200&h=200&fit=crop&crop=face&auto=format"
                          alt="Baby"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px">👶</div>';
                          }}
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#7EB8D4] flex items-center justify-center">
                      <span className="text-[10px] text-[#080A0E] font-bold">B</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#7EB8D4] tracking-widest uppercase font-medium">Baby</p>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center justify-between mb-5 px-2">
                <div>
                  <p className="font-cormorant text-5xl text-[#4ADE80] font-light leading-none">82<span className="text-2xl">%</span></p>
                  <p className="text-[11px] text-white/30 mt-1 tracking-wide">Overall Match</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-white/20 tracking-widest uppercase mb-1">Verdict</p>
                  <p className="text-[12px] text-white/50 max-w-[140px] leading-snug">Strong family DNA — clear paternal resemblance.</p>
                </div>
              </div>

              {/* Feature bars */}
              <div className="space-y-2.5">
                {[{ label: "Face Shape", score: 85, free: true }, { label: "Eyes", score: 80, free: true }, { label: "Nose", score: 78, free: false }, { label: "Smile", score: 74, free: false }].map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="text-[11px] text-white/30 w-20 tracking-wide">{f.label}</span>
                    <div className="flex-1 h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
                      {f.free
                        ? <div className="h-full rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22C55E]" style={{ width: `${f.score}%` }} />
                        : <div className="h-full rounded-full bg-[#C8A96E]/30 blur-[1px]" style={{ width: `${f.score}%` }} />
                      }
                    </div>
                    {f.free
                      ? <span className="text-[11px] font-medium text-[#4ADE80] w-8 text-right">{f.score}%</span>
                      : <span className="text-[11px] text-white/20 w-8 text-right">🔒</span>
                    }
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <p className="text-[10px] text-white/15">2 of 12 features shown free</p>
                <Link href="/scan" className="text-[11px] text-[#C8A96E] tracking-wide hover:text-[#E2C898] transition-colors">
                  Unlock full report →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-3">
          <span className="line-accent" />
          <span className="text-[11px] tracking-[0.25em] text-[#C8A96E] uppercase font-medium">Process</span>
        </div>
        <h2 className="font-cormorant text-[42px] font-light mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {[
            { n: "01", title: "Upload Photos", body: "Take or upload clear front-facing photos of each person. Natural light, no filters. The AI does the rest." },
            { n: "02", title: "AI Analysis", body: "Claude vision AI analyzes up to 12 physical features, scoring each similarity with sub-metric precision in under 60 seconds." },
            { n: "03", title: "Receive Report", body: "A detailed, feature-by-feature resemblance report with scores, commentary, and sub-metrics for each trait analyzed." },
          ].map((step) => (
            <div key={step.n} className="bg-[#080A0E] p-8 hover:bg-[#0D1017] transition-colors">
              <p className="font-cormorant text-[48px] text-[#C8A96E]/20 font-light leading-none mb-6">{step.n}</p>
              <h3 className="font-cormorant text-[22px] font-light text-white mb-3">{step.title}</h3>
              <p className="text-[13px] text-white/35 leading-relaxed font-light">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="bg-[#0A0C10] border-y border-white/[0.04] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="line-accent" />
            <span className="text-[11px] tracking-[0.25em] text-[#C8A96E] uppercase font-medium">What We Analyze</span>
          </div>
          <div className="flex items-end justify-between mb-14">
            <h2 className="font-cormorant text-[42px] font-light">12 Physical<br/><em>Features</em></h2>
            <p className="text-[13px] text-white/25 max-w-xs text-right hidden md:block font-light leading-relaxed">Each feature is scored using multiple sub-metrics for the most complete resemblance profile possible.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {FEATURES_LIST.map((f, i) => (
              <div key={f.label} className={`group relative p-4 rounded-xl border transition-all cursor-default ${i < 2 ? 'border-[#C8A96E]/20 bg-[#C8A96E]/[0.04]' : 'border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08]'}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#C8A96E]/40 text-lg font-light">{f.icon}</span>
                  {i < 2
                    ? <span className="text-[9px] tracking-[0.15em] text-[#4ADE80] uppercase">Free</span>
                    : <span className="text-[9px] tracking-[0.15em] text-[#C8A96E]/50 uppercase">Pro</span>
                  }
                </div>
                <p className="text-[13px] text-white/60 font-light tracking-wide">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-3">
          <span className="line-accent" />
          <span className="text-[11px] tracking-[0.25em] text-[#C8A96E] uppercase font-medium">Pricing</span>
        </div>
        <h2 className="font-cormorant text-[42px] font-light mb-14">Simple,<br/><em>Transparent</em> Pricing</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              tier: "Free",
              price: "$0",
              sub: "Always",
              color: "white/[0.06]",
              accent: "#ffffff",
              items: ["Face Shape analysis", "Eyes analysis", "Overall match score"],
              locked: ["10 premium features"],
              cta: "Start Free",
              href: "/scan",
            },
            {
              tier: "Report",
              price: "$2.99",
              sub: "One-time",
              color: "[#C8A96E]/10",
              accent: "#C8A96E",
              items: ["Everything in Free", "All 12 features unlocked", "Detailed sub-scores", "Downloadable PDF"],
              locked: [],
              cta: "Get Full Report",
              href: "/scan",
              highlight: false,
            },
            {
              tier: "Unlimited",
              price: "$4.99",
              sub: "Per month",
              color: "[#7EB8D4]/10",
              accent: "#7EB8D4",
              items: ["Everything in Report", "Unlimited scans", "Priority analysis", "Cancel anytime"],
              locked: [],
              cta: "Go Unlimited",
              href: "/scan",
              badge: "Best Value",
            },
          ].map((plan) => (
            <div key={plan.tier} className={`relative bg-${plan.color} border rounded-2xl p-6`} style={{borderColor: plan.accent + '25'}}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-medium" style={{background: plan.accent, color: '#080A0E'}}>
                  {plan.badge}
                </div>
              )}
              <p className="text-[11px] tracking-[0.2em] uppercase mb-4 font-medium" style={{color: plan.accent + 'CC'}}>{plan.tier}</p>
              <p className="font-cormorant text-[48px] font-light leading-none mb-1" style={{color: plan.accent}}>{plan.price}</p>
              <p className="text-[12px] text-white/20 mb-6 tracking-wide">{plan.sub}</p>
              <div className="space-y-2 mb-6">
                {plan.items.map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-[13px] text-white/50 font-light">
                    <span style={{color: plan.accent}}>✓</span> {item}
                  </div>
                ))}
                {plan.locked.map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-[13px] text-white/15 font-light">
                    <span>—</span> {item}
                  </div>
                ))}
              </div>
              <Link href={plan.href} className="block w-full py-3 rounded-xl text-center text-[13px] font-medium tracking-wide transition-all" style={{background: plan.accent + '15', color: plan.accent, border: `1px solid ${plan.accent}30`}}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#0A0C10] border-y border-white/[0.04] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="line-accent" />
            <span className="text-[11px] tracking-[0.25em] text-[#C8A96E] uppercase font-medium">FAQ</span>
          </div>
          <h2 className="font-cormorant text-[42px] font-light mb-14">Common<br/><em>Questions</em></h2>
          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className={`py-6 ${i < FAQS.length - 1 ? 'border-b border-white/[0.05]' : ''}`}>
                <p className="text-[15px] font-light text-white/70 mb-2.5 tracking-wide">{faq.q}</p>
                <p className="text-[13px] text-white/30 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[300px] rounded-full opacity-[0.05]" style={{background: 'radial-gradient(circle, #C8A96E 0%, transparent 70%)', filter: 'blur(80px)'}} />
        </div>
        <div className="relative">
          <HelixIcon size={40} />
          <h2 className="font-cormorant text-[52px] md:text-[72px] font-light mt-6 mb-4 leading-tight">
            See the<br/><em className="text-gold">Connection</em>
          </h2>
          <p className="text-[15px] text-white/30 font-light mb-10 max-w-md mx-auto leading-relaxed">
            Upload your photos. Receive a precise, feature-by-feature resemblance report in under 60 seconds.
          </p>
          <Link href="/scan" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C8A96E] text-[#080A0E] font-semibold text-[14px] tracking-wide hover:bg-[#E2C898] transition-colors">
            <HelixIcon size={16} />
            Begin Free Analysis
          </Link>
          <p className="text-[11px] text-white/15 mt-5 tracking-widest uppercase">No account · No storage · Results in seconds</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.04] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <HelixIcon size={18} />
            <span className="font-cormorant text-lg text-gold font-light tracking-wider">KinDNA</span>
          </div>
          <p className="text-[11px] text-white/15 tracking-wide text-center">For entertainment purposes only · Not a medical or legal DNA test</p>
          <p className="text-[11px] text-white/15 tracking-wide">© 2026 KinDNA</p>
        </div>
      </footer>

    </div>
  );
}