import Diagnosis from "../coponents/Diagnosis";
import DoctorProfile from "../coponents/DoctorProfile";
import FAQ from "../coponents/FAQ";
import Hero from "../coponents/Hero";
import Overview from "../coponents/Overview";
import AppointmentForm from "../coponents/ppointmentForm";
import RiskFactors from "../coponents/RiskFactors";
import Symptoms from "../coponents/Symptoms";
import Treatment from "../coponents/Treatment";

const Stroke = () => {
  return (
    <>
      <Hero/>
      <Overview/>
      <Symptoms/>
      <RiskFactors/>
      <Diagnosis/>
      <Treatment/>
      <DoctorProfile/>
      <FAQ/>
      <AppointmentForm/>
    </>
  );
};

export default Stroke;