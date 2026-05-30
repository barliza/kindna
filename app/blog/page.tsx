import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KinDNA Blog — Family DNA, Resemblance & Genetics",
  description: "Learn about family resemblance, DNA genetics, and how features pass from parents to children. Free guides and tools from KinDNA.",
  keywords: ["family resemblance", "DNA genetics", "baby looks like", "facial features inheritance", "kindna blog"],
};

const posts = [
  {
    slug: "who-does-my-baby-look-like",
    title: "Who Does My Baby Look Like? A Feature-by-Feature Guide",
    excerpt: "Every new parent asks the same question the moment they hold their baby. Here's how to find out — feature by feature.",
    date: "May 30, 2026",
    readTime: "6 min read",
    emoji: "👶",
    tags: ["Baby", "Resemblance", "Family"],
  },
  {
    slug: "baby-dad-nose-mum-eyes",
    title: "Does Your Baby Have Dad's Nose or Mum's Eyes? Here's How to Tell",
    excerpt: "Some features are almost always inherited from one parent. Learn the genetics behind who your baby got what from.",
    date: "May 30, 2026",
    readTime: "5 min read",
    emoji: "👁️",
    tags: ["Genetics", "Baby", "Parents"],
  },
  {
    slug: "best-family-resemblance-apps-2026",
    title: "Best Free Family Resemblance Apps in 2026 (We Tested All of Them)",
    excerpt: "We tested every resemblance app on the market so you don't have to. Here's what actually works — and what doesn't.",
    date: "May 30, 2026",
    readTime: "7 min read",
    emoji: "📱",
    tags: ["Apps", "Comparison", "Review"],
  },
  {
    slug: "how-dna-determines-appearance",
    title: "How DNA Actually Determines Which Parent You Look Like",
    excerpt: "The science behind why you look more like your mum or your dad — and why siblings can look completely different.",
    date: "May 30, 2026",
    readTime: "8 min read",
    emoji: "🧬",
    tags: ["Science", "DNA", "Genetics"],
  },
  {
    slug: "dna-resemblance-test-east-africa",
    title: "Free DNA Resemblance Test for Tanzanian and East African Families",
    excerpt: "A private, free alternative to expensive DNA tests — perfect for East African families wanting to see family resemblance without the cost.",
    date: "May 30, 2026",
    readTime: "5 min read",
    emoji: "🌍",
    tags: ["East Africa", "Tanzania", "Free Tool"],
  },
];

function HelixIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20 4C14 4 10 10 10 16C10 22 14 24 20 24C26 24 30 26 30 32C30 36 26 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 4C26 4 30 10 30 16C30 22 26 24 20 24C14 24 10 26 10 32C10 36 14 38 20 38" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="20" cy="4" r="2" fill="#D4A853" /><circle cx="20" cy="24" r="2" fill="#D4A853" /><circle cx="20" cy="38" r="2" fill="#D4A853" />
    </svg>
  );
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-3">
          <HelixIcon size={28} />
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#D4A853] to-[#E8C97A] bg-clip-text text-transparent">KinDNA</span>
        </Link>
        <Link href="/scan" className="px-5 py-2 rounded-full bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold text-sm">
          Start Free Scan
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 text-[#D4A853] text-xs font-semibold mb-4">
            🧬 KinDNA Blog
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Family DNA &amp; Resemblance Guides
          </h1>
          <p className="text-lg text-[#6B7B8D] max-w-2xl">
            Learn about genetics, family resemblance, and how to discover who your baby looks like — feature by feature.
          </p>
        </div>

        {/* Featured post */}
        <Link href={`/blog/${posts[0].slug}`}
          className="block bg-gradient-to-br from-[#D4A853]/10 to-transparent border border-[#D4A853]/20 rounded-2xl p-8 mb-8 hover:border-[#D4A853]/40 transition-colors group">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{posts[0].emoji}</span>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D4A853]/15 text-[#D4A853] text-xs font-semibold mb-2">FEATURED</span>
              <h2 className="font-display text-2xl font-bold text-white group-hover:text-[#D4A853] transition-colors">{posts[0].title}</h2>
            </div>
          </div>
          <p className="text-[#6B7B8D] mb-4 leading-relaxed">{posts[0].excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-[#4A5568]">
            <span>{posts[0].date}</span>
            <span>·</span>
            <span>{posts[0].readTime}</span>
            <span className="text-[#D4A853] font-semibold ml-auto group-hover:translate-x-1 transition-transform">Read more →</span>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-[#D4A853]/20 transition-colors group">
              <span className="text-3xl block mb-3">{post.emoji}</span>
              <h2 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#D4A853] transition-colors leading-snug">{post.title}</h2>
              <p className="text-sm text-[#6B7B8D] mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-[#4A5568]">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">{tag}</span>
                  ))}
                </div>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-white/[0.02] border border-white/[0.06] rounded-2xl p-10">
          <HelixIcon size={40} />
          <h2 className="font-display text-2xl font-bold text-white mt-4 mb-2">Ready to See Your DNA Connection?</h2>
          <p className="text-[#6B7B8D] mb-6">Free first comparison. No account needed.</p>
          <Link href="/scan" className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8862D] text-[#0D1117] font-bold">
            🔬 Start Free Scan
          </Link>
        </div>
      </div>
    </div>
  );
}
