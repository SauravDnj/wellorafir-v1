"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Stethoscope, Apple, Dumbbell, Leaf, ArrowRight, CheckCircle2,
  Star, Heart, Phone, Activity, Award, Zap, Shield, TrendingUp,
  Users, Plus, Minus, ChevronRight, Quote,
} from "lucide-react";

/* ─────────────────────────────────────────────
   FONT VARIABLE (set in layout)
───────────────────────────────────────────── */
const serif: React.CSSProperties = { fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)" };

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const pillars = [
  { icon: Stethoscope, title: "Medical Care",   desc: "Doctor-supervised diagnosis, safety checks and clinical oversight at every step.", color: "#0EA5E9" },
  { icon: Apple,       title: "Nutrition",       desc: "Sustainable meal plans, metabolic health and disease-specific dietary protocols.", color: "#8B5CF6" },
  { icon: Dumbbell,    title: "Fitness",         desc: "Goal-oriented training programmes aligned with your medical and nutrition plan.", color: "#06B6D4" },
  { icon: Leaf,        title: "Lifestyle",       desc: "Sleep, stress management and behavioural coaching for lasting daily change.", color: "#6366F1" },
];

const conditions = [
  { icon: TrendingUp, title: "Obesity & Weight Gain",   color: "#0EA5E9" },
  { icon: Zap,        title: "Diabetes & Prediabetes",  color: "#8B5CF6" },
  { icon: Heart,      title: "PCOD / PCOS",             color: "#EC4899" },
  { icon: Shield,     title: "Thyroid Disorders",       color: "#06B6D4" },
  { icon: Activity,   title: "High Cholesterol & BP",   color: "#6366F1" },
  { icon: Leaf,       title: "Fatty Liver & Gut Health",color: "#10B981" },
];

const results = [
  { name: "Priya S.",    kg: "−18 kg", time: "4 months",  img: "/images/single-img-five.jpg"    },
  { name: "Rahul M.",    kg: "−22 kg", time: "5 months",  img: "/images/blog/02.jpg"            },
  { name: "Ananya K.",   kg: "−12 kg", time: "3 months",  img: "/images/single-img-one.png"     },
];

const steps = [
  { num: "01", title: "Free Discovery Call",   desc: "Speak with a WelloraFit doctor. We understand your health history, lifestyle and goals — no cost, no commitment.", img: "/images/step-one.jpg"   },
  { num: "02", title: "Your Personal Roadmap", desc: "Receive an integrated plan covering medical, nutrition, fitness and lifestyle — built specifically for you.", img: "/images/step-two.jpg"   },
  { num: "03", title: "Track & Transform",     desc: "Weekly check-ins, real-time progress tracking and dedicated specialist support every step of the way.", img: "/images/step-three.jpg" },
];

const stats = [
  { number: "500+", label: "Happy Clients",         icon: Users     },
  { number: "95%",  label: "Success Rate",          icon: TrendingUp },
  { number: "12+",  label: "Certified Specialists", icon: Award     },
  { number: "4",    label: "Wellness Pillars",      icon: Shield    },
];

const plans = [
  {
    name: "Foundation", price: "₹4,999", period: "/month", badge: "1-Month Plan", popular: false,
    color: "#0EA5E9",
    features: ["Doctor Consultation (1×)", "Personalised Nutrition Plan", "Basic Fitness Guidance", "Email Support", "Progress Tracking App"],
  },
  {
    name: "Transformation", price: "₹7,999", period: "/month", badge: "3-Month Plan", popular: true,
    color: "#8B5CF6",
    features: ["Doctor Consultations (3×)", "Advanced Nutrition Planning", "Personal Trainer Access", "Priority WhatsApp Support", "Weekly Progress Reviews", "Lifestyle Coaching"],
  },
  {
    name: "Elite Wellness", price: "₹11,999", period: "/month", badge: "6-Month Plan", popular: false,
    color: "#06B6D4",
    features: ["Unlimited Doctor Access", "Daily Custom Meal Plans", "Dedicated Personal Trainer", "24/7 Priority Support", "Body Composition Reports", "Stress & Sleep Coaching", "Family Diet Consultation"],
  },
];

