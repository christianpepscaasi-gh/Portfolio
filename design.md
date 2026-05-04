## 🧠 Design Philosophy

This website is built around a **cinematic, warm, and slightly vintage identity**.

The visual direction reflects:

* calm and composed personality
* minimal but intentional structure
* soft cinematic lighting feel
* intellectual / reflective mood
* “root of system” layout thinking (not centered, but structured like a framework)

The design should feel like a **portrait turned into an interface**.

---

## 🎨 Color Palette

The palette is derived from warm wood tones, dark clothing shadows, and soft natural lighting.

### 🔥 Primary Color (Foundation / Identity)

```
#2B2623
Deep Charcoal Brown
```

Used for:

* main background
* navbar
* large sections
* base UI surfaces

---

### 🌿 Secondary Color (Structure / UI Elements)

```
#6B4C3B
Warm Walnut Brown
```

Used for:

* cards
* borders
* dividers
* hover states

---

### ✨ Tertiary Color (Light / Contrast)

```
#E8DCCB
Soft Ivory Warm Light
```

Used for:

* readable text on dark backgrounds
* section contrast blocks
* soft highlights

---

### 🎯 Accent Color (Interactive Elements)

```
#C2A878
Muted Gold Accent
```

Used sparingly for:

* buttons
* links
* active states
* key highlights

⚠️ Rule: Do NOT overuse. This is a “focus color”, not decoration.

---

## 🧩 Layout System

### 🔥 Hero Section Concept

The hero is **asymmetrical**, not centered.

```
[ IMAGE SECTION ]    [ CONTENT SECTION ]
```

### Image Side

* slightly faded portrait
* cinematic lighting overlay
* subtle grain or vignette optional

### Content Side

* Name (large, serif font)
* Role / identity
* short intro paragraph

---

## 🎞 Image Styling Rules

To maintain mood consistency:

```css
.hero-image {
  filter: brightness(0.7) contrast(1.1);
}
```

OR use overlay:

```css
.overlay {
  background: rgba(43, 38, 35, 0.4);
}
```

Purpose:

* preserve cinematic tone
* improve text readability
* unify color mood across UI

---

## 🔤 Typography System

### Headings (Identity / Presence)

Use serif fonts:

* Playfair Display
* Merriweather

Style:

* large spacing
* controlled weight
* minimal bold usage

---

### Body Text (Readability)

Use clean sans-serif:

* Inter
* Open Sans

Style:

* high readability
* soft spacing
* no aggressive contrast

---

## 🧠 UI Behavior Rules

### ✔ Do

* generous spacing (breathing room matters)
* soft hover transitions (0.2–0.4s)
* muted, controlled colors
* layered depth (background → card → highlight)
* subtle shadows, not harsh ones

---

### ✖ Don’t

* avoid neon colors
* avoid centered “template-like” layouts
* avoid heavy animations
* avoid sharp contrast blocks
* avoid cluttered UI

---

## 🧱 Component Style Direction

### Cards

* warm brown borders (#6B4C3B)
* soft shadow
* slight transparency or blur optional

### Buttons

* base: dark charcoal
* hover: muted gold accent
* smooth transition feel

### Sections

* layered depth (not flat blocks)
* slight tonal variation between sections

---

## 🧭 Overall Identity Summary

This design system aims to create:

> A calm, cinematic personal interface that feels like a composed portrait turned into a structured system.

Not flashy.
Not loud.
Just intentional.
