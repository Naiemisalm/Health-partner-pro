import { motion } from "framer-motion";
import {
  FaTooth,
  FaUserMd,
  FaSmile,
  FaShieldAlt
} from "react-icons/fa";


export default function WhyChoose(){


const features=[

{
icon:<FaUserMd/>,
title:"Expert Orthodontists",
text:"Our experienced orthodontists provide personalized braces treatment for every patient."
},


{
icon:<FaTooth/>,
title:"Advanced Braces Technology",
text:"We use modern orthodontic techniques for accurate and comfortable teeth alignment."
},


{
icon:<FaSmile/>,
title:"Beautiful Smile Result",
text:"Achieve a straight, confident and healthy smile with our professional care."
},


{
icon:<FaShieldAlt/>,
title:"Safe Treatment",
text:"Advanced hygiene and safety standards ensure a secure orthodontic experience."
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

Why Choose Our Braces Treatment?

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

Get expert orthodontic care with modern technology
and comfortable treatment plans.

</p>


</div>







<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">


{
features.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="bg-white rounded-3xl shadow-lg p-7 text-center border hover:shadow-2xl transition"

>


<div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-600">

{item.icon}

</div>




<h3 className="text-xl font-bold mt-5">

{item.title}

</h3>




<p className="text-gray-600 mt-3 text-sm leading-relaxed">

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