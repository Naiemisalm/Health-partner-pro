import { useNavigate } from "react-router-dom";

export default function DoctorCard({ doctor, onProfile }) {

  const navigate = useNavigate();


  const handleBook = () => {

    const isLoggedIn = localStorage.getItem(
      "isLoggedIn"
    );


    if (isLoggedIn === "true") {

      navigate(`/appointment/${doctor.id}`);

    } else {

      alert("Please login first to book appointment");


      navigate("/login", {

        state: {
          from: `/appointment/${doctor.id}`
        }

      });

    }

  };


  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col gap-4">


      {/* TOP SECTION */}

      <div className="flex items-start gap-4">


        {/* IMAGE */}

        <div>

          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-green-100"
          />

        </div>




        {/* DOCTOR INFO */}

        <div className="flex-1">


          <h2 className="text-lg font-bold text-gray-800">

            {doctor.name}

          </h2>



          <p className="text-sm text-green-600 font-semibold mt-1">

            🩺 {doctor.specialty}

          </p>



          <div className="flex items-center gap-1 mt-2">

            <span className="text-yellow-500">
              ⭐⭐⭐⭐⭐
            </span>


            <span className="text-xs text-gray-500">
              (5.0)
            </span>


          </div>


        </div>


      </div>






      {/* DETAILS */}

      <div className="bg-gray-50 rounded-xl p-3 space-y-2 text-sm text-gray-700">


        <p>
          📍 Location:

          <span className="font-medium ml-1">
            {doctor.location}
          </span>

        </p>



        <p>
          💼 Experience:

          <span className="font-medium ml-1">
            {doctor.experience}
          </span>

        </p>



        <p>
          💰 Consult Fee:

          <span className="text-green-600 font-bold ml-1">
            BDT ৳{doctor.fee}
          </span>

        </p>


      </div>







      {/* BUTTONS */}

      <div className="flex gap-3 mt-2">


        <button

          onClick={handleBook}

          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl font-medium transition"

        >

          Book Now

        </button>





        <button

          onClick={() => onProfile(doctor)}

          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-xl font-medium"

        >

          View Profile

        </button>



      </div>



    </div>
  );
}