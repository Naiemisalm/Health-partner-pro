import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ChildHealthcare = () => {

const navigate = useNavigate();

const [openFAQ,setOpenFAQ] = useState(null);



const services = [

{
icon:"👶",
title:"Pediatric Consultation",
text:"Expert child specialists providing complete healthcare guidance."
},

{
icon:"💉",
title:"Vaccination Service",
text:"Timely vaccination support for healthy child development."
},

{
icon:"📈",
title:"Growth Monitoring",
text:"Track child's height, weight and overall development."
},

{
icon:"🌡️",
title:"Child Fever Care",
text:"Treatment and advice for fever, cold and common infections."
},

{
icon:"🥗",
title:"Child Nutrition",
text:"Healthy diet plans for proper growth and immunity."
},

{
icon:"🧠",
title:"Child Development",
text:"Monitor physical and mental development milestones."
},

{
icon:"🔬",
title:"Health Screening",
text:"Regular health checkups for early disease detection."
},

{
icon:"📅",
title:"Follow-up Care",
text:"Continuous monitoring and pediatric support."
}

];



const faqs=[

{
q:"What age group does child healthcare cover?",
a:"Our pediatric services provide healthcare support for infants, children and teenagers."
},

{
q:"Do you provide vaccination services?",
a:"Yes, we provide vaccination guidance and child immunization support."
},

{
q:"Can I monitor my child's growth?",
a:"Yes, regular growth monitoring helps track healthy development."
},

{
q:"How can I book a child consultation?",
a:"You can book an appointment online through our healthcare portal."
}

];



return (

<div className="bg-gray-50 min-h-screen">



{/* Hero */}


<section className="
bg-gradient-to-r
from-cyan-600
to-blue-600
py-20
px-4
text-white
">


<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
">


<div>


<p className="
uppercase
text-cyan-100
font-semibold
">
Specialized Pediatric Care
</p>



<h1 className="
text-4xl
md:text-5xl
font-bold
mt-4
">
Child Healthcare
</h1>



<p className="
mt-5
text-cyan-50
leading-relaxed
">
Complete healthcare solutions for children with
experienced pediatric doctors and child-friendly care.
</p>



<button

onClick={()=>navigate("/health-checkup-packages")}

className="
mt-8
bg-white
text-blue-700
px-8
py-3
rounded-full
font-semibold
"

>
Book Child Checkup
</button>


</div>





<div className="
bg-white/20
rounded-3xl
p-10
text-center
">


<div className="text-8xl">
👶
</div>


<h3 className="
text-2xl
font-bold
mt-5
">
Healthy Kids, Happy Future
</h3>


</div>


</div>


</section>







{/* Statistics */}


<section className="
max-w-6xl
mx-auto
py-12
px-4
">


<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
">


{

[
["15+","Pediatric Doctors"],
["8000+","Happy Children"],
["20+","Vaccines"],
["24/7","Care Support"]

].map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-xl
shadow
p-6
text-center
">

<h2 className="
text-3xl
font-bold
text-cyan-600
">
{item[0]}
</h2>


<p className="
text-gray-600
mt-2
">
{item[1]}
</p>


</div>


))

}


</div>


</section>







{/* Doctor Profile */}


<section className="
max-w-6xl
mx-auto
px-4
py-8
">


<div className="
bg-white
rounded-2xl
shadow
p-8
flex
flex-col
md:flex-row
items-center
gap-8
">


<div className="
w-32
h-32
rounded-full
bg-cyan-100
flex
items-center
justify-center
text-6xl
">
👨‍⚕️
</div>


<div>


<h2 className="
text-2xl
font-bold
">
Dr. Pediatric Specialist
</h2>


<p className="
text-gray-600
mt-2
">
Child Specialist | 10+ Years Experience
</p>


<div className="text-yellow-500 mt-3">
⭐⭐⭐⭐⭐
</div>


</div>


</div>


</section>







{/* Services */}


<section className="
max-w-7xl
mx-auto
py-16
px-4
">


<h2 className="
text-3xl
font-bold
text-center
">
Our Child Healthcare Services
</h2>


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
mt-10
">


{

services.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-2xl
p-6
shadow
hover:shadow-xl
transition
border
hover:border-cyan-400
"
>


<div className="text-4xl">
{item.icon}
</div>


<h3 className="
font-bold
mt-4
">
{item.title}
</h3>


<p className="
text-sm
text-gray-600
mt-3
">
{item.text}
</p>


</div>


))

}


</div>


</section>







{/* Why Choose */}


<section className="
bg-cyan-50
py-16
px-4
">


<h2 className="
text-3xl
font-bold
text-center
">
Why Choose Our Child Care?
</h2>



<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-3
gap-6
mt-10
">


{

[
["❤️","Child Friendly Care","Comfortable healthcare environment for children."],
["👨‍⚕️","Expert Pediatricians","Experienced doctors for children's health."],
["🛡️","Safe Treatment","Reliable and secure healthcare support."]
].map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-xl
shadow
p-6
text-center
">


<div className="text-4xl">
{item[0]}
</div>


<h3 className="
font-bold
mt-4
">
{item[1]}
</h3>


<p className="
text-gray-600
mt-2
">
{item[2]}
</p>


</div>


))


}


</div>


</section>







{/* Process */}


<section className="
py-16
px-4
">


<h2 className="
text-3xl
font-bold
text-center
">
Child Care Process
</h2>



<div className="
max-w-5xl
mx-auto
grid
md:grid-cols-4
gap-6
mt-10
">


{

[
"Book Appointment",
"Pediatric Consultation",
"Health Assessment",
"Child Care Plan"

].map((step,index)=>(


<div

key={index}

className="
bg-white
rounded-xl
shadow
p-6
text-center
">

<div className="
w-10
h-10
mx-auto
bg-cyan-600
text-white
rounded-full
flex
items-center
justify-center
">
{index+1}
</div>


<p className="
mt-4
font-semibold
">
{step}
</p>


</div>


))


}


</div>


</section>







{/* FAQ */}


<section className="
max-w-4xl
mx-auto
py-16
px-4
">


<h2 className="
text-3xl
font-bold
text-center
mb-8
">
Frequently Asked Questions
</h2>


{

faqs.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-xl
shadow
mb-4
overflow-hidden
">


<button

onClick={()=>setOpenFAQ(
openFAQ===index ? null:index
)}

className="
w-full
p-5
flex
justify-between
font-semibold
"
>

{item.q}

<span>
{openFAQ===index ? "-" : "+"}
</span>

</button>


{

openFAQ===index &&

<p className="
px-5
pb-5
text-gray-600
">
{item.a}
</p>

}


</div>


))


}


</section>







{/* CTA */}


<section className="
bg-red-600
py-12
px-4
text-white
text-center
">


<h2 className="
text-3xl
font-bold
">
Need Child Medical Support?
</h2>


<p className="mt-3">
Book consultation with our pediatric experts today.
</p>


<button className="
mt-6
bg-white
text-red-600
px-8
py-3
rounded-full
font-bold
">
Contact Now
</button>


</section>



</div>

);

};


export default ChildHealthcare;