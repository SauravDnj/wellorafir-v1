import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const services = [
  { label: "Doctor Consultations", href: "/services/doctor-consultations" },
  { label: "Nutrition & Diet Planning", href: "/services/nutrition-diet-planning" },
  { label: "Fitness Training", href: "/services/fitness-training" },
  { label: "Lifestyle Coaching", href: "/services/lifestyle-coaching" },
  { label: "Progress Monitoring", href: "/services/progress-monitoring" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="footer-bg">
      {/* CTA Banner */}
      <div style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-3">Ready to Start Your Health Journey?</h2>
          <p className="text-white/80 mb-6 text-lg">One platform. One plan. One health journey — guided by experts.</p>
          <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="bg-white font-bold py-3 px-8 rounded-full inline-block hover:bg-sky-50 transition-all hover:-translate-y-1" style={{ color: "#0284C7" }}>
            Get Appointment Today
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Image src="/images/footer-logo.png" alt="WelloraFit" width={150} height={50} className="h-12 w-auto mb-4" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--footer-text)", opacity: 0.7 }}>
              An integrated health, nutrition & fitness ecosystem. Where medical expertise, nutrition, fitness, and lifestyle management come together to create sustainable health outcomes.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={16} />, href: "#" },
                { icon: <Instagram size={16} />, href: "#" },
                { icon: <Youtube size={16} />, href: "#" },
                { icon: <Twitter size={16} />, href: "#" },
              ].map((s, i) => (
                <a key={i} href={s.href} className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.1)", color: "var(--footer-text)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5" style={{ color: "var(--accent-light)" }}>Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm hover:text-sky-300 transition-colors" style={{ color: "var(--footer-text)", opacity: 0.75 }}>
                    → {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5" style={{ color: "var(--accent-light)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-sky-300 transition-colors" style={{ color: "var(--footer-text)", opacity: 0.75 }}>
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5" style={{ color: "var(--accent-light)" }}>Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://maps.google.com/maps?q=Sai+Vittorio+Complex+Althan+Surat+Gujarat+India" target="_blank" rel="noopener noreferrer"
                  className="flex gap-3 text-sm hover:text-sky-300 transition-colors" style={{ color: "var(--footer-text)", opacity: 0.75 }}>
                  <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent-light)" }} />
                  235-236, Sai Vittorio Complex, Althan, Opposite ICICI Bank, Surat-395007, Gujarat, India
                </a>
              </li>
              <li>
                <a href="tel:+919898056401" className="flex gap-3 text-sm hover:text-sky-300 transition-colors" style={{ color: "var(--footer-text)", opacity: 0.75 }}>
                  <Phone size={16} className="shrink-0" style={{ color: "var(--accent-light)" }} />
                  +91 98980 56401
                </a>
              </li>
              <li>
                <a href="mailto:connect@wellorafit.com" className="flex gap-3 text-sm hover:text-sky-300 transition-colors" style={{ color: "var(--footer-text)", opacity: 0.75 }}>
                  <Mail size={16} className="shrink-0" style={{ color: "var(--accent-light)" }} />
                  connect@wellorafit.com
                </a>
              </li>
              <li className="flex gap-3 text-sm" style={{ color: "var(--footer-text)", opacity: 0.75 }}>
                <Clock size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent-light)" }} />
                <div>
                  <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
                  <p>Sat: 8:00 AM – 3:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* App Download */}
      <div className="border-t py-8 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="flex items-center gap-4">
          <p className="text-sm font-semibold" style={{ color: "var(--footer-text)" }}>App Coming Soon:</p>
          <Image src="/images/app-button-01.png" alt="App Store" width={120} height={36} className="h-9 w-auto opacity-60" />
          <Image src="/images/app-button-02.png" alt="Google Play" width={120} height={36} className="h-9 w-auto opacity-60" />
        </div>
        <p className="text-sm" style={{ color: "var(--footer-text)", opacity: 0.5 }}>
          © 2026 Aviral Trendz Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
