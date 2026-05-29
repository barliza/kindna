# 🧬 KinDNA — Family DNA Scanner

Scan and compare body features between family members with AI-powered resemblance scoring. Feature by feature. Head to toe.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up your API key
cp .env.local.example .env.local
# Edit .env.local and add your Anthropic API key

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.
Go to [http://localhost:3000/scan](http://localhost:3000/scan) to use the scanner.

## Project Structure

```
kindna/
├── app/
│   ├── layout.tsx          # Root layout with SEO meta tags
│   ├── page.tsx            # Landing page (marketing)
│   ├── globals.css         # Tailwind + brand styles
│   ├── scan/
│   │   └── page.tsx        # Main scanner app (client component)
│   └── api/
│       └── analyze/
│           └── route.ts    # Server-side Anthropic API proxy
├── lib/
│   ├── features.ts         # 12 body features with sub-criteria
│   └── types.ts            # TypeScript interfaces
├── components/             # Shared components (future)
├── public/                 # Static assets
├── CLAUDE.md               # Project memory for Claude Code
└── .env.local.example      # Environment variables template
```

## Key Architecture

- **API key is server-side only** — never exposed to the browser
- **Images compressed client-side** to max 800px JPEG before upload
- **Sub-dimensional scoring** — each feature scored across 4 specific criteria
- **Dual-pass verification** with retry mechanism for consistency
- **temperature: 0** for deterministic AI output

## Deployment

```bash
# Deploy to Vercel
npx vercel

# Set environment variable in Vercel dashboard:
# ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
```

## Roadmap

- [ ] Phase 1: Ship to kindna.app (Vercel)
- [ ] Phase 2: Stripe payments (freemium gate)
- [ ] Phase 3: Share cards & viral mechanics
- [ ] Phase 4: User accounts & comparison history
- [ ] Phase 5: DNA lab affiliates & premium features
