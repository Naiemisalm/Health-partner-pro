import { motion } from "framer-motion";
import { FaSmileBeam, FaArrowRight, FaTooth } from "react-icons/fa";
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

className="relative overflow-hidden bg-gradient-to-r from-cyan-50 via-white to-blue-50 py-20"

>


<div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">





{/* Left Content */}


<div>


<div className="flex items-center gap-3 text-cyan-600 font-semibold">

<FaSmileBeam className="text-3xl"/>

<span>
Professional Cosmetic Dentistry
</span>

</div>





<h1 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">


Teeth Whitening Treatment


<br/>


<span className="text-cyan-600">

Brighten Your Smile Naturally

</span>


</h1>






<p className="text-gray-600 mt-5 text-lg leading-relaxed">

Remove tooth stains and get a brighter confident smile
with our advanced professional teeth whitening treatment.

</p>






<div className="flex gap-4 mt-8">



<Link

to="/appointment/204"

className="bg-cyan-600 text-white px-7 py-3 rounded-full flex items-center gap-2 hover:bg-cyan-700 transition"

>

Book Appointment

<FaArrowRight/>

</Link>






<button

className="border border-cyan-600 text-cyan-600 px-7 py-3 rounded-full hover:bg-cyan-50 transition"

>

Learn More

</button>



</div>



</div>









{/* Right Card */}


<div>


<div className="bg-white rounded-3xl shadow-xl p-8">



<div className="h-72 rounded-2xl bg-cyan-100 flex items-center justify-center">


<FaTooth className="text-9xl text-cyan-600"/>


</div>






<div className="grid grid-cols-2 gap-4 mt-6">



<div className="bg-cyan-50 rounded-xl p-4 text-center">


<h3 className="text-2xl font-bold text-cyan-600">

8+

</h3>


<p className="text-gray-600 text-sm">

Years Experience

</p>


</div>







<div className="bg-green-50 rounded-xl p-4 text-center">


<h3 className="text-2xl font-bold text-green-600">

3000+

</h3>


<p className="text-gray-600 text-sm">

Happy Smiles

</p>


</div>



</div>



</div>


</div>





</div>


</motion.section>


)

}