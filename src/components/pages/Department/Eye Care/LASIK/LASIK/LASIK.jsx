import Benefits from "../components/Benefits";
import DoctorProfile from "../components/DoctorProfile";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Procedure from "../components/Procedure";
import FAQ from "../components/FAQ";
import AppointmentForm from "../components/AppointmentForm";

const LASIK = () => {
  return (
    <>
      <Hero/>
      <Overview/>
      <Benefits/>
      <Procedure/>
      <DoctorProfile/>
      <FAQ/>
      <AppointmentForm/>
    </>
  );
};

export default LASIK;