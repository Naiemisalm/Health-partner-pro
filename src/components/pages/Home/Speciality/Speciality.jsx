import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaHeartbeat,
  FaBone,
  FaUserMd,
  FaTooth,
  FaEye,
  FaBaby,
  FaArrowLeft,
  FaArrowRight,
  FaAllergies,
  FaFemale,
  FaLungs,
  FaStethoscope,
} from "react-icons/fa";


const specialities = [
  {
    name: "General Physician",
    icon: <FaUserMd />,
    color: "text-teal-600",
    path: "general-physician",
  },
  {
    name: "Cardiologist",
    icon: <FaHeartbeat />,
    color: "text-red-500",
    path: "cardiologist",
  },
  {
    name: "Neurologist",
    icon: <FaBrain />,
    color: "text-purple-500",
    path: "neurologist",
  },
  {
    name: "Orthopedic",
    icon: <FaBone />,
    color: "text-gray-600",
    path: "orthopedic",
  },
  {
    name: "Dentist",
    icon: <FaTooth />,
    color: "text-yellow-500",
    path: "dentist",
  },
  {
    name: "Eye Specialist",
    icon: <FaEye />,
    color: "text-blue-500",
    path: "eye-specialist",
  },
  {
    name: "Child Specialist",
    icon: <FaBaby />,
    color: "text-pink-500",
    path: "pediatrician",
  },
  {
    name: "Dermatologist",
    icon: <FaAllergies />,
    color: "text-orange-500",
    path: "dermatologist",
  },
  {
    name: "Gynecologist",
    icon: <FaFemale />,
    color: "text-rose-500",
    path: "gynecologist",
  },
  {
    name: "Pulmonologist",
    icon: <FaLungs />,
    color: "text-green-500",
    path: "pulmonologist",
  },
  {
    name: "Specialist Doctor",
    icon: <FaStethoscope />,
    color: "text-cyan-600",
    path: "specialist",
  },
];


export default function Speciality({

  title = "Find Doctors by Speciality",

  description = "Choose the right specialist for your healthcare needs.",

  online = false,

  layout = "slider",

}) {


  const scrollRef = useRef(null);

  const navigate = useNavigate();



  const scroll = (value)=>{

    scrollRef.current?.scrollBy({

      left:value,

      behavior:"smooth"

    });

  };



  const getPath = (path)=>{

    return online

    ? `/online-consultation/${path}`

    : `/${path}`;

  };



return (

<section className="bg-gradient-to-b from-cyan-50 to-white py-14">


<div className="max-w-7xl mx-auto px-5">


{/* Heading */}

<div className="mb-10">


<h2 className="
text-3xl md:text-4xl
font-bold
text-gray-800
">

{title}

</h2>


<p className="
text-gray-500
mt-2
">

{description}

</p>


</div>





{/* Mobile Dropdown */}


<div className="md:hidden">


<select

defaultValue=""

onChange={(e)=>navigate(e.target.value)}

className="
w-full
rounded-2xl
bg-white
p-4
shadow-md
border border-gray-200
text-gray-700
"

>


<option value="" disabled>

Select speciality

</option>



{

specialities.map((item,index)=>(

<option

key={index}

value={getPath(item.path)}

>

{item.name}

</option>

))

}


</select>


</div>





{

layout === "grid" ? (



/* 3 Column Card */


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-6
">


{

specialities.map((item,index)=>(


<Link

key={index}

to={getPath(item.path)}

className="
bg-white
rounded-3xl
p-8
text-center
shadow-md
border border-gray-100
hover:-translate-y-2
hover:shadow-xl
hover:border-cyan-400
transition-all
"


>


<div

className={`
mx-auto
h-20
w-20
rounded-full
bg-cyan-50
flex
items-center
justify-center
text-4xl
${item.color}
`}

>

{item.icon}

</div>



<h3 className="
mt-5
font-semibold
text-gray-700
">

{item.name}

</h3>



<p className="
text-sm
text-cyan-600
mt-2
font-medium
">

{online ? "Consult Online" : "Book Appointment"}

</p>



</Link>


))

}


</div>



) : (



/* Slider */


<div className="
hidden md:flex
items-center
gap-5
mt-5
">


<button

onClick={()=>scroll(-350)}

className="
h-12 w-12
rounded-full
bg-white
shadow-lg
flex
items-center
justify-center
hover:bg-cyan-600
hover:text-white
transition
"

>

<FaArrowLeft/>

</button>




<div

ref={scrollRef}

className="
flex
gap-6
overflow-x-auto
py-5
scroll-smooth
"

>


{

specialities.map((item,index)=>(


<Link

key={index}

to={getPath(item.path)}

className="
min-w-[190px]
bg-white
rounded-3xl
p-7
text-center
shadow-md
border border-gray-100
hover:-translate-y-2
hover:shadow-xl
hover:border-cyan-400
transition-all
"

>


<div

className={`
mx-auto
h-20
w-20
rounded-full
bg-cyan-50
flex
items-center
justify-center
text-4xl
${item.color}
`}

>

{item.icon}

</div>




<h3 className="
mt-5
font-semibold
text-gray-700
text-sm
">

{item.name}

</h3>




<p className="
text-xs
text-cyan-600
mt-2
font-medium
">

{online ? "Consult Online" : "Book Appointment"}

</p>



</Link>


))

}


</div>





<button

onClick={()=>scroll(350)}

className="
h-12 w-12
rounded-full
bg-white
shadow-lg
flex
items-center
justify-center
hover:bg-cyan-600
hover:text-white
transition
"

>

<FaArrowRight/>

</button>


</div>


)


}



</div>


</section>

);

}