
# Copy Update — Creative Minds Landing Page

## What This Changes

Replace all placeholder and draft copy across `src/pages/Index.tsx` with the approved final website copy provided. No structural changes, no new sections — purely a text/copy update throughout the existing 11 sections.

---

## Section-by-Section Copy Changes

### Hero (lines ~142–169)

**Subheadline** — replace current combined subheadline with the two-part approved copy:
- Line 1: *"Build confidence at home with structured FS2 practice designed by Early Years experts."*
- Supporting text (new `<p>` below): *"Creative Minds School Readiness Pack helps children strengthen phonics, number skills, and real-world understanding — in just 15–20 minutes a day."*

**CTA 1 button label** — change to: *"Order the FS2 Pack on WhatsApp"*
**CTA 2 button label** — stays: *"View Inside Pages"* ✓ (already correct)

---

### Problem Section (lines ~205–260)

**Problem cards — titles only** (descriptions below are editorial additions that reinforce the brand, will be kept as-is since copy doc only provides bullet titles):

| Current | Approved |
|---|---|
| "Weak phonics foundation" | "Phonics foundations are inconsistent" |
| "Inconsistent number writing" | "Number writing lacks confidence" |
| "Lack of structured home practice" | "Practice at home is unstructured" |
| "Over-reliance on screens" | "Learning feels rushed or stressful" |

**Closing paragraph** — replace with:
*"Early years learning should feel calm, progressive, and encouraging."*

---

### Books Section (lines ~263–357)

**Section subheading** — replace `"40 structured pages per book · Premium 100gsm print"` with:
*"Three structured workbooks designed to gently build confidence at home."*

**Book descriptions and topic lists:**

**Literacy:**
- Description: *"A strong foundation for confident reading."*
- Topics: Phoneme recognition · Blending two & three-letter words · Digraphs & sight words · Early reading comprehension · Synthetic phonics progression

**Maths:**
- Description: *"Clear progression that builds number confidence step by step."*
- Topics: Writing numbers from 1–100 · Place value (tens & ones) · Number lines · Addition & subtraction basics · Patterns & time concepts

**Understanding the World:**
- Description: *"Helping children explore and understand the world around them."*
- Topics: All About Me · Community Helpers · Transportation · Fruits & Vegetables · Everyday themes

---

### Trust Section (lines ~360–414)

**Subheadline** — replace *"Not a print-and-sell worksheet pack. A carefully structured system."* with:
*"Designed by Early Years professionals with real classroom experience."*

**Trust bullets** — replace current 6 with the approved 7:
1. Designed by an EYFS Centre Manager
2. Structured progression across 40 pages per book
3. Engaging, child-friendly illustrations
4. Premium 100gsm paper & laminated cover
5. Suitable for British Curriculum FS2
6. Suitable for CBSE KG2 learners
7. Made in UAE

**Closing note** (add after trust bullets grid):
*"No random worksheets. No overwhelming content. Just calm, clear learning."*

---

### How to Use Section (lines ~417–473)

**Step labels** — keep same 4 steps ✓ (copy matches approved)

**Closing strip text** — replace:
*"No pressure. No overwhelm. Just gentle, consistent progress."*
→ *"Short sessions. Clear structure. Real progress."*

---

### New Section — "What Makes It Different?" (insert between HowToUse and Pricing)

The approved copy includes a new **Section 6 – What Makes It Different?** that doesn't exist yet:

**Headline:** *"Unlike generic activity books:"*

**Bullets:**
- Every page follows logical progression
- Skills build gradually
- Designed by real Early Years professionals
- Created specifically for Foundation Stage learners

**Closing:** *"This is not extra homework. It is structured reinforcement."*

This will be added as a new `WhyDifferent` component on a white background, inserted between `<HowToUse />` and `<Pricing />` in the page assembly.

---

### Pricing Section (lines ~476–583)

**Section headline** — replace *"Simple, Honest Pricing"* with nothing special (it's unlabelled in copy). Keep as-is or update to match tone — will keep existing headline as it's clean and unspecified.

**Bundle card description** — replace:
*"All three workbooks. Complete FS2 school readiness at home."*
→ *"Best value for structured progression across all areas."*

**Footer note under pricing** — update to exactly:
*"✔ Cash on Delivery Available · ✔ UAE-wide delivery"*

---

### FAQ Section (lines ~652–713)

Replace all 5 FAQ answers with the approved shorter, cleaner versions:

**Q1:** Is this aligned with British curriculum?
**A:** *"Yes. The workbooks follow EYFS learning progression and are ideal for FS2 learners."*

**Q2:** Is it suitable for CBSE KG2 children?
**A:** *"Yes. The foundational phonics and number skills align with KG2 expectations."*

**Q3:** Is this too academic?
**A:** *"No. The structure is gentle and child-friendly, designed to build confidence without pressure."*

**Q4:** Is this digital or printed?
**A:** *"These are premium printed A4 workbooks with 100gsm pages and laminated covers."*

**Q5:** How do I place an order? (keep existing — matches approved copy)

---

### Final CTA Section (lines ~717–751)

**Tagline above headline** — add: *"Confidence Starts Early."* (as a styled line above the main h2)

**Supporting paragraph** — replace:
*"Structured. Calm. Expert-designed. Ready to use today."*
→ *"Give your child a calm, structured foundation before Year 1."*

**Button label** — change to: *"Order the FS2 Pack Today"*

---

## Technical Approach

- All changes are to text strings and data arrays in `src/pages/Index.tsx` only
- No new dependencies, no routing changes, no CSS changes needed
- The new `WhyDifferent` section is a simple inline component added to the same file
- All other files remain untouched

## Files Modified

1. `src/pages/Index.tsx` — copy updates across all 11 sections + one new `WhyDifferent` component
