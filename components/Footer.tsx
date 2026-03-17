"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Twitter, ArrowRight } from "lucide-react";
import { StaggerChildren, StaggerItem, FadeInView, GlowOrb } from "@/components/AnimatedComponents";

const services = [
  { label: "Doctor Consultations",      href: "/services/doctor-consultations" },
  { label: "Nutrition & Diet Planning", href: "/services/nutrition-diet-planning" },
  { label: "Fitness Training",          href: "/services/fitness-training" },
  { label: "Lifestyle Coaching",        href: "/services/lifestyle-coaching" },
  { label: "Progress Monitoring",       href: "/services/progress-monitoring" },
];

const quickLinks = [
  { label: "Home",           href: "/" },
  { label: "About Us",       href: "/about" },
  { label: "Blogs",          href: "/blog" },
  { label: "Contact",        href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer",     href: "/disclaimer" },
];

const socials = [
  { icon: <Facebook size={15} />, href: "#", label: "Facebook" },
  { icon: <Instagram size={15} />, href: "#", label: "Instagram" },
  { icon: <Youtube size={15} />, href: "#", label: "YouTube" },
  { icon: <Twitter size={15} />, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="footer-bg overflow-hidden">

      {/* ── CTA BANNER ──────────────────────────────────── */}
      <div className="relative overflow-hidden py-14" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7, #10B981)" }}>
        <GlowOrb color="rgba(255,255,255,0.2)" size={400} style={{ top: -100, right: -80, opacity: 0.15 }} />
        <GlowOrb color="rgba(255,255,255,0.2)" size={300} style={{ bottom: -100, left: -60, opacity: 0.1 }} />
        {/* Animated rings */}
        {[{ s: 200, right: 80, top: -60 }, { s: 120, left: 120, bottom: -40 }, { s: 80, left: "30%", top: 20 }].map((d, i) => (
          <motion.div key={i} className="absolute rounded-full border border-white/15 pointer-events-none"
            style={{ width: d.s, height: d.s, ...(d as Record<string, unknown>) }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut", delay: i * 0.8 }} />
        ))}

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <FadeInView direction="scale">
            <h2 className="text-white text-3xl font-bold mb-3">Ready to Start Your Health Journey?</h2>
            <p className="text-white/80 mb-7 text-lg max-w-xl mx-auto">
              One platform. One plan. One health journey — guided by experts.
            </p>
            <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link href="https://connect.wellorafit.com/health-journey-starts-today"
                className="bg-white font-bold py-3.5 px-9 rounded-full inline-flex items-center gap-2 hover:bg-sky-50 transition-all hover:shadow-2xl"
                style={{ color: "#0284C7" }}>
                Get Appointment Today <ArrowRight size={16} />
              </Link>
            </motion.div>
          </FadeInView>
        </div>
      </div>

      {/* ── MAIN FOOTER ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <GlowOrb color="#0EA5E9" size={500} style={{ bottom: -200, left: -100, opacity: 0.04 }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

          {/* Brand */}
          <FadeInView direction="left" delay={0.05}>
            <div>
              <motion.div whileHover={{ scale: 1.04 }} className="inline-block mb-4">
                <Image src="/images/footer-logo.png" alt="WelloraFit" width={150} height={50} className="h-12 w-auto" />
              </motion.div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--footer-text)", opacity: 0.7 }}>
                An integrated health, nutrition & fitness ecosystem. Where medical expertise, nutrition, fitness, and lifestyle management come together to create sustainable health outcomes.
              </p>
              <div className="flex gap-2">
                {socials.map((s, i) => (
                  <motion.a key={s.label} href={s.href}
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.08)", color: "var(--footer-text)" }}
                    whileHover={{ scale: 1.15, y: -3, background: "rgba(14,165,233,0.35)" }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}>
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Services */}
          <FadeInView direction="up" delay={0.1}>
            <div>
              <h4 className="font-bold text-lg mb-5" style={{ color: "var(--accent-light)" }}>Our Services</h4>
              <StaggerChildren stagger={0.07} delayStart={0.2}>
                {services.map((s) => (
                  <StaggerItem key={s.href} direction="left">
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="mb-3">
                      <Link href={s.href}
                        className="text-sm flex items-center gap-2 anim-underline"
                        style={{ color: "var(--footer-text)", opacity: 0.75 }}>
                        <span style={{ color: "var(--accent-light)", opacity: 0.6 }}>→</span> {s.label}
                      </Link>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </FadeInView>

          {/* Quick Links */}
          <FadeInView direction="up" delay={0.15}>
            <div>
              <h4 className="font-bold text-lg mb-5" style={{ color: "var(--accent-light)" }}>Quick Links</h4>
              <StaggerChildren stagger={0.07} delayStart={0.25}>
                {quickLinks.map((l) => (
                  <StaggerItem key={l.href} direction="left">
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="mb-3">
                      <Link href={l.href}
                        className="text-sm flex items-center gap-2 anim-underline"
                        style={{ color: "var(--footer-text)", opacity: 0.75 }}>
                        <span style={{ color: "var(--accent-light)", opacity: 0.6 }}>→</span> {l.label}
                      </Link>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </FadeInView>

          {/* Contact */}
          <FadeInView direction="right" delay={0.2}>
            <div>
              <h4 className="font-bold text-lg mb-5" style={{ color: "var(--accent-light)" }}>Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <motion.a href="https://maps.google.com/maps?q=Sai+Vittorio+Complex+Althan+Surat+Gujarat+India"
                    target="_blank" rel="noopener noreferrer"
                    className="flex gap-3 text-sm hover:text-sky-300 transition-colors"
                    style={{ color: "var(--footer-text)", opacity: 0.75 }}
                    whileHover={{ opacity: 1, x: 2 }}>
                    <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--accent-light)" }} />
                    235-236, Sai Vittorio Complex, Althan, Opposite ICICI Bank, Surat-395007, Gujarat, India
                  </motion.a>
                </li>
                <li>
                  <motion.a href="tel:+919898056401"
                    className="flex gap-3 text-sm hover:text-sky-300 transition-colors"
                    style={{ color: "var(--footer-text)", opacity: 0.75 }}
                    whileHover={{ opacity: 1, x: 2 }}>
                    <Phone size={15} className="shrink-0" style={{ color: "var(--accent-light)" }} />
                    +91 98980 56401
                  </motion.a>
                </li>
                <li>
                  <motion.a href="mailto:connect@wellorafit.com"
                    className="flex gap-3 text-sm hover:text-sky-300 transition-colors"
                    style={{ color: "var(--footer-text)", opacity: 0.75 }}
                    whileHover={{ opacity: 1, x: 2 }}>
                    <Mail size={15} className="shrink-0" style={{ color: "var(--accent-light)" }} />
                    connect@wellorafit.com
                  </motion.a>
                </li>
                <li className="flex gap-3 text-sm" style={{ color: "var(--footer-text)", opacity: 0.65 }}>
                  <Clock size={15} className="mt-0.5 shrink-0" style={{ color: "var(--accent-light)" }} />
                  <div>
                    <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
                    <p>Sat: 8:00 AM – 3:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeInView>
        </div>
      </div>

      {/* ── BOTTOM BAR ──────────────────────────────────── */}
      <div className="border-t max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-4">
          <p className="text-sm font-semibold" style={{ color: "var(--footer-text)" }}>App Coming Soon:</p>
          <motion.div whileHover={{ scale: 1.05, opacity: 0.9 }}>
            <Image src="/images/app-button-01.png" alt="App Store"   width={120} height={36} className="h-9 w-auto opacity-50" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, opacity: 0.9 }}>
            <Image src="/images/app-button-02.png" alt="Google Play" width={120} height={36} className="h-9 w-auto opacity-50" />
          </motion.div>
        </div>
        <p className="text-sm" style={{ color: "var(--footer-text)", opacity: 0.45 }}>
          © 2026 Aviral Trendz Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
