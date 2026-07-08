import { Link } from "react-router-dom";
import {
  FaBrain,
  FaHeartbeat,
  FaBone,
  FaUserMd,
  FaTooth,
  FaEye,
  FaBaby,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const specialities = [
  {
    name: "Neurologists",
    icon: <FaBrain />,
    color: "text-purple-500",
    path: "/neurologists",
  },
  {
    name: "Cardiologist",
    icon: <FaHeartbeat />,
    color: "text-red-500",
    path: "/cardiologist",
  },
  {
    name: "Orthopedic",
    icon: <FaBone />,
    color: "text-gray-600",
    path: "/orthopedic",
  },
  {
    name: "General Physician",
    icon: <FaUserMd />,
    color: "text-teal-600",
    path: "/general-physician",
  },
  {
    name: "Dentistry",
    icon: <FaTooth />,
    color: "text-yellow-600",
    path: "/dentistry",
  },
  {
    name: "Eye Specialist",
    icon: <FaEye />,
    color: "text-blue-500",
    path: "/eye-specialist",
  },
  {
    name: "Pediatrician",
    icon: <FaBaby />,
    color: "text-pink-500",
    path: "/pediatrician",
  },
];

export default function Speciality() {
  return (
    <section className="bg-[#f1fffd] py-10">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Find Doctors by Speciality
        </h2>


        <div className="flex items-center gap-5">

          {/* Left Arrow */}
          <button className="hidden md:flex w-12 h-12 rounded-xl bg-white shadow items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition">
            <FaArrowLeft />
          </button>


          {/* Cards */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">

            {specialities.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="
                min-w-[150px]
                h-[150px]
                bg-white
                border
                border-gray-200
                rounded-2xl
                flex
                flex-col
                items-center
                justify-center
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                cursor-pointer
                "
              >

                <div className={`text-5xl ${item.color}`}>
                  {item.icon}
                </div>


                <h3 className="mt-5 text-sm font-semibold text-gray-700 text-center">
                  {item.name}
                </h3>

              </Link>
            ))}

          </div>


          {/* Right Arrow */}
          <button className="hidden md:flex w-12 h-12 rounded-xl bg-white shadow items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition">
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}