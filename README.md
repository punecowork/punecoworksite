# Pune Cowork - Virtual Office Solutions

**GitHub Repository:** https://github.com/punecowork/punecoworksite

Production-ready Next.js website for virtual office services in Pune, targeting Hinjewadi IT Park professionals and startups.

## Features

- **13 Optimized Pages**: Homepage, Services, Pricing, Locations, About, Contact, Landing, Blog, etc.
- **PWA Support**: Installable on mobile devices with offline functionality
- **WhatsApp Integration**: Business chatbot for lead generation
- **Pune-Specific SEO**: Targeting "virtual office Pune", "GST registration Hinjewadi"
- **Schema Markup**: LocalBusiness, FAQ, Service, and Breadcrumb schemas
- **Performance Optimized**: Target 100 PageSpeed score
- **Mobile-First**: Touch-friendly design for 70% mobile traffic

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/punecowork/punecoworksite.git
cd punecoworksite

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Edit .env.local with your credentials
# Add WhatsApp API keys, Google Sheets credentials, etc.

# Run development server
npm run dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Direct Import (Recommended)

1. Visit [vercel.com/new](https://vercel.com/new)
2. Import from: `https://github.com/punecowork/punecoworksite`
3. Add environment variables in Vercel dashboard
4. Click "Deploy"
5. Your site will be live at `your-project.vercel.app`

Alternatively, click here: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/punecowork/punecoworksite)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Environment Variables to Add in Vercel

- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_VERIFY_TOKEN`
- `GOOGLE_SHEETS_CREDENTIALS`
- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Project Structure

```
pune-cowork/
├── app/                      # Next.js 14 App Router
│   ├── page.tsx             # Homepage
│   ├── pricing/             # Pricing page
│   ├── landing/             # Google Ads landing page
│   ├── services/            # Service pages
│   ├── contact/             # Contact page
│   ├── about/               # About page
│   ├── locations/           # Locations page
│   ├── blog/                # Blog pages
│   ├── thank-you/           # Thank you page
│   ├── api/                 # API routes
│   │   ├── whatsapp-webhook/  # WhatsApp webhook
│   │   └── contact/         # Contact form handler
│   └── layout.tsx           # Root layout
├── components/              # Reusable components
│   ├── ui/                  # UI primitives
│   ├── layout/              # Layout components
│   └── sections/            # Page sections
├── lib/                     # Utilities
│   ├── seo.ts              # SEO helpers
│   ├── analytics.ts        # GA4 tracking
│   ├── whatsapp.ts         # WhatsApp logic
│   └── google-sheets.ts    # Lead storage
├── public/                  # Static assets
│   ├── manifest.json       # PWA manifest
│   ├── icons/              # App icons
│   └── images/             # Images
└── styles/                  # Global styles
```

## Key Technologies

- **Next.js 14**: App Router, Server Components
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first styling
- **PWA**: Progressive Web App support
- **Vercel**: Deployment platform
- **Meta Cloud API**: WhatsApp Business integration
- **Google Sheets API**: Lead storage

## SEO Strategy

### Target Keywords
- Primary: "virtual office Pune" (2,400 searches/month)
- Secondary: "GST registration Hinjewadi", "business address Pune"
- Local: "coworking space near Hinjewadi IT Park"

### Expected Results
- **Month 1**: Position 10-20, 20-30 leads
- **Month 3**: Top 5, 80-100 leads, 5-10 clients
- **Month 6**: Top 3, 150-200 leads, 15-25 clients

## WhatsApp Integration

The chatbot handles:
1. Virtual office inquiries
2. Pricing information
3. GST registration help
4. Lead collection (name, mobile, business type)
5. Agent handover for complex queries

### Setup WhatsApp Cloud API

1. Create Meta Business Account
2. Add WhatsApp Business product
3. Get Phone Number ID and Access Token
4. Configure webhook URL: `https://yourdomain.com/api/whatsapp-webhook`
5. Add tokens to `.env.local`

## Google Sheets Lead Storage

1. Create Google Cloud project
2. Enable Google Sheets API
3. Create service account
4. Download JSON credentials
5. Share spreadsheet with service account email
6. Add credentials to `.env.local`

## Local SEO Checklist

- [ ] Claim Google My Business (Wadmukhwadi, Pune)
- [ ] List on Justdial, Sulekha, IndiaMART
- [ ] Get reviews on GMB (target 20+ reviews)
- [ ] Create location-specific content (Hinjewadi focus)
- [ ] Build local backlinks (Pune startup directories)
- [ ] Add Marathi keywords for local reach

## Performance Optimizations

- Image lazy loading with Next.js Image
- Code splitting and dynamic imports
- Edge Functions for API routes
- Automatic static optimization
- PWA caching strategy
- CDN via Vercel Edge Network

## Cost Breakdown

- Vercel: **FREE** (Hobby tier sufficient)
- Domain: ₹800/year
- WhatsApp: **FREE** (Meta Cloud API)
- Google Sheets: **FREE**
- Total: **~₹70/month**

## Support

For issues or questions:
- Email: info@punecowork.com
- Phone: +919876543210
- Location: Wadmukhwadi, Chakan, Pune - 410501

## License

Copyright © 2026 Pune Cowork. All rights reserved.
