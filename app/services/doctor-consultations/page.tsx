import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Doctor Consultations & Medical Assessments – WelloraFit",
  description: "Comprehensive medical evaluation, 74+ diagnostic markers, root-cause identification, and doctor-led health guidance.",
};

export default function DoctorConsultationsPage() {
  return (
    <ServicePageLayout
      badge="Medical Service"
      title="Doctor Consultations &"
      highlight="Medical Assessments"
      subtitle="At WelloraFit, every transformation begins with a comprehensive medical evaluation. We identify underlying causes before beginning any program."
      heroImage="/images/services/Doctor Consultations.jpg"
      intro="Most weight loss programs start with a diet plan. We start with your blood. Before recommending any nutrition or fitness program, our doctors conduct a thorough health and metabolic evaluation — analyzing 74+ diagnostic markers to understand what is truly happening inside your body. This is root-cause medicine."
      features={[
        { title: "Health Metabolic Review", image: "/images/services/Metabolic Issues.jpg", desc: "Comprehensive assessment of your metabolic indicators, body composition, lifestyle factors, and current health status to establish a clear baseline." },
        { title: "Blood & Diagnostic Review", image: "/images/services/GLP-1 Therapy.jpg", desc: "Analysis of blood reports covering 74+ diagnostic markers including thyroid, hormones, blood sugar, lipid profile, vitamin levels, and inflammatory markers." },
        { title: "Root-Cause Identification", image: "/images/services/Doctor Guided.jpg", desc: "Evaluation of hormonal imbalances, insulin resistance, metabolic dysfunction, and other underlying factors that may be driving weight gain or health issues." },
        { title: "Personalized Medical Guidance", image: "/images/services/Doctor Supervised.jpg", desc: "Doctor-led tailored recommendations including medication review, GLP-1 therapy assessment, and a clear medical roadmap for your transformation." },
      ]}
      pillars={[
        { title: "Doctor Supervised", desc: "Every assessment is conducted and reviewed by qualified medical professionals, ensuring clinical accuracy and patient safety at every step.", color: "#6B3FA0" },
        { title: "Root-Cause Focused", desc: "We do not treat symptoms. We identify the underlying biological and metabolic causes of your health challenges before prescribing solutions.", color: "#C9A227" },
        { title: "Data-Driven Decisions", desc: "All recommendations are based on your actual diagnostic data — not assumptions, trends, or generic protocols.", color: "#4A7C59" },
      ]}
      whoFor={[
        "Individuals with stubborn weight gain unresponsive to standard dieting or exercise",
        "Patients with diabetes, PCOS, thyroid disorders, or metabolic syndrome",
        "Those evaluating GLP-1 therapy options and needing medical supervision",
        "Anyone who wants to understand the root causes of their health challenges",
        "Individuals who have tried multiple diets and failed to see lasting results",
      ]}
      cta="Begin With a Medical Assessment"
    />
  );
}
