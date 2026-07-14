import React from "react";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Eye,
} from "lucide-react";

const AppointmentForm = () => {

  return (

    <section className="
      py-16
      sm:py-20
      bg-white
      px-4
      sm:px-6
      lg:px-8
    ">

      <div className="max-w-7xl mx-auto">


        {/* Header */}

        <div className="
          max-w-3xl
          mx-auto
          text-center
          mb-12
        ">

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

            <Eye size={16}/>
            LASIK Consultation

          </span>



          <h2 className="
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-gray-900
          ">

            Book Your LASIK Appointment

          </h2>



          <p className="
            mt-4
            text-gray-600
            text-base
            sm:text-lg
          ">

            Schedule a consultation with our experienced ophthalmologists
            to determine if LASIK is the right vision correction option for you.

          </p>

        </div>







        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        ">


          {/* Contact Info */}

          <div className="
            bg-blue-600
            rounded-3xl
            p-8
            text-white
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
              Get in touch with our LASIK specialists for expert eye care.
            </p>




            <div className="
              mt-8
              space-y-6
            ">


              <div className="flex items-center gap-4">

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
                    Phone
                  </p>

                  <p className="font-semibold">
                    +880 1234 567890
                  </p>
                </div>

              </div>





              <div className="flex items-center gap-4">

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
                    lasik@hospital.com
                  </p>
                </div>

              </div>






              <div className="flex items-center gap-4">

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
                    Department
                  </p>

                  <p className="font-semibold">
                    Ophthalmology Department
                  </p>
                </div>

              </div>






              <div className="flex items-center gap-4">

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
                    Working Hours
                  </p>

                  <p className="font-semibold">
                    9:00 AM – 8:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>








          {/* Form */}

          <div className="
            lg:col-span-2
            bg-gray-50
            rounded-3xl
            p-8
            border
            border-gray-100
          ">

            <form className="space-y-6">


              <div className="
                grid
                sm:grid-cols-2
                gap-5
              ">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>





              <div className="
                grid
                sm:grid-cols-2
                gap-5
              ">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200"
                />

                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200"
                >

                  <option>Choose Service</option>

                  <option>LASIK Consultation</option>

                  <option>LASIK Surgery</option>

                  <option>Vision Assessment</option>

                </select>

              </div>







              <div className="
                grid
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
                    className="w-full pl-10 px-4 py-3 rounded-xl border border-gray-200"
                  />

                </div>





                <input
                  type="time"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200"
                />

              </div>






              <textarea
                rows="5"
                placeholder="Describe your vision problem or ask any questions..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
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
                Book Appointment

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

};

export default AppointmentForm;