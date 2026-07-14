import { motion } from "framer-motion";
import {
  FaTooth,
  FaSmile,
  FaCogs,
  FaUserMd,
  FaTeeth,
  FaMagic
} from "react-icons/fa";


export default function Services(){


const services=[

{
icon:<FaTooth/>,
title:"Metal Braces",
text:"Traditional metal braces to effectively correct crowded and misaligned teeth."
},


{
icon:<FaSmile/>,
title:"Ceramic Braces",
text:"Tooth-colored braces that provide a more natural and aesthetic appearance."
},


{
icon:<FaCogs/>,
title:"Self-Ligating Braces",
text:"Advanced braces system designed for faster and more comfortable treatment."
},


{
icon:<FaMagic/>,
title:"Smile Correction",
text:"Customized orthodontic solutions to create a beautiful straight smile."
},


{
icon:<FaTeeth/>,
title:"Teeth Alignment",
text:"Correct gaps, crooked teeth and bite problems with expert care."
},


{
icon:<FaUserMd/>,
title:"Orthodontic Consultation",
text:"Complete dental evaluation and personalized braces treatment planning."
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

Our Braces Services

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

Complete orthodontic solutions to align your teeth
and improve your smile.

</p>


</div>






<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">


{
services.map((service,index)=>(


<motion.div

key={index}

whileHover={{
y:-10,
scale:1.03
}}

className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"

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