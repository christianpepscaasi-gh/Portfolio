# Christian Peps Caasi — Developer Portfolio

A high-performance, data-driven portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS v4**. Showcasing projects, weekly OJT logs, and technical growth across mobile, blockchain, and full-stack development.

**Live:** [christianpepscaasi.vercel.app](https://christianpepscaasi.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript (Strict Mode) |
| Styling | Tailwind CSS v4 |
| Data | Local JSON + TypeScript interfaces |
| Deployment | Vercel |

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Hero, featured projects, about, CTA |
| `/work` | Filterable gallery of all projects |
| `/work/[id]` | Full project detail with gallery and highlights |
| `/logs` | Timeline index of weekly OJT logs |
| `/logs/[slug]` | Full weekly log with tasks and learnings |

---

## Projects

| Project | Category | Stack |
|---|---|---|
| CargaExpress | Mobile | Java, Android Studio |
| Grade Prediction System | Backend | Python, ML, SQL |
| ChainMarket | Blockchain | Base, Smart Contracts, TypeScript |
| PandanChain | Blockchain | Solidity, Web3.js, Node.js |
| Sillag | Blockchain | Solidity, TypeScript, React |
| PromptGraph | QA/Research | TypeScript, Python, LLM |

---

## Project Structure

```
app/
+-- components/         # Badge, Button, Navbar, Footer, ProjectCard
+-- data/               # projects.json, profile.ts, logs.json, logs.ts
+-- types/              # TypeScript interfaces
+-- content/logs/       # Reserved for markdown logs
+-- logs/               # /logs and /logs/[slug] pages
+-- work/               # /work and /work/[id] pages
+-- globals.css
+-- layout.tsx
+-- page.tsx
public/
+-- projects/carga/     # Carga Express gallery images
```

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run lint      # Lint check
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `primary-dark` | `#2B2623` | Background |
| `secondary-warm` | `#6B4C3B` | Cards, borders |
| `accent-light` | `#E8DCCB` | Body text |
| `accent-gold` | `#C2A878` | Interactive, headings |

---

*Built by Christian Peps Caasi — OJT Software Development Intern, Makerspace 2026*
