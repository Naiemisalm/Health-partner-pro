import AppointmentForm from "./components/AppointmentForm";
import Diagnosis from "./components/Diagnosis";
import DoctorProfile from "./components/DoctorProfile";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Symptoms from "./components/Symptoms";
import Treatment from "./components/Treatment";
import Triggers from "./components/Triggers";


const Migraine = () => {

  return (
    <main>

      <Hero />

      <Overview />

      <Symptoms />

      <Triggers />

      <Diagnosis />

      <Treatment />

      <DoctorProfile />

      <FAQ />

      <AppointmentForm />

    </main>
  );
};


export default Migraine;