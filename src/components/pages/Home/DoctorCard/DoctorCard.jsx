import { useNavigate } from "react-router-dom";

export default function DoctorCard({ doctor, onProfile }) {

  const navigate = useNavigate();


  const handleBook = () => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");


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

    <div className="
      bg-white
      rounded-2xl
      shadow-md
      hover:shadow-xl
      transition
      duration-300
      p-4
      flex
      flex-col
      gap-3
    ">


      {/* TOP */}

      <div className="
        flex
        items-center
        gap-3
      ">


        <img
          src={doctor.image}
          alt={doctor.name}
          className="
            w-20
            h-20
            rounded-full
            object-cover
            border-4
            border-green-100
          "
        />



        <div className="flex-1">


          <h2 className="
            text-base
            font-bold
            text-gray-800
            leading-tight
          ">

            {doctor.name}

          </h2>



          <p className="
            text-sm
            text-green-600
            font-semibold
            mt-1
          ">

            🩺 {doctor.specialty}

          </p>



          <div className="
            flex
            items-center
            gap-1
            mt-1
          ">

            <span className="text-yellow-500 text-sm">
              ⭐⭐⭐⭐⭐
            </span>

            <span className="text-xs text-gray-500">
              (5.0)
            </span>


          </div>


        </div>


      </div>





      {/* DETAILS */}

      <div className="
        bg-gray-50
        rounded-xl
        p-3
        space-y-2
        text-sm
        text-gray-700
      ">


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
          💰 Fee:
          <span className="text-green-600 font-bold ml-1">
            BDT ৳{doctor.fee}
          </span>
        </p>


      </div>






      {/* BUTTONS */}

      <div className="
        flex
        gap-2
      ">


        <button
          onClick={handleBook}
          className="
            flex-1
            bg-green-600
            hover:bg-green-700
            text-white
            py-2.5
            rounded-xl
            text-sm
            font-semibold
            transition
          "
        >

          Book Now

        </button>




        <button
          onClick={() => onProfile(doctor)}
          className="
            flex-1
            bg-gray-100
            hover:bg-gray-200
            text-gray-700
            py-2.5
            rounded-xl
            text-sm
            font-semibold
            transition
          "
        >

          View Profile

        </button>


      </div>


    </div>

  );
}