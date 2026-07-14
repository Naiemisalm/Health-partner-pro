import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";


export default function Testimonials(){


const reviews=[

{
name:"Rahim Ahmed",
text:"Excellent root canal treatment. Doctor was very professional and caring.",
role:"Root Canal Patient"
},


{
name:"Nusrat Jahan",
text:"Very comfortable experience. The dental team was friendly and helpful.",
role:"Dental Care Patient"
},


{
name:"Karim Hasan",
text:"Modern facility and painless treatment. Highly recommended.",
role:"Happy Patient"
}

];



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


<div className="max-w-7xl mx-auto px-5">



<div className="text-center">


<h2 className="text-3xl md:text-4xl font-bold">

Patient Reviews

</h2>


<p className="text-gray-600 mt-3">

What our patients say about Root Canal Treatment.

</p>


</div>






<div className="grid md:grid-cols-3 gap-8 mt-10">


{
reviews.map((review,index)=>(


<motion.div

key={index}

whileHover={{
y:-8
}}

className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition"

>


<FaQuoteLeft className="text-4xl text-blue-600"/>



<p className="text-gray-600 mt-5 leading-relaxed">

"{review.text}"

</p>




<div className="flex gap-1 text-yellow-500 mt-5">

<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

</div>




<h3 className="font-bold text-xl mt-5">

{review.name}

</h3>



<p className="text-gray-500 text-sm">

{review.role}

</p>



</motion.div>


))

}


</div>


</div>


</motion.section>


)

}