import { useState } from "react";
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

import coversAllThree from "@/assets/covers-all-three.png";
import coverUnderstandingWorld from "@/assets/cover-understanding-world.png";
import bookLiteracyPreview from "@/assets/book-literacy-preview.png";
import bookMathsPreview from "@/assets/book-maths-preview.png";

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

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(135deg, hsl(var(--brand-cream)) 0%, hsl(0 0% 100%) 60%)" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: copy */}
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
            Build confidence at home with structured FS2 practice designed by early years experts. Calm, clear and just 15–20 minutes a day.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[hsl(var(--brand-teal))] hover:bg-[hsl(var(--brand-teal-light))] text-white font-bold gap-2 shadow-lg text-base px-6"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
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

        {/* Right: product image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20 -z-10"
              style={{ background: "hsl(var(--brand-teal))", transform: "scale(0.9) translateY(10%)" }}
            />
            <img
              src={coversAllThree}
              alt="Creative Minds FS2 School Readiness Workbooks – Literacy, Maths and Understanding the World"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Tagline strip */}
      <div
        className="mt-16 py-4 text-center text-lg font-bold tracking-wide rounded-xl max-w-6xl mx-auto"
        style={{
          background: "hsl(var(--brand-teal) / 0.08)",
          color: "hsl(var(--brand-teal))",
          fontFamily: "Nunito, sans-serif",
        }}
      >
        Confidence Starts Early.
      </div>
    </section>
  );
}

// ── Problem ───────────────────────────────────────────────────────────────────
const problems = [
  { icon: "📖", title: "Weak phonics foundation", desc: "Without structured phonics exposure, reading readiness lags significantly behind peers." },
  { icon: "✏️", title: "Inconsistent number writing", desc: "Irregular practice leads to poor number formation habits that are hard to undo in Year 1." },
  { icon: "🗓", title: "Lack of structured home practice", desc: "Sporadic activity books and screen-based apps don't build the sequential skills Year 1 demands." },
  { icon: "📱", title: "Over-reliance on screens", desc: "Digital tools rarely build the fine motor and focus skills that printed workbooks develop naturally." },
];

function Problem() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 px-4 sm:px-6"
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
          We designed Creative Minds to close these gaps — gently, consistently, and without pressure.
          Every page is intentional. Every activity builds toward the next.
        </p>
      </div>
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
    topics: ["Phonemes & letter sounds", "Blending CVC words", "Common digraphs", "Sight word recognition", "Early comprehension"],
    description: "A structured, phonics-first approach to reading readiness, built around the EYFS framework.",
  },
  {
    title: "Maths",
    image: bookMathsPreview,
    badgeColor: "hsl(0 75% 45%)",
    badgeBg: "hsl(0 75% 45% / 0.10)",
    topics: ["Numbers 1–100", "Addition & subtraction basics", "Number lines", "Patterns & sequencing", "Time concepts"],
    description: "Progression-based numeracy activities that move from recognition to confident application.",
  },
  {
    title: "Understanding the World",
    image: coverUnderstandingWorld,
    badgeColor: "hsl(142 60% 35%)",
    badgeBg: "hsl(142 60% 35% / 0.10)",
    topics: ["Community helpers", "Transportation", "Everyday life themes", "Thematic vocabulary", "EYFS topic alignment"],
    description: "Builds early knowledge of the world through engaging themes children recognise from daily life.",
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
            40 structured pages per book · Premium 100gsm print
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
  "Progression-based learning — every page builds on the last",
  "40 structured pages per book",
  "Premium 100gsm print quality",
  "Designed and made in UAE",
  "Aligned with both EYFS and CBSE frameworks",
  "No random worksheets — every activity is purposeful",
];

function Trust() {
  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6"
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
            Not a print-and-sell worksheet pack. A carefully structured system.
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
          No pressure. No overwhelm. Just gentle, consistent progress.
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
                All three workbooks. Complete FS2 school readiness at home.
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
          📦 Cash on Delivery available · Delivery within UAE · Premium 100gsm A4 workbooks
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
    q: "Is this aligned to the British curriculum?",
    a: "Yes. Creative Minds workbooks are designed around the EYFS (Early Years Foundation Stage) framework and are well-suited to FS2 learners in British Curriculum schools across the UAE.",
  },
  {
    q: "Is it suitable for CBSE KG2 children?",
    a: "Absolutely. The foundational literacy and numeracy skills covered in this pack align closely with KG2 readiness requirements. Families following CBSE will find it highly relevant.",
  },
  {
    q: "Is this too academic for young children?",
    a: "Not at all. The activities are structured and purposeful, but always age-appropriate and visually engaging. There's no pressure — the focus is on confidence, not performance.",
  },
  {
    q: "Is it digital or printed?",
    a: "These are premium printed A4 workbooks on 100gsm paper. Physical books support better focus, fine motor development, and longer engagement than screen-based alternatives.",
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
        <h2
          className="text-3xl md:text-5xl font-black leading-tight"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Give Your Child Confidence Before Year 1
        </h2>
        <p className="text-lg opacity-90">
          Structured. Calm. Expert-designed. Ready to use today.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 font-bold text-base gap-2 px-8 py-6 shadow-xl"
            style={{ color: "hsl(var(--brand-teal))" }}
          >
            <MessageCircle className="w-5 h-5" />
            Order Now on WhatsApp
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
