import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, SlidersHorizontal } from "lucide-react";
import doctors from "../../Doctors/data/data";


export default function Doctor() {


const navigate = useNavigate();


const [showAll,setShowAll] = useState(false);

const [search,setSearch] = useState("");

const [specialty,setSpecialty] = useState("");

const [location,setLocation] = useState("");

const [rating,setRating] = useState("");

const [showFilter,setShowFilter] = useState(false);

const [favorites,setFavorites] = useState([]);





const handleBook = (id)=>{

navigate(`/appointment/${id}`);

};






const toggleFavorite=(id)=>{

setFavorites((prev)=>

prev.includes(id)

?

prev.filter(item=>item !== id)

:

[...prev,id]

);

};







const specialties=[

...new Set(

doctors.map(doc=>doc.specialty)

)

];





const locations=[

...new Set(

doctors.map(doc=>doc.location)

)

];








const filteredDoctors = doctors.filter((doc)=>{


const searchMatch =

doc.name
.toLowerCase()
.includes(search.toLowerCase())

||

doc.specialty
.toLowerCase()
.includes(search.toLowerCase());





const specialtyMatch =

specialty === ""

||

doc.specialty === specialty;






const locationMatch =

location === ""

||

doc.location === location;






const ratingMatch =

rating === ""

||

doc.rating >= Number(rating);





return (

searchMatch &&

specialtyMatch &&

locationMatch &&

ratingMatch

);


});







const visibleDoctors = showAll

?

filteredDoctors

:

filteredDoctors.slice(0,6);









return (

<section className="
w-full
min-h-screen
bg-gradient-to-b
from-blue-50
to-white
py-8
">


<div className="
w-full
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
">






{/* Header */}


<div className="
text-center
mb-8
">


<h1 className="
text-2xl
sm:text-3xl
lg:text-4xl
font-bold
text-gray-800
">

Find Your Expert Doctor

</h1>




<p className="
mt-3
text-sm
sm:text-base
text-gray-500
">

Book trusted healthcare professionals easily

</p>


</div>









{/* Search Box */}


<div className="
bg-white
rounded-2xl
shadow-md
p-4
mb-8
">



<div className="
flex
flex-col
gap-3
md:flex-row
">



<input

type="text"

placeholder="Search doctor..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
px-4
py-3
rounded-xl
border
outline-none
text-sm
focus:ring-2
focus:ring-blue-500
"

/>





<button

onClick={()=>setShowFilter(!showFilter)}

className="
md:hidden
w-full
flex
items-center
justify-center
gap-2
bg-blue-600
text-white
py-3
rounded-xl
font-semibold
"

>


<SlidersHorizontal size={18}/>

Filter


</button>


</div>
{/* Desktop Filter */}

<div className="
hidden
md:grid
grid-cols-3
gap-4
mt-5
">


<select

value={specialty}

onChange={(e)=>setSpecialty(e.target.value)}

className="
w-full
px-4
py-3
rounded-xl
border
text-sm
outline-none
"

>

<option value="">
Specialty
</option>


{

specialties.map((item)=>(

<option key={item} value={item}>
{item}
</option>

))

}


</select>







<select

value={location}

onChange={(e)=>setLocation(e.target.value)}

className="
w-full
px-4
py-3
rounded-xl
border
text-sm
outline-none
"

>

<option value="">
Location
</option>


{

locations.map((item)=>(

<option key={item} value={item}>
{item}
</option>

))

}


</select>







<select

value={rating}

onChange={(e)=>setRating(e.target.value)}

className="
w-full
px-4
py-3
rounded-xl
border
text-sm
outline-none
"

>

<option value="">
Rating
</option>


<option value="4.5">
4.5+ ⭐
</option>


<option value="4.8">
4.8+ ⭐
</option>


</select>



</div>








{/* Mobile Filter */}

{

showFilter &&

<div className="
md:hidden
mt-4
space-y-3
">


<select

value={specialty}

onChange={(e)=>setSpecialty(e.target.value)}

className="
w-full
px-4
py-3
rounded-xl
border
"

>

<option value="">
Select Specialty
</option>


{

specialties.map((item)=>(

<option key={item} value={item}>
{item}
</option>

))

}


</select>






<select

value={location}

onChange={(e)=>setLocation(e.target.value)}

className="
w-full
px-4
py-3
rounded-xl
border
"

>

<option value="">
Select Location
</option>


{

locations.map((item)=>(

<option key={item} value={item}>
{item}
</option>

))

}


</select>







<select

value={rating}

onChange={(e)=>setRating(e.target.value)}

className="
w-full
px-4
py-3
rounded-xl
border
"

>

<option value="">
Select Rating
</option>


<option value="4.5">
4.5+ ⭐
</option>


<option value="4.8">
4.8+ ⭐
</option>


</select>



</div>


}



</div>









{/* View Button */}


<div className="
flex
justify-center
mb-8
">


<button

onClick={()=>setShowAll(!showAll)}

className="
w-full
sm:w-auto
px-8
py-3
rounded-xl
bg-blue-600
text-white
font-semibold
hover:bg-blue-700
transition
"

>

{

showAll

?

"Show Less Doctors"

:

"View All Doctors"

}


</button>


</div>









{/* Doctor List */}


{

visibleDoctors.length === 0 ?


(

<h2 className="
text-center
text-gray-500
text-lg
">

No Doctor Found

</h2>

)


:


(

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
">


{

visibleDoctors.map((doc)=>(


<div

key={doc.id}

className="
w-full
bg-white
rounded-3xl
shadow-md
hover:shadow-xl
transition
p-4
sm:p-5
border
border-blue-100
relative
overflow-hidden
"


>






{/* Favourite Button */}

<button

onClick={()=>toggleFavorite(doc.id)}

className="
absolute
right-4
top-4
w-9
h-9
rounded-full
bg-white
shadow
flex
items-center
justify-center
"

>

<Heart

size={18}

className={

favorites.includes(doc.id)

?

"text-red-500 fill-red-500"

:

"text-gray-400"

}

/>


</button>







{/* Image */}


<div className="
text-center
">


<img

src={doc.image}

alt={doc.name}

className="
w-24
h-24
sm:w-28
sm:h-28
mx-auto
rounded-full
object-cover
border-4
border-blue-100
"

/>





<div className="
mt-3
inline-block
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-xs
">

● Available

</div>




<h2 className="
mt-3
text-lg
sm:text-xl
font-bold
text-gray-800
break-words
">

{doc.name}

</h2>




<p className="
text-blue-600
font-medium
text-sm
">

{doc.specialty}

</p>



<p className="
text-gray-500
text-xs
sm:text-sm
mt-1
min-h-[40px]
">

{doc.qualification}

</p>


</div>
{/* Doctor Information */}

<div className="
mt-5
space-y-3
text-sm
text-gray-600
">



<div className="
flex
justify-between
items-center
gap-3
">

<span className="
text-gray-500
">

Experience

</span>


<b className="
text-right
">

{doc.experience}

</b>


</div>







<div className="
flex
justify-between
items-start
gap-3
">

<span className="
text-gray-500
shrink-0
">

Hospital

</span>



<b className="
text-right
max-w-[55%]
break-words
leading-5
">

{doc.hospital}

</b>


</div>







<div className="
flex
justify-between
items-center
gap-3
">

<span className="
text-gray-500
">

Location

</span>



<b className="
text-right
break-words
">

{doc.location}

</b>


</div>







<div className="
flex
justify-between
items-center
gap-3
">


<span className="
text-gray-500
">

Rating

</span>




<span className="
bg-yellow-100
text-yellow-700
px-3
py-1
rounded-full
text-xs
font-semibold
whitespace-nowrap
">

⭐ {doc.rating} ({doc.reviews})

</span>



</div>







<div className="
flex
justify-between
items-center
bg-blue-50
rounded-xl
p-3
gap-3
">


<span>
Consultation
</span>



<b className="
text-blue-600
whitespace-nowrap
">

৳{doc.consultationFee}

</b>



</div>




</div>









{/* Appointment Button */}


<button

onClick={()=>handleBook(doc.id)}

className="
w-full
mt-6
py-3
rounded-xl
bg-blue-600
text-white
font-semibold
text-sm
sm:text-base
hover:bg-blue-700
active:scale-95
transition-all
"

>

Book Appointment

</button>





</div>


))

}


</div>


)


}




</div>


</section>


);


}