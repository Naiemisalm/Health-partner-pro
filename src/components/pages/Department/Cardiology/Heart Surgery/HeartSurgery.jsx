import Hero from "./Components/Hero";
import WhyChooseHeartSurgery from "./Components/WhyChooseHeartSurgery";
import HeartSurgeryServices from "./Components/HeartSurgeryServices";
import SurgeryProcess from "./Components/SurgeryProcess";
import DoctorSection from "./Components/DoctorSection";
import HospitalFacilities from "./Components/HospitalFacilities";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import BookAppointment from "./Components/BookAppointment";

export default function HeartSurgery() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <Hero />

      {/* Why Choose */}
      <WhyChooseHeartSurgery />

      {/* Services */}
      <HeartSurgeryServices />

      {/* Surgery Process */}
      <SurgeryProcess />

      {/* Doctors */}
      <DoctorSection />

      {/* Facilities */}
      <HospitalFacilities />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Appointment */}
      <BookAppointment />

  
    </main>
  );
}