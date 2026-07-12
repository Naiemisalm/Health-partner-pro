import Hero from "../Echo/Components/Hero";
import AboutEcho from "../Echo/Components/AboutEcho";
import WhyChooseEcho from "../Echo/Components/WhyChooseEcho";
import EchoServices from "../Echo/components/EchoServices";
import DoctorSection from "../Echo/components/DoctorSection";
import ReportPreview from "../Echo/components/ReportPreview";
import Testimonials from "../Echo/components/Testimonials";
import FAQ from "../Echo/Components/FAQ";
import BookAppointment from "../Echo/components/BookAppointment";


export default function Echo() {


  return (

    <main>


      {/* Hero Section */}
      <Hero />


      {/* About Echo */}
      <AboutEcho />


      {/* Why Choose Echo */}
      <WhyChooseEcho />


      {/* Echo Services */}
      <EchoServices />


      {/* Specialist Doctors */}
      <DoctorSection />


      {/* Echo Report Preview */}
      <ReportPreview />


      {/* Patient Testimonials */}
      <Testimonials />


      {/* FAQ */}
      <FAQ />


      {/* Appointment */}
      <BookAppointment />


    </main>

  );

}