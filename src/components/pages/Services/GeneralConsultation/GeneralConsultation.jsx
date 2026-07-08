import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const GeneralConsultation = () => {

  const navigate = useNavigate();


  const [openFAQ, setOpenFAQ] = useState(null);



  const services = [
    {
      title: "Fever, Cold & Cough Treatment",
      icon: "🌡️",
      text: "Complete evaluation and treatment guidance for common infections."
    },
    {
      title: "Headache & Body Pain Consultation",
      icon: "🧠",
      text: "Expert advice for headache, muscle pain and general discomfort."
    },
    {
      title: "Digestive Problems",
      icon: "🩺",
      text: "Diagnosis and treatment support for gastric and digestive issues."
    },
    {
      title: "Blood Pressure Checkup",
      icon: "❤️",
      text: "Regular BP monitoring and hypertension management."
    },
    {
      title: "Diabetes Monitoring",
      icon: "🩸",
      text: "Blood sugar monitoring and diabetes care guidance."
    },
    {
      title: "General Health Screening",
      icon: "🔬",
      text: "Routine health assessment for early disease detection."
    },
    {
      title: "Lifestyle & Diet Advice",
      icon: "🥗",
      text: "Personalized lifestyle improvement and nutrition guidance."
    },
    {
      title: "Follow-up Consultation",
      icon: "📅",
      text: "Continuous monitoring and follow-up support."
    },
  ];



  const faqs = [
    {
      q:"How can I book a consultation?",
      a:"You can book your appointment online through our healthcare portal."
    },
    {
      q:"Do doctors provide follow-up support?",
      a:"Yes, follow-up consultation is available for continuous treatment support."
    },
    {
      q:"Can I consult online?",
      a:"Yes, online consultation is available through our telemedicine service."
    },
    {
      q:"Do I need previous medical reports?",
      a:"Previous reports are helpful for better diagnosis and treatment planning."
    }
  ];




  return (

<div className="bg-gray-50 min-h-screen">



{/* Hero */}

<section className="
bg-gradient-to-r
from-blue-700
to-blue-500
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

<p className="uppercase text-blue-100 font-semibold">
Primary Healthcare Service
</p>


<h1 className="
text-4xl
md:text-5xl
font-bold
mt-4
">
General Consultation
</h1>


<p className="mt-5 text-blue-50 leading-relaxed">
Get professional medical advice from experienced physicians
for everyday health concerns, preventive care and wellness.
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
Book Consultation
</button>


</div>



<div className="
bg-white/20
rounded-3xl
p-10
text-center
">

<div className="text-8xl">
🩺
</div>

<h3 className="text-2xl font-bold mt-5">
Expert Primary Care
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
["10+","Expert Doctors"],
["5000+","Happy Patients"],
["24/7","Support"],
["15+","Years Experience"]
].map((item,index)=>(


<div
key={index}
className="
bg-white
rounded-xl
p-6
text-center
shadow
">

<h2 className="
text-3xl
font-bold
text-blue-600
">
{item[0]}
</h2>

<p className="mt-2 text-gray-600">
{item[1]}
</p>

</div>


))
}


</div>


</section>







{/* Doctor */}

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
bg-blue-100
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
Dr. Experienced Physician
</h2>


<p className="text-gray-600 mt-2">
General Physician | 10+ Years Experience
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
Consultation Services
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
hover:border-blue-300
">

<div className="text-4xl">
{item.icon}
</div>


<h3 className="font-bold mt-4">
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







{/* Process */}

<section className="
bg-blue-50
py-16
px-4
">


<h2 className="
text-3xl
font-bold
text-center
">
How Consultation Works
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
"Meet Doctor",
"Get Diagnosis",
"Treatment Plan"
].map((item,index)=>(


<div
key={index}
className="
bg-white
p-6
rounded-xl
text-center
shadow
">


<div className="
w-10
h-10
mx-auto
rounded-full
bg-blue-600
text-white
flex
items-center
justify-center
">
{index+1}
</div>


<p className="mt-4 font-semibold">
{item}
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
mb-4
rounded-xl
shadow
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
">

{item.q}

<span>
{openFAQ===index ? "-" : "+"}
</span>


</button>



{
openFAQ===index &&
<div className="
px-5
pb-5
text-gray-600
">
{item.a}
</div>
}


</div>


))
}


</section>






{/* Emergency CTA */}

<section className="
bg-red-600
py-10
px-4
text-white
text-center
">


<h2 className="
text-3xl
font-bold
">
Need Urgent Medical Help?
</h2>


<p className="mt-3">
Our healthcare team is ready to assist you.
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
📞 Call Now
</button>


</section>



</div>

  );

};


export default GeneralConsultation;