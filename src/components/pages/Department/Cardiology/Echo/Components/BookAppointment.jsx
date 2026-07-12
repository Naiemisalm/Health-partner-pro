import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaUser,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";


export default function BookAppointment() {


  return (

    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">


      <div className="max-w-6xl mx-auto px-5">



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

          className="
            bg-white
            rounded-3xl
            shadow-xl
            p-8
            md:p-12
          "

        >



          <div className="text-center">


            <FaCalendarCheck className="
              text-5xl
              text-blue-600
              mx-auto
            "/>



            <h2 className="
              text-3xl
              md:text-4xl
              font-bold
              mt-5
              text-gray-800
            ">

              Book Your Echo Appointment

            </h2>



            <p className="
              text-gray-600
              mt-3
            ">

              Schedule your echocardiography test with our expert cardiac team.

            </p>


          </div>







          <form className="
            grid
            md:grid-cols-2
            gap-6
            mt-10
          ">



            {/* Name */}

            <div className="relative">


              <FaUser className="
                absolute
                left-4
                top-4
                text-blue-600
              "/>



              <input

                type="text"

                placeholder="Your Name"

                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "

              />


            </div>








            {/* Phone */}

            <div className="relative">


              <FaPhone className="
                absolute
                left-4
                top-4
                text-blue-600
              "/>



              <input

                type="text"

                placeholder="Phone Number"

                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "

              />


            </div>








            {/* Email */}

            <div className="relative">


              <FaEnvelope className="
                absolute
                left-4
                top-4
                text-blue-600
              "/>



              <input

                type="email"

                placeholder="Email Address"

                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "

              />


            </div>








            {/* Date */}

            <div>


              <input

                type="date"

                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  px-4
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "

              />


            </div>








            {/* Message */}

            <div className="md:col-span-2">


              <textarea

                rows="4"

                placeholder="Your Message"

                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  px-4
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "

              />



            </div>








            {/* Button */}

            <div className="md:col-span-2 text-center">


              <button

                type="submit"

                className="
                  bg-blue-600
                  text-white
                  px-10
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-blue-700
                  transition
                "

              >

                Submit Appointment

              </button>


            </div>




          </form>





        </motion.div>




      </div>


    </section>

  );

}