import React from "react";
import { Link } from "react-router-dom";


const DoctorCard = ({ doctor, onSelect }) => {

  return (

    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-6">


      {/* Doctor Image */}

      <div className="flex justify-center">

        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-[#00C2CB]"
        />

      </div>





      {/* Doctor Name & Specialty */}

      <div className="text-center mt-5">


        <h3 className="text-xl font-bold text-[#243b5a]">
          {doctor.name}
        </h3>


        <p className="text-[#00C2CB] font-medium mt-1">
          {doctor.specialty}
        </p>


      </div>






      {/* Doctor Details */}

      <div className="mt-5 space-y-3 text-gray-600 text-sm">


        <div className="flex justify-between">

          <span>
            Experience
          </span>

          <span className="font-semibold text-[#243b5a]">
            {doctor.experience}
          </span>

        </div>




        <div className="flex justify-between">

          <span>
            Rating
          </span>

          <span className="font-semibold text-yellow-500">
            ⭐ {doctor.rating}
          </span>

        </div>





        <div className="flex justify-between">

          <span>
            Consultation Fee
          </span>

          <span className="font-semibold text-[#243b5a]">
            {doctor.fee}
          </span>

        </div>





        <div className="flex justify-between items-center">

          <span>
            Status
          </span>


          {
            doctor.available ?

            <span className="text-green-600 font-semibold">
              ● Available
            </span>

            :

            <span className="text-red-500 font-semibold">
              ● Offline
            </span>

          }


        </div>


      </div>








      {/* Buttons */}

      <div className="flex gap-3 mt-6">


        <button

          onClick={() => onSelect(doctor)}

          disabled={!doctor.available}

          className={`
            flex-1 py-3 rounded-xl text-white font-semibold transition

            ${
              doctor.available
              ? "bg-[#00C2CB] hover:bg-[#00AEB5]"
              : "bg-gray-400 cursor-not-allowed"
            }
          `}

        >

          Consult Now

        </button>





        <Link

          to={`/doctor-profile/${doctor.id}`}

          className="
          flex-1 
          text-center 
          py-3 
          rounded-xl 
          border 
          border-[#00C2CB] 
          text-[#00C2CB]
          hover:bg-[#00C2CB]
          hover:text-white
          transition
          "

        >

          View Profile

        </Link>



      </div>



    </div>

  );

};


export default DoctorCard;