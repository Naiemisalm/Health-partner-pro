import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaSearch,
  FaFilter,
  FaHeart,
} from "react-icons/fa";


const doctors = [

{
id:101,
name:"Dr. Arif Hossain",
degree:"MBBS, FCPS (Cardiology)",
speciality:"Cardiologist",
experience:15,
gender:"Male",
location:"Dhaka",
fee:1200,
rating:4.9,
reviews:320,
hospital:"National Heart Foundation Hospital",
image:"https://randomuser.me/api/portraits/men/11.jpg"
},


{
id:102,
name:"Dr. Sadia Rahman",
degree:"MBBS, MD Cardiology",
speciality:"Cardiologist",
experience:12,
gender:"Female",
location:"Dhaka",
fee:1000,
rating:4.8,
reviews:250,
hospital:"Evercare Hospital",
image:"https://randomuser.me/api/portraits/women/12.jpg"
},


{
id:103,
name:"Dr. Mahmud Hasan",
degree:"MBBS, FCPS",
speciality:"Cardiologist",
experience:10,
gender:"Male",
location:"Chittagong",
fee:900,
rating:4.7,
reviews:180,
hospital:"Parkview Hospital",
image:"https://randomuser.me/api/portraits/men/15.jpg"
},



...Array.from({length:12},(_,i)=>({

id:104+i,

name:`Dr. Heart Specialist ${i+1}`,

degree:"MBBS, MD Cardiology",

speciality:"Cardiologist",

experience:6+i,

gender:i%2===0?"Male":"Female",

location:i%2===0?"Dhaka":"Chittagong",

fee:800+(i*50),

rating:(4.5+(i%5)/10).toFixed(1),

reviews:80+i*10,

hospital:"Heart Care Hospital",

image:
i%2===0
?
"https://randomuser.me/api/portraits/men/20.jpg"
:
"https://randomuser.me/api/portraits/women/20.jpg"

}))

];





export default function Cardiologist(){


const [search,setSearch]=useState("");

const [location,setLocation]=useState("");

const [gender,setGender]=useState("");

const [experience,setExperience]=useState("");

const [fee,setFee]=useState("");

const [sort,setSort]=useState("");

const [showFilter,setShowFilter]=useState(false);




const clearFilter=()=>{

setLocation("");
setGender("");
setExperience("");
setFee("");
setSearch("");

};




let filteredDoctors=doctors.filter((doctor)=>{


return(

doctor.name
.toLowerCase()
.includes(search.toLowerCase())


&&

(location==="" || doctor.location===location)


&&

(gender==="" || doctor.gender===gender)


&&

(experience==="" ||
doctor.experience>=Number(experience))


&&

(fee==="" ||
doctor.fee<=Number(fee))

)

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





return(

<section className="bg-gray-50 min-h-screen py-10">


<div className="max-w-7xl mx-auto px-4">



<div className="flex flex-col md:flex-row justify-between gap-4 mb-8">


<div>

<h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">

<FaHeart className="text-red-500"/>

Cardiologist Doctors

</h1>


<p className="text-gray-500 mt-2">

{filteredDoctors.length} heart specialists available

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







<div className="bg-white p-4 rounded-2xl shadow mb-6 flex items-center gap-3">


<FaSearch className="text-gray-400"/>


<input

placeholder="Search cardiologist..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full outline-none"

/>


</div>






<button

onClick={()=>setShowFilter(!showFilter)}

className="md:hidden bg-red-500 text-white px-5 py-3 rounded-xl flex gap-2 items-center mb-5"

>

<FaFilter/>

Filter

</button>







<div className="grid lg:grid-cols-4 gap-6">





<div

className={`
bg-white rounded-2xl shadow p-5 h-fit
${showFilter?"block":"hidden"}
md:block
`}

>


<div className="flex justify-between mb-5">


<h2 className="font-bold text-xl">

Filter

</h2>


<button

onClick={clearFilter}

className="text-red-500 text-sm"

>

Clear

</button>


</div>




<select

onChange={(e)=>setLocation(e.target.value)}

className="w-full border p-3 rounded-xl mb-4"

>

<option value="">
Location
</option>

<option>
Dhaka
</option>

<option>
Chittagong
</option>

</select>





<select

onChange={(e)=>setGender(e.target.value)}

className="w-full border p-3 rounded-xl mb-4"

>

<option value="">
Gender
</option>

<option>
Male
</option>

<option>
Female
</option>


</select>





<select

onChange={(e)=>setExperience(e.target.value)}

className="w-full border p-3 rounded-xl mb-4"

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

onChange={(e)=>setFee(e.target.value)}

className="w-full border p-3 rounded-xl"

>

<option value="">
Fee
</option>

<option value="1000">
Below ৳1000
</option>

<option value="1500">
Below ৳1500
</option>

</select>


</div>







<div className="lg:col-span-3 grid md:grid-cols-2 gap-6">



{

filteredDoctors.map((doctor)=>(


<div

key={doctor.id}

className="bg-white rounded-3xl shadow hover:shadow-xl transition p-6"

>



<div className="flex gap-4">


<img

src={doctor.image}

className="w-20 h-20 rounded-full object-cover"

/>



<div>


<h2 className="font-bold text-lg flex gap-2">

{doctor.name}

<FaCheckCircle className="text-blue-500"/>

</h2>


<p className="text-red-500 font-medium">

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



<p className="font-bold text-gray-800">

Consultation Fee: ৳{doctor.fee}

</p>


</div>






<div className="flex gap-3 mt-6">


<Link

to={`/doctor/${doctor.id}`}

className="flex-1 text-center border border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-500 hover:text-white transition"

>

Profile

</Link>



<Link

to={`/doctor/${doctor.id}`}

className="flex-1 text-center bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"

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

)

}