import React from "react";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Brain,
} from "lucide-react";

const AppointmentForm = () => {

  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">


      <div className="max-w-7xl mx-auto">


        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">


          <span className="
            inline-flex
            items-center
            gap-2
            bg-blue-100
            text-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            <Brain size={16}/>
            Neurology Appointment
          </span>


          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">
            Book Your Stroke Consultation
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">
            Schedule an appointment with our neurologist for expert stroke
            evaluation and treatment guidance.
          </p>


        </div>





        {/* Content */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        ">



          {/* Contact Card */}
          <div className="
            bg-blue-600
            rounded-3xl
            p-6
            sm:p-8
            text-white
          ">


            <h3 className="
              text-2xl
              font-bold
            ">
              Contact Our Team
            </h3>


            <p className="
              mt-3
              text-blue-100
            ">
              Need urgent help or have questions about stroke care?
            </p>



            <div className="mt-8 space-y-6">


              <div className="flex gap-4 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                ">
                  <Phone size={22}/>
                </div>

                <div>
                  <p className="text-blue-100 text-sm">
                    Emergency Hotline
                  </p>
                  <p className="font-semibold">
                    +1 234 567 890
                  </p>
                </div>

              </div>




              <div className="flex gap-4 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                ">
                  <Mail size={22}/>
                </div>

                <div>
                  <p className="text-blue-100 text-sm">
                    Email
                  </p>
                  <p className="font-semibold">
                    neurology@clinic.com
                  </p>
                </div>

              </div>




              <div className="flex gap-4 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                ">
                  <MapPin size={22}/>
                </div>

                <div>
                  <p className="text-blue-100 text-sm">
                    Location
                  </p>

                  <p className="font-semibold">
                    Neurology Department
                  </p>
                </div>

              </div>




              <div className="flex gap-4 items-center">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                ">
                  <Clock3 size={22}/>
                </div>


                <div>
                  <p className="text-blue-100 text-sm">
                    Available Time
                  </p>

                  <p className="font-semibold">
                    24/7 Emergency Support
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
            sm:p-10
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
                  placeholder="Patient Name"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    focus:ring-2
                    focus:ring-blue-500
                    outline-none
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
                    focus:ring-2
                    focus:ring-blue-500
                    outline-none
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
                    focus:ring-2
                    focus:ring-blue-500
                    outline-none
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
                    focus:ring-2
                    focus:ring-blue-500
                    outline-none
                  "
                >

                  <option>
                    Select Service
                  </option>

                  <option>
                    Stroke Consultation
                  </option>

                  <option>
                    Neurological Checkup
                  </option>

                  <option>
                    Follow-up Appointment
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
                    size={20}
                    className="
                      absolute
                      left-3
                      top-3.5
                      text-gray-400
                    "
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
                placeholder="Describe symptoms or medical history"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                "
              />





              <button
                type="submit"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
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
                Request Appointment

              </button>



            </form>


          </div>


        </div>


      </div>


    </section>
  );
};

export default AppointmentForm;