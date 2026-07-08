import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import doctors from "../data/data";


const days = [
  { label: "MON", date: 6 },
  { label: "TUE", date: 7 },
  { label: "WED", date: 8 },
  { label: "THU", date: 9 },
  { label: "FRI", date: 10 },
  { label: "SAT", date: 11 },
];


const slots = [
  "10:30 AM",
  "11:30 AM",
  "12:30 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];


export default function Appointment() {


  const { id } = useParams();

  const navigate = useNavigate();



  const doctor = doctors.find(
    (doc) => doc.id === Number(id)
  );



  const [selectedDay, setSelectedDay] = useState(null);

  const [selectedTime, setSelectedTime] = useState(null);



  const [patient, setPatient] = useState({

    name: "",
    email: "",
    phone: "",

  });



  const [appointments] = useState(

    JSON.parse(
      localStorage.getItem("appointments")
    ) || []

  );




  if (!doctor) {

    return (

      <h2 className="text-center mt-10 text-red-500">

        Doctor Not Found

      </h2>

    );

  }





  const isBooked = (time) => {


    return appointments.some(

      (item) =>

        item.doctorId === doctor.id &&

        item.day === selectedDay?.date &&

        item.time === time

    );


  };






  const confirmAppointment = () => {



    if (

      !patient.name ||

      !patient.email ||

      !patient.phone ||

      !selectedDay ||

      !selectedTime

    ) {


      alert("Please fill all information");

      return;


    }





    const bookingId =

      "BOOK-" + Date.now();






    navigate("/payment", {


      state: {


        doctor,

        patient,

        selectedDay,

        selectedTime,

        bookingId,


      },


    });



  };







  return (


    <div className="min-h-screen bg-gray-100 p-5">





      <button


        onClick={() => navigate(-1)}


        className="

        mb-5 bg-white shadow px-5 py-2

        rounded-lg hover:bg-gray-200

        "

      >

        ← Back


      </button>








      <div className="

      max-w-6xl mx-auto

      grid md:grid-cols-2 gap-8

      ">





        {/* Doctor Details */}



        <div className="

        bg-white rounded-2xl shadow p-6

        ">



          <img


            src={doctor.image}

            alt={doctor.name}


            className="

            w-32 h-32 rounded-full

            mx-auto object-cover

            border-4 border-blue-500

            "


          />




          <h1 className="

          text-2xl font-bold text-center mt-5

          ">

            {doctor.name}


          </h1>





          <p className="

          text-center text-blue-600 font-semibold

          ">

            {doctor.specialty}


          </p>






          <div className="

          mt-6 space-y-3 text-gray-700

          ">



            <p>
              Qualification:
              <b> {doctor.qualification}</b>
            </p>


            <p>
              Experience:
              <b> {doctor.experience}</b>
            </p>


            <p>
              Hospital:
              <b> {doctor.hospital}</b>
            </p>


            <p>
              Location:
              <b> {doctor.location}</b>
            </p>


            <p>
              Consultation Fee:
              <b className="text-green-600">
                ৳{doctor.consultationFee}
              </b>
            </p>



          </div>



        </div>









        {/* Appointment Form */}



        <div className="

        bg-white rounded-2xl shadow p-6

        ">



          <h2 className="

          text-2xl font-bold mb-5

          ">

            Book Appointment


          </h2>






          <input

            placeholder="Patient Name"


            className="

            w-full px-4 py-3 border rounded-xl

            "


            onChange={(e)=>

              setPatient({

                ...patient,

                name:e.target.value

              })

            }


          />





          <input


            placeholder="Email Address"


            type="email"


            className="

            w-full mt-3 px-4 py-3 border rounded-xl

            "


            onChange={(e)=>

              setPatient({

                ...patient,

                email:e.target.value

              })

            }


          />





          <input


            placeholder="Phone Number"


            type="tel"


            className="

            w-full mt-3 px-4 py-3 border rounded-xl

            "


            onChange={(e)=>

              setPatient({

                ...patient,

                phone:e.target.value

              })

            }


          />








          <h3 className="font-bold mt-6">

            Select Day

          </h3>





          <div className="flex flex-wrap gap-2 mt-3">


            {

              days.map((day)=>(


                <button


                  key={day.date}


                  onClick={()=>{

                    setSelectedDay(day);

                    setSelectedTime(null);

                  }}



                  className={`

                  px-4 py-2 rounded-lg border

                  ${

                    selectedDay?.date === day.date

                    ?

                    "bg-blue-600 text-white"

                    :

                    ""

                  }

                  `}


                >


                  {day.label}

                  <br/>

                  {day.date}


                </button>



              ))

            }


          </div>







          <h3 className="font-bold mt-6">

            Select Time

          </h3>





          <div className="flex flex-wrap gap-2 mt-3">



            {

              slots.map((time)=>(



                <button



                  key={time}



                  disabled={!selectedDay || isBooked(time)}



                  onClick={()=>setSelectedTime(time)}



                  className={`

                  px-4 py-2 rounded-full border

                  ${

                    selectedTime === time

                    ?

                    "bg-blue-600 text-white"

                    :

                    ""

                  }



                  ${

                    isBooked(time)

                    ?

                    "bg-gray-300 cursor-not-allowed"

                    :

                    ""

                  }


                  `}


                >



                  {

                    isBooked(time)

                    ?

                    `${time} Booked`

                    :

                    time

                  }



                </button>


              ))

            }



          </div>








          <button


            onClick={confirmAppointment}



            className="

            w-full mt-8 bg-blue-600

            text-white py-3 rounded-xl

            hover:bg-blue-700

            "


          >


            Confirm Appointment



          </button>





        </div>




      </div>









      {/* Doctor About Section */}



      <div className="

      max-w-6xl mx-auto mt-8

      bg-white rounded-2xl shadow p-6

      ">



        <h2 className="

        text-2xl font-bold mb-4

        ">


          About {doctor.name}


        </h2>





        <p className="text-gray-600 leading-7">


          {doctor.name} is an experienced

          <b> {doctor.specialty}</b>

          specialist with

          <b> {doctor.experience}</b>

          years of professional medical experience.

          The doctor completed

          <b> {doctor.qualification}</b>

          and provides healthcare services at

          <b> {doctor.hospital}</b>

          located in

          <b> {doctor.location}</b>.



        </p>





        <p className="mt-4 text-gray-600 leading-7">


          Patients can easily book an appointment

          with {doctor.name} by selecting a suitable

          date and time slot.

          Consultation fee is

          <b className="text-green-600">

            ৳{doctor.consultationFee}

          </b>.



        </p>



      </div>





    </div>


  );


}