import { Link, useParams } from "react-router-dom";

import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaVideo,
} from "react-icons/fa";

import dermatologistDoctors from "./dermatologistData";



export default function DermatologistDoctorsProfile(){


const {id}=useParams();


const doctor = dermatologistDoctors.find(
(item)=>item.id === Number(id)
);




if(!doctor){

return (

<div className="min-h-screen flex items-center justify-center">

<h1 className="text-3xl font-bold text-gray-600">

Dermatologist Doctor Not Found

</h1>

</div>

);

}





return (

<section className="bg-gray-50 min-h-screen py-10">


<div className="max-w-5xl mx-auto px-4">



<div className="bg-white rounded-3xl shadow p-6 md:p-10">






{/* Profile Top */}


<div className="flex flex-col md:flex-row items-center md:items-start gap-6">



<img

src={doctor.image}

alt={doctor.name}

className="w-36 h-36 rounded-full object-cover border-4 border-pink-100 shadow"

/>






<div className="text-center md:text-left">


<h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-2">

{doctor.name}

<FaCheckCircle className="text-blue-500"/>

</h1>





<p className="text-pink-600 font-semibold text-lg mt-2">

{doctor.speciality}

</p>





<div className="flex items-center justify-center md:justify-start gap-2 text-yellow-500 mt-3">

<FaStar/>

{doctor.rating}

<span className="text-gray-400">

({doctor.reviews} Reviews)

</span>


</div>





<p className="text-gray-600 mt-3">

{doctor.degree}

</p>




</div>



</div>











{/* Details */}


<div className="grid md:grid-cols-2 gap-5 mt-10">





<div className="bg-pink-50 rounded-2xl p-5">


<h2 className="font-bold text-xl mb-4">

Doctor Information

</h2>




<p className="text-gray-600">

Experience:

<b> {doctor.experience} Years</b>

</p>





<p className="flex gap-2 text-gray-600 mt-3">

<FaMapMarkerAlt className="text-pink-600"/>

{doctor.hospital}, {doctor.location}

</p>







<p className="flex gap-2 text-gray-600 mt-3">

<FaClock className="text-green-600"/>

{doctor.availability}

</p>




</div>









<div className="bg-blue-50 rounded-2xl p-5">


<h2 className="font-bold text-xl mb-4">

Consultation

</h2>




<p className="text-gray-700">

Consultation Fee:

<span className="text-2xl font-bold text-gray-800">

 ৳{doctor.fee}

</span>

</p>







{

doctor.online &&


<div className="inline-flex items-center gap-2 mt-4 bg-green-600 text-white px-4 py-2 rounded-xl">

<FaVideo/>

Online Consultation

</div>


}



</div>





</div>









{/* About */}


<div className="mt-10">


<h2 className="text-2xl font-bold text-gray-800">

About Dermatologist

</h2>



<p className="text-gray-600 leading-7 mt-3">

{doctor.name} is an experienced dermatologist and skin specialist.
The doctor provides professional treatment for skin problems,
acne, hair care, cosmetic procedures and other dermatology services.

</p>


</div>









{/* Buttons */}


<div className="flex flex-col md:flex-row gap-4 mt-10">



<Link

to={`/dermatologist-booking/${doctor.id}`}

className="flex-1 text-center bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transition"

>

Book Appointment

</Link>





<Link

to="/dermatologist"

className="flex-1 text-center border border-pink-600 text-pink-600 py-3 rounded-xl hover:bg-pink-600 hover:text-white transition"

>

Back To Dermatologists

</Link>



</div>






</div>


</div>


</section>


);


}