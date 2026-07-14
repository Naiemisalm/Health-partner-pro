import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";


export default function FAQ(){


const faq=[

{
q:"Braces কি ব্যথাযুক্ত?",
a:"Braces লাগানোর সময় সাধারণত ব্যথা হয় না। তবে প্রথম কয়েকদিন সামান্য discomfort থাকতে পারে, যা দ্রুত কমে যায়।"
},


{
q:"Braces treatment কতদিন লাগে?",
a:"সাধারণত ১২-২৪ মাস সময় লাগতে পারে। দাঁতের অবস্থার উপর নির্ভর করে সময় কম বা বেশি হতে পারে।"
},


{
q:"কোন বয়সে Braces করা যায়?",
a:"বেশিরভাগ বয়সেই braces করা যায়। তবে দাঁত ও মাড়ির condition পরীক্ষা করে orthodontist সঠিক পরামর্শ দেন।"
},


{
q:"Braces পরে কি স্বাভাবিক খাবার খেতে পারবো?",
a:"হ্যাঁ, তবে শক্ত ও অতিরিক্ত sticky খাবার এড়িয়ে চলা ভালো।"
},


{
q:"Treatment শেষে কি দাঁত আবার বাঁকা হতে পারে?",
a:"Doctor-এর পরামর্শ অনুযায়ী retainer ব্যবহার করলে দাঁত দীর্ঘদিন সোজা রাখা যায়।"
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

Common questions about Braces Treatment.

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