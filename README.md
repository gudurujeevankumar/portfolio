# Guduru Jeevan Kumar — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-20232a?style=flat&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, design-forward developer portfolio website built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Motion**. Designed to demonstrate both engineering depth and refined aesthetic sensibilities, featuring an Apple-inspired liquid-glass macOS Dock navigation, interactive canvas telemetry, data-driven architecture, and real-time YouTube Data API v3 integration.

> [!NOTE]
> Repository history includes structured architectural milestones reconstructed from the completed codebase to document the project's technical organization and evolution. These milestones are not intended to represent a verbatim chronological record of the original development process.

---

## 🌟 Key Highlights

- **Liquid-Glass macOS Dock:** Proximity-based magnification physics, smooth spring animations, backdrop blur, and route indicator tracking.
- **Deep Architectural Case Studies:** Project detail pages documenting real engineering challenges, system architectures, trade-offs, and performance benchmarks.
- **Authentic Engineering Narrative:** Origin story chronicling the journey from zero programming knowledge to building full-stack applications.
- **Real-Time YouTube Integration:** Route handler communicating with the YouTube Data API v3 with resilient scraping fallback and client-side modal video streaming.
- **Bespoke Design System:** Dark and Light mode theme tokens built with custom HSL properties, spotlight cursor cards, and editorial typography gradients.
- **100% Type-Safe Data Layer:** Clear separation of content records (`data/*.ts`) from presentation components via domain interfaces (`types/portfolio.ts`).

---

## 🛠️ Architecture & Tech Stack

### Core Technologies
- **Framework:** [Next.js 16.3.8](https://nextjs.org/) (App Router, Server Components & Route Handlers)
- **UI Library:** [React 19.2.8](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS & CSS Custom Properties
- **Motion & Interactions:** [Motion 14](https://motion.dev/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons, Heroicons, Tabler Icons)
- **Type System:** [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)

### Application Structure
```text
portfolio/
├── .github/
│   ├── workflows/ci.yml             # Automated CI quality gate
│   └── pull_request_template.md     # PR standards & verification checklist
├── app/
│   ├── api/youtube/channel/route.ts # YouTube Data API v3 proxy & sync handler
│   ├── about/                       # Personal story, philosophy cards, YouTube section
│   ├── blog/ [slug]/                # Technical writing archive and slug template
│   ├── contact/                     # Inquiry form, FAQ, direct connection cards
│   ├── experience/                  # Chronological career journey timeline
│   ├── skills/                      # Categorized technical toolkit & AI workflow
│   ├── work/ [slug]/                # Project showcases and deep case studies
│   ├── globals.css                  # Design tokens, themes, glassmorphism utilities
│   └── layout.tsx                   # Root layout with Dock navbar and theme provider
├── components/
│   ├── about/                       # Philosophy cards, portrait cutout, YouTube cards
│   ├── contact/                     # Form controllers, validation, and FAQ accordion
│   ├── experience/                  # Career journey timeline renderers
│   ├── github/                      # Repository stats and activity telemetry
│   ├── reactbits/                   # SpotlightCard, DecryptedText motion primitives
│   ├── sections/                    # Homepage modular sections and CTA banners
│   └── ui/                          # Globe canvas, SpecularButton, LogoLoop, GlassSurface
├── data/                            # Decoupled content stores (projects, skills, about, blog)
├── public/                          # Optimized photography, thumbnails, and preview media
└── types/                           # Strict TypeScript domain interfaces
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js:** `20.x` or later (LTS recommended)
- **npm:** `10.x` or later

### Installation
```bash
# Clone the repository
git clone https://github.com/jeevankumarguduru/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Environment Variables
Copy `.env.example` to create your local environment file:
```bash
cp .env.example .env.local
```

Configure your credentials in `.env.local` (optional — resilient fallback mode active):
```env
# Optional: YouTube Data API v3 Key for live channel analytics
YOUTUBE_API_KEY=your_google_cloud_api_key_here
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Validation
```bash
# Run ESLint
npm run lint

# Run TypeScript compilation check
npx tsc --noEmit

# Test production build bundle
npm run build
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Guduru Jeevan Kumar**
- **YouTube:** [@JeevanKumarGuduru](https://www.youtube.com/@JeevanKumarGuduru)
- **LinkedIn:** [Guduru Jeevan Kumar](https://www.linkedin.com/in/jeevankumarguduru)
- **GitHub:** [@jeevankumarguduru](https://github.com/jeevankumarguduru)
