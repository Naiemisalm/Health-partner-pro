import { motion } from "framer-motion";
import {
  FaSearch,
  FaTeeth,
  FaCogs,
  FaSmileBeam
} from "react-icons/fa";


export default function TreatmentProcess(){


const steps=[

{
number:"01",
icon:<FaSearch/>,
title:"Dental Checkup",
text:"Doctor examines your teeth and jaw condition to create a suitable braces treatment plan."
},


{
number:"02",
icon:<FaTeeth/>,
title:"Braces Placement",
text:"Braces are carefully placed on your teeth using advanced orthodontic techniques."
},


{
number:"03",
icon:<FaCogs/>,
title:"Regular Adjustment",
text:"Regular visits help adjust braces and gradually move teeth into the correct position."
},


{
number:"04",
icon:<FaSmileBeam/>,
title:"Perfect Smile",
text:"After completing treatment, you get a straight, healthy and confident smile."
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

Braces Treatment Process

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

A simple step-by-step orthodontic journey
for achieving a beautiful straight smile.

</p>


</div>







<div className="grid md:grid-cols-4 gap-8 mt-12">


{
steps.map((step,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="relative bg-gray-50 rounded-3xl p-7 shadow-md hover:shadow-xl transition text-center"

>


<div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

{step.number}

</div>





<div className="mt-8 w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-600">

{step.icon}

</div>





<h3 className="text-xl font-bold mt-6">

{step.title}

</h3>




<p className="text-gray-600 mt-3 text-sm leading-relaxed">

{step.text}

</p>



</motion.div>


))

}


</div>


</div>


</motion.section>


)

}