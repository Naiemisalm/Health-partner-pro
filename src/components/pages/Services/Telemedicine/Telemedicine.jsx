import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Telemedicine = () => {

  const navigate = useNavigate();

  const [openFAQ,setOpenFAQ] = useState(null);



  const services = [

    {
      icon:"💻",
      title:"Online Doctor Consultation",
      text:"Consult qualified doctors through secure online video sessions."
    },

    {
      icon:"📹",
      title:"Video Consultation",
      text:"Connect with doctors from anywhere using video calls."
    },

    {
      icon:"📱",
      title:"Digital Prescription",
      text:"Receive online prescriptions and medical advice digitally."
    },

    {
      icon:"🕒",
      title:"24/7 Healthcare Support",
      text:"Get healthcare guidance whenever you need assistance."
    },

    {
      icon:"🩺",
      title:"Remote Diagnosis",
      text:"Discuss symptoms and receive medical guidance remotely."
    },

    {
      icon:"📄",
      title:"Medical Report Review",
      text:"Share reports online and get expert doctor opinions."
    },

    {
      icon:"🔒",
      title:"Secure Consultation",
      text:"Private and safe digital healthcare experience."
    },

    {
      icon:"📅",
      title:"Follow-up Consultation",
      text:"Continue your treatment through online follow-ups."
    }

  ];




  const faqs=[

    {
      q:"How does online consultation work?",
      a:"Choose your doctor, select appointment time and consult through video call."
    },

    {
      q:"Can I get a digital prescription?",
      a:"Yes, doctors can provide digital prescriptions after consultation."
    },

    {
      q:"Can I share medical reports online?",
      a:"Yes, you can upload reports and discuss them with doctors."
    },

    {
      q:"Is telemedicine available anytime?",
      a:"Healthcare support depends on doctor availability."
    }

  ];





return (

<div className="bg-gray-50 min-h-screen">



{/* Hero Section */}


<section className="
bg-gradient-to-r
from-indigo-700
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
text-indigo-100
font-semibold
">
Digital Healthcare Solution
</p>



<h1 className="
text-4xl
md:text-5xl
font-bold
mt-4
">
Telemedicine
</h1>



<p className="
mt-5
text-indigo-50
leading-relaxed
">
Consult experienced doctors online from the comfort
of your home with secure digital healthcare services.
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
hover:bg-blue-50
"

>
Start Online Consultation
</button>


</div>





<div className="
bg-white/20
rounded-3xl
p-10
text-center
">


<div className="text-8xl">
💻
</div>


<h3 className="
text-2xl
font-bold
mt-5
">
Healthcare Anywhere
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
["10+","Online Doctors"],
["5000+","Consultations"],
["24/7","Support"],
["98%","Patient Satisfaction"]

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
text-indigo-600
">
{item[0]}
</h2>


<p className="text-gray-600 mt-2">
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
py-10
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
bg-indigo-100
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
Dr. Online Healthcare Specialist
</h2>


<p className="
text-gray-600
mt-2
">
Digital Healthcare Consultant | 8+ Years Experience
</p>


<div className="text-yellow-500 mt-3">
⭐⭐⭐⭐⭐
</div>


</div>


</div>


</section>

// Services Section

<section className="
max-w-7xl
mx-auto
py-16
px-4
">


<div className="text-center mb-12">


<h2 className="
text-3xl
font-bold
text-gray-800
">
Our Telemedicine Services
</h2>


<p className="
text-gray-600
mt-3
">
Modern healthcare through simple and secure online consultation.
</p>


</div>





<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
">


{
services.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-2xl
p-6
shadow-sm
hover:shadow-xl
transition
border
hover:border-indigo-400
"


>


<div className="text-4xl">
{item.icon}
</div>



<h3 className="
mt-4
font-bold
text-gray-800
">
{item.title}
</h3>



<p className="
text-sm
text-gray-600
mt-3
leading-relaxed
">
{item.text}
</p>



</div>


))
}


</div>


</section>







{/* Why Choose Telemedicine */}


<section className="
bg-indigo-50
py-16
px-4
">


<div className="
max-w-6xl
mx-auto
text-center
">


<h2 className="
text-3xl
font-bold
text-gray-800
">
Why Choose Telemedicine?
</h2>



<div className="
grid
md:grid-cols-3
gap-6
mt-10
">



{
[
{
icon:"🏠",
title:"Consult From Home",
text:"Get medical advice without visiting hospital."
},

{
icon:"⏱️",
title:"Save Time",
text:"Quick appointment and online consultation."
},

{
icon:"🔐",
title:"Safe & Private",
text:"Your medical information stays secure."
}

].map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-xl
p-6
shadow
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
mt-3
">
{item.text}
</p>


</div>


))


}



</div>


</div>


</section>







{/* How It Works */}


<section className="
py-16
px-4
">


<h2 className="
text-3xl
font-bold
text-center
">
How Telemedicine Works
</h2>




<div className="
max-w-5xl
mx-auto
grid
grid-cols-1
md:grid-cols-4
gap-6
mt-10
">


{

[
"Choose Doctor",
"Book Online Slot",
"Video Consultation",
"Get Treatment Advice"

].map((step,index)=>(


<div

key={index}

className="
bg-white
rounded-xl
p-6
shadow
text-center
"


>


<div className="
w-10
h-10
mx-auto
rounded-full
bg-indigo-600
text-white
flex
items-center
justify-center
font-bold
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







{/* FAQ Section */}


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
"

>


<button

onClick={()=>setOpenFAQ(
openFAQ===index ? null : index
)}

className="
w-full
flex
justify-between
items-center
p-5
font-semibold
text-left
"

>


<span>
{item.q}
</span>


<span className="
text-indigo-600
text-xl
">
{
openFAQ===index ? "-" : "+"
}
</span>


</button>





{

openFAQ===index && (

<p className="
px-5
pb-5
text-gray-600
leading-relaxed
">

{item.a}

</p>

)

}


</div>


))


}


</section>







{/* Emergency CTA */}


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
Need Medical Assistance?
</h2>



<p className="
mt-3
">
Connect with our healthcare team today.
</p>




<button

className="
mt-6
bg-white
text-red-600
px-8
py-3
rounded-full
font-bold
"

>
📞 Contact Now
</button>



</section>





</div>

);

};


export default Telemedicine;