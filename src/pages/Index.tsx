import { useState, useEffect } from "react";
import { Menu, X, CheckCircle2, Star, MessageCircle, Package, Clock, BookOpen, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import coverUnderstandingWorld from "@/assets/cover-understanding-world.png";
import bookLiteracyPreview from "@/assets/book-literacy-preview.png";
import bookMathsPreview from "@/assets/book-maths-preview.png";
import coverLiteracy from "@/assets/cover-literacy.png";
import coverMaths from "@/assets/cover-maths.png";
import coverUow from "@/assets/cover-uow.png";

// ── Change this to the real WhatsApp number ──────────────────────────────────
const WHATSAPP_NUMBER = "971500000000";
const WHATSAPP_MESSAGE = "Hi%2C%20I%20would%20like%20to%20order%20the%20FS2%20School%20Readiness%20Pack.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
// ─────────────────────────────────────────────────────────────────────────────

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// ── Navigation ────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", id: "about" },
    { label: "Books", id: "books" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-baseline gap-1 group">
          <span
            className="text-xl font-black tracking-tight"
            style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-pink))" }}
          >
            Creative
          </span>
          <span
            className="text-xl font-black tracking-tight"
            style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
          >
            Minds
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-[hsl(var(--brand-teal))] hover:bg-[hsl(var(--brand-teal-light))] text-white font-semibold gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </Button>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => { scrollTo(l.id); setOpen(false); }}
              className="text-left py-2 text-base font-medium text-foreground border-b border-border last:border-0"
            >
              {l.label}
            </button>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2">
            <Button
              className="w-full bg-[hsl(var(--brand-teal))] hover:bg-[hsl(var(--brand-teal-light))] text-white font-semibold gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}

