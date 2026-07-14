import Causes from "../comopnents/Causes";
import Diagnosis from "../comopnents/Diagnosis";
import DoctorProfile from "../comopnents/DoctorProfile";
import FAQ from "../comopnents/FAQ";
import Hero from "../comopnents/Hero";
import Overview from "../comopnents/Overview";
import Symptoms from "../comopnents/Symptoms";
import Treatment from "../comopnents/Treatment";
import AppointmentForm from "../comopnents/AppointmentForm";



const Fever = () => {
  return (
    <>
      <Hero/>
      <Overview/>
      <Symptoms/>
      <Causes/>
      <Diagnosis/>
      <Treatment/>
      <DoctorProfile/>
      <FAQ/>
      <AppointmentForm/>
    </>
  );
};

export default Fever;