"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FEATURES, RELATIONSHIPS } from "@/lib/features";
import { FeaturePhotos, AnalysisResults, AnalyzeResponse } from "@/lib/types";

// Free features — always unlocked
const FREE_FEATURES = ["face", "eyes"];

function compressImage(file: File): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.onload = () => {
        const max = 800;
        let { width: w, height: h } = img;
        if (w > max || h > max) { const r = Math.min(max / w, max / h); w = Math.round(w * r); h = Math.round(h * r); }
        const c = document.createElement("canvas");
        c.width = w; c.height = h;
        c.getContext("2d")!.drawImage(img, 0, 0, w, h);
        resolve(c.toDataURL("image/jpeg", 0.85));
      };
      img.src = e.target!.result as string;
    };
    reader.readAsDataURL(file);
  });
}

function HelixIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20 4C14 4 10 10 10 16C10 22 14 24 20 24C26 24 30 26 30 32C30 36 26 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 4C26 4 30 10 30 16C30 22 26 24 20 24C14 24 10 26 10 32C10 36 14 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="20" cy="4" r="2" fill="#D4A853" /><circle cx="20" cy="24" r="2" fill="#D4A853" /><circle cx="20" cy="38" r="2" fill="#D4A853" />
    </svg>
  );
}

function PhotoCapture({ label, photo, onUpload, onRemove, tip, accent = "#D4A853" }: {
  label: string; photo: string | null; onUpload: (d: string) => void;
  onRemove: () => void; tip?: string | null; accent?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const handleFile = async (file: File) => {
    if (!file?.type.startsWith("image/")) return;
    setLoading(true);
    const compressed = await compressImage(file);
    onUpload(compressed);
    setLoading(false);
  };
  if (loading) return (
    <div className="flex-1 min-w-[130px] aspect-square rounded-2xl border-2 border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-2">
      <div className="w-7 h-7 rounded-full border-2 border-white/10 border-t-[#D4A853] animate-spin" />
      <p className="text-xs text-[#6B7B8D]">Compressing...</p>
    </div>
  );
  if (photo) return (
    <div className="flex-1 min-w-[130px] relative rounded-2xl overflow-hidden aspect-square" style={{ border: `2px solid ${accent}` }}>
      <img src={photo} alt={label} className="w-full h-full object-cover" />
      <button onClick={onRemove} className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/70 text-white text-sm flex items-center justify-center">✕</button>
      <div className="absolute bottom-0 left-0 right-0 py-1 px-2 bg-gradient-to-t from-black/70 text-center">
        <p className="text-[10px] text-gray-300">{label}</p>
      </div>
    </div>
  );
  return (
    <div onClick={() => inputRef.current?.click()}
      className="flex-1 min-w-[130px] aspect-square rounded-2xl cursor-pointer border-2 border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-2 hover:border-[#D4A853]/30 transition-colors">
      <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl" style={{ background: accent + "15", border: `1px solid ${accent}30` }}>📷</div>
      <p className="text-xs font-semibold text-[#C8D1DA]">{label}</p>
      {tip && <p className="text-[10px] text-[#6B7B8D] text-center px-2">{tip}</p>}
      <input ref={inputRef} type="file" accept="image/*" capture="environment" className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
    </div>
  );
}

function ScoreRing({ score, size = 140, label }: { score: number; size?: number; label?: string }) {
  const stroke = 8, radius = (size - stroke) / 2, circ = 2 * Math.PI * radius;
  const [anim, setAnim] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const run = () => {
      const p = Math.min((Date.now() - start) / 1500, 1);
      setAnim(Math.round((1 - Math.pow(1 - p, 3)) * score));
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [score]);
  const color = score >= 75 ? "#4ADE80" : score >= 50 ? "#D4A853" : score >= 30 ? "#F97316" : "#EF4444";
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={radius} stroke={color} strokeWidth={stroke} fill="none"
          strokeDasharray={circ} strokeDashoffset={circ - (anim/100)*circ} strokeLinecap="round" className="transition-all duration-100" />
      </svg>
      <div className="absolute text-center">
        <p className="font-extrabold" style={{ fontSize: size*0.28, color }}>{anim}%</p>
        {label && <p className="text-[11px] text-[#6B7B8D] mt-0.5">{label}</p>}
      </div>
    </div>
  );
}