// ── Wave SVG Background ───────────────────────────────────────────────────────
function WaveBackground({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
        <path
          d="M0,60 C180,110 360,10 540,60 C720,110 900,10 1080,60 C1260,110 1380,30 1440,60 L1440,120 L0,120 Z"
          fill="hsl(var(--brand-teal))"
          opacity="0.15"
        />
        <path
          d="M0,80 C200,30 400,110 600,70 C800,30 1000,100 1200,60 C1320,40 1400,80 1440,70 L1440,120 L0,120 Z"
          fill="hsl(var(--brand-amber))"
          opacity="0.18"
        />
        <path
          d="M0,95 C150,60 350,120 550,90 C750,60 950,110 1150,80 C1300,60 1400,95 1440,85 L1440,120 L0,120 Z"
          fill="hsl(var(--brand-pink))"
          opacity="0.12"
        />
      </svg>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const heroCovers = [
  {
    src: coverLiteracy,
    alt: "Creative Minds Literacy Workbook — Unlock Your Imagination with Every Word",
    label: "Literacy",
    tagline: "Phonics · Blending · Reading Comprehension",
    accentColor: "hsl(27 60% 40%)",
    gradientFrom: "hsl(27 60% 35% / 0.85)",
    gradientMid: "hsl(27 60% 35% / 0.3)",
  },
  {
    src: coverMaths,
    alt: "Creative Minds Maths Workbook — Count, Explore, and Have Fun",
    label: "Maths",
    tagline: "Numbers · Place Value · Addition & Subtraction",
    accentColor: "hsl(0 75% 45%)",
    gradientFrom: "hsl(0 75% 40% / 0.85)",
    gradientMid: "hsl(0 75% 40% / 0.3)",
  },
  {
    src: coverUow,
    alt: "Creative Minds Understanding the World Workbook — See the World Through Curious Eyes",
    label: "Understanding the World",
    tagline: "Community · Transport · Everyday Themes",
    accentColor: "hsl(142 60% 35%)",
    gradientFrom: "hsl(142 60% 28% / 0.85)",
    gradientMid: "hsl(142 60% 28% / 0.3)",
  },
];

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroCovers.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const cover = heroCovers[active];

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-16 md:pt-24 pb-0 px-4 sm:px-6"
      style={{ background: "linear-gradient(160deg, hsl(var(--brand-cream)) 0%, hsl(0 0% 100%) 55%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "hsl(var(--brand-teal))" }}
      />
      <div
        className="absolute top-10 -left-20 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "hsl(var(--brand-amber))" }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center pb-12 md:pb-16">

        {/* Left: copy — completely independent, never moves */}
        <div className="space-y-6">
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ background: "hsl(var(--brand-amber) / 0.2)", color: "hsl(var(--brand-navy))" }}
            >
              FS2 School Readiness · UAE
            </span>
            <h1
              className="text-4xl md:text-5xl font-black leading-tight"
              style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
            >
              Is Your Child Ready{" "}
              <span style={{ color: "hsl(var(--brand-teal))" }}>for Year 1?</span>
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Build confidence at home with structured FS2 practice designed by Early Years experts.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            Creative Minds School Readiness Pack helps children strengthen phonics, number skills, and real-world understanding — in just 15–20 minutes a day.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[hsl(var(--brand-teal))] hover:bg-[hsl(var(--brand-teal-light))] text-white font-bold gap-2 shadow-lg text-base px-6"
              >
                <MessageCircle className="w-5 h-5" />
                Order the FS2 Pack on WhatsApp
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("books")}
              className="w-full sm:w-auto font-semibold text-base px-6 border-2"
              style={{ borderColor: "hsl(var(--brand-navy))", color: "hsl(var(--brand-navy))" }}
            >
              View Inside Pages
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Package className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--brand-teal))" }} />
            <span>Cash on Delivery · UAE-Wide Delivery</span>
          </div>
        </div>

        {/* Right: sliding track carousel */}
        <div className="flex flex-col items-center md:items-end gap-3">

          {/* ── Main slideshow window ─────────────────────────────────────── */}
          <div
            className="w-full max-w-sm md:max-w-md overflow-hidden rounded-2xl shadow-2xl"
            style={{ aspectRatio: "4/3" }}
          >
            {/* Sliding track — width = 300%, slides left by 0/33.33/66.67% */}
            <div
              className="flex h-full"
              style={{
                width: `${heroCovers.length * 100}%`,
                transform: `translateX(calc(-${active * 100}% / ${heroCovers.length}))`,
                transition: "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {heroCovers.map((c) => (
                <div
                  key={c.label}
                  className="relative h-full flex-shrink-0"
                  style={{ width: `${100 / heroCovers.length}%` }}
                >
                  <img
                    src={c.src}
                    alt={c.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Per-book colour gradient overlay with subject label */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4"
                    style={{
                      background: `linear-gradient(to top, ${c.gradientFrom} 0%, ${c.gradientMid} 45%, transparent 70%)`,
                    }}
                  >
                    <p
                      className="text-white font-black text-lg leading-tight"
                      style={{ fontFamily: "Nunito, sans-serif", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
                    >
                      {c.label}
                    </p>
                    <p className="text-white text-xs mt-0.5" style={{ opacity: 0.9, textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                      {c.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Thumbnail strip — shows all 3 books, active highlighted ──── */}
          <div className="flex gap-2 w-full max-w-sm md:max-w-md">
            {heroCovers.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActive(i)}
                aria-label={`Show ${c.label} cover`}
                className="flex-1 overflow-hidden rounded-lg transition-all duration-300"
                style={{
                  aspectRatio: "4/3",
                  outline: i === active ? `3px solid ${c.accentColor}` : "3px solid transparent",
                  outlineOffset: "2px",
                  opacity: i === active ? 1 : 0.55,
                  transform: i === active ? "scale(1.04)" : "scale(1)",
                  transition: "opacity 0.35s ease, transform 0.35s ease, outline-color 0.35s ease",
                }}
              >
                <img
                  src={c.src}
                  alt={c.label}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Tagline strip */}
      <div
        className="py-4 text-center text-lg font-bold tracking-wide max-w-6xl mx-auto mb-2"
        style={{ color: "hsl(var(--brand-teal))", fontFamily: "Nunito, sans-serif" }}
      >
        Confidence Starts Early.
      </div>

      <WaveBackground />
    </section>
  );
}

// ── Problem ───────────────────────────────────────────────────────────────────
const problems = [
  { icon: "📖", title: "Phonics foundations are inconsistent", desc: "Without structured phonics exposure, reading readiness lags significantly behind peers." },
  { icon: "✏️", title: "Number writing lacks confidence", desc: "Irregular practice leads to poor number formation habits that are hard to undo in Year 1." },
  { icon: "🗓", title: "Practice at home is unstructured", desc: "Sporadic activity books and screen-based apps don't build the sequential skills Year 1 demands." },
  { icon: "📱", title: "Learning feels rushed or stressful", desc: "Digital tools rarely build the fine motor and focus skills that printed workbooks develop naturally." },
];

function Problem() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-16 md:pt-20 pb-0 px-4 sm:px-6"
      style={{ background: "hsl(var(--brand-cream))" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
          >
            Many FS2 children struggle because…
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            It's not about ability — it's about the right structure at the right time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <Card
              key={p.title}
              className="border-0 shadow-sm"
              style={{ background: "hsl(0 0% 100%)" }}
            >
              <CardContent className="p-5 space-y-3">
                <div className="text-3xl">{p.icon}</div>
                <h3
                  className="font-bold text-base"
                  style={{ color: "hsl(var(--brand-navy))", fontFamily: "Nunito, sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center mt-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Early years learning should feel calm, progressive, and encouraging.
        </p>
      </div>
      <WaveBackground flip className="mt-8" />
    </section>
  );
}

// ── Books ─────────────────────────────────────────────────────────────────────
const books = [
  {
    title: "Literacy",
    image: bookLiteracyPreview,
    badgeColor: "hsl(27 60% 40%)",
    badgeBg: "hsl(27 60% 40% / 0.12)",
    topics: ["Phoneme recognition", "Blending two & three-letter words", "Digraphs & sight words", "Early reading comprehension", "Synthetic phonics progression"],
    description: "A strong foundation for confident reading.",
  },
  {
    title: "Maths",
    image: bookMathsPreview,
    badgeColor: "hsl(0 75% 45%)",
    badgeBg: "hsl(0 75% 45% / 0.10)",
    topics: ["Writing numbers from 1–100", "Place value (tens & ones)", "Number lines", "Addition & subtraction basics", "Patterns & time concepts"],
    description: "Clear progression that builds number confidence step by step.",
  },
  {
    title: "Understanding the World",
    image: coverUnderstandingWorld,
    badgeColor: "hsl(142 60% 35%)",
    badgeBg: "hsl(142 60% 35% / 0.10)",
    topics: ["All About Me", "Community Helpers", "Transportation", "Fruits & Vegetables", "Everyday themes"],
    description: "Helping children explore and understand the world around them.",
  },
];

function Books() {
  return (
    <section
      id="books"
      className="py-16 md:py-20 px-4 sm:px-6"
      style={{ background: "hsl(0 0% 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
          >
            A Complete FS2 School Readiness Pack
          </h2>
          <p className="text-muted-foreground">
            Three structured workbooks designed to gently build confidence at home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {books.map((book) => (
            <Card
              key={book.title}
              className="overflow-hidden border shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={book.image}
                  alt={`Creative Minds ${book.title} workbook interior pages`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3
                    className="text-xl font-black"
                    style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
                  >
                    {book.title}
                  </h3>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ color: book.badgeColor, background: book.badgeBg }}
                  >
                    FS2
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{book.description}</p>
                <ul className="space-y-1.5 pt-1">
                  {book.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: book.badgeColor }}
                      />
                      <span className="text-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Trust ─────────────────────────────────────────────────────────────────────
const trustPoints = [
  "Designed by an EYFS Centre Manager",
  "Structured progression across 40 pages per book",
  "Engaging, child-friendly illustrations",
  "Premium 100gsm paper & laminated cover",
  "Suitable for British Curriculum FS2",
  "Suitable for CBSE KG2 learners",
  "Made in UAE",
];

function Trust() {
  return (
    <section
      className="relative overflow-hidden pt-16 md:pt-20 pb-0 px-4 sm:px-6"
      style={{ background: "hsl(var(--brand-teal))" }}
    >
      <div className="max-w-5xl mx-auto text-white">
        <div className="text-center mb-10">
          <Sparkles className="w-8 h-8 mx-auto mb-3 opacity-80" />
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Designed by Early Years Professionals
          </h2>
          <p className="opacity-90 text-lg max-w-xl mx-auto">
            Designed by Early Years professionals with real classroom experience.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 md:p-8 mb-8"
          style={{ background: "hsl(0 0% 100% / 0.12)" }}
        >
          <p className="font-semibold text-lg mb-1" style={{ fontFamily: "Nunito, sans-serif" }}>
            Dr. Hemlata Wadhwani
          </p>
          <p className="opacity-80 text-sm">EYFS Centre Manager · Early Years Education Specialist</p>
          <p className="mt-3 leading-relaxed opacity-90">
            "Every activity in this pack was designed with real classroom experience in mind. The goal isn't
            to push children — it's to gently build their confidence so they walk into Year 1 feeling ready."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-90" />
              <span className="opacity-90 text-sm leading-snug">{point}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 opacity-90 font-semibold" style={{ fontFamily: "Nunito, sans-serif" }}>
          No random worksheets. No overwhelming content. Just calm, clear learning.
        </p>
      </div>
      {/* Wave bottom — inverted so white merges from below */}
      <div className="w-full overflow-hidden leading-none mt-8">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14 md:h-20">
          <path d="M0,50 C200,10 400,90 600,50 C800,10 1000,90 1200,50 C1320,30 1400,60 1440,50 L1440,100 L0,100 Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
}

// ── How to Use ────────────────────────────────────────────────────────────────
const steps = [
  { num: "01", label: "Choose one book", desc: "Start with whichever subject your child needs most, or rotate daily." },
  { num: "02", label: "Complete 2–3 pages", desc: "Short sessions are better than long ones. Less is more at this age." },
  { num: "03", label: "Practice regularly", desc: "5 days a week of calm, consistent practice builds lasting skills." },
  { num: "04", label: "Build confidence naturally", desc: "Celebrate every page. Progress is visible and motivating." },
];

function HowToUse() {
  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6"
      style={{ background: "hsl(var(--brand-cream))" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Clock className="w-8 h-8 mx-auto mb-3" style={{ color: "hsl(var(--brand-teal))" }} />
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
          >
            Just 15–20 Minutes a Day
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Structured enough to be effective. Short enough to stay joyful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div
                className="text-5xl font-black mb-3 leading-none"
                style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-teal) / 0.18)" }}
              >
                {step.num}
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
              >
                {step.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 text-center py-4 rounded-xl text-sm font-medium"
          style={{ background: "hsl(var(--brand-teal) / 0.08)", color: "hsl(var(--brand-teal))" }}
        >
          Short sessions. Clear structure. Real progress.
        </div>
      </div>
    </section>
  );
}

// ── Why Different ─────────────────────────────────────────────────────────────
const whyPoints = [
  "Every page follows logical progression",
  "Skills build gradually",
  "Designed by real Early Years professionals",
  "Created specifically for Foundation Stage learners",
];

function WhyDifferent() {
  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6"
      style={{ background: "hsl(0 0% 100%)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-black mb-8"
          style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
        >
          What Makes It Different?
        </h2>
        <p
          className="text-xl font-semibold mb-6"
          style={{ color: "hsl(var(--brand-navy))", fontFamily: "Nunito, sans-serif" }}
        >
          Unlike generic activity books:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
          {whyPoints.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: "hsl(var(--brand-cream))" }}
            >
              <CheckCircle2
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "hsl(var(--brand-teal))" }}
              />
              <span className="text-sm font-medium" style={{ color: "hsl(var(--brand-navy))" }}>
                {point}
              </span>
            </div>
          ))}
        </div>
        <div
          className="py-4 px-6 rounded-xl text-base font-semibold"
          style={{ background: "hsl(var(--brand-navy))", color: "hsl(0 0% 100%)", fontFamily: "Nunito, sans-serif" }}
        >
          This is not extra homework. It is structured reinforcement.
        </div>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-20 px-4 sm:px-6"
      style={{ background: "hsl(0 0% 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
          >
            Simple, Honest Pricing
          </h2>
          <p className="text-muted-foreground">Cash on Delivery · UAE-Wide Delivery</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Single book */}
          <Card className="border-2 shadow-sm">
            <CardContent className="p-7 text-center space-y-4">
              <div>
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <h3
                  className="text-xl font-black"
                  style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
                >
                  Single Book
                </h3>
              </div>
              <div>
                <span
                  className="text-4xl font-black"
                  style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
                >
                  AED 35
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Choose any one: Literacy, Maths, or Understanding the World
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full font-semibold border-2 mt-2"
                  style={{ borderColor: "hsl(var(--brand-teal))", color: "hsl(var(--brand-teal))" }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order on WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Bundle */}
          <Card
            className="border-0 shadow-xl relative overflow-hidden"
            style={{ background: "hsl(var(--brand-teal))" }}
          >
            <div
              className="absolute top-0 right-0 text-xs font-bold px-3 py-1.5 rounded-bl-xl"
              style={{ background: "hsl(var(--brand-amber))", color: "hsl(var(--brand-navy))" }}
            >
              BEST VALUE
            </div>
            <CardContent className="p-7 text-center space-y-4 text-white">
              <div>
                <Package className="w-8 h-8 mx-auto mb-2 opacity-90" />
                <h3
                  className="text-xl font-black"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  Full Pack — 3 Books
                </h3>
              </div>
              <div>
                <span
                  className="text-4xl font-black"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  AED 90
                </span>
                <p className="text-xs opacity-70 mt-1">Save AED 15 vs buying separately</p>
              </div>
              <p className="text-sm opacity-90">
                Best value for structured progression across all areas.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full font-bold mt-2 bg-white hover:bg-gray-50"
                  style={{ color: "hsl(var(--brand-teal))" }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order on WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          ✔ Cash on Delivery Available · ✔ UAE-wide delivery
        </p>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    stars: 5,
    quote: "My daughter looks forward to her workbook time every morning. The structure makes such a difference — she's so much more confident with her letters.",
    name: "Parent, Dubai",
    tag: "FS2 · British Curriculum",
  },
  {
    stars: 5,
    quote: "We tried many activity books but nothing was as structured as Creative Minds. The progression from page to page is exactly what she needed before Year 1.",
    name: "Parent, Abu Dhabi",
    tag: "KG2 · CBSE",
  },
];

function Testimonials() {
  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6"
      style={{ background: "hsl(var(--brand-cream))" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: "hsl(var(--brand-amber))" }} />
            ))}
          </div>
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
          >
            What Parents Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-0 shadow-sm bg-white">
              <CardContent className="p-6 space-y-3">
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-current"
                      style={{ color: "hsl(var(--brand-amber))" }}
                    />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "hsl(var(--brand-navy))", fontFamily: "Nunito, sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.tag}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Is this aligned with British curriculum?",
    a: "Yes. The workbooks follow EYFS learning progression and are ideal for FS2 learners.",
  },
  {
    q: "Is it suitable for CBSE KG2 children?",
    a: "Yes. The foundational phonics and number skills align with KG2 expectations.",
  },
  {
    q: "Is this too academic?",
    a: "No. The structure is gentle and child-friendly, designed to build confidence without pressure.",
  },
  {
    q: "Is this digital or printed?",
    a: "These are premium printed A4 workbooks with 100gsm pages and laminated covers.",
  },
  {
    q: "How do I place an order?",
    a: "Simply click any 'Order on WhatsApp' button. You'll be connected directly where we'll confirm your order, delivery address, and preferred titles. Cash on Delivery is available across the UAE.",
  },
];

function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 md:py-20 px-4 sm:px-6"
      style={{ background: "hsl(0 0% 100%)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-navy))" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border rounded-xl px-2 bg-white shadow-sm"
            >
              <AccordionTrigger
                className="text-left font-semibold py-4 hover:no-underline"
                style={{ color: "hsl(var(--brand-navy))", fontFamily: "Nunito, sans-serif" }}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 text-center text-white"
      style={{
        background: "linear-gradient(135deg, hsl(var(--brand-teal)) 0%, hsl(186 80% 25%) 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <p
          className="text-base font-bold uppercase tracking-widest opacity-80"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Confidence Starts Early.
        </p>
        <h2
          className="text-3xl md:text-5xl font-black leading-tight"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Give Your Child Confidence Before Year 1
        </h2>
        <p className="text-lg opacity-90">
          Give your child a calm, structured foundation before Year 1.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 font-bold text-base gap-2 px-8 py-6 shadow-xl"
            style={{ color: "hsl(var(--brand-teal))" }}
          >
            <MessageCircle className="w-5 h-5" />
            Order the FS2 Pack Today
          </Button>
        </a>
        <p className="text-sm opacity-75">
          Cash on Delivery · UAE-Wide Delivery · Premium Printed Workbooks
        </p>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-10 px-4 sm:px-6 border-t"
      style={{ background: "hsl(var(--brand-navy))", borderColor: "hsl(0 0% 100% / 0.1)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        <div className="text-center md:text-left">
          <div className="flex items-baseline gap-1 justify-center md:justify-start mb-1">
            <span
              className="text-lg font-black"
              style={{ fontFamily: "Nunito, sans-serif", color: "hsl(var(--brand-pink))" }}
            >
              Creative
            </span>
            <span className="text-lg font-black" style={{ fontFamily: "Nunito, sans-serif" }}>
              Minds
            </span>
          </div>
          <p className="text-xs opacity-60">Confidence Starts Early.</p>
        </div>

        <div className="flex items-center gap-6 text-sm opacity-70">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            WhatsApp
          </a>
          <span>© 2026 Creative Minds</span>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Books />
        <Trust />
        <HowToUse />
        <WhyDifferent />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
