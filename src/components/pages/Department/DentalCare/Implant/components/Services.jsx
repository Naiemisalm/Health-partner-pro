import { motion } from "framer-motion";
import {
  FaTooth,
  FaSearch,
  FaCogs,
  FaSmile,
  FaSyringe,
  FaShieldAlt
} from "react-icons/fa";


export default function Services(){


const services=[

{
icon:<FaSearch/>,
title:"Implant Consultation",
text:"Complete dental examination and implant planning with advanced diagnosis."
},


{
icon:<FaTooth/>,
title:"Single Tooth Implant",
text:"Replace a missing tooth with a strong and natural-looking dental implant."
},


{
icon:<FaCogs/>,
title:"Full Mouth Implant",
text:"Complete smile restoration solution for patients with multiple missing teeth."
},


{
icon:<FaSyringe/>,
title:"Pain Free Procedure",
text:"Comfortable implant treatment with modern anesthesia and care."
},


{
icon:<FaShieldAlt/>,
title:"Safe Implant Surgery",
text:"Advanced techniques and strict safety protocols for successful results."
},


{
icon:<FaSmile/>,
title:"Smile Restoration",
text:"Improve your appearance, confidence and chewing ability."
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

Our Dental Implant Services

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

Complete implant solutions with modern technology
and experienced dental specialists.

</p>


</div>







<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">


{
services.map((service,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.04,
y:-8
}}

className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl transition"

>


<div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-600">

{service.icon}

</div>




<h3 className="text-xl font-bold mt-6">

{service.title}

</h3>




<p className="text-gray-600 mt-3 leading-relaxed">

{service.text}

</p>




<button

className="mt-5 text-blue-600 font-semibold hover:underline"

>

Learn More →

</button>



</motion.div>


))

}


</div>


</div>


</motion.section>


)

}