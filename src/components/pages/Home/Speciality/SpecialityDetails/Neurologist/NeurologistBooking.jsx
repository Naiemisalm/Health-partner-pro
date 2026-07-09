import { useParams } from "react-router-dom";

import neurologistDoctors from "../../SpecialityDetails/Neurologist/neurologistData";


export default function NeurologistBooking(){


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


<div className="max-w-xl mx-auto bg-white rounded-3xl shadow p-8">


<h1 className="text-3xl font-bold text-gray-800">

Book Neurologist Appointment

</h1>



<div className="mt-5 bg-purple-50 rounded-xl p-5">


<img

src={doctor.image}

alt={doctor.name}

className="w-24 h-24 rounded-full mx-auto object-cover"

/>



<h2 className="text-center text-xl font-bold mt-3">

{doctor.name}

</h2>



<p className="text-center text-purple-600">

{doctor.speciality}

</p>



<p className="text-center mt-2">

Consultation Fee: ৳{doctor.fee}

</p>


</div>







<input

type="text"

placeholder="Patient Name"

className="w-full border rounded-xl p-3 mt-5"

/>





<input

type="text"

placeholder="Phone Number"

className="w-full border rounded-xl p-3 mt-4"

/>





<input

type="date"

className="w-full border rounded-xl p-3 mt-4"

/>





<select

className="w-full border rounded-xl p-3 mt-4"

>

<option>

Select Appointment Time

</option>


<option>

10:00 AM

</option>


<option>

12:00 PM

</option>


<option>

5:00 PM

</option>


</select>






<button

className="w-full bg-purple-600 text-white py-3 rounded-xl mt-6 hover:bg-purple-700"

>

Confirm Booking

</button>




</div>


</section>

)


}