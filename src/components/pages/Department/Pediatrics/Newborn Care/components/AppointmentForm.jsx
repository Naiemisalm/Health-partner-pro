import React from "react";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Baby,
} from "lucide-react";


const AppointmentForm = () => {


  return (

    <section
      className="
        py-16
        sm:py-20
        bg-gray-50
        px-4
        sm:px-6
        lg:px-8
      "
    >


      <div className="max-w-7xl mx-auto">





        {/* Header */}

        <div
          className="
            max-w-3xl
            mx-auto
            text-center
            mb-12
          "
        >


          <span
            className="
              inline-flex
              items-center
              gap-2
              bg-pink-100
              text-pink-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            <Baby size={16}/>
            Newborn Care Appointment
          </span>





          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
            "
          >
            Book An Appointment For Your Baby
          </h2>





          <p
            className="
              mt-4
              text-gray-600
              text-base
              sm:text-lg
            "
          >
            Schedule a consultation with our experienced pediatric specialist
            for newborn healthcare and guidance.
          </p>


        </div>









        {/* Content */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >





          {/* Contact Info */}

          <div
            className="
              bg-pink-600
              rounded-3xl
              p-6
              sm:p-8
              text-white
            "
          >


            <h3
              className="
                text-2xl
                font-bold
              "
            >
              Contact Us
            </h3>




            <p
              className="
                mt-3
                text-pink-100
              "
            >
              Get expert newborn care support from our pediatric department.
            </p>







            <div
              className="
                mt-8
                space-y-6
              "
            >




              <div className="flex gap-4 items-center">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-white/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Phone size={22}/>
                </div>


                <div>

                  <p className="text-pink-100 text-sm">
                    Helpline
                  </p>

                  <p className="font-semibold">
                    +880 1234 567890
                  </p>

                </div>

              </div>








              <div className="flex gap-4 items-center">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-white/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Mail size={22}/>
                </div>


                <div>

                  <p className="text-pink-100 text-sm">
                    Email
                  </p>

                  <p className="font-semibold">
                    pediatric@hospital.com
                  </p>

                </div>

              </div>








              <div className="flex gap-4 items-center">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-white/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <MapPin size={22}/>
                </div>


                <div>

                  <p className="text-pink-100 text-sm">
                    Department
                  </p>

                  <p className="font-semibold">
                    Pediatrics Department
                  </p>

                </div>

              </div>








              <div className="flex gap-4 items-center">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-white/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Clock3 size={22}/>
                </div>


                <div>

                  <p className="text-pink-100 text-sm">
                    Visiting Hours
                  </p>

                  <p className="font-semibold">
                    9:00 AM - 8:00 PM
                  </p>

                </div>

              </div>



            </div>


          </div>









          {/* Form */}

          <div
            className="
              lg:col-span-2
              bg-white
              rounded-3xl
              p-6
              sm:p-10
              border
              border-gray-100
              shadow-sm
            "
          >


            <form className="space-y-6">






              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-5
                "
              >


                <input
                  type="text"
                  placeholder="Parent Name"
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    outline-none
                    focus:ring-2
                    focus:ring-pink-500
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
                    outline-none
                    focus:ring-2
                    focus:ring-pink-500
                  "
                />


              </div>








              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-5
                "
              >


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
                  "
                />



                <input
                  type="text"
                  placeholder="Baby Age"
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








              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-5
                "
              >


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
                placeholder="Describe your baby's health concern"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  outline-none
                  focus:ring-2
                  focus:ring-pink-500
                "
              />







              <button
                type="submit"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-pink-600
                  hover:bg-pink-700
                  text-white
                  px-8
                  py-3.5
                  rounded-xl
                  font-semibold
                  transition
                "
              >

                <Send size={20}/>
                Submit Appointment Request

              </button>



            </form>


          </div>


        </div>


      </div>


    </section>

  );

};


export default AppointmentForm;