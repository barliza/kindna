import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How DNA Actually Determines Which Parent You Look Like | KinDNA",
  description: "The science behind why you look more like your mum or your dad — and why siblings can look completely different from each other despite sharing the same parents.",
  keywords: ["how DNA determines appearance", "why do I look like my dad", "genetics facial features", "DNA face inheritance", "why do siblings look different"],
};

export default function Post4() {
  return (
    <BlogLayout title="How DNA Actually Determines Which Parent You Look Like" date="May 30, 2026" readTime="8 min read" emoji="🧬">

      <p>
        You've probably noticed that some siblings look almost identical while others barely resemble each other at all. Or that you look nothing like your parents but are the spitting image of a grandparent. DNA inheritance is far more complex — and far more interesting — than most people realize.
      </p>

      <h2>It's Not 50/50</h2>
      <p>
        The common assumption is that you get exactly half your traits from each parent. In terms of raw DNA, this is roughly true — you do inherit approximately 50% of your DNA from each parent. But the <em>expression</em> of those genes is not evenly distributed across features.
      </p>
      <p>
        Different features are controlled by different genes, and some genes are dominant while others are recessive. A dominant gene only needs one copy to express itself, while a recessive gene needs two copies — one from each parent — to show up. This means some of your features can look almost entirely like one parent while others look almost entirely like the other.
      </p>

      <h2>Polygenic Traits Are the Key</h2>
      <p>
        Most facial features aren't controlled by a single gene — they're polygenic, meaning many genes contribute to the final result. Skin tone involves over 100 genes. Height involves hundreds. Eye color, once thought to be simple, involves at least 50 genes.
      </p>
      <p>
        The practical implication is that polygenic traits can produce results that look like neither parent directly. You can receive a specific combination of gene variants from both parents that creates a feature unlike either of theirs. This is why your nose might not look like dad's or mum's — it might be a combination that hasn't appeared in your family for generations.
      </p>

      <h2>Why Siblings Look Different</h2>
      <p>
        When your parents had children, each child received a random selection of 50% of each parent's DNA. The randomness here is key — it's not the same 50% each time. Each sibling is a unique genetic draw.
      </p>
      <p>
        Think of each parent's DNA as a deck of cards. Each time a child is conceived, both decks are shuffled and half the cards from each deck are dealt. Two children from the same parents can end up with very different hands — different enough to produce quite different physical appearances.
      </p>
      <p>
        This also explains why identical twins look identical — they came from the same fertilized egg and share the same genetic draw. Fraternal twins, like regular siblings, each got a different draw.
      </p>

      <h2>The Grandparent Effect</h2>
      <p>
        Have you ever heard someone say "she looks just like her grandmother"? This is entirely real and genetically explainable. A feature might be recessive — requiring two copies of a gene to appear. A grandparent might have had it, their child (your parent) might carry one copy but not show it, and then you received a copy from each of your parents and the feature appears in you.
      </p>
      <p>
        This is why family resemblance can skip generations entirely and then reappear. It's not magic — it's recessive genetics expressing itself when the right combination finally comes together.
      </p>

      <h2>Which Features Are Most Heritable?</h2>
      <p>
        Research suggests that <strong>nose shape</strong> is among the most heritable facial features — studies have shown heritability estimates of around 66% for nose bridge width and nose tip shape. This means if you want to find the strongest genetic connection between a parent and child, the nose is often your best starting point.
      </p>
      <p>
        <strong>Ear shape</strong> is also highly heritable, particularly the attachment vs. detachment of the earlobe. This is a simpler genetic trait controlled by fewer genes.
      </p>
      <p>
        <strong>Eye shape</strong> (not color) has heritability estimates around 50-60%. The spacing, shape, and degree of hooding are moderately heritable.
      </p>
      <p>
        <strong>Lip shape</strong>, particularly the fullness and the cupid's bow, is also moderately heritable at around 50%.
      </p>
      <p>
        <strong>Overall face shape</strong> is complex and influenced by both genetics and environment (particularly nutrition during development). Heritability is moderate at around 50-60%.
      </p>

      <div className="my-8 p-6 bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-2xl text-center">
        <p className="text-[#E8C97A] font-bold text-lg mb-2">🧬 See the Science in Action</p>
        <p className="text-[#9BA8B6] text-sm mb-4">Compare nose, ears, eyes and more between any two family members. Free first comparison.</p>
        <Link href="/scan" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-sm">
          Start Free Comparison →
        </Link>
      </div>

      <h2>Environment Matters Too</h2>
      <p>
        Genetics isn't destiny. Environmental factors — nutrition, health conditions during pregnancy, sun exposure, and lifestyle — all influence physical appearance. A child who looks like dad at age 5 might look more like mum at age 25 simply because of the way their features developed in response to their environment.
      </p>
      <p>
        This is why resemblance comparisons are most meaningful when done over time, revisiting them as the child grows. The genetic picture becomes clearer as features stabilize and the influence of childhood growth patterns settles.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        DNA inheritance is a complex, fascinating process that produces unique individuals even from the same parents. The features most reliably inherited are the nose, ears, and eye shape. The most complex are overall face shape, skin tone, and height. And the most surprising thing about genetics is how often traits skip generations before reappearing — making every child a unique expression of a much larger family history.
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
