import { motion } from "framer-motion";
import { FaSearch, FaTooth, FaSmileBeam } from "react-icons/fa";


export default function TreatmentProcess(){


const steps=[

{
icon:<FaSearch/>,
number:"01",
title:"Diagnosis",
text:"Our dentist examines your tooth condition using advanced dental tools and digital technology."
},

{
icon:<FaTooth/>,
number:"02",
title:"Root Canal Treatment",
text:"The infected area is cleaned, treated and protected with a modern root canal procedure."
},

{
icon:<FaSmileBeam/>,
number:"03",
title:"Tooth Restoration",
text:"The tooth is restored to bring back strength, function and a natural smile."
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

Root Canal Treatment Process

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

A simple and comfortable treatment journey with our expert dental team.

</p>


</div>






<div className="grid md:grid-cols-3 gap-8 mt-12">


{
steps.map((step,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"

>


<div className="absolute -top-5 left-6 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">

{step.number}

</div>




<div className="w-16 h-16 mt-4 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-600">

{step.icon}

</div>




<h3 className="text-xl font-bold mt-6">

{step.title}

</h3>



<p className="text-gray-600 mt-3 leading-relaxed">

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