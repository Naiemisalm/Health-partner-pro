import { motion } from "framer-motion";
import { FaTooth, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Hero(){


return(

<motion.section

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-20"

>


<div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">



{/* Left Content */}

<div>


<div className="flex items-center gap-3 text-blue-600 font-semibold">

<FaTooth className="text-3xl"/>

<span>
Advanced Orthodontic Care
</span>

</div>





<h1 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">


Braces Treatment


<br/>


<span className="text-blue-600">

Get A Perfect Straight Smile

</span>


</h1>






<p className="text-gray-600 mt-5 text-lg leading-relaxed">

Correct crooked teeth and improve your smile with
advanced braces treatment from our experienced orthodontists.

</p>






<div className="flex gap-4 mt-8">


<Link

to="/appointment/203"

className="bg-blue-600 text-white px-7 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"

>

Book Appointment

<FaArrowRight/>

</Link>





<button

className="border border-blue-600 text-blue-600 px-7 py-3 rounded-full hover:bg-blue-50 transition"

>

Learn More

</button>



</div>



</div>









{/* Right Side Card */}


<div>


<div className="bg-white rounded-3xl shadow-xl p-8">


<div className="h-72 rounded-2xl bg-blue-100 flex items-center justify-center">


<FaTooth className="text-9xl text-blue-600"/>


</div>






<div className="grid grid-cols-2 gap-4 mt-6">



<div className="bg-blue-50 rounded-xl p-4 text-center">


<h3 className="text-2xl font-bold text-blue-600">

10+

</h3>


<p className="text-gray-600 text-sm">

Years Experience

</p>


</div>







<div className="bg-green-50 rounded-xl p-4 text-center">


<h3 className="text-2xl font-bold text-green-600">

2000+

</h3>


<p className="text-gray-600 text-sm">

Happy Patients

</p>


</div>




</div>



</div>


</div>





</div>


</motion.section>


)

}