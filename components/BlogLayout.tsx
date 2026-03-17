"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { FadeInView, StaggerChildren, StaggerItem, GlowOrb } from "@/components/AnimatedComponents";

interface BlogLayoutProps {
  title: string;
  image: string;
  date: string;
  author?: string;
  readTime?: string;
  category: string;
  children: React.ReactNode;
}

const relatedPosts = [
  { title: "Breaking Down Continuous Glucose Monitoring", href: "/blog/continuous-glucose-monitoring", image: "/images/blog/CB01.jpg" },
  { title: "Why Most Diets Fail: Hormones & Inflammation",  href: "/blog/why-diets-fail-hormones",         image: "/images/blog/CB02.jpg" },
  { title: "Medical Myths About Fat Loss",                  href: "/blog/medical-myths-fat-loss",           image: "/images/blog/CB03.jpg" },
];

export default function BlogLayout({
  title, image, date, author = "Alex William", readTime = "6 min read", category, children,
}: BlogLayoutProps) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <div className="relative pt-32 pb-0 overflow-hidden">
        <motion.div className="relative h-96 overflow-hidden"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <motion.div className="absolute inset-0"
            initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
            <Image src={image} alt={title} fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 100%)" }} />

          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
            <motion.span
              className="text-xs font-semibold px-3 py-1 rounded-full text-white mb-4 inline-block"
              style={{ background: "var(--accent-green)" }}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              {category}
            </motion.span>
            <motion.h1
              className="text-3xl md:text-4xl font-black text-white leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              {title}
            </motion.h1>
            <motion.div className="flex flex-wrap gap-5 mt-4 text-white/70 text-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <span className="flex items-center gap-1.5"><Calendar size={14} />{date}</span>
              <span className="flex items-center gap-1.5"><User size={14} />{author}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{readTime}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── CONTENT ───────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        <GlowOrb color="#0EA5E9" size={500} style={{ top: -100, right: -100, opacity: 0.05 }} />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article */}
            <div className="lg:col-span-2">
              <FadeInView direction="left">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-8 font-medium anim-underline"
                  style={{ color: "var(--accent-gold)" }}>
                  <ArrowLeft size={16} /> Back to Blog
                </Link>
              </FadeInView>
              <FadeInView delay={0.1}>
                <div className="prose-custom">{children}</div>
              </FadeInView>

              {/* CTA */}
              <FadeInView delay={0.2}>
                <motion.div className="mt-12 rounded-3xl p-8 text-center relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, var(--accent-green), var(--accent-gold))" }}
                  whileHover={{ scale: 1.01, boxShadow: "0 24px 60px rgba(16,185,129,0.3)" }}
                  transition={{ duration: 0.3 }}>
                  {/* Decorative rings */}
                  {[{ s: 120, r: 20, t: 10 }, { s: 70, l: 20, b: 15 }].map((d, i) => (
                    <motion.div key={i} className="absolute rounded-full border-2 border-white/20 pointer-events-none"
                      style={{ width: d.s, height: d.s, ...(d as Record<string, unknown>) }}
                      animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }} />
                  ))}
                  <h3 className="text-white text-2xl font-bold mb-3 relative">Ready to Begin Your Health Journey?</h3>
                  <p className="text-white/80 mb-6 relative">Get a personalized, medically guided plan built around your unique biology.</p>
                  <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} className="relative inline-block">
                    <Link href="https://connect.wellorafit.com/health-journey-starts-today"
                      className="bg-white font-bold py-3 px-8 rounded-full inline-block"
                      style={{ color: "var(--accent-green)" }}>
                      Get Appointment
                    </Link>
                  </motion.div>
                </motion.div>
              </FadeInView>
            </div>

            {/* Sidebar */}
            <StaggerChildren stagger={0.12} delayStart={0.3} className="space-y-6">
              {/* Author */}
              <StaggerItem direction="right">
                <motion.div className="card-3d p-6 hover-grad-border"
                  whileHover={{ y: -4, boxShadow: "0 16px 45px rgba(14,165,233,0.12)" }}>
                  <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>About the Author</h4>
                  <div className="flex gap-3 items-center mb-3">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Image src="/images/author-img.jpg" alt="Alex William" width={48} height={48}
                        className="w-12 h-12 rounded-full object-cover" style={{ outline: "2px solid var(--accent)", outlineOffset: "2px" }} />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Alex William</p>
                      <p className="text-xs" style={{ color: "var(--accent-gold)" }}>Health & Wellness Writer</p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Science-backed health content in partnership with WelloraFit&apos;s medical team.
                  </p>
                </motion.div>
              </StaggerItem>

              {/* Related Posts */}
              <StaggerItem direction="right">
                <motion.div className="card-3d p-6 hover-grad-border"
                  whileHover={{ y: -4, boxShadow: "0 16px 45px rgba(14,165,233,0.12)" }}>
                  <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Articles</h4>
                  <div className="space-y-4">
                    {relatedPosts.map((p, i) => (
                      <motion.div key={p.href}
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}>
                        <Link href={p.href} className="flex gap-3 group">
                          <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden">
                            <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-400" />
                          </div>
                          <p className="text-sm font-medium leading-snug anim-underline" style={{ color: "var(--text-primary)" }}>
                            {p.title}
                          </p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>

              {/* Services CTA */}
              <StaggerItem direction="right">
                <motion.div className="card-3d p-6 hover-grad-border"
                  whileHover={{ y: -4, boxShadow: "0 16px 45px rgba(14,165,233,0.12)" }}>
                  <h4 className="font-bold mb-3" style={{ color: "var(--text-primary)" }}>Our Services</h4>
                  {[
                    { label: "Doctor Consultations",  href: "/services/doctor-consultations" },
                    { label: "Nutrition Planning",    href: "/services/nutrition-diet-planning" },
                    { label: "Fitness Training",      href: "/services/fitness-training" },
                    { label: "Lifestyle Coaching",    href: "/services/lifestyle-coaching" },
                  ].map((s, i) => (
                    <motion.div key={s.href}
                      initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}>
                      <Link href={s.href}
                        className="flex items-center gap-2 text-sm py-2.5 border-b anim-underline transition-colors"
                        style={{ color: "var(--text-secondary)", borderColor: "var(--border)" }}>
                        <motion.span whileHover={{ x: 3 }} style={{ color: "var(--accent)" }}>→</motion.span>
                        {s.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>
    </>
  );
}
