import { motion } from "framer-motion";
import {
  FaUserMd,
  FaStar,
  FaCalendarCheck
} from "react-icons/fa";
import { Link } from "react-router-dom";


export default function DoctorSection(){


const doctors=[

{
name:"Dr. Sarah Ahmed",
specialization:"Orthodontist",
experience:"12+ Years Experience"
},


{
name:"Dr. John Karim",
specialization:"Braces & Smile Specialist",
experience:"10+ Years Experience"
},


{
name:"Dr. Lina Rahman",
specialization:"Cosmetic Dentist & Orthodontist",
experience:"8+ Years Experience"
}

];



return(


<motion.section

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="py-16 bg-gray-50"

>


<div className="max-w-7xl mx-auto px-5">



<div className="text-center">


<h2 className="text-3xl md:text-4xl font-bold">

Our Orthodontic Specialists

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

Meet our experienced orthodontists who provide
advanced braces treatment and smile correction.

</p>


</div>







<div className="grid md:grid-cols-3 gap-8 mt-12">


{
doctors.map((doctor,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"

>


<div className="w-28 h-28 mx-auto rounded-full bg-blue-100 flex items-center justify-center">

<FaUserMd className="text-6xl text-blue-600"/>

</div>





<h3 className="text-xl font-bold mt-6">

{doctor.name}

</h3>





<p className="text-blue-600 font-semibold mt-2">

{doctor.specialization}

</p>





<p className="text-gray-500 mt-2">

{doctor.experience}

</p>






<div className="flex justify-center gap-1 text-yellow-500 mt-4">

<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

</div>






<Link

to="/appointment/203"

className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"

>

<FaCalendarCheck/>

Book Appointment

</Link>




</motion.div>


))

}


</div>


</div>


</motion.section>


)

}