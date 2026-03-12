export const metadata = {
  title: "Disclaimer – WelloraFit",
};

export default function DisclaimerPage() {
  return (
    <>
      <div className="page-hero pt-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="pill-badge mb-4">Legal</span>
          <h1 className="section-title mb-4">Medical <span className="gradient-text">Disclaimer</span></h1>
          <div className="accent-divider" />
          <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>Last updated: April 2025</p>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="card-3d p-10 prose-custom">

            <h2>1. General Disclaimer</h2>
            <p>The information provided on the WelloraFit website (wellorafit.com) and through our services is intended for general informational and educational purposes only. While we strive to provide accurate, up-to-date, and evidence-based health information, nothing on this website constitutes professional medical advice, diagnosis, or treatment.</p>

            <h2>2. Not a Substitute for Professional Medical Advice</h2>
            <p>The content on this website — including articles, blog posts, service descriptions, and general health information — should not be used as a substitute for consultation with qualified healthcare professionals. Always seek the advice of your physician, registered dietitian, or other qualified health provider with any questions you may have regarding a medical condition, dietary changes, or exercise program.</p>

            <h2>3. Individual Results May Vary</h2>
            <p>Health outcomes, weight loss results, and wellness improvements described on this website are based on individual client experiences and should not be interpreted as typical or guaranteed results. Factors including current health status, medical history, adherence to programs, and individual biological differences mean that results will vary significantly between individuals.</p>

            <h2>4. Medical and Nutrition Information</h2>
            <p>Any nutrition, fitness, or health information provided on this website:</p>
            <ul>
              <li>Is not intended to diagnose, treat, cure, or prevent any disease or health condition</li>
              <li>Is not a substitute for individualized medical evaluation and advice</li>
              <li>Should be implemented only under the supervision of qualified healthcare professionals</li>
              <li>May not be appropriate for individuals with specific health conditions, medications, or circumstances</li>
            </ul>

            <h2>5. Emergency Medical Situations</h2>
            <p>If you are experiencing a medical emergency, please contact emergency services immediately (112 in India) or go to your nearest emergency room. WelloraFit services are not designed to address medical emergencies.</p>

            <h2>6. GLP-1 and Medication Information</h2>
            <p>Information about GLP-1 medications, supplements, or other pharmaceutical interventions on this website is provided for educational purposes only. Decisions about medication should be made exclusively in consultation with a qualified physician who can assess your individual medical history and current health status.</p>

            <h2>7. Blog and Content Accuracy</h2>
            <p>While our blog and educational content is written in collaboration with healthcare professionals and reviewed for accuracy, medical science evolves rapidly. We cannot guarantee that all information remains current. We recommend verifying important health decisions with your personal healthcare provider.</p>

            <h2>8. External Links</h2>
            <p>Our website may contain links to external websites for additional information. WelloraFit does not endorse, control, or take responsibility for the content, accuracy, or practices of any third-party websites.</p>

            <h2>9. Scope of Practice</h2>
            <p>WelloraFit professionals — including doctors, dietitians, and fitness trainers — operate within their respective scopes of practice as defined by applicable professional regulations and licensing bodies. Our services are not intended to replace ongoing primary care relationships with your personal physicians.</p>

            <h2>10. Contact</h2>
            <p>For questions about this disclaimer, please contact us at:</p>
            <ul>
              <li>Email: connect@wellorafit.com</li>
              <li>Phone: +91 98980 56401</li>
              <li>Address: 235-236, Sai Vittorio Complex, Althan, Surat-395007, Gujarat, India</li>
            </ul>

            <p>By using the WelloraFit website and services, you acknowledge that you have read, understood, and agree to this disclaimer.</p>
          </div>
        </div>
      </section>
    </>
  );
}
