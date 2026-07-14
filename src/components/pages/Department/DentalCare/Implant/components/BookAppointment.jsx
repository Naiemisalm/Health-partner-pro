import { motion } from "framer-motion";
import {
  FaTooth,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarCheck
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


<div className="max-w-7xl mx-auto">





<div className="text-center text-white mb-12">


<h2 className="text-4xl md:text-5xl font-bold">

Book Your Dental Implant Appointment

</h2>


<p className="mt-4 text-blue-100 max-w-2xl mx-auto">

Schedule your consultation with our expert implant specialists
and restore your confident smile.

</p>


</div>







<div className="grid lg:grid-cols-2 gap-8">






{/* Information Card */}


<div className="bg-white rounded-3xl p-8 shadow-xl">


<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">

<FaTooth className="text-3xl text-blue-600"/>

</div>




<h3 className="text-2xl font-bold mt-6">

Advanced Dental Implant Center

</h3>




<p className="text-gray-600 mt-4">

Get safe and comfortable dental implant treatment
with modern technology and experienced doctors.

</p>






<div className="space-y-5 mt-8">


<div className="flex items-center gap-4 text-gray-700">

<FaPhone className="text-blue-600"/>

+880 1712-345678

</div>



<div className="flex items-center gap-4 text-gray-700">

<FaEnvelope className="text-blue-600"/>

info@dentalcare.com

</div>



<div className="flex items-center gap-4 text-gray-700">

<FaMapMarkerAlt className="text-blue-600"/>

Dhaka, Bangladesh

</div>



</div>



</div>








{/* Appointment Form */}


<div className="bg-white rounded-3xl p-8 shadow-xl">



<div className="grid md:grid-cols-2 gap-5">



<div>

<label className="font-semibold">
Full Name
</label>

<input

type="text"

placeholder="Enter your name"

className="w-full mt-2 border rounded-xl px-4 py-3 focus:outline-blue-500"

/>

</div>





<div>

<label className="font-semibold">
Phone Number
</label>

<input

type="text"

placeholder="Enter phone number"

className="w-full mt-2 border rounded-xl px-4 py-3 focus:outline-blue-500"

/>

</div>





<div>

<label className="font-semibold">
Email
</label>

<input

type="email"

placeholder="Enter email"

className="w-full mt-2 border rounded-xl px-4 py-3 focus:outline-blue-500"

/>

</div>





<div>

<label className="font-semibold">
Appointment Date
</label>

<input

type="date"

className="w-full mt-2 border rounded-xl px-4 py-3"

/>

</div>



</div>







<div className="mt-5">


<label className="font-semibold">

Treatment Type

</label>


<select

className="w-full mt-2 border rounded-xl px-4 py-3"

>


<option>

Dental Implant

</option>


<option>

Single Tooth Implant

</option>


<option>

Full Mouth Implant

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

className="w-full mt-2 border rounded-xl px-4 py-3"

></textarea>


</div>







<button

className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"

>

<FaCalendarCheck/>

Confirm Appointment

</button>




</div>







</div>


</div>


</motion.section>


)

}