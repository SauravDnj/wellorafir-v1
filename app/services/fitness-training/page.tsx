import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Fitness Training & Activity Programming – WelloraFit",
  description: "Structured, safe, and sustainable fitness programs designed around your medical profile, health conditions, and body composition.",
};

export default function FitnessTrainingPage() {
  return (
    <ServicePageLayout
      badge="Fitness Service"
      title="Fitness Training &"
      highlight="Activity Programming"
      subtitle="At WelloraFit, fitness is not about extreme workouts — it is about structured, safe, and sustainable movement designed around your body and medical profile."
      heroImage="/images/services/Fitness Programming.jpg"
      intro="Exercise without context is risky. Our certified fitness trainers design programs that are carefully calibrated to your health conditions, fitness level, body composition, blood markers, and lifestyle. Every workout supports your nutrition plan and medical goals — nothing is done in isolation."
      features={[
        { title: "Individual Fitness Assessment", image: "/images/services/Fat-Loss Optimized.jpg", desc: "Baseline evaluation of your current fitness level, movement patterns, injury history, and physical capabilities to design a safe starting point." },
        { title: "Customized Workout Plans", image: "/images/services/Doctor Guided.jpg", desc: "Structured exercise programs — combining strength training, functional movement, and cardiovascular activity — built specifically for your body and goals." },
        { title: "Medical & GLP-1 Integration", image: "/images/services/GLP-1 Therapy.jpg", desc: "For clients on medical weight management programs, workouts are adjusted to preserve muscle mass, optimize fat loss, and complement medication protocols." },
        { title: "Lifestyle Activity Programming", image: "/images/services/Sustainable.jpg", desc: "Beyond gym workouts — we help you integrate movement into your daily life in ways that support long-term habit formation and metabolic health." },
      ]}
      pillars={[
        { title: "Doctor Guided — Injury Prevention", desc: "All workout programs are aligned with your medical profile to prevent injury, avoid contraindicated movements, and support recovery.", color: "#6B3FA0" },
        { title: "Fat-Loss Optimized — Strength Training", desc: "Our programs prioritize strength training to preserve and build muscle — the most powerful driver of long-term metabolic health and fat loss.", color: "#C9A227" },
        { title: "Sustainable — Habit-Based Activity", desc: "We design fitness habits, not just workout plans. The goal is consistent, enjoyable activity that becomes part of your daily life.", color: "#4A7C59" },
      ]}
      whoFor={[
        "Individuals with health conditions who need medically safe exercise programming",
        "Those who have been inactive and need a structured, gradual start",
        "People on GLP-1 therapy who need muscle-preserving fitness protocols",
        "Anyone whose previous fitness attempts led to injury or burnout",
        "Busy professionals who need efficient, effective workout plans that fit their schedule",
      ]}
      cta="Start Your Fitness Journey"
    />
  );
}
