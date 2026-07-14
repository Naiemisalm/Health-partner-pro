export default function Facilities(){

const facilities=[
"Modern Dental Equipment",
"Digital X-Ray Facility",
"Experienced Dental Team"
];


return(

<section className="bg-blue-50 py-14">

<div className="max-w-6xl mx-auto px-5">


<h2 className="text-3xl font-bold text-center">
Our Facilities
</h2>


<div className="grid md:grid-cols-3 gap-6 mt-8">

{
facilities.map((item,index)=>(

<div
key={index}
className="bg-white p-6 rounded-xl shadow text-center"
>

<h3 className="font-bold text-xl">
{item}
</h3>


</div>

))
}

</div>


</div>

</section>

)

}