import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  FaCalendarCheck,
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import dermatologistDoctors from "./dermatologistData";



export default function DermatologistBooking(){


const {id}=useParams();


const doctor = dermatologistDoctors.find(
(item)=>item.id === Number(id)
);



const [submitted,setSubmitted]=useState(false);




if(!doctor){

return (

<div className="min-h-screen flex items-center justify-center">

<h1 className="text-3xl font-bold text-gray-600">

Dermatologist Doctor Not Found

</h1>

</div>

);

}





const handleSubmit=(e)=>{

e.preventDefault();

setSubmitted(true);

};








return (

<section className="bg-gray-50 min-h-screen py-10">


<div className="max-w-6xl mx-auto px-4">



<div className="grid lg:grid-cols-3 gap-6">







{/* Doctor Card */}


<div className="bg-white rounded-3xl shadow p-6 h-fit">



<div className="text-center">


<img

src={doctor.image}

alt={doctor.name}

className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-pink-100"

/>





<h2 className="text-xl font-bold mt-4 flex justify-center items-center gap-2">

{doctor.name}

<FaCheckCircle className="text-blue-500"/>

</h2>





<p className="text-pink-600 font-semibold mt-1">

{doctor.speciality}

</p>





<div className="flex justify-center items-center gap-2 text-yellow-500 mt-3">

<FaStar/>

{doctor.rating}


<span className="text-gray-400">

({doctor.reviews})

</span>


</div>



</div>







<div className="mt-6 space-y-3 text-gray-600">



<p>

<b>Degree:</b> {doctor.degree}

</p>





<p>

<b>Experience:</b> {doctor.experience} Years

</p>





<p className="flex gap-2">

<FaMapMarkerAlt className="text-pink-600"/>

{doctor.hospital}, {doctor.location}

</p>





<p className="flex gap-2">

<FaClock className="text-green-600"/>

{doctor.availability}

</p>





<p className="text-xl font-bold text-gray-800">

৳{doctor.fee}

<span className="text-sm font-normal text-gray-500">

 Consultation Fee

</span>

</p>



</div>



</div>









{/* Booking Form */}



<div className="lg:col-span-2 bg-white rounded-3xl shadow p-6 md:p-8">



<h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">

<FaCalendarCheck className="text-pink-600"/>

Book Dermatologist Appointment

</h1>




<p className="text-gray-500 mt-2">

Fill up the information to book your skin specialist appointment.

</p>








<form

onSubmit={handleSubmit}

className="mt-8"

>



<div className="grid md:grid-cols-2 gap-4">



<input

type="text"

placeholder="Patient Name"

required

className="border rounded-xl p-3 focus:ring-2 focus:ring-pink-400 outline-none"

/>





<input

type="number"

placeholder="Phone Number"

required

className="border rounded-xl p-3 focus:ring-2 focus:ring-pink-400 outline-none"

/>





<input

type="email"

placeholder="Email Address"

className="border rounded-xl p-3 focus:ring-2 focus:ring-pink-400 outline-none"

/>






<select

required

className="border rounded-xl p-3"

>


<option value="">

Select Gender

</option>


<option>

Male

</option>


<option>

Female

</option>


</select>



</div>









<div className="grid md:grid-cols-2 gap-4 mt-4">



<input

type="date"

required

className="border rounded-xl p-3"

/>







<select

required

className="border rounded-xl p-3"

>


<option value="">

Select Time

</option>


<option>

10:00 AM

</option>


<option>

12:00 PM

</option>


<option>

3:00 PM

</option>


<option>

6:00 PM

</option>



</select>



</div>









<textarea

placeholder="Describe your skin problem"

className="w-full border rounded-xl p-3 mt-4 h-32 outline-none focus:ring-2 focus:ring-pink-400"

/>







<button

type="submit"

className="w-full bg-pink-600 text-white py-3 rounded-xl mt-6 font-semibold hover:bg-pink-700 transition"

>

Confirm Appointment

</button>





</form>








{

submitted &&

<div className="mt-5 bg-green-100 text-green-700 p-4 rounded-xl text-center font-semibold">

Appointment Request Submitted Successfully

</div>


}







<Link

to="/dermatologist"

className="block text-center mt-5 text-pink-600 hover:underline"

>

← Back To Dermatologists

</Link>







</div>







</div>


</div>


</section>


);


}