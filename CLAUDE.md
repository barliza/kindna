# KinDNA — Family DNA Scanner

## What is this?
KinDNA (kindna.app) is a body-part-by-body-part resemblance scanner. Users photograph individual features (eyes, nose, ears, hands, feet, etc.) of two people and get AI-powered similarity scores per feature.

## Tech Stack
- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS + custom brand tokens
- **AI**: Anthropic Claude Sonnet 4 via server-side API route
- **Hosting**: Vercel
- **Payments**: Stripe (Phase 2)

## Architecture Decisions
- API key lives server-side only (app/api/analyze/route.ts)
- Images compressed client-side to max 800px JPEG before upload
- Each feature gets its own API call with feature-specific sub-dimensional scoring prompt
- Scores calculated mathematically from 4 sub-dimensions per feature (never trust AI's holistic number)
- 2-pass averaging per feature + retry mechanism (up to 3 attempts)
- temperature: 0 for maximum consistency

## Brand
- **Colors**: Gold #D4A853, Blue #53A8D4, BG #0D1117
- **Fonts**: Playfair Display (headings), DM Sans (body)
- **Tone**: Premium, scientific feel. "DNA" in all copy.
- **Icon**: DNA helix motif

## Key Learnings (from prototype)
- Vision models refuse baby photos unless prompt explicitly frames the app as family-friendly
- Sub-dimensional scoring (4 criteria per feature) reduced Face Shape variance from ±15pts to ±4pts
- Overall score must be calculated from features, never from AI's holistic judgment
- Images must be compressed before API call — phone photos (5MB+) cause failures
- Always convert to JPEG for consistent media_type

## File Structure
- app/page.tsx — Landing page
- app/scan/page.tsx — Main scanner app
- app/api/analyze/route.ts — Server-side Anthropic API proxy
- components/ — Shared UI components
- lib/features.ts — Feature definitions with sub-criteria
- lib/types.ts — TypeScript types

## Git Workflow
- Commit after every confirmed working state
- Branch naming: feature/xxx, fix/xxx
