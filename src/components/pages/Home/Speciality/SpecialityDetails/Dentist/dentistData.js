const dentistDoctors = [

{
id:1,

name:"Dr. Sarah Ahmed",

degree:"BDS, FCPS (Dental Surgery)",

speciality:"Dentist & Oral Surgeon",

experience:12,

gender:"Female",

location:"Dhaka",

fee:800,

rating:4.9,

reviews:245,

hospital:"Evercare Dental Center",

availability:"Available Today",

online:true,

image:"https://randomuser.me/api/portraits/women/44.jpg"

},



{
id:2,

name:"Dr. Md. Hasan Rahman",

degree:"BDS, DDS",

speciality:"Dental Specialist",

experience:10,

gender:"Male",

location:"Dhaka",

fee:700,

rating:4.8,

reviews:180,

hospital:"Popular Dental Care",

availability:"Available Today",

online:true,

image:"https://randomuser.me/api/portraits/men/32.jpg"

},



{
id:3,

name:"Dr. Nusrat Jahan",

degree:"BDS, MS (Orthodontics)",

speciality:"Orthodontist",

experience:8,

gender:"Female",

location:"Chittagong",

fee:600,

rating:4.7,

reviews:150,

hospital:"City Dental Hospital",

availability:"Available Tomorrow",

online:false,

image:"https://randomuser.me/api/portraits/women/65.jpg"

},



{
id:4,

name:"Dr. Fahim Ahmed",

degree:"BDS, FCPS",

speciality:"Cosmetic Dentist",

experience:15,

gender:"Male",

location:"Dhaka",

fee:1200,

rating:4.9,

reviews:320,

hospital:"Square Dental Clinic",

availability:"Available Today",

online:true,

image:"https://randomuser.me/api/portraits/men/50.jpg"

},



...Array.from({length:10},(_,i)=>(

{

id:i+5,

name:`Dr. Dentist Specialist ${i+5}`,

degree:"BDS, Dental Surgery",

speciality:"Dental Specialist",

experience:5+i,

gender:i%2===0?"Male":"Female",

location:i%2===0?"Dhaka":"Chittagong",

fee:500+(i*50),

rating:(4.5+(i%5)/10).toFixed(1),

reviews:50+(i*20),

hospital:"Smile Care Dental Hospital",

availability:"Available Today",

online:i%2===0,

image:
i%2===0
?
"https://randomuser.me/api/portraits/men/60.jpg"
:
"https://randomuser.me/api/portraits/women/60.jpg"

}

))

];


export default dentistDoctors;