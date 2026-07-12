import { motion } from "framer-motion";
import {
  FaStar,
  FaUserMd,
  FaGraduationCap,
  FaBriefcaseMedical,
} from "react-icons/fa";

import { doctors } from "../components/data/doctors";


export default function DoctorSection() {


  return (

    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">


        {/* Header */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="text-center max-w-3xl mx-auto"

        >

          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            Our Specialists
          </span>


          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            Meet Our Cardiologists
          </h2>


          <p className="mt-5 text-gray-600 leading-8">
            Our expert cardiologists provide advanced ECG analysis,
            consultation, and complete heart care.
          </p>


        </motion.div>




        {/* Doctor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">


          {doctors.map((doctor, index) => (


            <motion.div

              key={doctor.id}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -10,
              }}

              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"

            >



              {/* Doctor Image */}
              <div className="relative">


                <img

                  src={doctor.image}

                  alt={doctor.name}

                  className="w-full h-72 object-cover"

                />


                <span className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">

                  Cardiologist

                </span>


              </div>





              {/* Doctor Info */}
              <div className="p-6">


                <h3 className="text-2xl font-bold text-gray-800">

                  {doctor.name}

                </h3>



                <p className="text-blue-600 font-semibold mt-1">

                  {doctor.role}

                </p>



                <p className="text-gray-500 text-sm mt-2">

                  {doctor.specialization}

                </p>




                {/* Rating */}
                <div className="flex items-center gap-1 mt-4 text-yellow-400">


                  {[1,2,3,4,5].map((star)=>(

                    <FaStar key={star}/>

                  ))}


                  <span className="text-gray-600 ml-2">

                    {doctor.rating}

                  </span>


                </div>





                {/* Details */}
                <div className="mt-5 space-y-3 text-gray-600">


                  <p className="flex items-center gap-3">

                    <FaUserMd className="text-blue-600"/>

                    {doctor.experience}

                  </p>



                  <p className="flex items-center gap-3">

                    <FaGraduationCap className="text-blue-600"/>

                    {doctor.education}

                  </p>



                  <p className="flex items-center gap-3">

                    <FaBriefcaseMedical className="text-blue-600"/>

                    {doctor.patients}

                  </p>


                </div>





                {/* Button */}
                <button

                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"

                >

                  View Profile

                </button>



              </div>



            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

}