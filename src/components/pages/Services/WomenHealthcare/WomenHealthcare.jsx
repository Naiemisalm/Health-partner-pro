import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const WomenHealthcare = () => {

const navigate = useNavigate();

const [openFAQ,setOpenFAQ] = useState(null);



const services = [

{
icon:"👩‍⚕️",
title:"Gynecology Consultation",
text:"Expert gynecologist consultation for women's health concerns."
},

{
icon:"🩺",
title:"Women's Health Screening",
text:"Complete preventive health screening for women of all ages."
},

{
icon:"🤰",
title:"Pregnancy Care",
text:"Professional antenatal and maternity care support."
},

{
icon:"🧬",
title:"Hormone Health",
text:"Diagnosis and management of hormonal health issues."
},

{
icon:"🩸",
title:"PCOS & Menstrual Care",
text:"Specialized support for PCOS and menstrual problems."
},

{
icon:"🥗",
title:"Nutrition Advice",
text:"Personalized diet and lifestyle guidance for women."
},

{
icon:"🔬",
title:"Diagnostic Support",
text:"Advanced tests and health monitoring services."
},

{
icon:"📅",
title:"Follow-up Care",
text:"Regular monitoring and continuous healthcare support."
}

];



const faqs=[

{
q:"What women's health services are available?",
a:"We provide gynecology consultation, pregnancy care, screening and wellness support."
},

{
q:"Do you provide pregnancy care?",
a:"Yes, we provide complete antenatal and maternity care guidance."
},

{
q:"Can I get PCOS consultation?",
a:"Yes, our specialists provide support for PCOS and hormonal problems."
},

{
q:"How can I book an appointment?",
a:"You can book an appointment online through our healthcare portal."
}

];



return (

<div className="bg-gray-50 min-h-screen">



{/* Hero */}

<section className="
bg-gradient-to-r
from-pink-600
to-purple-600
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
text-pink-100
font-semibold
">
Specialized Women's Care
</p>


<h1 className="
text-4xl
md:text-5xl
font-bold
mt-4
">
Women Healthcare
</h1>



<p className="
mt-5
text-pink-50
leading-relaxed
">
Complete healthcare solutions designed for women,
including preventive care, reproductive health and wellness.
</p>




<button

onClick={()=>navigate("/health-checkup-packages")}

className="
mt-8
bg-white
text-pink-700
px-8
py-3
rounded-full
font-semibold
"

>
Book Women's Checkup
</button>



</div>





<div className="
bg-white/20
rounded-3xl
p-10
text-center
">


<div className="text-8xl">
👩‍⚕️
</div>


<h3 className="
text-2xl
font-bold
mt-5
">
Complete Women's Wellness
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
["20+","Women Specialists"],
["12000+","Patients Served"],
["15+","Healthcare Programs"],
["24/7","Support"]

].map((item,index)=>(


<div
key={index}
className="
bg-white
shadow
rounded-xl
p-6
text-center
">


<h2 className="
text-3xl
font-bold
text-pink-600
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







{/* Specialist Profile */}


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
bg-pink-100
flex
items-center
justify-center
text-6xl
">
👩‍⚕️
</div>



<div>


<h2 className="
text-2xl
font-bold
">
Dr. Women's Health Specialist
</h2>


<p className="
text-gray-600
mt-2
">
Gynecologist | 12+ Years Experience
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
Our Women Healthcare Services
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
hover:border-pink-400
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
text-gray-600
text-sm
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
bg-pink-50
py-16
px-4
">


<h2 className="
text-3xl
font-bold
text-center
">
Why Choose Our Women's Care?
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
["💗","Complete Women's Care","Healthcare support for every stage of life."],
["👩‍⚕️","Expert Doctors","Experienced specialists for women's health."],
["🔒","Private & Safe","Comfortable and confidential consultation."]
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


<h3 className="font-bold mt-4">
{item[1]}
</h3>


<p className="text-gray-600 mt-2">
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
Women's Care Journey
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
"Doctor Consultation",
"Health Assessment",
"Personalized Care Plan"

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
bg-pink-600
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
Need Women's Health Support?
</h2>


<p className="mt-3">
Connect with our healthcare specialists today.
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


export default WomenHealthcare;