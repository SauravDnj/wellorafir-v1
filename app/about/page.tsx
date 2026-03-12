import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Target, Eye, Heart, Shield, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "About Us – WelloraFit",
  description: "Learn about WelloraFit's mission, vision, ORA approach and our team of verified doctors, dietitians and fitness trainers.",
};

const values = [
  { icon: <Shield size={20} />, title: "Evidence-Based Practice", desc: "Every recommendation is rooted in clinical science, not trends.", color: "#0EA5E9" },
  { icon: <Users size={20} />, title: "Collaboration Over Silos", desc: "All professionals work together — not independently.", color: "#6366F1" },
  { icon: <Heart size={20} />, title: "User Safety & Trust", desc: "Medical ethics and data privacy at every step.", color: "#EC4899" },
  { icon: <TrendingUp size={20} />, title: "Long-Term Sustainability", desc: "We build habits, not quick fixes.", color: "#10B981" },
];

const team = [
  { name: "Dr. Health Expert", role: "Lead Medical Officer", image: "/images/team-member/team-img01.jpg" },
  { name: "Nutrition Specialist", role: "Clinical Dietitian", image: "/images/team-member/team-img02.jpg" },
  { name: "Fitness Coach", role: "Certified Trainer", image: "/images/team-member/team-img03.jpg" },
  { name: "Lifestyle Coach", role: "Wellness Expert", image: "/images/team-member/team-img04.jpg" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="pill-badge mb-4">Who We Are</span>
          <h1 className="section-title mb-4">About <span className="gradient-text">WelloraFit</span></h1>
          <div className="accent-divider" />
          <p className="section-subtitle mt-4">A trusted name in medically guided lifestyle transformation.</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="pill-badge mb-4">Our Story</span>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Created by Experts Who Saw<br /><span className="gradient-text">The Flaws in Traditional Dieting</span>
              </h2>
              <p className="text-lg mb-5" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                We started WelloraFit after seeing countless individuals struggle with repeated diet failures and unmanaged lifestyle conditions. The problem was not lack of effort — it was lack of personalized, science-based guidance.
              </p>
              <p className="mb-5" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                Most health programs treat symptoms. We built WelloraFit to correct root causes. By combining clinical diagnostics, medical supervision, personalized nutrition, structured fitness, and lifestyle management under one roof, we created a platform where real, sustainable transformation is possible.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                WelloraFit is built on the belief that every person deserves a health plan as unique as their biology — not a template copied from a magazine.
              </p>
            </div>
            <div>
              <Image src="/images/our story.jpg" alt="Our Story" width={600} height={450} className="rounded-3xl object-cover w-full shadow-2xl" style={{ aspectRatio: "4/3" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-3d p-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(14,165,233,0.12)", color: "var(--accent)" }}>
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "To deliver personalized, science-backed health solutions",
                  "To empower professionals to collaborate for better outcomes",
                  "To make sustainable wellness accessible and safe",
                ].map((m) => (
                  <li key={m} className="flex gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-3d p-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(99,102,241,0.12)", color: "#6366F1" }}>
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Vision</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                To redefine wellness by integrating medicine, nutrition, fitness, and lifestyle into one trusted ecosystem — where every person receives coordinated, personalized care that creates lasting health transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORA Approach */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="pill-badge mb-4">Our Methodology</span>
            <h2 className="section-title mb-4">The ORA Approach</h2>
            <div className="accent-divider" />
            <p className="section-subtitle mt-4">A three-phase methodology built for sustainable fat loss and lasting health.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { letter: "O", title: "Optimize Your Metabolism", color: "#0EA5E9", gradient: "linear-gradient(135deg, #0EA5E9, #38BDF8)", desc: "We begin by analyzing your metabolism, habits, and health markers. Through blood diagnostics and medical consultation, we identify what is preventing your body from achieving its healthiest state and build the foundational changes required." },
              { letter: "R", title: "Reset Your Habits", color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)", desc: "With a clear picture of your health, we restructure your nutrition, movement, and daily patterns. This is not about restriction — it is about building smarter, more sustainable systems that align with your biology and lifestyle." },
              { letter: "A", title: "Align for Sustainability", color: "#10B981", gradient: "linear-gradient(135deg, #10B981, #34D399)", desc: "The final phase focuses on creating long-term maintenance strategies and lifestyle balance. We ensure that your results are not just achieved — but maintained for life through behavioral reinforcement and ongoing support." },
            ].map((item) => (
              <div key={item.letter} className="card-3d p-8 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-black shadow-lg" style={{ background: item.gradient }}>
                  {item.letter}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="pill-badge mb-4">Our Values</span>
            <h2 className="section-title mb-4">What We Stand For</h2>
            <div className="accent-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-3d p-6 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${v.color}18`, color: v.color }}>{v.icon}</div>
                <h4 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>{v.title}</h4>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="pill-badge mb-4">Our Professionals</span>
            <h2 className="section-title mb-4">Meet the Team</h2>
            <div className="accent-divider" />
            <p className="section-subtitle mt-4">Verified doctors, certified dietitians, qualified fitness trainers — all onboarded through standardized protocols.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="card-3d overflow-hidden text-center">
                <div className="relative h-56">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>{m.name}</h4>
                  <p className="text-xs font-semibold" style={{ color: "var(--accent)" }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "300+", label: "Successful Transformations" },
              { value: "74+", label: "Health Markers Assessed" },
              { value: "100%", label: "Medically Supervised" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black mb-1">{s.value}</div>
                <div className="text-white/80 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title mb-4">Ready to Begin?</h2>
          <p className="section-subtitle mb-8">Start your medically guided health journey today.</p>
          <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="btn-primary">Get Appointment</Link>
        </div>
      </section>
    </>
  );
}
