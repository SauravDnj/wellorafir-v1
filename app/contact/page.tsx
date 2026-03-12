"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-hero pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="pill-badge mb-4">Get In Touch</span>
          <h1 className="section-title mb-4">Contact <span className="gradient-text">Us</span></h1>
          <div className="accent-divider" />
          <p className="section-subtitle mt-4">Start your health journey today. Our team is ready to help you.</p>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Let&apos;s Connect</h2>
                <p style={{ color: "var(--text-secondary)" }}>A trusted name in medically guided lifestyle transformation. We are here to guide you at every step.</p>
              </div>
              {[
                { icon: <MapPin size={20} />, title: "Address", content: "235-236, Sai Vittorio Complex, Althan, Opposite ICICI Bank, Surat-395007, Gujarat, India", href: "https://maps.google.com/maps?q=Sai+Vittorio+Complex+Althan+Surat+Gujarat+India" },
                { icon: <Phone size={20} />, title: "Phone", content: "+91 98980 56401", href: "tel:+919898056401" },
                { icon: <Mail size={20} />, title: "Email", content: "connect@wellorafit.com", href: "mailto:connect@wellorafit.com" },
                { icon: <Clock size={20} />, title: "Hours", content: "Mon–Fri: 8:00 AM – 5:00 PM\nSat: 8:00 AM – 3:00 PM\nSun: Closed" },
              ].map((item) => (
                <div key={item.title} className="card-3d p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-pale)", color: "var(--accent)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm hover:underline" style={{ color: "var(--text-secondary)" }}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm whitespace-pre-line" style={{ color: "var(--text-secondary)" }}>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card-3d p-12 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle2 size={64} className="mb-4" style={{ color: "var(--accent)" }} />
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Message Sent!</h3>
                  <p style={{ color: "var(--text-secondary)" }}>Thank you for reaching out. Our team will contact you within 24 hours to schedule your consultation.</p>
                </div>
              ) : (
                <div className="card-3d p-8">
                  <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Full Name *</label>
                        <input required className="form-input" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Email *</label>
                        <input required type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Phone</label>
                        <input className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Subject *</label>
                        <select required className="form-input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                          <option value="">Select a service</option>
                          <option>Doctor Consultation</option>
                          <option>Nutrition & Diet Planning</option>
                          <option>Fitness Training</option>
                          <option>Lifestyle Coaching</option>
                          <option>Progress Monitoring</option>
                          <option>General Enquiry</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>Message *</label>
                      <textarea required rows={5} className="form-input resize-none" placeholder="Tell us about your health goals..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-72" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>235-236, Sai Vittorio Complex, Althan, Opposite ICICI Bank, Surat-395007, Gujarat, India</p>
          <iframe
            src="https://maps.google.com/maps?q=Sai+Vittorio+Complex+Althan+Surat&output=embed"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "1rem" }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