const testimonials = [
  { name: "Priya Sharma",    result: "Lost 18 kg in 4 months",  stars: 5, text: "WelloraFit changed my life. The combination of medical oversight, nutrition and fitness felt truly holistic — I've never felt this healthy.", img: "/images/single-img-five.jpg"    },
  { name: "Rahul Mehta",     result: "Reversed Prediabetes",    stars: 5, text: "My HbA1c dropped from 6.4 to 5.6 in 3 months. The doctor-led approach gave me real confidence I was in safe, expert hands.", img: "/images/single-img-two.jpg"    },
  { name: "Ananya Krishnan", result: "PCOS Managed Naturally",  stars: 5, text: "Finally a programme that understands PCOS. My cycles are regular, I've lost 12 kg and my energy is incredible.", img: "/images/single-img-one.png"    },
  { name: "Deepa Nair",      result: "Thyroid Under Control",   stars: 5, text: "My thyroid levels are stable and I've lost 10 kg. The lifestyle coaching helped me build habits I actually maintain.", img: "/images/single-img-fourteen.jpg"},
  { name: "Vikram Singh",    result: "Lost 25 kg in 6 months",  stars: 5, text: "The Elite plan was worth every rupee. Having a doctor, nutritionist and trainer coordinating for me made all the difference.", img: "/images/blog/03.jpg"           },
  { name: "Arjun Patel",     result: "Cholesterol Normalised",  stars: 5, text: "LDL dropped 40 points in 2 months. The nutrition and fitness plan worked perfectly together under medical supervision.", img: "/images/step-three.jpg"        },
];

const faqs = [
  { q: "Who are the doctors at WelloraFit?", a: "Our team includes MBBS and MD-qualified physicians specialising in obesity medicine, endocrinology and lifestyle medicine — all verified, registered practitioners." },
  { q: "Is this suitable for someone with a medical condition?", a: "Absolutely. WelloraFit is designed for conditions like diabetes, thyroid, PCOS and hypertension. Medical supervision is built into every plan." },
  { q: "How is WelloraFit different from a regular diet plan?", a: "We combine medical diagnosis, personalised nutrition, clinical fitness guidance and lifestyle coaching into one integrated system — not a generic calorie-counting app." },
  { q: "Can I continue my existing medications?", a: "Yes. Our doctors review your current medications and coordinate your wellness plan accordingly. We never ask you to stop prescribed medications without proper consultation." },
  { q: "What results can I realistically expect?", a: "Most clients see measurable results in 4–6 weeks. Sustainable changes of 6–20 kg over 3–6 months are common depending on plan choice and consistency." },
];

const blogs = [
  { tag: "Nutrition", title: "Why 80% of Diets Fail — And What Actually Works",           date: "March 2025",    img: "/images/blog/01.jpg"    },
  { tag: "Medical",   title: "The Link Between Insulin Resistance and Weight Gain",        date: "February 2025", img: "/images/blog/02.jpg"    },
  { tag: "Lifestyle", title: "Sleep & Weight Loss: The Connection No One Talks About",     date: "January 2025",  img: "/images/blog/03.jpg"    },
];

