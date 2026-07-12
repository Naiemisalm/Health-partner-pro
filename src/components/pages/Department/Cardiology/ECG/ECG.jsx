import Hero from "../ECG/components/Hero";
import AboutECG from "../ECG/components/AboutECG";
import WhyChooseECG from "../ECG/components/WhyChooseECG";
import ECGServices from "../ECG/components/ECGServices";
import DoctorSection from "../ECG/components/DoctorSection";
import ReportPreview from "../ECG/components/ReportPreview";
import Testimonials from "../ECG/components/Testimonials";
import FAQ from "../ECG/components/FAQ";
import BookAppointment from "../ECG/components/BookAppointment";

export default function ECG() {
  return (
    <main className="bg-slate-50">
      <Hero/>
      <AboutECG />
      <WhyChooseECG />
      <ECGServices />
      <DoctorSection />
      <ReportPreview />
      <Testimonials />
      <FAQ />
      <BookAppointment />
    </main>
  );
}