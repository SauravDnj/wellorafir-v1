"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Target, Eye, Heart, Shield, Users, TrendingUp, ArrowRight } from "lucide-react";
import {
  FadeInView, StaggerChildren, StaggerItem, TiltCard,
  GlowOrb, AnimatedSectionHeader, CountUp, FloatingElement, MagneticButton,
} from "@/components/AnimatedComponents";

const values = [
  { icon: <Shield size={22} />, title: "Evidence-Based Practice", desc: "Every recommendation is rooted in clinical science, not trends.", color: "#0EA5E9", bg: "rgba(14,165,233,0.12)" },
  { icon: <Users size={22} />, title: "Collaboration Over Silos", desc: "All professionals work together — not independently.", color: "#6366F1", bg: "rgba(99,102,241,0.12)" },
  { icon: <Heart size={22} />, title: "User Safety & Trust", desc: "Medical ethics and data privacy at every step.", color: "#EC4899", bg: "rgba(236,72,153,0.12)" },
  { icon: <TrendingUp size={22} />, title: "Long-Term Sustainability", desc: "We build habits, not quick fixes.", color: "#06B6D4", bg: "rgba(6,182,212,0.12)" },
];

const team = [
  { name: "Dr. Health Expert",     role: "Lead Medical Officer",  image: "/images/team-member/team-img01.jpg" },
  { name: "Nutrition Specialist",  role: "Clinical Dietitian",    image: "/images/team-member/team-img02.jpg" },
  { name: "Fitness Coach",         role: "Certified Trainer",     image: "/images/team-member/team-img03.jpg" },
  { name: "Lifestyle Coach",       role: "Wellness Expert",       image: "/images/team-member/team-img04.jpg" },
];

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 300, suffix: "+", label: "Transformations" },
  { value: 74,  suffix: "+", label: "Health Markers" },
  { value: 100, suffix: "%", label: "Medically Supervised" },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <div ref={heroRef} className="page-hero pt-32 relative overflow-hidden">
        {/* Gradient orbs */}
        <GlowOrb color="#0EA5E9" size={500} style={{ top: -100, right: -100, opacity: 0.12 }} />
        <GlowOrb color="#8B5CF6" size={350} style={{ bottom: -80, left: -80, opacity: 0.1 }} />
        {/* Rotating rings */}
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
          style={{ width: 500, height: 500, borderColor: "rgba(14,165,233,0.08)" }}
          animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
          style={{ width: 300, height: 300, borderColor: "rgba(139,92,246,0.08)" }}
          animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <FadeInView direction="scale">
            <motion.span className="pill-badge mb-4 inline-block"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
              Who We Are
            </motion.span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="section-title mb-4">
              About <span className="gradient-text">WelloraFit</span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <div className="accent-divider" />
            <p className="section-subtitle mt-4">A trusted name in medically guided lifestyle transformation.</p>
          </FadeInView>
        </div>
      </div>

      {/* ── OUR STORY ─────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <GlowOrb color="#0EA5E9" size={600} style={{ top: -200, left: -200, opacity: 0.07 }} />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <FadeInView direction="left">
              <div className="relative">
                <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}
                  whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                  <Image src="/images/our story.jpg" alt="Our Story" fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,26,46,0.7) 0%, transparent 50%)" }} />
                  <motion.div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    {[{ v: "500+", l: "Happy Clients" }, { v: "300+", l: "Transformations" }].map(s => (
                      <div key={s.l}>
                        <div className="text-2xl font-black text-white">{s.v}</div>
                        <div className="text-xs text-white/70">{s.l}</div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
                {/* Floating badge */}
                <FloatingElement amplitude={10} duration={3.5} className="absolute -right-6 -top-6 hidden md:block z-10">
                  <div className="rounded-2xl p-4 shadow-2xl"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-black"
                        style={{ background: "linear-gradient(135deg, #0EA5E9, #8B5CF6)" }}>✓</div>
                      <div>
                        <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Root-Cause Focused</p>
                        <p className="text-xs" style={{ color: "var(--accent)" }}>Medical Approach</p>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
                {/* Spinning dashed ring */}
                <motion.div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full hidden md:block"
                  style={{ border: "2px dashed var(--accent)", opacity: 0.25 }}
                  animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }} />
              </div>
            </FadeInView>

            {/* Content */}
            <FadeInView direction="right" delay={0.2}>
              <span className="pill-badge mb-5 inline-block">Our Story</span>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Created by Experts Who Saw<br />
                <span className="gradient-text">The Flaws in Traditional Dieting</span>
              </h2>
              <p className="text-lg mb-5" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                We started WelloraFit after seeing countless individuals struggle with repeated diet failures and unmanaged lifestyle conditions. The problem was not lack of effort — it was lack of personalized, science-based guidance.
              </p>
              <p className="mb-8" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                By combining clinical diagnostics, medical supervision, personalized nutrition, structured fitness, and lifestyle management under one roof, we created a platform where real, sustainable transformation is possible.
              </p>
              <MagneticButton>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="btn-primary">
                    Start Your Journey <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </MagneticButton>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
        <GlowOrb color="#6366F1" size={400} style={{ top: -100, right: -50, opacity: 0.08 }} />
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSectionHeader badge="Our Purpose" title="Mission &" highlight="Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <FadeInView direction="left">
              <TiltCard className="card-3d p-10 h-full" glowColor="rgba(14,165,233,0.08)">
                <div className="relative">
                  <motion.div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(14,165,233,0.12)", color: "var(--accent)" }}
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.12 }} transition={{ duration: 0.4 }}>
                    <Target size={30} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Mission</h3>
                  <div className="mb-5 h-1 w-12 rounded-full" style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-green))" }} />
                  <StaggerChildren stagger={0.1} delayStart={0.3}>
                    {[
                      "To deliver personalized, science-backed health solutions",
                      "To empower professionals to collaborate for better outcomes",
                      "To make sustainable wellness accessible and safe",
                    ].map((m) => (
                      <StaggerItem key={m} direction="left">
                        <li className="flex gap-3 text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                          <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                          </motion.div>
                          {m}
                        </li>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              </TiltCard>
            </FadeInView>

            {/* Vision */}
            <FadeInView direction="right" delay={0.1}>
              <TiltCard className="card-3d p-10 h-full" glowColor="rgba(99,102,241,0.08)">
                <div className="relative">
                  <motion.div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(99,102,241,0.12)", color: "#6366F1" }}
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.12 }} transition={{ duration: 0.4 }}>
                    <Eye size={30} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Vision</h3>
                  <div className="mb-5 h-1 w-12 rounded-full" style={{ background: "linear-gradient(90deg, #6366F1, #EC4899)" }} />
                  <p style={{ color: "var(--text-secondary)", lineHeight: "1.85" }}>
                    To redefine wellness by integrating medicine, nutrition, fitness, and lifestyle into one trusted ecosystem — where every person receives coordinated, personalized care that creates lasting health transformation.
                  </p>
                </div>
              </TiltCard>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ── ORA APPROACH ──────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <GlowOrb color="#0EA5E9" size={500} style={{ bottom: -150, left: "50%", opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSectionHeader badge="Our Methodology" title="The ORA" highlight="Approach"
            sub="A three-phase methodology built for sustainable fat loss and lasting health." />
          <StaggerChildren stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { letter: "O", title: "Optimize Your Metabolism", color: "#0EA5E9", gradient: "linear-gradient(135deg, #0EA5E9, #38BDF8)", desc: "We begin by analyzing your metabolism, habits, and health markers. Through blood diagnostics and medical consultation, we identify what is preventing your body from achieving its healthiest state." },
              { letter: "R", title: "Reset Your Habits",         color: "#8B5CF6", gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)", desc: "With a clear picture of your health, we restructure your nutrition, movement, and daily patterns. This is about building smarter, more sustainable systems that align with your biology." },
              { letter: "A", title: "Align for Sustainability",  color: "#06B6D4", gradient: "linear-gradient(135deg, #06B6D4, #22D3EE)", desc: "The final phase focuses on creating long-term maintenance strategies and lifestyle balance. Results are not just achieved — they are maintained for life through behavioral reinforcement." },
            ].map((item, i) => (
              <StaggerItem key={item.letter}>
                <TiltCard className="card-3d p-8 text-center h-full hover-grad-border" intensity={8} glowColor={`${item.color}12`}>
                  <motion.div
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-5xl font-black shadow-xl"
                    style={{ background: item.gradient }}
                    whileHover={{ scale: 1.12, rotate: [0, -5, 5, 0] }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    {item.letter}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <div className="mb-4 h-0.5 w-10 mx-auto rounded-full" style={{ background: item.gradient }} />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #8B5CF6 100%)" }}>
        {/* Soft overlay for depth */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.15)" }} />
        {/* Animated rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[0, 1, 2].map(i => (
            <motion.div key={i} className="absolute rounded-full"
              style={{ width: 220 + i * 140, height: 220 + i * 140, border: "1px solid rgba(255,255,255,0.1)", left: `${10 + i * 30}%`, top: "50%", transform: "translateY(-50%)" }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.5, 0.25] }}
              transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut", delay: i * 0.8 }} />
          ))}
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <StaggerChildren stagger={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StaggerItem key={s.label} direction="scale">
                <motion.div
                  whileHover={{ scale: 1.06, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center rounded-2xl py-8 px-4"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}
                >
                  <div className="font-black leading-none mb-2 text-white"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", textShadow: "0 2px 16px rgba(0,0,0,0.2)" }}>
                    <CountUp target={s.value} suffix={s.suffix} duration={2200} />
                  </div>
                  <div className="text-white/80 text-sm font-semibold tracking-wide">{s.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
        <GlowOrb color="#EC4899" size={400} style={{ top: -100, right: -100, opacity: 0.07 }} />
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSectionHeader badge="Our Values" title="What We" highlight="Stand For" />
          <StaggerChildren stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title} direction="scale">
                <TiltCard className="card-3d p-7 text-center h-full hover-grad-border" intensity={8} glowColor={`${v.color}10`}>
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: v.bg, color: v.color }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                  >
                    {v.icon}
                  </motion.div>
                  <h4 className="font-bold mb-2 text-base" style={{ color: "var(--text-primary)" }}>{v.title}</h4>
                  <div className="mb-3 h-0.5 w-8 mx-auto rounded-full" style={{ background: v.color, opacity: 0.5 }} />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <GlowOrb color="#0EA5E9" size={600} style={{ bottom: -200, left: -100, opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSectionHeader badge="Our Professionals" title="Meet the" highlight="Team"
            sub="Verified doctors, certified dietitians, qualified fitness trainers — all onboarded through standardized protocols." />
          <StaggerChildren stagger={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <StaggerItem key={m.name} direction="scale">
                <motion.div
                  className="card-3d overflow-hidden text-center group hover-grad-border"
                  whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(14,165,233,0.18)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image src={m.image} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: "linear-gradient(to top, rgba(14,165,233,0.4), transparent)" }} />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{m.name}</h4>
                    <p className="text-xs font-semibold" style={{ color: "var(--accent)" }}>{m.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <FadeInView direction="scale">
            <div className="rounded-3xl p-12 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7, #8B5CF6)" }}>
              {/* Animated rings */}
              {[{ s: 140, r: 24, t: 12 }, { s: 88, l: 28, b: 16 }].map((d, i) => (
                <motion.div key={i} className="absolute rounded-full border-2 border-white/20 pointer-events-none"
                  style={{ width: d.s, height: d.s, ...(d as Record<string, unknown>) }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                  transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut", delay: i * 1 }} />
              ))}
              <h2 className="text-white font-black mb-4 relative" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}>
                Ready to Begin<br />Your Health Journey?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto relative">Start your medically guided transformation today.</p>
              <div className="flex flex-wrap gap-4 justify-center relative">
                <MagneticButton>
                  <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }}>
                    <Link href="https://connect.wellorafit.com/health-journey-starts-today"
                      className="bg-white font-bold py-3.5 px-8 rounded-full text-sm inline-flex items-center gap-2 hover:shadow-xl transition-all"
                      style={{ color: "#0EA5E9" }}>
                      Get Appointment <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </MagneticButton>
                <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact"
                    className="border-2 border-white text-white font-bold py-3.5 px-8 rounded-full text-sm inline-flex items-center gap-2 hover:bg-white/10 transition-all">
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
