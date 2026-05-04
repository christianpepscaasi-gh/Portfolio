# 📘 PRD: Local Data-Driven Portfolio & Activity Log

---

## 1. 🧠 Project Overview

### 🎯 Goal
Build a high-performance, SEO-optimized portfolio using Next.js that renders content from local data structures (JSON/Markdown).

### 📌 Objective
Consolidate all internship activities into a single **"Lego-style" codebase** that demonstrates:
- Technical proficiency
- SOLID principles
- Maintainability

---

## 2. ⚙️ Technical Stack

| Category        | Technology                     |
|----------------|------------------------------|
| Framework      | Next.js (App Router)         |
| Language       | TypeScript (Strict Mode)     |
| Styling        | Tailwind CSS                |
| Data Handling  | JSON + Markdown / MDX       |
| Deployment     | Vercel / Netlify            |

---

## 3. 🧩 Functional Requirements

### 3.1 📦 Data Architecture

- **`projects.json` must include:**
  - Title
  - Description
  - Tech Stack (array)
  - Completion Date
  - Category (e.g., SEO Audit, Frontend, Research)

- **Markdown Content**
  - Stored in `/content`
  - Used for:
    - Weekly logs
    - Technical documentation

- **Type Safety**
  - All data must use TypeScript interfaces
  - No missing properties allowed

---

### 3.2 🧭 Core Pages & Navigation

| Route        | Description |
|-------------|------------|
| `/`         | Hero section + Featured highlights + Timeline |
| `/work`     | Filterable gallery of projects |
| `/logs/[slug]` | Dynamic pages for logs using `generateStaticParams` |

---

### 3.3 🧱 Component Architecture ("Lego-Style")

- **Atomic Design**
  - Atoms: Buttons, Badges
  - Molecules: ProjectCards, NavLinks

- **Layouts**
  - Persistent Navbar + Footer
  - Active link styling

- **Loading States**
  - Use `loading.tsx` for skeleton UI

---

## 4. 🚀 Non-Functional Requirements

### 4.1 ⚡ Performance & SEO

- Lighthouse Score: **90+**
  - Performance
  - Accessibility
  - Best Practices
  - SEO

- **Image Optimization**
  - Use Next.js `<Image />`
  - Define width/height or use `fill`

- **Metadata**
  - Use `generateMetadata`
  - Dynamic SEO titles for logs

---

### 4.2 📱 Mobile Responsiveness

- **Fluid Layout**
  - 1 column (mobile)
  - 3 columns (desktop)

- **Touch Targets**
  - Minimum: `44x44px`

- **Performance**
  - No layout shifts (CLS = 0)

---

## 5. 🛠 Project Milestones

| Phase | Milestone            | Deliverables |
|------|---------------------|-------------|
| 1    | Data & Schema       | JSON + Markdown + TS Interfaces |
| 2    | Base Architecture   | Next.js + Tailwind + Layout |
| 3    | Dynamic Routing     | `/logs/[slug]` implementation |
| 4    | UI/UX Development   | Filter system + responsive UI |
| 5    | Optimization        | Lighthouse + images + metadata |
| 6    | Deployment          | Live site (Vercel) |

---

## 6. ✅ Success Criteria

- New projects can be added via JSON **without modifying UI**
- Fully accessible (screen reader friendly)
- Code follows **SOLID principles**
  - Example: Filter logic separated from UI