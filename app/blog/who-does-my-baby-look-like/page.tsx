import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who Does My Baby Look Like? A Feature-by-Feature Guide | KinDNA",
  description: "Every new parent asks who their baby looks like. Learn how to compare your baby's eyes, nose, ears, and face shape to each parent — feature by feature.",
  keywords: ["who does my baby look like", "baby resemblance test", "does my baby look like me", "baby looks like dad", "baby face comparison"],
};

export default function Post1() {
  return (
    <BlogLayout
      title="Who Does My Baby Look Like? A Feature-by-Feature Guide"
      date="May 30, 2026"
      readTime="6 min read"
      emoji="👶"
    >
      <p>
        The moment you hold your newborn, the question is almost automatic: <em>Who does this baby look like?</em> You scan the tiny face searching for familiar features — your partner's eyes, your nose, your mother-in-law's ears. It's one of the most instinctive things humans do, and there's a reason for it.
      </p>
      <p>
        But comparing a baby's features to a parent's isn't always straightforward. Newborns change dramatically in the first weeks and months. Features that look like mum at week one can look like dad by month three. Here's how to actually compare — feature by feature.
      </p>

      <h2>Start With the Features That Show Earliest</h2>
      <p>
        Not all features develop at the same pace. Some physical traits are visible and stable from birth, while others emerge over months or even years. Start with these when making early comparisons:
      </p>
      <p>
        <strong>Ear shape</strong> is one of the most reliable early indicators. The overall shape of the ear — whether the earlobe is attached or detached, whether the helix curls tightly or loosely — is largely determined at birth and changes very little. Compare your baby's ears directly against both parents and you'll often see a clear match.
      </p>
      <p>
        <strong>Nose bridge</strong> is another early stable feature. The width of the nose bridge and whether the nose sits flat or raised is visible from early on. The tip of the nose, however, changes significantly in the first year, so focus on the bridge.
      </p>
      <p>
        <strong>Eye shape</strong> (not color) is a reliable early comparison. Eye color can change dramatically in the first two years, but the actual shape of the eye — almond, round, wide-set, close-set — tends to be visible early. Compare the geometry, not the color.
      </p>

      <h2>Features to Compare Later</h2>
      <p>
        <strong>Face shape</strong> is difficult to assess accurately until the baby loses its newborn puffiness, usually around 3-6 months. By then the jaw, cheekbones, and overall facial structure become clearer.
      </p>
      <p>
        <strong>Smile and lips</strong> become more comparable around 4-6 weeks when babies start social smiling. At that point you can start to see the width of the smile and the shape of the lip cupid's bow.
      </p>
      <p>
        <strong>Skin tone</strong> settles by 3-6 months in most cases, though it can continue developing for longer in darker-skinned babies.
      </p>

      <h2>The Science Behind It</h2>
      <p>
        Facial features are polygenic — meaning they're determined by many genes, not just one. This is why two siblings from the same parents can look completely different, and why a child can look like a grandparent they never met more than either of their parents.
      </p>
      <p>
        Some features show strong dominance patterns. Wide nose bridges tend to be dominant over narrow ones. Attached earlobes are recessive, meaning a baby needs two copies of the recessive gene to have them. But most facial features are more complex than simple dominant/recessive patterns.
      </p>

      <h2>How to Compare Accurately</h2>
      <p>
        The most reliable comparison method is to photograph each feature close-up rather than comparing full faces. A full face comparison is dominated by size differences and general first impressions. When you isolate the nose, or just the eyes, you can make a much more precise structural comparison.
      </p>
      <p>
        This is exactly the approach KinDNA takes — rather than uploading two full photos and getting a single score, you photograph each feature individually (eyes, nose, ears, smile, face shape, hands, feet) and compare them one at a time. The result is a much more accurate and detailed picture of who your baby actually looks like.
      </p>

      <h2>What If the Baby Looks Like Neither Parent?</h2>
      <p>
        This is completely normal and more common than people realize. Genetic expression doesn't simply average out between two parents — it recombines in complex ways that can surface traits from grandparents, great-grandparents, or other ancestors. You might see your grandmother's nose on your child's face even though neither you nor your partner have it.
      </p>
      <p>
        It can also simply be a matter of timing. Many babies who "look like neither parent" at birth develop stronger resemblance as they grow older and features stabilize.
      </p>

      <div className="my-8 p-6 bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-2xl text-center">
        <p className="text-[#E8C97A] font-bold text-lg mb-2">🔬 Try KinDNA Free</p>
        <p className="text-[#9BA8B6] text-sm mb-4">Compare your baby's features to yours — eyes, nose, ears, hands, and more. Feature by feature, not just a full face.</p>
        <Link href="/scan" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-sm">
          Start Free Comparison →
        </Link>
      </div>

      <h2>The Bottom Line</h2>
      <p>
        Comparing a baby to their parents is one of the most natural human instincts — it's how families build identity and connection. The best approach is to be patient, compare specific features rather than overall impressions, and return to the comparison at 3, 6, and 12 months as features stabilize.
      </p>
      <p>
        And remember: whoever your baby looks like most today may not be who they resemble most in a decade. Genetic expression is a long, fascinating process.
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
        <Link href="/blog" style={{ color: "#6B7B8D", fontSize: 14 }}>← All Posts</Link>
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
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800, color: "#E0E6ED", lineHeight: 1.2, marginBottom: 32 }}>
          {title}
        </h1>

        <div style={{
          color: "#B8C4D0", lineHeight: 1.8, fontSize: 17,
          // Blog content styles
        }} className="blog-content">
          <style>{`
            .blog-content p { margin-bottom: 20px; }
            .blog-content h2 { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #E0E6ED; margin: 40px 0 16px; }
            .blog-content strong { color: #D4A853; font-weight: 600; }
            .blog-content em { color: #C8D1DA; font-style: italic; }
          `}</style>
          {children}
        </div>
      </article>
    </div>
  );
}
