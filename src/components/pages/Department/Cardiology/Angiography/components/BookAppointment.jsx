import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaUser,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";


export default function BookAppointment() {


  const appointmentData = {
    title: "Book Your Angiography Appointment",
    description:
      "Schedule your consultation with our experienced cardiologists and get advanced cardiac care.",
  };


  return (

    <section className="py-20 bg-red-600">


      <div className="max-w-7xl mx-auto px-5">


        <motion.div

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.7,
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
          grid
          md:grid-cols-2
          gap-10
          items-center
          "

        >



          {/* Left Content */}

          <div>


            <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">

              Appointment

            </span>



            <h2 className="
              mt-5
              text-3xl
              md:text-4xl
              font-bold
              text-gray-800
            ">

              {appointmentData.title}

            </h2>



            <p className="
              mt-5
              text-gray-600
              leading-8
            ">

              {appointmentData.description}

            </p>



            <div className="mt-8 space-y-4">


              <div className="flex items-center gap-3 text-gray-700">

                <FaCalendarCheck className="text-red-600"/>

                Flexible Appointment Schedule

              </div>



              <div className="flex items-center gap-3 text-gray-700">

                <FaUser className="text-red-600"/>

                Expert Cardiologists

              </div>



              <div className="flex items-center gap-3 text-gray-700">

                <FaPhone className="text-red-600"/>

                24/7 Patient Support

              </div>



            </div>


          </div>





          {/* Form */}

          <div className="bg-gray-50 rounded-2xl p-6">


            <h3 className="text-2xl font-bold text-gray-800 mb-6">

              Request Appointment

            </h3>



            <form className="space-y-4">


              <div className="flex items-center gap-3 bg-white rounded-xl px-4">

                <FaUser className="text-gray-400"/>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                  w-full
                  py-3
                  outline-none
                  "
                />

              </div>




              <div className="flex items-center gap-3 bg-white rounded-xl px-4">

                <FaPhone className="text-gray-400"/>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="
                  w-full
                  py-3
                  outline-none
                  "
                />

              </div>




              <div className="flex items-center gap-3 bg-white rounded-xl px-4">

                <FaEnvelope className="text-gray-400"/>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                  w-full
                  py-3
                  outline-none
                  "
                />

              </div>




              <textarea

                placeholder="Your Message"

                rows="4"

                className="
                w-full
                bg-white
                rounded-xl
                p-4
                outline-none
                "

              />





              <button

                type="submit"

                className="
                w-full
                bg-red-600
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:bg-red-700
                transition
                "

              >

                Book Angiography Test

              </button>



            </form>



          </div>



        </motion.div>



      </div>


    </section>

  );

}