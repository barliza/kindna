import Link from "next/link";

function HelixIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M20 4C14 4 10 10 10 16C10 22 14 24 20 24C26 24 30 26 30 32C30 36 26 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 4C26 4 30 10 30 16C30 22 26 24 20 24C14 24 10 26 10 32C10 36 14 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="20" cy="4" r="2" fill="#D4A853" />
      <circle cx="20" cy="24" r="2" fill="#D4A853" />
      <circle cx="20" cy="38" r="2" fill="#D4A853" />
    </svg>
  );
}

const features = [
  { icon: "🔬", title: "12 Body Features", desc: "Compare face, eyes, nose, ears, hands, feet, skin tone, hair — far beyond just faces" },
  { icon: "🧬", title: "Sub-Dimensional DNA Scoring", desc: "Each feature analyzed across 4 scientific dimensions with dual-pass verification" },
  { icon: "👶", title: "Baby-Friendly", desc: "Built for the #1 use case — parents comparing themselves to their children" },
  { icon: "📊", title: "Shareable Reports", desc: "Download beautiful share cards for social media and detailed full reports" },
  { icon: "🔒", title: "Private & Secure", desc: "Photos processed in real-time and never stored on our servers" },
  { icon: "⚡", title: "Instant Results", desc: "AI-powered analysis in under 30 seconds per feature" },
];

const useCases = [
  { emoji: "👨‍👧", title: "Parent & Child", desc: "Does your baby have your eyes? Your partner's nose? Find out feature by feature." },
  { emoji: "👯", title: "Siblings", desc: "Which features do brothers and sisters share most? The results might surprise you." },
  { emoji: "👵", title: "Grandparents", desc: "Skip a generation? See if grandma's smile lives on in the grandkids." },
  { emoji: "🤝", title: "Friends", desc: "People say you look alike? Put it to the test with real AI scoring." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HelixIcon size={32} />
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#D4A853] to-[#E8C97A] bg-clip-text text-transparent">
            KinDNA
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-sm text-[#6B7B8D] hover:text-[#D4A853] transition-colors">Blog</Link>
          <Link
            href="/scan"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-sm tracking-wide shadow-lg shadow-[#D4A853]/20 hover:shadow-[#D4A853]/40 transition-shadow"
          >
            Start Scanning
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 text-[#D4A853] text-sm font-medium mb-8">
          <span>🧬</span> AI-Powered Family DNA Scanner
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853] bg-clip-text text-transparent">
            See Your DNA
          </span>
          <br />
          <span className="text-white">Connection</span>
        </h1>

        <p className="text-lg md:text-xl text-[#6B7B8D] max-w-2xl mx-auto mb-10 leading-relaxed">
          Scan individual body features — eyes, nose, ears, hands, feet — and discover
          how much DNA you share with family members. Feature by feature. Head to toe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/scan"
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-lg shadow-xl shadow-[#D4A853]/25 hover:shadow-[#D4A853]/50 transition-all hover:scale-[1.02]"
          >
            🔬 Start Free Scan
          </Link>
          <p className="text-sm text-[#4A5568]">No sign-up required • Free first comparison</p>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", icon: "📸", title: "Scan Features", desc: "Photograph each body feature close-up — one for each person. Our guide tells you exactly how to capture each shot." },
            { step: "02", icon: "🧬", title: "AI Analyzes", desc: "Each feature is scored across 4 sub-dimensions by advanced AI vision, with dual-pass verification for consistency." },
            { step: "03", icon: "📊", title: "Get Your Report", desc: "See which features match strongest. Download your share card for social media or the full detailed DNA report." },
          ].map((item) => (
            <div key={item.step} className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <span className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/25 text-[#D4A853] text-xs font-bold">
                STEP {item.step}
              </span>
              <span className="text-4xl block mb-4 mt-2">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#6B7B8D] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Why KinDNA Is Different
        </h2>
        <p className="text-center text-[#6B7B8D] mb-16 max-w-xl mx-auto">
          Every other app compares full faces. KinDNA scans 12 individual body features with scientific sub-dimensional scoring.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:border-[#D4A853]/20 transition-colors">
              <span className="text-3xl mb-3 block">{f.icon}</span>
              <h3 className="font-bold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#6B7B8D] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Who Uses KinDNA?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {useCases.map((uc) => (
            <div key={uc.title} className="flex gap-5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
              <span className="text-4xl flex-shrink-0">{uc.emoji}</span>
              <div>
                <h3 className="font-bold text-white mb-1">{uc.title}</h3>
                <p className="text-sm text-[#6B7B8D] leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <HelixIcon size={48} className="mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          Ready to See Your DNA Connection?
        </h2>
        <p className="text-[#6B7B8D] mb-8 text-lg">
          Your first full body scan is free. No account needed.
        </p>
        <Link
          href="/scan"
          className="inline-block px-12 py-4 rounded-2xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-lg shadow-xl shadow-[#D4A853]/25 hover:shadow-[#D4A853]/50 transition-all hover:scale-[1.02]"
        >
          🧬 Start Scanning — It&apos;s Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <HelixIcon size={20} />
            <span className="text-sm font-bold text-[#6B7B8D]">KinDNA</span>
          </div>
          <p className="text-xs text-[#4A5568]">
            For entertainment purposes only. Not a medical, genetic, or legal DNA test.
          </p>
          <p className="text-xs text-[#4A5568]">© {new Date().getFullYear()} KinDNA</p>
        </div>
      </footer>
    </div>
  );
}
