import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Ongoing Progress Monitoring & Adjustments – WelloraFit",
  description: "Regular evaluations, blood work reviews, program adjustments, and continuous support to keep your health journey on track.",
};

export default function ProgressMonitoringPage() {
  return (
    <ServicePageLayout
      badge="Monitoring Service"
      title="Ongoing Progress Monitoring &"
      highlight="Adjustments"
      subtitle="Transformation does not stop after your plan is created. Regular evaluations, adjustments, and support are what turn short-term results into permanent change."
      heroImage="/images/services/Ongoing Progress Monitoring & Adjustments.jpg"
      intro="A health plan that never evolves is a plan that eventually fails. Your body changes, your lifestyle changes, your goals evolve — and your program must adapt accordingly. WelloraFit provides structured, ongoing monitoring by medical professionals to ensure you are always progressing, never plateauing."
      features={[
        { title: "Progress Reviews", image: "/images/services/Progress Tracked.jpg", desc: "Periodic tracking of weight, body composition, strength improvements, and blood work to measure real progress and identify areas needing adjustment." },
        { title: "Program Adjustments", image: "/images/services/Doctor Reviewed.jpg", desc: "Nutrition plans, workout intensity, and lifestyle strategies are modified based on your results — ensuring you keep progressing rather than hitting plateaus." },
        { title: "GLP-1 Monitoring", image: "/images/services/GLP-1 Therapy.jpg", desc: "For clients on GLP-1 therapy, response monitoring, dosage tracking, side effect management, and nutritional adaptation are conducted under medical supervision." },
        { title: "Habit Tracking", image: "/images/services/Structured Follow-Ups.jpg", desc: "Sleep quality, stress levels, meal consistency, and activity adherence are tracked to ensure your lifestyle habits continue to support your health goals." },
      ]}
      pillars={[
        { title: "Progress Tracked", desc: "Consistent measurement of the right markers — weight, body composition, blood work — gives you and your doctor a clear picture of what is working.", color: "#6B3FA0" },
        { title: "Doctor Reviewed", desc: "All progress data is reviewed by medical professionals who can identify clinical trends, catch early issues, and make evidence-based adjustments.", color: "#C9A227" },
        { title: "Structured Follow-Ups", desc: "Regular calls, WhatsApp check-ins, and report comparisons ensure you are never left without support or guidance between appointments.", color: "#4A7C59" },
      ]}
      whoFor={[
        "Anyone on a WelloraFit program who wants continuous medical oversight",
        "Individuals on GLP-1 therapy requiring close monitoring and adjustments",
        "People who have hit a weight loss plateau and need expert recalibration",
        "Those who want accountability and regular professional feedback on their progress",
        "Clients with lifestyle disorders needing ongoing medical management of health markers",
      ]}
      cta="Stay on Track with Ongoing Support"
    />
  );
}
