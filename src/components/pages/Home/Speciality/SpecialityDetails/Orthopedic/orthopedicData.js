const orthopedicDoctors = [

{
id:1,
name:"Dr. Md. Rakib Hasan",
degree:"MBBS, MS (Orthopedic Surgery)",
speciality:"Orthopedic Specialist",
experience:15,
gender:"Male",
location:"Dhaka",
fee:1200,
rating:4.9,
reviews:245,
hospital:"Square Hospital",
available:true,
online:true,
image:"https://randomuser.me/api/portraits/men/32.jpg"
},

{
id:2,
name:"Dr. Nusrat Jahan",
degree:"MBBS, FCPS (Orthopedic)",
speciality:"Orthopedic Specialist",
experience:12,
gender:"Female",
location:"Dhaka",
fee:1000,
rating:4.8,
reviews:180,
hospital:"Evercare Hospital",
available:true,
online:true,
image:"https://randomuser.me/api/portraits/women/44.jpg"
},

{
id:3,
name:"Dr. Farhan Ahmed",
degree:"MBBS, D-Ortho",
speciality:"Orthopedic Surgeon",
experience:18,
gender:"Male",
location:"Chittagong",
fee:1500,
rating:4.9,
reviews:310,
hospital:"Chittagong Medical College Hospital",
available:true,
online:false,
image:"https://randomuser.me/api/portraits/men/50.jpg"
},

{
id:4,
name:"Dr. Sharmin Akter",
degree:"MBBS, MS (Orthopedic)",
speciality:"Orthopedic Specialist",
experience:10,
gender:"Female",
location:"Dhaka",
fee:900,
rating:4.7,
reviews:120,
hospital:"Popular Diagnostic Center",
available:true,
online:true,
image:"https://randomuser.me/api/portraits/women/65.jpg"
},

...Array.from({ length: 12 }, (_, i) => ({

id:i+5,

name:`Dr. Orthopedic ${i+5}`,

degree:"MBBS, MS (Orthopedic Surgery)",

speciality:"Orthopedic Specialist",

experience:6+i,

gender:i%2===0?"Male":"Female",

location:i%2===0?"Dhaka":"Chittagong",

fee:800+(i*100),

rating:Number((4.5+(i%5)*0.1).toFixed(1)),

reviews:80+i*18,

hospital:i%2===0?"Square Hospital":"Evercare Hospital",

available:true,

online:i%2===0,

image:i%2===0
?"https://randomuser.me/api/portraits/men/60.jpg"
:"https://randomuser.me/api/portraits/women/60.jpg"

}))

];

export default orthopedicDoctors;