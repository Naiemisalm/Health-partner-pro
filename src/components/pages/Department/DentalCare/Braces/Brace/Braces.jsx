import BookAppointment from "../components/BookAppointment";
import DoctorSection from "../components/DoctorSection";
import Facilities from "../components/Facilities";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import TreatmentProcess from "../components/TreatmentProcess";
import WhyChoose from "../components/WhyChoose";

export default function Braces(){

return(

<main className="overflow-hidden bg-white">


<Hero/>

<WhyChoose/>

<Services/>

<TreatmentProcess/>

<DoctorSection/>

<Facilities/>

<Testimonials/>

<FAQ/>

<BookAppointment/>


</main>

)

}