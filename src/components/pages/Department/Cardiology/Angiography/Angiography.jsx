import Hero from "../Angiography/components/Hero";
import WhyChooseAngiography from "./components/WhyChooseAngiography";
import AngiographyServices from "./components/AngiographyServices";
import DoctorSection from "./Components/DoctorSection";
import ReportPreview from "./Components/ReportPreview";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import BookAppointment from "./Components/BookAppointment";


export default function Angiography() {

  return (

    <main className="overflow-hidden">

      {/* Hero Section */}
      <Hero />


      {/* About Angiography */}


      {/* Why Choose Us */}
      <WhyChooseAngiography/>


      {/* Services */}
      <AngiographyServices />


      {/* Doctors */}
      <DoctorSection />


      {/* Report Preview */}
      <ReportPreview />


      {/* Testimonials */}
      <Testimonials />


      {/* FAQ */}
      <FAQ />


      {/* Appointment */}
      <BookAppointment />

    </main>

  );

}