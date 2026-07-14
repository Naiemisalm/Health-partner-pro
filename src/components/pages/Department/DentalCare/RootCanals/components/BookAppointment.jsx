import { motion } from "framer-motion";
import {
  FaTooth,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser
} from "react-icons/fa";


export default function BookAppointment(){


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

className="py-20 px-5 bg-gradient-to-r from-blue-600 to-cyan-500"

>


<div className="max-w-6xl mx-auto">



{/* Header */}

<div className="text-center text-white mb-12">


<h2 className="text-4xl md:text-5xl font-bold">

Book Your Root Canal Appointment

</h2>


<p className="mt-4 text-blue-100">

Schedule your dental treatment with our expert dental team
and take care of your oral health today.

</p>


</div>






<div className="grid lg:grid-cols-2 gap-8 items-stretch">





{/* Left Card */}

<div className="bg-white rounded-3xl p-8 shadow-xl">


<div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

<FaTooth className="text-3xl text-blue-600"/>

</div>



<h3 className="text-2xl font-bold mt-6">

Dental Care Center

</h3>


<p className="text-gray-600 mt-4">

Get professional root canal treatment and
consultation from our experienced dental specialists.

</p>





<div className="space-y-5 mt-8 text-gray-700">


<p className="flex items-center gap-4">

<FaPhone className="text-blue-600"/>

+880 1712-345678

</p>


<p className="flex items-center gap-4">

<FaEnvelope className="text-blue-600"/>

info@hospital.com

</p>


<p className="flex items-center gap-4">

<FaMapMarkerAlt className="text-blue-600"/>

Dhaka, Bangladesh

</p>



</div>


</div>









{/* Form */}

<div className="bg-white rounded-3xl p-8 shadow-xl">


<div className="grid md:grid-cols-2 gap-5">



<div>

<label className="font-semibold">
Full Name
</label>

<input

type="text"

placeholder="Enter your name"

className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-blue-600"

/>

</div>





<div>

<label className="font-semibold">
Phone Number
</label>

<input

type="text"

placeholder="Enter phone number"

className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-blue-600"

/>

</div>





<div>

<label className="font-semibold">
Email
</label>

<input

type="email"

placeholder="Enter email"

className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-blue-600"

/>

</div>





<div>

<label className="font-semibold">
Appointment Date
</label>

<input

type="date"

className="w-full mt-2 border rounded-xl px-4 py-3 outline-none"

/>

</div>



</div>





<div className="mt-5">


<label className="font-semibold">
Select Service
</label>


<select

className="w-full mt-2 border rounded-xl px-4 py-3"

>

<option>
Root Canal Treatment
</option>

<option>
Dental Implant
</option>

<option>
Braces
</option>


</select>


</div>







<div className="mt-5">


<label className="font-semibold">
Message
</label>


<textarea

rows="4"

placeholder="Write your message..."

className="w-full mt-2 border rounded-xl px-4 py-3 outline-none"

/>


</div>






<button

className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"

>

Confirm Appointment

</button>




</div>




</div>


</div>


</motion.section>


)

}