"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { label: "Doctor Consultations & Medical Assessments", href: "/services/doctor-consultations" },
  { label: "Personalized Nutrition & Diet Planning", href: "/services/nutrition-diet-planning" },
  { label: "Fitness Training & Activity Programming", href: "/services/fitness-training" },
  { label: "Lifestyle Coaching & Habit Correction", href: "/services/lifestyle-coaching" },
  { label: "Ongoing Progress Monitoring & Adjustments", href: "/services/progress-monitoring" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "0 4px 24px var(--shadow-color)" : "none",
        transition: "all 0.3s" }}>
      <div style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-light))" }} className="py-1.5 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-white text-xs font-medium">
          <a href="tel:+919898056401" className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
            <Phone size={12} />+91 98980 56401
          </a>
          <span className="flex items-center gap-2">
            <span>Mon–Fri 8AM–5PM &nbsp;|&nbsp; Sat 8AM–3PM</span>
            <span>&nbsp;|&nbsp;</span>
            <a href="mailto:connect@wellorafit.com" className="hover:text-sky-200 transition-colors">connect@wellorafit.com</a>
          </span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <Image src={theme === "dark" ? "/images/footer-logo.png" : "/images/logo-img.png"} alt="WelloraFit" width={150} height={48} className="h-11 w-auto object-contain" priority />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About Us</Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="nav-link flex items-center gap-1">
              Services <ChevronDown size={13} style={{ transform: servicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl shadow-2xl py-2 z-50"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-5 py-3 text-sm font-medium transition-colors" style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-pale)"; e.currentTarget.style.color = "var(--accent)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "var(--text-secondary)"; }}>
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: "var(--accent-pale)", color: "var(--accent)" }} aria-label="Toggle theme">
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <div className="hidden lg:block">
            <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="btn-primary text-sm py-2.5 px-5">
              Get Appointment
            </Link>
          </div>
          <button className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--accent-pale)", color: "var(--accent)" }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
            <div className="px-4 py-4 space-y-1">
              {[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Blog", href: "/blog" }, { label: "Contact", href: "/contact" }].map((item) => (
                <Link key={item.href} href={item.href} className="block py-2.5 px-4 rounded-xl text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }} onClick={() => setMobileOpen(false)}>{item.label}</Link>
              ))}
              <div className="pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>Services</p>
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block py-2 px-6 text-xs" style={{ color: "var(--text-secondary)" }} onClick={() => setMobileOpen(false)}>{s.label}</Link>
                ))}
              </div>
              <div className="pt-2">
                <Link href="https://connect.wellorafit.com/health-journey-starts-today" onClick={() => setMobileOpen(false)}
                  className="btn-primary text-sm justify-center"
                  style={{ width: "100%" }}>
                  Get Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
