import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Symptoms from "../components/Symptoms";
import RiskFactors from "../components/RiskFactors";
import Diagnosis from "../components/Diagnosis";
import Treatment from "../components/Treatment";
import DoctorProfile from "../components/DoctorProfile";
import FAQ from "../components/FAQ";
import AppointmentForm from "../components/AppointmentForm";


const Cataract = () => {
  return (
    <>
      <Hero/>
      <Overview/>
      <Symptoms/>
      <RiskFactors/>
      <Diagnosis/>
      <Treatment/>
      <DoctorProfile/>
      <FAQ />
      <AppointmentForm/>
    </>
  );
};

export default Cataract;