"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence, useScroll, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Stethoscope, Apple, Dumbbell, Leaf, ArrowRight, CheckCircle2,
  Star, ChevronLeft, ChevronRight, TrendingUp, Shield, Heart,
  Phone, X, Activity, Users, Target
} from "lucide-react";

/* ── data ── */
const heroSlides = [
  {
    image: "/images/slides/slider-mainbg-010.jpg",
    badge: "Medically Supervised Care",
    title: "Sustainable Weight Loss,",
    highlight: "Simplified.",
    sub: "Where medical expertise, nutrition, fitness, and lifestyle management come together to create lasting health outcomes.",
  },
  {
    image: "/images/slides/slider-mainbg-001-old.jpg",
    badge: "Doctor-Led Programs",
    title: "Root-Cause Health",
    highlight: "Solutions.",
    sub: "We address the root causes of weight gain through science-backed, personalized care — not just symptoms.",
  },
  {
    image: "/images/slides/hero-slide-03.jpg",
    badge: "One Platform. One Plan.",
    title: "Your Complete",
    highlight: "Health Journey.",
    sub: "Doctors, dietitians, and fitness trainers — all coordinating together for your transformation.",
  },
];

const pillars = [
  { icon: Stethoscope, title: "Medical", desc: "Diagnosis, safety, and clinical oversight by verified doctors.", color: "#0EA5E9", bg: "rgba(14,165,233,0.12)", num: "01" },
  { icon: Apple, title: "Nutrition", desc: "Sustainable eating plans, metabolic health & disease-specific diets.", color: "#F59E0B", bg: "rgba(245,158,11,0.12)", num: "02" },
  { icon: Dumbbell, title: "Fitness", desc: "Safe, goal-oriented training aligned with medical and nutritional plans.", color: "#10B981", bg: "rgba(16,185,129,0.12)", num: "03" },
  { icon: Leaf, title: "Lifestyle", desc: "Sleep, stress, daily routines & behavioral change for lasting results.", color: "#6366F1", bg: "rgba(99,102,241,0.12)", num: "04" },
];

const serviceDetails = [
  {
    title: "Doctor Consultations & Medical Assessments",
    image: "/images/services/Doctor Consultations.jpg",
    href: "/services/doctor-consultations",
    icon: Stethoscope,
    color: "#0EA5E9",
    desc: "Comprehensive health evaluation, blood analysis, and root-cause identification by certified doctors.",
    features: ["74+ blood marker analysis", "Root-cause diagnosis", "Personalized health report", "Ongoing clinical oversight", "Medication guidance"],
  },
  {
    title: "Personalized Nutrition & Diet Planning",
    image: "/images/services/Personalized nutrition.jpg",
    href: "/services/nutrition-diet-planning",
    icon: Apple,
    color: "#F59E0B",
    desc: "Meal strategies built around your metabolic profile, blood markers and food preferences.",
    features: ["Metabolic profile analysis", "Disease-specific meal plans", "Macro & micronutrient balance", "Regular diet adjustments", "Culturally sensitive menus"],
  },
  {
    title: "Fitness Training & Activity Programming",
    image: "/images/services/Fitness Programming.jpg",
    href: "/services/fitness-training",
    icon: Dumbbell,
    color: "#10B981",
    desc: "Structured, safe exercise plans calibrated to your health status and weight loss goals.",
    features: ["Medical fitness clearance", "Customized workout plans", "Home & gym options", "Progressive overload", "Injury-safe programming"],
  },
  {
    title: "Lifestyle Coaching & Habit Correction",
    image: "/images/services/Stress.jpg",
    href: "/services/lifestyle-coaching",
    icon: Leaf,
    color: "#6366F1",
    desc: "Behavioral reset covering sleep quality, stress management, and daily routine optimization.",
    features: ["Sleep pattern correction", "Stress reduction techniques", "Habit stacking strategies", "Mindful eating support", "Daily routine design"],
  },
  {
    title: "Ongoing Progress Monitoring & Adjustments",
    image: "/images/services/Ongoing Progress Monitoring & Adjustments.jpg",
    href: "/services/progress-monitoring",
    icon: Activity,
    color: "#EC4899",
    desc: "Regular follow-ups, blood work reviews, and program adjustments to keep you on track.",
    features: ["Monthly progress reviews", "Blood report analysis", "Real-time plan adjustments", "WhatsApp support access", "Goal recalibration"],
  },
];

