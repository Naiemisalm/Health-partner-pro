import { motion } from "framer-motion";
import {
  FaUserMd,
  FaTooth,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";


export default function WhyChoose(){


const features = [

  {
    icon:<FaUserMd/>,
    title:"Expert Dentists",
    text:"Experienced dental specialists provide safe and effective root canal treatment."
  },


  {
    icon:<FaTooth/>,
    title:"Advanced Treatment",
    text:"Modern dental technology ensures accurate diagnosis and comfortable treatment."
  },


  {
    icon:<FaShieldAlt/>,
    title:"Safe & Reliable",
    text:"We maintain high safety standards for every dental procedure."
  },


  {
    icon:<FaCheckCircle/>,
    title:"Long Lasting Result",
    text:"Our treatment helps preserve your natural tooth for a long time."
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

Why Choose Our Root Canal Service?

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

We provide advanced dental care with experienced doctors,
modern equipment and patient-focused treatment.

</p>


</div>





<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">


{
features.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-8
}}

className="bg-white rounded-2xl shadow-lg p-6 text-center border hover:shadow-xl transition"

>


<div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl text-blue-600">

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