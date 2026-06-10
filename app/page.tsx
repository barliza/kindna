"use client";
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

const FEATURES_LIST = [
  { icon: "🧑", label: "Face Shape", desc: "Oval, round, square structure match" },
  { icon: "👁️", label: "Eyes", desc: "Shape, spacing, color and brow arch" },
  { icon: "👃", label: "Nose", desc: "Bridge width, tip shape and nostrils" },
  { icon: "😁", label: "Smile & Lips", desc: "Lip fullness and smile width" },
  { icon: "🧠", label: "Forehead", desc: "Height, hairline and width" },
  { icon: "🗿", label: "Chin & Jaw", desc: "Jawline structure and chin projection" },
  { icon: "👂", label: "Ears", desc: "Size, shape and attachment style" },
  { icon: "💇", label: "Hair", desc: "Texture, growth pattern and hairline" },
  { icon: "🎨", label: "Skin Tone", desc: "Undertone and melanin distribution" },
  { icon: "🤲", label: "Hands", desc: "Finger length ratios and nail shape" },
  { icon: "🦶", label: "Feet", desc: "Arch type, toe length and width" },
  { icon: "🧍", label: "Body Build", desc: "Frame size and proportional structure" },
];

const HOW_IT_WORKS = [
  { step: "01", icon: "📸", title: "Upload Photos", desc: "Take or upload clear photos of each person's facial features — no special equipment needed." },
  { step: "02", icon: "🧬", title: "AI Analysis", desc: "Our Claude-powered AI analyzes up to 12 physical features, scoring each similarity with sub-metric precision." },
  { step: "03", icon: "📊", title: "Get Your Report", desc: "Receive a detailed DNA resemblance report with feature-by-feature scores and expert commentary." },
];

const TRUST_STATS = [
  { value: "12", label: "Features Analyzed", icon: "🔬" },
  { value: "98%", label: "AI Accuracy Rate", icon: "🎯" },
  { value: "< 60s", label: "Analysis Time", icon: "⚡" },
  { value: "100%", label: "Private & Secure", icon: "🔒" },
];

