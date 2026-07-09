import { Link, useParams } from "react-router-dom";

import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaVideo,
} from "react-icons/fa";

import orthopedicDoctors from "../../SpecialityDetails/Orthopedic/orthopedicData";


export default function OrthopedicDoctorsProfile(){


const {id}=useParams();


const doctor = orthopedicDoctors.find(
(item)=>item.id === Number(id)
);



if(!doctor){

return (

<div className="min-h-screen flex items-center justify-center">

<h1 className="text-3xl font-bold text-gray-600">

Doctor Not Found

</h1>

</div>

);

}





return (

<section className="bg-gray-50 min-h-screen py-10">


<div className="max-w-5xl mx-auto px-4">



<div className="bg-white rounded-3xl shadow p-6 md:p-10">



{/* Top Profile */}


<div className="flex flex-col md:flex-row gap-6 items-center md:items-start">


<img

src={doctor.image}

alt={doctor.name}

className="w-36 h-36 rounded-full object-cover shadow"

/>



<div className="text-center md:text-left">


<h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2 justify-center md:justify-start">

{doctor.name}

<FaCheckCircle className="text-blue-500"/>

</h1>




<p className="text-blue-600 text-lg font-semibold mt-2">

{doctor.speciality}

</p>





<div className="flex items-center gap-2 text-yellow-500 mt-3 justify-center md:justify-start">

<FaStar/>

{doctor.rating}

<span className="text-gray-400">

({doctor.reviews} Reviews)

</span>

</div>




<p className="mt-3 text-gray-600">

{doctor.degree}

</p>



</div>


</div>








{/* Details */}


<div className="grid md:grid-cols-2 gap-5 mt-10">



<div className="bg-blue-50 rounded-2xl p-5">


<h3 className="font-bold text-lg mb-3">

Doctor Information

</h3>



<p className="text-gray-600">

Experience: <b>{doctor.experience} Years</b>

</p>



<p className="flex gap-2 text-gray-600 mt-3">

<FaMapMarkerAlt className="text-blue-600"/>

{doctor.hospital}, {doctor.location}

</p>



<p className="flex gap-2 text-gray-600 mt-3">

<FaClock className="text-green-600"/>

Available Today

</p>


</div>







<div className="bg-green-50 rounded-2xl p-5">


<h3 className="font-bold text-lg mb-3">

Consultation

</h3>



<p className="text-gray-700">

Fee:

<span className="font-bold text-xl">

৳{doctor.fee}

</span>

</p>





{

doctor.online &&

<span className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl mt-4">

<FaVideo/>

Online Consultation

</span>

}



</div>


</div>








{/* About */}


<div className="mt-10">


<h2 className="text-2xl font-bold text-gray-800">

About Doctor

</h2>


<p className="text-gray-600 mt-3 leading-7">

{doctor.name} is an experienced Orthopedic Specialist.
He provides expert treatment for bone, joint, spine and muscle related problems.
He focuses on modern diagnosis and patient friendly treatment.

</p>


</div>








{/* Buttons */}


<div className="flex flex-col md:flex-row gap-4 mt-10">



<Link

to={`/orthopedic-booking/${doctor.id}`}

className="flex-1 text-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"

>

Book Appointment

</Link>




<Link

to="/orthopedic"

className="flex-1 text-center border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"

>

Back To Doctors

</Link>



</div>





</div>


</div>


</section>

);


}