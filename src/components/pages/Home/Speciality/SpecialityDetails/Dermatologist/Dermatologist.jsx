import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaSearch,
  FaFilter,
  FaVideo,
} from "react-icons/fa";

import dermatologistDoctors from "./dermatologistData";



export default function Dermatologist(){


const [search,setSearch]=useState("");

const [location,setLocation]=useState("");

const [gender,setGender]=useState("");

const [experience,setExperience]=useState("");

const [fee,setFee]=useState("");

const [sort,setSort]=useState("");

const [showFilter,setShowFilter]=useState(false);






const clearFilter=()=>{

setSearch("");

setLocation("");

setGender("");

setExperience("");

setFee("");

setSort("");

};







let filteredDoctors = dermatologistDoctors.filter((doctor)=>{


return (

doctor.name
.toLowerCase()
.includes(search.toLowerCase())


&&


(location==="" ||
doctor.location===location)


&&


(gender==="" ||
doctor.gender===gender)


&&


(experience==="" ||
doctor.experience>=Number(experience))


&&


(fee==="" ||
doctor.fee<=Number(fee))


);


});








if(sort==="rating"){

filteredDoctors.sort(
(a,b)=>b.rating-a.rating
);

}




if(sort==="fee"){

filteredDoctors.sort(
(a,b)=>a.fee-b.fee
);

}





return (

<section className="bg-gray-50 min-h-screen py-10">


<div className="max-w-7xl mx-auto px-4">





{/* Header */}


<div className="flex flex-col md:flex-row justify-between gap-4 mb-8">


<div>

<h1 className="text-3xl font-bold text-gray-800">

Dermatologist Doctors

</h1>


<p className="text-gray-500 mt-2">

{filteredDoctors.length} skin specialists available

</p>


</div>






<select

value={sort}

onChange={(e)=>setSort(e.target.value)}

className="bg-white border rounded-xl px-4 py-3"

>

<option value="">

Sort Doctors

</option>


<option value="rating">

Highest Rating

</option>


<option value="fee">

Lowest Fee

</option>


</select>


</div>









{/* Search */}


<div className="bg-white rounded-2xl shadow p-4 mb-6 flex items-center gap-3">


<FaSearch className="text-gray-400"/>


<input

type="text"

placeholder="Search Dermatologist Doctor..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full outline-none"

/>


</div>







<button

onClick={()=>setShowFilter(!showFilter)}

className="md:hidden mb-5 bg-pink-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"

>

<FaFilter/>

Filter

</button>






<div className="grid lg:grid-cols-4 gap-6">





{/* Filter Sidebar */}


<div

className={`

bg-white rounded-2xl shadow p-5 h-fit

${showFilter?"block":"hidden"}

md:block

`}

>


<div className="flex justify-between items-center mb-5">


<h2 className="font-bold text-xl">

Filters

</h2>



<button

onClick={clearFilter}

className="text-red-500 text-sm"

>

Clear

</button>


</div>
{/* Location */}

<select
value={location}
onChange={(e)=>setLocation(e.target.value)}
className="w-full border rounded-xl p-3 mb-4"
>

<option value="">Location</option>

<option value="Dhaka">
Dhaka
</option>

<option value="Chittagong">
Chittagong
</option>

</select>





{/* Gender */}

<select
value={gender}
onChange={(e)=>setGender(e.target.value)}
className="w-full border rounded-xl p-3 mb-4"
>

<option value="">
Gender
</option>

<option value="Male">
Male
</option>

<option value="Female">
Female
</option>

</select>






{/* Experience */}

<select
value={experience}
onChange={(e)=>setExperience(e.target.value)}
className="w-full border rounded-xl p-3 mb-4"
>

<option value="">
Experience
</option>

<option value="5">
5+ Years
</option>

<option value="10">
10+ Years
</option>

<option value="15">
15+ Years
</option>

<option value="20">
20+ Years
</option>

</select>







{/* Fee */}

<select
value={fee}
onChange={(e)=>setFee(e.target.value)}
className="w-full border rounded-xl p-3"
>

<option value="">
Consultation Fee
</option>

<option value="800">
Below ৳800
</option>

<option value="1000">
Below ৳1000
</option>

<option value="1500">
Below ৳1500
</option>

<option value="2000">
Below ৳2000
</option>

</select>


</div>









{/* Doctor Cards */}

<div className="lg:col-span-3 grid md:grid-cols-2 gap-6">


{

filteredDoctors.length===0 ?


<div className="bg-white rounded-2xl p-10 text-center text-gray-500">

No Dermatologist Found

</div>


:


filteredDoctors.map((doctor)=>(


<div
key={doctor.id}
className="bg-white rounded-3xl shadow hover:shadow-xl transition p-6"
>


<div className="flex gap-4">


<img
src={doctor.image}
alt={doctor.name}
className="w-20 h-20 rounded-full object-cover"
/>



<div>


<h2 className="font-bold text-lg flex items-center gap-2">

{doctor.name}

<FaCheckCircle className="text-blue-500"/>

</h2>



<p className="text-pink-600 font-medium">

{doctor.speciality}

</p>




<div className="flex items-center gap-2 text-yellow-500 mt-1">

<FaStar/>

{doctor.rating}

<span className="text-gray-400 text-sm">

({doctor.reviews})

</span>

</div>



</div>


</div>









<div className="mt-5 space-y-3 text-gray-600">


<p>
{doctor.degree}
</p>


<p>
Experience: {doctor.experience} Years
</p>



<p className="flex gap-2">

<FaMapMarkerAlt className="text-pink-600"/>

{doctor.hospital}, {doctor.location}

</p>




<p className="flex gap-2">

<FaClock className="text-green-600"/>

{doctor.availability}

</p>





{

doctor.online &&

<span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

<FaVideo/>

Online Consultation

</span>

}





<p className="font-bold text-lg">

Consultation Fee: ৳{doctor.fee}

</p>



</div>








<div className="flex gap-3 mt-6">


<Link

to={`/dermatologist-doctors-profile/${doctor.id}`}

className="flex-1 text-center border border-pink-600 text-pink-600 py-3 rounded-xl hover:bg-pink-600 hover:text-white transition"

>

View Profile

</Link>





<Link

to={`/dermatologist-booking/${doctor.id}`}

className="flex-1 text-center bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transition"

>

Book Now

</Link>



</div>




</div>


))


}



</div>





</div>


</div>


</section>


);


}