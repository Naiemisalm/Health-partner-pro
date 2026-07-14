import { motion } from "framer-motion";
import { FaUserMd, FaStar, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function DoctorSection(){


const doctors=[

{
name:"Dr. Lina",
specialization:"Endodontist",
experience:"10+ Years Experience"
},

{
name:"Dr. John",
specialization:"Dental Specialist",
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

className="py-16 bg-white"


>


<div className="max-w-7xl mx-auto px-5">



<div className="text-center">


<h2 className="text-3xl md:text-4xl font-bold">

Our Dental Specialists

</h2>


<p className="text-gray-600 mt-3 max-w-2xl mx-auto">

Meet our experienced dentists who provide advanced root canal treatment.

</p>


</div>






<div className="grid md:grid-cols-2 gap-8 mt-10">


{
doctors.map((doc,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="bg-white rounded-3xl shadow-lg border p-8 flex flex-col items-center text-center hover:shadow-2xl transition"

>


<div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">


<FaUserMd className="text-6xl text-blue-600"/>


</div>



<h3 className="text-2xl font-bold mt-5">

{doc.name}

</h3>



<p className="text-blue-600 font-semibold mt-1">

{doc.specialization}

</p>



<p className="text-gray-500 mt-2">

{doc.experience}

</p>




<div className="flex items-center gap-1 text-yellow-500 mt-4">

<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

</div>





<Link

to="/appointment/201"

className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"

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