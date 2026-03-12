"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

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
  { title: "Why Most Diets Fail: Hormones & Inflammation", href: "/blog/why-diets-fail-hormones", image: "/images/blog/CB02.jpg" },
  { title: "Medical Myths About Fat Loss", href: "/blog/medical-myths-fat-loss", image: "/images/blog/CB03.jpg" },
];

export default function BlogLayout({ title, image, date, author = "Alex William", readTime = "6 min read", category, children }: BlogLayoutProps) {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-0 overflow-hidden">
        <div className="relative h-96">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white mb-4 inline-block" style={{ background: "var(--accent-green)" }}>{category}</span>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">{title}</h1>
            <div className="flex flex-wrap gap-5 mt-4 text-white/70 text-sm">
              <span className="flex items-center gap-1.5"><Calendar size={14} />{date}</span>
              <span className="flex items-center gap-1.5"><User size={14} />{author}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article */}
            <div className="lg:col-span-2">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-8 font-medium" style={{ color: "var(--accent-gold)" }}>
                <ArrowLeft size={16} /> Back to Blog
              </Link>
              <div className="prose-custom">
                {children}
              </div>

              {/* CTA */}
              <div className="mt-12 rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, var(--accent-green), var(--accent-gold))" }}>
                <h3 className="text-white text-2xl font-bold mb-3">Ready to Begin Your Health Journey?</h3>
                <p className="text-white/80 mb-6">Get a personalized, medically guided plan built around your unique biology.</p>
                <Link href="https://connect.wellorafit.com/health-journey-starts-today" className="bg-white font-bold py-3 px-8 rounded-full inline-block" style={{ color: "var(--accent-green)" }}>
                  Get Appointment
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* About Author */}
              <div className="card-3d p-6">
                <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>About the Author</h4>
                <div className="flex gap-3 items-center mb-3">
                  <Image src="/images/author-img.jpg" alt="Alex William" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Alex William</p>
                    <p className="text-xs" style={{ color: "var(--accent-gold)" }}>Health & Wellness Writer</p>
                  </div>
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Science-backed health content in partnership with WelloraFit&apos;s medical team.</p>
              </div>

              {/* Related Posts */}
              <div className="card-3d p-6">
                <h4 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>Related Articles</h4>
                <div className="space-y-4">
                  {relatedPosts.map((p) => (
                    <Link key={p.href} href={p.href} className="flex gap-3 group">
                      <Image src={p.image} alt={p.title} width={60} height={60} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                      <p className="text-sm font-medium leading-snug group-hover:text-yellow-500 transition-colors" style={{ color: "var(--text-primary)" }}>{p.title}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services CTA */}
              <div className="card-3d p-6">
                <h4 className="font-bold mb-3" style={{ color: "var(--text-primary)" }}>Our Services</h4>
                {[
                  { label: "Doctor Consultations", href: "/services/doctor-consultations" },
                  { label: "Nutrition Planning", href: "/services/nutrition-diet-planning" },
                  { label: "Fitness Training", href: "/services/fitness-training" },
                  { label: "Lifestyle Coaching", href: "/services/lifestyle-coaching" },
                ].map((s) => (
                  <Link key={s.href} href={s.href} className="block text-sm py-2 border-b transition-colors" style={{ color: "var(--text-secondary)", borderColor: "var(--border-color)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    → {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
