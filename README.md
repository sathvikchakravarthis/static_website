# Data Services Portfolio Website

A production-ready portfolio website built with Next.js App Router + TypeScript + Tailwind CSS + Framer Motion.

## Overview

This site showcases four core services:
- Power BI dashboards & reporting
- Python automation (ETL, scraping, integrations, scheduling)
- Customized trading bot architecture and building
- Advanced data analysis (EDA, forecasting, ML, experimentation)

### Included pages
- Home (`/`)
- Services (`/services`)
- Case studies list (`/case-studies`)
- Case study detail (`/case-studies/[slug]`)
- About (`/about`)
- Contact (`/contact`)
- Privacy (`/privacy`)
- Terms (`/terms`)

### Key features
- Dark/light mode toggle
- Content-driven architecture (`src/content/*`)
- SEO metadata + Open Graph + Twitter cards
- Sitemap + robots routes
- Contact API with validation + in-memory rate limit
- Resend integration + local JSON fallback for dev
- Optional Plausible analytics hook via env flag

## Local development

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Build and run production

```bash
npm run build
npm run start
```

## Deployment (Vercel-friendly)

1. Push repository to GitHub.
2. Import project into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

No additional adapter configuration is required.

## How to edit content

Edit content files directly:
- `src/content/services.ts`
- `src/content/caseStudies.ts`
- `src/content/testimonials.ts`
- `src/content/faqs.ts`

UI components and page structure stay untouched while marketing copy and case-study details are changed in one place.

## Environment variables

See `.env.example` for all options.

- `NEXT_PUBLIC_ENABLE_ANALYTICS` – set to `true` to enable analytics script.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` – domain for Plausible tracking.
- `RESEND_API_KEY` – enables email delivery from `/api/contact`.
- `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` – sender and recipient for contact form emails.
