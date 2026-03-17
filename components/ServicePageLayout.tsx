"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import {
  FadeInView, StaggerChildren, StaggerItem, TiltCard,
  GlowOrb, AnimatedSectionHeader, MagneticButton,
} from "@/components/AnimatedComponents";

interface ServicePageProps {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  features: { title: string; image: string; desc: string }[];
  pillars: { title: string; desc: string; color: string }[];
  whoFor?: string[];
  cta?: string;
}

export default function ServicePageLayout({
  badge, title, highlight, subtitle, heroImage, intro, features, pillars, whoFor, cta
}: ServicePageProps) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <div className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
        <GlowOrb color="#0EA5E9" size={500} style={{ top: -100, right: -80, opacity: 0.12 }} />
        <GlowOrb color="#10B981" size={350} style={{ bottom: -100, left: -80, opacity: 0.09 }} />
        {/* Background rotating ring */}
        <motion.div className="absolute top-1/2 right-8 -translate-y-1/2 rounded-full border pointer-events-none hidden lg:block"
          style={{ width: 400, height: 400, borderColor: "rgba(14,165,233,0.1)" }}
          animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} />

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text */}
          <FadeInView direction="left">
            <motion.span className="pill-badge mb-5 inline-block"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
              {badge}
            </motion.span>
            <h1 className="section-title mb-4">
              {title} <span className="gradient-text">{highlight}</span>
            </h1>
            <div className="accent-divider" style={{ margin: "1rem 0" }} />
            <p className="text-lg mb-8" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>{subtitle}</p>
            <MagneticButton>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="https://connect.wellorafit.com/health-journey-starts-today"
                  className="btn-primary inline-flex items-center gap-2">
                  Get Appointment <ArrowRight size={16} />
                </Link>
              </motion.div>
            </MagneticButton>
          </FadeInView>

          {/* Image */}
          <FadeInView direction="right" delay={0.15}>
            <div className="relative">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "4/3" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}>
                <Image src={heroImage} alt={title} fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(16,185,129,0.1))" }} />
              </motion.div>
              {/* Floating accent */}
              <motion.div
                className="absolute -bottom-4 -left-4 rounded-2xl px-5 py-3 shadow-xl hidden md:flex items-center gap-3"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
                  style={{ background: "linear-gradient(135deg, #0EA5E9, #10B981)" }}>✓</div>
                <div>
                  <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Medically Supervised</p>
                  <p className="text-xs" style={{ color: "var(--accent)" }}>Doctor Guided</p>
                </div>
              </motion.div>
            </div>
          </FadeInView>
        </div>
      </div>

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <GlowOrb color="#0EA5E9" size={400} style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.04 }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeInView direction="scale">
            <p className="text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>{intro}</p>
          </FadeInView>
        </div>
      </section>

      {/* ── FEATURES (zigzag) ─────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
        <GlowOrb color="#10B981" size={500} style={{ top: -100, right: -100, opacity: 0.07 }} />
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSectionHeader badge="What's Included" title="Service" highlight="Components" />
          <div className="space-y-8">
            {features.map((f, i) => (
              <FadeInView key={f.title} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className="card-3d overflow-hidden grid grid-cols-1 md:grid-cols-2 hover-grad-border"
                  whileHover={{ boxShadow: "0 24px 70px rgba(14,165,233,0.15)" }}
                  transition={{ duration: 0.3 }}>
                  {/* Image */}
                  <div className="relative overflow-hidden group" style={{ order: i % 2 === 0 ? 0 : 1, minHeight: "280px" }}>
                    <Image src={f.image} alt={f.title} fill
                      className="object-cover group-hover:scale-110 transition-transform duration-600" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(16,185,129,0.1))" }} />
                    {/* Number badge on image */}
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg"
                        style={{ background: "linear-gradient(135deg, #0EA5E9, #10B981)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col justify-center" style={{ order: i % 2 === 0 ? 1 : 0 }}>
                    <div className="font-black mb-3 leading-none select-none"
                      style={{ fontSize: "4rem", background: "linear-gradient(135deg, var(--accent), var(--accent-green))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", opacity: 0.15 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)", lineHeight: "1.3" }}>{f.title}</h3>
                    <motion.div className="mb-4" style={{ width: "2.5rem", height: "3px", background: "linear-gradient(90deg, var(--accent), var(--accent-green))", borderRadius: "2px" }}
                      whileHover={{ width: "5rem" }} transition={{ duration: 0.3 }} />
                    <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
                  </div>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ───────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <GlowOrb color="#6366F1" size={450} style={{ bottom: -100, left: -80, opacity: 0.07 }} />
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSectionHeader badge="Our Approach" title="Why It" highlight="Works" />
          <StaggerChildren stagger={0.13} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <StaggerItem key={i} direction="scale">
                <TiltCard className="card-3d p-8 text-center h-full hover-grad-border" intensity={8} glowColor={`${p.color}10`}>
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-black text-2xl shadow-lg"
                    style={{ background: p.color }}
                    whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5 + i * 0.5, ease: "easeInOut", delay: i * 0.4 }}
                  >
                    {i + 1}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                  <div className="mb-4 h-0.5 w-10 mx-auto rounded-full" style={{ background: p.color, opacity: 0.5 }} />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────── */}
      {whoFor && (
        <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
          <GlowOrb color="#F59E0B" size={400} style={{ top: -80, right: -80, opacity: 0.07 }} />
          <div className="max-w-3xl mx-auto px-4">
            <AnimatedSectionHeader badge="Ideal For" title="Who Is This" highlight="For?" />
            <FadeInView direction="scale">
              <TiltCard className="card-3d p-8 hover-grad-border" intensity={5}>
                <StaggerChildren stagger={0.1} delayStart={0.2}>
                  {whoFor.map((w) => (
                    <StaggerItem key={w} direction="left">
                      <motion.li
                        className="flex gap-3 items-start mb-4"
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                        </motion.div>
                        <span style={{ color: "var(--text-secondary)" }}>{w}</span>
                      </motion.li>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </TiltCard>
            </FadeInView>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section-pad text-center relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <GlowOrb color="#0EA5E9" size={500} style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.07 }} />
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <FadeInView direction="scale">
            <h2 className="section-title mb-4">{cta || "Ready to Get Started?"}</h2>
            <p className="section-subtitle mb-8">Book your appointment today and begin your transformation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton>
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="btn-primary">
                    Get Appointment <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </MagneticButton>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn-outline">Contact Us</Link>
              </motion.div>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
