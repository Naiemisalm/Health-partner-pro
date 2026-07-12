import { useEffect, useState } from "react";
import { CalendarCheck, Search, ShieldCheck, Star } from "lucide-react";


const slides = [

{
title:"Find Trusted Doctors",
subtitle:"Connect with experienced specialists and book your appointment easily.",
image:
"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
color:"from-blue-50 via-white to-cyan-50",
badge:"500+ Expert Doctors"
},


{
title:"24/7 Online Consultation",
subtitle:"Get medical advice anytime from qualified healthcare professionals.",
image:
"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
color:"from-emerald-50 via-white to-green-50",
badge:"Available Anytime"
},


{
title:"Fast & Easy Booking",
subtitle:"Book appointments instantly without waiting in long queues.",
image:
"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
color:"from-indigo-50 via-white to-purple-50",
badge:"Instant Booking"
}

];




export default function HeroCarousel(){


const [index,setIndex]=useState(0);



useEffect(()=>{


const timer=setInterval(()=>{

setIndex(prev=>(prev+1)%slides.length);

},5000);



return ()=>clearInterval(timer);


},[]);





return (

<section className={`
relative
overflow-hidden
bg-gradient-to-br
${slides[index].color}
transition-all
duration-700
`}>




<div className="
absolute
top-0
right-0
w-72
h-72
bg-blue-200/30
rounded-full
blur-3xl
">
</div>





<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
py-12
sm:py-16
lg:py-24
">


<div className="
grid
grid-cols-1
lg:grid-cols-2
items-center
gap-10
lg:gap-16
">







{/* LEFT */}


<div className="
text-center
lg:text-left
">


<div className="
inline-flex
items-center
gap-2
bg-white
shadow-sm
px-4
py-2
rounded-full
text-sm
text-blue-600
font-medium
mb-5
">

<ShieldCheck size={18}/>

Trusted Healthcare Platform

</div>






<h1 className="
text-3xl
sm:text-4xl
lg:text-6xl
font-extrabold
leading-tight
text-gray-900
">

{slides[index].title}

</h1>





<p className="
mt-5
text-gray-600
text-base
sm:text-lg
max-w-xl
mx-auto
lg:mx-0
leading-relaxed
">

{slides[index].subtitle}

</p>







<div className="
mt-8
flex
flex-col
sm:flex-row
gap-4
justify-center
lg:justify-start
">


<button className="
flex
items-center
justify-center
gap-2
bg-blue-600
text-white
px-7
py-3.5
rounded-xl
font-semibold
shadow-lg
shadow-blue-200
hover:bg-blue-700
transition
">


<CalendarCheck size={20}/>

Book Appointment


</button>





<button className="
flex
items-center
justify-center
gap-2
border
border-gray-300
bg-white
px-7
py-3.5
rounded-xl
font-semibold
text-gray-700
hover:border-blue-600
hover:text-blue-600
transition
">


<Search size={20}/>

Find Doctor


</button>



</div>






<div className="
mt-8
flex
justify-center
lg:justify-start
gap-6
">


<div>

<h3 className="
text-xl
font-bold
text-gray-800
">

10K+

</h3>

<p className="
text-sm
text-gray-500
">

Patients

</p>

</div>





<div>

<h3 className="
text-xl
font-bold
text-gray-800
">

500+

</h3>

<p className="
text-sm
text-gray-500
">

Doctors

</p>

</div>




<div>

<h3 className="
text-xl
font-bold
text-gray-800
">

4.9

</h3>

<p className="
text-sm
text-gray-500
">

Rating

</p>

</div>



</div>


</div>
{/* RIGHT IMAGE */}


<div className="
relative
flex
justify-center
lg:justify-end
">



<div className="
relative
w-[260px]
h-[260px]
sm:w-[340px]
sm:h-[340px]
lg:w-[430px]
lg:h-[430px]
">





{/* Glow Background */}

<div className="
absolute
inset-0
bg-blue-400/20
rounded-[40px]
blur-2xl
">
</div>





{/* Doctor Image */}

<img

src={slides[index].image}

alt="Doctor"

className="
relative
w-full
h-full
object-cover
rounded-[40px]
shadow-2xl
border-8
border-white
transition-all
duration-700
"

/>






{/* Available Badge */}

<div className="
absolute
top-5
left-5
bg-white
shadow-lg
rounded-2xl
px-4
py-3
flex
items-center
gap-3
">


<div className="
w-3
h-3
bg-green-500
rounded-full
animate-pulse
">
</div>


<div>

<p className="
text-xs
text-gray-500
">

Status

</p>


<p className="
text-sm
font-semibold
text-gray-800
">

Available Now

</p>


</div>


</div>








{/* Rating Card */}

<div className="
absolute
bottom-5
right-5
bg-white
shadow-xl
rounded-2xl
px-4
py-3
flex
items-center
gap-2
">


<Star

size={20}

className="
text-yellow-400
fill-yellow-400
"

/>


<div>

<p className="
text-xs
text-gray-500
">

Patient Rating

</p>


<p className="
font-bold
text-gray-800
">

4.9 / 5

</p>


</div>



</div>




{/* Slide Badge */}

<div className="
absolute
bottom-5
left-5
bg-blue-600
text-white
rounded-xl
px-4
py-2
shadow-lg
">


<p className="
text-xs
opacity-80
">

Trusted By

</p>


<p className="
font-semibold
text-sm
">

{slides[index].badge}

</p>

</div>


</div>



</div>



</div>


</div>


{/* Slider Dots */}


<div className="
flex
justify-center
gap-2
pb-6
">


{

slides.map((_,i)=>(


<button

key={i}

onClick={()=>setIndex(i)}

className={`

h-2.5
rounded-full
transition-all
duration-300

${

i===index

?

"w-8 bg-blue-600"

:

"w-2.5 bg-gray-300"

}

`}


/>


))

}

</div>


</section>


);


}