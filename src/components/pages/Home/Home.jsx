import Hero from "../Home/Hero/Hero";
import DoctorCard from "./DoctorCard/DoctorCard";
import HomePage from "./DoctorCard/HomePage";
import HealthCheckupPackages from "./HealthCheckupPackages/HealthCheckupPackages";
import HeroCarousel from "./Hero/HeroCarousel";
import MedicalRecords from "./MedicalRecords/MedicalRecords";


const About = () => {
  return (
    <div>
           <HeroCarousel/>
           <HomePage/>
           <HealthCheckupPackages/>
            {/*  <MedicalRecords/> */}
    </div>
  );
};

export default About;