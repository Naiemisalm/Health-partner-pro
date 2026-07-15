import Blog from "../Blog/Blog";
import Hero from "../Home/Hero/Hero";
import Services from "../Services/Services";
import DoctorCard from "./DoctorCard/DoctorCard";
import HomePage from "./DoctorCard/HomePage";
import HealthCheckupPackages from "./HealthCheckupPackages/HealthCheckupPackages";
import HeroCarousel from "./Hero/HeroCarousel";
import MedicalRecords from "./MedicalRecords/MedicalRecords";
import Speciality from "./Speciality/Speciality";
import Testimonials from "./Testimonials/Testimonials";


const About = () => {
  return (
    <div>
           <HeroCarousel/>
                 <Speciality />

           <Services/>
           <HomePage/>
           <HealthCheckupPackages/>
           <Testimonials/>
           <Blog showAll={false} />
           
            {/*  <MedicalRecords/> */}
    </div>
  );
};

export default About;