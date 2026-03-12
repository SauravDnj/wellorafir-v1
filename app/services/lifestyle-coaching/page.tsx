import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Lifestyle Coaching & Habit Correction – WelloraFit",
  description: "Behavioral assessment, stress management, sleep optimization and long-term habit building for sustainable health transformation.",
};

export default function LifestyleCoachingPage() {
  return (
    <ServicePageLayout
      badge="Lifestyle Service"
      title="Lifestyle Coaching &"
      highlight="Habit Correction"
      subtitle="Transformation extends beyond diet and exercise. We identify unhealthy patterns and build sustainable systems for long-term health outcomes."
      heroImage="/images/services/Stress.jpg"
      intro="The missing piece in most health journeys is lifestyle. You can have a perfect diet and workout plan, but if your sleep is disrupted, your stress is unmanaged, and your daily habits are working against you — results will not last. WelloraFit's lifestyle coaching addresses the behavioral and psychological foundations of lasting health change."
      features={[
        { title: "Behavioral Assessment & Habit Reset", image: "/images/services/Accountability & Long-Term Sustainability.jpg", desc: "Deep evaluation of eating patterns, sleep cycles, activity levels, emotional eating triggers, and daily routine to identify what needs to change." },
        { title: "Stress & Metabolic Balance", image: "/images/services/Stress.jpg", desc: "Cortisol management, sleep optimization, recovery planning, and hormone-supportive habits to prevent stress from sabotaging your transformation." },
        { title: "Accountability & Long-Term Sustainability", image: "/images/services/Sustainable.jpg", desc: "Weekly check-ins, habit tracking systems, performance reviews, maintenance planning, and consistency strategies to keep you on track for the long term." },
      ]}
      pillars={[
        { title: "Behavioral Assessment", desc: "Understanding your current habits, triggers, and patterns is the foundation of any lasting lifestyle change. We assess before we prescribe.", color: "#6B3FA0" },
        { title: "Stress & Sleep Optimization", desc: "Cortisol and poor sleep directly impact weight, hormones, and metabolism. We target these with specific, practical strategies.", color: "#C9A227" },
        { title: "Accountability Systems", desc: "Regular check-ins, habit trackers, and performance reviews ensure you stay consistent and have support when challenges arise.", color: "#4A7C59" },
      ]}
      whoFor={[
        "People who struggle with emotional eating, stress eating, or binge cycles",
        "Individuals with chronic sleep issues that are affecting their metabolism and weight",
        "Those who know what to do for their health but struggle with consistency",
        "Busy professionals with high-stress lifestyles impacting their health",
        "Anyone who has achieved results before but always ends up reverting to old habits",
      ]}
      cta="Transform Your Lifestyle"
    />
  );
}
