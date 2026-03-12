import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog – WelloraFit",
  description: "Science-backed insights on weight loss, nutrition, metabolic health, fitness, and sustainable wellness.",
};

const blogs = [
  { title: "Breaking Down Continuous Glucose Monitoring for Weight Management", image: "/images/blog/CB01.jpg", date: "12 Apr 2025", href: "/blog/continuous-glucose-monitoring", excerpt: "CGM turns metabolism into visible data — enabling structured, informed, and sustainable weight management decisions.", category: "Nutrition", color: "#0EA5E9" },
  { title: "Why Most Diets Fail: The Hidden Role of Hormones and Inflammation", image: "/images/blog/CB02.jpg", date: "12 Apr 2025", href: "/blog/why-diets-fail-hormones", excerpt: "Calorie counting is only one piece of a much larger system. Hormonal balance and inflammation matter just as much.", category: "Medical", color: "#EC4899" },
  { title: "Medical Myths About Fat Loss You Should Stop Believing", image: "/images/blog/CB03.jpg", date: "12 Apr 2025", href: "/blog/medical-myths-fat-loss", excerpt: "Seven widespread misconceptions about weight loss debunked by medical science. Stop letting myths hold back your progress.", category: "Medical", color: "#EC4899" },
  { title: "GLP-1 Medications: Benefits, Risks, and What Your Doctor Should Monitor", image: "/images/blog/CB04.jpg", date: "12 Apr 2025", href: "/blog/glp1-medications", excerpt: "GLP-1 medications can support weight management when used responsibly and medically supervised — but they are not a standalone solution.", category: "Medical", color: "#EC4899" },
  { title: "The Metabolism Reset Approach: What It Is & How It Works", image: "/images/blog/CB05.jpg", date: "12 Apr 2025", href: "/blog/metabolism-reset", excerpt: "Metabolism is not fixed — it is adaptive. Understand what a true metabolism reset means and how WelloraFit approaches it.", category: "Nutrition", color: "#0EA5E9" },
  { title: "Fitness Strategy for Fat Loss: Why Strength Training Matters", image: "/images/blog/CB06.jpg", date: "12 Apr 2025", href: "/blog/strength-training-fat-loss", excerpt: "Fat loss is not about doing more — it is about doing what works. Strength training is the metabolic engine behind sustainable results.", category: "Fitness", color: "#10B981" },
];

export default function BlogPage() {
  return (
    <>
      <div className="page-hero pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="pill-badge mb-4">Knowledge Hub</span>
          <h1 className="section-title mb-4">Our <span className="gradient-text">Blog</span></h1>
          <div className="accent-divider" />
          <p className="section-subtitle mt-4">Science-backed insights on weight loss, nutrition, metabolic health, and sustainable wellness.</p>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((b) => (
              <Link key={b.href} href={b.href} className="card-3d overflow-hidden group block">
                <div className="relative h-52 overflow-hidden">
                  <Image src={b.image} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(14,165,233,0.2)" }} />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: b.color }}>{b.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs mb-3 font-medium" style={{ color: "var(--accent)" }}>{b.date}</p>
                  <h3 className="font-bold text-base mb-3 leading-snug" style={{ color: "var(--text-primary)" }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{b.excerpt}</p>
                  <span className="text-sm font-semibold flex items-center gap-1" style={{ color: "var(--accent)" }}>
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