const heroSlides = [
  {
    label:    "Doctor-Led Weight Loss",
    heading:  ["Sustainable", "Weight Loss,", "Simplified"],
    accent:   "Weight Loss,",
    sub:      "WelloraFit combines medical expertise, personalised nutrition, clinical fitness and lifestyle coaching into one seamless programme — built for real, lasting results.",
    cta:      "Book Free Consultation",
    img:      "/images/single-img-five.jpg",
    stat:     { value: "500+", label: "Happy Clients" },
    tag:      "India's Integrated Wellness System",
    color:    "#0EA5E9",
  },
  {
    label:    "Nutrition & Metabolic Health",
    heading:  ["Eat Right,", "Feel Right,", "Live Right"],
    accent:   "Feel Right,",
    sub:      "Our certified nutritionists craft disease-specific meal plans that fuel your transformation — whether you're managing diabetes, PCOS, thyroid or simply want a healthier life.",
    cta:      "Explore Nutrition Plans",
    img:      "/images/single-img-eight.jpg",
    stat:     { value: "10+", label: "Health Conditions Treated" },
    tag:      "Certified Nutritionists",
    color:    "#8B5CF6",
  },
  {
    label:    "Fitness & Strength",
    heading:  ["Train Smarter,", "Not Harder,", "Get Results"],
    accent:   "Not Harder,",
    sub:      "Every fitness programme at WelloraFit is designed around your medical profile — safe, targeted, and coordinated with your doctor and nutritionist for maximum impact.",
    cta:      "View Fitness Plans",
    img:      "/images/blog/03.jpg",
    stat:     { value: "95%", label: "Client Success Rate" },
    tag:      "Licensed Trainers",
    color:    "#06B6D4",
  },
  {
    label:    "Lifestyle & Behavioural Coaching",
    heading:  ["Transform Your", "Habits,", "Transform Your Life"],
    accent:   "Habits,",
    sub:      "Sleep, stress, daily routines and mindset — our lifestyle coaches help you build the sustainable behaviours that keep your results permanent, not temporary.",
    cta:      "Start Lifestyle Coaching",
    img:      "/images/blog/01.jpg",
    stat:     { value: "12+", label: "Expert Specialists" },
    tag:      "Lifestyle Coaching",
    color:    "#6366F1",
  },
  {
    label:    "Real People, Real Results",
    heading:  ["Your Health,", "Transformed", "for Life"],
    accent:   "Transformed",
    sub:      "From reversing diabetes to managing PCOS and achieving significant weight loss — WelloraFit's 4-pillar system delivers results that speak for themselves.",
    cta:      "See Client Results",
    img:      "/images/single-img-two.jpg",
    stat:     { value: "4", label: "Integrated Pillars" },
    tag:      "Proven Results",
    color:    "#EC4899",
  },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function FadeIn({ children, delay = 0, direction = "up", className = "" }: {
  children: React.ReactNode; delay?: number;
  direction?: "up" | "left" | "right" | "none"; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const init = direction === "up" ? { y: 36, opacity: 0 }
    : direction === "left" ? { x: 48, opacity: 0 }
    : direction === "right" ? { x: -48, opacity: 0 }
    : { opacity: 0 };
  return (
    <motion.div ref={ref} initial={init} animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
      {children}
    </span>
  );
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 style={serif} className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight ${className}`}>
      {children}
    </h2>
  );
}

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div style={{ scaleX, transformOrigin: "left" }} className="fixed top-0 left-0 right-0 h-[3px] bg-linear-to-r from-blue-500 to-violet-500 z-[999]" />;
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function HomePage() {
  const [openFaq, setOpenFaq]   = useState<number | null>(null);
  const [tIdx, setTIdx]         = useState(0);
  const [slide, setSlide]       = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [dir, setDir]           = useState<1 | -1>(1);

  const perPage   = 3;
  const visible   = testimonials.slice(tIdx * perPage, tIdx * perPage + perPage);
  const totalPages = Math.ceil(testimonials.length / perPage);

  /* auto-advance hero every 5 s */
  useEffect(() => {
    const t = setInterval(() => goSlide(1), 5000);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide]);

  function goSlide(d: 1 | -1) {
    setDir(d);
    setPrevSlide(slide);
    setSlide((s) => (s + d + heroSlides.length) % heroSlides.length);
  }

  const s  = heroSlides[slide];
  const sp = prevSlide !== null ? heroSlides[prevSlide] : null;

  /* text animation variants */
  const textIn  = { opacity: 0, y: dir > 0 ? 32 : -32 };
  const textOut = { opacity: 0, y: dir > 0 ? -32 : 32 };

  return (
    <div style={{ background: "#FAF9F3", color: "#2D322C" }}>
      <ScrollBar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO SLIDER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#FAF9F3" }}>
        {/* right-side coloured panel that changes colour */}
        <motion.div key={`bg-${slide}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="absolute top-0 right-0 w-[52%] h-full rounded-bl-[100px] -z-0"
          style={{ background: `${s.color}12` }} />

        <div className="container mx-auto px-6 lg:px-20 py-28 grid lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* ── LEFT : animated text ── */}
          <div className="relative min-h-[480px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={slide}
                initial={textIn} animate={{ opacity: 1, y: 0 }} exit={textOut}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>

                {/* label pill */}
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-8"
                  style={{ background: `${s.color}18`, color: s.color }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: s.color }} />
                  {s.tag}
                </div>

                {/* heading */}
                <h1 style={serif} className="text-5xl lg:text-[62px] font-bold leading-[1.1] text-gray-900 mb-6">
                  {s.heading.map((line, i) => (
                    <span key={i} className={`block ${line === s.accent ? "" : ""}`}
                      style={line === s.accent ? { color: s.color } : {}}>
                      {line}
                    </span>
                  ))}
                </h1>

                {/* sub */}
                <p className="text-[17px] text-gray-500 leading-relaxed mb-10 max-w-md">{s.sub}</p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
                    style={{ background: s.color, boxShadow: `0 12px 32px ${s.color}40` }}>
                    {s.cta} <ArrowRight size={16} />
                  </Link>
                  <Link href="/about"
                    className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all">
                    Learn More
                  </Link>
                </div>

                {/* social proof */}
                <div className="flex items-center gap-5 flex-wrap">
                  <div className="flex -space-x-3">
                    {["/images/single-img-five.jpg","/images/blog/02.jpg","/images/blog/01.jpg","/images/single-img-one.png"].map((src, i) => (
                      <div key={i} className="w-11 h-11 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                        <Image src={src} alt="client" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-sm text-gray-500">Trusted by <strong className="text-gray-800">500+</strong> clients across India</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* slide controls (below text) */}
            <div className="flex items-center gap-4 mt-10">
              <button onClick={() => goSlide(-1)}
                className="w-11 h-11 rounded-full border-2 border-gray-300 hover:border-blue-500 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all">
                <ChevronRight size={18} className="rotate-180" />
              </button>
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => { setDir(i > slide ? 1 : -1); setPrevSlide(slide); setSlide(i); }}
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ width: i === slide ? 28 : 8, background: i === slide ? s.color : "#D1D5DB" }} />
                ))}
              </div>
              <button onClick={() => goSlide(1)}
                className="w-11 h-11 rounded-full border-2 border-gray-300 hover:border-blue-500 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all">
                <ChevronRight size={18} />
              </button>
              <span className="text-sm text-gray-400 ml-2 font-medium">
                {String(slide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ── RIGHT : image ── */}
          <div className="relative flex justify-center">
            {/* image with crossfade */}
            <div className="relative w-[340px] lg:w-[420px] h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
              <AnimatePresence mode="sync">
                {/* outgoing image */}
                {sp && (
                  <motion.div key={`img-out-${prevSlide}`}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.06 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                    className="absolute inset-0">
                    <Image src={sp.img} alt={sp.label} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  </motion.div>
                )}
                {/* incoming image */}
                <motion.div key={`img-in-${slide}`}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                  className="absolute inset-0">
                  <Image src={s.img} alt={s.label} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* label overlay bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <AnimatePresence mode="wait">
                  <motion.div key={`label-${slide}`}
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: s.color }}>{s.label}</p>
                    <p className="text-sm font-semibold text-gray-900">{s.stat.value} <span className="font-normal text-gray-500">{s.stat.label}</span></p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* floating stat card top-left */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-8 top-16 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 w-48 z-20">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${s.color}20` }}>
                <Stethoscope size={18} style={{ color: s.color }} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Verified Doctors</p>
                <p className="text-lg font-bold text-gray-900">12+</p>
              </div>
            </motion.div>

            {/* floating stat card bottom-right */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.8 }}
              className="absolute -right-6 bottom-28 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 w-44 z-20">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${s.color}20` }}>
                <TrendingUp size={18} style={{ color: s.color }} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Success Rate</p>
                <p className="text-lg font-bold text-gray-900">95%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MARQUEE STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="bg-blue-600 py-4 overflow-hidden">
        <div className="flex items-center gap-10 whitespace-nowrap animate-[marquee_22s_linear_infinite]">
          {[...Array(4)].flatMap((_, r) =>
            ["Doctor-Led Care", "Certified Nutritionists", "Personal Trainers", "Lifestyle Coaching", "100% Personalised", "Clinically Proven Results", "500+ Happy Clients"].map((t, i) => (
              <span key={`${r}-${i}`} className="inline-flex items-center gap-3 text-white/90 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />{t}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PILLARS / SERVICES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel>What We Do</SectionLabel>
              <SectionHeading>
                The WelloraFit <span className="text-blue-600">Core System</span>
              </SectionHeading>
              <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
                Most programmes address one aspect of health. WelloraFit integrates all four pillars simultaneously — because your body is an ecosystem, not a single problem.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }}
                  className="bg-white border border-gray-100 rounded-3xl p-8 text-center cursor-pointer transition-all hover:shadow-xl hover:border-blue-100 group"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ backgroundColor: `${p.color}18` }}>
                    <p.icon size={28} style={{ color: p.color }} />
                  </div>
                  <h3 style={serif} className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ABOUT SPLIT — image left, text right
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: "#FAF9F3" }} className="py-28">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* images */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="rounded-[40px] overflow-hidden aspect-square relative shadow-2xl">
                  <Image src="/images/single-img-eight.jpg" alt="Healthy cooking" fill className="object-cover" />
                </div>
                {/* inset badge */}
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -right-8 top-1/3 bg-white rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-blue-600">95%</p>
                  <p className="text-xs text-gray-500 mt-0.5">Success Rate</p>
                </motion.div>
                {/* small secondary image */}
                <div className="absolute -bottom-8 -left-6 w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <Image src="/images/step-one.jpg" alt="Doctor" fill className="object-cover" />
                </div>
              </div>
            </FadeIn>

            {/* text */}
            <div className="lg:pl-8">
              <FadeIn delay={0.1}>
                <SectionLabel>Our Approach</SectionLabel>
                <SectionHeading className="mb-6">
                  Real Results Through<br /><span className="text-blue-600">Integrated Care</span>
                </SectionHeading>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  WelloraFit was built because no single-pillar programme works long term. When your doctor, nutritionist, trainer and lifestyle coach work together with a shared view of your health, everything changes.
                </p>
              </FadeIn>

              <div className="space-y-4 mb-10">
                {[
                  "Verified MBBS & MD doctors in every consultation",
                  "Custom nutrition plans for 10+ health conditions",
                  "Fitness programmes designed around your medical profile",
                  "Behavioural coaching for sleep, stress and daily habits",
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.15 + i * 0.08}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                      <p className="text-gray-700 text-[15px]">{item}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.55}>
                <Link href="/about"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-200/50">
                  Discover Our Story <ArrowRight size={16} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CONDITIONS GRID
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel>Conditions We Treat</SectionLabel>
              <SectionHeading>
                Health Conditions We <span className="text-blue-600">Specialise In</span>
              </SectionHeading>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {conditions.map((c, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <motion.div whileHover={{ y: -6, boxShadow: `0 16px 32px ${c.color}20` }}
                  className="bg-white border border-gray-100 rounded-2xl p-6 text-center cursor-pointer transition-all hover:border-blue-100"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${c.color}15` }}>
                    <c.icon size={20} style={{ color: c.color }} />
                  </div>
                  <p className="text-xs font-semibold text-gray-800 leading-snug">{c.title}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW IT WORKS — 3 image steps
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: "#FAF9F3" }} className="py-28">
        <div className="container mx-auto px-6 lg:px-20">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel>Simple Process</SectionLabel>
              <SectionHeading>
                How <span className="text-blue-600">WelloraFit Works</span>
              </SectionHeading>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Three simple steps from first contact to lasting transformation.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <motion.div whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={s.img} alt={s.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-5xl font-bold text-white/20" style={serif}>{s.num}</span>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white text-sm font-bold mb-4">
                      {s.num}
                    </div>
                    <h3 style={serif} className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BEFORE / AFTER RESULTS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* left: before/after image */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/before-after-img-1.jpg" alt="Before and after results" width={600} height={450} className="w-full object-cover" />
                </div>
                {/* pill labels */}
                <div className="absolute top-6 left-6 bg-red-100 text-red-700 text-xs font-bold px-3 py-1.5 rounded-full">Before</div>
                <div className="absolute top-6 right-6 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">After</div>
              </div>
            </FadeIn>

            {/* right: text + result pills */}
            <div>
              <FadeIn delay={0.1}>
                <SectionLabel>Real Transformations</SectionLabel>
                <SectionHeading className="mb-6">
                  Results That <span className="text-blue-600">Speak for Themselves</span>
                </SectionHeading>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Our integrated 4-pillar approach delivers results that no single-discipline programme can match. Real clients, real data, real lives transformed.
                </p>
              </FadeIn>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {results.map((r, i) => (
                  <FadeIn key={i} delay={0.2 + i * 0.1}>
                    <div className="bg-slate-50 rounded-2xl p-4 text-center border border-gray-100">
                      <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 border-2 border-blue-200">
                        <Image src={r.img} alt={r.name} width={56} height={56} className="object-cover w-full h-full" />
                      </div>
                      <p className="text-xl font-bold text-blue-600">{r.kg}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{r.name}</p>
                      <p className="text-[11px] text-gray-400">{r.time}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.5}>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-200/50">
                  Start Your Transformation <ArrowRight size={16} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS BAND
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center text-white">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <s.icon size={24} className="text-white" />
                  </div>
                  <p style={serif} className="text-5xl font-bold mb-2">{s.number}</p>
                  <p className="text-blue-200 text-sm font-medium">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PRICING
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: "#FAF9F3" }} className="py-28">
        <div className="container mx-auto px-6 lg:px-20">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel>Transparent Pricing</SectionLabel>
              <SectionHeading>
                Choose Your <span className="text-blue-600">Wellness Plan</span>
              </SectionHeading>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Flexible, transparent pricing with no hidden fees. Medical supervision included in every plan.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}
                  className={`relative rounded-3xl p-8 border transition-all ${
                    plan.popular
                      ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-300/40"
                      : "bg-white border-gray-100 text-gray-900 hover:shadow-xl"
                  }`}
                  style={!plan.popular ? { boxShadow: "0 4px 24px rgba(0,0,0,0.07)" } : {}}>

                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-900 text-xs font-bold px-5 py-1.5 rounded-full shadow">
                      Most Popular
                    </div>
                  )}

                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>
                    {plan.badge}
                  </p>
                  <h3 style={serif} className="text-2xl font-bold mb-5">{plan.name}</h3>

                  <div className="flex items-baseline gap-1 mb-7">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>{plan.period}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 size={15} className={plan.popular ? "text-cyan-300" : "text-blue-500"} />
                        <span className={`text-sm ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all ${
                      plan.popular
                        ? "bg-white text-blue-700 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200/50"
                    }`}>
                    Get Started <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TESTIMONIALS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel>Client Stories</SectionLabel>
              <SectionHeading>
                What Our <span className="text-blue-600">Clients Say</span>
              </SectionHeading>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {visible.map((t, i) => (
              <FadeIn key={`${tIdx}-${i}`} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }}
                  className="bg-white border border-gray-100 rounded-3xl p-8 transition-all hover:shadow-xl relative"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                  <Quote size={32} className="text-blue-100 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, j) => <Star key={j} size={13} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 shrink-0">
                      <Image src={t.img} alt={t.name} width={48} height={48} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-blue-600 font-medium">{t.result}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* pagination */}
          <div className="flex justify-center items-center gap-3">
            <button onClick={() => setTIdx(Math.max(0, tIdx - 1))} disabled={tIdx === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-30 transition-all">
              <ChevronRight size={16} className="rotate-180" />
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button key={idx} onClick={() => setTIdx(idx)}
                className={`h-2.5 rounded-full transition-all ${tIdx === idx ? "w-7 bg-blue-600" : "w-2.5 bg-gray-300"}`} />
            ))}
            <button onClick={() => setTIdx(Math.min(totalPages - 1, tIdx + 1))} disabled={tIdx >= totalPages - 1}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-30 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA BANNER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: "#FAF9F3" }} className="py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <FadeIn>
            <div className="relative rounded-[40px] overflow-hidden">
              {/* bg image */}
              <div className="absolute inset-0">
                <Image src="/images/bg-image/row-bgimage-5.jpg" alt="background" fill className="object-cover" />
                <div className="absolute inset-0 bg-blue-900/75" />
              </div>
              {/* content */}
              <div className="relative z-10 text-center text-white py-20 px-8">
                <SectionLabel>Ready to Begin?</SectionLabel>
                <h2 style={serif} className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Still Not Sure Where to Start?
                </h2>
                <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10">
                  Book a free 20-minute discovery call. No commitment — just clarity on the best path forward for your health.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-all shadow-xl">
                    Book Free Consultation <ArrowRight size={18} />
                  </Link>
                  <a href="tel:+919876543210"
                    className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all">
                    <Phone size={18} /> Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FAQ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

            {/* left sticky */}
            <FadeIn direction="right">
              <div className="lg:sticky lg:top-28">
                <SectionLabel>FAQ</SectionLabel>
                <SectionHeading className="mb-6">
                  Common <span className="text-blue-600">Questions</span>
                </SectionHeading>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Everything you need to know about WelloraFit — our approach, plans and what to expect.
                </p>
                <div className="relative rounded-3xl overflow-hidden h-56">
                  <Image src="/images/single-img-six.jpg" alt="FAQ visual" fill className="object-cover" />
                </div>
              </div>
            </FadeIn>

            {/* right accordions */}
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
                    style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors">
                      <span className="font-semibold text-gray-900 pr-4 text-[15px]">{faq.q}</span>
                      <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        {openFaq === i ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}>
                          <p className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BLOG
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: "#FAF9F3" }} className="py-28">
        <div className="container mx-auto px-6 lg:px-20">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <SectionLabel>Health Insights</SectionLabel>
                <SectionHeading>
                  From Our <span className="text-blue-600">Wellness Blog</span>
                </SectionHeading>
              </div>
              <Link href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm border-b-2 border-blue-200 hover:border-blue-600 pb-0.5">
                View All Articles <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((b, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.article whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                  <div className="relative h-52 overflow-hidden">
                    <Image src={b.img} alt={b.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full text-blue-700">
                      {b.tag}
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-xs text-gray-400 mb-3">{b.date}</p>
                    <h3 style={serif} className="text-xl font-bold text-gray-900 leading-snug mb-4 hover:text-blue-600 transition-colors">{b.title}</h3>
                    <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold">
                      Read Article <ChevronRight size={14} />
                    </span>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FINAL CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto px-6">
            <SectionLabel>Begin Today</SectionLabel>
            <h2 style={serif} className="text-4xl font-bold text-gray-900 mb-4">
              Start Your Transformation Journey
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Join 500+ Indians who have reclaimed their health with WelloraFit's doctor-led, integrated approach.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full transition-all shadow-xl shadow-blue-200/50 text-lg">
              Get Started Free <ArrowRight size={20} />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* marquee keyframe */}
      <style jsx global>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-25%); } }
      `}</style>
    </div>
  );
}
