import { useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import { Search } from "lucide-react";


export default function HomePage() {


const [selectedDoctor,setSelectedDoctor] = useState(null);

const [profileDoctor,setProfileDoctor] = useState(null);

const [search,setSearch] = useState("");

const [showAll,setShowAll] = useState(false);



const [formData,setFormData] = useState({

name:"",
phone:"",
date:"",
time:""

});





const doctors = [

{
id:1,
name:"Dr. Mohammad Rahman",
specialty:"Cardiologist",
location:"Dhaka",
experience:"12 Years",
fee:1200,
image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
},

{
id:2,
name:"Dr. Nusrat Jahan",
specialty:"Dermatologist",
location:"Chattogram",
experience:"8 Years",
fee:1000,
image:"https://images.unsplash.com/photo-1594824476967-48c8b964273f"
},

{
id:3,
name:"Dr. Tanvir Ahmed",
specialty:"Neurologist",
location:"Rajshahi",
experience:"10 Years",
fee:1500,
image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
},

{
id:4,
name:"Dr. Farhana Akter",
specialty:"Gynecologist",
location:"Khulna",
experience:"7 Years",
fee:900,
image:"https://images.unsplash.com/photo-1580281657527-47f249e8f4a7"
},

{
id:5,
name:"Dr. Rakib Hossain",
specialty:"Orthopedic",
location:"Sylhet",
experience:"15 Years",
fee:1400,
image:"https://images.unsplash.com/photo-1537368910025-700350fe46c7"
},

{
id:6,
name:"Dr. Sharmeen Sultana",
specialty:"ENT Specialist",
location:"Barishal",
experience:"6 Years",
fee:800,
image:"https://images.unsplash.com/photo-1594824476967-48c8b964273f"
},

{
id:7,
name:"Dr. Imran Hossain",
specialty:"Medicine Specialist",
location:"Dhaka",
experience:"9 Years",
fee:1100,
image:"https://images.unsplash.com/photo-1537368910025-700350fe46c7"
},

{
id:8,
name:"Dr. Sadia Islam",
specialty:"Pediatrician",
location:"Chattogram",
experience:"11 Years",
fee:1000,
image:"https://images.unsplash.com/photo-1594824476967-48c8b964273f"
},

{
id:9,
name:"Dr. Arif Ahmed",
specialty:"Psychiatrist",
location:"Sylhet",
experience:"13 Years",
fee:1300,
image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
},

{
id:10,
name:"Dr. Rima Akter",
specialty:"Ophthalmologist",
location:"Rajshahi",
experience:"8 Years",
fee:900,
image:"https://images.unsplash.com/photo-1580281657527-47f249e8f4a7"
},

{
id:11,
name:"Dr. Kamal Hasan",
specialty:"Surgeon",
location:"Dhaka",
experience:"18 Years",
fee:2000,
image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
},

{
id:12,
name:"Dr. Mitu Rahman",
specialty:"Dental Specialist",
location:"Khulna",
experience:"7 Years",
fee:800,
image:"https://images.unsplash.com/photo-1594824476967-48c8b964273f"
}

];






const filteredDoctors = doctors.filter((doctor)=>{


const text = search.toLowerCase();



return (

doctor.name.toLowerCase().includes(text)

||

doctor.specialty.toLowerCase().includes(text)

||

doctor.location.toLowerCase().includes(text)

);


});





const displayedDoctors = showAll

?

filteredDoctors

:

filteredDoctors.slice(0,3);







const handleSubmit=(e)=>{

e.preventDefault();


alert("Appointment Submitted Successfully");


setSelectedDoctor(null);


setFormData({

name:"",
phone:"",
date:"",
time:""

});


};





return (

<div className="
min-h-screen
bg-gray-50
">



<section className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
py-10
">


<h1 className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
text-center
text-gray-800
">

Find & Book Best Doctors

</h1>


<p className="
text-center
text-gray-500
mt-3
">

Trusted healthcare services with expert doctors

</p>





<div className="
mt-8
max-w-3xl
mx-auto
flex
flex-col
sm:flex-row
gap-3
">


<div className="
flex
items-center
gap-3
bg-white
border
rounded-xl
px-4
flex-1
">


<Search
size={20}
className="text-gray-400"
/>


<input

type="text"

placeholder="Search doctor, specialty or location..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
py-3
outline-none
"

/>


</div>





{filteredDoctors.length > 3 && (


<button

onClick={()=>setShowAll(!showAll)}

className="
bg-blue-600
text-white
px-7
py-3
rounded-xl
font-semibold
"

>

{showAll ? "Show Less":"View More"}

</button>


)}


</div>


</section>
{/* DOCTOR LIST */}

<section className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
pb-12
">


<div className="
flex
items-center
justify-between
mb-6
">


<h2 className="
text-2xl
sm:text-3xl
font-bold
text-gray-800
">

Our Expert Doctors

</h2>



<span className="
text-sm
text-gray-500
hidden
sm:block
">

{filteredDoctors.length} Doctors Found

</span>


</div>







{

displayedDoctors.length === 0 ?


(

<div className="
text-center
py-10
text-gray-500
">

No Doctor Found

</div>


)


:


(


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
">


{


displayedDoctors.map((doc)=>(


<DoctorCard

key={doc.id}

doctor={doc}

onBook={setSelectedDoctor}

onProfile={setProfileDoctor}

/>


))


}


</div>


)


}



</section>









{/* PROFILE MODAL */}


{

profileDoctor && (


<div className="
fixed
inset-0
z-50
bg-black/50
backdrop-blur-sm
flex
items-center
justify-center
px-4
">


<div className="
bg-white
w-full
max-w-md
rounded-3xl
p-6
shadow-2xl
relative
">


<button

onClick={()=>setProfileDoctor(null)}

className="
absolute
right-4
top-4
w-9
h-9
rounded-full
bg-gray-100
hover:bg-gray-200
"

>

✕

</button>






<img

src={profileDoctor.image}

alt={profileDoctor.name}

className="
w-28
h-28
rounded-full
object-cover
mx-auto
border-4
border-blue-100
"

/>







<h2 className="
text-2xl
font-bold
text-center
mt-4
text-gray-800
">

{profileDoctor.name}

</h2>






<div className="
mt-5
space-y-3
text-gray-600
text-sm
">


<div className="
flex
justify-between
">

<span>
Specialty
</span>

<b>
{profileDoctor.specialty}
</b>

</div>



<div className="
flex
justify-between
">

<span>
Location
</span>

<b>
{profileDoctor.location}
</b>

</div>




<div className="
flex
justify-between
">

<span>
Experience
</span>

<b>
{profileDoctor.experience}
</b>

</div>




<div className="
flex
justify-between
">

<span>
Consultation
</span>

<b className="
text-blue-600
">

৳{profileDoctor.fee}

</b>

</div>


</div>








<button

onClick={()=>setProfileDoctor(null)}

className="
mt-6
w-full
bg-gray-800
text-white
py-3
rounded-xl
font-semibold
"

>

Close Profile

</button>




</div>



</div>


)


}
{/* APPOINTMENT MODAL */}


{

selectedDoctor && (


<div className="
fixed
inset-0
z-50
bg-black/50
backdrop-blur-sm
flex
items-center
justify-center
px-4
">


<form

onSubmit={handleSubmit}

className="
bg-white
w-full
max-w-lg
rounded-3xl
p-5
sm:p-7
shadow-2xl
"

>


<h2 className="
text-2xl
font-bold
text-center
text-blue-700
mb-6
">

Book Appointment

</h2>





<div className="
bg-blue-50
rounded-xl
p-4
mb-5
text-sm
space-y-2
">


<p>

👨‍⚕️ Doctor:

<b>
{selectedDoctor.name}
</b>

</p>



<p>

📍 Location:

<b>
{selectedDoctor.location}
</b>

</p>



<p>

💰 Fee:

<b className="text-blue-600">

৳{selectedDoctor.fee}

</b>

</p>


</div>








<input

required

type="text"

placeholder="Your Name"

value={formData.name}

onChange={(e)=>

setFormData({

...formData,

name:e.target.value

})

}

className="
w-full
border
px-4
py-3
rounded-xl
mb-3
outline-none
focus:ring-2
focus:ring-blue-500
"

/>








<input

required

type="tel"

placeholder="Phone Number"

value={formData.phone}

onChange={(e)=>

setFormData({

...formData,

phone:e.target.value

})

}

className="
w-full
border
px-4
py-3
rounded-xl
mb-3
outline-none
focus:ring-2
focus:ring-blue-500
"

/>







<input

required

type="date"

value={formData.date}

onChange={(e)=>

setFormData({

...formData,

date:e.target.value

})

}

className="
w-full
border
px-4
py-3
rounded-xl
mb-3
"

/>









<select

required

value={formData.time}

onChange={(e)=>

setFormData({

...formData,

time:e.target.value

})

}

className="
w-full
border
px-4
py-3
rounded-xl
mb-5
"

>


<option value="">

Select Appointment Time

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









<div className="
grid
grid-cols-1
sm:grid-cols-2
gap-3
">


<button

type="submit"

className="
bg-blue-600
text-white
py-3
rounded-xl
font-semibold
hover:bg-blue-700
transition
"

>

Confirm Booking

</button>







<button

type="button"

onClick={()=>setSelectedDoctor(null)}

className="
border
py-3
rounded-xl
font-semibold
hover:bg-gray-100
transition
"

>

Cancel

</button>



</div>






</form>


</div>


)


}




</div>


);


}