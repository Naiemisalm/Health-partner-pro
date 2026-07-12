import { motion } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaHeartbeat,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function BookAppointment() {

  return (

    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">

      <div className="max-w-7xl mx-auto px-5">


        {/* Header */}
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

          className="text-center text-white max-w-3xl mx-auto"

        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Book Your ECG Appointment
          </h2>

          <p className="mt-5 text-blue-100 leading-8">
            Schedule your ECG test with our expert cardiac team and take care
            of your heart health today.
          </p>

        </motion.div>



        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mt-14">


          {/* Contact Card */}
          <motion.div

            initial={{
              opacity:0,
              x:-50,
            }}

            whileInView={{
              opacity:1,
              x:0,
            }}

            transition={{
              duration:0.7,
            }}

            viewport={{
              once:true,
            }}

            className="bg-white rounded-3xl p-8 shadow-xl"

          >

            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-3xl">
              <FaHeartbeat/>
            </div>


            <h3 className="text-2xl font-bold text-gray-800 mt-6">
              ECG Care Center
            </h3>


            <p className="text-gray-600 mt-3">
              Get professional cardiac testing and consultation from our
              experienced medical team.
            </p>



            <div className="mt-8 space-y-5 text-gray-700">


              <p className="flex gap-3 items-center">
                <FaPhone className="text-blue-600"/>
                +880 1712-345678
              </p>


              <p className="flex gap-3 items-center">
                <FaEnvelope className="text-blue-600"/>
                info@hospital.com
              </p>


              <p className="flex gap-3 items-center">
                <FaMapMarkerAlt className="text-blue-600"/>
                Dhaka, Bangladesh
              </p>


            </div>


          </motion.div>




          {/* Form */}
          <motion.div

            initial={{
              opacity:0,
              x:50,
            }}

            whileInView={{
              opacity:1,
              x:0,
            }}

            transition={{
              duration:0.7,
            }}

            viewport={{
              once:true,
            }}

            className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-xl"

          >


            <form className="grid md:grid-cols-2 gap-6">


              {/* Name */}
              <div>

                <label className="font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="relative mt-2">

                  <FaUser className="absolute left-4 top-4 text-gray-400"/>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                </div>

              </div>




              {/* Phone */}
              <div>

                <label className="font-semibold text-gray-700">
                  Phone Number
                </label>

                <div className="relative mt-2">

                  <FaPhone className="absolute left-4 top-4 text-gray-400"/>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                </div>

              </div>




              {/* Email */}
              <div>

                <label className="font-semibold text-gray-700">
                  Email
                </label>

                <div className="relative mt-2">

                  <FaEnvelope className="absolute left-4 top-4 text-gray-400"/>

                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                </div>

              </div>




              {/* Date */}
              <div>

                <label className="font-semibold text-gray-700">
                  Appointment Date
                </label>

                <div className="relative mt-2">

                  <FaCalendarAlt className="absolute left-4 top-4 text-gray-400"/>

                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                </div>

              </div>




              {/* Service */}
              <div className="md:col-span-2">

                <label className="font-semibold text-gray-700">
                  Select Service
                </label>


                <select
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                >

                  <option>
                    Resting ECG
                  </option>

                  <option>
                    Stress ECG (TMT)
                  </option>

                  <option>
                    Holter Monitoring
                  </option>

                  <option>
                    ECG Consultation
                  </option>


                </select>

              </div>




              {/* Message */}
              <div className="md:col-span-2">

                <label className="font-semibold text-gray-700">
                  Message
                </label>


                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>


              </div>




              {/* Button */}
              <div className="md:col-span-2">

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition"
                >
                  Confirm Appointment
                </button>

              </div>


            </form>


          </motion.div>


        </div>


      </div>

    </section>

  );
}