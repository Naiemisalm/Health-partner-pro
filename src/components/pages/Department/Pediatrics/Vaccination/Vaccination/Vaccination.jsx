import Hero from "../components/Hero";
import Overview from "../components/Overview";
import VaccineSchedule from "../components/VaccineSchedule";
import Benefits from "../components/Benefits";
import DoctorProfile from "../components/DoctorProfile";
import FAQ from "../components/FAQ";
import AppointmentForm from "../components/AppointmentForm";

const Vaccination = () => {
  return (
    <>
      <Hero/>
      <Overview/>
      <VaccineSchedule />
      <Benefits/>
      <DoctorProfile/>
      <FAQ/>
      <AppointmentForm/>
    </>
  );
};

export default Vaccination;