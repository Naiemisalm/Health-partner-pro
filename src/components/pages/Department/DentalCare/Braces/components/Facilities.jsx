import { motion } from "framer-motion";
import {
  FaClinicMedical,
  FaTeeth,
  FaLaptopMedical,
  FaShieldAlt,
  FaMicroscope,
  FaUserNurse
} from "react-icons/fa";


export default function Facilities(){


const facilities=[

{
icon:<FaClinicMedical/>,
title:"Modern Orthodontic Clinic",
text:"Well-equipped dental clinic with a comfortable environment for braces treatment."
},


{
icon:<FaTeeth/>,
title:"Advanced Braces System",
text:"We use modern orthodontic tools for accurate teeth alignment and better results."
},


{
icon:<FaLaptopMedical/>,
title:"Digital Treatment Planning",
text:"Advanced digital technology helps create a personalized braces treatment plan."
},


{
icon:<FaMicroscope/>,
title:"Advanced Diagnosis",
text:"Digital examination and imaging ensure precise orthodontic treatment."
},


{
icon:<FaShieldAlt/>,
title:"Safe & Hygienic Care",
text:"Maintaining strict hygiene standards for safe and comfortable treatment."
},


{
icon:<FaUserNurse/>,
title:"Patient Support",
text:"Friendly dental team provides continuous support throughout your braces journey."
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

Our Orthodontic Facilities

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

Advanced facilities and modern technology
for comfortable and effective braces treatment.

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