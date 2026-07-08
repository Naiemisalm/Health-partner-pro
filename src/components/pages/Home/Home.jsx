import Hero from "../Home/Hero/Hero";
import Services from "../Services/Services";
import DoctorCard from "./DoctorCard/DoctorCard";
import HomePage from "./DoctorCard/HomePage";
import HealthCheckupPackages from "./HealthCheckupPackages/HealthCheckupPackages";
import HeroCarousel from "./Hero/HeroCarousel";
import MedicalRecords from "./MedicalRecords/MedicalRecords";
import Testimonials from "./Testimonials/Testimonials";


const About = () => {
  return (
    <div>
           <HeroCarousel/>
           <Services/>
           <HomePage/>
           <HealthCheckupPackages/>
           <Testimonials/>
           
            {/*  <MedicalRecords/> */}
    </div>
  );
};

export default About;