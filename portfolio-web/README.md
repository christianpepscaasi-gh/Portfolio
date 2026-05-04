# 🚀 Christian Peps Caasi - Developer Portfolio

A modern, high-performance portfolio website built with **Next.js 14+**, **TypeScript**, and **Tailwind CSS**. Showcasing projects, work experience, and technical documentation with a cinematic, warm design aesthetic.

**Live Preview:** [Coming Soon]

---

## 📋 Project Overview

This portfolio website consolidates internship work, projects, and technical journey into a single, professional platform. It features:

- **Hero Section**: Asymmetrical layout with profile image and introduction
- **Projects Gallery**: Filterable showcase of 5 projects across multiple categories
- **Weekly Logs**: Technical documentation and progress updates (placeholder structure)
- **SEO Optimized**: Metadata generation, Open Graph support, and performance optimization
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Type-Safe**: Full TypeScript implementation with strict mode

---

## 🎨 Design System

### Color Palette

- **Primary (Dark)**: `#2B2623` - Deep Charcoal Brown
- **Secondary (Warm)**: `#6B4C3B` - Warm Walnut Brown  
- **Accent (Light)**: `#E8DCCB` - Soft Ivory Warm Light
- **Accent (Gold)**: `#C2A878` - Muted Gold Accent

### Design Philosophy

The design reflects a **calm, composed personality** with a **cinematic, warm aesthetic**. The layout is intentionally **asymmetrical** (not centered) to create a structured, thoughtful impression.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js 14+](https://nextjs.org) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org) (Strict Mode) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) v4 |
| **Image Optimization** | Next.js Image Component |
| **Data** | JSON + TypeScript interfaces |
| **Deployment** | Vercel / Netlify |

---

## 📁 Project Structure

```
portfolio-web/
├── app/
│   ├── components/
│   │   ├── Badge.tsx          # Tag/badge component
│   │   ├── Button.tsx         # CTA button component
│   │   ├── Footer.tsx         # Global footer
│   │   ├── Navbar.tsx         # Global navbar with navigation
│   │   ├── ProjectCard.tsx    # Project card molecule
│   │   └── index.ts           # Component exports
│   ├── data/
│   │   ├── projects.json      # 5 projects with metadata
│   │   └── profile.ts         # Profile data & constants
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── content/
│   │   └── logs/              # Markdown logs (placeholder)
│   ├── logs/
│   │   ├── page.tsx           # Logs listing page
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic log detail page
│   ├── work/
│   │   └── page.tsx           # Filterable projects gallery
│   ├── globals.css            # Global styles & custom properties
│   ├── layout.tsx             # Root layout with Navbar/Footer
│   └── page.tsx               # Home/hero page
├── public/
│   └── profile-pic.png        # Profile picture
├── tailwind.config.ts         # Custom color configuration
├── tsconfig.json              # Path aliases & compiler options
├── next.config.ts             # Next.js configuration
└── package.json               # Dependencies
```

---

## 🎯 Pages & Routes

| Route | Description |
|-------|------------|
| `/` | **Hero** - Profile intro, featured projects, about section, CTA |
| `/work` | **Gallery** - All 5 projects with category filtering |
| `/logs` | **Index** - List of weekly logs (placeholder) |
| `/logs/[slug]` | **Detail** - Individual log entry with full content |

---

## 📊 Projects Included

1. **CargaExpress** - Mobile app for student prototyping services (Flutter, Dart, Firebase)
2. **Grade Prediction System** - Academic performance tracking system (Python, ML, Web)
3. **PandanChain** - Blockchain supply chain system (Solidity, Web3)
4. **Sillag** - Blockchain system (Team Lead, Solidity, TypeScript)
5. **PromptGraph** - Web crawler & LLM tracking system (JavaScript, Python, LLM)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or bun, pnpm, yarn)
- npm or equivalent package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-web

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint & type check
npm run lint
```

---

## 📈 Performance & SEO

### Optimizations Implemented

- ✅ **Image Optimization**: Next.js Image component with automatic compression
- ✅ **Code Splitting**: Automatic route-based code splitting
- ✅ **Metadata**: Comprehensive metadata generation with OpenGraph support
- ✅ **Font Optimization**: System fonts + Geist font family
- ✅ **Mobile Responsive**: Mobile-first design with Tailwind breakpoints
- ✅ **Type Safety**: Full TypeScript with strict mode

### Lighthouse Targets

- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

---

## 🔧 Customization

### Update Profile Data

Edit `app/data/profile.ts`:
```typescript
export const profileData: ProfileData = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... more fields
};
```

### Add/Edit Projects

Edit `app/data/projects.json`:
```json
[
  {
    "id": "unique-id",
    "title": "Project Name",
    "description": "Short description",
    "techStack": ["Tech1", "Tech2"],
    "completionDate": "2024",
    "category": "Frontend",
    "github": "https://github.com/...",
    "featured": true
  }
]
```

### Update Colors

Edit `tailwind.config.ts` to modify the color palette, then update `app/globals.css` CSS variables.

### Add Weekly Logs

1. Create markdown file in `app/content/logs/`
2. Add entry to logs array in `app/logs/page.tsx`
3. Update `app/logs/[slug]/page.tsx` data object

---

## ✨ Features

### Implemented

- [x] Responsive hero section with asymmetrical layout
- [x] Dynamic project gallery with category filtering
- [x] Custom color system based on design specification
- [x] Navbar with active link indication
- [x] Footer with contact links
- [x] TypeScript interfaces for type safety
- [x] JSON-based project data
- [x] SEO-friendly metadata
- [x] Mobile-optimized design
- [x] Production build (Next.js built-in optimizations)

### Future Enhancements

- [ ] Full markdown support for weekly logs
- [ ] Blog functionality with date-based filtering
- [ ] Dark/light theme toggle
- [ ] Comments & feedback system
- [ ] Analytics integration
- [ ] Search functionality
- [ ] Social media integration
- [ ] Newsletter signup
- [ ] PDF resume download

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push repository to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import the repository
4. Deployment is automatic on push to main branch

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy on Netlify

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

### Deploy Anywhere

```bash
# Build the project
npm run build

# Start the server
npm start
```

---

## 📞 Contact

- **Email**: christianpepscaasi@gmail.com
- **Phone**: (+63) 945-846-3382
- **Location**: Anda, Pangasinan, Philippines
- **GitHub**: [christianpepscaasi-gh](https://github.com/christianpepscaasi-gh)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Design inspiration from warm, cinematic aesthetic principles
- Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

---

**Created by:** Christian Peps Caasi  
**Last Updated:** May 2026  
**Status:** Active Development