function FeatureBar({ icon, label, score, delay = 0 }: { icon: string; label: string; score: number; delay?: number }) {
  const [w, setW] = useState(0);
  useEffect(() => { const t = setTimeout(() => setW(score), delay); return () => clearTimeout(t); }, [score, delay]);
  const color = score >= 75 ? "#4ADE80" : score >= 50 ? "#D4A853" : score >= 30 ? "#F97316" : "#EF4444";
  return (
    <div className="flex items-center gap-3 py-2.5">
      <span className="text-xl w-7 text-center">{icon}</span>
      <div className="flex-1">
        <div className="flex justify-between mb-1.5">
          <span className="text-[13px] font-semibold text-[#C8D1DA]">{label}</span>
          <span className="text-[13px] font-bold" style={{ color }}>{score}%</span>
        </div>
        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${w}%`, background: color }} />
        </div>
      </div>
    </div>
  );
}

// ─── PAYWALL MODAL ───
function PaywallModal({ onClose, nameA, nameB }: { onClose: () => void; nameA: string; nameB: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-[440px] bg-[#131920] rounded-t-3xl p-6 border-t border-white/10"
        onClick={(e) => e.stopPropagation()}>

        {/* Handle */}
        <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-5" />

        {/* Lock icon */}
        <div className="text-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-[#D4A853]/10 border border-[#D4A853]/20 flex items-center justify-center text-3xl mx-auto mb-3">🔐</div>
          <h2 className="font-display text-xl font-bold text-white mb-1">Unlock Full DNA Report</h2>
          <p className="text-sm text-[#6B7B8D] leading-relaxed">
            You've seen Face Shape & Eyes. Unlock all 10 remaining features to see the complete DNA picture between <span className="text-[#D4A853]">{nameA || "Person A"}</span> and <span className="text-[#53A8D4]">{nameB || "Person B"}</span>.
          </p>
        </div>

        {/* What's included */}
        <div className="bg-white/[0.03] rounded-2xl p-4 mb-4 border border-white/[0.06]">
          <p className="text-xs font-bold text-[#6B7B8D] tracking-widest uppercase mb-3">What you unlock</p>
          <div className="grid grid-cols-2 gap-1.5">
            {["👃 Nose", "👂 Ears", "😁 Smile & Lips", "🗿 Chin & Jaw", "🧠 Forehead", "💇 Hair", "🤲 Hands", "🦶 Feet", "🎨 Skin Tone", "🧍 Body Build"].map(f => (
              <div key={f} className="flex items-center gap-1.5 text-xs text-[#C8D1DA]">
                <span className="text-[#4ADE80]">✓</span> {f}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex gap-3 mb-4">
          <button className="flex-1 py-4 rounded-2xl border-2 border-[#D4A853] bg-gradient-to-b from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-sm">
            <p className="text-lg font-extrabold">$2.99</p>
            <p className="text-xs opacity-70">One-time report</p>
          </button>
          <button className="flex-1 py-4 rounded-2xl border-2 border-[#53A8D4]/50 bg-[#53A8D4]/10 text-white font-bold text-sm relative">
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#53A8D4] text-[#0D1117] text-[10px] font-bold px-2 py-0.5 rounded-full">BEST VALUE</span>
            <p className="text-lg font-extrabold text-[#53A8D4]">$4.99</p>
            <p className="text-xs opacity-70">Monthly unlimited</p>
          </button>
        </div>

        {/* Coming soon note */}
        <div className="bg-[#D4A853]/[0.08] border border-[#D4A853]/20 rounded-xl p-3 mb-4 text-center">
          <p className="text-xs text-[#E8C97A]">💳 Payments launching soon — join the waitlist to get notified and receive <strong>3 free premium scans</strong></p>
        </div>

        {/* Email input for waitlist */}
        <div className="flex gap-2 mb-3">
          <input type="email" placeholder="your@email.com"
            className="flex-1 px-3.5 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-[#E0E6ED] text-sm outline-none focus:border-[#D4A853]/50" />
          <button className="px-4 py-3 rounded-xl bg-[#D4A853] text-[#0D1117] font-bold text-sm">
            Join
          </button>
        </div>

        <button onClick={onClose} className="w-full py-3 text-[#4A5568] text-sm">
          Continue with free results
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// MAIN SCANNER APP
// ═══════════════════════════════════════
export default function ScanPage() {
  const [step, setStep] = useState(0);
  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");
  const [relationship, setRelationship] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState(["face", "eyes", "nose", "smile"]);
  const [scanIndex, setScanIndex] = useState(0);
  const [featurePhotos, setFeaturePhotos] = useState<FeaturePhotos>({});
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [errorMsg, setErrorMsg] = useState("");
  const [showPaywall, setShowPaywall] = useState(false);
  const [isPremium, setIsPremium] = useState(false); // Will connect to Stripe later

  const currentFeature = FEATURES.find((f) => f.id === selectedFeatures[scanIndex]);
  const currentPhotos = featurePhotos[selectedFeatures[scanIndex]] || { a: null, b: null };
  const canAdvance = currentPhotos.a && currentPhotos.b;
  const scannedCount = selectedFeatures.filter((id) => featurePhotos[id]?.a && featurePhotos[id]?.b).length;

  const setPhoto = (fId: string, person: "a" | "b", data: string) =>
    setFeaturePhotos((prev) => ({ ...prev, [fId]: { ...prev[fId], [person]: data } }));
  const removePhoto = (fId: string, person: "a" | "b") =>
    setFeaturePhotos((prev) => ({ ...prev, [fId]: { ...prev[fId], [person]: null } }));
  const toggleFeature = (id: string) =>
    setSelectedFeatures((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);

  const isFreeFeature = (id: string) => FREE_FEATURES.includes(id);
  const isLockedFeature = (id: string) => !isFreeFeature(id) && !isPremium;

  const analyzeAll = async () => {
    setStep(4);
    const toAnalyze = selectedFeatures.filter((id) => featurePhotos[id]?.a && featurePhotos[id]?.b);
    const total = toAnalyze.length;
    const featureResults: AnalysisResults["features"] = {};
    const errors: string[] = [];

    for (let i = 0; i < total; i++) {
      const fId = toAnalyze[i];
      const feature = FEATURES.find((f) => f.id === fId)!;
      const photos = featurePhotos[fId];
      setProgress({ current: i + 1, total });
      setLoadingMsg(`Analyzing ${feature.label}...`);
      try {
        const res = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            featureId: fId, featureLabel: feature.label, featureDesc: feature.desc,
            featureCriteria: feature.criteria,
            imageA: photos.a!.split(",")[1], imageB: photos.b!.split(",")[1], relationship,
          }),
        });
        const data: AnalyzeResponse = await res.json();
        if (data.success && data.score !== undefined) {
          featureResults[fId] = { score: data.score, note: data.note || "", subDetail: data.subDetail };
        } else {
          throw new Error(data.error || "Unknown API error");
        }
      } catch (err: any) {
        errors.push(`${feature.label}: ${err.message}`);
        featureResults[fId] = { score: null, note: `Failed: ${err.message.substring(0, 80)}` };
      }
    }

    const validScores = Object.values(featureResults).filter((f) => f.score !== null).map((f) => f.score!);
    if (validScores.length === 0) { setErrorMsg(`All analyses failed.\n${errors.join("\n")}`); setStep(6); return; }

    const overall = Math.round(validScores.reduce((s, v) => s + v, 0) / validScores.length);
    let verdict = "";
    if (overall >= 80) verdict = `Remarkably strong resemblance across ${validScores.length} features — a striking DNA connection.`;
    else if (overall >= 60) verdict = `Clear family DNA detected, with some notably strong feature matches.`;
    else if (overall >= 45) verdict = `Moderate DNA similarity with shared traits visible in the highest-scoring features.`;
    else if (overall >= 30) verdict = `Some subtle shared DNA markers, with natural differences across most features.`;
    else verdict = `Quite different across most features, with minimal visual DNA overlap detected.`;

    setResults({ overall_score: overall, verdict, features: featureResults, errors: errors.length > 0 ? errors : null, analyzed_count: validScores.length });
    setStep(5);
  };

  const reset = () => {
    setStep(0); setNameA(""); setNameB(""); setRelationship("");
    setSelectedFeatures(["face", "eyes", "nose", "smile"]);
    setScanIndex(0); setFeaturePhotos({}); setResults(null); setErrorMsg(""); setShowPaywall(false);
  };

  const btnClass = "w-full py-4 px-6 rounded-xl font-bold text-[15px] tracking-wide transition-all";
  const btnPrimary = `${btnClass} bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] shadow-lg shadow-[#D4A853]/20`;
  const btnSecondary = `${btnClass} bg-white/[0.06] text-[#C8D1DA] border border-white/10`;

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {showPaywall && <PaywallModal onClose={() => setShowPaywall(false)} nameA={nameA} nameB={nameB} />}

      <div className="max-w-[440px] mx-auto px-5 pb-10">

        {/* Header */}
        <div className="flex items-center justify-between py-4 border-b border-white/[0.06]">
          <Link href="/" className="flex items-center gap-2.5">
            <HelixIcon size={28} />
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#D4A853] to-[#E8C97A] bg-clip-text text-transparent">KinDNA</span>
          </Link>
          {step >= 0 && step <= 3 && (
            <div className="flex gap-1">
              {[0,1,2,3].map((i) => (
                <div key={i} className="h-1 rounded-full transition-all duration-300"
                  style={{ width: step >= i ? 20 : 8, background: step >= i ? "#D4A853" : "rgba(255,255,255,0.1)" }} />
              ))}
            </div>
          )}
        </div>

        {/* STEP 0: SETUP */}
        {step === 0 && (
          <div className="pt-6 animate-fade-in">
            <h2 className="font-display text-[22px] font-bold mb-1">Who's Comparing?</h2>
            <p className="text-sm text-[#6B7B8D] mb-6">Enter names and select relationship</p>
            <div className="flex gap-3 mb-5">
              <div className="flex-1">
                <label className="text-xs text-[#6B7B8D] mb-1.5 block">Person A</label>
                <input value={nameA} onChange={(e) => setNameA(e.target.value)} placeholder="e.g. Dad"
                  className="w-full px-3.5 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-[#E0E6ED] text-sm outline-none focus:border-[#D4A853]/50" />
              </div>
              <div className="flex-1">
                <label className="text-xs text-[#6B7B8D] mb-1.5 block">Person B</label>
                <input value={nameB} onChange={(e) => setNameB(e.target.value)} placeholder="e.g. Baby"
                  className="w-full px-3.5 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-[#E0E6ED] text-sm outline-none focus:border-[#D4A853]/50" />
              </div>
            </div>
            <label className="text-xs text-[#6B7B8D] mb-2 block">Relationship</label>
            <div className="flex flex-wrap gap-2 mb-7">
              {RELATIONSHIPS.map((r) => (
                <button key={r} onClick={() => setRelationship(r)}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium border transition-all ${
                    relationship === r ? "border-[#D4A853] bg-[#D4A853]/10 text-[#D4A853]" : "border-white/[0.08] bg-white/[0.02] text-[#B8C4D0]"
                  }`}>{r}</button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className={btnPrimary}>Next: Choose Features →</button>
          </div>
        )}

        {/* STEP 1: SELECT FEATURES */}
        {step === 1 && (
          <div className="pt-6 animate-fade-in">
            <h2 className="font-display text-[22px] font-bold mb-1">What to Scan?</h2>
            <p className="text-sm text-[#6B7B8D] mb-4">Free: Face Shape & Eyes · Premium: All 12 features</p>

            {(["head", "body"] as const).map((cat) => (
              <div key={cat} className="mb-4">
                <p className="text-[11px] font-bold text-[#6B7B8D] tracking-widest uppercase mb-2">
                  {cat === "head" ? "🧑 Head & Face" : "🧍 Body"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {FEATURES.filter((f) => f.category === cat).map((f) => {
                    const isFree = isFreeFeature(f.id);
                    const isSelected = selectedFeatures.includes(f.id);
                    return (
                      <button key={f.id} onClick={() => !isLockedFeature(f.id) && toggleFeature(f.id)}
                        className={`flex items-center gap-2 p-2.5 rounded-lg text-left w-full border transition-all relative ${
                          isLockedFeature(f.id)
                            ? "border-white/[0.04] bg-white/[0.01] opacity-50 cursor-not-allowed"
                            : isSelected
                            ? "border-[#D4A853] bg-[#D4A853]/10"
                            : "border-white/[0.06] bg-white/[0.02]"
                        }`}>
                        <span className="text-lg">{f.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className={`text-[13px] font-semibold truncate ${isSelected && !isLockedFeature(f.id) ? "text-[#D4A853]" : "text-[#C8D1DA]"}`}>{f.label}</p>
                          <p className="text-[10px] text-[#6B7B8D] truncate">{f.desc}</p>
                        </div>
                        {isLockedFeature(f.id) && <span className="text-[10px]">🔒</span>}
                        {!isLockedFeature(f.id) && isSelected && <span className="text-[#D4A853] text-sm font-bold flex-shrink-0">✓</span>}
                        {isFree && <span className="absolute top-1 right-1 text-[9px] bg-[#4ADE80]/15 text-[#4ADE80] px-1.5 py-0.5 rounded-full font-bold">FREE</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Premium unlock teaser */}
            <div onClick={() => setShowPaywall(true)}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-[#D4A853]/20 bg-[#D4A853]/[0.05] cursor-pointer mb-4 hover:bg-[#D4A853]/10 transition-colors">
              <span className="text-2xl">🔐</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#D4A853]">Unlock All 12 Features</p>
                <p className="text-xs text-[#6B7B8D]">From $2.99 — Full body DNA report</p>
              </div>
              <span className="text-[#D4A853]">→</span>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(0)} className={`${btnSecondary} !w-auto !px-5`}>←</button>
              <button onClick={() => { setScanIndex(0); setStep(2); }} disabled={selectedFeatures.length === 0}
                className={`${btnPrimary} flex-1 ${selectedFeatures.length === 0 ? "opacity-35 cursor-not-allowed" : ""}`}>
                Start Scanning ({selectedFeatures.filter(id => !isLockedFeature(id)).length}) →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SCAN */}
        {step === 2 && currentFeature && (
          <div className="pt-5 animate-fade-in">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="h-full bg-[#D4A853] rounded-full transition-all duration-300"
                  style={{ width: `${((scanIndex + (canAdvance ? 1 : 0.5)) / selectedFeatures.length) * 100}%` }} />
              </div>
              <span className="text-xs text-[#6B7B8D] flex-shrink-0">{scanIndex + 1} / {selectedFeatures.length}</span>
            </div>
            <div className="text-center mb-5">
              <span className="text-[40px]">{currentFeature.icon}</span>
              <h2 className="font-display text-[22px] font-bold mt-2 mb-1">Scan: {currentFeature.label}</h2>
              <p className="text-[13px] text-[#6B7B8D]">{currentFeature.desc}</p>
            </div>
            <div className="flex items-center gap-2.5 bg-[#D4A853]/[0.08] border border-[#D4A853]/15 rounded-lg px-3.5 py-2.5 mb-5">
              <span className="text-base">💡</span>
              <p className="text-xs text-[#E8C97A]">Tip: {currentFeature.tip}</p>
            </div>
            <div className="flex gap-3.5 mb-6">
              <PhotoCapture label={nameA || "Person A"} photo={currentPhotos.a}
                onUpload={(d) => setPhoto(currentFeature.id, "a", d)} onRemove={() => removePhoto(currentFeature.id, "a")}
                tip={!currentPhotos.a ? currentFeature.label : null} accent="#D4A853" />
              <PhotoCapture label={nameB || "Person B"} photo={currentPhotos.b}
                onUpload={(d) => setPhoto(currentFeature.id, "b", d)} onRemove={() => removePhoto(currentFeature.id, "b")}
                tip={!currentPhotos.b ? currentFeature.label : null} accent="#53A8D4" />
            </div>
            <div className="flex gap-2.5">
              <button onClick={() => scanIndex > 0 ? setScanIndex(scanIndex - 1) : setStep(1)} className={`${btnSecondary} !w-auto !px-5`}>←</button>
              {scanIndex < selectedFeatures.length - 1 ? (
                <button onClick={() => setScanIndex(scanIndex + 1)} disabled={!canAdvance}
                  className={`${btnPrimary} flex-1 ${!canAdvance ? "opacity-35 cursor-not-allowed" : ""}`}>
                  Next: {FEATURES.find((f) => f.id === selectedFeatures[scanIndex + 1])?.label} →
                </button>
              ) : (
                <button onClick={() => setStep(3)} disabled={!canAdvance}
                  className={`${btnPrimary} flex-1 ${!canAdvance ? "opacity-35 cursor-not-allowed" : ""}`}>
                  Review All Scans →
                </button>
              )}
            </div>
            {scanIndex < selectedFeatures.length - 1 && (
              <button onClick={() => setScanIndex(scanIndex + 1)} className="w-full mt-2 py-2.5 text-[#4A5568] text-xs bg-transparent border-none">Skip this feature</button>
            )}
          </div>
        )}

        {/* STEP 3: REVIEW */}
        {step === 3 && (
          <div className="pt-6 animate-fade-in">
            <h2 className="font-display text-[22px] font-bold mb-1">Review Scans</h2>
            <p className="text-sm text-[#6B7B8D] mb-5">{scannedCount} of {selectedFeatures.length} features scanned</p>
            <div className="flex flex-col gap-2.5 mb-6">
              {selectedFeatures.map((id, i) => {
                const f = FEATURES.find((x) => x.id === id)!;
                const photos = featurePhotos[id];
                const ready = photos?.a && photos?.b;
                return (
                  <div key={id} onClick={() => { setScanIndex(i); setStep(2); }}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all ${
                      ready ? "border-[#4ADE80]/20 bg-[#4ADE80]/[0.04]" : "border-white/[0.06] bg-white/[0.02]"
                    }`}>
                    <span className="text-xl">{f.icon}</span>
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${ready ? "text-[#4ADE80]" : "text-[#6B7B8D]"}`}>{f.label}</p>
                      <p className="text-[11px] text-[#6B7B8D]">{ready ? "✓ Both photos ready" : "Tap to scan"}</p>
                    </div>
                    {ready && photos.a && photos.b && (
                      <div className="flex gap-1">
                        <img src={photos.a} className="w-8 h-8 rounded-lg object-cover border border-[#D4A853]" />
                        <img src={photos.b} className="w-8 h-8 rounded-lg object-cover border border-[#53A8D4]" />
                      </div>
                    )}
                    {!ready && <span className="text-[#6B7B8D]">→</span>}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setScanIndex(selectedFeatures.length - 1); setStep(2); }} className={`${btnSecondary} !w-auto !px-5`}>←</button>
              <button onClick={analyzeAll} disabled={scannedCount === 0}
                className={`${btnPrimary} flex-1 ${scannedCount === 0 ? "opacity-35 cursor-not-allowed" : ""}`}>
                🧬 Analyze {scannedCount} Feature{scannedCount !== 1 ? "s" : ""}
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: ANALYZING */}
        {step === 4 && (
          <div className="pt-16 text-center animate-fade-in">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="w-24 h-24 rounded-full border-[3px] border-white/10 border-t-[#D4A853] animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center"><HelixIcon size={32} /></div>
            </div>
            <h2 className="font-display text-xl font-bold mb-2">Analyzing DNA Features</h2>
            <p className="text-sm text-[#D4A853] mb-1">{loadingMsg}</p>
            <p className="text-[13px] text-[#53A8D4] font-semibold">Feature {progress.current} of {progress.total}</p>
          </div>
        )}

        {/* STEP 5: RESULTS */}
        {step === 5 && results && (
          <div className="pt-6 animate-fade-in">
            <div className="text-center mb-7">
              <p className="text-xs text-[#D4A853] font-semibold tracking-widest uppercase mb-1.5">DNA Resemblance Report</p>
              <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20 mb-4">
                ✓ {results.analyzed_count} FEATURES ANALYZED
              </span>
              <div className="flex items-center justify-center gap-4 mb-5">
                <p className="text-sm font-semibold text-[#D4A853]">{nameA || "Person A"}</p>
                <HelixIcon size={24} />
                <p className="text-sm font-semibold text-[#53A8D4]">{nameB || "Person B"}</p>
              </div>
              <ScoreRing score={results.overall_score} size={160} label="Overall Match" />
              <p className="text-[15px] text-[#C8D1DA] mt-4 leading-relaxed max-w-[320px] mx-auto">{results.verdict}</p>
            </div>

            {/* FREE feature scores */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 mb-4">
              <h3 className="text-[13px] font-bold text-[#B8C4D0] tracking-widest uppercase mb-2">Feature Scores</h3>
              {selectedFeatures.map((id, i) => {
                const f = FEATURES.find((x) => x.id === id)!;
                const score = results.features?.[id]?.score;
                if (score === null || score === undefined) return null;

                // Show free features normally, locked features blurred
                if (isLockedFeature(id)) return (
                  <div key={id} className="flex items-center gap-3 py-2.5 relative">
                    <span className="text-xl w-7 text-center opacity-30">{f.icon}</span>
                    <div className="flex-1 blur-sm opacity-40">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[13px] font-semibold text-[#C8D1DA]">{f.label}</span>
                        <span className="text-[13px] font-bold text-[#D4A853]">??%</span>
                      </div>
                      <div className="h-1.5 bg-white/[0.06] rounded-full">
                        <div className="h-full rounded-full bg-[#D4A853]" style={{ width: "60%" }} />
                      </div>
                    </div>
                    <span className="text-base">🔒</span>
                  </div>
                );

                return <FeatureBar key={id} icon={f.icon} label={f.label} score={score} delay={i * 150} />;
              })}
            </div>

            {/* Paywall CTA if any locked features exist */}
            {selectedFeatures.some(id => isLockedFeature(id)) && (
              <button onClick={() => setShowPaywall(true)}
                className="w-full py-4 rounded-2xl border border-[#D4A853]/30 bg-[#D4A853]/[0.08] text-[#D4A853] font-bold text-sm mb-4 hover:bg-[#D4A853]/15 transition-colors">
                🔐 Unlock {selectedFeatures.filter(id => isLockedFeature(id)).length} Hidden Scores — From $2.99
              </button>
            )}

            {/* Free detailed comparison */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 mb-4">
              <h3 className="text-[13px] font-bold text-[#B8C4D0] tracking-widest uppercase mb-3">Detailed Comparison</h3>
              {selectedFeatures.map((id) => {
                const f = FEATURES.find((x) => x.id === id)!;
                const r = results.features?.[id];
                const photos = featurePhotos[id];
                if (!r || r.score === null) return null;

                if (isLockedFeature(id)) return (
                  <div key={id} className="py-3.5 border-b border-white/[0.04] last:border-b-0 relative overflow-hidden">
                    <div className="blur-sm opacity-30 pointer-events-none">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-lg">{f.icon}</span>
                        <span className="text-sm font-bold text-[#D4A853]">{f.label} — ??%</span>
                      </div>
                      <p className="text-[13px] text-[#9BA8B6]">Premium analysis hidden. Unlock to see detailed comparison notes.</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl">🔒</span>
                    </div>
                  </div>
                );

                const color = r.score >= 75 ? "#4ADE80" : r.score >= 50 ? "#D4A853" : r.score >= 30 ? "#F97316" : "#EF4444";
                return (
                  <div key={id} className="py-3.5 border-b border-white/[0.04] last:border-b-0">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-lg">{f.icon}</span>
                      <span className="text-sm font-bold" style={{ color }}>{f.label} — {r.score}%</span>
                    </div>
                    {photos?.a && photos?.b && (
                      <div className="flex gap-2 mb-2">
                        <img src={photos.a} className="w-14 h-14 rounded-lg object-cover border-2 border-[#D4A853]" />
                        <div className="flex-1 flex items-center justify-center">
                          <div className="w-7 h-0.5 rounded-full" style={{ background: color }} />
                        </div>
                        <img src={photos.b} className="w-14 h-14 rounded-lg object-cover border-2 border-[#53A8D4]" />
                      </div>
                    )}
                    <p className="text-[13px] text-[#9BA8B6] leading-relaxed">{r.note}</p>
                    {r.subDetail && <p className="text-[11px] text-[#4A5568] font-mono mt-1.5">Sub-scores: {r.subDetail}</p>}
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3.5 mb-6">
              <p className="text-[11px] text-[#4A5568] leading-relaxed">
                🔒 KinDNA is for entertainment only. Not genetic, medical, or legal evidence.
              </p>
            </div>

            <button onClick={reset} className={btnPrimary}>🔄 New Comparison</button>
          </div>
        )}

        {/* STEP 6: ERROR */}
        {step === 6 && (
          <div className="pt-16 text-center animate-fade-in">
            <div className="w-[70px] h-[70px] rounded-full mx-auto mb-5 bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center text-3xl">⚠️</div>
            <h2 className="font-display text-xl font-bold mb-3">Analysis Failed</h2>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5 mb-6 text-left max-h-[180px] overflow-y-auto">
              <p className="text-[11px] text-red-400 font-mono whitespace-pre-wrap break-all leading-relaxed">{errorMsg}</p>
            </div>
            <button onClick={() => { setErrorMsg(""); analyzeAll(); }} className={btnPrimary}>🔄 Try Again</button>
            <button onClick={() => { setErrorMsg(""); setStep(3); }} className={`${btnSecondary} mt-3`}>← Back to Review</button>
          </div>
        )}
      </div>
    </div>
  );
}
