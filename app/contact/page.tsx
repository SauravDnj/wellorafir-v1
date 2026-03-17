"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import {
  FadeInView, StaggerChildren, StaggerItem,
  GlowOrb, AnimatedSectionHeader, MagneticButton,
} from "@/components/AnimatedComponents";

const contactItems = [
  {
    icon: <MapPin size={22} />, title: "Address", color: "#0EA5E9",
    content: "235-236, Sai Vittorio Complex, Althan, Opposite ICICI Bank, Surat-395007, Gujarat, India",
    href: "https://maps.google.com/maps?q=Sai+Vittorio+Complex+Althan+Surat+Gujarat+India",
  },
  { icon: <Phone size={22} />, title: "Phone",  color: "#06B6D4", content: "+91 98980 56401",        href: "tel:+919898056401" },
  { icon: <Mail size={22} />,  title: "Email",  color: "#8B5CF6", content: "connect@wellorafit.com", href: "mailto:connect@wellorafit.com" },
  {
    icon: <Clock size={22} />, title: "Hours",  color: "#6366F1",
    content: "Mon–Fri: 8:00 AM – 5:00 PM\nSat: 8:00 AM – 3:00 PM\nSun: Closed",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <div className="page-hero pt-32 relative overflow-hidden">
        <GlowOrb color="#0EA5E9" size={500} style={{ top: -120, right: -100, opacity: 0.12 }} />
        <GlowOrb color="#06B6D4" size={350} style={{ bottom: -80, left: -80, opacity: 0.08 }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
          style={{ width: 450, height: 450, borderColor: "rgba(14,165,233,0.08)" }}
          animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 28, ease: "linear" }} />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <FadeInView direction="scale">
            <span className="pill-badge mb-4 inline-block">Get In Touch</span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="section-title mb-4">Contact <span className="gradient-text">Us</span></h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <div className="accent-divider" />
            <p className="section-subtitle mt-4">Start your health journey today. Our team is ready to help you.</p>
          </FadeInView>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <GlowOrb color="#0EA5E9" size={600} style={{ top: -200, left: -200, opacity: 0.05 }} />
        <GlowOrb color="#06B6D4" size={400} style={{ bottom: -150, right: -100, opacity: 0.05 }} />

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div>
              <FadeInView direction="left">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Let&apos;s Connect</h2>
                  <p style={{ color: "var(--text-secondary)" }}>A trusted name in medically guided lifestyle transformation. We are here to guide you at every step.</p>
                </div>
              </FadeInView>

              <StaggerChildren stagger={0.12} delayStart={0.2}>
                {contactItems.map((item) => (
                  <StaggerItem key={item.title} direction="left">
                    <motion.div
                      className="card-3d p-5 flex gap-4 mb-4 hover-grad-border"
                      whileHover={{ x: 6, boxShadow: `0 12px 40px ${item.color}18` }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}18`, color: item.color }}
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                        {item.href ? (
                          <a href={item.href}
                            className="text-sm anim-underline"
                            style={{ color: "var(--text-secondary)" }}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm whitespace-pre-line" style={{ color: "var(--text-secondary)" }}>{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <FadeInView direction="right" delay={0.15}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success"
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="card-3d p-12 text-center flex flex-col items-center justify-center min-h-96">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}>
                        <CheckCircle2 size={72} className="mb-4" style={{ color: "var(--accent-green)" }} />
                      </motion.div>
                      <motion.h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        Message Sent!
                      </motion.h3>
                      <motion.p style={{ color: "var(--text-secondary)" }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        Thank you for reaching out. Our team will contact you within 24 hours to schedule your consultation.
                      </motion.p>
                    </motion.div>
                  ) : (
                    <motion.div key="form"
                      initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="card-3d p-8 relative overflow-hidden">
                      {/* Scan line */}
                      <div className="scan-line" />
                      <h3 className="text-xl font-bold mb-6 relative z-10" style={{ color: "var(--text-primary)" }}>
                        Send Us a Message
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {[
                            { label: "Full Name *", key: "name", type: "text", placeholder: "Your full name", required: true },
                            { label: "Email *", key: "email", type: "email", placeholder: "your@email.com", required: true },
                          ].map((f, i) => (
                            <motion.div key={f.key}
                              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}>
                              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>{f.label}</label>
                              <input required={f.required} type={f.type} className="form-input" placeholder={f.placeholder}
                                value={form[f.key as keyof typeof form]}
                                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
                            </motion.div>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Phone</label>
                            <input className="form-input" placeholder="+91 XXXXX XXXXX"
                              value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                          </motion.div>
                          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Subject *</label>
                            <select required className="form-input" value={form.subject}
                              onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                              <option value="">Select a service</option>
                              <option>Doctor Consultation</option>
                              <option>Nutrition & Diet Planning</option>
                              <option>Fitness Training</option>
                              <option>Lifestyle Coaching</option>
                              <option>Progress Monitoring</option>
                              <option>General Enquiry</option>
                            </select>
                          </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}>
                          <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Message *</label>
                          <textarea required rows={5} className="form-input resize-none" placeholder="Tell us about your health goals..."
                            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                        </motion.div>
                        <MagneticButton strength={0.15}>
                          <motion.button type="submit" className="btn-primary w-full flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(14,165,233,0.35)" }}
                            whileTap={{ scale: 0.97 }}>
                            <Send size={16} /> Send Message
                          </motion.button>
                        </MagneticButton>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────── */}
      <FadeInView>
        <section className="h-80 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto px-4 py-6 text-center">
            <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
              235-236, Sai Vittorio Complex, Althan, Opposite ICICI Bank, Surat-395007, Gujarat, India
            </p>
            <iframe
              src="https://maps.google.com/maps?q=Sai+Vittorio+Complex+Althan+Surat&output=embed"
              width="100%" height="220"
              style={{ border: 0, borderRadius: "1rem" }}
              loading="lazy" allowFullScreen />
          </div>
        </section>
      </FadeInView>
    </>
  );
}