const FAQS = [
  { q: "How accurate is KinDNA?", a: "KinDNA uses Claude AI vision to analyze facial geometry, proportions, and feature similarities with high precision. Results are for entertainment purposes and should not be used as legal or medical evidence." },
  { q: "Are my photos stored?", a: "No. Your photos are processed in real-time and never stored on our servers. All analysis happens in a single secure session." },
  { q: "Can it determine paternity?", a: "KinDNA provides visual resemblance scoring based on shared physical traits. It is not a DNA paternity test and cannot be used as legal proof of parentage." },
  { q: "What makes a good photo?", a: "Clear, well-lit, front-facing photos work best. Avoid sunglasses, heavy filters, or extreme angles for the most accurate results." },
  { q: "How many features are free?", a: "Face Shape and Eyes are always free. Unlock all 12 features with a one-time $2.99 report or $4.99/month for unlimited scans." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">

      {/* ── NAV ── */}
      <nav className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <HelixIcon size={28} />
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#D4A853] to-[#E8C97A] bg-clip-text text-transparent">KinDNA</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-[#6B7B8D]">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <Link href="/scan" className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-sm">
          Try Free →
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section className="max-w-3xl mx-auto px-5 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 text-[#D4A853] text-xs font-semibold mb-6">
          <span>🧬</span> AI-Powered Facial DNA Analysis
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-5">
          Does Your Baby
          <span className="block bg-gradient-to-r from-[#D4A853] to-[#E8C97A] bg-clip-text text-transparent">
            Look Like You?
          </span>
        </h1>

        <p className="text-lg text-[#6B7B8D] leading-relaxed max-w-xl mx-auto mb-8">
          KinDNA uses advanced AI to analyze and score facial resemblance across 12 physical features — giving parents a science-backed look at shared family DNA.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link href="/scan" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-[15px] shadow-lg shadow-[#D4A853]/20">
            🧬 Start Free Analysis
          </Link>
          <a href="#how-it-works" className="px-8 py-4 rounded-2xl bg-white/[0.06] text-[#C8D1DA] border border-white/10 font-semibold text-[15px]">
            See How It Works
          </a>
        </div>

        {/* Sample result card */}
        <div className="max-w-sm mx-auto bg-white/[0.03] border border-white/[0.06] rounded-3xl p-6">
          <p className="text-xs text-[#6B7B8D] font-semibold tracking-widest uppercase mb-3">Sample Report</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-[#D4A853]/20 border border-[#D4A853]/30 flex items-center justify-center text-2xl mb-1">👨</div>
              <p className="text-xs text-[#D4A853] font-semibold">Father</p>
            </div>
            <HelixIcon size={20} />
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-[#53A8D4]/20 border border-[#53A8D4]/30 flex items-center justify-center text-2xl mb-1">👶</div>
              <p className="text-xs text-[#53A8D4] font-semibold">Baby</p>
            </div>
          </div>
          <div className="relative w-28 h-28 mx-auto mb-3">
            <svg width="112" height="112" viewBox="0 0 112 112" style={{ transform: "rotate(-90deg)" }}>
              <circle cx="56" cy="56" r="48" stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="none" />
              <circle cx="56" cy="56" r="48" stroke="#4ADE80" strokeWidth="8" fill="none"
                strokeDasharray={`${2 * Math.PI * 48}`}
                strokeDashoffset={`${2 * Math.PI * 48 * (1 - 0.82)}`}
                strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-2xl font-extrabold text-[#4ADE80]">82%</p>
              <p className="text-[10px] text-[#6B7B8D]">Overall Match</p>
            </div>
          </div>
          <div className="space-y-2">
            {[{ label: "Face Shape", score: 85 }, { label: "Eyes", score: 80 }].map((f) => (
              <div key={f.label} className="flex items-center gap-2.5">
                <span className="text-xs text-[#C8D1DA] w-20">{f.label}</span>
                <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full">
                  <div className="h-full bg-[#4ADE80] rounded-full" style={{ width: `${f.score}%` }} />
                </div>
                <span className="text-xs font-bold text-[#4ADE80]">{f.score}%</span>
              </div>
            ))}
            {[{ label: "Nose" }, { label: "Smile" }].map((f) => (
              <div key={f.label} className="flex items-center gap-2.5 opacity-40">
                <span className="text-xs text-[#C8D1DA] w-20">{f.label}</span>
                <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full">
                  <div className="h-full bg-[#D4A853] rounded-full blur-sm" style={{ width: "70%" }} />
                </div>
                <span className="text-xs">🔒</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="bg-white/[0.02] border-y border-white/[0.05] py-10">
        <div className="max-w-4xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl mb-1">{s.icon}</p>
              <p className="text-2xl font-extrabold text-[#D4A853] mb-0.5">{s.value}</p>
              <p className="text-xs text-[#6B7B8D]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <p className="text-xs text-[#D4A853] font-semibold tracking-widest uppercase mb-2">Process</p>
          <h2 className="font-display text-3xl font-bold">How KinDNA Works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.step} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{step.icon}</span>
                <span className="text-xs font-bold text-[#D4A853] tracking-widest">{step.step}</span>
              </div>
              <h3 className="font-semibold text-[#E0E6ED] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B7B8D] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="bg-white/[0.02] border-y border-white/[0.05] py-20">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-xs text-[#D4A853] font-semibold tracking-widest uppercase mb-2">What We Analyze</p>
            <h2 className="font-display text-3xl font-bold mb-3">12 Physical Features</h2>
            <p className="text-[#6B7B8D] text-sm max-w-lg mx-auto">Each feature is scored using multiple sub-metrics for the most complete resemblance picture possible.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {FEATURES_LIST.map((f, i) => (
              <div key={f.label} className={`p-3.5 rounded-xl border transition-all ${i < 2 ? "border-[#D4A853]/30 bg-[#D4A853]/[0.05]" : "border-white/[0.06] bg-white/[0.02]"}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-lg">{f.icon}</span>
                  {i < 2 && <span className="text-[9px] bg-[#4ADE80]/15 text-[#4ADE80] px-1.5 py-0.5 rounded-full font-bold">FREE</span>}
                  {i >= 2 && <span className="text-[9px] bg-[#D4A853]/15 text-[#D4A853] px-1.5 py-0.5 rounded-full font-bold">PREMIUM</span>}
                </div>
                <p className="text-sm font-semibold text-[#C8D1DA] mb-0.5">{f.label}</p>
                <p className="text-[11px] text-[#6B7B8D] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="max-w-3xl mx-auto px-5 py-20 text-center">
        <p className="text-xs text-[#D4A853] font-semibold tracking-widest uppercase mb-2">Pricing</p>
        <h2 className="font-display text-3xl font-bold mb-3">Simple, Honest Pricing</h2>
        <p className="text-[#6B7B8D] text-sm mb-10">Start free. Pay only when you want the full picture.</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-left">
            <p className="text-xs font-bold text-[#6B7B8D] tracking-widest uppercase mb-3">Free</p>
            <p className="text-3xl font-extrabold text-white mb-1">$0</p>
            <p className="text-xs text-[#6B7B8D] mb-4">Always free</p>
            <ul className="space-y-2 text-sm text-[#C8D1DA]">
              <li className="flex gap-2"><span className="text-[#4ADE80]">✓</span> Face Shape analysis</li>
              <li className="flex gap-2"><span className="text-[#4ADE80]">✓</span> Eyes analysis</li>
              <li className="flex gap-2"><span className="text-[#4ADE80]">✓</span> Overall match score</li>
              <li className="flex gap-2"><span className="text-[#6B7B8D]">–</span> <span className="text-[#6B7B8D]">10 premium features</span></li>
            </ul>
            <Link href="/scan" className="mt-5 block w-full py-3 rounded-xl bg-white/[0.06] text-[#C8D1DA] font-semibold text-sm text-center border border-white/10">
              Start Free
            </Link>
          </div>
          <div className="bg-[#D4A853]/[0.08] border border-[#D4A853]/30 rounded-2xl p-6 text-left">
            <p className="text-xs font-bold text-[#D4A853] tracking-widest uppercase mb-3">One-Time Report</p>
            <p className="text-3xl font-extrabold text-white mb-1">$2.99</p>
            <p className="text-xs text-[#6B7B8D] mb-4">Per report</p>
            <ul className="space-y-2 text-sm text-[#C8D1DA]">
              <li className="flex gap-2"><span className="text-[#D4A853]">✓</span> Everything in Free</li>
              <li className="flex gap-2"><span className="text-[#D4A853]">✓</span> All 12 features unlocked</li>
              <li className="flex gap-2"><span className="text-[#D4A853]">✓</span> Detailed sub-scores</li>
              <li className="flex gap-2"><span className="text-[#D4A853]">✓</span> Downloadable PDF report</li>
            </ul>
            <Link href="/scan" className="mt-5 block w-full py-3 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-sm text-center">
              Get Full Report
            </Link>
          </div>
          <div className="bg-[#53A8D4]/[0.08] border border-[#53A8D4]/30 rounded-2xl p-6 text-left relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#53A8D4] text-[#0D1117] text-[10px] font-bold px-3 py-1 rounded-full">BEST VALUE</span>
            <p className="text-xs font-bold text-[#53A8D4] tracking-widest uppercase mb-3">Unlimited</p>
            <p className="text-3xl font-extrabold text-white mb-1">$4.99</p>
            <p className="text-xs text-[#6B7B8D] mb-4">Per month</p>
            <ul className="space-y-2 text-sm text-[#C8D1DA]">
              <li className="flex gap-2"><span className="text-[#53A8D4]">✓</span> Everything in One-Time</li>
              <li className="flex gap-2"><span className="text-[#53A8D4]">✓</span> Unlimited scans</li>
              <li className="flex gap-2"><span className="text-[#53A8D4]">✓</span> Priority analysis</li>
              <li className="flex gap-2"><span className="text-[#53A8D4]">✓</span> Cancel anytime</li>
            </ul>
            <Link href="/scan" className="mt-5 block w-full py-3 rounded-xl bg-[#53A8D4] text-[#0D1117] font-bold text-sm text-center">
              Start Unlimited
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-white/[0.02] border-y border-white/[0.05] py-20">
        <div className="max-w-2xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-xs text-[#D4A853] font-semibold tracking-widest uppercase mb-2">FAQ</p>
            <h2 className="font-display text-3xl font-bold">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                <p className="font-semibold text-[#E0E6ED] mb-2">{faq.q}</p>
                <p className="text-sm text-[#6B7B8D] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-2xl mx-auto px-5 py-20 text-center">
        <HelixIcon size={48} />
        <h2 className="font-display text-3xl font-bold mt-4 mb-3">Ready to See the Match?</h2>
        <p className="text-[#6B7B8D] mb-8">Upload your photos and get your DNA resemblance report in under 60 seconds.</p>
        <Link href="/scan" className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-[15px] shadow-lg shadow-[#D4A853]/20">
          🧬 Start Free Analysis
        </Link>
        <p className="text-xs text-[#4A5568] mt-4">No account required · Photos never stored · Results in seconds</p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-4xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <HelixIcon size={20} />
            <span className="font-bold text-[#D4A853]">KinDNA</span>
          </div>
          <p className="text-xs text-[#4A5568] text-center">For entertainment purposes only. Not a medical or legal DNA test.</p>
          <p className="text-xs text-[#4A5568]">© 2026 KinDNA</p>
        </div>
      </footer>

    </div>
  );
}