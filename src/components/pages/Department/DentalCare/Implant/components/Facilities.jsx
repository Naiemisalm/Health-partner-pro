import { motion } from "framer-motion";
import {
  FaClinicMedical,
  FaTeeth,
  FaMicroscope,
  FaShieldAlt,
  FaLaptopMedical,
  FaUserNurse
} from "react-icons/fa";


export default function Facilities(){


const facilities=[

{
icon:<FaClinicMedical/>,
title:"Modern Dental Clinic",
text:"Well-equipped dental facility with advanced treatment environment."
},


{
icon:<FaTeeth/>,
title:"Advanced Implant System",
text:"High quality dental implant materials for long-lasting results."
},


{
icon:<FaMicroscope/>,
title:"Digital Diagnosis",
text:"Advanced imaging technology for accurate implant planning."
},


{
icon:<FaShieldAlt/>,
title:"Safe Treatment",
text:"Strict hygiene and safety protocols for every procedure."
},


{
icon:<FaLaptopMedical/>,
title:"Digital Dental Technology",
text:"Modern tools help provide precise and comfortable treatment."
},


{
icon:<FaUserNurse/>,
title:"Patient Care Support",
text:"Friendly support team throughout your implant journey."
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

className="py-16 bg-white"

>


<div className="max-w-7xl mx-auto px-5">



<div className="text-center">


<h2 className="text-3xl md:text-4xl font-bold">

Our Dental Implant Facilities

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

Advanced facilities and modern technology
for safe and successful dental implant treatment.

</p>


</div>






<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">


{
facilities.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-8
}}

className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition"

>


<div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-600">

{item.icon}

</div>




<h3 className="text-xl font-bold mt-6">

{item.title}

</h3>




<p className="text-gray-600 mt-3 leading-relaxed">

{item.text}

</p>



</motion.div>


))

}


</div>


</div>


</motion.section>


)

}