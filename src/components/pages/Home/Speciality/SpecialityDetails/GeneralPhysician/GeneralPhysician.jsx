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
  FaTimes,
} from "react-icons/fa";



const doctors = [

{
id:1,
name:"Dr. Md Rahman",
degree:"MBBS, FCPS (Medicine)",
speciality:"General Physician",
experience:12,
gender:"Male",
location:"Dhaka",
fee:800,
rating:4.8,
reviews:125,
hospital:"City Medical Hospital",
available:true,
online:true,
image:"https://randomuser.me/api/portraits/men/32.jpg"
},


{
id:2,
name:"Dr. Ahmed Hasan",
degree:"MBBS, MD Medicine",
speciality:"General Physician",
experience:10,
gender:"Male",
location:"Dhaka",
fee:700,
rating:4.7,
reviews:98,
hospital:"Popular Diagnostic Center",
available:true,
online:false,
image:"https://randomuser.me/api/portraits/men/45.jpg"
},


{
id:3,
name:"Dr. Nusrat Jahan",
degree:"MBBS, FCPS",
speciality:"General Physician",
experience:8,
gender:"Female",
location:"Chittagong",
fee:600,
rating:4.9,
reviews:210,
hospital:"Evercare Hospital",
available:true,
online:true,
image:"https://randomuser.me/api/portraits/women/44.jpg"
},



{
id:4,
name:"Dr. Farhan Ahmed",
degree:"MBBS, MRCP",
speciality:"General Physician",
experience:15,
gender:"Male",
location:"Dhaka",
fee:1000,
rating:4.9,
reviews:300,
hospital:"Square Hospital",
available:true,
online:true,
image:"https://randomuser.me/api/portraits/men/50.jpg"
},



...Array.from({length:11},(_,i)=>({

id:i+5,

name:`Dr. Specialist ${i+5}`,

degree:"MBBS, FCPS Medicine",

speciality:"General Physician",

experience:5+i,

gender:i%2===0?"Male":"Female",

location:i%2===0?"Dhaka":"Chittagong",

fee:500+(i*50),

rating:(4.5+(i%5)/10).toFixed(1),

reviews:50+i*20,

hospital:"Life Care Hospital",

available:true,

online:i%2===0,

image:
i%2===0
?
"https://randomuser.me/api/portraits/men/60.jpg"
:
"https://randomuser.me/api/portraits/women/60.jpg"

}))

];





export default function GeneralPhysician(){


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






let filteredDoctors = doctors.filter((doctor)=>{


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
General Physician Doctors
</h1>


<p className="text-gray-500 mt-2">
{filteredDoctors.length} doctors available
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
placeholder="Search doctor name..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full outline-none"
/>


</div>





{/* Mobile Filter Button */}

<button

onClick={()=>setShowFilter(!showFilter)}

className="md:hidden mb-5 bg-cyan-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"

>

<FaFilter/>

Filter

</button>







<div className="grid lg:grid-cols-4 gap-6">





{/* FILTER */}

<div

className={`
bg-white rounded-2xl shadow p-5 h-fit
${showFilter ? "block":"hidden"}
md:block
`}

>


<div className="flex justify-between items-center mb-5">


<h2 className="font-bold text-xl">
Filters
</h2>


<button
onClick={clearFilter}
className="text-sm text-red-500"
>
Clear
</button>


</div>





<select

value={location}

onChange={(e)=>setLocation(e.target.value)}

className="w-full border rounded-xl p-3 mb-4"

>

<option value="">
Location
</option>

<option value="Dhaka">
Dhaka
</option>

<option value="Chittagong">
Chittagong
</option>


</select>







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


</select>








<select

value={fee}

onChange={(e)=>setFee(e.target.value)}

className="w-full border rounded-xl p-3"

>


<option value="">
Consultation Fee
</option>


<option value="600">
Below ৳600
</option>


<option value="800">
Below ৳800
</option>


<option value="1000">
Below ৳1000
</option>


</select>



</div>









{/* DOCTOR LIST */}


<div className="lg:col-span-3 grid md:grid-cols-2 gap-6">



{
filteredDoctors.length===0 ?

<div className="bg-white rounded-2xl p-10 text-center text-gray-500">

No Doctor Found

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



<p className="text-cyan-600 font-medium">

{doctor.speciality}

</p>



<div className="flex items-center gap-2 text-yellow-500">

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

<FaMapMarkerAlt/>

{doctor.hospital}, {doctor.location}

</p>



<p className="flex gap-2">

<FaClock/>

Available Today

</p>





{
doctor.online &&

<span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

<FaVideo/>

Online Consultation

</span>

}




<p className="font-bold text-gray-800 text-lg">

Consultation Fee: ৳{doctor.fee}

</p>



</div>








<div className="flex gap-3 mt-6">


<Link

to={`/doctor/${doctor.id}`}

className="flex-1 text-center border border-cyan-600 text-cyan-600 py-3 rounded-xl hover:bg-cyan-600 hover:text-white transition"

>

View Profile

</Link>




<Link

to={`/doctor/${doctor.id}`}

className="flex-1 text-center bg-cyan-600 text-white py-3 rounded-xl hover:bg-cyan-700 transition"

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