const steps = [
  { num: 1, title: "Blood & Health Assessment", image: "/images/step/Comprehensive Blood & Health Assessment.jpg", desc: "74+ diagnostic markers for deep health insight." },
  { num: 2, title: "Doctor Consultation", image: "/images/step/Doctor Consultation & Root Cause Analysis.jpg", desc: "Root cause analysis by medical experts." },
  { num: 3, title: "Personalized Care Plan", image: "/images/step/Care Plan.jpg", desc: "Health data converted into strategic action." },
  { num: 4, title: "Weight Loss Program", image: "/images/step/Structured Weight Loss Program.jpg", desc: "Focused fat loss and metabolic balance." },
  { num: 5, title: "Nutrition & Fitness Plan", image: "/images/step/Nutrition & Fitness Plan.jpg", desc: "Customized plans aligned to your lab markers." },
  { num: 6, title: "Continuous Monitoring", image: "/images/step/Continuous Monitoring.jpg", desc: "Regular calls, WhatsApp, and report reviews." },
  { num: 7, title: "Lifestyle Transformation", image: "/images/step/Sustainable Lifestyle Transformation.jpg", desc: "Daily-integrated habits that last for life." },
];

const testimonials = [
  { name: "Priya M.", role: "School Teacher, Delhi", text: "WelloraFit helped me lose 6 kg and regain confidence. The doctor-guided approach made all the difference. I feel healthier than ever.", rating: 5 },
  { name: "Arjun R.", role: "Airline Crew, Chennai", text: "My bloating reduced, and my stamina during long flights has improved drastically. This program changed my entire relationship with health.", rating: 5 },
  { name: "Sneha K.", role: "Startup Founder, Hyderabad", text: "This is not just a fitness program — it is a complete health ecosystem. Best investment I have ever made in myself.", rating: 5 },
];

const blogs = [
  { title: "Breaking Down Continuous Glucose Monitoring for Weight Management", image: "/images/blog/CB01.jpg", date: "12 Apr 2025", href: "/blog/continuous-glucose-monitoring", cat: "Nutrition" },
  { title: "Why Most Diets Fail: The Hidden Role of Hormones and Inflammation", image: "/images/blog/CB02.jpg", date: "12 Apr 2025", href: "/blog/why-diets-fail-hormones", cat: "Medical" },
  { title: "Medical Myths About Fat Loss You Should Stop Believing", image: "/images/blog/CB03.jpg", date: "12 Apr 2025", href: "/blog/medical-myths-fat-loss", cat: "Medical" },
];

/* ── helpers ── */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left", position: "fixed", top: 0, left: 0, right: 0, height: "3px", zIndex: 9999, background: "linear-gradient(90deg, #0EA5E9, #10B981)" }}
    />
  );
}

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 50;
    const increment = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

function StatNumber({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(value, inView);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
      <motion.div whileHover={{ scale: 1.08 }}>
        <div className="text-5xl font-black text-white mb-1 leading-none tabular-nums">{count}{suffix}</div>
        <div className="text-sm text-white/70 font-medium">{label}</div>
      </motion.div>
    </motion.div>
  );
}

