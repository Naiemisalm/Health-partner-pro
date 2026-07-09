const dermatologistDoctors = [

{
id:1,

name:"Dr. Ayesha Rahman",

degree:"MBBS, FCPS (Dermatology)",

speciality:"Dermatologist & Skin Specialist",

experience:12,

gender:"Female",

location:"Dhaka",

fee:1000,

rating:4.9,

reviews:280,

hospital:"Evercare Skin Center",

availability:"Available Today",

online:true,

image:"https://randomuser.me/api/portraits/women/44.jpg"

},



{
id:2,

name:"Dr. Md. Imran Hossain",

degree:"MBBS, MD (Dermatology)",

speciality:"Skin & Cosmetic Specialist",

experience:10,

gender:"Male",

location:"Dhaka",

fee:800,

rating:4.8,

reviews:190,

hospital:"Popular Diagnostic Center",

availability:"Available Today",

online:true,

image:"https://randomuser.me/api/portraits/men/32.jpg"

},




{
id:3,

name:"Dr. Nusrat Karim",

degree:"MBBS, DDV",

speciality:"Clinical Dermatologist",

experience:8,

gender:"Female",

location:"Chittagong",

fee:700,

rating:4.7,

reviews:160,

hospital:"City Skin Hospital",

availability:"Available Tomorrow",

online:false,

image:"https://randomuser.me/api/portraits/women/65.jpg"

},




{
id:4,

name:"Dr. Fahim Ahmed",

degree:"MBBS, FCPS, Diploma in Aesthetic Medicine",

speciality:"Cosmetic Dermatologist",

experience:15,

gender:"Male",

location:"Dhaka",

fee:1500,

rating:4.9,

reviews:350,

hospital:"Square Skin Clinic",

availability:"Available Today",

online:true,

image:"https://randomuser.me/api/portraits/men/50.jpg"

},




...Array.from({length:10},(_,i)=>(

{

id:i+5,

name:`Dr. Dermatologist Specialist ${i+5}`,

degree:"MBBS, Dermatology Specialist",

speciality:"Skin Specialist",

experience:5+i,

gender:i%2===0?"Male":"Female",

location:i%2===0?"Dhaka":"Chittagong",

fee:600+(i*70),

rating:(4.5+(i%5)/10).toFixed(1),

reviews:60+(i*20),

hospital:"Healthy Skin Care Hospital",

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


export default dermatologistDoctors;