import { Link, useParams } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaArrowLeft,
  FaBriefcaseMedical,
} from "react-icons/fa";


const doctors = [

{
id:1,
name:"Dr. Md Rahman",
speciality:"General Physician",
degree:"MBBS, FCPS (Medicine)",
experience:12,
hospital:"City Medical Hospital",
location:"Dhaka",
fee:800,
rating:4.8,
reviews:125,
about:"Experienced physician providing quality treatment for fever, diabetes, blood pressure and general health problems.",
image:"https://randomuser.me/api/portraits/men/32.jpg"
},


{
id:2,
name:"Dr. Ahmed Hasan",
speciality:"General Physician",
degree:"MBBS, MD Medicine",
experience:10,
hospital:"Popular Diagnostic Center",
location:"Dhaka",
fee:700,
rating:4.7,
reviews:98,
about:"Specialist in internal medicine and primary healthcare services.",
image:"https://randomuser.me/api/portraits/men/45.jpg"
},


{
id:3,
name:"Dr. Nusrat Jahan",
speciality:"General Physician",
degree:"MBBS, FCPS",
experience:8,
hospital:"Evercare Hospital",
location:"Chittagong",
fee:600,
rating:4.9,
reviews:210,
about:"Providing modern healthcare consultation with patient friendly service.",
image:"https://randomuser.me/api/portraits/women/44.jpg"
},
{
id:101,
name:"Dr. Arif Hossain",
speciality:"Cardiologist",
degree:"MBBS, FCPS (Cardiology)",
experience:15,
hospital:"National Heart Foundation Hospital",
location:"Dhaka",
fee:1200,
rating:4.9,
reviews:320,
about:"Heart specialist providing advanced cardiac treatment.",
image:"https://randomuser.me/api/portraits/men/11.jpg"
},


{
id:102,
name:"Dr. Sadia Rahman",
speciality:"Cardiologist",
degree:"MBBS, MD Cardiology",
experience:12,
hospital:"Evercare Hospital",
location:"Dhaka",
fee:1000,
rating:4.8,
reviews:250,
about:"Specialist in heart disease treatment.",
image:"https://randomuser.me/api/portraits/women/12.jpg"
},


{
id:103,
name:"Dr. Mahmud Hasan",
speciality:"Cardiologist",
degree:"MBBS, FCPS",
experience:10,
hospital:"Parkview Hospital",
location:"Chittagong",
fee:900,
rating:4.7,
reviews:180,
about:"Experienced cardiologist.",
image:"https://randomuser.me/api/portraits/men/15.jpg"
},

];




export default function DoctorProfile(){


const {id}=useParams();



const doctor = doctors.find(
(item)=>item.id === Number(id)
);



if(!doctor){

return(

<div className="text-center py-20 text-xl font-semibold">

Doctor Not Found

</div>

)

}



return(

<section className="bg-gray-50 min-h-screen py-10">


<div className="max-w-5xl mx-auto px-4">



<Link
to="/general-physician"
className="flex items-center gap-2 text-cyan-600 mb-5"
>

<FaArrowLeft/>

Back To Doctors

</Link>





<div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">





<div className="flex flex-col md:flex-row items-center gap-8">



<img

src={doctor.image}

alt={doctor.name}

className="w-36 h-36 rounded-full object-cover border-4 border-cyan-100"

/>





<div className="text-center md:text-left">


<h1 className="text-3xl font-bold flex justify-center md:justify-start items-center gap-2">

{doctor.name}

<FaCheckCircle className="text-blue-500"/>

</h1>



<p className="text-cyan-600 text-lg font-semibold">

{doctor.speciality}

</p>



<p className="text-gray-500">

{doctor.degree}

</p>




<div className="flex justify-center md:justify-start gap-2 items-center text-yellow-500 mt-3">

<FaStar/>

{doctor.rating}

<span className="text-gray-400">

({doctor.reviews} Reviews)

</span>

</div>



</div>


</div>







<div className="grid md:grid-cols-3 gap-4 mt-8">



<div className="bg-cyan-50 rounded-xl p-4 text-center">

<FaBriefcaseMedical className="mx-auto text-cyan-600 text-xl"/>

<p className="font-bold mt-2">

{doctor.experience} Years

</p>

<span className="text-gray-500 text-sm">

Experience

</span>

</div>




<div className="bg-yellow-50 rounded-xl p-4 text-center">

<FaStar className="mx-auto text-yellow-500 text-xl"/>

<p className="font-bold mt-2">

{doctor.rating}

</p>

<span className="text-gray-500 text-sm">

Rating

</span>

</div>




<div className="bg-green-50 rounded-xl p-4 text-center">


<p className="font-bold mt-2">

৳{doctor.fee}

</p>


<span className="text-gray-500 text-sm">

Consultation Fee

</span>


</div>



</div>








<div className="mt-8 grid md:grid-cols-2 gap-8">



<div>


<h2 className="text-xl font-bold mb-3">

About Doctor

</h2>


<p className="text-gray-600 leading-7">

{doctor.about}

</p>


</div>






<div className="space-y-4 text-gray-600">


<p className="flex gap-3 items-center">

<FaMapMarkerAlt className="text-cyan-600"/>

{doctor.hospital}, {doctor.location}

</p>




<p className="flex gap-3 items-center">

<FaClock className="text-cyan-600"/>

Available Today

</p>




</div>



</div>







<Link

to={`/appointment-booking/${doctor.id}`}

className="block text-center mt-10 bg-cyan-600 text-white py-4 rounded-xl font-semibold hover:bg-cyan-700 transition"

>

Book Appointment

</Link>




</div>


</div>


</section>

)

}