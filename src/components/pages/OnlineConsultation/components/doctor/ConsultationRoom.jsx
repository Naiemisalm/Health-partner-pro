import React from "react";
import ChatBox from "./ChatBox";
import ConsultationNotes from "./ConsultationNotes";


const ConsultationRoom = ({ doctor, onBack }) => {


  return (

    <div className="space-y-6">


      {/* Header */}

      <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">


        <div className="flex items-center gap-4">


          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#00C2CB]"
          />


          <div>

            <h2 className="text-xl font-bold text-[#243b5a]">
              {doctor.name}
            </h2>


            <p className="text-[#00C2CB]">
              {doctor.specialty}
            </p>


            <p className="text-gray-500 text-sm">
              ⭐ {doctor.rating} | {doctor.experience}
            </p>

          </div>


        </div>




        <button
          onClick={onBack}
          className="border border-[#00C2CB] text-[#00C2CB] px-5 py-2 rounded-xl"
        >
          Back To Doctors
        </button>


      </div>





      {/* Main Area */}

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">



        {/* Video Section */}

        <div className="xl:col-span-3 bg-white rounded-2xl shadow-sm p-5">


          <div className="bg-[#111827] h-[350px] sm:h-[500px] rounded-2xl flex items-center justify-center">


            <div className="text-center text-white">


              <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto flex items-center justify-center text-4xl">
                👨‍⚕️
              </div>


              <h3 className="mt-5 text-xl font-semibold">
                Video Consultation
              </h3>


              <p className="text-gray-300 mt-2">
                Waiting for patient connection...
              </p>


            </div>


          </div>





          {/* Call Buttons */}

          <div className="flex justify-center gap-4 mt-5">


            <button className="w-12 h-12 rounded-full bg-gray-100">
              🎤
            </button>


            <button className="w-12 h-12 rounded-full bg-gray-100">
              📹
            </button>


            <button className="w-12 h-12 rounded-full bg-red-500 text-white">
              ☎
            </button>


          </div>



        </div>






        {/* Chat */}

        <div>

          <ChatBox />

        </div>



      </div>







      {/* Consultation Notes */}

      <div className="grid grid-cols-1 gap-6">

        <ConsultationNotes />

      </div>



    </div>

  );

};


export default ConsultationRoom;