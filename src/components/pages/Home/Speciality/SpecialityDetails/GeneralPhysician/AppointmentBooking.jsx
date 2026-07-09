import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";



const doctors = [

{
id:1,
name:"Dr. Md Rahman",
speciality:"General Physician",
degree:"MBBS, FCPS (Medicine)",
hospital:"City Medical Hospital",
location:"Dhaka",
fee:800,
rating:4.8,
image:"https://randomuser.me/api/portraits/men/32.jpg"
},


{
id:2,
name:"Dr. Ahmed Hasan",
speciality:"General Physician",
degree:"MBBS, MD Medicine",
hospital:"Popular Diagnostic Center",
location:"Dhaka",
fee:700,
rating:4.7,
image:"https://randomuser.me/api/portraits/men/45.jpg"
},


{
id:3,
name:"Dr. Nusrat Jahan",
speciality:"General Physician",
degree:"MBBS, FCPS",
hospital:"Evercare Hospital",
location:"Chittagong",
fee:600,
rating:4.9,
image:"https://randomuser.me/api/portraits/women/44.jpg"
}

];





export default function AppointmentBooking() {


const {id}=useParams();



const doctor =
doctors.find(
(item)=>item.id === Number(id)
);



const [selectedDate,setSelectedDate]=useState("");

const [selectedTime,setSelectedTime]=useState("");

const [consultType,setConsultType]=useState("Chamber");

const [payment,setPayment]=useState("");




const timeSlots=[

"10:00 AM - 11:00 AM",

"12:00 PM - 1:00 PM",

"5:00 PM - 6:00 PM",

"7:00 PM - 8:00 PM",

];




if(!doctor){

return(

<div className="text-center py-20 text-xl">

Doctor Not Found

</div>

)

}




return (


<section className="bg-gray-50 min-h-screen py-10">


<div className="max-w-6xl mx-auto px-4">


<h1 className="text-3xl font-bold text-gray-800 mb-8">

Book Appointment

</h1>




<div className="grid lg:grid-cols-3 gap-6">





{/* FORM */}


<div className="lg:col-span-2 space-y-6">





<div className="bg-white rounded-3xl shadow p-6">


<h2 className="text-xl font-bold mb-5 flex gap-2 items-center">

<FaUserMd className="text-cyan-600"/>

Patient Information

</h2>



<div className="grid md:grid-cols-2 gap-4">


<input
placeholder="Patient Name"
className="border rounded-xl p-3"
/>


<input
placeholder="Phone Number"
className="border rounded-xl p-3"
/>


<input
placeholder="Email Address"
className="border rounded-xl p-3"
/>


<input
placeholder="Age"
className="border rounded-xl p-3"
/>


</div>



<textarea
placeholder="Describe your problem"
className="w-full border rounded-xl p-3 mt-4 h-28"
/>


</div>








<div className="bg-white rounded-3xl shadow p-6">


<h2 className="text-xl font-bold mb-5 flex gap-2">

<FaCalendarAlt className="text-cyan-600"/>

Select Date & Time

</h2>




<input

type="date"

value={selectedDate}

onChange={(e)=>setSelectedDate(e.target.value)}

className="border rounded-xl p-3 w-full mb-5"

/>





<div className="grid sm:grid-cols-2 gap-3">


{
timeSlots.map((time)=>(


<button

key={time}

onClick={()=>setSelectedTime(time)}

className={`
p-3 rounded-xl border
${selectedTime===time
?
"bg-cyan-600 text-white"
:
"hover:border-cyan-600"
}
`}

>

{time}

</button>


))

}


</div>



</div>









<div className="bg-white rounded-3xl shadow p-6">


<h2 className="text-xl font-bold mb-5">

Consultation Type

</h2>



<div className="grid md:grid-cols-2 gap-4">



<button

onClick={()=>setConsultType("Chamber")}

className={`
p-4 border rounded-xl
${consultType==="Chamber"
?
"bg-cyan-50 border-cyan-600"
:
""
}
`}

>

🏥 Chamber Visit

</button>




<button

onClick={()=>setConsultType("Online")}

className={`
p-4 border rounded-xl
${consultType==="Online"
?
"bg-cyan-50 border-cyan-600"
:
""
}
`}

>

💻 Online Consultation

</button>


</div>


</div>









<div className="bg-white rounded-3xl shadow p-6">


<h2 className="text-xl font-bold mb-5 flex gap-2">

<FaMoneyBillWave className="text-cyan-600"/>

Payment Method

</h2>




<label className="block mb-3">

<input
type="radio"
name="payment"
onChange={()=>setPayment("Cash")}
/>

<span className="ml-2">
Cash Payment
</span>

</label>




<label className="block mb-3">

<input
type="radio"
name="payment"
onChange={()=>setPayment("Card")}
/>

<span className="ml-2">
Debit / Credit Card
</span>

</label>




<label>

<input
type="radio"
name="payment"
onChange={()=>setPayment("Mobile Banking")}
/>

<span className="ml-2">
Mobile Banking
</span>

</label>



</div>



</div>









{/* SUMMARY */}


<div>


<div className="bg-white rounded-3xl shadow p-6 sticky top-5">


<h2 className="text-xl font-bold mb-5">

Booking Summary

</h2>





<div className="flex gap-3 items-center mb-5">


<img

src={doctor.image}

className="w-16 h-16 rounded-full object-cover"

/>



<div>

<h3 className="font-bold flex gap-2">

{doctor.name}

<FaCheckCircle className="text-blue-500"/>

</h3>


<p className="text-cyan-600">

{doctor.speciality}

</p>


</div>


</div>





<div className="space-y-4 text-gray-600">


<p>

Hospital:

<br/>

<b>{doctor.hospital}</b>

</p>



<p>

Location:

<br/>

<b>{doctor.location}</b>

</p>



<p className="flex gap-2">

<FaClock/>

{selectedTime || "Select Time"}

</p>



<p>

Date:

<br/>

<b>
{selectedDate || "Select Date"}
</b>

</p>




<p>

Consultation:

<br/>

<b>
{consultType}
</b>

</p>




<hr/>


<p className="text-xl font-bold text-gray-800">

Total Fee: ৳{doctor.fee}

</p>


</div>




<button

className="w-full mt-6 bg-cyan-600 text-white py-4 rounded-xl hover:bg-cyan-700"

>

Confirm Booking

</button>




</div>


</div>



</div>


</div>


</section>


);

}