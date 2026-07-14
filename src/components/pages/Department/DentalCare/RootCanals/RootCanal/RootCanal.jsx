
import Hero from "../components/Hero";
import WhyChooseRootCanal from "../components/WhyChooseRootCanal";
import TreatmentProcess from "../components/TreatmentProcess";
import DoctorSection from "../components/DoctorSection";
import Facilities from "../components/Facilities";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import BookAppointment from "../components/BookAppointment";


export default function RootCanal(){

  return (

    <main className="overflow-hidden bg-white">


      {/* Hero */}
      <Hero/>


      {/* Why Choose */}
      <WhyChooseRootCanal />


      {/* Treatment Process */}
      <TreatmentProcess/>


      {/* Doctors */}
      <DoctorSection/>


      {/* Facilities */}
      <Facilities/>


      {/* Testimonials */}
      <Testimonials/>


      {/* FAQ */}
      <FAQ/>


      {/* Appointment */}
      <BookAppointment/>


    </main>

  );

}