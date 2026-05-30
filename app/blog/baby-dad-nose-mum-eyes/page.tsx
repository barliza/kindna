import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Your Baby Have Dad's Nose or Mum's Eyes? Here's How to Tell | KinDNA",
  description: "Some facial features are almost always inherited from one parent. Learn the genetics behind eyes, nose, ears, and lips — and how to identify which parent your baby got each feature from.",
  keywords: ["baby has dad nose", "baby has mum eyes", "which parent does baby look like", "genetics facial features baby", "inherited features"],
};

export default function Post2() {
  return (
    <BlogLayout title="Does Your Baby Have Dad's Nose or Mum's Eyes? Here's How to Tell" date="May 30, 2026" readTime="5 min read" emoji="👁️">

      <p>
        "She has your eyes" is one of the most common things new parents hear. But is it actually true? And how do you tell whether a feature genuinely came from one parent rather than the other? The answer lies in understanding which features are easiest to trace and which are most complex genetically.
      </p>

      <h2>The Features Most Likely to Come From One Parent</h2>
      <p>
        <strong>Ear lobe attachment</strong> is one of the clearest genetic markers in faces. Detached earlobes (the classic hanging lobe) are dominant over attached earlobes. If one parent has detached lobes and the baby does too, there's a strong genetic connection. Attached lobes require both parents to carry the recessive gene.
      </p>
      <p>
        <strong>Nose bridge width</strong> follows a similar pattern. A wider nose bridge tends to be dominant. If dad has a wide bridge and the baby does too, that's meaningful. A narrow bridge requires recessive genes from both sides.
      </p>
      <p>
        <strong>Eye shape</strong> — not color — carries strong inheritance patterns. The almond vs. round shape, the degree of hooding, and the presence of an epicanthal fold are all largely genetic and relatively clear to compare.
      </p>

      <h2>The Features Most Likely to Be Mixed</h2>
      <p>
        <strong>Overall face shape</strong> is almost always a blend. The oval, round, square, or heart shape of the face is determined by bone structure which develops over years. In infancy you're seeing soft tissue and fat distribution, not the final bone structure. Don't draw firm conclusions about face shape before age 2-3.
      </p>
      <p>
        <strong>Skin tone</strong> is one of the most complex traits genetically, involving over 100 genes. A child's skin tone can fall anywhere between the two parents, and can even be darker or lighter than either parent depending on which combination of genes they received.
      </p>
      <p>
        <strong>Lip shape</strong> is highly polygenic and influenced by both parents. However, the cupid's bow — the double curve of the upper lip — often shows a clear resemblance to one parent.
      </p>

      <h2>Why Babies Often "Look Like Dad" First</h2>
      <p>
        There's an interesting evolutionary theory about why newborns often seem to resemble their fathers more than their mothers in the first weeks of life. The thinking is that this reassured fathers of paternity in ancestral environments, encouraging paternal investment. Whether or not the theory is correct, it's well-documented that this perception fades over time — by 1 year old, babies tend to be judged as resembling both parents more equally.
      </p>
      <p>
        So if your newborn "clearly looks just like dad" right now, don't be surprised if that changes. The resemblance often shifts toward mum as months pass.
      </p>

      <h2>How to Make the Comparison Accurately</h2>
      <p>
        The mistake most people make is comparing full face photos. When you look at a full face, your brain is dominated by size, expression, and overall impression rather than actual structural similarity. A baby is much smaller, has different proportions, and often a different expression — so full face comparisons are unreliable.
      </p>
      <p>
        A much better approach is to compare isolated close-up shots of specific features. Take a close-up photo of just the baby's nose. Take a close-up of dad's nose. Compare them directly. You'll see similarities and differences you completely missed in the full face photo.
      </p>
      <p>
        This is the core idea behind KinDNA — instead of one full-face comparison, you scan each feature separately. Eyes vs. eyes. Nose vs. nose. Ears vs. ears. You get an actual score for each feature and see which parent the baby resembles most on each one. It's far more accurate and much more fun to see the breakdown.
      </p>

      <div className="my-8 p-6 bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-2xl text-center">
        <p className="text-[#E8C97A] font-bold text-lg mb-2">👁️ Compare Feature by Feature — Free</p>
        <p className="text-[#9BA8B6] text-sm mb-4">Scan eyes, nose, ears, and more. See exactly which parent each feature came from.</p>
        <Link href="/scan" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-sm">
          Start Free Comparison →
        </Link>
      </div>

      <h2>When to Revisit the Comparison</h2>
      <p>
        The best times to compare features are at birth (for ear shape and nose bridge), at 3-6 months (for face shape, smile, and skin tone), at 1 year (for a fuller picture), and then annually. Features continue developing through childhood and even into the teenage years.
      </p>
      <p>
        Many parents are surprised to find that the feature they were sure came from one parent at 3 months looks completely different by the time the child is 5. Genetics is a long game.
      </p>

    </BlogLayout>
  );
}

function BlogLayout({ title, date, readTime, emoji, children }: {
  title: string; date: string; readTime: string; emoji: string; children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0D1117]" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />
      <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
            <path d="M20 4C14 4 10 10 10 16C10 22 14 24 20 24C26 24 30 26 30 32C30 36 26 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M20 4C26 4 30 10 30 16C30 22 26 24 20 24C14 24 10 26 10 32C10 36 14 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
            <circle cx="20" cy="4" r="2" fill="#D4A853" /><circle cx="20" cy="24" r="2" fill="#D4A853" /><circle cx="20" cy="38" r="2" fill="#D4A853" />
          </svg>
          <span style={{ background: "linear-gradient(135deg, #D4A853, #E8C97A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 800, fontSize: 18 }}>KinDNA</span>
        </Link>
        <Link href="/blog" style={{ color: "#6B7B8D", fontSize: 14, textDecoration: "none" }}>← All Posts</Link>
      </nav>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/blog" style={{ color: "#6B7B8D", fontSize: 13, textDecoration: "none" }}>Blog</Link>
          <span style={{ color: "#4A5568", margin: "0 8px" }}>·</span>
          <span style={{ color: "#6B7B8D", fontSize: 13 }}>{date}</span>
          <span style={{ color: "#4A5568", margin: "0 8px" }}>·</span>
          <span style={{ color: "#6B7B8D", fontSize: 13 }}>{readTime}</span>
        </div>
        <div style={{ fontSize: 56, marginBottom: 16 }}>{emoji}</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "#E0E6ED", lineHeight: 1.2, marginBottom: 32 }}>{title}</h1>
        <div style={{ color: "#B8C4D0", lineHeight: 1.8, fontSize: 17 }} className="blog-content">
          <style>{`.blog-content p { margin-bottom: 20px; } .blog-content h2 { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #E0E6ED; margin: 40px 0 16px; } .blog-content strong { color: #D4A853; font-weight: 600; } .blog-content em { color: #C8D1DA; font-style: italic; }`}</style>
          {children}
        </div>
      </article>
    </div>
  );
}
