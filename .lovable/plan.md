
# Creative Minds – Full Landing Page Build Plan

## Overview

This plan covers building the complete single-page landing website for Creative Minds FS2 School Readiness workbooks, from the ground up. The current `Index.tsx` is a blank placeholder — every section will be built fresh.

---

## Uploaded Images — Usage Plan

| Image | Usage |
|---|---|
| `3-front-covers.png` | Hero section product visual — all 3 books shown together |
| `Screen_Shot_2026-02-20_at_11.50.02_PM.png` | Understanding the World individual book card |
| `literacy-fullbook.png` | Interior page previews for the Literacy book card |
| `maths-full-book.png` | Interior page previews for the Maths book card |

All 4 images will be copied into `src/assets/` and imported properly as ES6 modules.

---

## Brand Color System (from book covers)

Extracted directly from the cover artwork:

| Token | Color | Use |
|---|---|---|
| `--brand-teal` | `186 100% 38%` (deep turquoise) | Primary CTA buttons, headings |
| `--brand-pink` | `330 80% 55%` (magenta-pink, the "Creative" script color) | Accent highlights, badges |
| `--brand-amber` | `38 95% 55%` (warm gold, the wave base) | Section backgrounds, warm accents |
| `--brand-navy` | `220 60% 18%` (the "Minds" text color) | Body text, dark headings |
| `--brand-cream` | `45 60% 97%` (near-white warm) | Section backgrounds |

Typography will use **Google Fonts** loaded via `index.html`:
- **Nunito** — rounded, friendly, premium feel for headings
- **Inter** — clean body text

---

## File Changes

### 1. `index.html`
- Update page title to "Creative Minds – FS2 School Readiness Workbooks"
- Update meta description and OG tags
- Add Google Fonts link for Nunito + Inter

### 2. `src/index.css`
- Define new CSS custom properties using brand palette above
- Override `--primary` to brand teal
- Override `--background` to warm cream
- Override `--foreground` to brand navy
- Add custom font-family references

### 3. `src/App.css`
- Remove all default Vite boilerplate styles (logo, spin animations, etc.)

### 4. Assets — copy 4 images to `src/assets/`
- `src/assets/covers-all-three.png`
- `src/assets/cover-understanding-world.png`
- `src/assets/book-literacy-preview.png`
- `src/assets/book-maths-preview.png`

### 5. `src/pages/Index.tsx` — Full landing page

The page is built as a single scrollable component with these clearly separated sections:

---

## Landing Page Section Architecture

**Section 1 — Sticky Navigation Header**
- Logo text: "Creative Minds" styled with brand colors
- Scroll links: About · Books · Pricing · FAQ
- Sticky WhatsApp order button (teal, visible on desktop)
- Mobile: hamburger menu

**Section 2 — Hero**
- Left: Headline + subheadline + 2 CTAs
- Right: `covers-all-three.png` displayed as a clean product shot
- Headline: *"Is Your Child Ready for Year 1?"*
- Subheadline: *"Build confidence at home with structured FS2 practice designed by early years experts."*
- CTA 1 (teal, filled): "Order on WhatsApp" → WhatsApp deep link
- CTA 2 (outline): "View Inside Pages" → scrolls to books section
- Tag below CTAs: "Cash on Delivery · UAE-Wide Delivery"
- Brand tagline strip below hero: *"Confidence Starts Early."*

**Section 3 — Problem (warm cream background)**
- Headline: *"Many FS2 children struggle because..."*
- 4 icon + text bullet cards:
  - Weak phonics foundation
  - Inconsistent number writing
  - Lack of structured home practice
  - Over-reliance on screens
- Short empathetic paragraph below

**Section 4 — Product Showcase (white background)**
- Headline: *"A Complete FS2 School Readiness Pack"*
- 3 book cards side by side (or stacked on mobile):
  - Each card: cover image + subject name + colored badge + bullet list of topics
  - Literacy (brown badge): Phonemes, Blending, Digraphs, Sight words, Comprehension
  - Maths (red badge): Numbers 1–100, Addition & subtraction, Number lines, Patterns, Time
  - Understanding the World (green badge): Community helpers, Transportation, Everyday life, Thematic learning
- "40 structured pages per book · Premium 100gsm print"

**Section 5 — Why Trust Creative Minds (teal background, white text)**
- Headline: *"Designed by Early Years Professionals"*
- Author credential: Dr. Hemlata Wadhwani, EYFS Centre Manager
- 6 trust bullets with checkmark icons:
  - Progression-based learning
  - 40 structured pages per book
  - Premium 100gsm print quality
  - Made in UAE
  - EYFS and CBSE aligned
  - No random worksheets

**Section 6 — How to Use It (cream background)**
- Headline: *"Just 15–20 Minutes a Day"*
- 4 simple numbered steps:
  1. Choose one book
  2. Complete 2–3 pages
  3. Practice regularly
  4. Build confidence naturally
- Reassurance note: "No pressure. No overwhelm. Just gentle, consistent progress."

**Section 7 — Pricing (white background)**
- Two pricing cards:
  - Single Book — AED 35 (outline card)
  - Full Pack (3 Books) — AED 90 (highlighted card, "Best Value" badge)
- Under both: "Cash on Delivery Available · UAE-Wide Delivery"
- Primary CTA: "Order on WhatsApp"

**Section 8 — Testimonials (cream background)**
- Placeholder section: styled with "⭐⭐⭐⭐⭐" stars
- 2 placeholder quote cards with dummy text (to be replaced with real testimonials)
- Note: Component designed to be easily swappable

**Section 9 — FAQ (white background)**
- Using the existing Accordion UI component
- 5 FAQs:
  1. Is this aligned to the British curriculum?
  2. Is it suitable for CBSE KG2 children?
  3. Is this too academic for young children?
  4. Is it digital or printed?
  5. How do I place an order?

**Section 10 — Final CTA (teal gradient background)**
- Headline: *"Give Your Child Confidence Before Year 1"*
- Large WhatsApp order button (white, filled)
- Reassurance line: "Cash on Delivery · UAE-Wide Delivery · Premium Printed Workbooks"

**Section 11 — Footer**
- Logo + tagline
- Copyright
- Instagram link placeholder
- WhatsApp contact link

---

## WhatsApp Integration

The WhatsApp deep link will prefill the message:
```
https://wa.me/971XXXXXXXXX?text=Hi%2C%20I%20would%20like%20to%20order%20the%20FS2%20School%20Readiness%20Pack.
```

A placeholder number (`971500000000`) will be used — the user can easily replace it with the actual number in one place (a constant at the top of `Index.tsx`).

---

## Technical Notes

- No database, no backend — pure static React
- All images imported as ES6 modules from `src/assets/`
- Fully mobile-responsive using Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- Smooth scroll behaviour via CSS `scroll-behavior: smooth`
- The Accordion component from `src/components/ui/accordion.tsx` is used for FAQ
- WhatsApp number is defined as a single constant for easy replacement
- Google Fonts loaded via `<link>` in `index.html` for performance

---

## Summary of Files Modified/Created

1. `index.html` — title, meta, Google Fonts
2. `src/index.css` — brand color system + typography
3. `src/App.css` — remove boilerplate
4. `src/assets/covers-all-three.png` — copied from upload
5. `src/assets/cover-understanding-world.png` — copied from upload
6. `src/assets/book-literacy-preview.png` — copied from upload
7. `src/assets/book-maths-preview.png` — copied from upload
8. `src/pages/Index.tsx` — full landing page (all 11 sections)
