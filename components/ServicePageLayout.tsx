import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="pill-badge mb-4">{badge}</span>
            <h1 className="section-title mb-4">{title} <span className="gradient-text">{highlight}</span></h1>
            <div className="accent-divider" style={{ margin: "1rem 0" }} />
            <p className="text-lg mb-8" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>{subtitle}</p>
            <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="btn-primary inline-flex items-center gap-2">
              Get Appointment <ArrowRight size={16} />
            </Link>
          </div>
          <div>
            <Image src={heroImage} alt={title} width={600} height={450} className="rounded-3xl object-cover w-full shadow-2xl" style={{ aspectRatio: "4/3" }} />
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>{intro}</p>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="pill-badge mb-4">What&apos;s Included</span>
            <h2 className="section-title mb-4">Service <span className="gradient-text">Components</span></h2>
            <div className="accent-divider" />
          </div>
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={f.title} className="card-3d overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div
                  className="relative"
                  style={{ order: i % 2 === 0 ? 0 : 1, minHeight: "260px" }}
                >
                  <Image src={f.image} alt={f.title} fill className="object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(16,185,129,0.1))" }}
                  />
                </div>
                {/* Content */}
                <div
                  className="p-10 flex flex-col justify-center"
                  style={{ order: i % 2 === 0 ? 1 : 0 }}
                >
                  <div
                    className="font-black mb-3 leading-none select-none"
                    style={{
                      fontSize: "4rem",
                      background: "linear-gradient(135deg, var(--accent), var(--accent-green))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      opacity: 0.2,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)", lineHeight: "1.3" }}>
                    {f.title}
                  </h3>
                  <div
                    className="mb-4"
                    style={{ width: "2.5rem", height: "3px", background: "linear-gradient(90deg, var(--accent), var(--accent-green))", borderRadius: "2px" }}
                  />
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="pill-badge mb-4">Our Approach</span>
            <h2 className="section-title mb-4">Why It <span className="gradient-text">Works</span></h2>
            <div className="accent-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="card-3d p-8 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-black text-2xl shadow-lg" style={{ background: p.color }}>{i + 1}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      {whoFor && (
        <section className="section-pad" style={{ background: "var(--bg-secondary)" }}>
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="pill-badge mb-4">Ideal For</span>
              <h2 className="section-title mb-4">Who Is This <span className="gradient-text">For?</span></h2>
              <div className="accent-divider" />
            </div>
            <div className="card-3d p-8">
              <ul className="space-y-4">
                {whoFor.map((w) => (
                  <li key={w} className="flex gap-3 items-start">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-pad text-center" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title mb-4">{cta || "Ready to Get Started?"}</h2>
          <p className="section-subtitle mb-8">Book your appointment today and begin your transformation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="btn-primary">Get Appointment</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
