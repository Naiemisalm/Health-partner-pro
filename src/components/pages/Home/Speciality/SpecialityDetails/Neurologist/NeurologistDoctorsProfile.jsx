import { useParams, Link } from "react-router-dom";

import neurologistDoctors from "../../SpecialityDetails/Neurologist/neurologistData";

import {
FaStar,
FaMapMarkerAlt,
FaClock,
FaCheckCircle
} from "react-icons/fa";


export default function NeurologistDoctorsProfile(){


const {id}=useParams();



const doctor = neurologistDoctors.find(
(item)=>item.id === Number(id)
);



if(!doctor){

return (

<div className="text-center mt-20 text-2xl font-bold">

Neurologist Doctor Not Found

</div>

)

}





return (

<section className="bg-gray-50 min-h-screen py-10">


<div className="max-w-4xl mx-auto px-4">


<div className="bg-white rounded-3xl shadow p-8">



<div className="flex flex-col md:flex-row gap-6 items-center">


<img

src={doctor.image}

alt={doctor.name}

className="w-36 h-36 rounded-full object-cover"

/>



<div>


<h1 className="text-3xl font-bold flex items-center gap-2">

{doctor.name}

<FaCheckCircle className="text-blue-500"/>

</h1>



<p className="text-purple-600 text-lg">

{doctor.speciality}

</p>




<div className="flex items-center gap-2 text-yellow-500 mt-2">

<FaStar/>

{doctor.rating}


<span className="text-gray-400">

({doctor.reviews} Reviews)

</span>


</div>


</div>


</div>







<div className="mt-8 space-y-4 text-gray-600">


<p>

<b>Degree:</b> {doctor.degree}

</p>



<p>

<b>Experience:</b> {doctor.experience} Years

</p>




<p className="flex gap-2">

<FaMapMarkerAlt className="text-purple-600"/>

{doctor.hospital}, {doctor.location}

</p>




<p className="flex gap-2">

<FaClock className="text-green-600"/>

Available Today

</p>




<p className="text-xl font-bold text-gray-800">

Consultation Fee: ৳{doctor.fee}

</p>



</div>







<Link

to={`/neurologist-booking/${doctor.id}`}

className="block text-center mt-8 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700"

>

Book Appointment

</Link>



</div>


</div>


</section>

)


}