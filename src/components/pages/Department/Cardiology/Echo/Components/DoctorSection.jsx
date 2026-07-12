import { motion } from "framer-motion";
import { echoDoctors } from "../Components/data/echoDoctors";
import { FaStar, FaUserMd } from "react-icons/fa";


export default function DoctorSection() {


  return (

    <section className="py-20 bg-gray-50">


      <div className="max-w-7xl mx-auto px-5">



        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.5,
          }}

          viewport={{
            once:true,
          }}

          className="text-center"

        >


          <span className="
            bg-green-100
            text-green-600
            px-4
            py-2
            rounded-full
            font-semibold
          ">

            Our Echo Specialists

          </span>



          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-5
            text-gray-800
          ">

            Meet Our Expert Cardiologists

          </h2>



          <p className="
            text-gray-600
            mt-4
          ">

            Experienced doctors providing accurate Echo diagnosis and cardiac care.

          </p>


        </motion.div>







        {/* Doctors */}

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-12
        ">


          {
            echoDoctors.map((doctor,index)=>(


              <motion.div


                key={doctor.id}


                initial={{
                  opacity:0,
                  y:40,
                }}


                whileInView={{
                  opacity:1,
                  y:0,
                }}


                transition={{
                  delay:index*0.1,
                }}


                viewport={{
                  once:true,
                }}



                className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  overflow-hidden
                  hover:shadow-xl
                  transition
                "


              >



                {/* Image */}

                <div className="
                  h-64
                  bg-gray-200
                  overflow-hidden
                ">


                  <img

                    src={doctor.image}

                    alt={doctor.name}

                    className="
                      w-full
                      h-full
                      object-cover
                    "

                  />


                </div>







                {/* Details */}

                <div className="p-6">


                  <div className="
                    flex
                    items-center
                    gap-2
                    text-blue-600
                  ">

                    <FaUserMd/>

                    <span>
                      {doctor.role}
                    </span>

                  </div>




                  <h3 className="
                    text-2xl
                    font-bold
                    mt-3
                  ">

                    {doctor.name}

                  </h3>




                  <p className="
                    text-gray-600
                    mt-2
                  ">

                    {doctor.specialization}

                  </p>




                  <p className="
                    text-sm
                    text-gray-500
                    mt-3
                  ">

                    {doctor.experience}

                  </p>





                  <div className="
                    flex
                    items-center
                    gap-2
                    mt-4
                  ">


                    <FaStar className="text-yellow-400"/>


                    <span className="font-semibold">

                      {doctor.rating}

                    </span>


                    <span className="text-gray-500 text-sm">

                      ({doctor.patients})

                    </span>


                  </div>



                  <p className="
                    text-sm
                    text-gray-600
                    mt-4
                    leading-6
                  ">

                    {doctor.about}

                  </p>



                </div>



              </motion.div>


            ))
          }



        </div>




      </div>


    </section>

  );

}