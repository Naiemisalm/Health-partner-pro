import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const DiagnosticServices = () => {

  const navigate = useNavigate();

  const [openFAQ,setOpenFAQ] = useState(null);



  const services = [
    {
      icon:"🩸",
      title:"Blood Test",
      text:"Complete blood analysis including CBC, sugar and other important tests."
    },
    {
      icon:"🧪",
      title:"Laboratory Testing",
      text:"Accurate diagnostic tests with advanced laboratory technology."
    },
    {
      icon:"❤️",
      title:"ECG Test",
      text:"Heart activity monitoring and cardiac health assessment."
    },
    {
      icon:"🔬",
      title:"Health Screening",
      text:"Preventive health checkups for early disease detection."
    },
    {
      icon:"🧬",
      title:"Hormone & Thyroid Test",
      text:"Specialized testing for thyroid and hormonal balance."
    },
    {
      icon:"📄",
      title:"Digital Reports",
      text:"Get accurate medical reports online anytime."
    },
    {
      icon:"🩺",
      title:"Doctor Review",
      text:"Expert doctor interpretation of diagnostic reports."
    },
    {
      icon:"🏥",
      title:"Home Sample Collection",
      text:"Convenient sample collection service at your home."
    },
  ];



  const faqs = [

    {
      q:"How can I book a diagnostic test?",
      a:"You can select your required test and book an appointment online."
    },

    {
      q:"Do you provide home sample collection?",
      a:"Yes, sample collection service is available from your home."
    },

    {
      q:"How will I receive my report?",
      a:"Reports can be accessed digitally through our healthcare portal."
    },

    {
      q:"Can doctors review my reports?",
      a:"Yes, expert doctors can provide report interpretation."
    }

  ];



return (

<div className="bg-gray-50 min-h-screen">



{/* Hero */}

<section className="
bg-gradient-to-r
from-green-700
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
text-green-100
font-semibold
">
Advanced Healthcare Testing
</p>


<h1 className="
text-4xl
md:text-5xl
font-bold
mt-4
">
Diagnostic Services
</h1>


<p className="
mt-5
text-green-50
leading-relaxed
">
Reliable laboratory and diagnostic solutions with
accurate reports to support better medical decisions.
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
Book Diagnostic Test
</button>


</div>




<div className="
bg-white/20
rounded-3xl
p-10
text-center
">

<div className="text-8xl">
🧪
</div>


<h3 className="
text-2xl
font-bold
mt-5
">
Accurate Diagnosis
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
["50+","Lab Tests"],
["10000+","Reports Generated"],
["99%","Accuracy Rate"],
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
text-green-600
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







{/* Lab Specialist */}


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
gap-8
items-center
">


<div className="
w-32
h-32
rounded-full
bg-green-100
flex
items-center
justify-center
text-6xl
">
👨‍🔬
</div>



<div>


<h2 className="
text-2xl
font-bold
">
Dr. Laboratory Specialist
</h2>


<p className="
text-gray-600
mt-2
">
Clinical Pathologist | 12+ Years Experience
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
Our Diagnostic Services
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
hover:border-green-400
">


<div className="text-4xl">
{item.icon}
</div>


<h3 className="
mt-4
font-bold
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
bg-green-50
py-16
px-4
">


<h2 className="
text-3xl
font-bold
text-center
">
Why Choose Our Diagnostic Service?
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
["🎯","Accurate Results","Advanced technology ensures reliable reports."],
["⚡","Fast Reporting","Get reports quickly through digital delivery."],
["🏠","Home Collection","Comfortable sample collection at home."]
].map((item,index)=>(


<div
key={index}
className="
bg-white
p-6
rounded-xl
shadow
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
Diagnostic Process
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
"Select Test",
"Sample Collection",
"Lab Processing",
"Get Report"
].map((step,index)=>(


<div
key={index}
className="
bg-white
shadow
rounded-xl
p-6
text-center
">


<div className="
w-10
h-10
mx-auto
rounded-full
bg-green-600
text-white
flex
items-center
justify-center
">
{index+1}
</div>


<p className="mt-4 font-semibold">
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
shadow
rounded-xl
mb-4
overflow-hidden
">


<button

onClick={()=>setOpenFAQ(
openFAQ===index ? null : index
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
text-white
text-center
py-12
px-4
">


<h2 className="
text-3xl
font-bold
">
Need Urgent Health Check?
</h2>


<p className="mt-3">
Book your diagnostic service today.
</p>


<button className="
mt-5
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


export default DiagnosticServices;