import React from "react";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const AppointmentForm = () => {

  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">


      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">


          <span className="
            inline-block
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            Book Appointment
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Schedule Your Whitening Consultation
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            Fill out the form and our dental team will contact you to confirm
            your appointment.
          </p>


        </div>




        {/* Main Area */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        ">


          {/* Contact Info */}
          <div className="
            bg-blue-600
            text-white
            rounded-3xl
            p-6
            sm:p-8
          ">


            <h3 className="
              text-2xl
              font-bold
            ">
              Contact Information
            </h3>


            <p className="
              mt-3
              text-blue-100
            ">
              Have questions? Reach out to our dental care team.
            </p>



            <div className="mt-8 space-y-6">


              <div className="flex gap-4 items-center">

                <div className="
                  bg-white/20
                  p-3
                  rounded-xl
                ">
                  <Phone size={22}/>
                </div>

                <div>
                  <p className="text-blue-100 text-sm">
                    Phone
                  </p>

                  <p className="font-semibold">
                    +1 234 567 890
                  </p>
                </div>

              </div>



              <div className="flex gap-4 items-center">

                <div className="
                  bg-white/20
                  p-3
                  rounded-xl
                ">
                  <Mail size={22}/>
                </div>

                <div>
                  <p className="text-blue-100 text-sm">
                    Email
                  </p>

                  <p className="font-semibold">
                    info@clinic.com
                  </p>
                </div>

              </div>



              <div className="flex gap-4 items-center">

                <div className="
                  bg-white/20
                  p-3
                  rounded-xl
                ">
                  <MapPin size={22}/>
                </div>

                <div>
                  <p className="text-blue-100 text-sm">
                    Location
                  </p>

                  <p className="font-semibold">
                    New York Dental Clinic
                  </p>
                </div>

              </div>



              <div className="flex gap-4 items-center">

                <div className="
                  bg-white/20
                  p-3
                  rounded-xl
                ">
                  <Clock3 size={22}/>
                </div>

                <div>
                  <p className="text-blue-100 text-sm">
                    Working Hours
                  </p>

                  <p className="font-semibold">
                    Mon - Sat (9AM - 6PM)
                  </p>
                </div>

              </div>


            </div>


          </div>





          {/* Form */}
          <div className="
            lg:col-span-2
            bg-white
            rounded-3xl
            p-6
            sm:p-8
            shadow-sm
            border
            border-gray-100
          ">


            <form className="space-y-6">


              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              ">


                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />


                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />


              </div>




              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              ">


                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                />



                <select
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                >
                  <option>
                    Select Treatment
                  </option>
                  <option>
                    In-Clinic Whitening
                  </option>
                  <option>
                    Home Whitening Kit
                  </option>
                  <option>
                    Premium Whitening
                  </option>
                </select>


              </div>




              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
              ">


                <div className="relative">

                  <CalendarDays
                    className="
                      absolute
                      left-3
                      top-3.5
                      text-gray-400
                    "
                    size={20}
                  />

                  <input
                    type="date"
                    className="
                      w-full
                      pl-10
                      px-4
                      py-3
                      rounded-xl
                      border
                      border-gray-200
                    "
                  />

                </div>



                <input
                  type="time"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                  "
                />


              </div>




              <textarea
                rows="5"
                placeholder="Your Message"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />





              <button
                type="submit"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  sm:w-auto
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-8
                  py-3.5
                  rounded-xl
                  font-semibold
                  transition
                "
              >

                <Send size={20}/>
                Submit Appointment

              </button>



            </form>


          </div>



        </div>


      </div>


    </section>
  );
};

export default AppointmentForm;