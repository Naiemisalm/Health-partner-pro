import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";


export default function FAQ(){


const faq=[

{
q:"Dental Implant কি ব্যথাযুক্ত?",
a:"Modern anesthesia এবং advanced technology ব্যবহার করার কারণে treatment এর সময় discomfort অনেক কম থাকে।"
},


{
q:"Dental Implant করতে কত সময় লাগে?",
a:"সাধারণত implant placement এবং crown completion এর জন্য কয়েকটি ধাপে treatment করা হয়। সময় patient-এর condition অনুযায়ী পরিবর্তন হতে পারে।"
},


{
q:"Dental Implant কতদিন টিকে থাকে?",
a:"সঠিক care এবং নিয়মিত dental checkup করলে dental implant অনেক বছর ভালো অবস্থায় থাকতে পারে।"
},


{
q:"সবাই কি Dental Implant করতে পারে?",
a:"বেশিরভাগ মানুষ implant করতে পারেন, তবে bone condition এবং oral health পরীক্ষা করে doctor সিদ্ধান্ত নেন।"
},


{
q:"Implant করার পরে কি স্বাভাবিকভাবে খেতে পারবো?",
a:"হ্যাঁ, treatment সম্পূর্ণ হওয়ার পরে implant natural tooth-এর মতো ব্যবহার করা যায়।"
}

];



const [open,setOpen]=useState(null);



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

className="py-16 bg-white"

>


<div className="max-w-5xl mx-auto px-5">



<div className="text-center">


<h2 className="text-3xl md:text-4xl font-bold">

Frequently Asked Questions

</h2>


<p className="text-gray-600 mt-4">

Common questions about Dental Implant Treatment.

</p>


</div>






<div className="mt-10 space-y-5">


{
faq.map((item,index)=>(


<div

key={index}

className="bg-gray-50 rounded-2xl shadow-md overflow-hidden"

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

className="px-6 pb-6 text-gray-600 leading-relaxed"

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