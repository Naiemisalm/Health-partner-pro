import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";


export default function Testimonials(){


const reviews=[

{
name:"Rahim Ahmed",
text:"My dental implant treatment was excellent. The doctor explained everything clearly and the result is amazing.",
type:"Dental Implant Patient"
},


{
name:"Nusrat Jahan",
text:"Very professional team and comfortable treatment experience. I can smile confidently again.",
type:"Smile Restoration Patient"
},


{
name:"Karim Hasan",
text:"Advanced technology and caring doctors. Highly recommended for dental implant treatment.",
type:"Implant Patient"
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

className="py-16 bg-gray-50"

>


<div className="max-w-7xl mx-auto px-5">



<div className="text-center">


<h2 className="text-3xl md:text-4xl font-bold">

Patient Reviews

</h2>


<p className="text-gray-600 mt-4">

See what our patients say about their dental implant experience.

</p>


</div>






<div className="grid md:grid-cols-3 gap-8 mt-12">


{
reviews.map((review,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"

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





<h3 className="text-xl font-bold mt-5">

{review.name}

</h3>




<p className="text-gray-500 text-sm">

{review.type}

</p>



</motion.div>


))

}


</div>


</div>


</motion.section>


)

}