function FadeIn({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode; delay?: number; className?: string; direction?: "up" | "left" | "right" | "scale" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial =
    direction === "left" ? { opacity: 0, x: -50, scale: 0.97 } :
      direction === "right" ? { opacity: 0, x: 50, scale: 0.97 } :
        direction === "scale" ? { opacity: 0, scale: 0.85 } :
          { opacity: 0, y: 40, scale: 0.97 };
  return (
    <motion.div ref={ref} initial={initial} animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionHeader({ badge, title, highlight, sub }: { badge: string; title: string; highlight?: string; sub?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-16">
      <motion.span className="pill-badge mb-4 inline-block" initial={{ scale: 0.8, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.1, duration: 0.4 }}>{badge}</motion.span>
      <h2 className="section-title mb-2">{title}{highlight && <> <span className="gradient-text">{highlight}</span></>}</h2>
      <div className="accent-divider" />
      {sub && <p className="section-subtitle mt-4">{sub}</p>}
    </motion.div>
  );
}

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [tSlide, setTSlide] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);

  // Mouse parallax for hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const floatX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const floatY = useTransform(smoothY, [-1, 1], [-12, 12]);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTSlide(s => (s + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const cur = heroSlides[slide];
  const activeSvc = activeService !== null ? serviceDetails[activeService] : null;

  return (
    <>
      <ScrollProgressBar />

      {/* ═══════════════════════════════════════════
          HERO — full-screen background image slider
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Background image */}
        <AnimatePresence mode="wait">
          <motion.div key={slide} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 1.0, ease: "easeInOut" }} className="absolute inset-0">
            <Image src={cur.image} alt="hero" fill className="object-cover" priority />
            <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.6) 55%, rgba(10,22,40,0.25) 100%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 40%)" }} />
          </motion.div>
        </AnimatePresence>


        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-24 min-h-screen flex items-center">
          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div key={slide} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                <motion.span
                  className="inline-block mb-4 sm:mb-6 text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                  style={{ background: "rgba(14,165,233,0.2)", color: "#7DD3FC", border: "1px solid rgba(14,165,233,0.35)", backdropFilter: "blur(8px)" }}
                  initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15, duration: 0.4 }}
                >
                  {cur.badge}
                </motion.span>
                <h1 className="font-black text-white mb-4 sm:mb-6" style={{ fontSize: "clamp(2rem,5.5vw,4.8rem)", lineHeight: 1.1, letterSpacing: "-0.02em", textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}>
                  {cur.title}<br />
                  <motion.span
                    style={{ background: "linear-gradient(135deg, #38BDF8, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >{cur.highlight}</motion.span>
                </h1>
                <motion.p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 max-w-xl" style={{ color: "rgba(255,255,255,0.78)", lineHeight: "1.75" }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
                  {cur.sub}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-3 mb-6 sm:mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="btn-primary text-sm sm:text-base py-3 px-5 sm:py-3.5 sm:px-7">
                  Get Appointment <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/about" className="font-bold py-3 px-5 sm:py-3.5 sm:px-7 rounded-full text-sm inline-flex items-center gap-2 transition-all" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "white" }}>
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust pills — 2 columns on mobile */}
            <motion.div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
              {["Medically Supervised", "Verified Professionals", "Root-Cause Approach", "Sustainable Results"].map((t, i) => (
                <motion.span key={t} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full justify-center sm:justify-start"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}>
                  <CheckCircle2 size={11} style={{ color: "#34D399", flexShrink: 0 }} /><span className="truncate">{t}</span>
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating stats cards — mouse parallax */}
        <motion.div className="absolute bottom-24 right-8 hidden xl:flex flex-col gap-3 z-10" style={{ x: floatX, y: floatY }}>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl"
            style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(14,165,233,0.3)" }}>
              <Users size={18} className="text-sky-300" />
            </div>
            <div>
              <p className="text-white font-black text-lg leading-none">500+</p>
              <p className="text-white/60 text-xs">Happy Clients</p>
            </div>
          </motion.div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
            className="px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl"
            style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.3)" }}>
              <Target size={18} className="text-emerald-300" />
            </div>
            <div>
              <p className="text-white font-black text-lg leading-none">300+</p>
              <p className="text-white/60 text-xs">Transformations</p>
            </div>
          </motion.div>
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
            className="px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl"
            style={{ background: "rgba(14,165,233,0.25)", backdropFilter: "blur(16px)", border: "1px solid rgba(14,165,233,0.4)" }}>
            <Phone size={16} className="text-sky-300" />
            <p className="text-white font-bold text-sm">+91 98980 56401</p>
          </motion.div>
        </motion.div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} onClick={() => setSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white"
            style={{ background: "rgba(14,165,233,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.5)" }}>
            <ChevronLeft size={16} />
          </motion.button>
          {heroSlides.map((_, i) => (
            <motion.button key={i} onClick={() => setSlide(i)} animate={{ width: i === slide ? "32px" : "8px", background: i === slide ? "#38BDF8" : "rgba(255,255,255,0.3)" }}
              transition={{ duration: 0.3 }} className="h-2 rounded-full" />
          ))}
          <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} onClick={() => setSlide(s => (s + 1) % heroSlides.length)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white"
            style={{ background: "rgba(14,165,233,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.5)" }}>
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4 PILLARS
      ═══════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="Our Foundation" title="The 4-Pillar" highlight="Model" sub="Medical · Nutrition · Fitness · Lifestyle — all working together, not in isolation." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.title} delay={i * 0.12}>
                  <motion.div className="card-3d p-7 h-full relative overflow-hidden group cursor-default"
                    whileHover={{ y: -8, boxShadow: `0 24px 60px ${p.color}25` }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <div className="absolute top-3 right-4 text-6xl font-black opacity-5 select-none" style={{ color: p.color }}>{p.num}</div>
                    <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.12 }} transition={{ duration: 0.4 }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: p.bg, color: p.color }}>
                      <Icon size={26} />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
                    <motion.div className="absolute bottom-0 left-0 h-1 rounded-b-3xl"
                      initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.4 }}
                      style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}
                  whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}>
                  <Image src="/images/about.jpg" alt="About WelloraFit" fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, rgba(12,26,46,0.9), transparent)" }}>
                    <div className="grid grid-cols-2 gap-4">
                      {[{ v: "500+", l: "Happy Clients" }, { v: "300+", l: "Transformations" }].map(s => (
                        <div key={s.l}>
                          <div className="text-2xl font-black text-white">{s.v}</div>
                          <div className="text-xs text-white/70">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute -right-6 top-12 rounded-2xl p-4 shadow-2xl hidden md:block"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <Image src="/images/about-guided.jpg" alt="Doctor" width={130} height={90} className="rounded-xl object-cover w-32 h-22" />
                  <p className="text-xs font-bold mt-2 text-center" style={{ color: "var(--accent)" }}>Expert Guided Care</p>
                </motion.div>
                {/* Decorative ring */}
                <motion.div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full hidden md:block"
                  style={{ border: "2px dashed var(--accent)", opacity: 0.2 }}
                  animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <span className="pill-badge mb-5">Who We Are</span>
              <h2 className="section-title mb-6">Root-Cause Focused<br /><span className="gradient-text">Health Solutions</span></h2>
              <p className="text-base mb-8" style={{ color: "var(--text-secondary)", lineHeight: "1.85" }}>
                WelloraFit is not a diet plan. It is a medically guided lifestyle transformation program designed to address the root causes of weight gain and lifestyle disorders — through blood tests, expert consultations, personalized nutrition, and fitness support.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { letter: "O", color: "#0EA5E9", title: "Optimize Your Metabolism", desc: "Analyze metabolism, habits, and health markers to build foundational changes." },
                  { letter: "R", color: "#F59E0B", title: "Reset Your Habits", desc: "Restructure nutrition, movement, and daily patterns for lasting change." },
                  { letter: "A", color: "#10B981", title: "Align for Sustainability", desc: "Create long-term maintenance strategies and lifestyle balance." },
                ].map((item, i) => (
                  <motion.div key={item.letter} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.15, duration: 0.55 }}
                    whileHover={{ x: 6, boxShadow: `4px 4px 20px ${item.color}18` }}
                    className="flex gap-4 items-start p-4 rounded-2xl transition-colors cursor-default"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-xl shrink-0 text-white shadow-lg" style={{ background: item.color }}>
                      {item.letter}
                    </motion.div>
                    <div>
                      <p className="font-bold mb-0.5" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/about" className="btn-primary">Our Story <ArrowRight size={16} /></Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" className="btn-outline">Contact Us</Link>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7 STEPS — auto-scrolling marquee
      ═══════════════════════════════════════════ */}
      <section className="section-pad overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="How It Works" title="Your 7-Step" highlight="Health Journey" sub="A structured, medically guided process from assessment to sustainable transformation." />
        </div>
        <div className="marquee-wrap py-3">
          <div className="marquee-track">
            {[...steps, ...steps].map((s, i) => (
              <motion.div key={i} className="card-3d overflow-hidden shrink-0 group" style={{ width: "260px" }}
                whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(14,165,233,0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <div className="relative h-44 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,26,46,0.75) 0%, transparent 50%)" }} />
                  <div className="absolute top-3 left-3">
                    <div className="step-num" style={{ width: "40px", height: "40px", minWidth: "40px", fontSize: "0.85rem" }}>{s.num}</div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-xs leading-tight">{s.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — interactive expandable cards
      ═══════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="What We Offer" title="Our Core" highlight="Services" sub="Five integrated services working together for your complete health transformation. Click any service to explore." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {serviceDetails.map((svc, i) => {
              const Icon = svc.icon;
              const isActive = activeService === i;
              return (
                <motion.button key={svc.title} onClick={() => setActiveService(isActive ? null : i)}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6, boxShadow: `0 16px 45px ${svc.color}30` }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden rounded-2xl p-5 text-left transition-colors cursor-pointer"
                  style={{
                    background: isActive ? svc.color : "var(--bg-card)",
                    border: `2px solid ${isActive ? svc.color : "var(--border)"}`,
                  }}>
                  <motion.div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    animate={{ background: isActive ? "rgba(255,255,255,0.2)" : `${svc.color}18`, color: isActive ? "white" : svc.color }}
                    transition={{ duration: 0.3 }}>
                    <Icon size={22} />
                  </motion.div>
                  <h3 className="font-bold text-sm leading-snug mb-2" style={{ color: isActive ? "white" : "var(--text-primary)" }}>
                    {svc.title}
                  </h3>
                  <span className="text-xs font-semibold flex items-center gap-1" style={{ color: isActive ? "rgba(255,255,255,0.75)" : svc.color }}>
                    {isActive ? "Close" : "Explore"} <motion.span animate={{ rotate: isActive ? 45 : 0 }} transition={{ duration: 0.25 }}><ArrowRight size={12} /></motion.span>
                  </span>
                  {/* Animated shine sweep on hover */}
                  {!isActive && (
                    <motion.div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                      style={{ background: `linear-gradient(135deg, transparent 40%, ${svc.color}12 60%, transparent 70%)` }} />
                  )}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {activeSvc && (
              <motion.div initial={{ opacity: 0, height: 0, marginTop: 0 }} animate={{ opacity: 1, height: "auto", marginTop: 16 }} exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-3xl" style={{ border: "1px solid var(--border)" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2" style={{ background: "var(--bg-card)" }}>
                  <div className="relative h-64 lg:h-auto min-h-64">
                    <Image src={activeSvc.image} alt={activeSvc.title} fill className="object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,26,46,0.5), transparent)" }} />
                    <motion.button whileHover={{ scale: 1.1, rotate: 90 }} transition={{ duration: 0.2 }}
                      onClick={() => setActiveService(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white"
                      style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}>
                      <X size={16} />
                    </motion.button>
                  </div>
                  <div className="p-8 lg:p-10">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg" style={{ background: activeSvc.color }}>
                      <activeSvc.icon size={22} />
                    </motion.div>
                    <h3 className="text-xl font-black mb-3" style={{ color: "var(--text-primary)" }}>{activeSvc.title}</h3>
                    <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{activeSvc.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {activeSvc.features.map((f, fi) => (
                        <motion.li key={f} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + fi * 0.08 }}
                          className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <CheckCircle2 size={16} style={{ color: activeSvc.color, flexShrink: 0 }} />
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link href={activeSvc.href} className="btn-primary text-sm py-2.5 px-6">View Full Details <ArrowRight size={15} /></Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="btn-outline text-sm py-2.5 px-6">Book Now</Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY DIFFERENT
      ═══════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="Why WelloraFit" title="What Makes Us" highlight="Different" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Integrated & Medically Aligned Nutrition", desc: "Our nutrition plans are medically aligned, not trend-based. Dietitians work in close coordination with doctors.", color: "#0EA5E9", gradient: "linear-gradient(135deg, #0EA5E9, #38BDF8)" },
              { icon: TrendingUp, title: "Personalized Fitness & Lifestyle", desc: "Fitness plans carefully adjusted to your specific nutrition and health status for long-term adherence.", color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)" },
              { icon: Heart, title: "Truly Multidisciplinary Care", desc: "A complete care model integrating all aspects of your well-being for comprehensive, lasting support.", color: "#10B981", gradient: "linear-gradient(135deg, #10B981, #34D399)" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.15}>
                  <motion.div className="card-3d p-8 h-full relative overflow-hidden group cursor-default"
                    whileHover={{ y: -8, boxShadow: `0 24px 60px ${item.color}22` }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}>
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: item.gradient }} />
                    {/* Animated glow on hover */}
                    <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 30% 30%, ${item.color}10, transparent 70%)` }} />
                    <motion.div whileHover={{ scale: 1.15, rotate: 5 }} className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg" style={{ background: item.gradient }}>
                      <Icon size={28} />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAND — count-up animation
      ═══════════════════════════════════════════ */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #10B981 100%)" }}>
        {/* Animated background rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full"
              style={{ width: `${200 + i * 120}px`, height: `${200 + i * 120}px`, border: "1px solid rgba(255,255,255,0.1)", left: `${20 + i * 25}%`, top: "50%", transform: "translateY(-50%)" }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut", delay: i * 0.8 }} />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatNumber value={500} suffix="+" label="Happy Customers" />
            <StatNumber value={300} suffix="+" label="Successful Transformations" />
            <StatNumber value={74} suffix="+" label="Health Markers Assessed" />
            <StatNumber value={4} label="Integrated Pillars" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="Real Results" title="What Our" highlight="Clients Say" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div key={tSlide} initial={{ opacity: 0, x: 40, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -40, scale: 0.98 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="card-3d p-10 relative overflow-hidden h-full" style={{ background: "var(--bg-card)" }}>
                  <div className="absolute -top-4 -left-2 text-[120px] font-serif leading-none opacity-5 select-none" style={{ color: "var(--accent)" }}>"</div>
                  <div className="flex mb-5">
                    {Array.from({ length: testimonials[tSlide].rating }).map((_, i) => (
                      <motion.div key={i} initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: i * 0.07, type: "spring" }}>
                        <Star size={20} fill="var(--accent-gold)" style={{ color: "var(--accent-gold)" }} />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xl leading-relaxed mb-8 font-medium" style={{ color: "var(--text-primary)" }}>
                    &ldquo;{testimonials[tSlide].text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.1 }} className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg"
                      style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-green))" }}>
                      {testimonials[tSlide].name[0]}
                    </motion.div>
                    <div>
                      <p className="font-bold text-base" style={{ color: "var(--text-primary)" }}>{testimonials[tSlide].name}</p>
                      <p className="text-sm" style={{ color: "var(--accent)" }}>{testimonials[tSlide].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex items-center gap-3 mt-5">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setTSlide(s => (s - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--accent-pale)", color: "var(--accent)" }}>
                  <ChevronLeft size={18} />
                </motion.button>
                {testimonials.map((_, i) => (
                  <motion.button key={i} onClick={() => setTSlide(i)} animate={{ width: i === tSlide ? "28px" : "8px", background: i === tSlide ? "var(--accent)" : "var(--border)" }}
                    transition={{ duration: 0.3 }} className="h-2 rounded-full" />
                ))}
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setTSlide(s => (s + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--accent-pale)", color: "var(--accent)" }}>
                  <ChevronRight size={18} />
                </motion.button>
              </div>
            </div>
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }} onClick={() => setTSlide(i)} className="card-3d p-5 cursor-pointer"
                  style={{ background: i === tSlide ? "linear-gradient(135deg, var(--accent), #0284C7)" : "var(--bg-card)", borderColor: i === tSlide ? "var(--accent)" : "var(--border)" }}>
                  <div className="flex mb-2">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={12} fill={i === tSlide ? "rgba(255,255,255,0.8)" : "var(--accent-gold)"} style={{ color: i === tSlide ? "rgba(255,255,255,0.8)" : "var(--accent-gold)" }} />
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed mb-3 line-clamp-2" style={{ color: i === tSlide ? "rgba(255,255,255,0.85)" : "var(--text-secondary)" }}>&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="text-xs font-bold" style={{ color: i === tSlide ? "white" : "var(--text-primary)" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: i === tSlide ? "rgba(255,255,255,0.65)" : "var(--text-muted)" }}>{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOG
      ═══════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader badge="Knowledge Hub" title="Latest from" highlight="Our Blog" sub="Science-backed insights on weight loss, nutrition, and metabolic health." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <FadeIn key={b.href} delay={i * 0.12}>
                <motion.div whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(14,165,233,0.15)" }} transition={{ type: "spring", stiffness: 280, damping: 20 }}>
                  <Link href={b.href} className="card-3d overflow-hidden group block h-full">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={b.image} alt={b.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(14,165,233,0.2)" }} />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: "var(--accent)" }}>{b.cat}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs mb-3 font-semibold" style={{ color: "var(--accent-gold)" }}>{b.date}</p>
                      <h3 className="font-bold text-sm mb-4 leading-snug" style={{ color: "var(--text-primary)" }}>{b.title}</h3>
                      <motion.span className="text-xs font-bold flex items-center gap-1.5" style={{ color: "var(--accent)" }}
                        whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                        Read Article <ArrowRight size={13} />
                      </motion.span>
                    </div>
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link href="/blog" className="btn-outline">View All Articles <ArrowRight size={15} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn direction="scale">
            <div className="rounded-3xl p-12 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #10B981 100%)" }}>
              {/* Animated decorative rings */}
              {[{ size: 128, right: 32, top: 16 }, { size: 80, left: 32, bottom: 16 }, { size: 64, left: "25%", top: "50%" }].map((style, i) => (
                <motion.div key={i} className="absolute rounded-full border-4 border-white pointer-events-none"
                  style={{ width: style.size, height: style.size, opacity: 0.12, ...(style as Record<string, unknown>) }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut", delay: i * 0.7 }} />
              ))}
              {/* Floating particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-white pointer-events-none"
                  style={{ left: `${20 + i * 20}%`, top: `${20 + (i % 2) * 60}%`, opacity: 0.2 }}
                  animate={{ y: [0, -20, 0], opacity: [0.15, 0.35, 0.15] }}
                  transition={{ repeat: Infinity, duration: 2.5 + i * 0.5, ease: "easeInOut", delay: i * 0.4 }} />
              ))}
              <h2 className="text-white font-black mb-4 relative" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}>
                Ready to Begin Your<br />Health Journey?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto relative">One platform. One plan. One health journey — guided by doctors, powered by nutrition, strengthened by fitness.</p>
              <div className="flex flex-wrap gap-4 justify-center relative">
                <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="bg-white font-bold py-3.5 px-8 rounded-full text-sm inline-flex items-center gap-2 transition-all hover:shadow-xl" style={{ color: "#0EA5E9" }}>
                    Get Appointment Today <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" className="border-2 border-white text-white font-bold py-3.5 px-8 rounded-full text-sm inline-flex items-center gap-2 transition-all hover:bg-white/10">
                    <Phone size={15} /> Call Us Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
