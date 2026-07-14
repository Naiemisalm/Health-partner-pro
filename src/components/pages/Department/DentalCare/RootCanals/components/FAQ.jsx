import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";


export default function FAQ(){


const faq=[

{
q:"Root Canal কি ব্যথাযুক্ত?",
a:"Modern anesthesia ব্যবহার করার কারণে treatment এর সময় ব্যথা অনেক কম থাকে এবং patient comfortable থাকেন।"
},


{
q:"Root Canal করতে কত সময় লাগে?",
a:"সাধারণত ১-৩টি appointment লাগতে পারে। দাঁতের condition অনুযায়ী সময় পরিবর্তন হতে পারে।"
},


{
q:"Root Canal এর পরে কি স্বাভাবিকভাবে খেতে পারবো?",
a:"হ্যাঁ, treatment সম্পূর্ণ হওয়ার পরে দাঁত স্বাভাবিকভাবে ব্যবহার করা যায়।"
},


{
q:"Root Canal কেন প্রয়োজন হয়?",
a:"দাঁতের ভিতরের infection, severe pain এবং damaged nerve বাঁচানোর জন্য Root Canal করা হয়।"
}

];



const [open,setOpen] = useState(null);



return(


<motion.section

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="py-16 bg-gray-50"


>


<div className="max-w-5xl mx-auto px-5">



<div className="text-center">


<h2 className="text-3xl md:text-4xl font-bold">

Frequently Asked Questions

</h2>


<p className="text-gray-600 mt-3">

Common questions about Root Canal Treatment.

</p>


</div>






<div className="mt-10 space-y-5">


{
faq.map((item,index)=>(


<div

key={index}

className="bg-white rounded-2xl shadow-md overflow-hidden"

>


<button

onClick={()=>setOpen(open===index ? null : index)}

className="w-full flex justify-between items-center p-6 text-left"

>


<h3 className="font-bold text-lg">

{item.q}

</h3>



{

open===index

?

<FaMinus className="text-blue-600"/>

:

<FaPlus className="text-blue-600"/>

}


</button>





{

open===index &&

<motion.div

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

className="px-6 pb-6 text-gray-600"

>

{item.a}

</motion.div>

}



</div>


))

}


</div>


</div>


</motion.section>


)

}