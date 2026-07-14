import AppointmentForm from "../components/AppointmentForm";
import Benefits from "../components/Benefits";
import DoctorProfile from "../components/DoctorProfile";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import ProcedureSteps from "../components/ProcedureSteps";
import Testimonials from "../components/Testimonials";
import TreatmentOverview from "../components/TreatmentOverview";
import WhiteningOptions from "../components/WhiteningOptions";


export default function Whitening(){


return(

<main className="overflow-hidden bg-white">


<Hero/>
<TreatmentOverview/>
<DoctorProfile/>
<WhiteningOptions/>
<ProcedureSteps/>
<Benefits/>
<Pricing/>
<Testimonials/>
<FAQ/>
<AppointmentForm/>




</main>

)

}