import { motion } from "framer-motion";
import {
  FaTooth,
  FaUserMd,
  FaShieldAlt,
  FaSmile
} from "react-icons/fa";


export default function WhyChoose(){


const features=[

{
icon:<FaUserMd/>,
title:"Expert Implant Dentists",
text:"Our experienced implant specialists provide safe and professional dental implant treatment."
},


{
icon:<FaTooth/>,
title:"Advanced Implant Technology",
text:"Modern dental equipment ensures accurate diagnosis and successful implant placement."
},


{
icon:<FaShieldAlt/>,
title:"Safe & Reliable Treatment",
text:"We follow advanced safety protocols for comfortable and secure implant procedures."
},


{
icon:<FaSmile/>,
title:"Natural Smile Result",
text:"Get strong, natural-looking teeth and improve your confidence with dental implants."
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

Why Choose Our Dental Implant Service?

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

Advanced implant solutions with expert care,
modern technology and long-lasting results.

</p>


</div>






<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">


{
features.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="bg-white border rounded-3xl shadow-lg p-7 text-center hover:shadow-2xl transition"

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