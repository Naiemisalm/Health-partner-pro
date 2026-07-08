import { useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";

export default function HomePage() {

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [profileDoctor, setProfileDoctor] = useState(null);

  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });


  const doctors = [
    {
      id: 1,
      name: "Dr. Mohammad Rahman",
      specialty: "Cardiologist",
      location: "Dhaka",
      experience: "12 Years",
      fee: 1200,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    },
    {
      id: 2,
      name: "Dr. Nusrat Jahan",
      specialty: "Dermatologist",
      location: "Chattogram",
      experience: "8 Years",
      fee: 1000,
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    },
    {
      id: 3,
      name: "Dr. Tanvir Ahmed",
      specialty: "Neurologist",
      location: "Rajshahi",
      experience: "10 Years",
      fee: 1500,
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    },
    {
      id: 4,
      name: "Dr. Farhana Akter",
      specialty: "Gynecologist",
      location: "Khulna",
      experience: "7 Years",
      fee: 900,
      image:
        "https://images.unsplash.com/photo-1580281657527-47f249e8f4a7",
    },
    {
      id: 5,
      name: "Dr. Rakib Hossain",
      specialty: "Orthopedic",
      location: "Sylhet",
      experience: "15 Years",
      fee: 1400,
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    },
    {
      id: 6,
      name: "Dr. Sharmeen Sultana",
      specialty: "ENT Specialist",
      location: "Barishal",
      experience: "6 Years",
      fee: 800,
      image:
        "https://images.unsplash.com/photo-1580281657527-47f249e8f4a7",
    },
    {
  id: 7,
  name: "Dr. Imran Hossain",
  specialty: "Medicine Specialist",
  location: "Dhaka",
  experience: "9 Years",
  fee: 1100,
  image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
},
{
  id: 8,
  name: "Dr. Sadia Islam",
  specialty: "Pediatrician",
  location: "Chattogram",
  experience: "11 Years",
  fee: 1000,
  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
},
{
  id: 9,
  name: "Dr. Arif Ahmed",
  specialty: "Psychiatrist",
  location: "Sylhet",
  experience: "13 Years",
  fee: 1300,
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
},
{
  id: 10,
  name: "Dr. Rima Akter",
  specialty: "Ophthalmologist",
  location: "Rajshahi",
  experience: "8 Years",
  fee: 900,
  image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4a7",
},
{
  id: 11,
  name: "Dr. Kamal Hasan",
  specialty: "Surgeon",
  location: "Dhaka",
  experience: "18 Years",
  fee: 2000,
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
},
{
  id: 12,
  name: "Dr. Mitu Rahman",
  specialty: "Dental Specialist",
  location: "Khulna",
  experience: "7 Years",
  fee: 800,
  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
},
{
  id: 13,
  name: "Dr. Hasan Mahmud",
  specialty: "Urologist",
  location: "Barishal",
  experience: "14 Years",
  fee: 1600,
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
},
{
  id: 14,
  name: "Dr. Tania Sultana",
  specialty: "Nutritionist",
  location: "Dhaka",
  experience: "6 Years",
  fee: 700,
  image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4a7",
},
{
  id: 15,
  name: "Dr. Fahim Ahmed",
  specialty: "Pulmonologist",
  location: "Comilla",
  experience: "12 Years",
  fee: 1400,
  image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
},
{
  id: 16,
  name: "Dr. Jannatul Ferdous",
  specialty: "Oncologist",
  location: "Dhaka",
  experience: "15 Years",
  fee: 1800,
  image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
},
{
  id: 17,
  name: "Dr. Saiful Islam",
  specialty: "Nephrologist",
  location: "Sylhet",
  experience: "10 Years",
  fee: 1500,
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
},
{
  id: 18,
  name: "Dr. Rashed Karim",
  specialty: "General Physician",
  location: "Dhaka",
  experience: "20 Years",
  fee: 1200,
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
},
{
  id: 19,
  name: "Dr. Ayesha Khan",
  specialty: "Allergist",
  location: "Chattogram",
  experience: "9 Years",
  fee: 1000,
  image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4a7",
},
{
  id: 20,
  name: "Dr. Nabil Hasan",
  specialty: "Emergency Medicine",
  location: "Rajshahi",
  experience: "16 Years",
  fee: 1700,
  image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
},
  ];


  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
    doctor.location.toLowerCase().includes(search.toLowerCase())
  );


  const displayedDoctors = showAll
    ? filteredDoctors
    : filteredDoctors.slice(0, 3);



  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment Submitted Successfully");

    setSelectedDoctor(null);

    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
    });
  };


  return (

    <div className="min-h-screen bg-gray-50">


      {/* HEADER */}

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-gray-800 text-center">
          🇧🇩 Find & Book Best Doctors
        </h1>

        <p className="text-gray-500 mt-3 text-center">
          Book appointments with trusted doctors in Bangladesh
        </p>


        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">

          <input
            type="text"
            placeholder="🔍 Search doctor, specialty or location..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full md:w-96 px-5 py-3 rounded-xl border"
          />


          {filteredDoctors.length > 3 && (

            <button
              onClick={()=>setShowAll(!showAll)}
              className="bg-green-600 text-white px-8 py-3 rounded-xl"
            >
              {showAll ? "Show Less" : "View More"}
            </button>

          )}

        </div>

      </div>



      {/* DOCTOR LIST */}

      <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        {displayedDoctors.map((doc)=>(

          <DoctorCard
            key={doc.id}
            doctor={doc}
            onBook={setSelectedDoctor}
            onProfile={setProfileDoctor}
          />

        ))}


      </div>



      {/* PROFILE MODAL */}

      {profileDoctor && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-2xl p-6 w-full max-w-md">


            <img
              src={profileDoctor.image}
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />


            <h2 className="text-2xl font-bold text-center mt-4">
              {profileDoctor.name}
            </h2>


            <div className="mt-4 space-y-2">

              <p>🩺 Specialty: {profileDoctor.specialty}</p>

              <p>📍 Location: {profileDoctor.location}</p>

              <p>💼 Experience: {profileDoctor.experience}</p>

              <p>💰 Fee: ৳{profileDoctor.fee}</p>

            </div>


            <button
              onClick={()=>setProfileDoctor(null)}
              className="mt-5 w-full bg-gray-800 text-white py-3 rounded-xl"
            >
              Close
            </button>


          </div>

        </div>

      )}





      {/* BOOKING MODAL */}

      {selectedDoctor && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">


          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 w-full max-w-lg"
          >

            <h2 className="text-2xl font-bold text-center text-green-700 mb-5">
              📅 Book Appointment
            </h2>


            <p className="mb-4">
              👨‍⚕️ Doctor:
              <b> {selectedDoctor.name}</b>
            </p>
            <p className="mb-4">
             📍 Location:
              <b> {selectedDoctor.location}</b>
            </p>


            <input
              required
              placeholder="Your Name"
              className="w-full border p-3 rounded-xl mb-3"
              value={formData.name}
              onChange={(e)=>setFormData({...formData,name:e.target.value})}
            />


            <input
              required
              placeholder="Phone Number"
              className="w-full border p-3 rounded-xl mb-3"
              value={formData.phone}
              onChange={(e)=>setFormData({...formData,phone:e.target.value})}
            />


            <input
              required
              type="date"
              className="w-full border p-3 rounded-xl mb-3"
              value={formData.date}
              onChange={(e)=>setFormData({...formData,date:e.target.value})}
            />


            <select
              required
              className="w-full border p-3 rounded-xl mb-4"
              value={formData.time}
              onChange={(e)=>setFormData({...formData,time:e.target.value})}
            >

              <option value="">Select Time</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>3:00 PM</option>
              <option>6:00 PM</option>

            </select>


            <div className="flex gap-3">

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-xl"
              >
                Confirm
              </button>


              <button
                type="button"
                onClick={()=>setSelectedDoctor(null)}
                className="w-full border py-3 rounded-xl"
              >
                Cancel
              </button>

            </div>


          </form>


        </div>

      )}


    </div>

  );
}