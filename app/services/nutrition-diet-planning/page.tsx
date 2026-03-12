import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Personalized Nutrition & Diet Planning – WelloraFit",
  description: "Medically aligned nutrition plans built around your metabolic profile, blood markers, and lifestyle — not generic templates.",
};

export default function NutritionPage() {
  return (
    <ServicePageLayout
      badge="Nutrition Service"
      title="Personalized Nutrition &"
      highlight="Diet Planning"
      subtitle="Nutrition is built around your body — not a template. We design meal strategies based on your metabolic profile, blood markers, and lifestyle patterns."
      heroImage="/images/services/Personalized nutrition.jpg"
      intro="Most diet plans fail because they ignore your biology. At WelloraFit, our certified dietitians work in close coordination with doctors to create nutrition plans that are medically aligned, metabolically appropriate, and genuinely sustainable. We factor in insulin sensitivity, hormonal balance, thyroid function, and your daily routine — because your body is unique."
      features={[
        { title: "Health & Metabolic Assessment", image: "/images/services/Matabolic Reset.jpg", desc: "Before creating your plan, we review your blood markers, metabolic rate, body composition, and health history to ensure nutritional safety and effectiveness." },
        { title: "Root-Cause-Based Planning", image: "/images/services/Doctor Supervised.jpg", desc: "Nutrition plans are designed to address the specific metabolic issues identified in your medical assessment — insulin resistance, thyroid imbalance, hormonal issues, and more." },
        { title: "Customized Meal Planning", image: "/images/services/Balanced Nutrition.jpg", desc: "Practical, enjoyable meal structures with proper protein, carbohydrates, and healthy fats — without extreme restrictions that trigger rebound weight gain." },
        { title: "GLP-1 Nutrition Integration", image: "/images/services/GLP-1 Therapy.jpg", desc: "Specialized nutrition protocols designed to complement GLP-1 therapy — ensuring you preserve muscle, maintain micronutrient levels, and maximize medication effectiveness." },
        { title: "Ongoing Adjustments & Monitoring", image: "/images/services/Progress Tracked.jpg", desc: "Your nutrition plan is not static. Regular reviews ensure your meals continue to support your evolving health status and transformation goals." },
      ]}
      pillars={[
        { title: "Doctor Supervised", desc: "Every nutrition plan is guided by qualified medical professionals to ensure safety and effectiveness — especially important for those with lifestyle disorders.", color: "#6B3FA0" },
        { title: "Balanced Nutrition", desc: "Focus on sustainable meal structures with proper protein, carbs, and healthy fats — no extreme restrictions, no crash diets.", color: "#C9A227" },
        { title: "Metabolic Reset Strategies", desc: "Nutrition designed around your individual metabolism and hormonal profile to address insulin resistance, thyroid imbalance, and metabolic slowdown.", color: "#4A7C59" },
      ]}
      whoFor={[
        "People with lifestyle disorders like diabetes, PCOS, or thyroid conditions needing disease-specific diets",
        "Individuals who have failed multiple diet plans and need a science-based approach",
        "Those on GLP-1 therapy who need specialized nutritional support",
        "Anyone wanting sustainable eating habits — not temporary restriction",
        "Professionals with irregular schedules needing flexible, practical meal strategies",
      ]}
      cta="Get Your Personalized Nutrition Plan"
    />
  );
}
